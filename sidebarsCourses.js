module.exports = {
  Courses: [
    {
      type: 'link',
      label: 'Collections',
      href: '/cardHolder',
    },
    // {
    //   type: 'link',
    //   label: 'Code Editor',
    //   href: '/CodeEditor',
    // },
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
        // {
        //   type: 'category',
        //   label: 'React Complete Guide',
        //   link: {
        //     type: 'generated-index',
        //     slug: '/react-complete-guide',
        //   },
        //   collapsible: true,
        //   collapsed: true,
        //   items: [
        //     {
        //       type: 'autogenerated',
        //       dirName: 'react-complete-guide',
        //     },
        //   ],
        // },
        // {
        //   type: 'category',
        //   label: 'Cloud Service Engineer',
        //   link: {
        //     type: 'doc',
        //     id: 'cloud-service-engineer/README',
        //   },
        //   collapsible: true,
        //   collapsed: true,
        //   items: [
        //     {
        //       type: 'category',
        //       label: 'Virtual Machines',
        //       link: {
        //         type: 'generated-index',
        //         slug: '/cloud-service-engineer/virtual-machines',
        //       },
        //       items: [
        //         {
        //           type: 'category',
        //           label: 'Intro',
        //           link: {
        //             type: 'generated-index',
        //             slug: '/cloud-service-engineer/virtual-machines/intro',
        //           },
        //           items: [
        //             {
        //               type: 'autogenerated',
        //               dirName: 'cloud-service-engineer/virtual-machines/intro',
        //             },
        //           ],
        //         },
        //       ],
        //     },
        //     {
        //       type: 'category',
        //       label: 'Data Storage and Analysis',
        //       link: {
        //         type: 'generated-index',
        //         slug: '/cloud-service-engineer/data-storage-and-analysis',
        //       },
        //       items: [
        //         {
        //           type: 'category',
        //           label: 'Controlled Databases',
        //           link: {
        //             type: 'generated-index',
        //             slug: '/cloud-service-engineer/data-storage-and-analysis/controlled-databases',
        //           },
        //           items: [
        //             {
        //               type: 'autogenerated',
        //               dirName:
        //                 'cloud-service-engineer/data-storage-and-analysis/controlled-databases',
        //             },
        //           ],
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    },
  ],
};
