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
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Présentation', to: '/docs/intro'},
            {label: 'Installation', to: '/docs/installation'},
            {label: 'Configuration', to: '/docs/configuration'},
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
