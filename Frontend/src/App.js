import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from '../src/pages/Home';
import NotFound from '../src/pages/NotFound';
import Success from '../src/pages/Success';

function App() {
  return (
    <><Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Success/>} />
        <Route path="/" element={<NotFound/>} />
      </Routes>
      <Toaster />
    </Router></>
  );
}

export default App;
