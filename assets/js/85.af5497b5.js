(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{564:function(e,_,v){"use strict";v.r(_);var t=v(4),r=Object(t.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"智能指针"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#智能指针"}},[e._v("#")]),e._v(" 智能指针")]),e._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch15-00-smart-pointers.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ch15-00-smart-pointers.md"),v("OutboundLink")],1),e._v(" "),v("br"),e._v("\ncommit 1fedfc4b96c2017f64ecfcf41a0a07e2e815f24f")])]),e._v(" "),v("p",[v("strong",[e._v("指针")]),e._v(" （"),v("em",[e._v("pointer")]),e._v("）是一个包含内存地址的变量的通用概念。这个地址引用，或 “指向”（points at）一些其他数据。Rust 中最常见的指针是第四章介绍的 "),v("strong",[e._v("引用")]),e._v("（"),v("em",[e._v("reference")]),e._v("）。引用以 "),v("code",[e._v("&")]),e._v(" 符号为标志并借用了他们所指向的值。除了引用数据没有任何其他特殊功能。它们也没有任何额外开销，所以应用得最多。")]),e._v(" "),v("p",[e._v("另一方面，"),v("strong",[e._v("智能指针")]),e._v("（"),v("em",[e._v("smart pointers")]),e._v("）是一类数据结构，他们的表现类似指针，但是也拥有额外的元数据和功能。智能指针的概念并不为 Rust 所独有；其起源于 C++ 并存在于其他语言中。Rust 标准库中不同的智能指针提供了多于引用的额外功能。本章将会探索的一个例子便是 "),v("strong",[e._v("引用计数")]),e._v(" （"),v("em",[e._v("reference counting")]),e._v("）智能指针类型，其允许数据有多个所有者。引用计数智能指针记录总共有多少个所有者，并当没有任何所有者时负责清理数据。")]),e._v(" "),v("p",[e._v("在 Rust 中，普通引用和智能指针的一个额外的区别是引用是一类只借用数据的指针；相反，在大部分情况下，智能指针 "),v("strong",[e._v("拥有")]),e._v(" 他们指向的数据。")]),e._v(" "),v("p",[e._v("实际上本书中已经出现过一些智能指针，比如第八章的 "),v("code",[e._v("String")]),e._v(" 和 "),v("code",[e._v("Vec<T>")]),e._v("，虽然当时我们并不这么称呼它们。这些类型都属于智能指针因为它们拥有一些数据并允许你修改它们。它们也带有元数据（比如他们的容量）和额外的功能或保证（"),v("code",[e._v("String")]),e._v(" 的数据总是有效的 UTF-8 编码）。")]),e._v(" "),v("p",[e._v("智能指针通常使用结构体实现。智能指针区别于常规结构体的显著特性在于其实现了 "),v("code",[e._v("Deref")]),e._v(" 和 "),v("code",[e._v("Drop")]),e._v(" trait。"),v("code",[e._v("Deref")]),e._v(" trait 允许智能指针结构体实例表现的像引用一样，这样就可以编写既用于引用、又用于智能指针的代码。"),v("code",[e._v("Drop")]),e._v(" trait 允许我们自定义当智能指针离开作用域时运行的代码。本章会讨论这些 trait 以及为什么对于智能指针来说他们很重要。")]),e._v(" "),v("p",[e._v("考虑到智能指针是一个在 Rust 经常被使用的通用设计模式，本章并不会覆盖所有现存的智能指针。很多库都有自己的智能指针而你也可以编写属于你自己的智能指针。这里将会讲到的是来自标准库中最常用的一些：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("Box<T>")]),e._v("，用于在堆上分配值")]),e._v(" "),v("li",[v("code",[e._v("Rc<T>")]),e._v("，一个引用计数类型，其数据可以有多个所有者")]),e._v(" "),v("li",[v("code",[e._v("Ref<T>")]),e._v(" 和 "),v("code",[e._v("RefMut<T>")]),e._v("，通过 "),v("code",[e._v("RefCell<T>")]),e._v(" 访问。（ "),v("code",[e._v("RefCell<T>")]),e._v(" 是一个在运行时而不是在编译时执行借用规则的类型）。")])]),e._v(" "),v("p",[e._v("另外我们会涉及 "),v("strong",[e._v("内部可变性")]),e._v("（"),v("em",[e._v("interior mutability")]),e._v("）模式，这是不可变类型暴露出改变其内部值的 API。我们也会讨论 "),v("strong",[e._v("引用循环")]),e._v("（"),v("em",[e._v("reference cycles")]),e._v("）会如何泄漏内存，以及如何避免。")]),e._v(" "),v("p",[e._v("让我们开始吧！")])])}),[],!1,null,null,null);_.default=r.exports}}]);