import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";

export const useFoods = () => {
    const [foods, setFoods] = useState([]);
    const selectedPreset = JSON.parse(localStorage.getItem('selectedPreset') || '{}');
    const presetName = selectedPreset.id;

    const buildRequestBody = () => {
        const body = {};
        for (let preference of selectedPreset.preferences) {
            // @ts-ignore
            body[preference.id] = preference.value;
        }

        return body;
    }

    const fetchFoods = async () => {
        const requestBody = buildRequestBody();
        const foods = await BackendRequest
            .to('foods')
            .post(requestBody)
            .execute();

        setFoods(foods);
    }

    useEffect(() => {
        fetchFoods();
    }, [])

    return { presetName, foods };
}