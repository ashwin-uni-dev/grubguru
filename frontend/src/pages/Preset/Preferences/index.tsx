import ProgressivePage from "../../../components/ProgressivePage";
import Layout from "../../../components/Layout";
import React from "react";
import PreferenceCard from "./components/PreferenceCard";
import {useNavigate} from "react-router-dom";
import {usePreferences} from "../contexts/preferenceContext";
import { BackendRequest } from "../../../lib/api";

const Preferences = () => {
    const navigate = useNavigate();
    const preferenceOptions = [
        { name: 'Mood', icon: 'hamburger' },
        { name: 'Budget', icon: 'hand-coins' },
        { name: 'Time', icon: 'timer'},
        { name: 'Nutrition', icon: 'leaf' },
    ]

    const { preferences, presetName } = usePreferences();

    const handleDone = () => {
        BackendRequest
            .to('/users/1/presets')
            .post({
                id: presetName,
                preferences
            })
            .execute()

        navigate('/');
    }

    return (
        <Layout back={true}>
            <ProgressivePage title='Setup Your Preferences' action={() => handleDone()} final={true}>
                <p className="font-medium mt-4">Choose your preferences</p>
                <div className='grid grid-cols-2 gap-4 mt-2'>
                    {
                        preferenceOptions.map((preference: any, index) => (
                            <PreferenceCard preference={preference.name}
                                            icon={preference.icon}
                                            onClick={() => navigate(`../${preference.name.toLowerCase()}`)}
                                            key={index} />
                        ))
                    }
                </div>
                <p className="text-sm text-gray-500 mt-4">
                    Your chosen preferences will be shown below.
                </p>
                {
                    preferences.map((preference: any, index) => (
                        <p>{JSON.stringify(preference)}</p>
                    ))
                }
            </ProgressivePage>
        </Layout>
    )
}

export default Preferences;