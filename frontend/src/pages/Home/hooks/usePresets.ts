import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";

export const usePresets = () => {
    const [presets, setPresets] = useState<any[] | null>(null);

    const fetchPresets = async () => {
        const { presets : fetchedPresets } = await BackendRequest
            .to('users/presets')
            .get()
            .execute();

        // @ts-ignore
        setPresets(fetchedPresets);
    }

    useEffect(() => {
        fetchPresets();
    }, [])

    return { presets };
}