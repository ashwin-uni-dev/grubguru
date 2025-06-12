import React, { useState } from "react";
import { usePreferences } from "../contexts/preferenceContext";

interface NutritionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TAG_OPTIONS = [
    "Low Fat",
    "High Protein",
    "Low Carb",
    "Vegan",
    "Vegetarian",
    "Gluten Free",
];

const Nutrition = ({ isOpen, onClose }: NutritionModalProps) => {
    const { addOrUpdatePreference } = usePreferences();

    const [minCalories, setMinCalories] = useState<number>(0);
    const [maxCalories, setMaxCalories] = useState<number>(800);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagToggle = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const handleDone = () => {
        addOrUpdatePreference({
            id: "nutrition",
            value: {
                minCalories,
                maxCalories,
                tags: selectedTags,
            },
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
                <h2 className="text-xl font-bold tracking-tighter mb-4">Nutrition & Dietary Preferences</h2>

                {/* Calorie Range */}
                <div className="mb-6">
                    <label className="block font-semibold mb-1">Calorie Range (kcal)</label>
                    <div className="flex gap-4 items-center">
                        <input
                            type="number"
                            min={0}
                            max={maxCalories}
                            value={minCalories}
                            onChange={(e) => setMinCalories(Number(e.target.value))}
                            className="border p-2 rounded w-24"
                            placeholder="Min"
                        />
                        <span>to</span>
                        <input
                            type="number"
                            min={minCalories}
                            value={maxCalories}
                            onChange={(e) => setMaxCalories(Number(e.target.value))}
                            className="border p-2 rounded w-24"
                            placeholder="Max"
                        />
                    </div>
                </div>

                {/* Nutrition Tags */}
                <div className="mb-6">
                    <label className="block font-semibold mb-1">Nutrition Tags</label>
                    <div className="flex flex-wrap gap-2">
                        {TAG_OPTIONS.map(tag => (
                            <button
                                key={tag}
                                type="button"
                                onClick={() => handleTagToggle(tag)}
                                className={`px-3 py-1 rounded-full border transition ${
                                    selectedTags.includes(tag)
                                        ? "bg-purple-500 text-white"
                                        : "border-purple-500 text-purple-500 hover:bg-purple-100"
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end gap-3 mt-4">
                    <button onClick={onClose} className="text-gray-500 hover:underline">
                        Cancel
                    </button>
                    <button onClick={handleDone} className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Nutrition;
