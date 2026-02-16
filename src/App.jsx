import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CategoryPage from './pages/CategoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import SellPage from './pages/SellPage';
import ShopPage from './pages/ShopPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="text-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;