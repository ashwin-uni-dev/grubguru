import React from 'react';
import { createPortal } from 'react-dom';

const WaitScreen = ({ isVisible, message = "Loading..." }: { isVisible: boolean; message?: string; }) => {
    return createPortal(
        <div
            className={`fixed inset-0 bg-purple-500 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out w-screen h-screen ${
                isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
                zIndex: 9999,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh'
            }}
        >
            <div className="text-white text-xl font-bold">
                {message}
            </div>

            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mt-4"></div>
        </div>,
        document.body
    );
};

export default WaitScreen;