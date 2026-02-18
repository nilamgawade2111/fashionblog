import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';

const CategoryPage = () => {
  const { category } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredBlogs = blogsData.filter((blog) => blog.category?.toLowerCase() === category.toLowerCase());
      setBlogs(filteredBlogs);
    }
  }, [category]);

  if (blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">No blogs found in this category...</p>
      </div>
    );
  }

  return (
    <div className="p-5 bg-gray-100">
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 capitalize">{category} Blogs</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={blog.image ?? 'https://via.placeholder.com/150'}
                alt={blog.title ?? 'Blog image'}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{blog.title ?? 'Untitled'}</h3>
                <p className="text-gray-600 mt-2">{blog.excerpt ?? 'No excerpt available.'}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block mt-4 text-blue-500 hover:text-blue-700 transition-colors"
                  aria-label={`Read more about ${blog.title ?? 'this blog'}`}
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;