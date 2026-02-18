import React from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';

const Banner = () => {
  const featuredBlogs = blogsData.filter(blog => blog.isFeatured);

  if (featuredBlogs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No featured blogs available.</p>
      </div>
    );
  }

  return (
    <section aria-label="Featured Blogs" className="py-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Featured Blogs</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBlogs.map(blog => (
            <article key={blog.id} className="bg-white text-gray-900 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block mt-4 text-blue-500 hover:text-blue-700 transition-colors"
                  aria-label={`Read more about ${blog.title}`}
                >
                  Read More
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