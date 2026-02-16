import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';
import SearchBar from '../components/SearchBar';
import BlogList from '../components/BlogList';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const [categories, setCategories] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    setBlogs(blogsData);
    setFilteredBlogs(blogsData);
    const uniqueCategories = [...new Set(blogsData.flatMap(blog => blog.tags))];
    setCategories(uniqueCategories);
  }, []);

  const handleSearch = (query) => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogs(filtered);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (category) => {
    const filtered = category === 'all' ? blogs : blogs.filter((blog) => blog.tags.includes(category));
    setFilteredBlogs(filtered);
    setCurrentPage(1);
  };

  const handleDateFilter = (date) => {
    setSelectedDate(date);
    const filtered = date ? blogs.filter((blog) => new Date(blog.date).toISOString().split('T')[0] === date) : blogs;
    setFilteredBlogs(filtered);
    setCurrentPage(1);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <section className="max-w-4xl mx-auto p-5">
        <h2 className="text-3xl font-bold text-center mb-8">Blog Entries</h2>
        <div className="flex justify-center mb-4 space-x-4">
          <select
            onChange={(e) => handleCategoryFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            aria-label="Filter by category"
          >
            <option value="all">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => handleDateFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            aria-label="Filter by publication date"
          />
        </div>
        <BlogList blogs={currentBlogs} />
        <div className="flex justify-center mt-8">
          <nav aria-label="Page navigation">
            <ul className="inline-flex items-center -space-x-px">
              {[...Array(Math.ceil(filteredBlogs.length / blogsPerPage)).keys()].map((number) => (
                <li key={number}>
                  <button
                    onClick={() => paginate(number + 1)}
                    className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === number + 1 ? 'bg-gray-200' : ''}`}
                  >
                    {number + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default BlogListPage;