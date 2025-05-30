import {UserPreference} from "../contexts/preferenceContext";
import {useNavigate} from "react-router-dom";

const PreferenceCard = ({ preference }: { preference : UserPreference }) => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-between items-center bg-purple-500 text-white p-2 rounded-lg'>
            <div>
                <p className='font-bold tracking-tighter'>{ preference.id }</p>
                <p className='text-xs'>{ preference.value }</p>
            </div>
            <p className='text-xs underline cursor-pointer'
               onClick={() => navigate(preference.id)}>Edit</p>
        </div>
    )
}

export default PreferenceCard;