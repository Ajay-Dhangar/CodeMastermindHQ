import React from 'react';
import Layout from '@theme/Layout';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <Layout wrapperClassName="main-code-container">
      <div className="about-us">
        <h2>About CodeMastermindHQ</h2>
        <p>
          Welcome to CodeMastermindHQ (CMHQ), your ultimate destination for all things coding and programming! Our platform, founded by Ajay Dhangar, is a testament to the passion and dedication of a coding enthusiast who believes in the power of turning creative ideas into functional realities.
        </p>
        <p>
          At CMHQ, we are committed to providing a space where curious minds, aspiring developers, and coding enthusiasts can come together to explore the intricate world of coding. Our platform is more than just a learning resource; it's a thriving community that encourages collaboration and the free exchange of knowledge.
        </p>
        <p>
          As the founder of CMHQ, Ajay Dhangar brings his expertise and experience in the coding realm to the forefront. With a vision to make coding accessible and enjoyable for all, Ajay's mission is to guide individuals on their coding journey, no matter their skill level.
        </p>
        <div className="founder">
          <img src="https://avatars.githubusercontent.com/u/99037494?v=4" alt="Ajay Dhangar" />
          <div className="founder-info">
            <h3>Ajay Dhangar</h3>
            <p>Founder, CodeMastermindHQ</p>
            <div className="social-links">
              <a href="https://github.com/Ajay-Dhangar">GitHub</a>
              <a href="https://www.linkedin.com/in/ajay-dhangar/">LinkedIn</a>
              <a href="https://twitter.com/AJAYDHA27250016">Twitter</a>
            </div>
          </div>
        </div>
        <p>
          Join us on this exciting journey as we dive deep into coding concepts, tackle challenging projects, and build a community of like-minded individuals who are passionate about coding. Together, let's master the art of programming at CodeMastermindHQ – your gateway to a world of endless possibilities.
        </p>
      </div>
    </Layout>
  );
};

export default AboutUs;
