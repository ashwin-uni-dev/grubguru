import React from "react";
import {useNavigate} from "react-router-dom";

const VoteEntry = ({ voteEntry }: any) => {
    const storeInfo = voteEntry.storeInfo;
    const storeUrl = storeInfo.storeUrl;
    const navigate = useNavigate();

    const viewStore = (storeInfo: any) => {
        localStorage.setItem('selectedStore', JSON.stringify(storeInfo));
        navigate('/food-view?source=store');
    }

    return (
        <div
            key={storeUrl}
            className='flex flex-col md:flex-row justify-between items-start md:items-center
                                       bg-white rounded-xl p-4 border border-gray-200
                                       transition-all duration-300 ease-in-out'
        >
            <div className='flex-grow mb-3 md:mb-0'>
                <p className='font-bold text-lg tracking-tighter'>
                    {storeInfo.name}
                </p>
                <p className='text-purple-600 font-semibold text-md mb-1'>
                    {voteEntry.count} {voteEntry.count === 1 ? 'vote' : 'votes'}
                </p>
                {storeInfo.servesCuisine && storeInfo.servesCuisine.length > 0 && (
                    <p className='text-gray-500 text-sm'>
                        {storeInfo.servesCuisine.join(', ')}
                    </p>
                )}
            </div>

            <div className='flex flex-row gap-2 mt-1 md:mt-0'>
                <button
                    onClick={() => viewStore(storeInfo)}
                    className='text-purple-500 font-semibold
                                               rounded-lg whitespace-nowrap'
                >
                    View Store
                </button>
            </div>
        </div>
    );
}

export default VoteEntry;