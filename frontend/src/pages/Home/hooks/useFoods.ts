import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";

export const useFoods = () => {
    const [foods, setFoods] = useState<any[] | null>(null);
    const [likes, setLikes] = useState<any[] | null>(null);

    const fetchFoods = async () => {
        const foods = await BackendRequest
            .to('foods')
            .post({})
            .execute();

        const likedFoods = await BackendRequest
            .to('users/likes')
            .get()
            .execute();

        console.log(foods, likedFoods);
        setFoods(foods);
        setLikes(likedFoods);
    }

    useEffect(() => {
        fetchFoods();
    }, [])

    return { foods, likes };
}