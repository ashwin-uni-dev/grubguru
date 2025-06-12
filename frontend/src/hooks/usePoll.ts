import { useEffect, useState } from "react";
import {BackendRequest, ServerEvent} from "../lib/api";
import {getActivePollCode, isPollMode} from "../lib/poll";

export const usePoll = () => {
    const [pollData, setPollData] = useState({
        votes: [],
        options: []
    });

    const addOption = (food: any) => {
        const pollCode = getActivePollCode();

        BackendRequest
            .to(`polls/${pollCode}/options`)
            .post({ food })
            .execute();
    }

    const getPoll = async () => {
        const pollCode = getActivePollCode();
        
        const poll = await BackendRequest
            .to(`polls/${pollCode}`)
            .get()
            .execute();

        setPollData(poll);
    }

    useEffect(() => {
        if (!isPollMode()) return;
        const pollCode = getActivePollCode();
        const pollEvent = ServerEvent.subscribe(`events/polls?code=${pollCode}`);

        pollEvent.onMessage((data: any) => {
            setPollData(JSON.parse(data.data));
        });

        getPoll();

        return () => {
            pollEvent.close();
        }
    }, [])
    
    return {pollData, addOption};
};