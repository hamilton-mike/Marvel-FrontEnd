import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Search from './pages/Search';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="search" element={<Search />} />
      <Route path="/create/team/:id" element={<Edit />} />

    </Routes>
  </BrowserRouter>, rootElement
);
