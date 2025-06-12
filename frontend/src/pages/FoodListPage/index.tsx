import React, {useEffect, useMemo, useState} from "react";
import BackablePage from "../../components/BackablePage";
import Layout from "../../components/Layout";
import { useFoods } from './hooks/useFoods';
import "leaflet/dist/leaflet.css";
import FilterableFoods from "../../components/FilterableFoods";

const FoodListPage = () => {
    const { foods, name } = useFoods();
    const [position, setPosition] = useState<[number, number] | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition([pos.coords.latitude, pos.coords.longitude]);
            },
            () => {
                setPosition([51.505, -0.09]); // fallback (London)
            }
        );
    }, []);

    return (
        <BackablePage title={<p className='font-semibold'>{name}</p>}>
            <Layout back={true}>
                <FilterableFoods foods={foods} list={true} />
            </Layout>
        </BackablePage>
    );
};

export default FoodListPage;
