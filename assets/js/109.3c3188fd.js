(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{588:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"高级函数与闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级函数与闭包"}},[t._v("#")]),t._v(" 高级函数与闭包")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch19-05-advanced-functions-and-closures.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch19-05-advanced-functions-and-closures.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit 426f3e4ec17e539ae9905ba559411169d303a031")])]),t._v(" "),a("p",[t._v("最后我们将探索一些有关函数和闭包的高级功能：函数指针以及返回值闭包。")]),t._v(" "),a("h3",{attrs:{id:"函数指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数指针"}},[t._v("#")]),t._v(" 函数指针")]),t._v(" "),a("p",[t._v("我们讨论过了如何向函数传递闭包；也可以向函数传递常规函数！这在我们希望传递已经定义的函数而不是重新定义闭包作为参数是很有用。通过函数指针允许我们使用函数作为另一个函数的参数。函数的类型是 "),a("code",[t._v("fn")]),t._v(" （使用小写的 “f” ）以免与 "),a("code",[t._v("Fn")]),t._v(" 闭包 trait 相混淆。"),a("code",[t._v("fn")]),t._v(" 被称为 "),a("strong",[t._v("函数指针")]),t._v("（"),a("em",[t._v("function pointer")]),t._v("）。指定参数为函数指针的语法类似于闭包，如示例 19-27 所示：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("add_one")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("do_twice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" answer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_twice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add_one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The answer is: {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" answer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-27: 使用 "),a("code",[t._v("fn")]),t._v(" 类型接受函数指针作为参数")])]),t._v(" "),a("p",[t._v("这会打印出 "),a("code",[t._v("The answer is: 12")]),t._v("。"),a("code",[t._v("do_twice")]),t._v(" 中的 "),a("code",[t._v("f")]),t._v(" 被指定为一个接受一个 "),a("code",[t._v("i32")]),t._v(" 参数并返回 "),a("code",[t._v("i32")]),t._v(" 的 "),a("code",[t._v("fn")]),t._v("。接着就可以在 "),a("code",[t._v("do_twice")]),t._v(" 函数体中调用 "),a("code",[t._v("f")]),t._v("。在  "),a("code",[t._v("main")]),t._v(" 中，可以将函数名 "),a("code",[t._v("add_one")]),t._v(" 作为第一个参数传递给 "),a("code",[t._v("do_twice")]),t._v("。")]),t._v(" "),a("p",[t._v("不同于闭包，"),a("code",[t._v("fn")]),t._v(" 是一个类型而不是一个 trait，所以直接指定 "),a("code",[t._v("fn")]),t._v(" 作为参数而不是声明一个带有 "),a("code",[t._v("Fn")]),t._v(" 作为 trait bound 的泛型参数。")]),t._v(" "),a("p",[t._v("函数指针实现了所有三个闭包 trait（"),a("code",[t._v("Fn")]),t._v("、"),a("code",[t._v("FnMut")]),t._v(" 和 "),a("code",[t._v("FnOnce")]),t._v("），所以总是可以在调用期望闭包的函数时传递函数指针作为参数。倾向于编写使用泛型和闭包 trait 的函数，这样它就能接受函数或闭包作为参数。")]),t._v(" "),a("p",[t._v("一个只期望接受 "),a("code",[t._v("fn")]),t._v(" 而不接受闭包的情况的例子是与不存在闭包的外部代码交互时：C 语言的函数可以接受函数作为参数，但 C 语言没有闭包。")]),t._v(" "),a("p",[t._v("作为一个既可以使用内联定义的闭包又可以使用命名函数的例子，让我们看看一个 "),a("code",[t._v("map")]),t._v(" 的应用。使用 "),a("code",[t._v("map")]),t._v(" 函数将一个数字 vector 转换为一个字符串 vector，就可以使用闭包，比如这样：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" list_of_numbers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("vec!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" list_of_strings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list_of_numbers\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token closure-params"}},[a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")])]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("to_string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("collect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("或者可以将函数作为 "),a("code",[t._v("map")]),t._v(" 的参数来代替闭包，像是这样：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" list_of_numbers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("vec!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" list_of_strings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list_of_numbers\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("to_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("collect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("注意这里必须使用 "),a("RouterLink",{attrs:{to:"/ch19-03-advanced-traits.html#advanced-traits"}},[t._v("“高级 trait”")]),t._v("  部分讲到的完全限定语法，因为存在多个叫做 "),a("code",[t._v("to_string")]),t._v(" 的函数；这里使用了定义于 "),a("code",[t._v("ToString")]),t._v(" trait 的 "),a("code",[t._v("to_string")]),t._v(" 函数，标准库为所有实现了 "),a("code",[t._v("Display")]),t._v(" 的类型实现了这个 trait。")],1),t._v(" "),a("p",[t._v("另一个实用的模式暴露了元组结构体和元组结构体枚举成员的实现细节。这些项使用 "),a("code",[t._v("()")]),t._v(" 作为初始化语法，这看起来就像函数调用，同时它们确实被实现为返回由参数构造的实例的函数。它们也被称为实现了闭包 trait 的函数指针，并可以采用类似如下的方式调用：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" list_of_statuses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("collect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这里创建了 "),a("code",[t._v("Status::Value")]),t._v(" 实例，它通过 "),a("code",[t._v("map")]),t._v(" 用范围的每一个 "),a("code",[t._v("u32")]),t._v(" 值调用 "),a("code",[t._v("Status::Value")]),t._v(" 的初始化函数。一些人倾向于函数风格，一些人喜欢闭包。这两种形式最终都会产生同样的代码，所以请使用对你来说更明白的形式吧。")]),t._v(" "),a("h3",{attrs:{id:"返回闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回闭包"}},[t._v("#")]),t._v(" 返回闭包")]),t._v(" "),a("p",[t._v("闭包表现为 trait，这意味着不能直接返回闭包。对于大部分需要返回 trait 的情况，可以使用实现了期望返回的 trait 的具体类型来替代函数的返回值。但是这不能用于闭包，因为他们没有一个可返回的具体类型；例如不允许使用函数指针 "),a("code",[t._v("fn")]),t._v(" 作为返回值类型。")]),t._v(" "),a("p",[t._v("这段代码尝试直接返回闭包，它并不能编译：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("fn returns_closure() -> Fn(i32) -> i32 {\n    |x| x + 1\n}\n")])])]),a("p",[t._v("编译器给出的错误是：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("error[E0277]: the trait bound `std::ops::Fn(i32) -> i32 + 'static:\nstd::marker::Sized` is not satisfied\n --\x3e\n  |\n1 | fn returns_closure() -> Fn(i32) -> i32 {\n  |                         ^^^^^^^^^^^^^^ `std::ops::Fn(i32) -> i32 + 'static`\n  does not have a constant size known at compile-time\n  |\n  = help: the trait `std::marker::Sized` is not implemented for\n  `std::ops::Fn(i32) -> i32 + 'static`\n  = note: the return type of a function must have a statically known size\n")])])]),a("p",[t._v("错误又一次指向了 "),a("code",[t._v("Sized")]),t._v(" trait！Rust 并不知道需要多少空间来储存闭包。不过我们在上一部分见过这种情况的解决办法：可以使用 trait 对象：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("returns_closure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dyn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token closure-params"}},[a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")])]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这段代码正好可以编译。关于 trait 对象的更多内容，请回顾第十七章的 "),a("RouterLink",{attrs:{to:"/ch17-02-trait-objects.html#using-trait-objects-that-allow-for-values-of-different-types"}},[t._v("“为使用不同类型的值而设计的 trait 对象”")]),t._v(" 部分。")],1),t._v(" "),a("p",[t._v("接下来让我们学习宏！")])])}),[],!1,null,null,null);s.default=e.exports}}]);