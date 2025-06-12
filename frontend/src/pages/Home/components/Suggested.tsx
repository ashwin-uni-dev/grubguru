import {useFoods} from "../hooks/useFoods";
import FilterableFoods from "../../../components/FilterableFoods";

const Suggested = () => {
    const { foods } = useFoods();

    return (
        <div>
            <FilterableFoods foods={foods} list={false} />
        </div>
    )
}

export default Suggested;