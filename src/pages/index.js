import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
// import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import './styles.btn.css';

const features = [
  {
    title: 'HTML 5',
    imageUrl: 'dev-img/cd-html.svg',
    description: (
      <>
        The latest version of the markup language for web pages, introducing enhanced
        semantics, multimedia support, and improved accessibility.
      </>
    ),
  },
  {
    title: 'CSS 3',
    imageUrl: 'dev-img/cd-css3.svg',
    description: (
      <>
        The latest version of CSS that brings exciting enhancements like animations,
        gradients, and transitions, empowering modern web design.
      </>
    ),
  },
  {
    title: 'JavaScript',
    imageUrl: 'dev-img/cd-javascript.svg',
    description: (
      <>
        Versatile, high-level scripting language.
        Powers dynamic web interactions with HTML/CSS.
        Supports both front-end and back-end.
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
  // {
  //   title: 'Express Js',
  //   imageUrl: 'dev-img/express-js.svg',
  //   description: (
  //     <>
  //       A fast and minimalistic web application framework for Node.js, making server-side 
  //       development in JavaScript a breeze
  //     </>
  //   ),
  // },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const svgList = [
  {
    title: 'github',
    Svg: require('../../static/img/github.svg').default,
    color: 'black',
    link: 'https://github.com/Ajay-Dhangar/CodeMastermindHQ',
  },
  {
    title: 'bilibili',
    Svg: require('../../static/img/bilibili.svg').default,
    link: '/',
  },
  {
    title: 'wechat',
    Svg: require('../../static/img/wechat.svg').default,
    color: '#2979ff',
    link: '/',
  },
]
const Svg = ({ Svg, color, title, link }) => {
  return (
    <a href={link} target='_blank'>
      <Svg className={styles.svg} style={{ fill: color }} />
    </a>
  )
}

function MyHero() {
  return (
    <div className={styles.myHeroContainer}>
      
      {/* <div className={styles.rightContainer}>
        <img src="img/hero.png" alt='HeroImg' />
      </div> */}

      <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>
        {/* Elevating <br /> */} Code Mastery
        </h1>
        <p className={styles.leftContainer_p}>
          Welcome to CodeMastermindHQ. Where innovation meets elegance in web development.
          <br />
          Join us for the future of coding excellence
        </p>

        <div className={styles.svgContainer}>
            {svgList.map((item, index) => {
              return <Svg {...item} key={item.title} />
            })}
        </div>
        
      </div>

      <div className={styles.rightContainer}>
        <img src="img/hero.png" alt='HeroImg' />
      </div>
      
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">

          <h1 className="hero__title">{siteConfig.title}</h1>

          <p className="hero__subtitle">{siteConfig.tagline}</p>

          {/* <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/react/create-react-app/getting-started/')}>
              <Translate description="The homepage main heading">Get Started with Tutorials</Translate>

            </Link>
          </div>
          <br /> */}
          {/* <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/courses')}>
              <Translate description="The homepage main heading">Get Started with Courses</Translate>

            </Link>
          </div> */}

          {/* <div className="main-btn-container">
            <Link className="main-button" to="#" style={{color:'#1e9bff'}}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Button
            </Link>
            <Link className="main-button" to="#" style={{color:'#6eff3e'}}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Button
            </Link>
          </div> */}

          <div className="main-button-container">
            <Link to={useBaseUrl('docs/react/create-react-app/getting-started/')}>
              <button className="unique-button-class">
                <div className="lazyload" data-bg="tommy-concouse-trumpet.jpg?width=300&height=216&format=auto">
                  <Link to={useBaseUrl('docs/react/create-react-app/getting-started/')}> <img src='img/tutorial-windwos.png' alt='tutorial' /></Link>
                </div>
                <Link to={useBaseUrl('docs/react/create-react-app/getting-started/')}><h2>Start Learning Now!</h2> </Link> <br />
                <h3>Mastering the Art of Web Development: Step-by-Step Tutorials</h3>
              </button>
            </Link>
            <Link to={useBaseUrl('/courses')}>
              <button className="unique-button-class spin">
                <div>
                  <span><Link to={useBaseUrl('/courses')}>★★★</Link></span>
                </div>
                <Link to={useBaseUrl('/courses')}><h2>Browse Course Catalog</h2></Link> <br />
                <h3>Build Your Future with CodeMastermindHQ</h3>
              </button>
            </Link>
          </div>

        </div>
      </header>
      <main>

        <MyHero />

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
