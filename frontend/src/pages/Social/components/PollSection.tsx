import React, {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";
import PollVotes from "../../Poll/components/PollVotes";
import {usePollContext} from "../../../contexts/PollContext";

interface PollCodeModalProps {
    isOpen: boolean; // Prop to control modal visibility
    onClose: () => void; // Prop to close the modal
    pollCode: number; // Prop to display the poll code
}

const PollCodeModal: React.FC<PollCodeModalProps> = ({ isOpen, onClose, pollCode }) => {
    const [copySuccess, setCopySuccess] = useState(''); // State to show copy success message

    useEffect(() => {
        if (copySuccess) {
            const timer = setTimeout(() => {
                setCopySuccess('');
            }, 2000);
            return () => clearTimeout(timer); // Clean up the timer
        }
    }, [copySuccess]);

    if (!isOpen) {
        return null;
    }

    const handleCopy = () => {
        const textarea = document.createElement('textarea');
        textarea.value = String(pollCode);
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        try {
            document.execCommand('copy');
            setCopySuccess('Copied!')
        } catch (err) {
            console.error('Failed to copy poll code: ', err);
            setCopySuccess('Failed to copy');
        } finally {
            document.body.removeChild(textarea);
        }
    };

    return (
        <div className='flex bg-black/40 fixed left-0 top-0 w-screen h-screen p-6 items-center justify-center z-50'>
            <div className='flex flex-col bg-white rounded-lg p-6 max-w-md w-full shadow-lg'>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Poll Created!</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close modal"
                    >
                        X
                    </button>
                </div>

                <p className="text-gray-700 mb-4">Share this code with your friends to invite them to your poll.</p>

                <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 mb-4 flex items-center justify-between font-mono text-lg text-purple-800 break-all select-all">
                    <span className="flex-grow pr-2">{pollCode}</span>
                    <button
                        onClick={handleCopy}
                        className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-3 py-2 text-sm ml-2 flex items-center gap-1 transition-colors duration-200"
                        aria-label="Copy poll code to clipboard"
                    >
                        {copySuccess || 'Copy'}
                    </button>
                </div>

                <button
                    onClick={onClose}
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                    Got it!
                </button>
            </div>
        </div>
    );
};

interface JoinPollModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const JoinPollModal= ({ isOpen, onClose }: JoinPollModalProps) => {
    const [inputCode, setInputCode] = useState('');
    const [error, setError] = useState('');
    const { joinPoll } = usePollContext();

    if (!isOpen) {
        return null;
    }

    const handleJoinClick = () => {
        if (!inputCode.trim()) {
            setError('Please enter a poll code.');
            return;
        }

        setError('');
        joinPoll(Number(inputCode));
        setInputCode('');
        onClose();
    };

    return (
        <div className='flex bg-black/40 fixed left-0 top-0 w-screen h-screen p-6 items-center justify-center z-50'>
            <div className='flex flex-col bg-white rounded-lg p-6 max-w-md w-full shadow-lg'>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Join a Poll</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close modal"
                    >
                        x
                    </button>
                </div>

                <p className="text-gray-700 mb-4">Enter the poll code provided by your friend:</p>

                <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => {
                        setInputCode(e.target.value);
                        setError(''); // Clear error when user types
                    }}
                    placeholder="e.g., 123456"
                    className={`border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                />
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <button
                    onClick={handleJoinClick}
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                    Join Poll
                </button>
            </div>
        </div>
    );
};


const PollSection = () => {
    const [pollCode, setPollCode] = useState(0);
    const [showPollCodeModal, setShowPollCodeModal] = useState(false);
    const [showJoinPollModal, setShowJoinPollModal] = useState(false);
    const { isPollMode, getActivePollCode, joinPoll }  = usePollContext();

    const createPoll = async () => {
        const code = await BackendRequest
            .to('polls')
            .post({})
            .execute();

        joinPoll(code);
        setPollCode(code);
        setShowPollCodeModal(true);
    }

    return (
        <>
            <div className='border w-full flex flex-row justify-between py-2 px-4 items-center'>
                <p className='text-lg font-semibold mr-3'>Polls</p>
                <div>
                    {
                        isPollMode ?
                            <p className='text-purple-500 font-semibold'>Active Poll Code: {getActivePollCode()}</p>
                            :
                            <div className='flex flex-row items-center gap-2'>
                                <button className='text-purple-500 font-semibold' onClick={createPoll}>
                                    Create a poll
                                </button>
                                <p className='text-gray-200'>
                                    |
                                </p>
                                <button className='text-purple-500 font-semibold' onClick={() => setShowJoinPollModal(true)}>
                                    Join a poll
                                </button>
                            </div>

                    }
                </div>
            </div>
            { showPollCodeModal && <PollCodeModal isOpen={showPollCodeModal} onClose={() => setShowPollCodeModal(false)} pollCode={pollCode} /> }
            { showJoinPollModal && (
                <JoinPollModal
                    isOpen={showJoinPollModal}
                    onClose={() => setShowJoinPollModal(false)}
                />
            )}
        </>
    )
}

export default PollSection;