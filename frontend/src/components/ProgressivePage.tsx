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
        <div className="flex flex-col h-full min-h-[80vh]">
            <div>
                <h1 className="text-2xl font-bold tracking-tighter mb-2">{title}</h1>
            </div>

            <div className="flex-1 overflow-y-auto">
                {children}
            </div>

            <div className="flex justify-end mt-4">
                <button className="text-purple-500 font-bold" onClick={action}>
                    { final? 'Done' : 'Next' }
                </button>
            </div>
        </div>
    );
};

export default ProgressivePage;
