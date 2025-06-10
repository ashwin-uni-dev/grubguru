import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";

export const useResults = () => {
    const [searchQuery, setSearchQuery] = useState(localStorage.getItem('friendSearch') || '');
    const [results, setResults] = useState<any[] | null>(null);

    const getResults = async () => {
        const results = await BackendRequest
            .to('users?search=' + searchQuery)
            .get()
            .execute();

        setResults(results);
    }

    useEffect(() => {
        getResults();
    }, [searchQuery]);

    return { results, setResults, searchQuery, setSearchQuery }
}