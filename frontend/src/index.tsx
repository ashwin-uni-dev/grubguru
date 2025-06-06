import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Food from './pages/ViewPreset';
import Preset from "./pages/Preset";
import Mood from './pages/Preset/Mood';
import PreferenceRoutesWrapper from './pages/Preset/preferenceWrapper';
import Budget from './pages/Preset/Budget';
import Preferences from "./pages/Preset/Preferences";
import SearchResults from "./pages/SearchResults";
import FoodPage from "./pages/FoodPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ReviewPage from "./pages/ReviewPage";
import FoodListPage from "./pages/FoodListPage";


const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/food" element={<Food />}/>
                <Route path="/food-view" element={<FoodListPage />}/>
                <Route path="/search-results" element={<SearchResults />} />
                <Route path="/food-info" element={<FoodPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reviews" element={<ReviewPage />} />
                <Route path="/preset" element={<PreferenceRoutesWrapper />}>
                    <Route index element={<Preset />} />
                    <Route path="preferences" element={<Preferences />} />
                    <Route path="mood" element={<Mood />} />
                    <Route path="budget" element={<Budget />} />
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
