import React from 'react';

const Documents = () => {
  const documents = [
    {
      title: "Proof of Identity",
      description: "Provide a government-issued ID such as a driver's license or passport to verify your identity."
    },
    {
      title: "Proof of Income",
      description: "Submit recent pay stubs, tax returns, or other forms of income verification to assess your financial situation."
    },
    {
      title: "Bank Statements",
      description: "Bank statements help verify your financial stability and savings. Please provide statements from the last few months."
    },
    {
      title: "Credit History",
      description: "A credit report may be needed to evaluate your creditworthiness. Make sure to have this available."
    },
    {
      title: "Property Documents",
      description: "If you've selected a property, provide documents such as a purchase agreement, property details, or appraisal."
    },
    {
      title: "Other Documents",
      description: "Depending on your circumstances, additional documents such as proof of rent or residency may be required."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-green-500">
      <div className="max-w-4xl p-12 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Required Documents
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {documents.map((document, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {document.title}
              </h2>
              <p className="text-md text-gray-700">
                {document.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
