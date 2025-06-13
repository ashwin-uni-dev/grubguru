import React, {useEffect, useState} from 'react';
import {usePresets} from "./hooks/usePresets";
import {useNavigate, useSearchParams} from "react-router-dom";
import Layout from "../../components/Layout";
import HorizontalSection from "../../components/HorizontalSection";
import Badge from '../../components/Badge';
import Search from "../../components/Search";
import BadgeSkeleton from "../../components/skeletons/BadgeSkeleton";
import ViewButton from "./components/ViewButton";
import Suggested from "./components/Suggested";
import Boards from "./components/Boards";

const Home = () => {
    const { presets } = usePresets();
    let navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [currentView, setCurrentView] = useState(() => {
        const viewFromUrl = searchParams.get('view');
        const parsedView = parseInt(viewFromUrl || '0', 10);
        return (parsedView === 0 || parsedView === 1) ? parsedView : 0;
    });

    useEffect(() => {
        searchParams.set('view', currentView.toString());
        setSearchParams(searchParams);
    }, [currentView, searchParams, setSearchParams]);

    const viewPreset = (preset: any) => {
        localStorage.setItem('selectedPreset', JSON.stringify(preset));
        navigate('/food-view?source=preset');
    }

    const handleSubmit = (query: string) => {
        localStorage.setItem('searchQuery', query);
        navigate(`/search-results`);
    }
    return (
        <Layout back={false}>
            <Search placeholder={'Search for food...'} submit={handleSubmit}/>
            <HorizontalSection title='Your presets'>
                <Badge onClick={() => navigate('/preset')}>
                    <p className='font-bold text-xl'>+</p>
                </Badge>
                {
                    presets != null ? presets.map((preset: any, index) => (
                        <Badge key={index} onClick={() => viewPreset(preset)}>
                            <p className='text-sm'>{ preset.id }</p>
                        </Badge>
                    )) : new Array(10).fill(0).map(_ => <BadgeSkeleton/>)
                }
            </HorizontalSection>
            <div className='flex flex-row gap-2 mt-4'>
                <ViewButton view={currentView == 0} onClick={() => setCurrentView(0)}>Suggested For You</ViewButton>
                <ViewButton view={currentView == 1} onClick={() => setCurrentView(1)}>Your Boards</ViewButton>
            </div>
            <div className='mt-1'>
                {
                    currentView == 0 && <Suggested />
                }
                {
                    currentView == 1 && <Boards />
                }
            </div>
        </Layout>
    )
}

export default Home;
