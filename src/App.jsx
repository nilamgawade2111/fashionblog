import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="text-center">
        <header className="bg-gray-800 px-5 py-20 text-white min-h-screen flex flex-col items-center justify-center text-[calc(10px+2vmin)]">
          <p className="text-xl">Your React application is running!</p>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;