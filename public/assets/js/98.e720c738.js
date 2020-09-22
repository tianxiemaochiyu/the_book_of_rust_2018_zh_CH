(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{446:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"refutability（可反驳性）-模式是否会匹配失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refutability（可反驳性）-模式是否会匹配失效"}},[t._v("#")]),t._v(" Refutability（可反驳性）: 模式是否会匹配失效")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch18-02-refutability.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch18-02-refutability.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit 30fe5484f3923617410032d28e86a5afdf4076fb")])]),t._v(" "),a("p",[t._v("模式有两种形式：refutable（可反驳的）和 irrefutable（不可反驳的）。能匹配任何传递的可能值的模式被称为是 "),a("strong",[t._v("不可反驳的")]),t._v("（"),a("em",[t._v("irrefutable")]),t._v("）。一个例子就是 "),a("code",[t._v("let x = 5;")]),t._v(" 语句中的 "),a("code",[t._v("x")]),t._v("，因为 "),a("code",[t._v("x")]),t._v(" 可以匹配任何值所以不可能会失败。对某些可能的值进行匹配会失败的模式被称为是 "),a("strong",[t._v("可反驳的")]),t._v("（"),a("em",[t._v("refutable")]),t._v("）。一个这样的例子便是 "),a("code",[t._v("if let Some(x) = a_value")]),t._v(" 表达式中的 "),a("code",[t._v("Some(x)")]),t._v("；如果变量 "),a("code",[t._v("a_value")]),t._v(" 中的值是 "),a("code",[t._v("None")]),t._v(" 而不是 "),a("code",[t._v("Some")]),t._v("，那么 "),a("code",[t._v("Some(x)")]),t._v(" 模式不能匹配。")]),t._v(" "),a("p",[t._v("函数参数、 "),a("code",[t._v("let")]),t._v(" 语句和 "),a("code",[t._v("for")]),t._v(" 循环只能接受不可反驳的模式，因为通过不匹配的值程序无法进行有意义的工作。"),a("code",[t._v("if let")]),t._v(" 和 "),a("code",[t._v("while let")]),t._v(" 表达式被限制为只能接受可反驳的模式，因为根据定义他们意在处理可能的失败：条件表达式的功能就是根据成功或失败执行不同的操作。")]),t._v(" "),a("p",[t._v("通常我们无需担心可反驳和不可反驳模式的区别，不过确实需要熟悉可反驳性的概念，这样当在错误信息中看到时就知道如何应对。遇到这些情况，根据代码行为的意图，需要修改模式或者使用模式的结构。")]),t._v(" "),a("p",[t._v("让我们看看一个尝试在 Rust 要求不可反驳模式的地方使用可反驳模式以及相反情况的例子。在示例 18-8 中，有一个 "),a("code",[t._v("let")]),t._v(" 语句，不过模式被指定为可反驳模式 "),a("code",[t._v("Some(x)")]),t._v("。如你所见，这不能编译：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("let Some(x) = some_option_value;\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 18-8: 尝试在 "),a("code",[t._v("let")]),t._v(" 中使用可反驳模式")])]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("some_option_value")]),t._v(" 的值是 "),a("code",[t._v("None")]),t._v("，其不会成功匹配模式 "),a("code",[t._v("Some(x)")]),t._v("，表明这个模式是可反驳的。然而 "),a("code",[t._v("let")]),t._v(" 语句只能接受不可反驳模式因为代码不能通过 "),a("code",[t._v("None")]),t._v(" 值进行有效的操作。Rust 会在编译时抱怨我们尝试在要求不可反驳模式的地方使用可反驳模式：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("error[E0005]: refutable pattern in local binding: `None` not covered\n --\x3e\n  |\n3 | let Some(x) = some_option_value;\n  |     ^^^^^^^ pattern `None` not covered\n")])])]),a("p",[t._v("因为我们没有覆盖（也不可能覆盖！）到模式 "),a("code",[t._v("Some(x)")]),t._v(" 的每一个可能的值, 所以 Rust 会合理地抗议。")]),t._v(" "),a("p",[t._v("为了修复在需要不可反驳模式的地方使用可反驳模式的情况，可以修改使用模式的代码：不同于使用 "),a("code",[t._v("let")]),t._v("，可以使用 "),a("code",[t._v("if let")]),t._v("。如此，如果模式不匹配，大括号中的代码将被忽略，其余代码保持有效。示例 18-9 展示了如何修复示例 18-8 中的代码。")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[t._v("# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" some_option_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Some")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" some_option_value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 18-9: 使用 "),a("code",[t._v("if let")]),t._v(" 和一个带有可反驳模式的代码块来代替 "),a("code",[t._v("let")])])]),t._v(" "),a("p",[t._v("我们给了代码一个得以继续的出路！这段代码可以完美运行，尽管这意味着我们不能再使用不可反驳模式并免于收到错误。如果为 "),a("code",[t._v("if let")]),t._v(" 提供了一个总是会匹配的模式，比如示例 18-10 中的 "),a("code",[t._v("x")]),t._v("，编译器会给出一个警告：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('if let x = 5 {\n    println!("{}", x);\n};\n')])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 18-10: 尝试把不可反驳模式用到 "),a("code",[t._v("if let")]),t._v(" 上")])]),t._v(" "),a("p",[t._v("Rust 会抱怨将不可反驳模式用于 "),a("code",[t._v("if let")]),t._v(" 是没有意义的：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('warning: irrefutable if-let pattern\n --\x3e <anon>:2:5\n  |\n2 | /     if let x = 5 {\n3 | |     println!("{}", x);\n4 | | };\n  | |_^\n  |\n  = note: #[warn(irrefutable_let_patterns)] on by default\n')])])]),a("p",[t._v("基于此，"),a("code",[t._v("match")]),t._v("匹配分支必须使用可反驳模式，除了最后一个分支需要使用能匹配任何剩余值的不可反驳模式。Rust允许我们在只有一个匹配分支的"),a("code",[t._v("match")]),t._v("中使用不可反驳模式，不过这么做不是特别有用，并可以被更简单的 "),a("code",[t._v("let")]),t._v(" 语句替代。")]),t._v(" "),a("p",[t._v("目前我们已经讨论了所有可以使用模式的地方, 以及可反驳模式与不可反驳模式的区别，下面让我们一起去把可以用来创建模式的语法过目一遍吧。")])])}),[],!1,null,null,null);e.default=n.exports}}]);