// src/components/DonationFormComponent.js
import React, {useState} from 'react';
import './DonationFormComponent.css';
import Layout from '@theme/Layout';

const DonationFormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    receiptScreenshot: '',
    date: '',
    feedback: '',
    message: '',
    profileImage: '',
    socialLink: '',
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Handle form submission here (send data to the specified action URL)
      await fetch('https://formspree.io/f/xjvqydrv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setSubmissionSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Layout>
      <div className="donation-form-container">
        <h2 style={{textAlign: 'center', color: '#45a049'}}>
          Add Me to Donation Group/Community
        </h2>
        {submissionSuccess ? (
          <div className="thank-you-message">
            Thank you for your submission!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="donation-form">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Receipt Screenshot:
              <input
                type="file"
                name="receiptScreenshot"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Feedback:
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Profile Image:
              <input
                type="file"
                name="profileImage"
                onChange={handleChange}
                required
              />
            </label>
            {/* <label>
          Social Link:
          <input
            type="url"
            name="socialLink"
            value={formData.socialLink}
            onChange={handleChange}
            required
          />
        </label> */}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default DonationFormComponent;
