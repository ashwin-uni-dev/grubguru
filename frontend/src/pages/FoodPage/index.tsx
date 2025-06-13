import React, {useEffect, useState} from 'react';
import { Store, MapPin, Heart, Pin, X } from 'lucide-react';
import BackablePage from "../../components/BackablePage";
import Layout from "../../components/Layout";
import { BackendRequest } from "../../lib/api";
import { useLiked } from './hooks/useLiked';
import ReviewPanel from "./components/reviewPanel";
import {useUserBoards} from "./hooks/useUserBoards";
import BoardSelection from "./components/BoardSelection";
import { useNavigate } from 'react-router-dom';
import {usePollContext} from "../../contexts/PollContext";

const FoodInfo = () => {
    const food = JSON.parse(localStorage.getItem('selectedFood') || '{}');
    const navigate = useNavigate();
    const { imgUrl, name, price, desc, uberUrl, _id: foodId } = food;
    const { name: storeName, longitude, latitude, address } = food.storeInfo || {};
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    const { liked, setLiked } = useLiked(foodId);
    const [bookmarked, setBookmarked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedBoard, setSelectedBoard] = useState<string>('');
    const {userBoards} = useUserBoards();
    const { voteFood, votedFoods, isPollMode } = usePollContext();

    const likeFood = () => {
        BackendRequest.to('users/likes').post({ foodId }).execute();
        setLiked(!liked);
    };

    const handleBookmark = () => {
        setShowModal(true);
    };

    const viewStore = () => {
        localStorage.setItem('selectedStore', JSON.stringify(food.storeInfo));
        navigate('/food-view?source=store');
    }

    return (
        <BackablePage title={<p className="font-semibold">{name}</p>}>
            <Layout back={true}>
                <div className='flex flex-col gap-4'>
                    {imgUrl && (
                        <img src={imgUrl} alt={name} className="w-full h-60 object-cover rounded-xl" />
                    )}

                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
                            <p className="text-sm text-gray-500 mt-1">£{price}</p>
                        </div>
                        <div className="flex items-center gap-4">

                            <button onClick={handleBookmark}>
                                <Pin
                                    size={22}
                                    className="transition-colors"
                                    color={bookmarked ? 'gold' : 'gray'}
                                    fill={bookmarked ? 'gold' : 'none'}
                                />
                            </button>
                            <button onClick={likeFood}>
                                <Heart
                                    size={22}
                                    className="transition-colors"
                                    color={liked ? 'red' : 'gray'}
                                    fill={liked ? 'red' : 'none'}
                                />
                            </button>
                        </div>
                        </div>
                    </div>
                <div className="flex flex-col gap-4">
                    {desc && <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>}

                    <ReviewPanel />

                    <div className="text-sm text-gray-600 space-y-2">
                        <div className="flex items-center gap-2">
                            <div className='bg-purple-500 p-1 rounded-lg' onClick={viewStore}>
                                <Store size={18} color='white' />
                            </div>
                            <span>{storeName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href={googleMapsUrl} target="_blank">
                                <div className='bg-red-500 p-1 rounded-lg'>
                                    <MapPin size={18} color='white' />
                                </div>
                            </a>
                            <span>{address}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        {uberUrl &&
                            <a href={uberUrl} target="_blank">
                                <div className='flex items-center justify-center p-2 w-full bg-black text-white font-semibold rounded-lg'>
                                    View on Uber Eats
                                </div>
                            </a>
                        }
                        {
                            isPollMode && !votedFoods.includes(food.uberUrl) &&
                                <button className='bg-purple-500 text-white font-semibold rounded-lg p-2 whitespace-nowrap' onClick={() => voteFood(food)}>
                                    Vote For Food In Poll
                                </button>
                        }
                        {
                            isPollMode && votedFoods.includes(food.uberUrl) &&
                            <button className='bg-purple-900 text-white font-semibold rounded-lg p-2 whitespace-nowrap'>
                                You have voted for this food
                            </button>
                        }
                    </div>
                </div>
            </Layout>
            {
                showModal && <BoardSelection boards={userBoards} closeModal={() => setShowModal(false)} />
            }
        </BackablePage>
    );
};

export default FoodInfo;
