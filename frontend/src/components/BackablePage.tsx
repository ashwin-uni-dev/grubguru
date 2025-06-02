import { ArrowLeft } from "lucide-react";
import {useNavigate} from "react-router-dom";
import {ReactNode} from "react";

interface Props {
    title: ReactNode,
    children: ReactNode
}

const BackablePage = ({ title, children }: Props) => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='bg-white flex items-center p-4 border-b-2 gap-2 w-full'>
                <ArrowLeft onClick={() => navigate(-1)} size={18}/>
                { title }
            </div>
            <div className=''>
                { children }
            </div>
        </div>
    )
}

export default BackablePage;