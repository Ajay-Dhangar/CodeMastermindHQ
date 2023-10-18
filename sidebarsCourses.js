module.exports = {
  Courses: [
    {
      type: 'link',
      label: 'Projects',
      href: '/cardHolder',
    },
    {
      type: 'link',
      label: 'Collections',
      href: '/collections',
    },
    {
      type: 'link',
      label: 'myComponents',
      href: '/myComponents',
    },
    {
      type: 'link',
      label: 'Live Playground',
      href: '/LiveCodeEditor',
    },
    {
      type: 'category',
      label: 'Courses',
      link: {
        type: 'doc',
        id: 'all-courses',
      },
      collapsible: true,
      collapsed: true,
      items: [

        {
          type: 'category',
          label: '🌐 HTML',
          link: {
            type: 'doc',
            id: 'html/welcome-html',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'html',
            },
          ],
        },

        {
          type: 'category',
          label: '🎨 CSS',
          link: {
            type: 'doc',
            id: 'css/welcome-css',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'css',
            },
          ],
        },

        {
          type: 'category',
          label: '🔮 JavaScript',
          link: {
            type: 'doc',
            id: 'javascript/welcome-js',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'javascript',
            },
          ],
        },

        {
          type: 'category',
          label: '⚛️ React',
          link: {
            type: 'doc',
            id: 'react/welcome-react',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'react',
            },
          ],
        },

        {
          type: 'category',
          label: '🌠 Node Js',
          link: {
            type: 'doc',
            id: 'node/welcome-node',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'node',
            },
          ],
        },

        {
          type: 'category',
          label: '🕵️‍♂️ Ethical Hacking',
          link: {
            type: 'doc',
            id: 'ethical-hacking/eh-wel',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'ethical-hacking',
            },
          ],
        },

        {
          type: 'category',
          label: '🧠 DSA Course',
          link: {
            type: 'doc',
            id: 'dsa/welcome-dsa',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'dsa',
            },
          ],
        },       
      ],
    },
  ],
};
