import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data/blogs.json';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';

const BlogListPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogList, setBlogList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setBlogList(blogs);
        setLoading(false);
      } catch (err) {
        setError('Failed to load blogs');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredBlogs = blogList.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="text-center py-8">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">All Blogs</h1>
      <div className="mb-6">
        <SearchBar onSearch={handleSearchChange} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <BlogCard post={blog} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;