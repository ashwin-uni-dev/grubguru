import { useState } from "react";
import { useBoards } from "../hooks/useBoards";
import FoodCardSkeleton from "../../../components/skeletons/FoodCardSkeleton";
import BoardCard from "./BoardCard";
import { Heart } from "lucide-react";
import BoardNameModal from "./BoardNameModal";
import { BackendRequest } from "../../../lib/api";
import {useNavigate} from "react-router-dom";

const Boards = () => {
    const { boards, getBoards } = useBoards();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const createBoard = async (boardName: string) => {
        await BackendRequest.
            to('users/boards')
            .post({ boardName })
            .execute();

        getBoards();
    }

    return (
        <div>
            <button
                className='bg-black text-white text-sm py-1 px-2 rounded-full mb-2'
                onClick={() => setShowModal(true)}
            >
                + Create a board
            </button>

            {showModal && (
                <BoardNameModal
                    closeModal={() => setShowModal(false)}
                    submitModal={createBoard}
                />
            )}

            <div className="">
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2' onClick={() => navigate('/food-view?source=likes')}>
                        <div className={'w-full aspect-square rounded-lg flex justify-center items-center bg-red-500 text-white'}>
                            <Heart size={32} fill={'white'} />
                        </div>
                        <p className='font-semibold'>Liked Foods</p>
                    </div>
                    {boards != null
                        ? boards.map((board: any, index) => (
                            <BoardCard key={index} boardName={board.boardName} />
                        ))
                        : <FoodCardSkeleton />
                    }
                </div>
            </div>
        </div>
    );
};

export default Boards;
