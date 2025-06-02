import { ArrowLeft } from "lucide-react";
import {useNavigate} from "react-router-dom";
import {ReactNode} from "react";

interface Props {
    title: string,
    children: ReactNode
}

const BackablePage = ({ title, children }: Props) => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='fixed bg-white flex items-center p-2 border-b-2 gap-2 w-full'>
                <ArrowLeft onClick={() => navigate(-1)} size={18}/>
                <p className='font-semibold'>{ title }</p>
            </div>
            <div className='py-4'>
                { children }
            </div>
        </div>
    )
}

export default BackablePage;