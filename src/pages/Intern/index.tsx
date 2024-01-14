import React from 'react';
import JobComponent from '../../components/JobListings/JobComponent'; // Import the JobComponent
import '../../components/JobListings/JobListings.css'; // Import the CSS file for styling
import Layout from '@theme/Layout';

const Intern = () => {
  // Example job data organized in an array of objects
  const jobs = [
    {
      jobTitle: 'Frontend Developer',
      company: 'CMHQ',
      jobDescription: 'We are looking for a frontend developer...',
      applyLink: 'https://forms.gle/LsEQKm7UJCUnaqPA6',
      isVerified: true, // This company is verified
    },
  ];

  return (
    <Layout>
      <div className="job-listings-container">
        <div className="job-listings">
          {jobs.map((job, index) => (
            <JobComponent key={index} job={job} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Intern;
