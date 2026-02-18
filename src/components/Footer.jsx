import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Fashion Blog</h2>
          <p className="text-gray-400">© 2023 Fashion Blog. All rights reserved.</p>
        </div>
        <nav aria-label="Footer Navigation" className="flex space-x-4">
          <Link
            to="/about"
            className="hover:text-blue-400 transition-colors"
            aria-label="About us"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-400 transition-colors"
            aria-label="Contact us"
          >
            Contact
          </Link>
          <Link
            to="/privacy"
            className="hover:text-blue-400 transition-colors"
            aria-label="Privacy policy"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-blue-400 transition-colors"
            aria-label="Terms of service"
          >
            Terms of Service
          </Link>
        </nav>
        <div className="mt-4 md:mt-0">
          <p className="text-gray-400">Follow us on:</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-400 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;