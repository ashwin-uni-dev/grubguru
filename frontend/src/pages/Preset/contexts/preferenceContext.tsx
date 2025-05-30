// src/context/PreferencesContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface UserPreference {
    id: string;
    value: any;
}

interface PreferencesContextType {
    presetName: string;
    setPresetName: (presetName: string) => void;
    preferences: UserPreference[];
    addOrUpdatePreference: (newOrUpdatedPreference: UserPreference) => void;
}

const initialPreferences: UserPreference[] = [];

export const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export const usePreferences = () => {
    const context = useContext(PreferencesContext);
    if (context === undefined) {
        throw new Error('usePreferences must be used within a PreferencesProvider');
    }
    return context;
};

export const PreferencesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [preferences, setPreferences] = useState<UserPreference[]>(initialPreferences);
    const [presetName, setPresetName] = useState<string>('');

    const addOrUpdatePreference = (newOrUpdatedPreference: UserPreference) => {
        setPreferences(prevPreferences => {
            const existingPreferenceIndex = prevPreferences.findIndex(
                pref => pref.id === newOrUpdatedPreference.id
            );

            if (existingPreferenceIndex > -1) {
                const updatedPreferences = [...prevPreferences];
                updatedPreferences[existingPreferenceIndex] = {
                    ...updatedPreferences[existingPreferenceIndex],
                    ...newOrUpdatedPreference,
                };
                return updatedPreferences;
            } else {
                return [...prevPreferences, newOrUpdatedPreference];
            }
        });
    };

    const contextValue: PreferencesContextType = {
        preferences,
        presetName,
        setPresetName,
        addOrUpdatePreference,
    };

    return (
        <PreferencesContext.Provider value={contextValue}>
            {children}
        </PreferencesContext.Provider>
    );
};