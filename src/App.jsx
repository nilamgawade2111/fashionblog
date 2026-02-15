import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="text-center">
        <header className="bg-gray-800 px-5 py-20 text-white min-h-screen flex flex-col items-center justify-center text-[calc(10px+2vmin)]">
          <h1 className="text-4xl font-bold mb-4">Welcome to fashionblog</h1>
          <p className="text-xl">Your React application is running!</p>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;