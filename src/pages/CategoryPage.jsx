import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blogs.json';
import BlogCard from '../components/BlogCard';

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div className="text-center py-8">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center capitalize">{category} Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;