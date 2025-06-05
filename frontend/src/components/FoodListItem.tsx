import React, { useState, useEffect } from 'react';
import Image from "./Image";
import {useNavigate} from "react-router-dom";

const FoodListItem = ({ food }: { food: any }) => {
    const navigate = useNavigate();
    const { imgUrl, name, price, kcal } = food;
    const { name: storeName } = food.storeInfo;

    const openFood = () => {
        localStorage.setItem('selectedFood', JSON.stringify(food));
        navigate('/food-info');
    }

    return (
            <div className='flex w-full overflow-hidden' onClick={() => openFood()}>
                <div className='flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32
                                rounded-lg overflow-hidden
                                flex justify-center items-center'>
                    <Image url={imgUrl} />
                </div>

                <div className='flex-grow px-2 flex flex-col justify-between'>
                    <div>
                        <p className='text-lg font-bold tracking-tighter'>{name}</p>
                        <p className='text-sm text-gray-700 truncate'>{storeName}</p>
                        <p className='text-xs text-gray-700'>£{price}</p>
                        { kcal && <p className='text-xs text-gray-700'>{kcal} kcal</p> }
                    </div>
                </div>
            </div>
    );
};

export default FoodListItem;
