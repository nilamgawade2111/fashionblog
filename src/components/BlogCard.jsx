import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ id, title, author, date, content, image }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <article
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      aria-label={`Blog card for ${title}`}
    >
      <img
        src={`/images/${image}`}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{author} - {new Date(date).toLocaleDateString()}</p>
        <p className="text-gray-700 mb-4">{content.substring(0, 100)}...</p>
        <span className="text-blue-500 hover:underline">Read more</span>
      </div>
    </article>
  );
};

export default BlogCard;