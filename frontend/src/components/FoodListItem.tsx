import React, {useState} from 'react';
import FoodInfoModal from "./FoodInfoModal";

const FoodCard = ({ food }: { food: any }) => {
    const { imgUrl, name, price, desc, uberUrl } = food;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='flex w-full overflow-hidden' onClick={() => setIsOpen(true)}>
                <div className='border rounded-lg w-36 flex-none h-full flex justify-center items-center overflow-hidden'>
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

            <FoodInfoModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                food={food}
            />
        </>
    )
};

export default FoodCard;