(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{364:function(t,r,s){"use strict";s.r(r);var a=s(42),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch00-00-introduction.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch00-00-introduction.md"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("\ncommit 0aa307c7d79d2cbf83cdf5d47780b2904e9cb03f")])]),t._v(" "),s("blockquote",[s("p",[t._v("注意：本书的版本与出版的 "),s("a",{attrs:{href:"https://nostarch.com/rust",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Rust Programming Language"),s("OutboundLink")],1),t._v("\n和电子版的 "),s("a",{attrs:{href:"https://nostarch.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("No Starch Press"),s("OutboundLink")],1),t._v(" 一致")])]),t._v(" "),s("p",[t._v("欢迎阅读 “Rust 程序设计语言”，一本介绍 Rust 的书。Rust 程序设计语言能帮助你编写更快、更可靠的软件。在编程语言设计中，高层工程学和底层控制往往不能兼得；Rust 则试图挑战这一矛盾。通过权衡强大的技术能力与优秀的开发体验，Rust 允许你控制底层细节（比如内存使用），并免受以往进行此类控制所经受的所有烦恼。")]),t._v(" "),s("h2",{attrs:{id:"谁会使用-rust"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#谁会使用-rust"}},[t._v("#")]),t._v(" 谁会使用 Rust")]),t._v(" "),s("p",[t._v("Rust 因多种原因适用于很多开发者。让我们讨论几个最重要的群体。")]),t._v(" "),s("h3",{attrs:{id:"开发者团队"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发者团队"}},[t._v("#")]),t._v(" 开发者团队")]),t._v(" "),s("p",[t._v("Rust 被证明是可用于大型的、拥有不同层次系统编程知识的开发者团队间协作的高效工具。底层代码中容易出现种种隐晦的 bug，在其他编程语言中，只能通过大量的测试和经验丰富的开发者细心的代码评审来捕获它们。在 Rust 中，编译器充当了守门员的角色，它拒绝编译存在这些难以捕获的 bug 的代码，这其中包括并发 bug。通过与编译器合作，团队将更多的时间聚焦在程序逻辑上，而不是追踪 bug。")]),t._v(" "),s("p",[t._v("Rust 也为系统编程世界带来了现代化的开发工具：")]),t._v(" "),s("ul",[s("li",[t._v("Cargo，内置的依赖管理器和构建工具，它能轻松增加、编译和管理依赖，并使其在 Rust 生态系统中保持一致。")]),t._v(" "),s("li",[t._v("Rustfmt 确保开发者遵循一致的代码风格。")]),t._v(" "),s("li",[t._v("Rust Language Server 为集成开发环境（IDE）提供了强大的代码补全和内联错误信息功能。")])]),t._v(" "),s("p",[t._v("通过使用 Rust 生态系统中的这些和其他工具，开发者可以在编写系统层面代码时保持高生产力。")]),t._v(" "),s("h3",{attrs:{id:"学生"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学生"}},[t._v("#")]),t._v(" 学生")]),t._v(" "),s("p",[t._v("Rust 适用于学生和有兴趣学习系统概念的人。通过 Rust，很多人已经了解了操作系统开发等主题。社区非常欢迎和乐于解答学生们的问题。通过本书的努力，Rust 团队希望系统概念能被更多人了解，特别是编程新手。")]),t._v(" "),s("h3",{attrs:{id:"公司"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公司"}},[t._v("#")]),t._v(" 公司")]),t._v(" "),s("p",[t._v("数以百计的公司，无论规模大小，都在生产中使用Rust来完成各种任务。这些任务包括命令行工具、web 服务、DevOps 工具、嵌入式设备、音视频分析与转码、加密货币（cryptocurrencies）、生物信息学（bioinformatics）、搜索引擎、物联网（internet of things, IOT）程序、机器学习，甚至还包括 Firefox 浏览器的大部分内容。")]),t._v(" "),s("h3",{attrs:{id:"开源开发者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开源开发者"}},[t._v("#")]),t._v(" 开源开发者")]),t._v(" "),s("p",[t._v("Rust 适用于希望构建 Rust 编程语言、社区、开发工具和库的开发者。我们很乐意您为 Rust 语言做贡献。")]),t._v(" "),s("h3",{attrs:{id:"重视速度和稳定性的开发者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重视速度和稳定性的开发者"}},[t._v("#")]),t._v(" 重视速度和稳定性的开发者")]),t._v(" "),s("p",[t._v("Rust 适用于追求编程语言的速度与稳定性的开发者。所谓速度，是指你用 Rust 开发出的程序运行速度，以及 Rust 提供的程序开发速度。Rust 的编译器检查确保了增加功能和重构代码时的稳定性。这与缺少这些检查的语言形成鲜明对比，开发者通常害怕修改那些脆弱的遗留代码。力求零开销抽象（zero-cost abstractions），把高级的特性编译成底层的代码，这样写起来很快，运行起来也很快，Rust 致力于使安全的代码也同样快速。")]),t._v(" "),s("p",[t._v("Rust 语言也希望能支持很多其他用户，这里提及的只是最大的利益相关者。总的来讲，Rust 最重要的目标是消除数十年来程序员不得不做的权衡：安全 "),s("strong",[t._v("与")]),t._v(" 生产力，速度 "),s("strong",[t._v("与")]),t._v(" 人机交互的顺畅度(ergonomics)。请尝试 Rust，看看这个选择是否适合你。")]),t._v(" "),s("h2",{attrs:{id:"本书是写给谁的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本书是写给谁的"}},[t._v("#")]),t._v(" 本书是写给谁的")]),t._v(" "),s("p",[t._v("本书假设你已经使用其他编程语言编写过代码，但并不假设你使用的是何种语言。我们尝试使这些参考资料能广泛的适用于来自很多不同编程背景的开发者。我们不会花费很多时间讨论编程 "),s("strong",[t._v("是")]),t._v(" 什么或者如何理解它。如果编程对于你来说是完全陌生的，你最好先阅读专门介绍编程的书籍。")]),t._v(" "),s("h2",{attrs:{id:"如何阅读本书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何阅读本书"}},[t._v("#")]),t._v(" 如何阅读本书")]),t._v(" "),s("p",[t._v("总体来说，本书假设你会从头到尾顺序阅读。稍后的章节建立在之前章节概念的基础上，同时之前的章节可能不会深入讨论某个主题的细节；通常稍后的章节会重新讨论这些主题。")]),t._v(" "),s("p",[t._v("你会在本书中发现两类章节：概念章节和项目章节。在概念章节中，我们学习 Rust 的某个方面。在项目章节中，我们应用目前所学的知识一同构建小的程序。第二、十二和二十章是项目章节；其余都是概念章节。")]),t._v(" "),s("p",[t._v("第一章介绍如何安装 Rust，如何编写 “Hello, world!” 程序，以及如何使用 Rust 的包管理器和构建工具 Cargo。第二章是 Rust 语言的实战介绍。我们会站在较高的层次介绍一些概念，而将详细的介绍放在稍后的章节中。如果你希望立刻就动手实践一下，第二章正好适合你。开始阅读时，你甚至可能希望略过第三章，它介绍了 Rust 中类似其他编程语言中的功能，并直接阅读第四章学习 Rust 的所有权系统。然而，如果你是特别重视细节的学习者，并倾向于在继续之前学习每一个细节，你可能希望略过第二章并直接阅读第三章，并在想要构建项目来实践这些细节时再回来阅读第二章。")]),t._v(" "),s("p",[t._v("第五章讨论结构体和方法，第六章介绍枚举、"),s("code",[t._v("match")]),t._v(" 表达式和 "),s("code",[t._v("if let")]),t._v(" 控制流结构。在 Rust 中，你将使用结构体和枚举创建自定义类型。")]),t._v(" "),s("p",[t._v("第七章你会学习 Rust 的模块系统和私有性规则来组织代码和公有应用程序接口（Application Programming Interface, API）。第八章讨论了一些标准库提供的常见集合数据结构，比如 可变长数组(vector)、字符串和哈希 map。第九章探索了 Rust 的错误处理哲学和技术。")]),t._v(" "),s("p",[t._v("第十章深入介绍泛型、trait 和生命周期，他们提供了定义出适用于多种类型的代码的能力。第十一章全部关于测试，即使 Rust 有安全保证，也需要测试确保程序逻辑正确。第十二章，我们构建了属于自己的在文件中搜索文本的命令行工具 "),s("code",[t._v("grep")]),t._v(" 的子集功能实现。为此会利用之前章节讨论的很多概念。")]),t._v(" "),s("p",[t._v("第十三章探索了闭包和迭代器：Rust 中来自函数式编程语言的功能。第十四章会更深层次的理解 Cargo 并讨论向他人分享库的最佳实践。第十五章讨论标准库提供的智能指针以及启用这些功能的 trait。")]),t._v(" "),s("p",[t._v("第十六章会学习不同的并发编程模型，并讨论 Rust 如何助你无畏的编写多线程程序。第十七章着眼于比较 Rust 风格与你可能熟悉的面向对象编程原则。")]),t._v(" "),s("p",[t._v("第十八章是关于模式和模式匹配的参考章节，它是在Rust程序中表达思想的有效方式。第十九章是一个高级主题大杂烩，包括 unsafe Rust、宏和更多关于生命周期、 trait、类型、函数和闭包的内容。")]),t._v(" "),s("p",[t._v("第二十章将会完成一个项目，我们会实现一个底层的、多线程的 web server！")]),t._v(" "),s("p",[t._v("最后是一些附录，包含了一些关于语言的参考风格格式的实用信息。附录 A 介绍了 Rust 的关键字。附录 B 介绍 Rust 的运算符和符号。附录 C 介绍标准库提供的派生 trait。附录 D 涉及了一些有用的开发工具，附录 E 介绍了 Rust 的不同版本。")]),t._v(" "),s("p",[t._v("怎样阅读本书都不会有任何问题：如果你希望略过一些内容，请继续！如果你发现疑惑可能会再跳回之前的章节。请随意阅读。")]),t._v(" "),s("p",[s("span",{attrs:{id:"ferris"}})]),t._v(" "),s("p",[t._v("学习 Rust 的过程中一个重要的部分是学习如何阅读编译器提供的错误信息：它们会指导你编写出能工作的代码。为此，我们会提供很多不能编译的示例代码，以及各个情况下编译器会展示的错误信息。请注意如果随便输入并运行随机的示例代码，它们可能无法编译！请确保阅读任何你尝试运行的示例周围的内容，检视他们是否有意写错。Ferris 也会帮助你区别那些有意无法工作的代码：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Ferris")]),t._v(" "),s("th",[t._v("意义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("img",{staticClass:"ferris-explain",attrs:{src:"img/ferris/does_not_compile.svg"}})]),t._v(" "),s("td",[t._v("这些代码不能编译！")])]),t._v(" "),s("tr",[s("td",[s("img",{staticClass:"ferris-explain",attrs:{src:"img/ferris/panics.svg"}})]),t._v(" "),s("td",[t._v("这些代码会 panic！")])]),t._v(" "),s("tr",[s("td",[s("img",{staticClass:"ferris-explain",attrs:{src:"img/ferris/unsafe.svg"}})]),t._v(" "),s("td",[t._v("这些代码块包含不安全（unsafe）代码。")])]),t._v(" "),s("tr",[s("td",[s("img",{staticClass:"ferris-explain",attrs:{src:"img/ferris/not_desired_behavior.svg"}})]),t._v(" "),s("td",[t._v("这些代码不会产生期望的行为。")])])])]),t._v(" "),s("p",[t._v("在大部分情况，我们会指引你将任何不能编译的代码纠正为正确版本。")]),t._v(" "),s("h2",{attrs:{id:"源代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源代码"}},[t._v("#")]),t._v(" 源代码")]),t._v(" "),s("p",[t._v("生成本书的源码可以在 "),s("a",{attrs:{href:"https://github.com/rust-lang/book/tree/master/src",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1),t._v(" 上找到。")]),t._v(" "),s("blockquote",[s("p",[t._v("译者注：本译本的 "),s("a",{attrs:{href:"https://github.com/KaiserY/trpl-zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 仓库"),s("OutboundLink")],1),t._v("，欢迎 Issue 和 PR 😃")])])])}),[],!1,null,null,null);r.default=e.exports}}]);