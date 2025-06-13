import React from 'react';

const FriendSkeleton = () => {
    return (
        <div className='flex flex-row justify-between items-center py-2 px-4 rounded-lg bg-gray-50 animate-pulse mt-2'>
            <div className='flex flex-col'>
                <div className='h-4 bg-gray-200 rounded w-24 mb-1'></div>
                <div className='h-3 bg-gray-200 rounded w-32'></div>
            </div>

            <div className='w-8 h-8 rounded-lg bg-gray-200'></div>
        </div>
    );
};

export default FriendSkeleton;