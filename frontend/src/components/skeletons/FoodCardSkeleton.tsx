import React from "react";

const FoodCardSkeleton = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden h-52 animate-pulse">
            <div className="h-32 w-full rounded-lg border bg-gray-200" />

            <div className="flex-grow flex flex-col justify-between mt-2 gap-1">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
                <div className="h-2.5 bg-gray-200 rounded w-1/3" />
            </div>
        </div>
    );
};

export default FoodCardSkeleton;
