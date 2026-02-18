import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogsData from '../data/blogs.json';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogsData.find((b) => b.id === parseInt(id, 10));
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading blog post...</p>
      </div>
    );
  }

  return (
    <div className="p-5 bg-gray-100">
      <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>
          <p className="text-gray-600 mt-4">{blog.content}</p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;