import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import "leaflet/dist/leaflet.css";

import Home from './pages/Home';
import Food from './pages/ViewPreset';
import Preset from "./pages/Preset";
import PreferenceRoutesWrapper from './pages/Preset/preferenceWrapper';
import Preferences from "./pages/Preset/Preferences";
import SearchResults from "./pages/SearchResults";
import FoodPage from "./pages/FoodPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ReviewPage from "./pages/ReviewPage";
import FoodListPage from "./pages/FoodListPage";
import Social from "./pages/Social";
import FriendSearch from "./pages/FriendSearch";
import NotificationPage from './pages/NotificationPage';
import Poll from './pages/Poll';
import {PollProvider, PollProviderWrapper} from "./contexts/PollContext";


const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route element={<PollProviderWrapper />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/food-view" element={<FoodListPage />} />
                    <Route path="/social" element={<Social />} />
                    <Route path="/notifications" element={<NotificationPage />} />
                    <Route path="/social-search" element={<FriendSearch />} />
                    <Route path="/search-results" element={<SearchResults />} />
                    <Route path="/food-info" element={<FoodPage />} />
                    <Route path="/live-poll" element={<Poll />} />
                    <Route path="/reviews" element={<ReviewPage />} />
                    <Route path="/preset" element={<PreferenceRoutesWrapper />}>
                        <Route index element={<Preset />} />
                        <Route path="preferences" element={<Preferences />} />
                    </Route>
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
