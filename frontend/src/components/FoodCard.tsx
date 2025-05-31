import React, { useState } from "react";
import FoodInfoModal from "./FoodInfoModal";


const FoodCard = ({ food }: { food: any}) => {
    const { imgUrl, name, price } = food;
    const { name: storeName } = food.storeInfo;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className='flex flex-col w-full overflow-hidden h-56' onClick={() => setIsOpen(true)}>
                <div className='h-32 w-full rounded-lg border flex justify-center items-center bg-gray-100 overflow-hidden'>
                    <img
                        src={imgUrl}
                        alt={name}
                        className='object-cover w-full h-full'
                    />
                </div>

                <div className='flex-grow flex flex-col justify-between'>
                    <div>
                        <p className='text-xl font-bold tracking-tighter'>{ name }</p>
                        <p className='text-sm text-gray-700 truncate'>{ storeName }</p>
                        <p className='text-xs text-gray-700'>£{ price }</p>
                    </div>
                </div>
            </div>

            <FoodInfoModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                food={food}
            />
        </div>
    )
};

export default FoodCard;