import React from 'react';
import Layout from '@theme/Layout';
// import BackgroundImage from '@site/src/pages/BackgroundImage';
// import CodeBlock from '@theme/CodeBlock';
// import Toggler from '@site/src/pages/Toggler';
// import MonthCalendar from '@site/src/pages/MonthCalendar';

import './style.css'
import Link from '@docusaurus/Link';

export default function YouTubeVideos() {

  return (
    <Layout>
      <div className="youtube-videos-container">
        <div className="video-card">
          <a href='https://www.youtube.com/watch?v=3PRCek1sSuY' target='_blank' rel='noreferrer'>
            <img src='/img/yt-img/thumb.png' alt="" className="video-thumbnail" />
          </a>
          <div className="video-details">
            <div className="video-title">
              Adding a Search Bar to your Blog Section or Blog Post (Only Demo)
            </div>
            <span className="video-author">
              <a href="https://www.youtube.com/@Ajay-Dhangar" target="_blank" rel='noreferrer'>
                Ajay Dhangar
              </a>
            </span>
            <div className="video-stats">
              61 Views <span>.</span> 1 month ago
            </div>
          </div>
        </div>

        <div className="video-card">
          <a href='https://youtu.be/lGmRnu--iU8' target='_blank' rel='noreferrer'>
            <img src='/img/yt-img/javascript.png' alt="" className="video-thumbnail" />
          </a>
          <div className="video-details">
            <div className="video-title">
              Adding a Search Bar to your Blog Section or Blog Post (Only Demo)
            </div>
            <span className="video-author">
              <a href="https://www.youtube.com/@coderdost" target="_blank" rel='noreferrer'>
                Coder Dost
              </a>
            </span>
            <div className="video-stats">
              61 Views <span>.</span> 1 month ago
            </div>
          </div>
        </div>

        <div className="video-card">
          <a href='https://www.youtube.com/watch?v=3PRCek1sSuY' target='_blank' rel='noreferrer'>
            <img src='/img/yt-img/thumb.png' alt="" className="video-thumbnail" />
          </a>
          <div className="video-details">
            <div className="video-title">
              Adding a Search Bar to your Blog Section or Blog Post (Only Demo)
            </div>
            <span className="video-author">
              <a href="https://www.youtube.com/@Ajay-Dhangar" target="_blank" rel='noreferrer'>
                Ajay Dhangar
              </a>
            </span>
            <div className="video-stats">
              61 Views <span>.</span> 1 month ago
            </div>
          </div>
        </div>

        <div className="video-card">
          <a href='https://www.youtube.com/watch?v=3PRCek1sSuY' target='_blank' rel='noreferrer'>
            <img src='/img/yt-img/thumb.png' alt="" className="video-thumbnail" />
          </a>
          <div className="video-details">
            <div className="video-title">
              Adding a Search Bar to your Blog Section or Blog Post (Only Demo)
            </div>
            <span className="video-author">
              <a href="https://www.youtube.com/@Ajay-Dhangar" target="_blank" rel='noreferrer'>
                Ajay Dhangar
              </a>
            </span>
            <div className="video-stats">
              61 Views <span>.</span> 1 month ago
            </div>
          </div>
        </div>


        {/* Repeat the above video-card structure for additional videos */}
      </div>
    </Layout>
  );
}