import React from 'react';
import './SecurityInfo.css'; // Import the CSS file for this component
import Layout from '@theme/Layout';

function SecurityInfo() {
  return (
    <Layout>
      <div className="security-container">
        <h2 className="security-title">Security Information</h2>
        <p className="security-text">
          Your security is a top priority at CodeMastermindHQ. We are committed
          to maintaining a secure and safe environment for all users. Our team
          follows industry best practices and continuously monitors and enhances
          our security measures to protect your data and privacy.
        </p>
        <h2 className="security-title">Reporting Security Issues</h2>
        <p className="security-text">
          If you discover a security vulnerability in our application, we
          encourage you to responsibly disclose it by emailing us at{' '}
          <a href="mailto:codemastermindhq@gmail.com">
            codemastermindhq@gmail.com
          </a>
          . Our dedicated security team will promptly investigate and address
          the issue. Your cooperation helps us ensure the security of our
          platform.
        </p>
        <h2 className="security-title">Stay Informed</h2>
        <p className="security-text">
          To stay updated on security updates, announcements, and best practices
          related to CodeMastermindHQ, consider subscribing to our security
          mailing list. We'll keep you informed about important security-related
          information so you can stay ahead of potential threats.
        </p>
        <p className="security-text">
          Thank you for entrusting us with your security. We are committed to
          delivering a secure experience for all users of CodeMastermindHQ.
        </p>
      </div>
    </Layout>
  );
}

export default SecurityInfo;
