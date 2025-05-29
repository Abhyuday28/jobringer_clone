import React from 'react';
import { MapPin, Clock, Building } from 'lucide-react';
import { JobType } from '../types';

interface JobCardProps {
  job: JobType;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full">
      <div className="relative">
        <div className="absolute top-0 right-0 bg-yellow-500 text-xs font-bold px-2 py-1 rounded-bl-lg">
          {job.jobType}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{job.title}</h3>

          <div className="mb-3">
            <p className="text-gray-700 font-medium">{job.company}</p>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2 text-gray-400" />
              <span>{job.employmentType}</span>
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <Building className="h-4 w-4 mr-2 text-gray-400" />
              <span>{job.experience}</span>
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-gray-400" />
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        <button className="w-full py-2 bg-blue-700 text-white hover:bg-blue-900 font-semibold rounded-md transition duration-200 flex items-center justify-center mt-auto shadow-sm hover:shadow-md transition duration-300">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;
