import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Search from './pages/Search';
import Home from './pages/Home';
import Create from './pages/Create';
import TeamDetail from './pages/TeamDetail';
import HeroDetail from './pages/HeroDetail'
import Edit from './pages/Edit'
import Trivia from './pages/Trivia'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/create" element={<Create />} />
      <Route path="/home/search" element={<Search />} />
      <Route path="/home/trivia" element={<Trivia />} />
      <Route path="/home/create/team/:id" element={<TeamDetail />} />
      <Route path="/home/search/hero/:id" element={<HeroDetail />} />
      <Route path="/home/search/team/:id/edit" element={<Edit />} />
    </Routes>
  </BrowserRouter>, rootElement
);
