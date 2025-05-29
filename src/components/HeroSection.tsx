import React, { useState } from 'react';
import { Search } from 'lucide-react';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          BRINGING YOU THE PERFECT JOB!
        </h1>
        <p className="text-xl mb-8">11,000+ JOBS to Apply</p>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col sm:flex-row">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Search Jobs Now"
                className="w-full p-3 text-gray-700 focus:outline-none rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="mt-2 sm:mt-0 sm:ml-2 py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold rounded-md transition duration-200 flex items-center justify-center">
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center mt-6 gap-3">
            <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-md text-sm font-medium transition duration-200">
              View Jobs
            </a>
            <a href="#" className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition duration-200">
              Register For FREE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;