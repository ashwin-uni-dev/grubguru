import React, { useState } from "react";
import { usePreferences } from "../contexts/preferenceContext";

interface BudgetModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Budget = ({ isOpen, onClose }: BudgetModalProps) => {
    const { addOrUpdatePreference } = usePreferences();

    const [budget, setBudget] = useState<number>(10);

    const minBudget = 0;
    const maxBudget = 200;
    const stepBudget = 1;

    const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(Number(event.target.value));
    };

    const handleDone = () => {
        addOrUpdatePreference({ id: "budget", value: budget });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
                <h2 className="text-xl font-bold mb-4">What's your budget?</h2>

                {/* Budget Input Section */}
                <div className="space-y-4 mb-6">
                    <p className="text-4xl font-semibold tracking-tighter">
                        £
                        <input
                            type="number"
                            min={minBudget}
                            max={maxBudget}
                            step={stepBudget}
                            value={budget}
                            onChange={handleBudgetChange}
                            className="inline-block border-b-2 focus:outline-none ml-1"
                            style={{ width: `${String(budget).length * 20 + 20}px` }}
                        />
                    </p>

                    <input
                        type="range"
                        min={minBudget}
                        max={maxBudget}
                        step={stepBudget}
                        value={budget}
                        onChange={handleBudgetChange}
                        className="w-full"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 mt-4">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:underline transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDone}
                        className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Budget;
