import React from 'react';
import { Outlet } from 'react-router-dom';
import { PreferencesProvider } from './contexts/preferenceContext';

const PreferenceRoutesWrapper: React.FC = () => {
    return (
        <PreferencesProvider>
            <Outlet />
        </PreferencesProvider>
    );
};

export default PreferenceRoutesWrapper;