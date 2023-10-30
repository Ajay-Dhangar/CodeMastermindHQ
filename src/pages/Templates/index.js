import React from 'react';
import Layout from '@theme/Layout';
import ListRowCard from '@site/src/components/ListRowCard';

const ItemList = [
    {
      title: '🆕 | Database Connections ',
      img: require('@site/static/img/logo.png'),
      link: "collections/dab",
      description: (
        <>
          Mar 15, 2023: Today marked the launch of a new feature: <em>Database Connections</em> for Azure Static Web Apps. This feature enables your application to connect seamlessly to supported Azure databases over REST or GraphQL endpoints, without you having to write any backend code. Explore this collection to learn about the feature, browse docs, and explore code samples and tutorials for applied understanding.
        </>
      ),
    },
    {
      title: '01 | Core Concepts',
      img: require('@site/static/img/logo.png'),
      link: "/",
      description: (
        <>
           Get started on your learning journey with an introduction to the core concepts of Azure Static Web Apps. Buiild and deploy your first SWA. Add a Serverless API backend. Configure build process, app settings and behavior. Secure your app with authentication options. Stage deployments for preview. Automate CI/CD with various options.
        </>
      ),
    },
];

export default function Sprints() {
  return (
    <Layout
      title="Collections"
      description="Learn Azure Static Web Apps in Week-long sprints, one topic at a time!">
      <main>
        <ListRowCard itemList={ItemList} />
      </main>
    </Layout>
  );
}