import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CategoryPage from './pages/CategoryPage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SellPage from './pages/SellPage';
import SignupPage from './pages/SignupPage';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import products from './data/products.json';

function App() {
  return (
    <Router>
      <Header />
      <div className="text-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/shop" element={<ShopPage products={products} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/contact-info" element={<ContactInfo />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;