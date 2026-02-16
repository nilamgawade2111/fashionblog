import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="text-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sell" element={<HomePage />} />
          <Route path="/shop" element={<AboutUs />} />
          <Route path="/signup" element={<BlogsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;