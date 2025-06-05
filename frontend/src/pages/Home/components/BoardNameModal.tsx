import Modal from "../../../components/Modal";
import {useState} from "react";

const BoardNameModal = ({ closeModal, submitModal }: any) => {
    const [newBoardName, setNewBoardName] = useState("");

    return (
        <Modal closeModal={closeModal}>
            <div
                className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="font-semibold text-lg mb-3">Name your board</h2>
                <input
                    type="text"
                    value={newBoardName}
                    onChange={(e) => setNewBoardName(e.target.value)}
                    placeholder="e.g. Breakfast Picks"
                    className="w-full border px-3 py-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="flex justify-end gap-2">
                    <button
                        onClick={closeModal}
                        className="text-sm px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            submitModal(newBoardName);
                            closeModal();
                        }}

                        className="text-sm px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                    >
                        Create
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default BoardNameModal;