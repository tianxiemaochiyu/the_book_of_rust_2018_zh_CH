(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{388:function(t,e,r){"use strict";r.r(e);var a=r(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"使用包、crate和模块管理不断增长的项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用包、crate和模块管理不断增长的项目"}},[t._v("#")]),t._v(" 使用包、Crate和模块管理不断增长的项目")]),t._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch07-00-managing-growing-projects-with-packages-crates-and-modules.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch07-00-managing-growing-projects-with-packages-crates-and-modules.md"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("\ncommit 879fef2345bf32751a83a9e779e0cb84e79b6d3d")])]),t._v(" "),r("p",[t._v("当你编写大型程序时，组织你的代码显得尤为重要，因为你想在脑海中通晓整个程序，那几乎是不可能完成的。通过对相关功能进行分组和划分不同功能的代码，你可以清楚在哪里可以找到实现了特定功能的代码，以及在哪里可以改变一个功能的工作方式。")]),t._v(" "),r("p",[t._v("到目前为止，我们编写的程序都在一个文件的一个模块中。伴随着项目的增长，你可以通过将代码分解为多个模块和多个文件来组织代码。一个包可以包含多个二进制 crate 项和一个可选的 crate 库。伴随着包的增长，你可以将包中的部分代码提取出来，做成独立的 crate，这些 crate 则作为外部依赖项。本章将会涵盖所有这些概念。对于一个由一系列相互关联的包组合而成的超大型项目，Cargo 提供了 “工作空间” 这一功能，我们将在第十四章的 “"),r("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch14-03-cargo-workspaces.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cargo Workspaces"),r("OutboundLink")],1),t._v("” 对此进行讲解。")]),t._v(" "),r("p",[t._v("除了对功能进行分组以外，封装实现细节可以使你更高级地重用代码：你实现了一个操作后，其他的代码可以通过该代码的公共接口来进行调用，而不需要知道它是如何实现的。你在编写代码时可以定义哪些部分是其他代码可以使用的公共部分，以及哪些部分是你有权更改实现细节的私有部分。这是另一种减少你在脑海中记住项目内容数量的方法。")]),t._v(" "),r("p",[t._v("这里有一个需要说明的概念 “作用域（scope）”：代码所在的嵌套上下文有一组定义为 “in scope” 的名称。当阅读、编写和编译代码时，程序员和编译器需要知道特定位置的特定名称是否引用了变量、函数、结构体、枚举、模块、常量或者其他有意义的项。你可以创建作用域，以及改变哪些名称在作用域内还是作用域外。同一个作用域内不能拥有两个相同名称的项；可以使用一些工具来解决名称冲突。")]),t._v(" "),r("p",[t._v("Rust 有许多功能可以让你管理代码的组织，包括哪些内容可以被公开，哪些内容作为私有部分，以及程序每个作用域中的名字。这些功能。这有时被称为 “模块系统（the module system）”，包括：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("包")]),t._v("（"),r("em",[t._v("Packages")]),t._v("）： Cargo 的一个功能，它允许你构建、测试和分享 crate。")]),t._v(" "),r("li",[r("strong",[t._v("Crates")]),t._v(" ：一个模块的树形结构，它形成了库或二进制项目。")]),t._v(" "),r("li",[r("strong",[t._v("模块")]),t._v("（"),r("em",[t._v("Modules")]),t._v("）和 "),r("strong",[t._v("use")]),t._v("： 允许你控制作用域和路径的私有性。")]),t._v(" "),r("li",[r("strong",[t._v("路径")]),t._v("（"),r("em",[t._v("path")]),t._v("）：一个命名例如结构体、函数或模块等项的方式")])]),t._v(" "),r("p",[t._v("本章将会涵盖所有这些概念，讨论它们如何交互，并说明如何使用它们来管理作用域。到最后，你会对模块系统有深入的了解，并且能够像专业人士一样使用作用域！")])])}),[],!1,null,null,null);e.default=s.exports}}]);