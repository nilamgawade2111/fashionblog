import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: 'Exclusive Collections',
      description: 'Access to unique and exclusive fashion collections curated by top designers.',
      icon: '🎨',
    },
    {
      id: 2,
      title: 'Sustainable Fashion',
      description: 'Promoting eco-friendly and sustainable fashion practices.',
      icon: '🌿',
    },
    {
      id: 3,
      title: 'Community Support',
      description: 'Join a community of fashion enthusiasts and get support from peers.',
      icon: '🤝',
    },
    {
      id: 4,
      title: 'Secure Transactions',
      description: 'Experience safe and secure transactions with our trusted platform.',
      icon: '🔒',
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;