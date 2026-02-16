import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ featuredBlogs }) => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Featured Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBlogs.map((blog) => (
            <article key={blog.id} className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
      </div>
    </section>
  );
};

export default Banner;