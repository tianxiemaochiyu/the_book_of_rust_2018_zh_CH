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
			"children": [
				'/foreword',
				'/ch00-00-introduction',
				{
					"title": "1. 入门指南",
					"path": "/ch01-00-getting-started.html",
					"children": [
						{
							"title": "1.1. 安装",
							"path": "/ch01-01-installation.html"
						},
						{
							"title": "1.2. Hello, World!",
							"path": "/ch01-02-hello-world.html"
						},
						{
							"title": "1.3. Hello, Cargo!",
							"path": "/ch01-03-hello-cargo.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "2. 猜猜看游戏教程",
					"path": "/ch02-00-guessing-game-tutorial.html"
				},
				{
					"title": "3. 常见编程概念",
					"path": "/ch03-00-common-programming-concepts.html",
					"children": [
						{
							"title": "3.1. 变量与可变性",
							"path": "/ch03-01-variables-and-mutability.html"
						},
						{
							"title": "3.2. 数据类型",
							"path": "/ch03-02-data-types.html"
						},
						{
							"title": "3.3. 函数如何工作",
							"path": "/ch03-03-how-functions-work.html"
						},
						{
							"title": "3.4. 注释",
							"path": "/ch03-04-comments.html"
						},
						{
							"title": "3.5. 控制流",
							"path": "/ch03-05-control-flow.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "4. 认识所有权",
					"path": "/ch04-00-understanding-ownership.html",
					"children": [
						{
							"title": "4.1. 什么是所有权？",
							"path": "/ch04-01-what-is-ownership.html"
						},
						{
							"title": "4.2. 引用与借用",
							"path": "/ch04-02-references-and-borrowing.html"
						},
						{
							"title": "4.3. Slices",
							"path": "/ch04-03-slices.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "5. 使用结构体来组织相关联的数据",
					"path": "/ch05-00-structs.html",
					"children": [
						{
							"title": "5.1. 定义并实例化结构体",
							"path": "/ch05-01-defining-structs.html"
						},
						{
							"title": "5.2. 一个使用结构体的示例程序",
							"path": "/ch05-02-example-structs.html"
						},
						{
							"title": "5.3. 方法语法",
							"path": "/ch05-03-method-syntax.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "6. 枚举与模式匹配",
					"path": "/ch06-00-enums.html",
					"children": [
						{
							"title": "6.1. 定义枚举",
							"path": "/ch06-01-defining-an-enum.html"
						},
						{
							"title": "6.2. match控制流运算符",
							"path": "/ch06-02-match.html"
						},
						{
							"title": "6.3. if let简洁控制流",
							"path": "/ch06-03-if-let.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "7. 使用包、Crate 和模块管理不断增长的项目",
					"path": "/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html",
					"children": [
						{
							"title": "7.1. 包和 crate",
							"path": "/ch07-01-packages-and-crates.html"
						},
						{
							"title": "7.2. 定义模块来控制作用域与私有性",
							"path": "/ch07-02-defining-modules-to-control-scope-and-privacy.html"
						},
						{
							"title": "7.3. 路径用于引用模块树中的项",
							"path": "/ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html"
						},
						{
							"title": "7.4. 使用use关键字将名称引入作用域",
							"path": "/ch07-04-bringing-paths-into-scope-with-the-use-keyword.html"
						},
						{
							"title": "7.5. 将模块分割进不同文件",
							"path": "/ch07-05-separating-modules-into-different-files.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "8. 常见集合",
					"path": "/ch08-00-common-collections.html",
					"children": [
						{
							"title": "8.1. vector",
							"path": "/ch08-01-vectors.html"
						},
						{
							"title": "8.2. 字符串",
							"path": "/ch08-02-strings.html"
						},
						{
							"title": "8.3. 哈希 map",
							"path": "/ch08-03-hash-maps.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "9. 错误处理",
					"path": "/ch09-00-error-handling.html",
					"children": [
						{
							"title": "9.1. panic!与不可恢复的错误",
							"path": "/ch09-01-unrecoverable-errors-with-panic.html"
						},
						{
							"title": "9.2. Result与可恢复的错误",
							"path": "/ch09-02-recoverable-errors-with-result.html"
						},
						{
							"title": "9.3. panic!还是不panic!",
							"path": "/ch09-03-to-panic-or-not-to-panic.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "10. 泛型、trait 与生命周期",
					"path": "/ch10-00-generics.html",
					"children": [
						{
							"title": "10.1. 泛型数据类型",
							"path": "/ch10-01-syntax.html"
						},
						{
							"title": "10.2. trait：定义共享的行为",
							"path": "/ch10-02-traits.html"
						},
						{
							"title": "10.3. 生命周期与引用有效性",
							"path": "/ch10-03-lifetime-syntax.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "11. 测试",
					"path": "/ch11-00-testing.html",
					"children": [
						{
							"title": "11.1. 编写测试",
							"path": "/ch11-01-writing-tests.html"
						},
						{
							"title": "11.2. 运行测试",
							"path": "/ch11-02-running-tests.html"
						},
						{
							"title": "11.3. 测试的组织结构",
							"path": "/ch11-03-test-organization.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "12. 一个 I/O 项目：构建命令行程序",
					"path": "/ch12-00-an-io-project.html",
					"children": [
						{
							"title": "12.1. 接受命令行参数",
							"path": "/ch12-01-accepting-command-line-arguments.html"
						},
						{
							"title": "12.2. 读取文件",
							"path": "/ch12-02-reading-a-file.html"
						},
						{
							"title": "12.3. 重构以改进模块化与错误处理",
							"path": "/ch12-03-improving-error-handling-and-modularity.html"
						},
						{
							"title": "12.4. 采用测试驱动开发完善库的功能",
							"path": "/ch12-04-testing-the-librarys-functionality.html"
						},
						{
							"title": "12.5. 处理环境变量",
							"path": "/ch12-05-working-with-environment-variables.html"
						},
						{
							"title": "12.6. 将错误信息输出到标准错误而不是标准输出",
							"path": "/ch12-06-writing-to-stderr-instead-of-stdout.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "13. Rust 中的函数式语言功能：迭代器与闭包",
					"path": "/ch13-00-functional-features.html",
					"children": [
						{
							"title": "13.1. 闭包：可以捕获其环境的匿名函数",
							"path": "/ch13-01-closures.html"
						},
						{
							"title": "13.2. 使用迭代器处理元素序列",
							"path": "/ch13-02-iterators.html"
						},
						{
							"title": "13.3. 改进之前的 I/O 项目",
							"path": "/ch13-03-improving-our-io-project.html"
						},
						{
							"title": "13.4. 性能比较：循环对迭代器",
							"path": "/ch13-04-performance.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "14. 更多关于 Cargo 和 Crates.io 的内容",
					"path": "/ch14-00-more-about-cargo.html",
					"children": [
						{
							"title": "14.1. 采用发布配置自定义构建",
							"path": "/ch14-01-release-profiles.html"
						},
						{
							"title": "14.2. 将 crate 发布到 Crates.io",
							"path": "/ch14-02-publishing-to-crates-io.html"
						},
						{
							"title": "14.3. Cargo 工作空间",
							"path": "/ch14-03-cargo-workspaces.html"
						},
						{
							"title": "14.4. 使用cargo install从 Crates.io 安装二进制文件",
							"path": "/ch14-04-installing-binaries.html"
						},
						{
							"title": "14.5. Cargo 自定义扩展命令",
							"path": "/ch14-05-extending-cargo.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "15. 智能指针",
					"path": "/ch15-00-smart-pointers.html",
					"children": [
						{
							"title": "15.1. Box<T>指向堆上数据，并且可确定大小",
							"path": "/ch15-01-box.html"
						},
						{
							"title": "15.2. 通过Dereftrait 将智能指针当作常规引用处理",
							"path": "/ch15-02-deref.html"
						},
						{
							"title": "15.3. DropTrait 运行清理代码",
							"path": "/ch15-03-drop.html"
						},
						{
							"title": "15.4. Rc<T>引用计数智能指针",
							"path": "/ch15-04-rc.html"
						},
						{
							"title": "15.5. RefCell<T>与内部可变性模式",
							"path": "/ch15-05-interior-mutability.html"
						},
						{
							"title": "15.6. 引用循环与内存泄漏是安全的",
							"path": "/ch15-06-reference-cycles.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "16. 无畏并发",
					"path": "/ch16-00-concurrency.html",
					"children": [
						{
							"title": "16.1. 线程",
							"path": "/ch16-01-threads.html"
						},
						{
							"title": "16.2. 消息传递",
							"path": "/ch16-02-message-passing.html"
						},
						{
							"title": "16.3. 共享状态",
							"path": "/ch16-03-shared-state.html"
						},
						{
							"title": "16.4. 可扩展的并发：Sync与Send",
							"path": "/ch16-04-extensible-concurrency-sync-and-send.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "17. Rust 的面向对象编程特性",
					"path": "/ch17-00-oop.html",
					"children": [
						{
							"title": "17.1. 面向对象语言的特点",
							"path": "/ch17-01-what-is-oo.html"
						},
						{
							"title": "17.2. 为使用不同类型的值而设计的 trait 对象",
							"path": "/ch17-02-trait-objects.html"
						},
						{
							"title": "17.3. 面向对象设计模式的实现",
							"path": "/ch17-03-oo-design-patterns.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "18. 模式用来匹配值的结构",
					"path": "/ch18-00-patterns.html",
					"children": [
						{
							"title": "18.1. 所有可能会用到模式的位置",
							"path": "/ch18-01-all-the-places-for-patterns.html"
						},
						{
							"title": "18.2. Refutability：何时模式可能会匹配失败",
							"path": "/ch18-02-refutability.html"
						},
						{
							"title": "18.3. 模式的全部语法",
							"path": "/ch18-03-pattern-syntax.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "19. 高级特征",
					"path": "/ch19-00-advanced-features.html",
					"children": [
						{
							"title": "19.1. 不安全的 Rust",
							"path": "/ch19-01-unsafe-rust.html"
						},
						{
							"title": "19.2. 高级 trait",
							"path": "/ch19-03-advanced-traits.html"
						},
						{
							"title": "19.3. 高级类型",
							"path": "/ch19-04-advanced-types.html"
						},
						{
							"title": "19.4. 高级函数与闭包",
							"path": "/ch19-05-advanced-functions-and-closures.html"
						},
						{
							"title": "19.5. 宏",
							"path": "/ch19-06-macros.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "20. 最后的项目: 构建多线程 web server",
					"path": "/ch20-00-final-project-a-web-server.html",
					"children": [
						{
							"title": "20.1. 单线程 web server",
							"path": "/ch20-01-single-threaded.html"
						},
						{
							"title": "20.2. 将单线程 server 变为多线程 server",
							"path": "/ch20-02-multithreaded.html"
						},
						{
							"title": "20.3. 优雅停机与清理",
							"path": "/ch20-03-graceful-shutdown-and-cleanup.html"
						}
					],
					"collapsable": false
				},
				{
					"title": "21. 附录",
					"path": "/appendix-00.html",
					"children": [
						{
							"title": "21.1. A - 关键字",
							"path": "/appendix-01-keywords.html"
						},
						{
							"title": "21.2. B - 运算符与符号",
							"path": "/appendix-02-operators.html"
						},
						{
							"title": "21.3. C - 可派生的 trait",
							"path": "/appendix-03-derivable-traits.html"
						},
						{
							"title": "21.4. D - 实用开发工具",
							"path": "/appendix-04-useful-development-tools.html"
						},
						{
							"title": "21.5. E - 版本",
							"path": "/appendix-05-editions.html"
						},
						{
							"title": "21.6. F - 本书译本",
							"path": "/appendix-06-translation.html"
						},
						{
							"title": "21.7. G - Rust 是如何开发的与 “Nightly Rust”",
							"path": "/appendix-07-nightly-rust.html"
						}
					],
					"collapsable": false
				}
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
