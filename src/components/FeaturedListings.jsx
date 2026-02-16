import React from 'react';

const FeaturedListings = ({ listings }) => {
  if (!listings || listings.length === 0) {
    return (
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-600">No featured listings available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Featured Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{listing.title}</h3>
                <p className="text-gray-600 mt-2">{listing.description}</p>
                <div className="mt-4">
                  <span className="text-indigo-600 font-bold">${listing.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;