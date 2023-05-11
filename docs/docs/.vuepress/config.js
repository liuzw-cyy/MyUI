module.exports = {
  title: '组件库文档',
  base: '/MyUI/',
  description: '基于Vue2.x的个人中国风组件库',
  port: 8080,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    'demo-container'
  ],
  themeConfig: {
    logo: '/images/logo.jpg',
    sidebarDepth: 1,
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/introduction'
      },
      {
        text: '组件',
        link: '/components/basic/button'
      }
    ],
    sidebar: {
      '/components/': [
        {
          title: 'Basic基础组件',
          collapsable: false,
          children: [
            'basic/button',
          ]
        },
        {
          title: 'Navigation导航',
          collapsable: false,
          children: [

          ]
        },
        {
          title: 'Form表单组件',
          collapsable: false,
          children: [

          ]
        },
        {
          title: 'Table表格组件',
          collapsable: false,
          children: [

          ]
        }
      ],
      '/guide/': [
        {
          title: '开发指南',
          collapsable: false,
          children: [
            'introduction',
            'guide',
          ]
        },
      ]
    },
    repo: 'https://github.com/liuzw-cyy/MyUI',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'Github',
  },
};