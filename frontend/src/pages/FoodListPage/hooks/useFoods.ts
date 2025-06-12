import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackendRequest } from "../../../lib/api";

export const useFoods = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const source = queryParams.get("source"); // 'preset' or 'board'

    const [foods, setFoods] = useState<any[]>([]);
    const [name, setName] = useState<string>("");

    useEffect(() => {
        const fetchPresetFoods = async () => {
            const selectedPreset = JSON.parse(localStorage.getItem("selectedPreset") || "{}");
            const presetName = selectedPreset.id;
            const preferences = selectedPreset.preferences || [];
            console.log(preferences);

            const body: Record<string, any> = {};
            for (let pref of preferences) {
                body[pref.id] = pref.value;
            }

            const foods = await BackendRequest.to("foods").post(body).execute();
            setFoods(foods);
            setName(presetName);
        };

        const fetchBoardFoods = () => {
            const selectedBoard = JSON.parse(localStorage.getItem("selectedBoard") || "{}");
            setFoods(selectedBoard.foods || []);
            setName(selectedBoard.boardName || "Board");
        };

        const fetchLikedFoods = async () => {
            const likedFoods = await BackendRequest.to("users/likes").get().execute();
            setFoods(likedFoods);
            setName('Your liked foods');
        }

        console.log(source);

        if (source === "preset") {
            fetchPresetFoods();
        } else if (source === "board") {
            fetchBoardFoods();
        } else if (source == 'likes') {
            fetchLikedFoods();
        }else {
            setFoods([]);
            setName("");
        }
    }, [source]);

    return { foods, source, name };
};
