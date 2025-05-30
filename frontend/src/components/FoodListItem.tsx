import React, { useState, useEffect } from 'react';
import FoodInfoModal from "./FoodInfoModal";

const FoodCard = ({ food }: { food: any }) => {
    const { imgUrl, name, price, desc, uberUrl } = food;
    const { name: storeName, longitude, latitude } = food.storeInfo;
    const [isOpen, setIsOpen] = useState(false);
    const [walkingTime, setWalkingTime] = useState<string | null>(null);

    // Haversine formula
    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const R = 6371; // km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) ** 2 +
            Math.cos(lat1 * Math.PI / 180) *
            Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLon = position.coords.longitude;

                const distKm = calculateDistance(userLat, userLon, latitude, longitude);

                const minutes = Math.round((distKm / 5) * 60);
                setWalkingTime(`${minutes} min walk`);
            },
            () => {
                setWalkingTime('Distance unavailable');
            }
        );
    }, [latitude, longitude]);

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
                        <p className='text-xs text-gray-700 truncate'>{storeName}</p>
                        <p className='text-lg font-bold tracking-tighter'>{name}</p>
                        <p className='text-sm text-gray-700'>£{price}</p>
                    </div>
                    <p className='text-xs text-purple-600 italic'>
                        {walkingTime || 'Calculating...'}
                    </p>
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

export default FoodCard;
