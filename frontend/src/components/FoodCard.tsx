import React, { useState } from "react";
import Image from "./Image";
import {useNavigate} from "react-router-dom";

const FoodCard = ({ food }: { food: any }) => {
    const navigate = useNavigate();
    const { imgUrl, name, price } = food;
    const { name: storeName } = food.storeInfo;

    const openFood = () => {
        localStorage.setItem('selectedFood', JSON.stringify(food));
        navigate('/food-info');
    }

    return (
        <div>
            <div className='flex flex-col w-full overflow-hidden h-52' onClick={() => openFood()}>
                <div className='w-full h-32 rounded-lg border flex justify-center items-center bg-gray-100 overflow-hidden'>
                    <Image url={imgUrl} />
                </div>

                <div className='flex-grow flex flex-col justify-between mt-2'>
                    <p className='text-md font-semibold truncate'>{name}</p>
                    <p className='text-sm text-gray-700 truncate'>{storeName}</p>
                    <p className='text-xs text-gray-700'>£{price}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
