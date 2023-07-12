import React from 'react';
import styles from './styles.module.css';

const BackgroundImage = (props) => {
  return (
    <div
      className="showcaseFavorite_src-pages-showcase-styles-module"
      style={{paddingBottom: '0px'}}>
      <div className="container">
        <section className="margin-top--lg margin-bottom--xl">
          <div className={styles.portfolio_section__projects}>
            {props.photos ? (
              props.photos.map((item) => (
                <div
                  key={item.title}
                  className={styles.portfolio_section__project}>
                  <div
                    className={styles.portfolio_section__project_image}
                    style={{
                      backgroundImage: item.url,
                      transition:
                        'background-image 0.3s ease-in-out 0s, background-size 0.2s ease 0s',
                      filter: 'none',
                    }}></div>
                  <div className={styles.portfolio_section__project_title}>
                    {item.title}
                  </div>
                  <div
                    className={styles.portfolio_section__project_description}>
                    {item.text}
                  </div>
                </div>
              ))
            ) : (
              <p>Photos is empty</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BackgroundImage;
