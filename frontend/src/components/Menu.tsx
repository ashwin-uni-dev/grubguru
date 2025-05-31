import React from 'react';
import { Home, History, Settings } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-gray-100 p-4 z-50">
            <nav className="flex justify-around items-cente">
                <button className="flex flex-col items-center text-sm" onClick={() => navigate('/')}>
                    <Home strokeWidth={2} color='gray'/>
                </button>

                <button className="flex flex-col items-center text-sm">
                    <History strokeWidth={2} color='gray' />
                </button>

                <button className="flex flex-col items-center text-sm">
                    <Settings strokeWidth={2} color='gray' />
                </button>
            </nav>
        </div>
    );
};

export default Menu;
