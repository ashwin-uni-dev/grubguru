import React from 'react';

const VoteEntrySkeleton: React.FC = () => {
    const skeletonItems = Array.from({ length: 3 });

    return (
        <div className="flex flex-col gap-4">
            {skeletonItems.map((_, index) => (
                <div
                    key={index} // Using index is okay for skeletons as they don't reorder
                    className='flex flex-col md:flex-row justify-between items-start md:items-center
                               bg-white rounded-xl p-4 border border-gray-200
                               animate-pulse' // Apply pulse animation to the whole item
                >
                    <div className='flex-grow mb-3 md:mb-0'>
                        <div className='h-6 bg-gray-200 rounded w-4/5 mb-2'></div>
                        <div className='h-5 bg-gray-200 rounded w-1/3 mb-1'></div>
                        <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                    </div>

                    <div className='w-24 h-10 bg-gray-200 rounded-lg mt-1 md:mt-0'></div>
                </div>
            ))}
        </div>
    );
};

export default VoteEntrySkeleton;