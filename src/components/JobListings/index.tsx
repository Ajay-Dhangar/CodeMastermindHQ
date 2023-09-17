import React from 'react';
import JobComponent from './JobComponent'; // Import the JobComponent
import './JobListings.css'; // Import the CSS file for styling

const JobListings = () => {
  // Example job data organized in an array of objects
  const jobs = [
    {
      jobTitle: 'Frontend Developer',
      company: 'CMHQ',
      jobDescription: 'We are looking for a frontend developer...',
      applyLink: 'https://codemastermindhq.vercel.app/',
      isVerified: true, // This company is verified
    },
    {
      jobTitle: 'Backend Developer',
      company: 'CMHQ',
      jobDescription: 'Join our backend development team...',
      applyLink: 'https://codemastermindhq.vercel.app/',
      isVerified: true, // This company is verified
    },
    {
      jobTitle: 'Video Editor',
      company: 'CMHQ',
      jobDescription: 'Join our backend development team...',
      applyLink: 'https://codemastermindhq.vercel.app/',
      isVerified: false, // This company is note verified
    },
    
    // Add more job listings here
  ];

  return (
    <div className="job-listings-container">
      <div className="job-listings">
        {jobs.map((job, index) => (
          <JobComponent key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobListings;
