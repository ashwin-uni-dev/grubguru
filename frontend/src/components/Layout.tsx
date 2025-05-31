import {ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import Menu from "./Menu";

const Layout = ({ back, children }: { back: boolean, children: ReactNode }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen">
            <div className='flex-1 pb-24 lg:w-3/4 lg:mx-auto sm:w-full p-8 gap-4 overflow-y-auto'>
                {children}
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-50">
                <Menu />
            </div>
        </div>
    )
}

export default Layout;