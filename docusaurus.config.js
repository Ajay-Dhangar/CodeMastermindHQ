// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

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
  tagline: 'Experience the power of real-world coding with CodeMastermindHQ',
  organizationName: 'CodeMastermindHQ', // Usually your GitHub org/user name.
  projectName: 'CodeMastermindHQ', // Usually your repo name.
  baseUrl,
  url: 'https://codemastermindhq.netlify.app/',
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
          //routeBasePath: '/',
          sidebarPath: 'sidebars.js',
          numberPrefixParser: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/CodeMastermindHQ/CodeMastermindHQ/edit/main/',
          remarkPlugins: [npm2yarn, { sync: true }],
        },
        // gtag: !isDeployPreview
        // ? {
        //       trackingID: 'G-M8RTQC8274',
        //       // Optional fields.
        //       anonymizeIP: true, // Should IPs be anonymized?
        //     }
        //   : undefined,
        blog: {
          path: 'blog',
          // Simple use-case: string editUrl
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          // Advanced use-case: functional editUrl
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/CodeMastermindHQ/CodeMastermindHQ/edit/main/${blogDirPath}/${blogPath}`,
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
      metadata: [
        {
          name: "keywords",
          content:
            "Java, cooking, Express.js, HTML, CSS, MERN stack, MongoDB, Code community, Code mentorship, Code bootcamp, Learning to code, Coding tutorials, Web development tutorials, blog, code, coding, Software development, programming, web development, JavaScript, React,Node.js, Full stack development,DSACodeMastermindHQ, Code Mastermind, GitHub repository,Open-source project, Software development, Programming, CodeMastermindHQ project, Code Mastermind game, Online coding game, Programming puzzle game, JavaScript project, Web development project, GitHub, Vercel, HTML, CSS, JavaScript, Frontend development, Web application, Game development, Logic puzzle, Problem-solving, Coding challenge, Programming practice, Learning to code, Coding education, Web-based game, Browser game",
        },
      ],
      announcementBar: {
        id: 'announcementBar',
        content: `⭐️ If you like CodeMasterMindHQ, give it a star on <a target="_blank" href="https://github.com/CodeMastermindHQ/CodeMastermindHQ">GitHub</a> and join us on <a target="_blank" href="https://www.linkedin.com/groups/14232119/">LinkedIn</a> ⭐️`,

        backgroundColor: '#ff1f21',
        textColor: '#f1f1f1',
        isCloseable: true,
      },
      navbar: {
        hideOnScroll: true,
        title: 'CMHQ',
        logo: {
          alt: 'CodeMastermindHQ',
          src: 'img/logo.png',
        },
        items: [

          {
            type: 'dropdown',
            label: '📚 Learning Hub 🎓',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'html/basic-level/html-intro',
                label: '📚 Tutorials 🚀',
              },

              {
                to: '/courses',
                label: '🎓 Courses 🚀',
                activeBaseRegex: `/courses/`,
              },
              {

                label: '🧠 DSA 🚀',
                to: '/support',
                activeBaseRegex: `/support/`,
              },
            ]
          },         

          // {to: 'blog', label: 'Blog', position: 'left'},

          {
            type: 'dropdown',
            label: '➕ Features',
            position: 'left',
            items: [
              {
                label: '🖥️ Live Playground',
                to: '/LiveCodeEditor',
              },
              // {
              //   label: '🧠 Assesment 🚀',
              //   to: '/Assesment',
              // },
              {
                label: '🏷️ Tutorial Tags 📚',
                to: '/docs/tags/',
                activeBaseRegex: `/docs/tags/`,
              },
              {
                label: '🏷️ Courses Tags 🎓',
                to: '/courses/tags/',
                activeBaseRegex: `/courses/tags/`,
              },
              {
                html: `<svg class="youtube-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 10">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg> <label class="youtube-icon-name">Videoes</label>`,
                to: '/YouTubeVideos',
              },
            ]
          },

          { to: 'showcase', label: '🌍 Showcase', position: 'left' },



          {
            type: 'localeDropdown',
            position: 'right',
          },

          {
            type: 'dropdown',
            label: '💝 Donation',
            position: 'right',
            items: [
              {
                to: 'https://github.com/sponsors/Ajay-Dhangar',
                html: '<iframe src="https://github.com/sponsors/Ajay-Dhangar/button" title="Sponsor Ajay-Dhangar" height="32" width="120px" style="border: 0; border-radius: 6px;"></iframe>',
              },
              {
                // to: 'https://paytm.business/link/1691717913115/LL_644057646',
                to: '/DonationComponent',
                html: '<svg class="paytm-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 8 25 25" width="85px" height="25px"><path fill="#0d47a1" d="M5.446 18.01H.548c-.277 0-.502.167-.503.502L0 30.519c-.001.3.196.45.465.45.735 0 1.335 0 2.07 0C2.79 30.969 3 30.844 3 30.594 3 29.483 3 28.111 3 27l2.126.009c1.399-.092 2.335-.742 2.725-2.052.117-.393.14-.733.14-1.137l.11-2.862C7.999 18.946 6.949 18.181 5.446 18.01zM4.995 23.465C4.995 23.759 4.754 24 4.461 24H3v-3h1.461c.293 0 .534.24.534.535V23.465zM13.938 18h-3.423c-.26 0-.483.08-.483.351 0 .706 0 1.495 0 2.201C10.06 20.846 10.263 21 10.552 21h2.855c.594 0 .532.972 0 1H11.84C10.101 22 9 23.562 9 25.137c0 .42.005 1.406 0 1.863-.008.651-.014 1.311.112 1.899C9.336 29.939 10.235 31 11.597 31h4.228c.541 0 1.173-.474 1.173-1.101v-8.274C17.026 19.443 15.942 18.117 13.938 18zM14 27.55c0 .248-.202.45-.448.45h-1.105C12.201 28 12 27.798 12 27.55v-2.101C12 25.202 12.201 25 12.447 25h1.105C13.798 25 14 25.202 14 25.449V27.55zM18 18.594v5.608c.124 1.6 1.608 2.798 3.171 2.798h1.414c.597 0 .561.969 0 .969H19.49c-.339 0-.462.177-.462.476v2.152c0 .226.183.396.422.396h2.959c2.416 0 3.592-1.159 3.591-3.757v-8.84c0-.276-.175-.383-.342-.383h-2.302c-.224 0-.355.243-.355.422v5.218c0 .199-.111.316-.29.316H21.41c-.264 0-.409-.143-.409-.396v-5.058C21 18.218 20.88 18 20.552 18c-.778 0-1.442 0-2.22 0C18.067 18 18 18.263 18 18.594L18 18.594z"/><path fill="#00adee" d="M27.038 20.569v-2.138c0-.237.194-.431.43-.431H28c1.368-.285 1.851-.62 2.688-1.522.514-.557.966-.704 1.298-.113L32 18h1.569C33.807 18 34 18.194 34 18.431v2.138C34 20.805 33.806 21 33.569 21H32v9.569C32 30.807 31.806 31 31.57 31h-2.14C29.193 31 29 30.807 29 30.569V21h-1.531C27.234 21 27.038 20.806 27.038 20.569L27.038 20.569zM42.991 30.465c0 .294-.244.535-.539.535h-1.91c-.297 0-.54-.241-.54-.535v-6.623-1.871c0-1.284-2.002-1.284-2.002 0v8.494C38 30.759 37.758 31 37.461 31H35.54C35.243 31 35 30.759 35 30.465V18.537C35 18.241 35.243 18 35.54 18h1.976c.297 0 .539.241.539.537v.292c1.32-1.266 3.302-.973 4.416.228 2.097-2.405 5.69-.262 5.523 2.375 0 2.916-.026 6.093-.026 9.033 0 .294-.244.535-.538.535h-1.891C45.242 31 45 30.759 45 30.465c0-2.786 0-5.701 0-8.44 0-1.307-2-1.37-2 0v8.44H42.991z"/></svg>',
              },
            ]
          },


                   
          // {
          //   type: 'dropdown',
          //   label: '🌱Community',
          //   position: 'right',
          //   items: [
          //     // {
          //     //   label: '👋 About Us🚀',
          //     //   to: '/About',
          //     // },
          //     {
          //       // label: 'Discord',         
          //       href: 'https://discord.com/invite/BFkPKMsfuZ',
          //       html: `<svg class="discord-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 300" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg> 
          //       <label class="discord-icon-name">Discord</label> `,
          //     },
          //     {

          //       // label: 'You Tube',
          //       href: 'https://www.youtube.com/@Code-Mastermind-HQ',
          //       html: `<svg class="youtube-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 10">
          //           <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
          //         </svg> <label class="youtube-icon-name">You Tube</label>`,
          //     },
          //     // {
          //     //   href: 'https://github.com/Ajay-Dhangar/CodeMastermindHQ/graphs/contributors',
          //     //   html: `<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/Ajay-Dhangar/CodeMastermindHQ?color=2b9348">`
          //     // },
          
          {
            href: 'https://github.com/CodeMastermindHQ/CodeMastermindHQ',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          //   ]
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'React',
                to: '/docs/react/create-react-app/getting-started/',
              },
            ],
          },
          {
            title: 'Courses',
            items: [
              {
                label: 'HTML',
                to: '/courses/html/welcome-html',
              },

              {
                label: 'React',
                to: '/courses/react/intro-2',
              },
            ],
          },
          {
            title: 'Problem Solving',
            items: [
              {
                label: 'Data Structure and Algorithms',
                to: 'support',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/18530900/ajay-dhangar',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/codemastermind2',
              },
              {
                label: 'LinkedIn Group',
                href: 'https://www.linkedin.com/groups/14232119/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                html: `<img src="https://komarev.com/ghpvc/?username=ajay-dhangar&label=Site%20Views&color=0e75b6&style=flat" alt="ajay-dhangar" />`
              },
              {
                html: `<a href="https://github.com/CodeMastermindHQ/CodeMastermindHQ/actions/workflows/github-code-scanning/codeql"><img alt="GitHub contributors" src="https://github.com/CodeMastermindHQ/CodeMastermindHQ/actions/workflows/github-code-scanning/codeql/badge.svg"></a>`
              },

              {
                html: `<a href="https://github.com/Ajay-Dhangar/CodeMastermindHQ/stargazers"><img src="https://img.shields.io/github/stars/Ajay-Dhangar/CodeMastermindHQ" alt="Stars Badge"/></a>`
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CodeMastermindHQ Made with ❤️ by <a href="https://github.com/ajay-dhangar" target="_blank">Ajay-Dhangar</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
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
        languages: ['en'], // language codes
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
        editUrl: 'https://github.com/CodeMastermindHQ/CodeMastermindHQ/edit/documentation/',
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
        editUrl: 'https://github.com/CodeMastermindHQ/CodeMastermindHQ/edit/documentation/',
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
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false, // By default, the plugin is inactive in development
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
