import React from 'react';

interface FoodCardProps {
    imgUrl: string;
    name: string;
    price: number;
    desc: string;
}

const FoodCard = ({ imgUrl, name, price, desc }: FoodCardProps) => {
    return (
        <div className='border rounded-lg flex w-full overflow-hidden'>
            <div className='w-36 flex-none h-full flex justify-center items-center overflow-hidden'>
                <img
                    src={imgUrl}
                    alt={name}
                    className='w-full h-full object-cover'
                />
            </div>

            <div className='flex-grow p-4 flex flex-col justify-between'>
                <div>
                    <p className='text-lg font-bold tracking-tighter'>{ name }</p>
                    <p className='text-sm text-gray-700'>£{ price }</p>
                </div>
                <p className='text-xs text-neutral-600 line-clamp-2'>{ desc }</p>
            </div>
        </div>
    )
};

export default FoodCard;