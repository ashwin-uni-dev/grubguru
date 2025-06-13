import BackablePage from "../../components/BackablePage";
import React from "react";
import PollVotes from "./components/PollVotes";
import Layout from "../../components/Layout";
import { usePollContext } from "../../contexts/PollContext";
import {useNavigate} from "react-router-dom";

const Poll = () => {
    const { pollData, leavePoll } = usePollContext();
    const navigate = useNavigate();

    const handleLeave = () => {
        leavePoll();
        navigate('/');
    }
    
    return (
        <BackablePage title={<p className='font-semibold'>Active Poll</p>}>
            <Layout back={true}>
                <button onClick={handleLeave} className='bg-red-500 text-sm text-white px-3 py-2 rounded-lg mb-2'>Leave Poll</button>
                <PollVotes pollData={pollData} />
            </Layout>
        </BackablePage>
    )
}


export default Poll;