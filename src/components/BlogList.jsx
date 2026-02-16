import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import blogsData from '../data/blogs.json';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setBlogs(blogsData);
  }, []);

  if (blogs.length === 0) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <p className="text-gray-600">No blogs available at the moment.</p>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} post={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;