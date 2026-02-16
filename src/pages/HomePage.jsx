import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SearchFilters from '../components/SearchFilters';
import FeaturedListings from '../components/FeaturedListings';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import StrongCTA from '../components/StrongCTA';
import Footer from '../components/Footer';

const HomePage = () => {
  const featuredListings = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300',
      title: 'Stylish Jacket',
      description: 'A trendy jacket perfect for any occasion.',
      price: 120,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300',
      title: 'Elegant Dress',
      description: 'An elegant dress for your special events.',
      price: 150,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300',
      title: 'Casual Sneakers',
      description: 'Comfortable sneakers for everyday wear.',
      price: 80,
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchFilters />
      <FeaturedListings listings={featuredListings} />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <StrongCTA />
      <Footer />
    </>
  );
};

export default HomePage;