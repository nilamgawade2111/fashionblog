import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300">
            FashionBlog
          </Link>
        </div>
        <nav className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg hover:text-gray-300 ${isActive ? 'text-gray-300' : 'text-white'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/category/fashion"
            className={({ isActive }) =>
              `text-lg hover:text-gray-300 ${isActive ? 'text-gray-300' : 'text-white'}`
            }
          >
            Fashion
          </NavLink>
          <NavLink
            to="/category/lifestyle"
            className={({ isActive }) =>
              `text-lg hover:text-gray-300 ${isActive ? 'text-gray-300' : 'text-white'}`
            }
          >
            Lifestyle
          </NavLink>
          <NavLink
            to="/category/travel"
            className={({ isActive }) =>
              `text-lg hover:text-gray-300 ${isActive ? 'text-gray-300' : 'text-white'}`
            }
          >
            Travel
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;