import React, { useState } from "react";
import { usePreferences } from "../contexts/preferenceContext";

interface MoodModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const moodOptions = ['Sweet', 'Chinese', 'Indian', 'Italian'];

const Mood = ({ isOpen, onClose }: MoodModalProps) => {
    const { addOrUpdatePreference } = usePreferences();
    const [selectedMoods, setSelectedMoods] = useState<string[]>([]);

    const toggleMood = (mood: string) => {
        setSelectedMoods(prev =>
            prev.includes(mood)
                ? prev.filter(m => m !== mood)
                : [...prev, mood]
        );
    };

    const handleDone = () => {
        addOrUpdatePreference({ id: "mood", value: selectedMoods });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
                <h2 className="text-xl font-bold mb-2">Mood</h2>
                <p className="text-sm text-gray-500 mb-4">
                    Select the taste you are in the mood for.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                    {moodOptions.map(mood => (
                        <button
                            key={mood}
                            onClick={() => toggleMood(mood)}
                            className={`p-2 rounded-lg border-2 font-medium transition-colors duration-200
                ${selectedMoods.includes(mood)
                                ? 'bg-purple-500 border-purple-500 text-white'
                                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {mood}
                        </button>
                    ))}
                </div>

                <div className="flex justify-end gap-3">
                    <button onClick={onClose} className="text-gray-500 hover:underline">
                        Cancel
                    </button>
                    <button
                        onClick={handleDone}
                        className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Mood;
