import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Authors from './authors'

function Feature({ name, url, image_url, description, length }) {
  return (
    <div className={clsx(`col col--${12 / length}`)}>
      <div className="text--center">
        <img src={image_url} alt={name} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href={url}>{name}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">贡献者</h2>
        <div className="row">
          {Authors.map((props, idx, array) => (
            <Feature key={idx} {...props} length={array.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
