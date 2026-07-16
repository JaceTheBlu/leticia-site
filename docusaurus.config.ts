import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Leticia',
  tagline: "Interrogatoires narratifs assistés par IA pour l'escape game",
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Default GitHub Pages URL so the site works out of the box. For a custom
  // domain (e.g. docs.letic.ia), set url to that domain, baseUrl to '/', and
  // add a static/CNAME file.
  url: 'https://jacetheblu.github.io',
  baseUrl: '/leticia-site/',

  organizationName: 'JaceTheBlu',
  projectName: 'leticia-site',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Leticia',
      logo: {
        alt: 'Leticia',
        src: 'img/logo.png',
      },
      // One-page navigation: shortcuts to the landing sections + a demo CTA.
      // Still no links to the documentation — it stays off the vitrine.
      items: [
        {to: '/#how', label: 'Fonctionnement', position: 'left'},
        {to: '/#features', label: 'Fonctionnalités', position: 'left'},
        {to: '/#sovereign', label: 'Souveraineté', position: 'left'},
        {to: '/#deploy', label: 'Déploiement', position: 'left'},
        {to: '/#contact', label: 'Demander une démo', position: 'right', className: 'navbar-cta'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Légal',
          items: [
            {label: 'RGPD & données personnelles', to: '/docs/rgpd'},
            {label: 'Mentions légales', to: '/docs/mentions-legales'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Leticia.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
