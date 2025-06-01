import React from 'react';
import {usePresets} from "./hooks/usePresets";
import {useFoods} from "./hooks/useFoods";
import FoodCard from "../../components/FoodCard";
import {useNavigate} from "react-router-dom";
import Layout from "../../components/Layout";
import HorizontalSection from "../../components/HorizontalSection";
import Badge from '../../components/Badge';
import Search from "../../components/Search";
import FoodCardSkeleton from "../../components/skeletons/FoodCardSkeleton";
import BadgeSkeleton from "../../components/skeletons/BadgeSkeleton";

const Home = () => {
    const { presets } = usePresets();
    const { foods } = useFoods();
    let navigate = useNavigate();

    const viewPreset = (preset: any) => {
        localStorage.setItem('selectedPreset', JSON.stringify(preset));
        navigate('/food');
    }

    return (
        <Layout back={false}>
            <Search placeholder={'Search for food...'}/>
            <HorizontalSection title='Your Presets'>
                <Badge onClick={() => navigate('/preset')}>
                    <p className='font-bold text-xl'>+</p>
                </Badge>
                {
                    presets.length ? presets.map((preset: any, index) => (
                        <Badge key={index} onClick={() => viewPreset(preset)}>
                            <p className='text-sm'>{ preset.id }</p>
                        </Badge>
                    )) : (
                        <><BadgeSkeleton/><BadgeSkeleton/><BadgeSkeleton/></>
                    )
                }
            </HorizontalSection>
            <HorizontalSection title='Suggested For You'>
                {
                    foods.length ? foods.map((food: any, index) => (
                        <FoodCard food={food} />
                    )) : <FoodCardSkeleton />
                }
            </HorizontalSection>
            <HorizontalSection title='Your Favourites'>
                {
                    foods.length ? foods.map((food: any, index) => (
                        <FoodCard food={food} />
                    )) : <FoodCardSkeleton />
                }
            </HorizontalSection>
        </Layout>
    )
}

export default Home;
