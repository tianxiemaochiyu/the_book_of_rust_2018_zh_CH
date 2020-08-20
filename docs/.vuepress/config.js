// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    smoothScroll: true,
    codeTheme: 'tomorrow',
    sidebar: [
      {
        title: 'Rust 程序设计语言',
        path: '/title-page',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/foreword',
          '/ch00-00-introduction',
          {
            title: '入门指南',
            path: '/ch01-00-getting-started',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/ch01-01-installation',
              '/ch01-02-hello-world',
              '/ch01-03-hello-cargo.md',
              '/ch02-00-guessing-game-tutorial',
              {
                title: '常见编程概念',
                path: '/ch03-00-common-programming-concepts',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch03-01-variables-and-mutability',
                  '/ch03-02-data-types',
                  '/ch03-03-how-functions-work',
                  '/ch03-04-comments',
                  '/ch03-05-control-flow'
                ]
              },
              {
                title: '认识所有权',
                path: '/ch04-00-understanding-ownership',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch04-01-what-is-ownership',
                  '/ch04-02-references-and-borrowing',
                  '/ch04-03-slices.md',
                ]
              },
              {
                title: '使用结构体来组织相关联的数据',
                path: '/ch05-00-structs',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch05-01-defining-structs',
                  '/ch05-02-example-structs',
                  '/ch05-03-method-syntax',
                ]
              },
              {
                title: '枚举与模式匹配',
                path: '/ch06-00-enums',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch06-01-defining-an-enum',
                  '/ch06-02-match',
                  '/ch06-03-if-let',
                ]
              },
            ]
          },
          {
            title: '基本 Rust 技能',
            path: '/ch07-00-managing-growing-projects-with-packages-crates-and-modules',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/ch07-01-packages-and-crates',
              '/ch07-02-defining-modules-to-control-scope-and-privacy',
              '/ch07-03-paths-for-referring-to-an-item-in-the-module-tree',
              '/ch07-04-bringing-paths-into-scope-with-the-use-keyword',
              '/ch07-05-separating-modules-into-different-files',
              {
                title: '常见集合',
                path: '/ch08-00-common-collections',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch08-01-vectors',
                  '/ch08-02-strings',
                  '/ch08-03-hash-maps',
                ]
              },
              {
                title: '错误处理',
                path: '/ch09-00-error-handling',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch09-01-unrecoverable-errors-with-panic',
                  '/ch09-02-recoverable-errors-with-result',
                  '/ch09-03-to-panic-or-not-to-panic',
                ]
              },
              {
                title: '泛型、trait 与生命周期',
                path: '/ch10-00-generics',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch10-01-syntax',
                  '/ch10-02-traits',
                  '/ch10-03-lifetime-syntax',
                ]
              },
              {
                title: '测试',
                path: '/ch11-00-testing',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch11-01-writing-tests',
                  '/ch11-02-running-tests',
                  '/ch11-03-test-organization',
                ]
              },
              {
                title: '一个 I/O 项目：构建命令行程序',
                path: '/ch12-00-an-io-project',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch12-01-accepting-command-line-arguments',
                  '/ch12-02-reading-a-file',
                  '/ch12-03-improving-error-handling-and-modularity',
                  '/ch12-04-testing-the-librarys-functionality',
                  '/ch12-05-working-with-environment-variables',
                  '/ch12-04-testing-the-librarys-functionality',
                  '/ch12-06-writing-to-stderr-instead-of-stdout'
                ]
              },
            ]
          },
          {
            title: 'Rust 编程思想',
            path: '/ch13-00-functional-features',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              {
                title: 'Rust 中的函数式语言功能：迭代器与闭包',
                path: '/ch13-00-functional-features',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch13-01-closures',
                  '/ch13-02-iterators',
                  '/ch13-03-improving-our-io-project',
                  '/ch13-04-performance',
                ]
              },
              {
                title: '更多关于 Cargo 和 Crates.io 的内容',
                path: '/ch14-00-more-about-cargo',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch14-01-release-profiles',
                  '/ch14-02-publishing-to-crates-io',
                  '/ch14-03-cargo-workspaces',
                  '/ch14-04-installing-binaries',
                  '/ch14-05-extending-cargo',
                ]
              },
              {
                title: '智能指针',
                path: '/ch15-00-smart-pointers',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch15-01-box.md',
                  '/ch15-02-deref',
                  '/ch15-03-drop',
                  '/ch15-04-rc',
                  '/ch15-05-interior-mutability',
                ]
              },
              {
                title: '无畏并发',
                path: '/ch16-00-concurrency',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch16-01-threads',
                  '/ch16-02-message-passing',
                  '/ch16-03-shared-state',
                  '/ch16-04-extensible-concurrency-sync-and-send'
                ]
              },
              {
                title: 'Rust 的面向对象编程特性',
                path: '/ch17-00-oop',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch17-01-what-is-oo',
                  '/ch17-02-trait-objects',
                  '/ch17-03-oo-design-patterns'
                ]
              },
            ]
          },
          {
            title: '高级主题',
            path: '/ch18-00-patterns',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              {
                title: '模式用来匹配值的结构',
                path: '/ch18-00-patterns',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch18-01-all-the-places-for-patterns',
                  '/ch18-02-refutability.md',
                  '/ch18-03-pattern-syntax',
                ]
              },
              {
                title: '高级特征',
                path: '/ch19-00-advanced-features',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch19-01-unsafe-rust',
                  '/ch19-03-advanced-traits',
                  '/ch19-04-advanced-types',
                  '/ch19-05-advanced-functions-and-closures',
                  '/ch19-06-macros',
                ]
              },
              {
                title: '最后的项目: 构建多线程 web server',
                path: '/ch20-00-final-project-a-web-server',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/ch20-01-single-threaded',
                  '/ch20-02-multithreaded',
                  '/ch20-03-graceful-shutdown-and-cleanup'
                ]
              },
              {
                title: '附录',
                path: '/appendix-00',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/appendix-01-keywords',
                  '/appendix-02-operators',
                  '/appendix-03-derivable-traits',
                  '/appendix-04-useful-development-tools',
                  '/appendix-05-editions',
                  '/appendix-06-translation',
                  '/appendix-07-nightly-rust',
                ]
              },
            ]
          },
        ]
      }
    ],
    head: [
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    nav: [
      { text: '回首页', link: '/' },
    ]
  }
};
