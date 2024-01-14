import React from 'react';
import JobComponent from '../../components/JobListings/JobComponent'; // Import the JobComponent
import '../../components/JobListings/JobListings.css'; // Import the CSS file for styling
import Layout from '@theme/Layout';

const Jobs = () => {
  // Example job data organized in an array of objects
  const jobs = [
    {
      jobTitle: 'Virtual Stock Simulation Competition',
      company: 'Delhi Technological University (DTU), New Delhi',
      jobDescription:
        "Explore the exciting world of stock trading in our Stock Simulation Trading Competition! This three-day event, taking place from October 11th to 13th, offers a unique opportunity for individuals to test their trading skills in an inter-college competition setting. Participants have a chance to win awards worth 100,000 and an incredible internship opportunity with StockGro. It's the perfect chance for aspiring traders to gain real market experience without risking their capital.",
      applyLink:
        'https://unstop.com/competitions/virtual-stock-simulation-competition-dtu-new-delhi-792664?lb=wKFhVkE&utm_medium=Share&utm_source=shortUrl',
      isVerified: true, // This company is verified
    },
    {
      jobTitle: 'Software Engineer, Front End, Google Cloud',
      company: 'Google',
      jobDescription:
        '1 year of experience with DSA, and software development in one or more programming languages (e.g., Python, C, C++, Java, Javascript).',
      applyLink:
        'https://www.google.com/about/careers/applications/jobs/results/96395135371092678-software-engineer-front-end-google-cloud',
      isVerified: true, // This company is verified
    },
    {
      jobTitle: 'Frontend Developer',
      company: 'CMHQ',
      jobDescription: 'We are looking for a frontend developer...',
      applyLink: 'https://forms.gle/LsEQKm7UJCUnaqPA6',
      isVerified: true, // This company is verified
    },

    // Add more job listings here
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

export default Jobs;
