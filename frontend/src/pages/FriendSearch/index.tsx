import React from 'react';
import Layout from "../../components/Layout";
import BackablePage from "../../components/BackablePage";
import Search from "../../components/Search";
import {useResults} from "./hooks/useResults";
import FriendListItem from "./components/FriendListItem";
import FriendSkeleton from "./components/FriendSkeleton";
import {useFollowing} from "../Social/hooks/useFollowing";

const FriendSearch = () => {
    const { results, setResults, searchQuery, setSearchQuery } = useResults();
    const { following, setFollowing } = useFollowing();

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
                        results != null && following != null ?
                            <>
                                <p>{results.length} results for {searchQuery}</p>
                                {
                                    results.map((result: any, index) => (
                                        <>
                                            <FriendListItem key={index}
                                                            user={result}
                                                            following={following}
                                                            setFollowing={setFollowing} />
                                            <hr />
                                        </>
                                    ))
                                }
                            </>
                            : (
                                <div className='flex flex-col gap-4'>
                                    <FriendSkeleton/><FriendSkeleton/><FriendSkeleton/>
                                </div>
                            )
                    }
                </div>
            </Layout>
        </BackablePage>
    )
}

export default FriendSearch;
