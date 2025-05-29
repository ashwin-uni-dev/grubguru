import React from 'react';
import { useFoods } from './hooks/useFoods';
import FoodListItem from '../../components/FoodListItem';
import Layout from "../../components/Layout";

const Food = () => {
    const { foods } = useFoods();

    return (
        <Layout back={true}>
            <div>
                <h1 className='text-2xl font-bold tracking-tighter'>Your Food</h1>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-4'>
                    {
                        foods.map((food: any, index) => (
                            <FoodListItem {...food} key={index} />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Food;
