import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import blogsData from '../data/blogs.json';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setBlogs(blogsData);
  }, []);

  if (blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="p-5 bg-gray-100">
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Blog Posts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;