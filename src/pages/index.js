import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <img src="/img/logo.svg" alt="Open Strategy Games" className={styles.heroLogo} />
        <h1>{siteConfig.title}</h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <Link className="button button--primary button--lg" to="/docs/learn/intro">
          Read the Handbook
        </Link>
      </div>
    </header>
  );
}

const cards = [
  {
    title: 'Learn',
    description: 'The Open Strategy Games Handbook — everything you need to design and run your first game.',
    link: '/docs/learn/intro',
    label: 'Read the Handbook',
  },
  {
    title: 'Play',
    description: 'Contested Ground — a complete SRD and rules framework for faction-scale, argument-driven play.',
    link: '/docs/play/intro',
    label: 'Open the SRD',
  },
  {
    title: 'Log',
    description: 'Factionlog — a standard notation for recording Open Strategy Game sessions.',
    link: '/docs/log/intro',
    label: 'Read the Spec',
  },
];

export default function Home() {
  return (
    <Layout description="A reference for faction-scale, argument-driven play">
      <Hero />
      <main className={styles.main}>
        <section className={styles.cards}>
          {cards.map(({ title, description, link, label }) => (
            <div key={title} className={styles.card}>
              <h2>{title}</h2>
              <p>{description}</p>
              <Link className="button button--secondary" to={link}>{label}</Link>
            </div>
          ))}
        </section>
        <section className={styles.pitch}>
          <p>
            Open Strategy Games are faction-scale, argument-driven games where players
            represent competing interests and submit structured arguments each turn.
            There are no rigid rules limiting what you can attempt — only the
            plausibility of your reasoning and the referee's judgment. This site is
            the reference home for the practice: its handbook, its system reference,
            and its notation standard.
          </p>
          <p className={styles.credit}>
            Logo by <a href="https://delapouite.com/" target="_blank" rel="noopener noreferrer">Delapouite</a> under <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>.
          </p>
        </section>
      </main>
    </Layout>
  );
}