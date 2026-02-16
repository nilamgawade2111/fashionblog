import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
      <p className="text-gray-600 mb-4">
        Feel free to reach out to us through any of the following methods:
      </p>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="material-icons text-indigo-600 mr-2">phone</span>
          <span className="text-gray-700">+1 (123) 456-7890</span>
        </li>
        <li className="flex items-center">
          <span className="material-icons text-indigo-600 mr-2">email</span>
          <span className="text-gray-700">contact@fashionblog.com</span>
        </li>
        <li className="flex items-center">
          <span className="material-icons text-indigo-600 mr-2">location_on</span>
          <span className="text-gray-700">123 Fashion Ave, New York, NY 10001</span>
        </li>
      </ul>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-indigo-600 hover:text-indigo-800 transition duration-300">
            <span className="material-icons">facebook</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-indigo-600 hover:text-indigo-800 transition duration-300">
            <span className="material-icons">twitter</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-indigo-600 hover:text-indigo-800 transition duration-300">
            <span className="material-icons">instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;