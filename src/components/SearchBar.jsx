import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query, category);
    }
  };

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search blogs..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Search Blogs"
          />
          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Select Category"
          >
            <option value="all">All Categories</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="accessories">Accessories</option>
          </select>
          <button
            type="submit"
            className="w-full md:w-auto bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
            aria-label="Search"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;