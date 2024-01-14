import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';

function RowCardItem({img, title, description, link}) {
  return (
    <div className="row margin-vert--lg shadow--md">
      <div className="col col--4">
        <Link to={'/'} target="_blank">
          <div className="text--center">
            <Image className={styles.colImg} img={img} />
          </div>
        </Link>
      </div>
      <div className="col margin-vert--xs">
        <div className={styles.colText}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function ListRowCard({itemList}) {
  return (
    <section className={styles.features}>
      <div className="container">
        {itemList.map((props, idx) => (
          <RowCardItem key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
