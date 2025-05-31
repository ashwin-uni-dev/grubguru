import React from "react";

const BadgeSkeleton = () => {
    return (
        <div className="flex min-w-10 h-10 bg-gray-200 rounded-full animate-pulse justify-center items-center">
            <div className="w-4 h-4 bg-gray-300 rounded-full" />
        </div>
    );
};

export default BadgeSkeleton;
