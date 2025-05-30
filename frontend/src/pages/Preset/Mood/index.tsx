import Layout from "../../../components/Layout";
import React, { useState } from "react";
import { usePreferences } from "../contexts/preferenceContext";
import {useNavigate} from "react-router-dom"; // Assuming your context is in 'contexts' folder
import DonePreference from "../components/donePreference";

const Mood = () => {
    const navigate = useNavigate();
    const { addOrUpdatePreference } = usePreferences();
    const moodOptions = [
        'Salty', 'Sweet', 'Spicy', 'Savory', 'Bitter', 'Sour', 'Umami',
        'Comfort Food', 'Healthy', 'Light', 'Heavy', 'Refreshing', 'Creamy'
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

    return (
        <Layout back={true}>
            <div className='flex flex-col h-full'>
                <h1 className='text-2xl font-bold tracking-tighter text-gray-800'>What are you in the mood for?</h1>
                <DonePreference id='mood' value={selectedMoods}  />
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
            </div>
        </Layout>
    );
}

export default Mood;