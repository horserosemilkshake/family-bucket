import './App.css';
import React, { Component } from 'react';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Order from './components/Order';
import Detailedpanel from './components/Detailedpanel';

function App() {
  return (
    <div name='Mainpage'>
      <Navbar/>
      <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Order />} />
              <Route path="teams" element={<h1>teams</h1>} />
              <Route path="*" element={<Detailedpanel />} />
              <Route path="*" element={<h1>fuck</h1>} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
