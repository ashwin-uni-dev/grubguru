import React from 'react';

const ActionButton = ({ selected, children, ...props }: any) => {
    const baseClasses = 'text-sm whitespace-nowrap py-1 px-2 rounded-lg transition-all duration-300 ease-in-out hover:cursor-pointer';

    const selectedClasses = 'bg-purple-500 text-white';
    const unselectedClasses = 'bg-purple-100 text-purple-500';

    const className = selected
        ? `${baseClasses} ${selectedClasses}`
        : `${baseClasses} ${unselectedClasses}`;

    return (
        <button className={className} { ...props }>
            { children }
        </button>
    );
};

export default ActionButton;
