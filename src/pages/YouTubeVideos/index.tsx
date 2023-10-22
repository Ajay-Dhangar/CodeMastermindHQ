import React from 'react';
import Layout from '@theme/Layout';
// import BackgroundImage from '@site/src/pages/BackgroundImage';
// import CodeBlock from '@theme/CodeBlock';
// import Toggler from '@site/src/pages/Toggler';
// import MonthCalendar from '@site/src/pages/MonthCalendar';
// import Link from '@docusaurus/Link';
import './style.css'


export default function YouTubeVideos() {

  const videoData = [
    {
      AUTHOR: "Ajay Dhangar",
      VURL: 'https://www.youtube.com/',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'Ajay Dhangar',
      VTITLE: 'Adding a Search Bar to your Blog Section or Blog Post (Only Demo)',
      VTHUMB: '/img/yt-img/thumb.png',
      VIEWS: '61',
      DATE: '1 month ago',    
      category: 'html',  
    },
    {
      AUTHOR: "Ajay Dhangar",
      VURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'Ajay Dhangar',
      VTITLE: 'Adding a Search Bar to your Blog Section or Blog Post (Only Demo)',
      VTHUMB: '/img/yt-img/thumb.png',
      VIEWS: '61',
      DATE: '1 month ago',
      category: 'html',  
    },
    {
      AUTHOR: "Ajay Dhangar",
      VURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'Ajay Dhangar',
      VTITLE: 'Adding a Search Bar to your Blog Section or Blog Post (Only Demo)',
      VTHUMB: '/img/yt-img/thumb.png',
      VIEWS: '61',
      DATE: '1 month ago',
      category: 'html',  
    },
    {
      AUTHOR: "Ajay Dhangar",
      VURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'Ajay Dhangar',
      VTITLE: 'Adding a Search Bar to your Blog Section or Blog Post (Only Demo)',
      VTHUMB: '/img/yt-img/thumb.png',
      VIEWS: '61',
      DATE: '1 month ago',
      category: 'css',  
    },
    {
      AUTHOR: "Ajay Dhangar",
      VURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'Ajay Dhangar',
      VTITLE: 'Adding a Search Bar to your Blog Section or Blog Post (Only Demo)',
      VTHUMB: '/img/yt-img/thumb.png',
      VIEWS: '61',
      DATE: '1 month ago',
      category: 'html',  
    },
    {
      AUTHOR: "Ajay Dhangar",
      VURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'Ajay Dhangar',
      VTITLE: 'Adding a Search Bar to your Blog Section or Blog Post (Only Demo)',
      VTHUMB: '/img/yt-img/thumb.png',
      VIEWS: '61',
      DATE: '1 month ago',
      category: 'css',  
    },
    
    {
      AUTHOR: "Ajay Dhangar",
      VURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'Ajay Dhangar',
      VTITLE: 'Adding a Search Bar to your Blog Section or Blog Post (Only Demo)',
      VTHUMB: '/img/yt-img/thumb.png',
      VIEWS: '61',
      DATE: '1 month ago',
      category: 'css',  
    },
    {
      AUTHOR: "Ajay Dhangar",
      VURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'Ajay Dhangar',
      VTITLE: 'Adding a Search Bar to your Blog Section or Blog Post (Only Demo)',
      VTHUMB: '/img/yt-img/thumb.png',
      VIEWS: '61',
      DATE: '1 month ago',
      category: 'css',  
    },

    // Add more video objects as needed
  ];

  return (
    <Layout>

      <h2 style={{ textAlign: 'center' }}>Videos for HTML</h2>

      <div className="youtube-videos-container">
        {videoData.filter((value) => value.category === 'html').map((video, index) => (
          <div key={index} className="video-card">
            <a href={video.VURL} target='_blank' rel='noreferrer'>
              <img src={video.VTHUMB} alt="" className="video-thumbnail" />
            </a>
            <div className="video-details">
              <div className="video-title">{video.VTITLE}</div>
              <span className="video-author">
                <a href={video.CURL} target="_blank" rel='noreferrer'>
                  {video.CNAME}
                </a>
              </span>
              <div className="video-stats">
                {video.VIEWS} Views <span>.</span> {video.DATE}
              </div>
            </div>
          </div>
        ))}
      </div>


      <h2 style={{ textAlign: 'center' }}>Videos for CSS</h2>

      <div className="youtube-videos-container">
        {videoData.filter((value) => value.category === 'css').map((video, index) => (
          <div key={index} className="video-card">
            <a href={video.VURL} target='_blank' rel='noreferrer'>
              <img src={video.VTHUMB} alt="" className="video-thumbnail" />
            </a>
            <div className="video-details">
              <div className="video-title">{video.VTITLE}</div>
              <span className="video-author">
                <a href={video.CURL} target="_blank" rel='noreferrer'>
                  {video.CNAME}
                </a>
              </span>
              <div className="video-stats">
                {video.VIEWS} Views <span>.</span> {video.DATE}
              </div>
            </div>
          </div>
        ))}
      </div>

    </Layout>
  );
}