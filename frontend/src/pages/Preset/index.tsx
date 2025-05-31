import Layout from "../../components/Layout";
import React from "react"; // Import useState
import { usePreferences } from "./contexts/preferenceContext";
import {useNavigate} from "react-router-dom";
import Input from "../../components/Input";
import ProgressivePage from "../../components/ProgressivePage";
import Badge from "../../components/Badge";

const Preset = () => {
    const navigate = useNavigate();
    const { preferences, presetName, setPresetName } = usePreferences();
    const suggestions = ["Lunch Prep", "Weeknight Quick", "Low Carb"];
    return (
        <Layout back={false}>
            <ProgressivePage title="New Preset" action={() => navigate('preferences')}>
                <span className="font-medium">Preset name</span>
                <Input
                    placeholder="Enter your preset name..."
                    value={presetName}
                    onChange={(e:any) => setPresetName(e.target.value)}
                />
                <p className="text-xs text-right text-gray-400 mt-1">
                    {presetName.length}/30 characters
                </p>

                <p className="text-sm text-gray-500 mt-4">
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
            </ProgressivePage>

        </Layout>
    );
}

export default Preset;