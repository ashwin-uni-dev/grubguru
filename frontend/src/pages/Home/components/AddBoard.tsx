import { CirclePlus } from "lucide-react";

const AddBoard = () => {
    return (
        <div>
            <div className='flex flex-col gap-1 justify-center items-center bg-purple-500 py-4 px-8 rounded-lg'>
                <CirclePlus color='white'/>
                <p className='font-semibold text-sm text-white'>Add Board</p>
            </div>
        </div>
    )
}

export default AddBoard;