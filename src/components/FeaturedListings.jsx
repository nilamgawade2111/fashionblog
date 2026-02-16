import React from 'react';
import BlogCard from './BlogCard';

const FeaturedListings = ({ listings }) => {
  if (!listings || listings.length === 0) {
    return (
      <section className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-600">No featured listings available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Featured Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listings.slice(0, 6).map((listing) => (
            <BlogCard key={listing.id} post={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;