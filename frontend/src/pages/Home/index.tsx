import React from 'react';
import PresetCard from "./components/PresetCard";
import {usePresets} from "./hooks/usePresets";

const Home = () => {
    const { presets, setPresets } = usePresets();

    return (
        <div className='flex flex-col lg:w-3/4 sm:w-full p-8 gap-8'>
            <div>
                <h1 className='text-2xl font-bold tracking-tighter'>Your Preferences</h1>
                <div className='flex gap-4 mt-4 overflow-x-auto'>
                    <PresetCard name='+' color='purple' />
                    {
                        presets.map((preset: any, index) => (
                            <PresetCard key={index} name={preset.name} color='red' />
                        ))
                    }
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold tracking-tighter'>Suggested For You</h1>
            </div>
        </div>
    )
}

export default Home;
