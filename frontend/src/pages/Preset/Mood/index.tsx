import Layout from "../../../components/Layout";
import React, { useState } from "react";
import { usePreferences } from "../contexts/preferenceContext";
import {useNavigate} from "react-router-dom";
import ProgressivePage from "../../../components/ProgressivePage";

const Mood = () => {
    const navigate = useNavigate();
    const { addOrUpdatePreference } = usePreferences();
    const moodOptions = [
        'Salty', 'Sweet', 'Spicy', 'Savory', 'Bitter', 'Sour', 'Umami',
        'Comfort ViewPreset', 'Healthy', 'Light', 'Heavy', 'Refreshing', 'Creamy'
    ];

    const [selectedMoods, setSelectedMoods] = useState<string[]>([]);

    const toggleMood = (mood: string) => {
        setSelectedMoods(prevSelectedMoods => {
            if (prevSelectedMoods.includes(mood)) {
                return prevSelectedMoods.filter(m => m !== mood);
            } else {
                return [...prevSelectedMoods, mood];
            }
        });
    };

    const handleDone = () => {
        addOrUpdatePreference({ id: 'mood', value: selectedMoods });
        navigate('../preferences');
    }

    return (
        <Layout back={true}>
            <ProgressivePage title='Mood' action={handleDone} final={true}>
                <p className="text-sm text-gray-500 mt-2">
                    Select the taste you are in the mood for.
                </p>
                <div className='flex-grow grid grid-cols-2 md:grid-cols-3 mt-4 lg:grid-cols-4 gap-4 mb-8 overflow-y-auto'>
                    {moodOptions.map(mood => (
                        <button
                            key={mood}
                            onClick={() => toggleMood(mood)}
                            className={`
                                p-2 rounded-lg border-2 text-center font-medium transition-colors duration-200
                                ${selectedMoods.includes(mood)
                                ? 'bg-purple-500 border-purple-500 text-white'
                                : 'bg-white border-gray text-gray-700 hover:bg-gray-100'
                            }
                            `}
                        >
                            {mood}
                        </button>
                    ))}
                </div>
            </ProgressivePage>
        </Layout>
    );
}

export default Mood;