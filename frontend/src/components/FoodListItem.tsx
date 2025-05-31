import React, { useState, useEffect } from 'react';
import FoodInfoModal from "./FoodInfoModal";
import Image from "./Image";

const FoodListItem = ({ food }: { food: any }) => {
    const { imgUrl, name, price, kcal , desc, uberUrl } = food;
    const { name: storeName, longitude, latitude } = food.storeInfo;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='flex w-full overflow-hidden' onClick={() => setIsOpen(true)}>
                <div className='border rounded-lg w-36 flex-none h-full flex justify-center items-center overflow-hidden'>
                    <Image url={imgUrl} />
                </div>

                <div className='flex-grow p-4 flex flex-col justify-between'>
                    <div>
                        <p className='text-xs text-gray-700 truncate'>{storeName}</p>
                        <p className='text-lg font-bold tracking-tighter'>{name}</p>
                        <p className='text-sm text-gray-700'>£{price}</p>
                        { kcal && <p className='text-sm text-gray-700'>{kcal} kcal</p> }
                    </div>
                </div>
            </div>

            <FoodInfoModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                food={food}
            />
        </>
    );
};

export default FoodListItem;
