// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Eng Tian Hom's Site",
  tagline: 'There is no end to education.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tianhom0919.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/tianhom/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tianhom0919', // Usually your GitHub org/user name.
  projectName: 'tianhom', // Usually your repo name.

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Hubot-Sans.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Mono-Sans.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
  ],

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/tianhom0919/tianhom/tree/main/th-ws",
        },
        blog: {
          blogSidebarTitle: "Posts",
          showReadingTime: true,
          editUrl:
            "https://github.com/tianhom0919/tianhom/tree/main/th-ws",
          truncateMarker: /<!--\s*(truncate)\s*-->/,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Eng Tian Hom',
        logo: {
          alt: 'My Site Logo',
          src: 'https://github.com/tianhom0919.png',
          style: {borderRadius: '50%' },
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'My Tutorials',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dumpSidebar',
            position: 'left',
            label: 'Dump',
          },
          { 
            to: '/aboutme', 
            label: 'About Me', 
            position: 'left'
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://github.com/tianhom0919',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      algolia: {
        // Search only API key
        apiKey: "dab0daae85eb4a6b05722fb0310a43ce",
        indexName: "tianhom0919io",
        appId: "EIU2FC21C0",
        contextualSearch: false,
        debug: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'My Tutorials',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/tianhom0919/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/ength091902/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tianhom0919',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
