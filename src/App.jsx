import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Router>
      <div className="text-center">
        <header className="bg-gray-800 px-5 py-20 text-white min-h-screen flex flex-col items-center justify-center text-[calc(10px+2vmin)]">
          <h1 className="text-4xl font-bold mb-4">Welcome to fashionblog</h1>
          <p className="text-xl">Your React application is running!</p>
        </header>
        <Routes>
          <Route path="/" element={<BlogListPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;