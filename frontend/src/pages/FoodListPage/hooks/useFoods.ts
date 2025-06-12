import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackendRequest } from "../../../lib/api";

interface FoodItem {
    uberUrl: string;
    [key: string]: any;
}

export const useFoods = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const source = queryParams.get("source");

    const [foods, setFoods] = useState<FoodItem[]>([]);
    const [name, setName] = useState<string>("");

    const getUniqueFoods = (foodList: FoodItem[]): FoodItem[] => {
        const seenUrls = new Set<string>();
        const uniqueFoods: FoodItem[] = [];
        for (const food of foodList) {
            if (food && food.uberUrl && !seenUrls.has(food.uberUrl)) {
                seenUrls.add(food.uberUrl);
                uniqueFoods.push(food);
            }
        }
        return uniqueFoods;
    };

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

            try {
                const fetchedFoods: FoodItem[] = await BackendRequest.to("foods").post(body).execute();
                setFoods(getUniqueFoods(fetchedFoods));
                setName(presetName);
            } catch (error) {
                console.error("Error fetching preset foods:", error);
                setFoods([]);
                setName("");
            }
        };

        const fetchBoardFoods = () => {
            const selectedBoard = JSON.parse(localStorage.getItem("selectedBoard") || "{}");
            const boardFoods: FoodItem[] = selectedBoard.foods || [];
            setFoods(getUniqueFoods(boardFoods));
            setName(selectedBoard.boardName || "Board");
        };

        const fetchLikedFoods = async () => {
            try {
                const likedFoods: FoodItem[] = await BackendRequest.to("users/likes").get().execute();
                setFoods(getUniqueFoods(likedFoods));
                setName('Your liked foods');
            } catch (error) {
                console.error("Error fetching liked foods:", error);
                setFoods([]);
                setName("");
            }
        };

        const fetchStoreMenu = async () => {
            const { storeUrl, name: storeName } = JSON.parse(localStorage.getItem("selectedStore") || "{}");
            try {
                const storeFoods: FoodItem[] = await BackendRequest.to("foods/store-menu").post({
                    storeUrl
                }).execute();
                setFoods(getUniqueFoods(storeFoods));
                setName(storeName);
            } catch (error) {
                console.error("Error fetching store menu:", error);
                setFoods([]);
                setName("");
            }
        };

        if (source === "preset") {
            fetchPresetFoods();
        } else if (source === "board") {
            fetchBoardFoods();
        } else if (source === 'likes') {
            fetchLikedFoods();
        } else if (source === 'store') {
            fetchStoreMenu();
        } else {
            setFoods([]);
            setName("");
        }
    }, [source]);

    return { foods, source, name };
};