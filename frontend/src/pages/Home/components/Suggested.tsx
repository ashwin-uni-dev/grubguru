import FoodCard from "../../../components/FoodCard";
import {useFoods} from "../hooks/useFoods";
import FoodCardSkeleton from "../../../components/skeletons/FoodCardSkeleton";

const Suggested = () => {
    const { foods } = useFoods();

    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                foods != null ? foods.map((food: any, index) => (
                    <FoodCard food={food} />
                )) : <div><FoodCardSkeleton /></div>
            }
        </div>
    )
}

export default Suggested;