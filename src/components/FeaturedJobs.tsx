import React from 'react';
import { jobData } from '../data/jobData';
import JobCard from './JobCard';

const FeaturedJobs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          Featured Jobs
        </h2>

        <div className="flex overflow-x-auto gap-6 pb-4 snap-x scrollbar-hide">
          {jobData.map((job) => (
            <div key={job.id} className="flex-none w-[300px] snap-start">
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
