import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Create an Account',
      description: 'Sign up for free and become a part of our fashion community.',
      icon: '👤',
    },
    {
      id: 2,
      title: 'Explore Collections',
      description: 'Browse through our exclusive collections and find your style.',
      icon: '🛍️',
    },
    {
      id: 3,
      title: 'Make a Purchase',
      description: 'Add items to your cart and proceed to a secure checkout.',
      icon: '💳',
    },
    {
      id: 4,
      title: 'Enjoy Your Fashion',
      description: 'Receive your order and enjoy the latest fashion trends.',
      icon: '🎉',
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-gray-50 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;