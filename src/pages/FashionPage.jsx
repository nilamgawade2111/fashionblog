import React from 'react';
import BlogCard from '../components/BlogCard';
import blogsData from '../data/blogs.json';

const FashionPage = () => {
  const fashionBlogs = blogsData.filter(blog => blog.tags.includes('fashion'));

  return (
    <main className="bg-gray-100">
      <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Fashion Insights</h1>
          <p className="text-lg">Explore the latest trends and insights in the world of fashion.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Fashion Blogs</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fashionBlogs.map(blog => (
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

      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto">
            We are a team of passionate fashion enthusiasts dedicated to bringing you the latest trends and insights from the fashion world. Our mission is to inspire and empower our readers with the knowledge and confidence to express their unique style.
          </p>
        </div>
      </section>
    </main>
  );
};

export default FashionPage;