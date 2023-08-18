import React from 'react';
import Layout from '@theme/Layout';
import BackgroundImage from '@site/src/pages/BackgroundImage';
// import CodeBlock from '@theme/CodeBlock';
// import Toggler from '@site/src/pages/Toggler';
// import MonthCalendar from '@site/src/pages/MonthCalendar';

const threePhotos = [
  {
    url: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SqKjZoZ7IbwKWpc0oIz9ltyuHsEBTWI83g&usqp=CAU")',
    title: 'Services',
    text: '',
  },
  {
    url: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHiECeb5MwjloKoGHKq4noR9cvTKwhRL2hw&usqp=CAU")',
    title: 'Designing',
    text: '',
  },
  {
    url: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMV0P0_7Dv2eqqemSssHfFG_xXSCczFXcEQ&usqp=CAU")',
    title: 'Development',
    text: ``,
  },
];

export default function MyComponents() {
  return (
    <Layout>
      <BackgroundImage photos={threePhotos} />
      <div style={{maxWidth: '700px', margin: 'auto'}}>
        {/* <CodeBlock
          language="jsx"
          title="/src/components/HelloCodeTitle.js"
          showLineNumbers>
          {`function HelloCodeTitle(props) {
          return <h1>Hello, {props.name}</h1>;
        }`}
        </CodeBlock> */}
        {/* <div style={{display: 'inline-block'}}>
          <Toggler />
        </div> */}
        <h3>{new Date().toLocaleDateString()}</h3>
        {/* <MonthCalendar _year={new Date().getFullYear()} _month={11} /> */}
      </div>
    </Layout>
  );
}
