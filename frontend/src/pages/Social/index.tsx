import Layout from "../../components/Layout";
import Search from "../../components/Search";
import React, {useEffect, useState} from "react";
import {useFollowing} from "./hooks/useFollowing";
import {useNavigate} from "react-router-dom";
import FriendListItem from "../FriendSearch/components/FriendListItem";
import {BackendRequest} from "../../lib/api";
import {joinPoll} from "../../lib/poll";
import PollSection from "./components/PollSection";

const Social = () => {
    const navigate = useNavigate();
    const { following, setFollowing } = useFollowing();
    
    const handleSubmit = (friend: string) => {
        localStorage.setItem('friendSearch', friend)
        navigate('/social-search');
    }

    return (
        <>
            <Layout back={false}>
                <Search placeholder={'Search for people...'} submit={handleSubmit}/>
                <div className='mt-4'>
                    <PollSection />
                </div>
                <div className='flex flex-col mt-2'>
                    <p className='text-xl font-semibold'>Following</p>
                        {
                            following != null && following.map((user: any) => (
                                <FriendListItem
                                    key={user.username}
                                    user={user}
                                    following={following}
                                    setFollowing={setFollowing} />
                            ))
                        }
                </div>
            </Layout>
        </>
    )
}

export default Social;