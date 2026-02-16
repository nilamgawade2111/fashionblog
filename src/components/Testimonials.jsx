import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    feedback: 'FashionBlog has completely transformed my wardrobe. The collections are unique and the quality is top-notch!',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'John Smith',
    feedback: 'I love the sustainable fashion options available here. It feels great to support eco-friendly brands.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    feedback: 'The community support is amazing. I have met so many fashion enthusiasts and learned a lot.',
    image: 'https://via.placeholder.com/150',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <img src={testimonial.image} alt={`Photo of ${testimonial.name}`} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;