import {ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import Footer from "./Footer";

const Layout = ({ back, children }: { back: boolean, children: ReactNode }) => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col min-h-screen lg:w-3/4 sm:w-full p-8'>
            { back && <p className='text-purple-500 underline cursor-pointer'
                              onClick={() => navigate(-1)}>Back</p> }
            <main className="flex-grow flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;