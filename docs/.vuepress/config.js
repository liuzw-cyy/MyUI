module.exports = {
  theme: '',
  title: 'MyUI',
  description: '基于Vue的个人中国风组件库',
  base: '/myui/',
  port: '8080',
  chainWebpack: config => {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['demo-container'],
  themeConfig: {
    sidebarDepth: 1,
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
            'table/table'
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
    }
  },
};