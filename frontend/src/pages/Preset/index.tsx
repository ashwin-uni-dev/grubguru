import Layout from "../../components/Layout";
import React, { useState } from "react"; // Import useState
import { usePreferences } from "./contexts/preferenceContext";
import {useNavigate} from "react-router-dom";
import PreferenceCard from "./components/PreferenceCard";
import {BackendRequest} from "../../lib/api"; // Assuming this path is correct

const Preset = () => {
    const navigate = useNavigate();
    const { preferences, presetName, setPresetName } = usePreferences();
    const [selectedPreferenceId, setSelectedPreferenceId] = useState<string>('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPreferenceId(event.target.value.toLowerCase());
    };

    const handleDone = async () => {
        const presetInfo = { id: presetName, preferences };
        await BackendRequest.to('users/1/presets')
            .post(presetInfo)
            .execute();

        navigate('/');
    };

    return (
        <Layout back={false}>
            <h1 className='text-2xl font-bold tracking-tighter'>New Preset</h1>
            <div className='h-3/4 flex flex-col'>
                <div>
                    <label htmlFor="preference-select" className="block text-gray-700 text-sm font-bold mb-2">
                        Enter your preset name:
                    </label>
                    <input
                        id="preset-name"
                        value={presetName}
                        onChange={(e) => setPresetName(e.target.value)}
                        placeholder='Preset name...'
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />

                    <label htmlFor="preference-select" className="block text-gray-700 text-sm font-bold mt-4 mb-2">
                        Choose a preference to set:
                    </label>
                        <select
                            id="preference-select"
                            value={selectedPreferenceId}
                            onChange={handleSelectChange}
                            className="block w-full p-2 border border-gray-300 rounded-lg"
                        >
                            <option value="">-- Select an option --</option>
                            <option value="mood">Mood</option>
                            <option value="budget">Budget</option>
                            <option value="time">Time</option>
                            <option value="nutrition">Nutrition</option>
                        </select>
                    <button className='text-purple-500 text-sm font-semibold'
                            onClick={() => navigate(selectedPreferenceId)}>Set Preference</button>
                </div>
                <div className='flex flex-col mt-4 gap-2'>
                    { preferences.map((preference, index) => (
                        <PreferenceCard preference={preference} key={index} />
                    ))}
                </div>
                <div className='mt-auto self-end pt-4 text-purple-500 font-bold cursor-pointer' onClick={handleDone}>
                    Done
                </div>
            </div>
        </Layout>
    );
}

export default Preset;