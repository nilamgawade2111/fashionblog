import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  if (!post) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <p className="text-gray-600">No blog post available.</p>
      </div>
    );
  }

  return (
    <article className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
        <p className="text-gray-600 mt-2">{post.excerpt}</p>
        <div className="mt-4">
          <Link to={`/blogs/${post.id}`} className="text-indigo-600 font-bold hover:underline" aria-label={`Read more about ${post.title}`}>
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;