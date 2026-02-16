import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import BlogCard from '../components/BlogCard';
import CategoryList from '../components/CategoryList';
import blogsData from '../data/blogs.json';

const HomePage = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const categories = ['fashion', 'lifestyle', 'travel'];

  useEffect(() => {
    const featured = blogsData.slice(0, 3);
    const latest = blogsData.slice(3, 9);
    setFeaturedBlogs(featured);
    setLatestBlogs(latest);
  }, []);

  return (
    <>
      <Banner featuredBlogs={featuredBlogs} />
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                author={blog.author}
                date={blog.date}
                content={blog.content}
                image={blog.image}
              />
            ))}
          </div>
        </div>
      </section>
      <CategoryList categories={categories} />
    </>
  );
};

export default HomePage;