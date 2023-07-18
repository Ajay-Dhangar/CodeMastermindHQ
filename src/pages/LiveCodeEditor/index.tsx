import React from 'react';
import Layout from '@theme/Layout';
// import BackgroundImage from '@site/src/pages/BackgroundImage';
// import CodeBlock from '@theme/CodeBlock';
// import Toggler from '@site/src/pages/Toggler';
// import MonthCalendar from '@site/src/pages/MonthCalendar';



export default function MyComponents() {
  return (
    <Layout>
       <div className="container max-w-7xl px-4  mx-auto -mt-72 relative">
        <iframe
          src="https://codesandbox.io/embed/kind-oskar-ht3jq2?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: '100%',
            height: '600px',
            border: '0',
            borderRadius: 8,
            overflow: 'hidden',
            position: 'static',
            zIndex: 0,
          }}
          className="shadow-2xl"
          title="dazzling-swanson-wne32"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </Layout>
  );
}
