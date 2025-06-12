import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

export interface UserPreference {
    id: string;
    value: any;
}

interface PreferencesContextType {
    presetName: string;
    setPresetName: (presetName: string) => void;
    preferences: UserPreference[];
    addOrUpdatePreference: (newOrUpdatedPreference: UserPreference) => void;
    removePreference: (id: string) => void;
}

export const STORAGE_KEY = 'userPreferences';
export const PRESET_NAME_KEY = 'presetName';

export const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export const usePreferences = () => {
    const context = useContext(PreferencesContext);
    if (context === undefined) {
        throw new Error('usePreferences must be used within a PreferencesProvider');
    }
    return context;
};

export const PreferencesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [preferences, setPreferences] = useState<UserPreference[]>(() => {
        const storedPrefs = localStorage.getItem(STORAGE_KEY);
        if (storedPrefs) {
            try {
                return JSON.parse(storedPrefs);
            } catch {
                return [];
            }
        }
    });

    const [presetName, setPresetName] = useState<string>(() => {
        return localStorage.getItem(PRESET_NAME_KEY) || '';
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    }, [preferences]);

    useEffect(() => {
        localStorage.setItem(PRESET_NAME_KEY, presetName);
    }, [presetName]);

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

    const removePreference = (id: string) => {
        setPreferences(prevPreferences => prevPreferences.filter(pref => pref.id !== id.toLowerCase()));
    }

    const contextValue: PreferencesContextType = {
        preferences,
        presetName,
        setPresetName,
        addOrUpdatePreference,
        removePreference
    };

    return (
        <PreferencesContext.Provider value={contextValue}>
            {children}
        </PreferencesContext.Provider>
    );
};
