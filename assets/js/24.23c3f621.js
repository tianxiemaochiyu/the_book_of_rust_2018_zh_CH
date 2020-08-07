(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{371:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch03-02-data-types.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch03-02-data-types.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit 6598d3abac05ed1d0c45db92466ea49346d05e40")])]),t._v(" "),a("p",[t._v("在 Rust 中，每一个值都属于某一个 "),a("strong",[t._v("数据类型")]),t._v("（"),a("em",[t._v("data type")]),t._v("），这告诉 Rust 它被指定为何种数据，以便明确数据处理方式。我们将看到两类数据类型子集：标量（scalar）和复合（compound）。")]),t._v(" "),a("p",[t._v("记住，Rust 是 "),a("strong",[t._v("静态类型")]),t._v("（"),a("em",[t._v("statically typed")]),t._v("）语言，也就是说在编译时就必须知道所有变量的类型。根据值及其使用方式，编译器通常可以推断出我们想要用的类型。当多种类型均有可能时，比如第二章的 "),a("RouterLink",{attrs:{to:"/ch02-00-guessing-game-tutorial.html#comparing-the-guess-to-the-secret-number"}},[t._v("“比较猜测的数字和秘密数字”")]),t._v(" 使用 "),a("code",[t._v("parse")]),t._v(" 将 "),a("code",[t._v("String")]),t._v(" 转换为数字时，必须增加类型注解，像这样：")],1),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"42"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Not a number!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这里如果不添加类型注解，Rust 会显示如下错误，这说明编译器需要我们提供更多信息，来了解我们想要的类型：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('error[E0282]: type annotations needed\n --\x3e src/main.rs:2:9\n  |\n2 |     let guess = "42".parse().expect("Not a number!");\n  |         ^^^^^\n  |         |\n  |         cannot infer type for `_`\n  |         consider giving `guess` a type\n')])])]),a("p",[t._v("你会看到其它数据类型的各种类型注解。")]),t._v(" "),a("h3",{attrs:{id:"标量类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标量类型"}},[t._v("#")]),t._v(" 标量类型")]),t._v(" "),a("p",[a("strong",[t._v("标量")]),t._v("（"),a("em",[t._v("scalar")]),t._v("）类型代表一个单独的值。Rust 有四种基本的标量类型：整型、浮点型、布尔类型和字符类型。你可能在其他语言中见过它们。让我们深入了解它们在 Rust 中是如何工作的。")]),t._v(" "),a("h4",{attrs:{id:"整型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整型"}},[t._v("#")]),t._v(" 整型")]),t._v(" "),a("p",[a("strong",[t._v("整数")]),t._v(" 是一个没有小数部分的数字。我们在第二章使用过 "),a("code",[t._v("u32")]),t._v(" 整数类型。该类型声明表明，它关联的值应该是一个占据 32 比特位的无符号整数（有符号整数类型以 "),a("code",[t._v("i")]),t._v(" 开头而不是 "),a("code",[t._v("u")]),t._v("）。表格 3-1 展示了 Rust 内建的整数类型。在有符号列和无符号列中的每一个变体（例如，"),a("code",[t._v("i16")]),t._v("）都可以用来声明整数值的类型。")]),t._v(" "),a("p",[a("span",{staticClass:"caption"},[t._v("表格 3-1: Rust 中的整型")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("长度")]),t._v(" "),a("th",[t._v("有符号")]),t._v(" "),a("th",[t._v("无符号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("8-bit")]),t._v(" "),a("td",[a("code",[t._v("i8")])]),t._v(" "),a("td",[a("code",[t._v("u8")])])]),t._v(" "),a("tr",[a("td",[t._v("16-bit")]),t._v(" "),a("td",[a("code",[t._v("i16")])]),t._v(" "),a("td",[a("code",[t._v("u16")])])]),t._v(" "),a("tr",[a("td",[t._v("32-bit")]),t._v(" "),a("td",[a("code",[t._v("i32")])]),t._v(" "),a("td",[a("code",[t._v("u32")])])]),t._v(" "),a("tr",[a("td",[t._v("64-bit")]),t._v(" "),a("td",[a("code",[t._v("i64")])]),t._v(" "),a("td",[a("code",[t._v("u64")])])]),t._v(" "),a("tr",[a("td",[t._v("128-bit")]),t._v(" "),a("td",[a("code",[t._v("i128")])]),t._v(" "),a("td",[a("code",[t._v("u128")])])]),t._v(" "),a("tr",[a("td",[t._v("arch")]),t._v(" "),a("td",[a("code",[t._v("isize")])]),t._v(" "),a("td",[a("code",[t._v("usize")])])])])]),t._v(" "),a("p",[t._v("每一个变体都可以是有符号或无符号的，并有一个明确的大小。"),a("strong",[t._v("有符号")]),t._v(" 和 "),a("strong",[t._v("无符号")]),t._v(" 代表数字能否为负值，换句话说，数字是否需要有一个符号（有符号数），或者永远为正而不需要符号（无符号数）。这有点像在纸上书写数字：当需要考虑符号的时候，数字以加号或减号作为前缀；然而，可以安全地假设为正数时，加号前缀通常省略。有符号数以"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Two%27s_complement",target:"_blank",rel:"noopener noreferrer"}},[t._v("补码形式（two’s complement representation）"),a("OutboundLink")],1),t._v(" 存储。")]),t._v(" "),a("p",[t._v("每一个有符号的变体可以储存包含从 -(2"),a("sup",[t._v("n - 1")]),t._v(") 到 2"),a("sup",[t._v("n - 1")]),t._v(" - 1 在内的数字，这里 "),a("em",[t._v("n")]),t._v(" 是变体使用的位数。所以 "),a("code",[t._v("i8")]),t._v(" 可以储存从 -(2"),a("sup",[t._v("7")]),t._v(") 到 2"),a("sup",[t._v("7")]),t._v(" - 1 在内的数字，也就是从 -128 到 127。无符号的变体可以储存从 0 到 2"),a("sup",[t._v("n")]),t._v(" - 1 的数字，所以 "),a("code",[t._v("u8")]),t._v(" 可以储存从 0 到 2"),a("sup",[t._v("8")]),t._v(" - 1 的数字，也就是从 0 到 255。")]),t._v(" "),a("p",[t._v("另外，"),a("code",[t._v("isize")]),t._v(" 和 "),a("code",[t._v("usize")]),t._v(" 类型依赖运行程序的计算机架构：64 位架构上它们是 64 位的， 32 位架构上它们是 32 位的。")]),t._v(" "),a("p",[t._v("可以使用表格 3-2 中的任何一种形式编写数字字面值。注意除 byte 以外的所有数字字面值允许使用类型后缀，例如 "),a("code",[t._v("57u8")]),t._v("，同时也允许使用 "),a("code",[t._v("_")]),t._v(" 做为分隔符以方便读数，例如"),a("code",[t._v("1_000")]),t._v("。")]),t._v(" "),a("p",[a("span",{staticClass:"caption"},[t._v("表格 3-2: Rust 中的整型字面值")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("数字字面值")]),t._v(" "),a("th",[t._v("例子")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Decimal (十进制)")]),t._v(" "),a("td",[a("code",[t._v("98_222")])])]),t._v(" "),a("tr",[a("td",[t._v("Hex (十六进制)")]),t._v(" "),a("td",[a("code",[t._v("0xff")])])]),t._v(" "),a("tr",[a("td",[t._v("Octal (八进制)")]),t._v(" "),a("td",[a("code",[t._v("0o77")])])]),t._v(" "),a("tr",[a("td",[t._v("Binary (二进制)")]),t._v(" "),a("td",[a("code",[t._v("0b1111_0000")])])]),t._v(" "),a("tr",[a("td",[t._v("Byte (单字节字符)(仅限于"),a("code",[t._v("u8")]),t._v(")")]),t._v(" "),a("td",[a("code",[t._v("b'A'")])])])])]),t._v(" "),a("p",[t._v("那么该使用哪种类型的数字呢？如果拿不定主意，Rust 的默认类型通常就很好，数字类型默认是 "),a("code",[t._v("i32")]),t._v("：它通常是最快的，甚至在 64 位系统上也是。"),a("code",[t._v("isize")]),t._v(" 或 "),a("code",[t._v("usize")]),t._v(" 主要作为某些集合的索引。")]),t._v(" "),a("blockquote",[a("h5",{attrs:{id:"整型溢出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整型溢出"}},[t._v("#")]),t._v(" 整型溢出")]),t._v(" "),a("p",[t._v("比方说有一个 "),a("code",[t._v("u8")]),t._v(" ，它可以存放从零到 "),a("code",[t._v("255")]),t._v(" 的值。那么当你将其修改为 "),a("code",[t._v("256")]),t._v(" 时会发生什么呢？这被称为 “整型溢出”（“integer overflow” ），关于这一行为 Rust 有一些有趣的规则。当在 debug 模式编译时，Rust 检查这类问题并使程序 "),a("em",[t._v("panic")]),t._v("，这个术语被 Rust 用来表明程序因错误而退出。第九章 "),a("RouterLink",{attrs:{to:"/ch09-01-unrecoverable-errors-with-panic.html"}},[t._v("“"),a("code",[t._v("panic!")]),t._v(" 与不可恢复的错误”")]),t._v(" 部分会详细介绍 panic。")],1),t._v(" "),a("p",[t._v("在 release 构建中，Rust 不检测溢出，相反会进行一种被称为二进制补码包装（"),a("em",[t._v("two’s complement wrapping")]),t._v("）的操作。简而言之，"),a("code",[t._v("256")]),t._v(" 变成 "),a("code",[t._v("0")]),t._v("，"),a("code",[t._v("257")]),t._v(" 变成 "),a("code",[t._v("1")]),t._v("，依此类推。依赖整型溢出被认为是一种错误，即便可能出现这种行为。如果你确实需要这种行为，标准库中有一个类型显式提供此功能，"),a("RouterLink",{attrs:{to:"/std/num/struct.Wrapping.html"}},[a("code",[t._v("Wrapping")])]),t._v("。")],1)]),t._v(" "),a("h4",{attrs:{id:"浮点型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点型"}},[t._v("#")]),t._v(" 浮点型")]),t._v(" "),a("p",[t._v("Rust 也有两个原生的 "),a("strong",[t._v("浮点数")]),t._v("（"),a("em",[t._v("floating-point numbers")]),t._v("）类型，它们是带小数点的数字。Rust 的浮点数类型是 "),a("code",[t._v("f32")]),t._v(" 和 "),a("code",[t._v("f64")]),t._v("，分别占 32 位和 64 位。默认类型是 "),a("code",[t._v("f64")]),t._v("，因为在现代 CPU 中，它与 "),a("code",[t._v("f32")]),t._v(" 速度几乎一样，不过精度更高。")]),t._v(" "),a("p",[t._v("这是一个展示浮点数的实例：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f64")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f32")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("浮点数采用 IEEE-754 标准表示。"),a("code",[t._v("f32")]),t._v(" 是单精度浮点数，"),a("code",[t._v("f64")]),t._v(" 是双精度浮点数。")]),t._v(" "),a("h4",{attrs:{id:"数值运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值运算"}},[t._v("#")]),t._v(" 数值运算")]),t._v(" "),a("p",[t._v("Rust 中的所有数字类型都支持基本数学运算：加法、减法、乘法、除法和取余。下面的代码展示了如何在 "),a("code",[t._v("let")]),t._v(" 语句中使用它们：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加法")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 减法")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" difference "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("95.5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 乘法")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" product "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 除法")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" quotient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56.7")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 取余")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" remainder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("43")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这些语句中的每个表达式使用了一个数学运算符并计算出了一个值，然后绑定给一个变量。附录 B 包含 Rust 提供的所有运算符的列表。")]),t._v(" "),a("h4",{attrs:{id:"布尔型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布尔型"}},[t._v("#")]),t._v(" 布尔型")]),t._v(" "),a("p",[t._v("正如其他大部分编程语言一样，Rust 中的布尔类型有两个可能的值："),a("code",[t._v("true")]),t._v(" 和 "),a("code",[t._v("false")]),t._v("。Rust 中的布尔类型使用 "),a("code",[t._v("bool")]),t._v(" 表示。例如：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 显式指定类型注解")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用布尔值的主要场景是条件表达式，例如 "),a("code",[t._v("if")]),t._v(" 表达式。在 "),a("RouterLink",{attrs:{to:"/ch03-05-control-flow.html#control-flow"}},[t._v("“控制流”（“Control Flow”）")]),t._v(" 部分将介绍 "),a("code",[t._v("if")]),t._v(" 表达式在 Rust 中如何工作。")],1),t._v(" "),a("h4",{attrs:{id:"字符类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符类型"}},[t._v("#")]),t._v(" 字符类型")]),t._v(" "),a("p",[t._v("目前为止只使用到了数字，不过 Rust 也支持字母。Rust 的 "),a("code",[t._v("char")]),t._v(" 类型是语言中最原生的字母类型，如下代码展示了如何使用它。（注意 "),a("code",[t._v("char")]),t._v(" 由单引号指定，不同于字符串使用双引号。）")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token char string"}},[t._v("'z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" z "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token char string"}},[t._v("'ℤ'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" heart_eyed_cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" '😻'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Rust 的 "),a("code",[t._v("char")]),t._v(" 类型的大小为四个字节(four bytes)，并代表了一个 Unicode 标量值（Unicode Scalar Value），这意味着它可以比 ASCII 表示更多内容。在 Rust 中，拼音字母（Accented letters），中文、日文、韩文等字符，emoji（绘文字）以及零长度的空白字符都是有效的 "),a("code",[t._v("char")]),t._v(" 值。Unicode 标量值包含从 "),a("code",[t._v("U+0000")]),t._v(" 到 "),a("code",[t._v("U+D7FF")]),t._v(" 和 "),a("code",[t._v("U+E000")]),t._v(" 到 "),a("code",[t._v("U+10FFFF")]),t._v(" 在内的值。不过，“字符” 并不是一个 Unicode 中的概念，所以人直觉上的 “字符” 可能与 Rust 中的 "),a("code",[t._v("char")]),t._v(" 并不符合。第八章的 "),a("RouterLink",{attrs:{to:"/ch08-02-strings.html#storing-utf-8-encoded-text-with-strings"}},[t._v("“使用字符串存储 UTF-8 编码的文本”")]),t._v(" 中将详细讨论这个主题。")],1),t._v(" "),a("h3",{attrs:{id:"复合类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复合类型"}},[t._v("#")]),t._v(" 复合类型")]),t._v(" "),a("p",[a("strong",[t._v("复合类型")]),t._v("（"),a("em",[t._v("Compound types")]),t._v("）可以将多个值组合成一个类型。Rust 有两个原生的复合类型：元组（tuple）和数组（array）。")]),t._v(" "),a("h4",{attrs:{id:"元组类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元组类型"}},[t._v("#")]),t._v(" 元组类型")]),t._v(" "),a("p",[t._v("元组是一个将多个其他类型的值组合进一个复合类型的主要方式。元组长度固定：一旦声明，其长度不会增大或缩小。")]),t._v(" "),a("p",[t._v("我们使用包含在圆括号中的逗号分隔的值列表来创建一个元组。元组中的每一个位置都有一个类型，而且这些不同值的类型也不必是相同的。这个例子中使用了可选的类型注解：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("tup")]),t._v(" 变量绑定到整个元组上，因为元组是一个单独的复合元素。为了从元组中获取单个值，可以使用模式匹配（pattern matching）来解构（destructure）元组值，像这样：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The value of y is: {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("程序首先创建了一个元组并绑定到 "),a("code",[t._v("tup")]),t._v(" 变量上。接着使用了 "),a("code",[t._v("let")]),t._v(" 和一个模式将 "),a("code",[t._v("tup")]),t._v(" 分成了三个不同的变量，"),a("code",[t._v("x")]),t._v("、"),a("code",[t._v("y")]),t._v(" 和 "),a("code",[t._v("z")]),t._v("。这叫做 "),a("strong",[t._v("解构")]),t._v("（"),a("em",[t._v("destructuring")]),t._v("），因为它将一个元组拆成了三个部分。最后，程序打印出了 "),a("code",[t._v("y")]),t._v(" 的值，也就是 "),a("code",[t._v("6.4")]),t._v("。")]),t._v(" "),a("p",[t._v("除了使用模式匹配解构外，也可以使用点号（"),a("code",[t._v(".")]),t._v("）后跟值的索引来直接访问它们。例如：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" five_hundred "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" six_point_four "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" one "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这个程序创建了一个元组，"),a("code",[t._v("x")]),t._v("，并接着使用索引为每个元素创建新变量。跟大多数编程语言一样，元组的第一个索引值是 0。")]),t._v(" "),a("h4",{attrs:{id:"数组类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组类型"}},[t._v("#")]),t._v(" 数组类型")]),t._v(" "),a("p",[t._v("另一个包含多个值的方式是 "),a("strong",[t._v("数组")]),t._v("（"),a("em",[t._v("array")]),t._v("）。与元组不同，数组中的每个元素的类型必须相同。Rust 中的数组与一些其他语言中的数组不同，因为 Rust 中的数组是固定长度的：一旦声明，它们的长度不能增长或缩小。")]),t._v(" "),a("p",[t._v("Rust 中，数组中的值位于中括号内的逗号分隔的列表中：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当你想要在栈（stack）而不是在堆（heap）上为数据分配空间（第四章将讨论栈与堆的更多内容），或者是想要确保总是有固定数量的元素时，数组非常有用。但是数组并不如 vector 类型灵活。vector 类型是标准库提供的一个 "),a("strong",[t._v("允许")]),t._v(" 增长和缩小长度的类似数组的集合类型。当不确定是应该使用数组还是 vector 的时候，你可能应该使用 vector。第八章会详细讨论 vector。")]),t._v(" "),a("p",[t._v("一个你可能想要使用数组而不是 vector 的例子是，当程序需要知道一年中月份的名字时。程序不大可能会去增加或减少月份。这时你可以使用数组，因为我们知道它总是包含 12 个元素：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" months "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"January"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"February"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"March"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"April"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"May"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"June"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"July"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"August"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"September"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"October"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"November"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"December"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("可以像这样编写数组的类型：在方括号中包含每个元素的类型，后跟分号，再后跟数组元素的数量。")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这里，"),a("code",[t._v("i32")]),t._v(" 是每个元素的类型。分号之后，数字 "),a("code",[t._v("5")]),t._v(" 表明该数组包含五个元素。")]),t._v(" "),a("p",[t._v("这样编写数组的类型类似于另一个初始化数组的语法：如果你希望创建一个每个元素都相同的数组，可以在中括号内指定其初始值，后跟分号，再后跟数组的长度，如下所示：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"访问数组元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问数组元素"}},[t._v("#")]),t._v(" 访问数组元素")]),t._v(" "),a("p",[t._v("数组是一整块分配在栈上的内存。可以使用索引来访问数组的元素，像这样：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" first "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" second "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在这个例子中，叫做 "),a("code",[t._v("first")]),t._v(" 的变量的值是 "),a("code",[t._v("1")]),t._v("，因为它是数组索引 "),a("code",[t._v("[0]")]),t._v(" 的值。变量 "),a("code",[t._v("second")]),t._v(" 将会是数组索引 "),a("code",[t._v("[1]")]),t._v(" 的值 "),a("code",[t._v("2")]),t._v("。")]),t._v(" "),a("h5",{attrs:{id:"无效的数组元素访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无效的数组元素访问"}},[t._v("#")]),t._v(" 无效的数组元素访问")]),t._v(" "),a("p",[t._v("如果我们访问数组结尾之后的元素会发生什么呢？比如你将上面的例子改成下面这样，这可以编译通过，不过在运行时会因错误而退出：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,ignore,panics extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('fn main() {\n    let a = [1, 2, 3, 4, 5];\n    let index = 10;\n\n    let element = a[index];\n\n    println!("The value of element is: {}", element);\n}\n')])])]),a("p",[t._v("使用 "),a("code",[t._v("cargo run")]),t._v(" 运行代码后会产生如下结果：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cargo run\n   Compiling arrays v0.1.0 (file:///projects/arrays)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.31 secs\n     Running `target/debug/arrays`\nthread 'main' panicked at 'index out of bounds: the len is 5 but the index is\n 10', src/main.rs:5:19\nnote: Run with `RUST_BACKTRACE=1` for a backtrace.\n")])])]),a("p",[t._v("编译并没有产生任何错误，不过程序会出现一个 "),a("strong",[t._v("运行时")]),t._v("（"),a("em",[t._v("runtime")]),t._v("）错误并且不会成功退出。当尝试用索引访问一个元素时，Rust 会检查指定的索引是否小于数组的长度。如果索引超出了数组长度，Rust 会 "),a("em",[t._v("panic")]),t._v("，这是 Rust 术语，它用于程序因为错误而退出的情况。")]),t._v(" "),a("p",[t._v("这是第一个在实战中遇到的 Rust 安全原则的例子。在很多底层语言中，并没有进行这类检查，这样当提供了一个不正确的索引时，就会访问无效的内存。通过立即退出而不是允许内存访问并继续执行，Rust 让你避开此类错误。第九章会讨论更多 Rust 的错误处理。")])])}),[],!1,null,null,null);s.default=e.exports}}]);