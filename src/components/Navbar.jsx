import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-400 transition duration-300">
            FashionBlog
          </Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400 transition duration-300">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;