import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blogs.json';
import BlogCard from '../components/BlogCard';
import CategoryList from '../components/CategoryList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBlogsByCategory = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const categoryBlogs = blogs.filter((blog) => blog.category.toLowerCase() === category.toLowerCase());
        if (categoryBlogs.length > 0) {
          setFilteredBlogs(categoryBlogs);
        } else {
          setError('No blogs found for this category');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load blogs');
        setLoading(false);
      }
    };

    fetchBlogsByCategory();
  }, [category]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAndSearchedBlogs = filteredBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="text-center py-8" aria-label="Loading blogs">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500" aria-label="Error message">{error}</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center capitalize" aria-label={`${category} Blogs`}>{category} Blogs</h1>
        <CategoryList />
        <div className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search blogs..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search blogs"
          />
        </div>
        {filteredAndSearchedBlogs.length === 0 ? (
          <div className="text-center py-8 text-gray-500" aria-label="No blogs found message">No blogs found for this category.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredAndSearchedBlogs.map((blog) => (
              <BlogCard key={blog.id} post={blog} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;