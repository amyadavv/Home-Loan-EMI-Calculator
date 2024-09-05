import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Calculator from './Calculator';
import Login from './Login';
import Features from './Features';
import Documents from './Documents';
import HomeLoanApply from './HomeLoanApply';
import FAQ from './FAQ';

function App() {
  return (
    <Router>
      <div className="app flex flex-col h-screen bg-gradient-to-r from-blue-500 to-green-400 p-4">
        <nav className="bg-white p-4 rounded-lg shadow-md mb-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-800 hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="text-gray-800 hover:text-blue-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/calculator" className="text-gray-800 hover:text-blue-500 transition-colors">
                Calculator
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-gray-800 hover:text-blue-500 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-800 hover:text-blue-500 transition-colors">
                Login
              </Link>
            </li>
            <li>
              <Link to="/features" className="text-gray-800 hover:text-blue-500 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link to="/documents" className="text-gray-800 hover:text-blue-500 transition-colors">
                Documents
              </Link>
            </li>
            <li>
              <Link to="/home-loan-apply" className="text-gray-800 hover:text-blue-500 transition-colors">
                Home Loan Apply
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <div className="flex-grow bg-white rounded-lg shadow-md p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/features" element={<Features />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/home-loan-apply" element={<HomeLoanApply />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
