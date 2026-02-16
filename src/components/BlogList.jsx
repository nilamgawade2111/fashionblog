import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
  return (
    <section aria-label="Blog List" className="py-8">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
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
  );
};

export default BlogList;