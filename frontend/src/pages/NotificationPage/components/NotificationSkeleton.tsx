import React from 'react';

const NotificationSkeleton = () => {
    return (
        <div className='flex flex-row gap-2 items-center w-full p-2 rounded-lg bg-gray-50'>
            <div className='w-8 h-8 rounded-full bg-gray-200 animate-pulse'></div>

            <div className='flex flex-col flex-grow'>
                <div className='h-4 bg-gray-200 rounded w-3/4 mb-1 animate-pulse'></div>
                <div className='h-3 bg-gray-200 rounded w-1/2 animate-pulse'></div>
            </div>

            <div className='ml-auto w-16 h-8 bg-gray-200 rounded animate-pulse'></div>
        </div>
    );
};

export default NotificationSkeleton;