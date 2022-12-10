import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx(styles.hero__title, styles.hero__title__light)}><img src={`${siteConfig.baseUrl}/img/logo-wide-dark.svg`}></img></h1>
        <h1 className={clsx(styles.hero__title, styles.hero__title__dark)}><img src={`${siteConfig.baseUrl}/img/logo-wide-light.svg`}></img></h1>
        <p className={clsx(styles.hero__subtitle)}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
