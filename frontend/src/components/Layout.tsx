import {ReactNode} from "react";
import {useNavigate} from "react-router-dom";

const Layout = ({ back, children }: { back: boolean, children: ReactNode }) => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col lg:w-3/4 sm:w-full p-8'>
            { back && <p className='text-purple-500 underline' onClick={() => navigate(-1)}>Back</p> }
            { children }
        </div>
    )
}

export default Layout;