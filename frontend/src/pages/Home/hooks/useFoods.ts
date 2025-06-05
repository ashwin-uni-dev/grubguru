import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";

export const useFoods = () => {
    const [foods, setFoods] = useState([]);
    const [likes, setLikes] = useState([]);

    const fetchFoods = async () => {
        const foods = await BackendRequest
            .to('foods')
            .post({})
            .execute();

        const likedFoods = await BackendRequest
            .to('users/1/likes')
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