import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";

export const useBoards = () => {
    const [boards, setBoards] = useState<any[] | null>(null);

    const getBoards = async () => {
        const boards = await BackendRequest
            .to('users/boards')
            .get()
            .execute();

        setBoards(boards);
    }

    useEffect(() => {
        getBoards();
    }, [])

    return { boards, getBoards }
}