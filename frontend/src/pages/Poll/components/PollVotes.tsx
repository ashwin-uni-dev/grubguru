import {useNavigate} from "react-router-dom";
import React from 'react'; // Explicitly import React

interface PollVotesProps {
    votes: {
        [storeUrl: string]: {
            count: number;
            storeInfo: {
                name: string;
                storeUrl: string; // Ensure storeUrl exists for the key
                servesCuisine: string[];
                // Add any other properties of storeInfo you want to display, e.g., imageUrl, address
            };
        };
    };
}

const PollVotes: React.FC<PollVotesProps> = ({votes}) => {
    const navigate = useNavigate();
    const keys = Object.keys(votes);

    const viewStore = (storeInfo: any) => {
        localStorage.setItem('selectedStore', JSON.stringify(storeInfo));
        navigate('/food-view?source=store');
    }

    if (keys.length === 0) {
        return (
            <p className="text-gray-500 italic mt-4">No votes have been cast yet.</p>
        );
    }

    return (
        <div className="flex flex-col gap-4 mt-4"> {/* Added gap for spacing between items */}
            {
                keys.map((storeUrl: string, index: number) => {
                    const voteEntry = votes[storeUrl];
                    const storeInfo = voteEntry.storeInfo;

                    return (
                        <div
                            key={storeUrl}
                            className='flex flex-col md:flex-row justify-between items-start md:items-center
                                       bg-white rounded-xl p-5 border border-gray-200
                                       transition-all duration-300 ease-in-out'
                        >
                            <div className='flex-grow mb-3 md:mb-0'>
                                <p className='font-bold text-lg text-gray-800 mb-1'>
                                    {storeInfo.name}
                                </p>
                                <p className='text-purple-600 font-semibold text-md mb-2'>
                                    {voteEntry.count} {voteEntry.count === 1 ? 'vote' : 'votes'}
                                </p>
                                {storeInfo.servesCuisine && storeInfo.servesCuisine.length > 0 && (
                                    <p className='text-gray-500 text-sm'>
                                        {storeInfo.servesCuisine.join(', ')}
                                    </p>
                                )}
                            </div>

                            <div className='flex flex-row gap-2 mt-3 md:mt-0'>
                                <button
                                    onClick={() => viewStore(storeInfo)}
                                    className='bg-purple-500 hover:bg-purple-600 text-white font-semibold
                                               py-2 px-5 rounded-lg whitespace-nowrap
                                               transition-all duration-200 ease-in-out transform hover:scale-105
                                               focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75'
                                >
                                    View Store
                                </button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default PollVotes;
