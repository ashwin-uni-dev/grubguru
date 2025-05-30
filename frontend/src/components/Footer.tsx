import React from 'react';
import { Home, History, Settings } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 z-50">
            <nav className="flex justify-around items-center h-full">
                <button className="flex flex-col items-center text-sm" onClick={() => navigate('/')}>
                    <Home size={12} strokeWidth={1} />
                </button>

                <button className="flex flex-col items-center text-sm">
                    <History size={12} strokeWidth={1} />
                </button>

                <button className="flex flex-col items-center text-sm">
                    <Settings size={12} strokeWidth={1} />
                </button>
            </nav>
        </div>
    );
};

export default Footer;
