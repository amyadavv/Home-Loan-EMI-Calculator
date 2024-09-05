import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Competitive Interest Rates",
      description: "Enjoy some of the most competitive interest rates in the market, ensuring affordable monthly payments."
    },
    {
      title: "Flexible Repayment Plans",
      description: "Customize your repayment schedule to fit your financial situation, making homeownership a reality."
    },
    {
      title: "Expert Advice",
      description: "Our experienced team is here to guide you through the home loan process, answering your questions and providing tailored solutions."
    },
    {
      title: "Quick Approval",
      description: "Get your loan approved quickly and efficiently, so you can start making your dream home a reality sooner."
    },
    {
      title: "Online Application",
      description: "Apply for your home loan online and save time. Our digital process is secure and easy to use."
    },
    {
      title: "Transparent Fees",
      description: "No hidden fees or surprises—our pricing is straightforward and transparent."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-600">
      <div className="max-w-4xl p-12 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Features
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h2>
              <p className="text-md text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
