import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link to="/" aria-label="Home">
            Fashion Blog
          </Link>
        </h1>
        <nav aria-label="Main Navigation">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/blogs"
                className="hover:text-blue-400 transition-colors"
                aria-label="View all blog posts"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="hover:text-blue-400 transition-colors"
                aria-label="Explore categories"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 transition-colors"
                aria-label="About us"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition-colors"
                aria-label="Contact us"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;