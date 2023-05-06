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
      '/comps/': [
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
            'navigation/nav',
            'navigation/subnav',
            'navigation/navItem',
          ]
        },
        {
          title: 'Form表单',
          collapsable: false,
          children: [
            'form/form',
            'form/input',
            'form/radio',
            'form/checkbox',
            'form/select'
          ]
        },
        {
          title: 'Table表格',
          collapsable: false,
          children: ['table/table']
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