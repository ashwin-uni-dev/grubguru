import React, { useState } from "react";
import FoodInfoModal from "./FoodInfoModal";
import Image from "./Image";

const FoodCard = ({ food }: { food: any }) => {
    const { imgUrl, name, price } = food;
    const { name: storeName } = food.storeInfo;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className='flex flex-col w-full overflow-hidden h-52' onClick={() => setIsOpen(true)}>
                <div className='w-full h-32 rounded-lg border flex justify-center items-center bg-gray-100 overflow-hidden'>
                    <Image url={imgUrl} />
                </div>

                <div className='flex-grow flex flex-col justify-between mt-2'>
                    <p className='text-lg font-semibold truncate'>{name}</p>
                    <p className='text-sm text-gray-700 truncate'>{storeName}</p>
                    <p className='text-xs text-gray-700'>£{price}</p>
                </div>
            </div>

            <FoodInfoModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                food={food}
            />
        </div>
    );
};

export default FoodCard;
