import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";

export const usePresets = () => {
    const [presets, setPresets] = useState([]);

    const fetchPresets = async () => {
        const { presets : fetchedPresets } = await BackendRequest
            .to('users/1/presets')
            .get()
            .execute();

        setPresets(fetchedPresets);
    }

    useEffect(() => {
        fetchPresets();
    }, [])

    return { presets };
}