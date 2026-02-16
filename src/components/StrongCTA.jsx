import React from 'react';
import { Link } from 'react-router-dom';

const StrongCTA = () => {
  return (
    <section className="bg-indigo-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Elevate Your Style?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join our fashion community today and start exploring the latest trends.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/signup"
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            aria-label="Sign Up"
          >
            Sign Up
          </Link>
          <Link
            to="/shop"
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            aria-label="Shop Now"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StrongCTA;