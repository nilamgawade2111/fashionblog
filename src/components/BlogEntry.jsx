import React from 'react';
import { Link } from 'react-router-dom';

const BlogEntry = ({ id, title, author, date, content, image }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={`/images/${image}`}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{author} - {new Date(date).toLocaleDateString()}</p>
        <p className="text-gray-700 mb-4">{content.substring(0, 100)}...</p>
        <Link to={`/blog/${id}`} className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </article>
  );
};

export default BlogEntry;