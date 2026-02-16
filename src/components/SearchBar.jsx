import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSearch} className="flex items-center justify-center">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search blogs..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Search Blogs"
          />
          <button
            type="submit"
            className="ml-2 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
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