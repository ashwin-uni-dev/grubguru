import React from 'react';
import { Store, MapPin } from 'lucide-react';

interface FoodInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    food: any
}

const FoodInfoModal = ({ food, isOpen, onClose }: FoodInfoModalProps) => {
    const { imgUrl, name, price, desc, uberUrl } = food;
    const { name: storeName, longitude, latitude, address } = food.storeInfo;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center" onClick={onClose}>
            <div className="bg-white p-4 rounded shadow-lg min-w-[300px] relative" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                >
                    ✕
                </button>
                {imgUrl && <img src={imgUrl} alt={name} className="w-full h-40 object-cover rounded mb-4" />}
                {name && <h2 className="text-xl font-bold mb-2">{name}</h2>}
                {price !== undefined && <p className="text-sm text-gray-700 mb-2">£{price}</p>}
                {desc && <p className="text-sm text-gray-600">{desc}</p>}
                <div className='flex items-center gap-2 text-gray-600 my-4 text-sm'>
                    <Store size={16}/>
                    <span>{ storeName }</span>
                </div>
                <div className='flex items-center gap-2 text-gray-600 my-4 text-sm'>
                    <MapPin  size={16}/>
                    <span>{ address }</span>
                </div>
                <div className='flex flex-col text-sm text-purple-500 underline'>
                    <a href={uberUrl}>View on Uber Eats</a>
                    <a href={googleMapsUrl}>Directions on Google Maps</a>
                </div>
            </div>
        </div>
    );
};

export default FoodInfoModal;
