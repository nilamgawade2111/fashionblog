import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data/blogs.json';

const BlogListPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogList, setBlogList] = useState([]);

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

  if (loading) {
    return <div className="text-center py-8">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">All Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogList.map((blog) => (
          <article key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.excerpt}</p>
              <Link
                to={`/blogs/${blog.id}`}
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                aria-label={`Read more about ${blog.title}`}
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;