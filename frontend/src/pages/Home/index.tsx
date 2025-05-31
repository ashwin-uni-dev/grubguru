import React from 'react';
import {usePresets} from "./hooks/usePresets";
import {useFoods} from "./hooks/useFoods";
import FoodCard from "../../components/FoodCard";
import {useNavigate} from "react-router-dom";
import Layout from "../../components/Layout";
import HorizontalSection from "../../components/HorizontalSection";
import Badge from '../../components/Badge';
import Search from "../../components/Search";

const Home = () => {
    const { presets } = usePresets();
    const { foods } = useFoods();
    let navigate = useNavigate();

    return (
        <Layout back={false}>
            <Search placeholder={'Search for food...'}/>
            <HorizontalSection title='Your Presets'>
                <Badge onClick={() => navigate('/preset')}>
                    <p className='font-bold text-xl'>+</p>
                </Badge>
                {
                    presets.map((preset: any, index) => (
                        <Badge key={index} onClick={() => navigate('/food')}>
                            <p className='text-sm'>{ preset.id }</p>
                        </Badge>
                    ))
                }
            </HorizontalSection>
            <HorizontalSection title='Suggested For You'>
                {
                    foods.map((food: any, index) => (
                        <FoodCard food={food} />
                    ))
                }
            </HorizontalSection>
            <HorizontalSection title='Your Favourites'>
                {
                    foods.map((food: any, index) => (
                        <FoodCard food={food} />
                    ))
                }
            </HorizontalSection>
        </Layout>
    )
}

export default Home;
