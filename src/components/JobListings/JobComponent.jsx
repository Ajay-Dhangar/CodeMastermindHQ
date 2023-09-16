import React from 'react';

const JobComponent = ({ job }) => {
  const { jobTitle, company, jobDescription, applyLink, isVerified } = job;

  return (
    <div className="job-listing">      
      <h2>{jobTitle} </h2>
      <p><strong>Company:</strong> {company} {isVerified ? (
        <img src="/img/verified.png" alt="Verified Badge" className="verified-badge" />
      ) : (
        <span className="not-verified-badge"></span>
      )}</p>
      <p><strong>Description:</strong> {jobDescription}</p>
      <a href={applyLink} target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>
  );
};

export default JobComponent;
