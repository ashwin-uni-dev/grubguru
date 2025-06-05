import React, { useState } from 'react';
import { Store, MapPin, Heart } from 'lucide-react';
import BackablePage from "../../components/BackablePage";
import Layout from "../../components/Layout";
import {BackendRequest} from "../../lib/api";
import { useLiked } from './hooks/useLiked';

const FoodInfo = () => {
    const food = JSON.parse(localStorage.getItem('selectedFood') || '{}');
    const { imgUrl, name, price, desc, uberUrl, _id: foodId } = food;
    const { name: storeName, longitude, latitude, address } = food.storeInfo || {};

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    const {liked, setLiked} = useLiked(foodId);

    const likeFood = () => {
        BackendRequest.to('users/likes')
            .post({ foodId })
            .execute();

        setLiked(!liked);
    }

    return (
        <BackablePage title={<p className="font-semibold">{name}</p>}>
            <Layout back={true}>
                <div className='flex flex-col gap-4'>
                    {imgUrl && (
                        <img
                            src={imgUrl}
                            alt={name}
                            className="w-full h-60 object-cover rounded-xl"
                        />
                    )}

                    <div className="flex justify-between items-center">
                        <div>
                            {name && <h2 className="text-xl font-semibold text-gray-900">{name}</h2>}
                            {price !== undefined && (
                                <p className="text-sm text-gray-500 mt-1">£{price}</p>
                            )}
                        </div>
                        <button onClick={() => likeFood()}>
                            <Heart
                                size={22}
                                className="transition-colors"
                                color={liked ? 'red' : 'gray'}
                                fill={liked ? 'red' : 'none'}
                            />
                        </button>
                    </div>

                    {desc && (
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {desc}
                        </p>
                    )}

                    <div className="text-sm text-gray-600 space-y-2">
                        <div className="flex items-center gap-2">
                            <Store size={16} />
                            <span>{storeName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{address}</span>
                        </div>
                    </div>

                    <div className="flex flex-col text-sm text-purple-600 underline space-y-1">
                        {uberUrl && (
                            <a href={uberUrl} target="_blank" rel="noopener noreferrer">
                                View on Uber Eats
                            </a>
                        )}
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                            Directions on Google Maps
                        </a>
                    </div>
                </div>
            </Layout>
        </BackablePage>
    );
};

export default FoodInfo;
