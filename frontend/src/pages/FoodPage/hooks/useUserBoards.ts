import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";

export const useUserBoards = () => {
    const [userBoards, setUserBoards] = useState([]);

    const getUserBoards = async () => {
        const boards = await BackendRequest
            .to('users/boards')
            .get()
            .execute();

        setUserBoards(boards.map((board: any) => board.boardName));
    }


    useEffect(() => {
        getUserBoards();
    }, []);

    return {userBoards};
}