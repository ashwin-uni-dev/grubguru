import React, {useState} from 'react';
import {Home, Users, Bell, BellDot, LogOut} from 'lucide-react';
import {useNavigate} from "react-router-dom";
import {useNotifs} from '../hooks/useNotifs'
import PollMode from './PollMode';
import { isPollMode } from '../lib/poll';

const BellIcon = ({ ...props }) => {
    const [newNotif, setNewNotif] = useState(false);

    useNotifs((m) => setNewNotif(true))

    return (
        newNotif ? <BellDot { ...props } /> : <Bell { ...props } />
    )
}

const Menu = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="fixed bottom-0 w-full bg-purple-500 p-4 z-50">
                <nav className="flex justify-around items-center">
                    <button className="flex flex-col items-center text-sm" onClick={() => navigate('/')}>
                        <Home strokeWidth={2} color='white'/>
                    </button>

                    <button className="flex flex-col items-center text-sm" onClick={() => navigate('/notifications')}>
                        <BellIcon strokeWidth={2} color='white' />
                    </button>

                    <button className="flex flex-col items-center text-sm" onClick={() => navigate('/social')}>
                        <Users strokeWidth={2} color='white' />
                    </button>

                    <button className="flex flex-col items-center text-sm" onClick={() => {
                        localStorage.removeItem('pollCode');
                        navigate('/login')
                    }>
                        <LogOut strokeWidth={2} color='white' />
                    </button>
                </nav>
            </div>
            { isPollMode() && <PollMode /> }
        </>
    );
};

export default Menu;
