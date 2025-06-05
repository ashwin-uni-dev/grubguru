import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";

export const useFoods = () => {
    const [foods, setFoods] = useState<any[] | null>(null);

    const fetchFoods = async () => {
        const foods = await BackendRequest
            .to('foods')
            .post({})
            .execute();

        setFoods(foods);
    }

    useEffect(() => {
        fetchFoods();
    }, []);

    return { foods };
}