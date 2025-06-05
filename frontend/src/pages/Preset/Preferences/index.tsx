import ProgressivePage from "../../../components/ProgressivePage";
import Layout from "../../../components/Layout";
import React, { useState } from "react"; // Import useState
import PreferenceCard from "./components/PreferenceCard";
import {useNavigate} from "react-router-dom";
import {PRESET_NAME_KEY, STORAGE_KEY, usePreferences} from "../contexts/preferenceContext";
import { BackendRequest } from "../../../lib/api";
import WaitScreen from "../../../components/WaitScreen";

const Preferences = () => {
    const navigate = useNavigate();
    // New state to control the visibility of the saving screen
    const [isSaving, setIsSaving] = useState(false);

    const preferenceOptions = [
        { name: 'Mood', icon: 'hamburger' },
        { name: 'Budget', icon: 'hand-coins' },
        { name: 'Time', icon: 'timer'},
        { name: 'Nutrition', icon: 'leaf' },
    ]

    const { preferences, presetName } = usePreferences();

    const handleDone = async () => {
        setIsSaving(true);
        try {
            await BackendRequest
                .to('users/1/presets')
                .post({
                    id: presetName,
                    preferences
                })
                .execute();

            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem(PRESET_NAME_KEY);
            navigate('/');

        } catch (error) {
            console.error("Error saving preset:", error);
        } finally {
            setIsSaving(false);
        }
    }

    return (
        <Layout back={true}>
            <ProgressivePage title='Setup Your Preferences' action={() => handleDone()} final={true}>
                <p className="font-medium mt-4">Choose your preferences</p>
                <div className='grid grid-cols-2 gap-4 mt-2'>
                    {
                        preferenceOptions.map((preference, index) => ( // Removed 'any' type for cleaner JSX, assuming type is handled elsewhere
                            <PreferenceCard preference={preference.name}
                                            icon={preference.icon}
                                            onClick={() => navigate(`../${preference.name.toLowerCase()}`)}
                                            key={index} />
                        ))
                    }
                </div>
                <p className="text-sm text-gray-500 mt-4">
                    Your chosen preferences will be shown below.
                </p>
                {
                    preferences.map((preference, index) => ( // Removed 'any' type, added key
                        <p key={index}>{JSON.stringify(preference)}</p>
                    ))
                }
            </ProgressivePage>
            <WaitScreen isVisible={isSaving} message='Saving your preset...' />
        </Layout>
    )
}

export default Preferences;