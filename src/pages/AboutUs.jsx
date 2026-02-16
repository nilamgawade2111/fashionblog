import React from 'react';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center p-10 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-700 max-w-prose mb-8">
          Welcome to fashionblog, your go-to source for the latest trends and insights in the fashion world. Our mission is to inspire and empower fashion enthusiasts by providing high-quality content and a platform for creative expression. Join us on our journey as we explore the ever-evolving landscape of fashion.
        </p>
        <div className="max-w-prose text-gray-700 space-y-6">
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Story</h3>
            <p>
              Founded in 2020, fashionblog started as a small blog and has grown into a leading voice in the fashion industry. Our passion for fashion drives us to deliver the most engaging and informative content to our audience.
            </p>
          </section>
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Mission & Vision</h3>
            <p>
              Our mission is to democratize fashion by making it accessible to everyone. We envision a world where fashion is a source of joy and self-expression for all.
            </p>
          </section>
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h3>
            <ul className="list-disc list-inside">
              <li>Inclusivity</li>
              <li>Innovation</li>
              <li>Sustainability</li>
              <li>Integrity</li>
            </ul>
          </section>
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Team Expertise</h3>
            <p>
              Our team consists of seasoned fashion experts, writers, and designers who bring a wealth of knowledge and creativity to our platform.
            </p>
          </section>
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Achievements & Milestones</h3>
            <p>
              Over the years, we have been recognized by leading fashion publications and have collaborated with top brands to bring exclusive content to our readers.
            </p>
          </section>
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Testimonials</h3>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic">
              "Fashionblog is my daily dose of fashion inspiration. Their insights are always spot-on!" - Jane Doe
            </blockquote>
          </section>
          <section className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Connect With Us</h3>
            <p>
              We love to hear from our readers! Whether you have feedback, questions, or just want to say hello, feel free to reach out to us.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutUs;