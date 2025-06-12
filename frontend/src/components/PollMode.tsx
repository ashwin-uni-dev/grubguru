import { usePoll } from "../hooks/usePoll";

const PollMode = () => {
    const { pollData } = usePoll();
    return (
        <div className='fixed top-[10vh] w-screen flex justify-center z-40'>
            <div className='bg-purple-500 rounded-full p-4 text-white text-xl shadow-lg'>
                <p>You are currently in a poll.</p>
                <div className='flex flex-row justify-around items-center text-sm'>
                    <p>Votes <span className='font-bold'>{ pollData.votes.length }</span></p>
                    <p>Options <span className='font-bold'>{ pollData.options.length }</span></p>
                </div>
            </div>
        </div>
    )
}

export default PollMode;
