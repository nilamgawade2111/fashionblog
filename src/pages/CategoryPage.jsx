import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';
import BlogEntry from '../components/BlogEntry';

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const filtered = blogsData.filter((blog) =>
      blog.tags.includes(category)
    );
    setFilteredBlogs(filtered);
  }, [category]);

  return (
    <main className="bg-gray-100 min-h-screen p-5">
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 capitalize">
          {category} Blogs
        </h2>
        {filteredBlogs.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogEntry
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
        ) : (
          <p className="text-center text-gray-700">
            No blogs found for this category.
          </p>
        )}
        <div className="mt-8 text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Blog List
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;