(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{409:function(t,r,e){"use strict";e.r(r);var o=e(42),v=Object(o.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"一个-i-o-项目：构建一个命令行程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个-i-o-项目：构建一个命令行程序"}},[t._v("#")]),t._v(" 一个 I/O 项目：构建一个命令行程序")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch12-00-an-io-project.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch12-00-an-io-project.md"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("\ncommit db919bc6bb9071566e9c4f05053672133eaac33e")])]),t._v(" "),e("p",[t._v("本章既是一个目前所学的很多技能的概括，也是一个更多标准库功能的探索。我们将构建一个与文件和命令行输入/输出交互的命令行工具来练习现在一些你已经掌握的 Rust 技能。")]),t._v(" "),e("p",[t._v("Rust 的运行速度、安全性、单二进制文件输出和跨平台支持使其成为创建命令行程序的绝佳选择，所以我们的项目将创建一个我们自己版本的经典命令行工具："),e("code",[t._v("grep")]),t._v("。grep 是 “"),e("strong",[t._v("G")]),t._v("lobally search a "),e("strong",[t._v("R")]),t._v("egular "),e("strong",[t._v("E")]),t._v("xpression and "),e("strong",[t._v("P")]),t._v("rint.” 的首字母缩写。"),e("code",[t._v("grep")]),t._v(" 最简单的使用场景是在特定文件中搜索指定字符串。为此，"),e("code",[t._v("grep")]),t._v(" 获取一个文件名和一个字符串作为参数，接着读取文件并找到其中包含字符串参数的行，然后打印出这些行。")]),t._v(" "),e("p",[t._v("在这个过程中，我们会展示如何让我们的命令行工具利用很多命令行工具中用到的终端功能。读取环境变量来使得用户可以配置工具的行为。打印到标准错误控制流（"),e("code",[t._v("stderr")]),t._v("） 而不是标准输出（"),e("code",[t._v("stdout")]),t._v("），例如这样用户可以选择将成功输出重定向到文件中的同时仍然在屏幕上显示错误信息。")]),t._v(" "),e("p",[t._v("一位 Rust 社区的成员，Andrew Gallant，已经创建了一个功能完整且非常快速的 "),e("code",[t._v("grep")]),t._v(" 版本，叫做 "),e("code",[t._v("ripgrep")]),t._v("。相比之下，我们的 "),e("code",[t._v("grep")]),t._v(" 版本将非常简单，本章将教会你一些帮助理解像 "),e("code",[t._v("ripgrep")]),t._v(" 这样真实项目的背景知识。")]),t._v(" "),e("p",[t._v("我们的 "),e("code",[t._v("grep")]),t._v(" 项目将会结合之前所学的一些内容：")]),t._v(" "),e("ul",[e("li",[t._v("代码组织（使用 "),e("RouterLink",{attrs:{to:"/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html"}},[t._v("第七章")]),t._v(" 学习的模块）")],1),t._v(" "),e("li",[t._v("vector 和字符串（"),e("RouterLink",{attrs:{to:"/ch08-00-common-collections.html"}},[t._v("第八章")]),t._v("，集合）")],1),t._v(" "),e("li",[t._v("错误处理（"),e("RouterLink",{attrs:{to:"/ch09-00-error-handling.html"}},[t._v("第九章")]),t._v("）")],1),t._v(" "),e("li",[t._v("合理的使用 trait 和生命周期（"),e("RouterLink",{attrs:{to:"/ch10-00-generics.html"}},[t._v("第十章")]),t._v("）")],1),t._v(" "),e("li",[t._v("测试（"),e("RouterLink",{attrs:{to:"/ch11-00-testing.html"}},[t._v("第十一章")]),t._v("）")],1)]),t._v(" "),e("p",[t._v("另外还会简要的讲到闭包、迭代器和 trait 对象，他们分别会在 "),e("RouterLink",{attrs:{to:"/ch13-00-functional-features.html"}},[t._v("第十三章")]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/ch17-00-oop.html"}},[t._v("第十七章")]),t._v(" 中详细介绍。")],1)])}),[],!1,null,null,null);r.default=v.exports}}]);