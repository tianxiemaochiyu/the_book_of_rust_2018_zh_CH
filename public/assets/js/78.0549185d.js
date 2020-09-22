(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{426:function(e,t,r){"use strict";r.r(t);var a=r(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"使用-cargo-install-从-crates-io-安装二进制文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-cargo-install-从-crates-io-安装二进制文件"}},[e._v("#")]),e._v(" 使用 "),r("code",[e._v("cargo install")]),e._v(" 从 Crates.io 安装二进制文件")]),e._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch14-04-installing-binaries.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ch14-04-installing-binaries.md"),r("OutboundLink")],1),e._v(" "),r("br"),e._v("\ncommit c084bdd9ee328e7e774df19882ccc139532e53d8")])]),e._v(" "),r("p",[r("code",[e._v("cargo install")]),e._v(" 命令用于在本地安装和使用二进制 crate。它并不打算替换系统中的包；它意在作为一个方便 Rust 开发者们安装其他人已经在 "),r("a",{attrs:{href:"https://crates.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),r("OutboundLink")],1),e._v(" 上共享的工具的手段。只有拥有二进制目标文件的包能够被安装。"),r("strong",[e._v("二进制目标")]),e._v(" 文件是在 crate 有 "),r("em",[e._v("src/main.rs")]),e._v(" 或者其他指定为二进制文件时所创建的可执行程序，这不同于自身不能执行但适合包含在其他程序中的库目标文件。通常 crate 的 "),r("em",[e._v("README")]),e._v(" 文件中有该 crate 是库、二进制目标还是两者都是的信息。")]),e._v(" "),r("p",[e._v("所有来自 "),r("code",[e._v("cargo install")]),e._v(" 的二进制文件都安装到 Rust 安装根目录的 "),r("em",[e._v("bin")]),e._v(" 文件夹中。如果你使用 "),r("em",[e._v("rustup.rs")]),e._v(" 安装的 Rust 且没有自定义任何配置，这将是 "),r("code",[e._v("$HOME/.cargo/bin")]),e._v("。确保将这个目录添加到 "),r("code",[e._v("$PATH")]),e._v(" 环境变量中就能够运行通过 "),r("code",[e._v("cargo install")]),e._v(" 安装的程序了。")]),e._v(" "),r("p",[e._v("例如，第十二章提到的叫做 "),r("code",[e._v("ripgrep")]),e._v(" 的用于搜索文件的 "),r("code",[e._v("grep")]),e._v(" 的 Rust 实现。如果想要安装 "),r("code",[e._v("ripgrep")]),e._v("，可以运行如下：")]),e._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ cargo install ripgrep\nUpdating registry `https://github.com/rust-lang/crates.io-index`\n Downloading ripgrep v0.3.2\n --snip--\n   Compiling ripgrep v0.3.2\n    Finished release [optimized + debuginfo] target(s) in 97.91 secs\n  Installing ~/.cargo/bin/rg\n")])])]),r("p",[e._v("最后一行输出展示了安装的二进制文件的位置和名称，在这里 "),r("code",[e._v("ripgrep")]),e._v(" 被命名为 "),r("code",[e._v("rg")]),e._v("。只要你像上面提到的那样将安装目录加入 "),r("code",[e._v("$PATH")]),e._v("，就可以运行 "),r("code",[e._v("rg --help")]),e._v(" 并开始使用一个更快更 Rust 的工具来搜索文件了！")])])}),[],!1,null,null,null);t.default=n.exports}}]);