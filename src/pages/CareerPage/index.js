import React from 'react';
import styles from './CareerPage.module.css'; // Import the CSS module
import Layout from '@theme/Layout';
const CareerPage = () => {
  // Sample data for job opportunities, internships, and competitions
  const jobOpportunities = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'New York, NY',
      description:
        'We are looking for a skilled frontend developer to join our team...',
    },
    // Add more job listings here
  ];

  const internshipOpportunities = [
    {
      id: 1,
      title: 'Marketing Intern',
      location: 'San Francisco, CA',
      description:
        'Join our marketing team as an intern and gain valuable experience...',
    },
    // Add more internship listings here
  ];

  const competitions = [
    {
      id: 1,
      title: 'Web Development Hackathon',
      date: 'October 15, 2023',
      description:
        'Compete in our annual web development hackathon and win exciting prizes...',
    },
    // Add more competition listings here
  ];

  return (
    <Layout>
      <div className={styles.careerPage}>
        {' '}
        {/* Use the CSS module class */}
        <h1>Career Page</h1>
        <div className={styles.section}>
          <h2>Job Opportunities</h2>
          <ul>
            {jobOpportunities.map((job) => (
              <li key={job.id}>
                <h3>{job.title}</h3>
                <p>{job.location}</p>
                <p>{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h2>Internship Opportunities</h2>
          <ul>
            {internshipOpportunities.map((internship) => (
              <li key={internship.id}>
                <h3>{internship.title}</h3>
                <p>{internship.location}</p>
                <p>{internship.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h2>Competitions (Hackathons)</h2>
          <ul>
            {competitions.map((competition) => (
              <li key={competition.id}>
                <h3>{competition.title}</h3>
                <p>Date: {competition.date}</p>
                <p>{competition.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default CareerPage;
