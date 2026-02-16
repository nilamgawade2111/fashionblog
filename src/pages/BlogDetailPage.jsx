import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from '../data/blogs.json';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const foundBlog = blogs.find((b) => b.id === parseInt(id, 10));
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError('Blog not found');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load blog');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading blog...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <article className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-6">{blog.content}</p>
        <div className="text-gray-500 text-sm">
          <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString()}</span>
        </div>
        <Link to="/blogs" className="inline-block mt-6 text-blue-600 hover:text-blue-800 transition duration-300">
          &larr; Back to Blog List
        </Link>
      </div>
    </article>
  );
};

export default BlogDetailPage;