import ProgressivePage from "../../../components/ProgressivePage";
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
    const [currentModalType, setCurrentModalType] = useState<string | null>(null);

    const preferenceOptions = [
        {
            name: 'Mood',
            icon: 'hamburger',
            description: 'What type of food do you want?',
        },
        {
            name: 'Budget',
            icon: 'hand-coins',
            description: 'How much money are you ready to spend?',
        },
        {
            name: 'Nutrition',
            icon: 'leaf',
            description: 'Set any dietary preferences / nutritional goals',
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

    const renderModal = () => {
        const commonProps = { isOpen: modalOpen, onClose: () => setModalOpen(false) };
        switch (currentModalType) {
            case 'Mood':
                return <Mood {...commonProps} />;
            case 'Budget':
                return <Budget {...commonProps} />;
            case 'Nutrition':
                return <Nutrition {...commonProps} />;
            default:
                return null;
        }
    };

    return (
        <>
            <ProgressivePage title='Setup Your Preferences' action={() => handleDone()} final={true}>
                <p className='text-gray-500 text-sm'>
                    Tap on any preference below to change or set it up.
                </p>
                <div className="flex flex-col gap-2 mt-4">
                    {preferenceOptions.map((preference, index) => {
                        const selected = preferences.find((p: any) => p.id.toLowerCase() === preference.name.toLowerCase());

                        let selectionDisplay: React.ReactNode = null;

                        if (selected) {
                            switch (selected.id) {
                                case 'mood':
                                    selectionDisplay = (
                                        <>
                                            { selected.value.map((mood: string, idx: number) => (
                                                <Badge key={idx}>{ mood }</Badge>
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
                                            <Badge key="min-cal">
                                                <p className='text-purple-500 font-semibold mr-1'>Min Calories </p>
                                                { minCalories }
                                            </Badge>
                                            <Badge key="max-cal">
                                                <p className='text-purple-500 font-semibold mr-1'>Max Calories </p>
                                                { maxCalories }
                                            </Badge>
                                            { tags.map((tag: string, idx: number) => (
                                                <Badge key={idx}>{ tag }</Badge>
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
                                    setCurrentModalType(preference.name);
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

            { modalOpen && renderModal() }
        </>
    )
}

export default Preferences;