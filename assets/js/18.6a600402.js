(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{365:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch01-01-installation.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch01-01-installation.md"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("\ncommit 27e741b227b6b946a1498ecc9d9dd1bff5819b82")])]),t._v(" "),e("p",[t._v("第一步是安装 Rust。我们通过 "),e("code",[t._v("rustup")]),t._v(" 下载 Rust，这是一个管理 Rust 版本和相关工具的命令行工具。下载时需要联网。")]),t._v(" "),e("blockquote",[e("p",[t._v("注意：如果你出于某些理由倾向于不使用 "),e("code",[t._v("rustup")]),t._v("，请到 "),e("a",{attrs:{href:"https://www.rust-lang.org/install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust 安装页面"),e("OutboundLink")],1),t._v(" 查看其它安装选项。")])]),t._v(" "),e("p",[t._v("接下来的步骤会安装最新的稳定版 Rust 编译器。Rust 的稳定性确保本书所有示例在最新版本的 Rust 中能够继续编译。不同版本的输出可能略有不同，因为 Rust 经常改进错误信息和警告。也就是说，任何通过这些步骤安装的最新稳定版 Rust，都应该能正常运行本书中的内容。")]),t._v(" "),e("blockquote",[e("h3",{attrs:{id:"命令行标记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行标记"}},[t._v("#")]),t._v(" 命令行标记")]),t._v(" "),e("p",[t._v("本章和全书中，我们会展示一些在终端中使用的命令。所有需要输入到终端的行都以 "),e("code",[t._v("$")]),t._v(" 开头。但无需输入"),e("code",[t._v("$")]),t._v("；它代表每行命令的起点。不以 "),e("code",[t._v("$")]),t._v(" 起始的行通常展示之前命令的输出。另外，PowerShell 专用的示例会采用 "),e("code",[t._v(">")]),t._v(" 而不是 "),e("code",[t._v("$")]),t._v("。")])]),t._v(" "),e("h3",{attrs:{id:"在-linux-或-macos-上安装-rustup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-linux-或-macos-上安装-rustup"}},[t._v("#")]),t._v(" 在 Linux 或 macOS 上安装 "),e("code",[t._v("rustup")])]),t._v(" "),e("p",[t._v("如果你使用 Linux 或 macOS，打开终端并输入如下命令：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ curl https://sh.rustup.rs -sSf | sh\n")])])]),e("p",[t._v("此命令下载一个脚本并开始安装 "),e("code",[t._v("rustup")]),t._v(" 工具，这会安装最新稳定版 Rust。过程中可能会提示你输入密码。如果安装成功，将会出现如下内容：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Rust is installed now. Great!\n")])])]),e("p",[t._v("如果你愿意的话，可在运行前下载并检查该脚本。")]),t._v(" "),e("p",[t._v("此安装脚本自动将 Rust 加入系统 PATH 环境变量中，在下一次登录时生效。如果你希望立刻就开始使用 Rust 而不重启终端，在 shell 中运行如下命令，手动将 Rust 加入系统 PATH 变量中：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ source $HOME/.cargo/env\n")])])]),e("p",[t._v("或者，可以在 "),e("em",[t._v("~/.bash_profile")]),t._v(" 文件中增加如下行：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ export PATH="$HOME/.cargo/bin:$PATH"\n')])])]),e("p",[t._v("另外，你需要一个某种类型的链接器（linker）。很有可能已经安装，不过当你尝试编译 Rust 程序时，却有错误指出无法执行链接器，这意味着你的系统上没有安装链接器，你需要自行安装一个。C 编译器通常带有正确的链接器。请查看你使用平台的文档，了解如何安装 C 编译器。并且，一些常用的 Rust 包依赖 C 代码，也需要安装 C 编译器。因此现在安装一个是值得的。")]),t._v(" "),e("h3",{attrs:{id:"在-windows-上安装-rustup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-windows-上安装-rustup"}},[t._v("#")]),t._v(" 在 Windows 上安装 "),e("code",[t._v("rustup")])]),t._v(" "),e("p",[t._v("在 Windows 上，前往 "),e("a",{attrs:{href:"https://www.rust-lang.org/tools/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.rust-lang.org/install.html"),e("OutboundLink")],1),t._v(" 并按照说明安装 Rust。在安装过程的某个步骤，你会收到一个信息说明为什么需要安装 Visual Studio 2013 或更新版本的 C++ build tools。获取这些 build tools 最方便的方法是安装 "),e("a",{attrs:{href:"https://www.visualstudio.com/downloads/#build-tools-for-visual-studio-2019",target:"_blank",rel:"noopener noreferrer"}},[t._v("Build Tools for Visual Studio 2019"),e("OutboundLink")],1),t._v("。这个工具在 “Other Tools and Frameworks” 部分。")]),t._v(" "),e("p",[t._v("本书的余下部分会使用能同时运行于 "),e("em",[t._v("cmd.exe")]),t._v(" 和 PowerShell 的命令。如果存在特定差异，我们会解释使用哪一个。")]),t._v(" "),e("h3",{attrs:{id:"更新和卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新和卸载"}},[t._v("#")]),t._v(" 更新和卸载")]),t._v(" "),e("p",[t._v("通过 "),e("code",[t._v("rustup")]),t._v(" 安装了 Rust 之后，很容易更新到最新版本。在 shell 中运行如下更新脚本：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ rustup update\n")])])]),e("p",[t._v("为了卸载 Rust 和 "),e("code",[t._v("rustup")]),t._v("，在 shell 中运行如下卸载脚本:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ rustup self uninstall\n")])])]),e("h3",{attrs:{id:"故障排除（troubleshooting）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#故障排除（troubleshooting）"}},[t._v("#")]),t._v(" 故障排除（Troubleshooting）")]),t._v(" "),e("p",[t._v("要检查是否正确安装了 Rust，打开 shell 并运行如下行：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ rustc --version\n")])])]),e("p",[t._v("你应能看到已发布的最新稳定版的版本号、提交哈希和提交日期，显示为如下格式：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("rustc x.y.z (abcabcabc yyyy-mm-dd)\n")])])]),e("p",[t._v("如果出现这些内容，Rust 就安装成功了！如果并没有看到这些信息，并且使用的是 Windows，请检查 Rust 是否位于 "),e("code",[t._v("%PATH%")]),t._v(" 系统变量中。如果一切正确但 Rust 仍不能使用，有许多地方可以求助。最简单的是 "),e("a",{attrs:{href:"https://discord.gg/rust-lang",target:"_blank",rel:"noopener noreferrer"}},[t._v("位于 Rust 官方 Discord"),e("OutboundLink")],1),t._v(" 上的 #beginners 频道。在这里你可以和其他 Rustacean（Rust 用户的称号，有自嘲意味）聊天并寻求帮助。其它给力的资源包括"),e("a",{attrs:{href:"https://users.rust-lang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("用户论坛"),e("OutboundLink")],1),t._v("和 "),e("a",{attrs:{href:"http://stackoverflow.com/questions/tagged/rust",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stack Overflow"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("译者：恭喜入坑！（此处应该有掌声！）")])]),t._v(" "),e("h3",{attrs:{id:"本地文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地文档"}},[t._v("#")]),t._v(" 本地文档")]),t._v(" "),e("p",[t._v("安装程序也自带一份文档的本地拷贝，可以离线阅读。运行 "),e("code",[t._v("rustup doc")]),t._v(" 在浏览器中查看本地文档。")]),t._v(" "),e("p",[t._v("任何时候，如果你拿不准标准库中的类型或函数的用途和用法，请查阅应用程序接口（application programming interface，API）文档！")])])}),[],!1,null,null,null);s.default=r.exports}}]);