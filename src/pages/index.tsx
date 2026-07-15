import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Card = {
  title: string;
  emoji: string;
  to: string;
  description: string;
};

const CARDS: Card[] = [
  {
    title: 'Installation',
    emoji: '📦',
    to: '/docs/installation',
    description: 'Docker, archive sans Docker ou installeur Windows.',
  },
  {
    title: 'Configuration',
    emoji: '⚙️',
    to: '/docs/configuration',
    description: 'Compte admin, IA, transcription et synthèse vocale.',
  },
  {
    title: 'Providers & IA locale',
    emoji: '🧠',
    to: '/docs/providers-ia',
    description: 'Cloud ou local : LLM, STT, TTS compatibles OpenAI.',
  },
  {
    title: 'Première session',
    emoji: '🎙️',
    to: '/docs/premiere-session',
    description: 'Scénario, personnages et interrogatoire vocal.',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={useBaseUrl('/img/logo.png')} alt="Leticia" width={72} height={72} />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroLead}>
          Documentation d'installation, de configuration et d'exploitation de la
          plateforme Leticia.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Lire la documentation
          </Link>
        </div>
        <div className={styles.badges} aria-label="Qualité du code">
          <img
            src="https://img.shields.io/badge/lint-ruff-261230?logo=ruff&logoColor=white"
            alt="Lint : Ruff"
            height={20}
          />
          <img src="https://img.shields.io/badge/types-mypy-2a6db2" alt="Types : mypy" height={20} />
          <img
            src="https://img.shields.io/badge/tests-unittest-3776ab?logo=python&logoColor=white"
            alt="Tests : unittest"
            height={20}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline as string}>
      <HomepageHeader />
      <main className="container margin-vert--lg">
        <div className="row">
          {CARDS.map((card) => (
            <div key={card.to} className="col col--3 margin-bottom--lg">
              <Link to={card.to} className={styles.card}>
                <div className={styles.cardEmoji} role="img" aria-label={card.title}>
                  {card.emoji}
                </div>
                <Heading as="h3">{card.title}</Heading>
                <p>{card.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
