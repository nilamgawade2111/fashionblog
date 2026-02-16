import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center p-10 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-prose">
          We'd love to hear from you! Whether you have a question about our content, need assistance, or just want to share your thoughts, feel free to reach out.
        </p>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;