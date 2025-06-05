import {BackendRequest} from "../../../lib/api";
import {useEffect, useState} from "react";

const useBoard = (boardName: string) => {
    const [board, setBoard] = useState<any>({});

    const getBoard = async () => {
        const fetchedBoard = await BackendRequest
            .to(`users/boards/${boardName}`)
            .get()
            .execute();
        console.log(fetchedBoard);
        setBoard(fetchedBoard);
    }

    useEffect(() => {
        getBoard();
    }, []);

    return { board }
}

const BoardCard = ({ boardName }: any) => {
    const { board } = useBoard(boardName);
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        if (!board.foods) return;
        const t = board.foods.slice(0, 4).map((item: any) => item.imgUrl);
        setThumbnails(t);
    }, [board])

    return (
        <div className='flex flex-col gap-2'>
            <div className="w-full aspect-square rounded-lg overflow-hidden grid grid-cols-2 grid-rows-2 gap-0.5 bg-gray-100">
                {thumbnails.map((url: any, index: number) => (
                    <img
                        key={index}
                        src={url}
                        alt={`food-thumbnail-${index}`}
                        className="object-cover w-full h-full"
                    />
                ))}
            </div>
            <p className='font-semibold'>{ boardName }</p>
        </div>
    );
};

export default BoardCard;