import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Men', path: '/category/men' },
  { id: 2, name: 'Women', path: '/category/women' },
  { id: 3, name: 'Kids', path: '/category/kids' },
  { id: 4, name: 'Accessories', path: '/category/accessories' },
];

const CategoryList = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="block bg-gray-100 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              aria-label={`Explore ${category.name}`}
            >
              <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;