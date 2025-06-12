import Layout from "../../components/Layout";
import React from "react"; // Import useState
import { usePreferences } from "./contexts/preferenceContext";
import {useNavigate} from "react-router-dom";
import Input from "../../components/Input";
import ProgressivePage from "../../components/ProgressivePage";
import Badge from "../../components/Badge";

const Preset = () => {
    const navigate = useNavigate();
    const { presetName, setPresetName } = usePreferences();
    const suggestions = ["Lunch Prep", "Weeknight Quick", "Low Carb"];

    const proceed = () => {
        if (presetName.trim() === '') {
            alert('Preset Name can not be empty!')
            return;
        }
        navigate('preferences')
    }

    return (
            <ProgressivePage title="New Preset" action={proceed}>
                <div>
                    <span className="font-medium">Preset name</span>
                    <Input
                        placeholder="Enter your preset name..."
                        value={presetName}
                        onChange={(e:any) => setPresetName(e.target.value)}
                    />

                    <p className="text-sm text-gray-500 mt-1">
                        Choose a name that describes when or how you’ll use this preset.
                    </p>

                    <div className="mt-6">
                        <p className="text-sm font-semibold mb-2">Suggestions:</p>
                        <div className="flex flex-wrap gap-2">
                            {suggestions.map((name) => (
                                <Badge
                                    key={name}
                                    onClick={() => setPresetName(name)}
                                >
                                    <p className='text-sm'>{name}</p>
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </ProgressivePage>
    );
}

export default Preset;