import React, { useState } from 'react';

const HomeLoanApply = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        income: '',
        loanAmount: '',
        propertyAddress: '',
        loanTerm: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-blue-600">
            <div className="max-w-3xl p-8 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Apply for a Home Loan
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">
                            Full Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">
                            Email Address:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2">
                            Phone Number:
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="income" className="block text-gray-700 mb-2">
                            Annual Income:
                        </label>
                        <input
                            type="number"
                            id="income"
                            name="income"
                            value={formData.income}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="loanAmount" className="block text-gray-700 mb-2">
                            Desired Loan Amount:
                        </label>
                        <input
                            type="number"
                            id="loanAmount"
                            name="loanAmount"
                            value={formData.loanAmount}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="propertyAddress" className="block text-gray-700 mb-2">
                            Property Address:
                        </label>
                        <input
                            type="text"
                            id="propertyAddress"
                            name="propertyAddress"
                            value={formData.propertyAddress}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                            required
                        />
                    </div>


                    <div>
                        <label htmlFor="loanTerm" className="block text-gray-700 mb-2">
                            Loan Term (Years):
                        </label>
                        <input
                            type="number"
                            id="loanTerm"
                            name="loanTerm"
                            value={formData.loanTerm}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-300"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HomeLoanApply;
