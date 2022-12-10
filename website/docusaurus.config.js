// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Testdeck',
  tagline: 'Object-oriented ECMAScript Testing',
  url: 'https://testdeck.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'testdeck', // Usually your GitHub org/user name.
  projectName: 'testdeck', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // showReadingTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '0.3.x'
            },
          },
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Testdeck',
        logo: {
          alt: 'Testdeck',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          {
            type: 'doc',
            docId: '/category/api',
            position: 'left',
            label: 'API',
          },
          {
            type: 'doc',
            docId: '/category/tutorial',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: '/templates',
            position: 'left',
            label: 'Project Templates'
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/testdeck/testdeck',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Testdeck',
        //     items: [
        //       {
        //         label: 'Home',
        //         to: '/',
        //       },
        //       // {
        //       //   label: 'Blog',
        //       //   to: '/blog',
        //       // },
        //     ],
        //   },
        //   {
        //     title: 'Documentation',
        //     items: [
        //       {
        //         label: 'API',
        //         to: 'docs/category/api',
        //       },
        //       {
        //         label: 'Tutorial',
        //         to: 'docs/category/tutorial',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     //   items: [
        //     //     {
        //     //       label: 'Stack Overflow',
        //     //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     //     },
        //     //     {
        //     //       label: 'Discord',
        //     //       href: 'https://discordapp.com/invite/docusaurus',
        //     //     },
        //     //     {
        //     //       label: 'Twitter',
        //     //       href: 'https://twitter.com/docusaurus',
        //     //     },
        //     //   ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Project Templates',
        //         to: '/templates',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/testdeck/testdeck',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © 2019-${new Date().getFullYear()} Testdeck Team and Contributors. All documentation is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
