import React, {useState} from 'react';
import {usePresets} from "./hooks/usePresets";
import {useNavigate} from "react-router-dom";
import Layout from "../../components/Layout";
import HorizontalSection from "../../components/HorizontalSection";
import Badge from '../../components/Badge';
import Search from "../../components/Search";
import BadgeSkeleton from "../../components/skeletons/BadgeSkeleton";
import {useNotifs} from "./hooks/useNotifs";
import ViewButton from "./components/ViewButton";
import Suggested from "./components/Suggested";
import Boards from "./components/Boards";

const Home = () => {
    useNotifs();

    const { presets } = usePresets();
    const [currentView, setCurrentView] = useState(0);
    let navigate = useNavigate();

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
                    )) : (
                        <><BadgeSkeleton/><BadgeSkeleton/><BadgeSkeleton/></>
                    )
                }
            </HorizontalSection>
            <div className='flex flex-row gap-2 mt-4'>
                <ViewButton view={currentView == 0} onClick={() => setCurrentView(0)}>Suggested For You</ViewButton>
                <ViewButton view={currentView == 1} onClick={() => setCurrentView(1)}>Your Boards</ViewButton>
            </div>
            <div className='mt-4'>
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
