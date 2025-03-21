// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '思维工坊 AI 社区',
  tagline: '这里，分享前沿的 AI 发展趋势。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://web.nemoob.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nemoob', // Usually your GitHub org/user name.
  projectName: 'nemoob-web', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/nemoob/nemoob-web/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/nemoob/nemoob-web/tree/main/',
          blogTitle: '思维工坊博客',
          blogSidebarTitle: '最新文章',
          blogSidebarCount: 5,
          postsPerPage: 10,
          routeBasePath: 'blog',
          path: 'blog',
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
        title: '思维工坊',
        logo: {
          alt: '思维工坊 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {to: '/blog-archive', label: '博客', position: 'left'},
          {
            href: 'https://github.com/nemoob',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '文档',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              // {
              //   label: '讨论区',
              //   href: 'https://github.com/nemoob/nemoob-web/discussions',
              // },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog-archive',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nemoob/nemoob-web',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 思维工坊. 合作人微信号：nemoob.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
