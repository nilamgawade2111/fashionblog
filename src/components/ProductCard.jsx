import React from 'react';

const ProductCard = ({ product }) => {
  if (!product) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <p className="text-gray-600">Product details are not available.</p>
      </div>
    );
  }

  const { image, name, price } = product;

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log(`${name} added to cart.`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={`Image of ${name}`} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2">${price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
          aria-label={`Add ${name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;