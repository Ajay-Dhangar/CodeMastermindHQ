import React from 'react';
import Layout from '@theme/Layout';
// import BackgroundImage from '@site/src/pages/BackgroundImage';
// import CodeBlock from '@theme/CodeBlock';
// import Toggler from '@site/src/pages/Toggler';
// import MonthCalendar from '@site/src/pages/MonthCalendar';

import './style.css'
import Link from '@docusaurus/Link';

export default function MyComponents() {

  return (
    <Layout>
      <div className="container max-w-7xl px-4  mx-auto -mt-72 relative main-video-container">
        <div className="video-container">
          <div className="video-pic">
            <a href='https://www.youtube.com/watch?v=3PRCek1sSuY' target='black'><img src='/img/yt-img/thumb.png' alt="" className="video-user-image" /></a>
          </div>
          <div className="video-title">{'Adding a Search Bar to your Blog Section or Blog Post (Only Demo)'}</div>
          <span style={{fontWeight:'500', color:'blue', marginLeft:'2px'}}><Link to="https://www.youtube.com/@Ajay-Dhangar">{'Ajay Dhangar'}</Link></span>
          <br />
          <div className="video-view">
            {'61'} Views <span>.</span> {'1 month ago'}
          </div>

        </div>
        <div className="video-container">
          <div className="video-pic">
            <a href='https://youtu.be/lGmRnu--iU8' target='black'><img src='/img/yt-img/javascript.png' alt="" className="video-user-image" /></a>
          </div>
          <div className="video-title">{'Complete JavaScript Course + Notes for Beginners in one video (in Hindi)'}</div>
          <span style={{fontWeight:'500', color:'blue', marginLeft:'2px'}}><Link to="https://www.youtube.com/@coderdost">{'Coder Dost'}</Link></span>
          <br />
          <div className="video-view">
            {'1.5 lakh'} Views <span>.</span> {'3 month ago'}
          </div>

        </div>
        <div className="video-container">
          <div className="video-pic">
            <a href='https://youtu.be/WJNSNFJOaWU' target='black'><img src='/img/yt-img/node-js.png' alt="" className="video-user-image" /></a>
          </div>
          <div className="video-title">{'Connect REACT to NODE js MONGODB in one video (in Hindi)'}</div>
          <span style={{fontWeight:'500', color:'blue', marginLeft:'2px'}}><Link to="https://www.youtube.com/@coderdost">{'Coder Dost'}</Link></span>
          <br />
          <div className="video-view">
            {'26K'} Views <span>.</span> {'6 month ago'}
          </div>

        </div>
        <div className="video-container">
          <div className="video-pic">
            <a href='https://www.youtube.com/watch?v=3PRCek1sSuY' target='black'><img src='/img/yt-img/thumb.png' alt="" className="video-user-image" /></a>
          </div>
          <div className="video-title">{'Adding a Search Bar to your Blog Section or Blog Post (Only Demo)'}</div>
          <span style={{fontWeight:'500', color:'blue', marginLeft:'2px'}}><Link to="https://www.youtube.com/@Ajay-Dhangar">{'Ajay Dhangar'}</Link></span>
          <br />
          <div className="video-view">
            {'61'} Views <span>.</span> {'1 month ago'}
          </div>

        </div>
        
      </div>
    </Layout>
  );
}