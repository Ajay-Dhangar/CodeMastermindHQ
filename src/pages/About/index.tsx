import React from 'react';
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'; // Import icons
import './AboutUs.css';
import Layout from '@theme/Layout';
const FounderInfo = () => {
  return (
    <div className="founder-info">
      <div className="my-info">
        <div className="avatar">
          <img
            src="https://avatars.githubusercontent.com/u/99037494?v=4"
            alt="Ajay Dhangar"
          />
        </div>
        <div className="name">
          <h2>Ajay Dhangar</h2>
        </div>
      </div>
      <div className="content">
        <p>
          Welcome to CodeMastermindHQ, crafted with passion by yours truly, Ajay
          Dhangar. I'm an ardent coder and creator, on a mission to foster a
          community of ingenious minds and coding enthusiasts.
        </p>
      </div>
      <div className="social-links">
        <a
          href="https://github.com/Ajay-Dhangar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ajay-dhangar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/AJAYDHA27250016"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

const SDLCModal = ({phase, description}) => {
  return (
    <div className="sdlc-modal">
      <h3>{phase}</h3>
      <p>{description}</p>
    </div>
  );
};

const AboutUsPage = () => {
  const sdlcPhases = [
    {
      phase: 'Requirement Analysis and Planning 📋',
      description:
        'In the overture of our SDLC symphony, the vision of CMHQ takes shape. We dissect the essence of our platform, understanding user needs, and weaving them into a roadmap. This is where dreams are translated into features.',
    },
    {
      phase: 'System Design 🖌️',
      description:
        'The architectural brushstrokes of CMHQ come alive. We craft an orchestra of modules, each harmoniously contributing to the grand experience. Design, UI/UX, and technology choices are our instruments for a seamless user journey.',
    },
    {
      phase: 'Implementation 💻',
      description:
        'With a virtuoso team of developers, the code takes center stage. Lines of logic dance to create the ballet of functionality. Quality and efficiency are the keynotes as our codebase transforms into a masterpiece.',
    },
    {
      phase: 'Testing and Quality Assurance 🧪',
      description:
        'Our QA virtuosos meticulously examine every nuance of CMHQ. Bugs are uncovered, performance is fine-tuned, and user scenarios are rehearsed. We ensure that every note is pitch-perfect.',
    },
    {
      phase: 'Deployment 🚀',
      description:
        "Maintenance and Support 🛡️: Even after the crescendo, CMHQ's melody lingers. Our maintenance ensemble fine-tunes the platform, harmonizing user experiences. With a responsive support troupe, we're always ready to assist.",
    },
    {
      phase: '🌟 The CMHQ Experience',
      description:
        "CMHQ isn't just a platform; it's a portal to infinite possibilities. Imagine a community pulsating with the energy of innovation, a treasure trove of tutorials, challenges, and collaborations. Here, code is more than syntax; it's a symphony of imagination and logic.",
    },
    {
      phase: '🔗 Explore the power of CodeMastermindHQ',
      description:
        "where passion meets code, and creativity orchestrates innovation. Join us in this captivating journey and let's mastermind the future together!",
    },

    // Add more phases here
  ];

  return (
    <Layout wrapperClassName="main-code-container">
      <div className="about-us-page">
        <FounderInfo />
        <hr />
        <div className="about-codemantermindhq">
          <h2>About CodeMastermindHQ</h2>
          <p>
            CodeMastermindHQ (CMHQ) is a dynamic platform founded by Ajay
            Dhangar. It's a vibrant community where coding enthusiasts come
            together to explore, learn, and master the art of programming. With
            a rich library of tutorials, coding challenges, and a collaborative
            environment, CMHQ is your gateway to the world of coding excellence.
          </p>
        </div>
        <hr />
        <div className="sdlc-section">
          <h2>🛠️The SDLC Symphony 🎶</h2>
          <div className="sdlc-modals">
            {sdlcPhases.map((phaseData, index) => (
              <SDLCModal
                key={index}
                phase={phaseData.phase}
                description={phaseData.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
