import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";

export const useFoods = () => {
    const [foods, setFoods] = useState<any[] | null>(null);

    const fetchFoods = async () => {
        const foods = await BackendRequest
            .to('foods')
            .post({})
            .execute();

        setFoods((prev: any[] | null) => {
            if (prev == null) return foods;
            return prev.concat(
                foods
            )
        });
    }

    useEffect(() => {
        fetchFoods();
    }, []);

    return { foods, fetchFoods };
}