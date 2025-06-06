import React, { useState } from 'react';
import { BackendRequest } from '../../../lib/api';

const BoardSelection = ({ boards, closeModal }: { boards: string[], closeModal: () => void }) => {
    const [selectedBoards, setSelectedBoards] = useState<string[]>([]);
    const { _id: foodId } = JSON.parse(localStorage.getItem('selectedFood') || '{}')

    const handleToggleBoard = (board: string) => {
        setSelectedBoards((prev) =>
            prev.includes(board)
                ? prev.filter((b) => b !== board)
                : [...prev, board]
        );
    };

    const handleSave = () => {
        selectedBoards.forEach(async (board: string) => {
            await BackendRequest
                .to(`users/boards/${board}`)
                .post({ foodId })
                .execute();
        })

        closeModal();
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
        >
            <div
                className="flex flex-col gap-2 bg-white rounded-xl p-6 w-3/4"
                onClick={(e) => e.stopPropagation()}
            >
                <p className="font-semibold text-lg text-black">Select boards to pin to</p>

                {boards.map((board) => (
                    <div key={board} className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id={`board-${board}`}
                            checked={selectedBoards.includes(board)}
                            onChange={() => handleToggleBoard(board)}
                            className="form-checkbox h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                        />
                        <label htmlFor={`board-${board}`} className="text-base text-gray-700 cursor-pointer">
                            {board}
                        </label>
                    </div>
                ))}

                <button
                    onClick={handleSave}
                    className="mt-4 w-full py-3 rounded-lg bg-purple-500 text-white font-semibold transition-colors duration-200"
                >
                    Save Food
                </button>
            </div>
        </div>
    );
};

export default BoardSelection;
