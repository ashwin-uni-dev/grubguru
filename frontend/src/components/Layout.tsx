import {ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import Menu from "./Menu";
import { motion } from "framer-motion";

const Layout = ({ back, children }: { back: boolean, children: ReactNode }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
        >
            <div className="flex flex-col max-h-screen">
                <div className='flex-1 pb-24 lg:w-3/4 lg:mx-auto sm:w-full p-6 gap-4 overflow-y-auto'>
                    {children}
                    <br/>
                </div>
                <div className="fixed bottom-0 left-0 right-0 z-50">
                    <Menu />
                </div>
            </div>
        </motion.div>
    )
}

export default Layout;