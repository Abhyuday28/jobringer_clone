import React from 'react';
import { Search } from 'lucide-react';

const jobCategories = [
  { id: 'fresher', name: 'Fresher' },
  { id: 'remote', name: 'Work From Home' },
  { id: 'wfh', name: 'WFH' },
  { id: 'it', name: 'IT' },
  { id: 'hr', name: 'HR' },
  { id: 'office', name: 'Back Office' },
  { id: 'bpo', name: 'BPO Jobs' },
  { id: 'ites', name: 'ITES' },
  { id: 'finance', name: 'Finance' },
  { id: 'accounts', name: 'Accounts' },
  { id: 'medical', name: 'Medical' },
  { id: 'pharma', name: 'Pharma' },
  { id: 'manager', name: 'Manager' },
  { id: 'developer', name: 'Developer' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'engineering', name: 'Engineering' },
  { id: 'govt', name: 'Non Government Jobs' },
];

const QuickSearch = () => {
  return (
    <section className="bg-teal-50 py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-5">
          <Search className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Quick Job Search</h2>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {jobCategories.map((category) => (
            <a 
              key={category.id}
              href={`#${category.id}`}
              className="bg-white hover:bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 transition duration-200"
            >
              #{category.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickSearch;