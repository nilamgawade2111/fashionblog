import React from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';

const CategoryList = () => {
  const categories = blogsData.reduce((acc, blog) => {
    if (blog?.categories) {
      blog.categories.forEach((category) => {
        if (!acc.some((cat) => cat.name === category)) {
          acc.push({ id: acc.length + 1, name: category });
        }
      });
    }
    return acc;
  }, []);

  if (categories.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No categories available.</p>
      </div>
    );
  }

  return (
    <section aria-label="Blog Categories" className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <li key={category.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Link
                to={`/categories/${category.name}`}
                className="block p-4 text-center"
                aria-label={`Explore ${category.name} category`}
              >
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoryList;