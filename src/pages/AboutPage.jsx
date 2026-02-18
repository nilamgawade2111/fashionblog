import React from 'react';

const AboutPage = () => {
  return (
    <section className="p-5 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-xl text-gray-700 mb-4">
          Welcome to Fashion Blog, your number one source for all things fashion. We're dedicated to providing you the very best of fashion insights, with an emphasis on trends, tips, and personal style.
        </p>
        <p className="text-xl text-gray-700 mb-4">
          Founded in 2023, Fashion Blog has come a long way from its beginnings. When we first started out, our passion for fashion drove us to start our own blog.
        </p>
        <p className="text-xl text-gray-700 mb-4">
          We hope you enjoy our blog as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className="text-xl text-gray-700">
          Sincerely, <br />
          The Fashion Blog Team
        </p>
      </div>
    </section>
  );
};

export default AboutPage;