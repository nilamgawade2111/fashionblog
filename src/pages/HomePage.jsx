import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import blogs from '../data/blogs.json';

const HomePage = () => {
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  const featuredBlogs = blogs.slice(0, 3); // Assuming the first 3 blogs are featured

  return (
    <>
      <Header />
      <HeroSection />
      <SearchBar onSearch={handleSearch} />
      <CategoryList />
      <section className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Featured Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Latest Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;