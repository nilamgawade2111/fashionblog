import React, { useState, useEffect } from 'react';
import blogsData from '../data/blogs.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import BlogList from '../components/BlogList';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsData);
    setFilteredBlogs(blogsData);
  }, []);

  const handleSearch = (query) => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <section className="max-w-4xl mx-auto p-5">
        <h2 className="text-3xl font-bold text-center mb-8">Blog Entries</h2>
        <BlogList blogs={filteredBlogs} />
      </section>
      <Footer />
    </>
  );
};

export default BlogListPage;