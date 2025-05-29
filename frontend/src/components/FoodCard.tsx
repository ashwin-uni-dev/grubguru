import React from "react";

interface FoodCardProps {
    imgUrl: string;
    name: string;
    price: number;
    desc: string;
}

const FoodCard = ({ imgUrl, name, price, desc }: FoodCardProps) => {
    return (
        <div className='flex flex-col border rounded-lg overflow-hidden h-56 w-full'>
            <div className='h-32 w-full flex justify-center items-center bg-gray-100 overflow-hidden'>
                <img
                    src={imgUrl}
                    alt={name}
                    className='object-contain w-full h-full'
                />
            </div>

            <div className='p-4 flex-grow flex flex-col justify-between'>
                <div>
                    <p className='text-xl font-bold tracking-tighter'>{ name }</p>
                    <p className='text-sm text-gray-700'>£{ price }</p>
                </div>
                <p className='text-xs line-clamp-3 text-neutral-600 mt-2'>{ desc }</p>
            </div>
        </div>
    )
};

export default FoodCard;