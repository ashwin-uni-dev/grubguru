import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';

import Home from './pages/Home';
import Food from './pages/Food';
import Preset from "./pages/Preset";
import Mood from './pages/Preset/Mood';
import PreferenceRoutesWrapper from './pages/Preset/preferenceWrapper';
import Budget from './pages/Preset/Budget';
import Preferences from "./pages/Preset/Preferences";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/food" element={<PageWrapper><Food /></PageWrapper>} />
                <Route path="/preset" element={<PreferenceRoutesWrapper />}>
                    <Route index element={<PageWrapper><Preset /></PageWrapper>} />
                    <Route path="preferences" element={<PageWrapper><Preferences /></PageWrapper>} />
                    <Route path="mood" element={<PageWrapper><Mood /></PageWrapper>} />
                    <Route path="budget" element={<PageWrapper><Budget /></PageWrapper>} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
        >
            {children}
        </motion.div>
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
