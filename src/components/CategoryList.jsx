import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories, onCategorySelect }) => {
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <section aria-label="Blog Categories" className="py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <li key={category} className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <button
                onClick={() => handleCategoryClick(category)}
                className="block w-full p-4 text-center text-lg font-semibold text-gray-800 hover:text-blue-500"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoryList;