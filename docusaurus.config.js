const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const path = require('path');

const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');
const webpackProxy = require('./src/plugins/webpackProxy/index');
const baseUrl = process.env.BASE_URL || '/';
const isDeployPreview = !!process.env.GITHUB_ACTIONS;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CodeMastermindHQ',
  tagline: 'A tech hub for learning and collaborating on web development.',
  organizationName: 'CodeMastermindHQ', // Usually your GitHub org/user name.
  projectName: 'CodeMastermindHQ', // Usually your repo name.
  baseUrl,
  url: 'https://cmhq.tech/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  customFields: {
    isDeployPreview,
    description: 'Ajay Dhangar',
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true,
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          numberPrefixParser: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/Ajay-Dhangar/CodeMastermindHQ/edit/main/',
          remarkPlugins: [npm2yarn, {sync: true}],
        },

        blog: {
          path: 'blog',
          editUrl: ({locale, blogDirPath, blogPath, permalink}) =>
            `https://github.com/Ajay-Dhangar/CodeMastermindHQ/edit/main/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogTitle: 'Blog',
          blogDescription: 'Blog',
          blogSidebarCount: 5,
          blogSidebarTitle: 'All our posts',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          //remarkPlugins: [require('remark-math')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'Feed',
            description: 'Feed',
            copyright: '',
            language: `Copyright © ${new Date().getFullYear()} CodeMastermindHQ`,
          },
        },
        pages: {
          remarkPlugins: [npm2yarn],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          ignorePatterns: ['/tests/**'],
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'hi'],
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      head: [
        [
          'script',
          {
            async: true,
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991',
            crossorigin: 'anonymous',
          },
        ],
      ],
      metadata: [
        {
          name: 'keywords',
          content:
            'Java, cooking, Express.js, React, HTML, CSS, MERN stack, MongoDB, Code community, Code mentorship, Code bootcamp, Learning to code, Coding tutorials, Web development tutorials, blog, code, coding, Software development, programming, web development, JavaScript, React,Node.js, Full stack development,DSACodeMastermindHQ, Code Mastermind, GitHub repository,Open-source project, Software development, Programming, CodeMastermindHQ project, Code Mastermind game, Online coding game, Programming puzzle game, JavaScript project, Web development project, GitHub, Vercel, HTML, CSS, JavaScript, Frontend development, Web application, Game development, Logic puzzle, Problem-solving, Coding challenge, Programming practice, Learning to code, Coding education, Web-based game, Browser game',
        },
      ],
      announcementBar: {
        id: 'announcementBar',
        content: `⭐️ If you like CodeMasterMindHQ, give it a star on <a target="_blank" href="https://github.com/Ajay-Dhangar/CodeMastermindHQ">GitHub</a> and join us on <a target="_blank" href="https://www.linkedin.com/groups/14232119/">LinkedIn</a> ⭐️`,
        isCloseable: true,
      },

      navbar: {
        // hideOnScroll: true,
        title: 'CMHQ',
        logo: {
          alt: 'CodeMastermindHQ',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            html: '<span class="nav-emoji">📚</span> Learning',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'html/intro-html/intro-html',
                label: '📚 Tutorials 🚀',
              },

              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                to: '/courses',
                label: '🎓 Courses 🚀',
                activeBaseRegex: `/courses/`,
              },

              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                label: '🧠 DSA 🚀',
                to: '/courses/dsa/welcome-dsa',
                activeBaseRegex: `/dsa/`,
              },            
            ],
          },
          
          {
            type: 'dropdown',
            html: '<span class="nav-emoji">➕</span> Features',
            position: 'left',
            items: [
              {
                label: '🧠 Quiz Play 🚀',
                to: 'https://quiz-app-ajay-dhangar.vercel.app/',
              },

              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                html: `<svg class="youtube-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 10">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg> <label class="youtube-icon-name">Videoes</label>`,
                to: '/YouTubeVideos',
              },
            ],
          },

          {
            to: '/support',
            html: '<span class="nav-emoji">🌱</span> Community',
            position: 'left',
          },

          {
            to: 'showcase',
            html: '<span class="nav-emoji">🌍</span> Showcase',
            position: 'left',
          },

          {
            type: 'dropdown',
            html: '<span class="nav-emoji">🏷️</span> Tags',
            position: 'left',
            items: [
              {
                label: '🏷️ Tutorial Tags 📚',
                to: '/docs/tags/',
                activeBaseRegex: `/docs/tags/`,
              },

              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                label: '🏷️ Courses Tags 🎓',
                to: '/courses/tags/',
                activeBaseRegex: `/courses/tags/`,
              },
            ],
          },

          {
            href: 'https://github.com/CodeMastermindHQ',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },

          {to: 'blog', label: 'Blog', position: 'left'},

          // {
          //   to: '/LoginForm',
          //   label: 'AUTH',
          //   position: 'right',
          //   className: 'nav-link_login',
          // },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Tutorials',
                to: '/docs/react/create-react-app/getting-started/',
              },
              {
                label: 'Courses',
                to: '/courses/',
              },
              {
                label: 'DSA',
                to: '/courses/dsa/welcome-dsa',
              },
            ],
          },
          {
            title: 'Compony',
            items: [
              {
                label: 'Jobs',
                to: '/Jobs',
              },
              {
                label: 'Internships',
                to: '/Intern',
              },
              {
                label: 'Guides',
                to: '/support/career/career-page',
              },
            ],
          },
          {
            title: 'Product',
            items: [
              {
                label: 'Showcase',
                to: 'showcase',
              },
              {
                label: 'Beginner Guides',
                to: '/support/resources',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Team',
                to: '/support/team',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/codemastermind2',
              },
              {
                label: 'LinkedIn Group',
                to: 'https://www.linkedin.com/groups/14232119/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Survey',
                to: 'https://forms.gle/Fd46s7r3Kpei8qwB8',
              },
              // {
              //   html: `<img src="https://komarev.com/ghpvc/?username=ajay-dhangar&label=Site%20Views&color=0e75b6&style=flat" alt="ajay-dhangar" height="25" width="120px" />`
              // },
              // {
              //   html: `<a href="https://github.com/CodeMastermindHQ/CodeMastermindHQ/actions/workflows/github-code-scanning/codeql"><img alt="GitHub contributors" src="https://github.com/CodeMastermindHQ/CodeMastermindHQ/actions/workflows/github-code-scanning/codeql/badge.svg" height="25" width="120px"></a>`
              // },

              // {
              //   html: `<a href="https://github.com/Ajay-Dhangar/CodeMastermindHQ/stargazers"><img src="https://img.shields.io/github/stars/Ajay-Dhangar/CodeMastermindHQ" height="25" width="120px" alt="Stars Badge"/></a>`
              // },
              {
                to: `/SecurityInfo`,
                label: `Security`,
              },
              // {
              //   html: '<iframe src="https://github.com/sponsors/Ajay-Dhangar/button" href="https://github.com/sponsors/Ajay-Dhangar" title="Sponsor Ajay-Dhangar" height="32" width="120px" style="border: 0; border-radius: 6px;"></iframe>',
              // },
            ],
          },
        ],

        logo: {
          alt: 'Open Source',
          src: '/img/OS.png',
          href: 'https://github.com/sponsors/codemastermindhq',
        },        
        copyright: ` Copyright © ${new Date().getFullYear()} CMHQ Made with ❤️ by <a href="https://github.com/ajay-dhangar" target="_blank">Ajay-Dhangar</a>`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
    }),
  plugins: [
    './src/plugins/webpackProxy',
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en'],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'courses',
        path: 'courses',
        routeBasePath: 'courses',
        sidebarPath: require.resolve('./sidebarsCourses.js'),
        editUrl: 'https://github.com/Ajay-Dhangar/CodeMastermindHQ/edit/main/',
        remarkPlugins: [npm2yarn],
        sidebarCollapsible: true,
        numberPrefixParser: false,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'support',
        path: './support', // Path to data on filesystem, relative to site dir.
        routeBasePath: 'support', // URL Route.
        include: ['**/*.md'],
        sidebarPath: require.resolve('./sidebarsSupport.js'),
        editUrl: 'https://github.com/Ajay-Dhangar/CodeMastermindHQ/edit/main/',
        remarkPlugins: [npm2yarn],
        sidebarCollapsible: true,
        numberPrefixParser: false,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      {
        quality: 70,
        max: 1030, 
        min: 640,
        steps: 2, 
        disableInDev: false, 
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: isDeployPreview,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        // swRegister: false,
        swCustom: path.resolve(__dirname, 'src/sw.js'),
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/docusaurus.png',
            color: 'rgb(62, 204, 94)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/docusaurus.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
};

module.exports = config;
