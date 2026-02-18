import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import blogsData from '../data/blogs.json';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Update image URLs
    const updatedBlogs = blogsData.map(blog => ({
      ...blog,
      image: blog.image === 'https://example.com/images/sustainable-fashion.jpg'
        ? 'https://th.bing.com/th/id/OIP.qy8gLIbvZO-8ox82MVM9tAHaEK?w=274&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.3&pid=1.7&rm=3&defcache=1'
        : blog.image
    }));
    setBlogs(updatedBlogs);
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