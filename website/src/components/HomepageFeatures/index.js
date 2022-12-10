import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Object-oriented Testing',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Testdeck ... object-oriented testing ...
      </>
    ),
  },
  {
    title: 'Wide-variety Test Framework Support',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Testdeck ... wide-variety test framework support ...
      </>
    ),
  },
  {
    title: 'Superior Test Suite Maintainability',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Testdeck ... superior test suite maintanability ...
      </>
    ),
  },
  {
    title: 'Enhanced Control Over Skip/Pending/Focused Tests and Suites',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Testdeck ... runtime configurable skip/pending/only ... tests and suites
      </>
    ),
  },
  {
    title: 'Parametrised Tests',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Testdeck ... parametrized tests ...
      </>
    ),
  },
  {
    title: 'IOC Container Support',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Testdeck ... dependency injection ...
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
