import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-red-500">
        <section className="text-center p-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to the Chirpn</h1>
        </section>
      </main>
    </>
  );
};

export default HomePage;