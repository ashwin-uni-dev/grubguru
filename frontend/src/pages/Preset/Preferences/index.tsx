import ProgressivePage from "../../../components/ProgressivePage";
import Layout from "../../../components/Layout";
import React, { useState } from "react"; // Import useState
import PreferenceCard from "./components/PreferenceCard";
import {useNavigate} from "react-router-dom";
import {PRESET_NAME_KEY, STORAGE_KEY, usePreferences} from "../contexts/preferenceContext";
import { BackendRequest } from "../../../lib/api";
import WaitScreen from "../../../components/WaitScreen";
import Nutrition from "../Nutitrion";
import Budget from "../Budget";
import Mood from "../Mood";
import Badge from "../../../components/Badge";

const Preferences = () => {
    const navigate = useNavigate();
    const { preferences, presetName, removePreference } = usePreferences();

    const [isSaving, setIsSaving] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modal, setModal] = useState(<></>);

    const preferenceOptions = [
        {
            name: 'Mood',
            icon: 'hamburger',
            description: 'What type of food do you want?',
            modal: <Mood isOpen={modalOpen} onClose={() => { setModalOpen(false) }} />
        },
        {
            name: 'Budget',
            icon: 'hand-coins',
            description: 'How much money are you ready to spend?',
            modal: <Budget isOpen={modalOpen} onClose={() => { setModalOpen(false) }} />
        },
        {
            name: 'Nutrition',
            icon: 'leaf',
            description: 'Set any dietary preferences / nutritional goals?',
            modal: <Nutrition isOpen={modalOpen} onClose={() => { setModalOpen(false) }} />
        },
    ]

    const handleDone = async () => {
        setIsSaving(true);
        try {
            await BackendRequest
                .to('users/presets')
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
        <>
            <ProgressivePage title='Setup Your Preferences' action={() => handleDone()} final={true}>
                <p className='text-gray-500 text-sm'>
                    Tap on any preference below to change or set it up.
                </p>
                <div className="flex flex-col gap-4 mt-4">
                    {preferenceOptions.map((preference, index) => {
                        const selected = preferences.find((p: any) => p.id.toLowerCase() === preference.name.toLowerCase());

                        let selectionDisplay: React.ReactNode = null;

                        if (selected) {
                            switch (selected.id) {
                                case 'mood':
                                    selectionDisplay = (
                                        <>
                                            { selected.value.map((mood: string, index: number) => (
                                                <Badge>{ mood }</Badge>
                                            ))}
                                        </>
                                    )
                                    break;
                                case 'budget':
                                    selectionDisplay = selected.value ? `£${selected.value}` : 'No budget set';
                                    break;
                                case 'nutrition':
                                    const { minCalories, maxCalories, tags } = selected.value;
                                    selectionDisplay = (
                                        <>
                                            <Badge>
                                                <p className='text-purple-500 font-semibold mr-1'>Min Calories </p>
                                                { minCalories }
                                            </Badge>
                                            <Badge>
                                                <p className='text-purple-500 font-semibold mr-1'>Max Calories </p>
                                                { maxCalories }
                                            </Badge>
                                            { tags.map((tag: string, index: number) => (
                                                <Badge>{ tag }</Badge>
                                            ))}
                                        </>
                                    )
                                    break;
                            }
                        }

                        return (
                            <PreferenceCard
                                preference={preference.name}
                                description={preference.description}
                                icon={preference.icon}
                                onClick={() => {
                                    setModalOpen(true);
                                    setModal(preference.modal);
                                }}
                                onRemove={() => removePreference(preference.name) }
                                key={index}
                            >
                                {selectionDisplay}
                            </PreferenceCard>
                        );
                    })}
                </div>
            </ProgressivePage>
            <WaitScreen isVisible={isSaving} message='Saving your preset...' />

            { modalOpen && modal }
        </>
    )
}

export default Preferences;