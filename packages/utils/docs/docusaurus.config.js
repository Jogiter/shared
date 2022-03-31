// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '公共函数库',
  tagline: '常用的工具函数',
  url: 'https://github.com/nipem/shared/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nipem', // Usually your GitHub org/user name.
  projectName: 'shared', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SHARED UTILS',
        logo: {
          alt: 'SHARED UTILS',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: '函数列表',
          },
          { to: 'blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/nipem/shared/',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} SHARED UTILS, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // hideableSidebar: true,
    }),

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['md'],
      },
    ],
  ],
};

module.exports = config;
