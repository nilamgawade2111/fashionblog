import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import CategoryList from '../components/CategoryList';
import Banner from '../components/Banner';
import blogsData from '../data/blogs.json';

const HomePage = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {
    setLatestBlogs(blogsData.slice(0, 6)); // Assuming we want to show the latest 6 blogs
    setFeaturedBlogs(blogsData.filter(blog => blog.isFeatured).slice(0, 3));
  }, []);

  return (
    <div className="p-5 bg-gray-100">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Fashion Blog</h1>
        <p className="text-xl text-gray-700 mb-8">
          Discover the latest trends, tips, and insights in the world of fashion.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
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
      <Banner featuredBlogs={featuredBlogs} />
      <section className="max-w-4xl mx-auto mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Blogs</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
      <section className="max-w-4xl mx-auto mt-8">
        <CategoryList />
      </section>
    </div>
  );
};

export default HomePage;