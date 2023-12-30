import React from 'react';
import JobComponent from './JobComponent'; // Import the JobComponent
import './JobListings.css'; // Import the CSS file for styling

const JobListings = () => {
  const jobs = [
    {
      jobTitle: 'Software Engineer',
      company: 'CMHQ',
      jobDescription: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco`,
      applyLink: '/',
      isVerified: false, // This company is not verified
    },
    {
      jobTitle: 'Software Engineer, Front End, Google Cloud',
      company: 'Google',
      jobDescription: '1 year of experience with DSA, and software development in one or more programming languages (e.g., Python, C, C++, Java, Javascript).',
      applyLink: 'https://www.google.com/about/careers/',
      isVerified: true, // This company is verified
    },
    {
      jobTitle: 'Software Development',
      company: 'Amazon',
      jobDescription: '1 year of experience with DSA, and software development in one or more programming languages (e.g., Python, C, C++, Java, Javascript).',
      applyLink: 'https://amazon.jobs/en/',
      isVerified: true, // This company is verified
    },  
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
