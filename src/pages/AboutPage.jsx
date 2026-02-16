import React from 'react';
import companyData from '../data/company.json';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const company = companyData[0];

  return (
    <>
      <Header />
      <section className="bg-gray-100 p-5">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-4xl font-bold text-center mb-6">{company.name}</h1>
            <p className="text-center text-gray-700 mb-4">{company.description}</p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {company.team.map((member, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold">{member.name}</h2>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;