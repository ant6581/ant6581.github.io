import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Threat Hunting',
    Svg: require('@site/static/img/th.svg').default,
    description: (
      <>
        Learn to identify malicious activities within real-world data sets and mitigate potential threats.
      </>
    ),
  },
  {
    title: 'Incident Response',
    Svg: require('@site/static/img/ir.svg').default,
    description: (
      <>
        Equip yourself with the skills to promptly identify, contain, and manage cyber breaches, minimizing potential damage.
      </>
    ),
  },
  {
    title: 'Threat Intelligence',
    Svg: require('@site/static/img/ti.svg').default,
    description: (
      <>
        Acquire a deeper understanding of the most recent cyber risks and stay updated on the activities of adversary groups in the digital realm.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
