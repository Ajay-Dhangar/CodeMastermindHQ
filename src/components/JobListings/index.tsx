import React from 'react';
import JobComponent from './JobComponent'; // Import the JobComponent
import './JobListings.css'; // Import the CSS file for styling

const JobListings = () => {
  // Example job data organized in an array of objects
  const jobs = [
    {
      jobTitle: 'Software Engineer, Front End, Google Cloud',
      company: 'Google',
      jobDescription: '1 year of experience with DSA, and software development in one or more programming languages (e.g., Python, C, C++, Java, Javascript).',
      applyLink: 'https://www.google.com/about/careers/applications/jobs/results/96395135371092678-software-engineer-front-end-google-cloud',
      isVerified: true, // This company is verified
    },
    {
      jobTitle: 'Frontend Developer',
      company: 'CMHQ',
      jobDescription: 'We are looking for a frontend developer...',
      applyLink: 'https://forms.gle/LsEQKm7UJCUnaqPA6',
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
