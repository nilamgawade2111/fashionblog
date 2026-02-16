import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-400 transition duration-300" aria-label="FashionBlog Logo">
            FashionBlog
          </Link>
        </div>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-400 transition duration-300" aria-label="Home">
            Home
          </Link>
          <Link to="/blogs" className="hover:text-gray-400 transition duration-300" aria-label="Blogs">
            Blogs
          </Link>
          <Link to="/about" className="hover:text-gray-400 transition duration-300" aria-label="About Us">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-400 transition duration-300" aria-label="Contact Us">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;