import Layout from "../../components/Layout";
import Search from "../../components/Search";
import React from "react";
import {useFollowing} from "./hooks/useFollowing";
import {useNavigate} from "react-router-dom";
import FriendListItem from "../FriendSearch/components/FriendListItem";

const Social = () => {
    const navigate = useNavigate();
    const { following, setFollowing } = useFollowing();
    
    const handleSubmit = (friend: string) => {
        localStorage.setItem('friendSearch', friend)
        navigate('/social-search');
    }

    return (
        <Layout back={false}>
            <Search placeholder={'Search for people...'} submit={handleSubmit}/>
            <div className='flex flex-col py-4'>
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
    )
}

export default Social;