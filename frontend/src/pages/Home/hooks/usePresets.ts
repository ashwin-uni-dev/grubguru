import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";

export const usePresets = () => {
    const [presets, setPresets] = useState([]);

    const fetchPresets = async () => {
        const { presets : fetchedPresets } = await BackendRequest
            .to('users/1/presets')
            .get()
            .execute();

        const localPresets = JSON.parse(localStorage.getItem('presets') || '[]')
            .map((preset: string) => ({name: preset}));

        // @ts-ignore
        setPresets([...fetchedPresets, ...localPresets]);
    }

    useEffect(() => {
        fetchPresets();
    }, [])

    return { presets };
}