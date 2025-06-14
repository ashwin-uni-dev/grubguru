import React from "react";
import {useNavigate} from "react-router-dom";
import Image from "../../../components/Image";

const VoteEntry = ({ voteEntry }: any) => {
    const storeInfo = voteEntry.storeInfo;
    const storeUrl = storeInfo.storeUrl;
    const navigate = useNavigate();

    const viewStore = (storeInfo: any) => {
        localStorage.setItem('selectedStore', JSON.stringify(storeInfo));
        navigate('/food-view?source=store');
    }

    return (
        <div>
            <div className='flex flex-col w-full overflow-hidden'>
                <div className='w-full rounded-lg h-64 border flex justify-center items-center bg-gray-100 overflow-hidden'>
                    <img className='object-contains' src={storeInfo.image[storeInfo.image.length - 1]} />
                </div>

                <div className='flex-grow flex flex-col justify-between mt-2'>
                    <p className='text-md font-semibold truncate'>{storeInfo.name}</p>
                    <p className='text-purple-500 font-semibold'>{voteEntry.count} votes</p>
                    <p className='text-sm text-gray-500 truncate'>{storeInfo.servesCuisine.join(', ')}</p>
                    <div
                        onClick={() => viewStore(storeInfo)}
                        className='text-purple-500 font-semibold
                                               rounded-lg whitespace-nowrap'
                    >
                        View Store
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VoteEntry;