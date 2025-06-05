import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";

export const useFoods = () => {
    const [foods, setFoods] = useState<any[] | null>(null);
    const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchQuery') || '');

    const fetchFoods = async () => {
        const foods = await BackendRequest
            .to('foods')
            .post({ search: searchQuery })
            .execute();

        setFoods(foods);
    }

    useEffect(() => {
        fetchFoods();
    }, [searchQuery])

    return { searchQuery, setSearchQuery, foods, setFoods };
}