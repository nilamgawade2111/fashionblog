import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setBlogs(blogsData);
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen p-5">
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Blog Entries</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={`/images/${blog.image}`}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.author} - {new Date(blog.date).toLocaleDateString()}</p>
                <p className="text-gray-700 mb-4">{blog.content.substring(0, 100)}...</p>
                <Link to={`/blog/${blog.id}`} className="text-blue-500 hover:underline">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogListPage;