import React, {
    useEffect,
    useState,
    useContext,
    createContext,
    ReactNode
} from "react";
import {
    BackendRequest,
    ServerEvent
} from "../lib/api";
import {Outlet} from "react-router-dom";

interface PollData {
    votes: any[];
    options: any[];
}

interface PollContextType {
    pollData: PollData;
    isPollMode: boolean;
    votedFoods: any[];
    voteFood: (food: any) => void;
    joinPoll: (pollCode: number) => void;
    leavePoll: () => void;
    getActivePollCode: () => number | null;
}

const PollContext = createContext < PollContextType | undefined > (undefined);

interface PollProviderProps {
    children: ReactNode;
}

export const PollProvider: React.FC < PollProviderProps > = ({children}) => {
    const [pollData, setPollData] = useState < PollData > ({
        votes: [],
        options: []
    });
    const [isPollMode, setIsPollMode] = useState(!!localStorage.getItem('pollCode'));

    const [votedFoods, setVotedFoods] = useState(() => {
        return JSON.parse(localStorage.getItem('votedFoods') || '[]');
    });

    const getActivePollCode = (): number | null => {
        const pollCode = localStorage.getItem('pollCode');
        return pollCode ? Number(pollCode) : null;
    };

    const voteFood = (food: any) => {
        const pollCode = getActivePollCode();
        if (pollCode === null) {
            console.error("No active poll code found for voting.");
            return;
        }

        setVotedFoods((oldVotedFoods: any) => {
            const newVotedFoods = [...oldVotedFoods, food.uberUrl]
            localStorage.setItem('votedFoods', JSON.stringify(newVotedFoods));
            return newVotedFoods;
        });

        BackendRequest
            .to(`polls/${pollCode}/votes`)
            .post({
                food
            })
            .execute();
    };

    const getPoll = async () => {
        const pollCode = getActivePollCode();
        if (pollCode === null) {
            console.log("No active poll code found, cannot fetch poll.");
            return;
        }

        try {
            const poll = await BackendRequest
                .to(`polls/${pollCode}`)
                .get()
                .execute();
            setPollData(poll);
        } catch (error) {
            console.error("Error fetching poll data:", error);
        }
    };

    const leavePoll = () => {
        localStorage.removeItem('pollCode');
        localStorage.removeItem('votedFoods');
    }

    const joinPoll = (pollCode: number) => {
        localStorage.setItem('pollCode', pollCode.toString());
        setIsPollMode(true);
    };

    useEffect(() => {
        if (!isPollMode) {
            return;
        }

        const pollCode = getActivePollCode();
        if (pollCode === null) {
            console.error("Poll code is null, cannot subscribe to events.");
            return;
        }

        const pollEvent = ServerEvent.subscribe(`events/polls?code=${pollCode}`);

        pollEvent.onMessage((data: any) => {
            try {
                setPollData(JSON.parse(data.data));
            } catch (e) {
                console.error("Failed to parse poll data from server event:", e);
            }
        });

        getPoll();

        return () => {
            pollEvent.close();
        };
    }, [isPollMode]);

    return ( <PollContext.Provider value = {
            {
                pollData,
                voteFood,
                votedFoods,
                joinPoll,
                leavePoll,
                isPollMode,
                getActivePollCode
            }
        } > {
            children
        } </PollContext.Provider>
    );
};

export const PollProviderWrapper: React.FC = () => {
    return (
        <PollProvider>
            <Outlet />
        </PollProvider>
    );
};

// Custom hook to use the Poll Context
export const usePollContext = () => {
    const context = useContext(PollContext);
    if (context === undefined) {
        throw new Error('usePollContext must be used within a PollProvider');
    }
    return context;
};