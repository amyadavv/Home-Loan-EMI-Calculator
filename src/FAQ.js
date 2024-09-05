import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is a home loan?",
      answer: "A home loan is a loan specifically for purchasing a home. It's also known as a mortgage. You'll typically pay back the loan over several years with interest."
    },
    {
      question: "How do I apply for a home loan?",
      answer: "You can apply for a home loan by contacting our team directly. We'll guide you through the process, which includes checking your credit score, evaluating your finances, and choosing the best loan options."
    },
    {
      question: "What documents do I need to apply for a home loan?",
      answer: "You may need to provide identification, proof of income, bank statements, and other financial documents. Our team will provide you with a detailed list during the application process."
    },
    {
      question: "What is the difference between a fixed-rate and adjustable-rate mortgage?",
      answer: "A fixed-rate mortgage maintains the same interest rate for the duration of the loan, providing predictable payments. An adjustable-rate mortgage may have an initial fixed period, but the rate can change after that."
    },
    {
      question: "How much can I borrow?",
      answer: "The amount you can borrow depends on your income, credit score, and other factors. Our team will help you determine the loan amount you qualify for."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-green-500">
      <div className="max-w-3xl p-8 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h1>
        
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {faq.question}
              </h2>
              <p className="text-md text-gray-700">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
