import React from 'react';
import PresetCard from "./components/PresetCard";
import {usePresets} from "./hooks/usePresets";
import {useFoods} from "./hooks/useFoods";
import FoodCard from "../../components/FoodCard";
import {useNavigate} from "react-router-dom";
import Layout from "../../components/Layout";

const Home = () => {
    const { presets } = usePresets();
    const { foods } = useFoods();
    let navigate = useNavigate();

    return (
        <Layout back={false}>
            <div>
                <h1 className='text-2xl font-bold tracking-tighter'>Hello Jason</h1>
                <div className='flex gap-4 mt-4 overflow-x-auto'>
                    <div
                        className='bg-purple-500 p-4 rounded-lg text-white text-xs flex flex-col items-center justify-center'
                        onClick={() => navigate('/preset')}
                    >
                        <p className='text-lg'>+</p>
                    </div>
                    {
                        presets.map((preset: any, index) => (
                            <PresetCard
                                key={index} name={preset.id} color='blue'
                                onClick={() => navigate('/food')}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-2xl font-bold tracking-tighter'>Suggested For You</h1>
                <div className='grid grid-cols-2 gap-4 mt-4 flex-wrap'>
                    {
                        foods.map((food: any, index) => (
                            index < 3 && <FoodCard food={food} />
                        ))
                    }
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-2xl font-bold tracking-tighter'>Your Favourites</h1>
                <div className='grid grid-cols-2 gap-4 mt-4 flex-wrap'>
                    {
                        foods.map((food: any, index) => (
                            index >= 3 && <FoodCard food={food} />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Home;
