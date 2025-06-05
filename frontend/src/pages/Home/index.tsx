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
    const { foods, likes } = useFoods();
    let navigate = useNavigate();

    const viewPreset = (preset: any) => {
        localStorage.setItem('selectedPreset', JSON.stringify(preset));
        navigate('/food');
    }

    const handleSubmit = (query: string) => {
        localStorage.setItem('searchQuery', query);
        navigate(`/search-results`);
    }

    return (
        <Layout back={false}>
            <Search placeholder={'Search for food...'} submit={handleSubmit}/>
            <HorizontalSection title='Your presets'>
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
            <HorizontalSection title='Suggested for you'>
                {
                    foods.length ? foods.map((food: any, index) => (
                        <FoodCard food={food} />
                    )) : <div className='w-4/5'><FoodCardSkeleton /></div>
                }
            </HorizontalSection>
            <HorizontalSection title='Your favourites'>
                {
                    likes.length ? likes.map((food: any, index) => (
                        <FoodCard food={food} />
                    )) : <div className='w-4/5'><FoodCardSkeleton /></div>
                }
            </HorizontalSection>
        </Layout>
    )
}

export default Home;
