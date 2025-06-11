import FoodCard from "../../../components/FoodCard";
import {useFoods} from "../hooks/useFoods";
import FoodCardSkeleton from "../../../components/skeletons/FoodCardSkeleton";
import {useEffect, useMemo, useState} from "react";
import ActionButton from "./ActionButton";
import {useSearchParams} from "react-router-dom";
import {ListFilter} from "lucide-react";

const Suggested = () => {
    const { foods } = useFoods();
    const [searchParams, setSearchParams] = useSearchParams();

    const tags: any[] = useMemo(() => {
        if (!foods) return [];

        const set = new Set()
        set.add('all');

        for (const food of foods) {
            food.tags.forEach((tag: string) => set.add(tag));
        }

        return Array.from(set);
    }, [foods])

    const [selectedTag, setSelectedTag] = useState(() => {
        const tagFromUrl = searchParams.get('tag');
        return tags.includes(tagFromUrl || '') ? (tagFromUrl || 'all') : 'all';
    });

    const applyFilter = (food: any) => {
        if (selectedTag === 'all') return true;
        return food.tags.includes(selectedTag);
    }

    useEffect(() => {
        searchParams.set('tag', selectedTag);
        setSearchParams(searchParams); // Update the URL
    }, [selectedTag, searchParams, setSearchParams]);

    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex flex-row gap-1 overflow-x-scroll flex-grow mb-2'>
                        {
                            tags.map((tag: string, index) => (
                                <ActionButton selected={selectedTag == tag} onClick={() => setSelectedTag(tag)}>
                                    {
                                        tag.split(' ').map((word: string, index) => (
                                            word.charAt(0).toUpperCase() + word.slice(1)
                                        )).join(' ')
                                    }
                                </ActionButton>
                            ))
                        }
                </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
                {
                    foods != null ? foods.filter(applyFilter).map((food: any, index) => (
                        <FoodCard food={food} />
                    )) :
                        <>
                            <FoodCardSkeleton />
                            <FoodCardSkeleton />
                            <FoodCardSkeleton />
                            <FoodCardSkeleton />
                        </>
                }
            </div>
        </div>
    )
}

export default Suggested;