import React from "react";

const FriendSkeleton = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden animate-pulse py-2">
            <div className="flex-grow flex flex-col mt-2 gap-1">
                <div className="h-4 bg-gray-200 rounded w-1/4" />
                <div className="h-3 bg-gray-200 rounded w-3/4" />
            </div>
        </div>
    );
};

export default FriendSkeleton;
