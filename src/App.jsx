import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CategoryPage from './pages/CategoryPage';
import HomePage from './pages/HomePage';
import FashionPage from './pages/FashionPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogListPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/fashion" element={<FashionPage />} />
            <Route path="/category/lifestyle" element={<CategoryPage />} />
            <Route path="/category/travel" element={<CategoryPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;