import Layout from "../../components/Layout";
import React, { useState } from "react";

const Preset = () => {

    return (
        <Layout back={true}>
            <div>
                <h1 className='text-2xl font-bold tracking-tighter'>Select Your Preferences</h1>
            </div>
            <div className='mt-8'>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Choose a preference to set:</label>
                    <select >
                        <option value="">Select a preference</option>
                        <option value="mood">Mood</option>
                        <option value="budget">Budget</option>
                        <option value="time">Time</option>
                        <option value="nutrition">Nutrition</option>
                    </select>
                </div>
            </div>
        </Layout>
    );
}

export default Preset;