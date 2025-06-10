import React from 'react';
import Layout from "../../components/Layout";
import FoodListItemSkeleton from "../../components/skeletons/FoodItemSkeleton";
import BackablePage from "../../components/BackablePage";
import Search from "../../components/Search";
import {useResults} from "./hooks/useResults.ts#";
import FriendListItem from "./components/FriendListItem";

const FriendSearch = () => {
    const { results, setResults, searchQuery, setSearchQuery } = useResults();

    const handleSubmit = (query: string) => {
        localStorage.setItem('friendSearch', query);
        setResults(null);
        setSearchQuery(query);
    }

    return (
        <BackablePage title={<Search defaultValue={searchQuery} submit={handleSubmit} />}>
            <Layout back={true}>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                    {
                        results != null ?
                            <>
                                <p>{results.length} results for {searchQuery}</p>
                                {
                                    results.map((result: any, index) => (
                                        <>
                                            <FriendListItem key={index} user={result} />
                                            <hr />
                                        </>
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

export default FriendSearch;
