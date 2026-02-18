import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className="p-5 bg-gray-100 min-h-screen">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Fashion Blog</h1>
        <p className="text-xl text-gray-700 mb-8">
          Discover the latest trends, tips, and insights in the world of fashion.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/blogs"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            aria-label="View all blog posts"
          >
            View Blogs
          </Link>
          <Link
            to="/categories"
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors"
            aria-label="Explore categories"
          >
            Explore Categories
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;