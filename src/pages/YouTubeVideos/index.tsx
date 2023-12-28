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
      VURL: 'https://youtu.be/0gIRaJ6Exak?si=TZF-kIMd49Is3WNs',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'CMHQ Official',
      VTITLE: 'HTML Web Development Course - Learn HTML from Scratch | CMHQ',
      VTHUMB: '/img/yt-img/html/html-01.png',
      VIEWS: '20',
      DATE: '2 days ago',
      category: 'html',
      isVerified: true, // Video is verified
    },
    {
      AUTHOR: "Ajay Dhangar",
      VURL: 'https://youtu.be/59gnPwkagOQ?si=ih2URZjkC4CZnKUM',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'CMHQ Official',
      VTITLE: "Master HTML Basics: A Beginner's Guide to Web Development | CMHQ",
      VTHUMB: '/img/yt-img/html/html-02.png',
      VIEWS: '16',
      DATE: '20 hours ago',
      category: 'html',
      isVerified: true, // Video is verified
    },
    {
      AUTHOR: "Ajay Dhangar",
      VURL: '/',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'CMHQ Official',
      VTITLE: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      VTHUMB: '/img/yt-img/coming-soon.gif',
      VIEWS: '00',
      DATE: 'Coming Sonn...',
      category: 'html',
      isVerified: false, // Video is not verified
    },
    {
      AUTHOR: "Ajay Dhangar",
      VURL: '/',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'CMHQ Official',
      VTITLE: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      VTHUMB: '/img/yt-img/coming-soon.gif',
      VIEWS: '00',
      DATE: 'Coming Sonn...',
      category: 'html',
      isVerified: false, // Video is not verified 
    },
    {
      AUTHOR: "Ajay Dhangar",
      VURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'CMHQ Official',
      VTITLE: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      VTHUMB: '/img/yt-img/coming-soon.gif',
      VIEWS: '61',
      DATE: '1 month ago',
      category: 'css',
      isVerified: false, // Video is not verified 
    },
    {
      AUTHOR: "Ajay Dhangar",
      VURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'CMHQ Official',
      VTITLE: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      VTHUMB: '/img/yt-img/coming-soon.gif',
      VIEWS: '61',
      DATE: '1 month ago',
      category: 'css',
      isVerified: false, // Video is not verified 
    },

    {
      AUTHOR: "Ajay Dhangar",
      VURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CURL: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
      CNAME: 'CMHQ Official',
      VTITLE: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      VTHUMB: '/img/yt-img/coming-soon.gif',
      VIEWS: '61',
      DATE: '1 month ago',
      category: 'css',
      isVerified: false, // Video is not verified
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
                {video.isVerified ? (
                  <img src="/img/verified.png" title='Video is verified' alt="Verified Badge" className="verified-badge" />
                ) : (
                  <span className="Video is not verified" />
                )}
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
                {video.isVerified ? (
                  <img src="/img/verified.png" title='Video is verified' alt="Verified Badge" className="verified-badge" />
                ) : (
                  <span className="Video is not verified" />
                )}
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