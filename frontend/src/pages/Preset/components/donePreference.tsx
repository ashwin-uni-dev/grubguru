import React from "react";
import {usePreferences, UserPreference} from "../contexts/preferenceContext";
import {useNavigate} from "react-router-dom";

const DonePreference = ({ id, value }: { id: string, value: any}) => {
    const { addOrUpdatePreference } = usePreferences();
    const navigate = useNavigate();

    const handleDone = () => {
        addOrUpdatePreference({ id, value });
        navigate('/preset');
    };

    return (
        <p
            onClick={handleDone}
            className='font-bold text-purple-500 cursor-pointer'>
            Done
        </p>
    )
}

export default DonePreference;