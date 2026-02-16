import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover the Latest Fashion Trends
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Stay ahead of the fashion curve with our curated collections and exclusive offers.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/shop"
            className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            aria-label="Shop Now"
          >
            Shop Now
          </Link>
          <Link
            to="/sell"
            className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            aria-label="Sell Your Fashion"
          >
            Sell Your Fashion
          </Link>
          <Link
            to="/contact"
            className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            aria-label="Contact Us"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;