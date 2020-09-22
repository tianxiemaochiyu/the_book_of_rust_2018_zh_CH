(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{518:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一个使用结构体的示例程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个使用结构体的示例程序"}},[t._v("#")]),t._v(" 一个使用结构体的示例程序")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch05-02-example-structs.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch05-02-example-structs.md"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("\ncommit 9cb1d20394f047855a57228dc4cbbabd0a9b395a")])]),t._v(" "),s("p",[t._v("为了理解何时会需要使用结构体，让我们编写一个计算长方形面积的程序。我们会从单独的变量开始，接着重构程序直到使用结构体替代他们为止。")]),t._v(" "),s("p",[t._v("使用 Cargo 新建一个叫做 "),s("em",[t._v("rectangles")]),t._v(" 的二进制程序，它获取以像素为单位的长方形的宽度和高度，并计算出长方形的面积。示例 5-8 显示了位于项目的 "),s("em",[t._v("src/main.rs")]),t._v(" 中的小程序，它刚刚好实现此功能：")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" width1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" height1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The area of the rectangle is {} square pixels."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" height\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 5-8：通过分别指定长方形的宽和高的变量来计算长方形面积")])]),t._v(" "),s("p",[t._v("现在使用 "),s("code",[t._v("cargo run")]),t._v(" 运行程序：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("The area of the rectangle is 1500 square pixels.\n")])])]),s("p",[t._v("虽然示例 5-8 可以运行，并在调用 "),s("code",[t._v("area")]),t._v(" 函数时传入每个维度来计算出长方形的面积，不过我们可以做的更好。宽度和高度是相关联的，因为他们在一起才能定义一个长方形。")]),t._v(" "),s("p",[t._v("这些代码的问题突显在 "),s("code",[t._v("area")]),t._v(" 的签名上：")]),t._v(" "),s("div",{staticClass:"language-rust,ignore extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("fn area(width: u32, height: u32) -> u32 {\n")])])]),s("p",[t._v("函数 "),s("code",[t._v("area")]),t._v(" 本应该计算一个长方形的面积，不过函数却有两个参数。这两个参数是相关联的，不过程序本身却没有表现出这一点。将长度和宽度组合在一起将更易懂也更易处理。第三章的 "),s("RouterLink",{attrs:{to:"/ch03-02-data-types.html#the-tuple-type"}},[t._v("“元组类型”")]),t._v(" 部分已经讨论过了一种可行的方法：元组。")],1),t._v(" "),s("h3",{attrs:{id:"使用元组重构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用元组重构"}},[t._v("#")]),t._v(" 使用元组重构")]),t._v(" "),s("p",[t._v("示例 5-9 展示了使用元组的另一个程序版本。")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rect1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The area of the rectangle is {} square pixels."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rect1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dimensions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dimensions"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" dimensions"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 5-9：使用元组来指定长方形的宽高")])]),t._v(" "),s("p",[t._v("在某种程度上说，这个程序更好一点了。元组帮助我们增加了一些结构性，并且现在只需传一个参数。不过在另一方面，这个版本却有一点不明确了：元组并没有给出元素的名称，所以计算变得更费解了，因为不得不使用索引来获取元组的每一部分：")]),t._v(" "),s("p",[t._v("在计算面积时将宽和高弄混倒无关紧要，不过当在屏幕上绘制长方形时就有问题了！我们必须牢记 "),s("code",[t._v("width")]),t._v(" 的元组索引是 "),s("code",[t._v("0")]),t._v("，"),s("code",[t._v("height")]),t._v(" 的元组索引是 "),s("code",[t._v("1")]),t._v("。如果其他人要使用这些代码，他们必须要搞清楚这一点，并也要牢记于心。很容易忘记或者混淆这些值而造成错误，因为我们没有在代码中传达数据的意图。")]),t._v(" "),s("h3",{attrs:{id:"使用结构体重构：赋予更多意义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用结构体重构：赋予更多意义"}},[t._v("#")]),t._v(" 使用结构体重构：赋予更多意义")]),t._v(" "),s("p",[t._v("我们使用结构体为数据命名来为其赋予意义。我们可以将我们正在使用的元组转换成一个有整体名称而且每个部分也有对应名字的数据类型，如示例 5-10 所示：")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Rectangle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rect1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The area of the rectangle is {} square pixels."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("rect1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rectangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rectangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" rectangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 5-10：定义 "),s("code",[t._v("Rectangle")]),t._v(" 结构体")])]),t._v(" "),s("p",[t._v("这里我们定义了一个结构体并称其为 "),s("code",[t._v("Rectangle")]),t._v("。在大括号中定义了字段 "),s("code",[t._v("width")]),t._v(" 和 "),s("code",[t._v("height")]),t._v("，类型都是 "),s("code",[t._v("u32")]),t._v("。接着在 "),s("code",[t._v("main")]),t._v(" 中，我们创建了一个具体的 "),s("code",[t._v("Rectangle")]),t._v(" 实例，它的宽是 30，高是 50。")]),t._v(" "),s("p",[t._v("函数 "),s("code",[t._v("area")]),t._v(" 现在被定义为接收一个名叫 "),s("code",[t._v("rectangle")]),t._v(" 的参数，其类型是一个结构体 "),s("code",[t._v("Rectangle")]),t._v(" 实例的不可变借用。第四章讲到过，我们希望借用结构体而不是获取它的所有权，这样 "),s("code",[t._v("main")]),t._v(" 函数就可以保持 "),s("code",[t._v("rect1")]),t._v(" 的所有权并继续使用它，所以这就是为什么在函数签名和调用的地方会有 "),s("code",[t._v("&")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("area")]),t._v(" 函数访问 "),s("code",[t._v("Rectangle")]),t._v(" 实例的 "),s("code",[t._v("width")]),t._v(" 和 "),s("code",[t._v("height")]),t._v(" 字段。"),s("code",[t._v("area")]),t._v(" 的函数签名现在明确的阐述了我们的意图：使用 "),s("code",[t._v("Rectangle")]),t._v(" 的 "),s("code",[t._v("width")]),t._v(" 和 "),s("code",[t._v("height")]),t._v(" 字段，计算 "),s("code",[t._v("Rectangle")]),t._v(" 的面积。这表明宽高是相互联系的，并为这些值提供了描述性的名称而不是使用元组的索引值 "),s("code",[t._v("0")]),t._v(" 和 "),s("code",[t._v("1")]),t._v(" 。结构体胜在更清晰明了。")]),t._v(" "),s("h3",{attrs:{id:"通过派生-trait-增加实用功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过派生-trait-增加实用功能"}},[t._v("#")]),t._v(" 通过派生 trait 增加实用功能")]),t._v(" "),s("p",[t._v("如果能够在调试程序时打印出 "),s("code",[t._v("Rectangle")]),t._v(" 实例来查看其所有字段的值就更好了。示例 5-11 像前面章节那样尝试使用 "),s("code",[t._v("println!")]),t._v(" 宏。但这并不行。")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),s("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('struct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nfn main() {\n    let rect1 = Rectangle { width: 30, height: 50 };\n\n    println!("rect1 is {}", rect1);\n}\n')])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 5-11：尝试打印出 "),s("code",[t._v("Rectangle")]),t._v(" 实例")])]),t._v(" "),s("p",[t._v("当我们运行这个代码时，会出现带有如下核心信息的错误：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("error[E0277]: `Rectangle` doesn't implement `std::fmt::Display`\n")])])]),s("p",[s("code",[t._v("println!")]),t._v(" 宏能处理很多类型的格式，不过，"),s("code",[t._v("{}")]),t._v(" 默认告诉 "),s("code",[t._v("println!")]),t._v(" 使用被称为 "),s("code",[t._v("Display")]),t._v(" 的格式：意在提供给直接终端用户查看的输出。目前为止见过的基本类型都默认实现了 "),s("code",[t._v("Display")]),t._v("，因为它就是向用户展示 "),s("code",[t._v("1")]),t._v(" 或其他任何基本类型的唯一方式。不过对于结构体，"),s("code",[t._v("println!")]),t._v(" 应该用来输出的格式是不明确的，因为这有更多显示的可能性：是否需要逗号？需要打印出大括号吗？所有字段都应该显示吗？由于这种不确定性，Rust 不会尝试猜测我们的意图，所以结构体并没有提供一个 "),s("code",[t._v("Display")]),t._v(" 实现。")]),t._v(" "),s("p",[t._v("但是如果我们继续阅读错误，将会发现这个有帮助的信息：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("= help: the trait `std::fmt::Display` is not implemented for `Rectangle`\n= note: in format strings you may be able to use `{:?}` (or {:#?} for pretty-print) instead\n")])])]),s("p",[t._v("让我们来试试！现在 "),s("code",[t._v("println!")]),t._v(" 宏调用看起来像 "),s("code",[t._v('println!("rect1 is {:?}", rect1);')]),t._v(" 这样。在 "),s("code",[t._v("{}")]),t._v(" 中加入 "),s("code",[t._v(":?")]),t._v(" 指示符告诉 "),s("code",[t._v("println!")]),t._v(" 我们想要使用叫做 "),s("code",[t._v("Debug")]),t._v(" 的输出格式。"),s("code",[t._v("Debug")]),t._v(" 是一个 trait，它允许我们以一种对开发者有帮助的方式打印结构体，以便当我们调试代码时能看到它的值。")]),t._v(" "),s("p",[t._v("这样调整后再次运行程序。见鬼了！仍然能看到一个错误：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("error[E0277]: `Rectangle` doesn't implement `std::fmt::Debug`\n")])])]),s("p",[t._v("不过编译器又一次给出了一个有帮助的信息：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("= help: the trait `std::fmt::Debug` is not implemented for `Rectangle`\n= note: add `#[derive(Debug)]` or manually implement `std::fmt::Debug`\n")])])]),s("p",[t._v("Rust "),s("strong",[t._v("确实")]),t._v(" 包含了打印出调试信息的功能，不过我们必须为结构体显式选择这个功能。为此，在结构体定义之前加上 "),s("code",[t._v("#[derive(Debug)]")]),t._v(" 注解，如示例 5-12 所示：")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Debug)]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Rectangle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rect1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rect1 is {:?}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rect1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 5-12：增加注解来派生 "),s("code",[t._v("Debug")]),t._v(" trait，并使用调试格式打印 "),s("code",[t._v("Rectangle")]),t._v(" 实例")])]),t._v(" "),s("p",[t._v("现在我们再运行这个程序时，就不会有任何错误，并会出现如下输出：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("rect1 is Rectangle { width: 30, height: 50 }\n")])])]),s("p",[t._v("好极了！这并不是最漂亮的输出，不过它显示这个实例的所有字段，毫无疑问这对调试有帮助。当我们有一个更大的结构体时，能有更易读一点的输出就好了，为此可以使用 "),s("code",[t._v("{:#?}")]),t._v(" 替换 "),s("code",[t._v("println!")]),t._v(" 字符串中的 "),s("code",[t._v("{:?}")]),t._v("。如果在这个例子中使用了 "),s("code",[t._v("{:#?}")]),t._v(" 风格的话，输出会看起来像这样：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("rect1 is Rectangle {\n    width: 30,\n    height: 50\n}\n")])])]),s("p",[t._v("Rust 为我们提供了很多可以通过 "),s("code",[t._v("derive")]),t._v(" 注解来使用的 trait，他们可以为我们的自定义类型增加实用的行为。附录 C 中列出了这些 trait 和行为。第十章会介绍如何通过自定义行为来实现这些 trait，同时还有如何创建你自己的 trait。")]),t._v(" "),s("p",[t._v("我们的 "),s("code",[t._v("area")]),t._v(" 函数是非常特殊的，它只计算长方形的面积。如果这个行为与 "),s("code",[t._v("Rectangle")]),t._v(" 结构体再结合得更紧密一些就更好了，因为它不能用于其他类型。现在让我们看看如何继续重构这些代码，来将 "),s("code",[t._v("area")]),t._v(" 函数协调进 "),s("code",[t._v("Rectangle")]),t._v(" 类型定义的 "),s("code",[t._v("area")]),t._v(" "),s("strong",[t._v("方法")]),t._v(" 中。")])])}),[],!1,null,null,null);a.default=e.exports}}]);