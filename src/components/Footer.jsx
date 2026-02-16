import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">FashionBlog</h2>
            <p className="text-gray-400">Stay stylish with us</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-400 transition duration-300" aria-label="Home">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-400 transition duration-300" aria-label="About Us">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-gray-400 transition duration-300" aria-label="Contact Us">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FashionBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;