import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-pink-600">
      <div className="max-w-4xl p-12 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        
        <p className="text-lg text-gray-700 mb-6">
          Welcome to [Company Name], your trusted partner in home financing. With over [X] years of experience in the industry, we are committed to helping you achieve your dream of homeownership. Our dedicated team of experts is here to guide you through the home loan process and provide personalized solutions tailored to your needs.
        </p>
        
        <p className="text-lg text-gray-700 mb-6">
          At [Company Name], our mission is to provide exceptional service, competitive rates, and flexible terms that make the home loan process as smooth and stress-free as possible. We understand that buying a home is one of the most significant investments you'll ever make, and we are here to support you every step of the way.
        </p>
        
        <div className="flex flex-wrap gap-6 mb-6">
          <img
            src="https://source.unsplash.com/random/800x600?home"
            alt="Home"
            className="w-1/2 rounded-lg shadow-md"
          />
          <img
            src="https://source.unsplash.com/random/800x600?loan"
            alt="Loan"
            className="w-1/2 rounded-lg shadow-md"
          />
        </div>
        
        <p className="text-lg text-gray-700 mb-6">
          Our values of integrity, transparency, and customer satisfaction guide everything we do. We take pride in building long-lasting relationships with our clients and helping them find the best home loan solutions for their unique situations.
        </p>
        
        <div className="text-center">
          <button
            className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
