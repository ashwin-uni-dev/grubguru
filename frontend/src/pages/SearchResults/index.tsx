import React from 'react';
import { useFoods } from './hooks/useFoods';
import FoodListItem from '../../components/FoodListItem';
import Layout from "../../components/Layout";
import FoodListItemSkeleton from "../../components/skeletons/FoodItemSkeleton";
import BackablePage from "../../components/BackablePage";
import Search from "../../components/Search";
import {useNavigate} from "react-router-dom";

const SearchResults = () => {
    const { searchQuery, setSearchQuery, foods, setFoods } = useFoods();
    const navigate = useNavigate();

    const handleSubmit = (query: string) => {
        localStorage.setItem('searchQuery', query);
        setFoods(null);
        setSearchQuery(query);
    }

    return (
        <BackablePage title={<Search defaultValue={searchQuery} submit={handleSubmit} />}>
            <Layout back={true}>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-4'>
                    {
                        foods != null ?
                            <>
                                <p>{foods.length} results for {searchQuery}</p>
                                {
                                    foods.map((food: any, index) => (
                                        <div key={index}>
                                            <FoodListItem food={food} />
                                            <hr className='my-4'/>
                                        </div>
                                    ))
                                }
                            </>
                        : (
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

export default SearchResults;
