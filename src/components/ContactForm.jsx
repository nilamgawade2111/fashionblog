import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to submit the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
        <p className="text-gray-600">Your message has been sent successfully.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Form</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
          aria-label="Name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
          aria-label="Email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="5"
          required
          aria-label="Message"
        ></textarea>
      </div>
      <button
        type="submit"
        className={`w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition duration-300 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isSubmitting}
        aria-label="Submit"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;