import BackablePage from "../../components/BackablePage";
import Layout from "../../components/Layout";
import FoodListItem from "../../components/FoodListItem";
import FoodListItemSkeleton from "../../components/skeletons/FoodItemSkeleton";
import React from "react";
import { useFoods } from './hooks/useFoods';

const FoodListPage = () => {
    const { foods, name } = useFoods();

    return (
        <BackablePage title={<p className='font-semibold'>{ name }</p>}>
            <Layout back={true}>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-4 overflow-y-scroll max-h-screen pb-5'>
                    {
                        foods.length ? foods.map((food: any, index) => (
                            <div key={index}>
                                <FoodListItem food={food} />
                                <hr className='my-4'/>
                            </div>
                        )) : (
                            <div className='flex flex-col gap-4'>
                                <FoodListItemSkeleton/><FoodListItemSkeleton/><FoodListItemSkeleton/>
                            </div>
                        )
                    }
                </div>
            </Layout>
        </BackablePage>
    )
}

export default FoodListPage;