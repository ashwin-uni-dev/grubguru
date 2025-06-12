import React, { ReactNode } from "react";
import {useNavigate} from "react-router-dom";

interface Props {
    title: string;
    final?: boolean;
    action: () => void;
    children: ReactNode;
}

const ProgressivePage = ({ title, action, final, children }: Props) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen p-6 items-center">
            <div>
                <h1 className="text-2xl font-bold tracking-tighter mb-2">{title}</h1>
            </div>

            <div className="flex flex-col overflow-y-auto items-center">
                {children}
            </div>

            <div className="mt-auto flex justify-between w-full">
                <button className="text-purple-500 font-bold" onClick={() => navigate(-1)}>
                    Back
                </button>
                <button className="text-purple-500 font-bold" onClick={action}>
                    { final? 'Done' : 'Next' }
                </button>
            </div>
        </div>
    );
};

export default ProgressivePage;
