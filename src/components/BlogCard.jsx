import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{blog.title}</h3>
        <p className="text-gray-600 mt-2">{blog.summary}</p>
        <Link
          to={`/blog/${blog.id}`}
          className="inline-block mt-4 text-blue-500 hover:text-blue-700 transition-colors"
          aria-label={`Read more about ${blog.title}`}
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;