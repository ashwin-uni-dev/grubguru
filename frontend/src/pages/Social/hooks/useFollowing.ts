import {BackendRequest} from "../../../lib/api";
import {useEffect, useState} from "react";

export const useFollowing = () => {
    const [following, setFollowing] = useState<any[] | null>(null);

    const getFollowing = async () => {
        const friendList = await BackendRequest
            .to('users/friends')
            .get()
            .execute();

        setFollowing(friendList);
    }

    useEffect(() => {
        getFollowing();
    }, []);

    return { following, setFollowing };
}