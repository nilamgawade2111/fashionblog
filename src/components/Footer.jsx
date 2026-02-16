import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">FashionBlog</h2>
            <p className="text-gray-400">Stay updated with the latest trends</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link to="/category/fashion" className="text-gray-400 hover:text-white transition-colors duration-300">
              Fashion
            </Link>
            <Link to="/category/lifestyle" className="text-gray-400 hover:text-white transition-colors duration-300">
              Lifestyle
            </Link>
            <Link to="/category/travel" className="text-gray-400 hover:text-white transition-colors duration-300">
              Travel
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} FashionBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;