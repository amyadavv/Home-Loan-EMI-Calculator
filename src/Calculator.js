// Calculator.js
import React, { useState } from 'react';

function Calculator() {
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [emi, setEmi] = useState(null);

    // Function to calculate EMI
    const calculateEmi = () => {
        const P = parseFloat(principal);
        const r = parseFloat(interestRate) / 12 / 100; // monthly interest rate
        const n = parseFloat(loanTerm) * 12; // number of months

        const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setEmi(emi.toFixed(2));
    };

    return (
        <div className="calculator-section p-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-white mb-6">EMI Calculator</h1>
            <div className="mb-4">
                <label htmlFor="principal" className="block text-white mb-2">Principal Amount ($):</label>
                <input
                    type="number"
                    id="principal"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="border rounded w-full px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter principal amount"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="interest-rate" className="block text-white mb-2">Interest Rate (% per annum):</label>
                <input
                    type="number"
                    id="interest-rate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="border rounded w-full px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter interest rate"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="loan-term" className="block text-white mb-2">Loan Term (years):</label>
                <input
                    type="number"
                    id="loan-term"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="border rounded w-full px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter loan term"
                />
            </div>
            <button
                onClick={calculateEmi}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
                Calculate EMI
            </button>
            {emi !== null && (
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-white">Estimated EMI:</h2>
                    <p className="text-xl text-white">${emi} per month</p>
                </div>
            )}
        </div>
    );
}

export default Calculator;
