module.exports = {
  base: '/studyblog/',
  // 页面标题
  title: '乱舞春秋·Will',
  // 网页描述
  description: 'Welcome 2 Will\'s World^_^',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/icon2.jpg' }]
  ],
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  themeConfig: {
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 所有页面自动生成侧边栏
    sidebar: {
      '/research/OMR乐谱识别/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'moonlight'   /* /foo/two.html */
      ]
      },
    // 仓库地址
    repo: 'https://github.com/DaveGeneral/studyblog/',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: '编辑此页',
    // 导航
    nav: [
      { text: '前端面试之道',link: '/tools4efficiency/'},
      { text: 'JavaScript书籍', items: [
          { text: '你不知道的JavaScript(上)', link: '/books/你不知道的javascript上'},
          { text: '你不知道的JavaScript(中)', link: '/books/你不知道的javascript中'},
          { text: '你不知道的JavaScript(下)', link: '/books/你不知道的javascript下'}
        ]
      },
      { text: '数据结构和算法', link: '/algorithm/'},
      { text: '效率提升实用工具箱', items: [
          { text: '各种命令-82原则', link: '/tools4efficiency/cmd-in-common-use'},
          { text: '配置', link: '/tools4efficiency/配置/'},
          { text: '你不知道的JavaScript(下)', link: '/books/你不知道的javascript下'}
        ]
    },
      { text: '科研',items: [
          { text: 'OMR乐谱识别', items: [
          { text: 'moonlight', link: '/research/OMR乐谱识别/moonlight/'},
        ]},
          { text: '你不知道的JavaScript(中)', link: '/books/你不知道的javascript中'},
          { text: '你不知道的JavaScript(下)', link: '/books/你不知道的javascript下'}
        ]},
      { text: 'VuePress',link: '/vuepress/'},
      { text: '基础配置功能',link: '/common/'}
  ]},
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../images/vuepress',
        '@vue': '../images/vue'
      }
    }
  }
}

function getResearchSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}