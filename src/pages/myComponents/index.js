import React from 'react';
import Layout from '@theme/Layout';
import BackgroundImage from '@site/src/pages/BackgroundImage';
import CodeBlock from '@theme/CodeBlock';
import Toggler from '@site/src/pages/Toggler';
import MonthCalendar from '@site/src/pages/MonthCalendar';

const threePhotos = [
  {
    url: 'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c83409147d349a1bb246e3d0ed5/1232x1232")',
    title: 'Serverless',
    text: 'Создавать простые навыки Алисы на базе Yandex Cloud Functions',
  },
  {
    url: 'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834091e96fc52da39802810172/1232x1232")',
    title: 'Kubernetes®',
    text: 'Запускать контейнеры и создавать кластер с помощью Yandex Managed Service for Kubernetes®',
  },
  {
    url: 'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834093b1e4d8d8c72ab3de51c4/1232x1232")',
    title: 'Управляемые базы данных',
    text: (
      <div>
        Настраивать <b>кластеры</b> управляемых баз данных, хранить и
        анализировать данные в облаке
      </div>
    ),
  },
];

export default function MyComponents() {
  return (
    <Layout>
      <BackgroundImage photos={threePhotos} />
      <div style={{maxWidth: '700px', margin: 'auto'}}>
        <CodeBlock
          language="jsx"
          title="/src/components/HelloCodeTitle.js"
          showLineNumbers>
          {`function HelloCodeTitle(props) {
          return <h1>Hello, {props.name}</h1>;
        }`}
        </CodeBlock>
        <div style={{display: 'inline-block'}}>
          <Toggler />
        </div>
        <h3>{new Date().getFullYear()}</h3>
        <MonthCalendar _year={new Date().getFullYear()} _month={11} />
      </div>
    </Layout>
  );
}
