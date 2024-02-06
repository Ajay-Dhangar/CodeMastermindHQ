import React from 'react';
import './styles.css';

const HTML: React.FC = () => {
  const topics = [
    { id: 0, title: '📝 Introduction to HTML', link: '/' },
    { id: 1, title: '📝 Basic HTML Structure', link: '/' },
    { id: 2, title: '📝 HTML Tags and Attributes', link: '/' },
    { id: 3, title: '📝 Creating Hyperlinks and Navigation', link: '/' },
    { id: 4, title: '📝 HTML Forms and Input', link: '/' },
    { id: 5, title: '📝 Project: Your First Web Page', link: '/' },
  ];

  return (

    <div className="js-table-of-contents">
      <h2>HTML Course Table of Contents</h2>
      <hr />
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            <a className='js-table-of-content-items' href={topic.link}>{topic.title}</a>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default HTML;
