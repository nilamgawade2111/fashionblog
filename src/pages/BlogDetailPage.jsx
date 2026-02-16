import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const selectedBlog = blogsData.find((blog) => blog.id === parseInt(id, 10));
    setBlog(selectedBlog);
  }, [id]);

  if (!blog) {
    return (
      <main className="bg-gray-100 min-h-screen p-5 flex items-center justify-center">
        <p className="text-xl text-gray-700">Loading...</p>
      </main>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen p-5">
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={`/images/${blog.image}`}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-5">
          <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
          <p className="text-gray-600 mb-4">{blog.author} - {new Date(blog.date).toLocaleDateString()}</p>
          <p className="text-gray-700 mb-4">{blog.content}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Blog List
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BlogDetailPage;