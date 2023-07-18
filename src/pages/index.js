import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'HTML 5',
    imageUrl: 'dev-img/html.svg',
    description: (
      <>
        The latest version of the markup language for web pages, introducing enhanced 
        semantics, multimedia support, and improved accessibility.
      </>
    ),
  },
  {
    title: 'CSS 3',
    imageUrl: 'dev-img/css3.svg',
    description: (
      <>
        The latest version of CSS that brings exciting enhancements like animations, 
        gradients, and transitions, empowering modern web design.
      </>
    ),
  },
  {
    title: 'React',
    imageUrl: 'dev-img/react.svg',
    description: (
      <>
        A powerful JavaScript library for building user interfaces. 
        It enables efficient rendering and modular component-based development.
      </>
    ),
  },
  {
    title: 'Node',
    imageUrl: 'dev-img/node-js.svg',
    description: (
      <>
        A powerful JavaScript runtime built on Chrome's V8 engine, enabling scalable 
        and efficient server-side and networking applications.
      </>
    ),
  },
  {
    title: 'MongoDB',
    imageUrl: 'dev-img/mongodb.svg',
    description: (
      <>
        A flexible and scalable NoSQL database that stores data in JSON-like documents, 
        offering high performance and easy scalability.
      </>
    ),
  },
  {
    title: 'Express Js',
    imageUrl: 'dev-img/express-js.svg',
    description: (
      <>
        A fast and minimalistic web application framework for Node.js, making server-side 
        development in JavaScript a breeze
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 style={{textAlign:'center'}}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/react/create-react-app/getting-started/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className={clsx(styles.announcement, styles.announcementDark)}>
          <div className={styles.announcementInner}>
            <Link><q>Unleash Your Coding Potential</q></Link>
            <p>Elevate your coding journey with CodeMastermindHQ. Embrace the power of code, where possibilities become reality.</p>
          </div>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>        
    </Layout>
  );
}

export default Home;
