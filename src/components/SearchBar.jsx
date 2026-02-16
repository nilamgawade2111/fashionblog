import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center justify-center py-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search blog titles..."
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search blog titles"
      />
    </div>
  );
};

export default SearchBar;