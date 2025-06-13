import React, {useEffect, useMemo, useState} from "react";
import ActionButton from "./ActionButton";
import FoodListItem from "./FoodListItem";
import FoodListItemSkeleton from "./skeletons/FoodItemSkeleton";
import FoodCard from "./FoodCard";
import FoodCardSkeleton from "./skeletons/FoodCardSkeleton";
import {useSearchParams} from "react-router-dom";

const FilterableFoods = ({ foods, list }: any) => {
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
        setSearchParams(searchParams, { replace: true }); // Update the URL
    }, [selectedTag, searchParams, setSearchParams]);

    // @ts-ignore
    return (
        <>
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
                <div className= { (list ? '' : 'grid grid-cols-2 gap-2') + ' overflow-y-scroll flex-grow pb-5' }>
                    {foods != null ? (
                        foods.filter(applyFilter).map((food: any, index: number) => (
                            <div key={index}>
                                { list ?
                                    <>
                                        <FoodListItem food={food} />
                                        <hr className='my-4' />
                                    </>
                                    : <FoodCard food={food} /> }

                            </div>
                        ))
                    ) :
                        <>
                            { list &&
                                new Array(10).fill(0).map(_ =>
                                    <FoodListItemSkeleton/>
                                )
                            }
                            { !list &&
                                new Array(10).fill(0).map(_ =>
                                    <FoodCardSkeleton />
                                )
                            }
                        </>
                    }
                </div>
        </>
    );
};

export default FilterableFoods;
