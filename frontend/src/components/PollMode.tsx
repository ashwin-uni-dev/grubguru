import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import {usePollContext} from "../contexts/PollContext";

const PollMode = () => {
    const { pollData } = usePollContext();
    const navigate = useNavigate();
    const [voteCount, setVoteCount] = useState(0);

    useEffect(() => {
        if (pollData && pollData.votes) {
            const votesArray = Object.values(pollData.votes);
            const totalVotes = votesArray.reduce((acc: number, vote: any) => acc + (vote.count || 0), 0);
            setVoteCount(totalVotes);
        } else {
            setVoteCount(0);
        }
    }, [pollData]);

    return (
         <div className='flex flex-row w-screen bg-purple-500 justify-between py-2 px-4 text-white'
              onClick={() => navigate('/live-poll')}>
                <p>Tap here to see your live poll.</p>
                <p>Votes <span className='font-semibold'>{ voteCount }</span></p>
         </div>

    )
}

export default PollMode;
