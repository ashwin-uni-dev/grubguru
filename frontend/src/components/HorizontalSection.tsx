import {ReactNode} from "react";
import {ArrowRight} from "lucide-react";

interface Props {
    title: string,
    children: ReactNode
}

const HorizontalSection = ({ title, children }: Props) => {
    return (
        <div>
            <div className='flex justify-between items-center mt-4'>
                <h2 className='text-xl font-bold tracking-tighter mb-2'>{ title }</h2>
                <div className='bg-gray-200 rounded-full p-1'>
                    <ArrowRight size={14} color='gray'/>
                </div>
            </div>
            <div className='flex gap-2 w-full overflow-x-auto'>
                { children }
            </div>
        </div>
    )
}

export default HorizontalSection;