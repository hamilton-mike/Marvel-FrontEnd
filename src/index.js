import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Hero from './components/Hero/Hero';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="landing" element={<LandingPage />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>, rootElement
);
