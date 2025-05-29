import React from 'react';
import { employerData } from '../data/employerData';

const FeaturedEmployers = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          <span className="text-gray-800">FEATURED</span>{' '}
          <span className="text-blue-600">EMPLOYERS</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-8">
          {employerData.map((employer) => (
            <a 
              key={employer.id}
              href="#"
              className="rounded-lg flex items-center justify-center hover:shadow-md transition duration-300 p-2"
            >
              <img
                src={employer.logo}
                alt={employer.name}
                className="max-h-20 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEmployers;