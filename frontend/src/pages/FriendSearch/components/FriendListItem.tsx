import {UserPlus, UserMinus} from "lucide-react";
import {BackendRequest} from "../../../lib/api";
import {useEffect, useState} from "react";
import FriendSkeleton from "./FriendSkeleton";

const FriendListItem = ({ user, following, setFollowing }: any) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const followUser = () => {
        BackendRequest
            .to('users/friends')
            .post({
                username: user.username
            })
            .execute();

        if (following)
            setFollowing([...following, user]);
        else setFollowing([user]);
    }

    const removeUser = () => {
        BackendRequest
            .to('users/friends')
            .delete({
                username: user.username
            })
            .execute();

        // @ts-ignore
        setFollowing(oldFriends => oldFriends.filter(friend => friend.username !== user.username));
    }

    useEffect(() => {
        if (following) setIsFollowing(following.map((u: any) => u.username).includes(user.username));
    }, [following])

    return (
        <>
            {
                following != null ?
                    <div className='flex flex-row justify-between items-center py-2'>
                        <div>
                            <p className='font-semibold text-purple-500'>@{user.username}</p>
                            {
                                isFollowing ?
                                <p className='text-gray-500 text-xs'>You follow this user</p>
                                    : <p className='text-gray-500 text-xs'>{ user.followers.length } followers</p>
                            }
                        </div>
                        <div className='flex flex-row text-sm gap-2 align-center rounded-lg bg-purple-500 p-2'>
                            {
                                !isFollowing ? <UserPlus size={18} onClick={followUser} color='white'/>
                                    : <UserMinus size={18} color='white' onClick={removeUser}/>
                            }
                        </div>
                    </div>
                    : <FriendSkeleton/>
            }
        </>
    )
}

export default FriendListItem;