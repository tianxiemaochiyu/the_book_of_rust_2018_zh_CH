(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{547:function(t,e,a){"use strict";a.r(e);var s=a(4),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"接受命令行参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接受命令行参数"}},[t._v("#")]),t._v(" 接受命令行参数")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch12-01-accepting-command-line-arguments.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch12-01-accepting-command-line-arguments.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit c084bdd9ee328e7e774df19882ccc139532e53d8")])]),t._v(" "),a("p",[t._v("一如既往使用 "),a("code",[t._v("cargo new")]),t._v(" 新建一个项目，我们称之为 "),a("code",[t._v("minigrep")]),t._v(" 以便与可能已经安装在系统上的 "),a("code",[t._v("grep")]),t._v(" 工具相区别：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cargo new minigrep\n     Created binary (application) `minigrep` project\n$ cd minigrep\n")])])]),a("p",[t._v("第一个任务是让 "),a("code",[t._v("minigrep")]),t._v(" 能够接受两个命令行参数：文件名和要搜索的字符串。也就是说我们希望能够使用 "),a("code",[t._v("cargo run")]),t._v("、要搜索的字符串和被搜索的文件的路径来运行程序，像这样：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cargo run searchstring example-filename.txt\n")])])]),a("p",[t._v("现在 "),a("code",[t._v("cargo new")]),t._v(" 生成的程序忽略任何传递给它的参数。"),a("a",{attrs:{href:"https://crates.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crates.io"),a("OutboundLink")],1),t._v(" 上有一些现成的库可以帮助我们接受命令行参数，不过我们正在学习这些内容，让我们自己来实现一个。")]),t._v(" "),a("h3",{attrs:{id:"读取参数值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取参数值"}},[t._v("#")]),t._v(" 读取参数值")]),t._v(" "),a("p",[t._v("为了确保 "),a("code",[t._v("minigrep")]),t._v(" 能够获取传递给它的命令行参数的值，我们需要一个 Rust 标准库提供的函数，也就是 "),a("code",[t._v("std::env::args")]),t._v("。这个函数返回一个传递给程序的命令行参数的 "),a("strong",[t._v("迭代器")]),t._v("（"),a("em",[t._v("iterator")]),t._v("）。我们会在 "),a("RouterLink",{attrs:{to:"/ch13-00-functional-features.html"}},[t._v("第十三章")]),t._v(" 全面的介绍它们。但是现在只需理解迭代器的两个细节：迭代器生成一系列的值，可以在迭代器上调用 "),a("code",[t._v("collect")]),t._v(" 方法将其转换为一个集合，比如包含所有迭代器产生元素的 vector。")],1),t._v(" "),a("p",[t._v("使用示例 12-1 中的代码来读取任何传递给 "),a("code",[t._v("minigrep")]),t._v(" 的命令行参数并将其收集到一个 vector 中。")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("collect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{:?}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 12-1：将命令行参数收集到一个 vector 中并打印出来")])]),t._v(" "),a("p",[t._v("首先使用 "),a("code",[t._v("use")]),t._v(" 语句来将 "),a("code",[t._v("std::env")]),t._v(" 模块引入作用域以便可以使用它的 "),a("code",[t._v("args")]),t._v(" 函数。注意 "),a("code",[t._v("std::env::args")]),t._v(" 函数被嵌套进了两层模块中。正如 "),a("RouterLink",{attrs:{to:"/ch07-04-bringing-paths-into-scope-with-the-use-keyword.html#creating-idiomatic-use-paths"}},[t._v("第七章")]),t._v(" 讲到的，当所需函数嵌套了多于一层模块时，通常将父模块引入作用域，而不是其自身。这便于我们利用 "),a("code",[t._v("std::env")]),t._v(" 中的其他函数。这比增加了 "),a("code",[t._v("use std::env::args;")]),t._v(" 后仅仅使用 "),a("code",[t._v("args")]),t._v(" 调用函数要更明确一些，因为 "),a("code",[t._v("args")]),t._v(" 容易被错认成一个定义于当前模块的函数。")],1),t._v(" "),a("blockquote",[a("h3",{attrs:{id:"args-函数和无效的-unicode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-函数和无效的-unicode"}},[t._v("#")]),t._v(" "),a("code",[t._v("args")]),t._v(" 函数和无效的 Unicode")]),t._v(" "),a("p",[t._v("注意 "),a("code",[t._v("std::env::args")]),t._v(" 在其任何参数包含无效 Unicode 字符时会 panic。如果你需要接受包含无效 Unicode 字符的参数，使用 "),a("code",[t._v("std::env::args_os")]),t._v(" 代替。这个函数返回 "),a("code",[t._v("OsString")]),t._v(" 值而不是 "),a("code",[t._v("String")]),t._v(" 值。这里出于简单考虑使用了 "),a("code",[t._v("std::env::args")]),t._v("，因为 "),a("code",[t._v("OsString")]),t._v(" 值每个平台都不一样而且比 "),a("code",[t._v("String")]),t._v(" 值处理起来更为复杂。")])]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("main")]),t._v(" 函数的第一行，我们调用了 "),a("code",[t._v("env::args")]),t._v("，并立即使用 "),a("code",[t._v("collect")]),t._v(" 来创建了一个包含迭代器所有值的 vector。"),a("code",[t._v("collect")]),t._v(" 可以被用来创建很多类型的集合，所以这里显式注明 "),a("code",[t._v("args")]),t._v(" 的类型来指定我们需要一个字符串 vector。虽然在 Rust 中我们很少会需要注明类型，然而 "),a("code",[t._v("collect")]),t._v(" 是一个经常需要注明类型的函数，因为 Rust 不能推断出你想要什么类型的集合。")]),t._v(" "),a("p",[t._v("最后，我们使用调试格式 "),a("code",[t._v(":?")]),t._v(" 打印出 vector。让我们尝试分别用两种方式（不包含参数和包含参数）运行代码：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ cargo run\n--snip--\n["target/debug/minigrep"]\n\n$ cargo run needle haystack\n--snip--\n["target/debug/minigrep", "needle", "haystack"]\n')])])]),a("p",[t._v("注意 vector 的第一个值是 "),a("code",[t._v('"target/debug/minigrep"')]),t._v("，它是我们二进制文件的名称。这与 C 中的参数列表的行为相匹配，让程序使用在执行时调用它们的名称。如果要在消息中打印它或者根据用于调用程序的命令行别名更改程序的行为，通常可以方便地访问程序名称，不过考虑到本章的目的，我们将忽略它并只保存所需的两个参数。")]),t._v(" "),a("h3",{attrs:{id:"将参数值保存进变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将参数值保存进变量"}},[t._v("#")]),t._v(" 将参数值保存进变量")]),t._v(" "),a("p",[t._v("打印出参数 vector 中的值展示了程序可以访问指定为命令行参数的值。现在需要将这两个参数的值保存进变量这样就可以在程序的余下部分使用这些值了。让我们如示例 12-2 这样做：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,should_panic extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('use std::env;\n\nfn main() {\n    let args: Vec<String> = env::args().collect();\n\n    let query = &args[1];\n    let filename = &args[2];\n\n    println!("Searching for {}", query);\n    println!("In file {}", filename);\n}\n')])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 12-2：创建变量来存放查询参数和文件名参数")])]),t._v(" "),a("p",[t._v("正如之前打印出 vector 时所所看到的，程序的名称占据了 vector 的第一个值 "),a("code",[t._v("args[0]")]),t._v("，所以我们从索引 "),a("code",[t._v("1")]),t._v(" 开始。"),a("code",[t._v("minigrep")]),t._v(" 获取的第一个参数是需要搜索的字符串，所以将其将第一个参数的引用存放在变量 "),a("code",[t._v("query")]),t._v(" 中。第二个参数将是文件名，所以将第二个参数的引用放入变量 "),a("code",[t._v("filename")]),t._v(" 中。")]),t._v(" "),a("p",[t._v("我们将临时打印出这些变量的值来证明代码如我们期望的那样工作。使用参数 "),a("code",[t._v("test")]),t._v(" 和 "),a("code",[t._v("sample.txt")]),t._v(" 再次运行这个程序：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cargo run test sample.txt\n   Compiling minigrep v0.1.0 (file:///projects/minigrep)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs\n     Running `target/debug/minigrep test sample.txt`\nSearching for test\nIn file sample.txt\n")])])]),a("p",[t._v("好的，它可以工作！我们将所需的参数值保存进了对应的变量中。之后会增加一些错误处理来应对类似用户没有提供参数的情况，不过现在我们将忽略他们并开始增加读取文件功能。")])])}),[],!1,null,null,null);e.default=n.exports}}]);