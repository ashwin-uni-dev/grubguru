import React from 'react';

const FoodListItemSkeleton = () => {
    return (
        <div className="flex w-full overflow-hidden animate-pulse">
            <div className="border rounded-lg w-36 h-28 flex-none bg-gray-200" />

            <div className="flex-grow p-4 flex flex-col justify-between gap-2">
                <div className="space-y-2">
                    <div className="h-3 w-1/3 bg-gray-200 rounded" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded" />
                    <div className="h-3 w-1/4 bg-gray-200 rounded" />
                    <div className="h-3 w-1/4 bg-gray-200 rounded" />
                </div>
            </div>
        </div>
    );
};

export default FoodListItemSkeleton;
