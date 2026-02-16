import React, { useState } from 'react';

const SearchFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Search Term:', searchTerm);
    console.log('Category:', category);
    console.log('Price Range:', priceRange);
  };

  return (
    <section className="bg-white py-6">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Search"
          />
          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Category"
          >
            <option value="all">All Categories</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="accessories">Accessories</option>
          </select>
          <select
            value={priceRange}
            onChange={handlePriceRangeChange}
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Price Range"
          >
            <option value="all">All Prices</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200+">$200+</option>
          </select>
          <button
            type="submit"
            className="w-full md:w-auto bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
            aria-label="Apply Filters"
          >
            Apply Filters
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchFilters;