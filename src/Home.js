import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-blue-600">
      <div className="max-w-3xl p-10 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Home Loans Made Easy
        </h1>
        
        <p className="text-lg text-gray-700 mb-6">
          A home loan is a great way to finance your dream home. With flexible repayment plans and competitive interest rates, you can easily achieve your goals. Whether you’re looking to buy a new home, refinance an existing loan, or invest in a property, we offer solutions tailored to your needs.
        </p>
        
        <div className="flex flex-wrap gap-6 mb-6">
          <img
            src="https://source.unsplash.com/random/800x600?house"
            alt="Home Loan"
            className="w-1/2 rounded-lg shadow-md"
          />
          <img
            src="https://source.unsplash.com/random/800x600?mortgage"
            alt="Mortgage"
            className="w-1/2 rounded-lg shadow-md"
          />
        </div>
        
        <p className="text-lg text-gray-700 mb-6">
          Discover the many advantages of choosing our home loan services. With our expert advice and personalized options, you can find the perfect loan for your situation. Contact us today to get started!
        </p>
        
        <div className="text-center">
          <button
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => window.location.href = '/contact'}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
