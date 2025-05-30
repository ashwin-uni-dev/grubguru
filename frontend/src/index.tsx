import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home';
import Food from './pages/Food';
import Preset from "./pages/Preset";
import Mood from './pages/Preset/Mood';
import PreferenceRoutesWrapper from './pages/Preset/preferenceWrapper';
import Budget from './pages/Preset/Budget';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/food' element={<Food />} />
              <Route path="/preset" element={<PreferenceRoutesWrapper />}>
                  <Route index element={<Preset />} />
                  <Route path="mood" element={<Mood />} />
                  <Route path="budget" element={<Budget />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
