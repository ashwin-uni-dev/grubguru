import {useNavigate} from "react-router-dom";

const ViewFoodAction = ({ food }: { food: any }) => {
    const navigate = useNavigate();

    const action = () => {
        localStorage.setItem('selectedFood', JSON.stringify(food));
        navigate('/food-info')
    }
    return (
        <button className='bg-purple-500 text-white text-sm p-2 rounded-lg font-semibold whitespace-nowrap'
                onClick={action}>View Food</button>
    )
}

export default ViewFoodAction;