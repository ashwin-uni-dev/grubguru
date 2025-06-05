import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";

export const useLiked = (foodId: string) => {
    const [liked, setLiked] = useState(false);

    const getLikedStatus = async () => {
        const isLiked = await BackendRequest
            .to(`users/1/likes/${foodId}`)
            .get()
            .execute();

        setLiked(isLiked);
    }

    useEffect(() => {
        getLikedStatus();
    }, []);

    return { liked, setLiked };
}