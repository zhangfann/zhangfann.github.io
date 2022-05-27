(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{436:function(e,s,a){"use strict";a.r(s);var t=a(42),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("有幸参加了 Flomesh[1] 组织的 workshop，了解了他们的 Pipy 网络代理，以及围绕 Pipy 构建起来的生态。Pipy 在生态中，不止是代理的角色，还是 Flomesh 服务网格中的数据平面。")]),e._v(" "),a("p",[e._v("整理一下，做个记录，顺便瞄一下 Pipy 的部分源码。")]),e._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),a("p",[e._v("下面是摘自 Github 上关于 Pipy 的介绍：")]),e._v(" "),a("p",[e._v("Pipy 是一个轻量级、高性能、高稳定、可编程的网络代理。Pipy 核心框架使用 C++ 开发，网络 IO 采用 ASIO 库。 Pipy 的可执行文件仅有 5M 左右，运行期的内存占用 10M 左右，因此 Pipy 非常适合做 Sidecar proxy。")]),e._v(" "),a("p",[e._v("Pipy 内置了自研的 pjs 作为脚本扩展，使得 Pipy 可以用 JS 脚本根据特定需求快速定制逻辑与功能。")]),e._v(" "),a("p",[e._v("Pipy 采用了模块化、链式的处理架构，用顺序执行的模块来对网络数据块进行处理。这种简单的架构使得 Pipy 底层简单可靠，同时具备了动态编排流量的能力，兼顾了简单和灵活。通过使用 REUSE_PORT 的机制（主流 Linux 和 BSD 版本都支持该功能），Pipy 可以以多进程模式运行，使得 Pipy 不仅适用于 Sidecar 模式，也适用于大规模的流量处理场景。 在实践中，Pipy 独立部署的时候用作 “软负载”，可以在低延迟的情况下，实现媲美硬件的负载均衡吞吐能力，同时具有灵活的扩展性。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tMghG0NOfxfccGBoTG0PHr9icbByNr0opWgEH19h0aJO9L0ksWrEGxwFgicgkIR7va5KfsiafybYzDibw67zNiaNrSg/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),a("p",[e._v("Pipy 的核心是消息流处理器：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tMghG0NOfxfccGBoTG0PHr9icbByNr0opvVXCpNhZicPNyHz4HPRia78IA7mIGA5v5RjSelQgwsqteJmVcIwlcNAg/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),a("p",[e._v("Pipy 流量处理的流程：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tMghG0NOfxfccGBoTG0PHr9icbByNr0opiap9TQaWjDdZNWZlYpkDpbV4FibCyJT90Vcic0DsiceO6a3b4NV0fqwOmg/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),a("h3",{attrs:{id:"核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[e._v("#")]),e._v(" 核心概念")]),e._v(" "),a("p",[e._v("• 流（Stream）• 管道（Pipeline）• 模块（Module）• 会话（Session）• 上下文（Context）")]),e._v(" "),a("p",[e._v("以下是个人浅见：")]),e._v(" "),a("p",[e._v("Pipy 使用 "),a("code",[e._v("pjs")]),e._v(" 引擎将 JavaScript 格式的配置，解析成其抽象的 "),a("code",[e._v("Configuration")]),e._v(" 对象。每个 "),a("code",[e._v("Configuration")]),e._v(" 中包含了多个 "),a("code",[e._v("Pipeline")]),e._v("，每个 "),a("code",[e._v("Configuration")]),e._v(" 中又会用到多个 "),a("code",[e._v("Filter")]),e._v("。这些都属于 Pipy 的静态配置部分。（后面会提到 Pipeline 的三种不同类型）")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tMghG0NOfxfccGBoTG0PHr9icbByNr0opgcw4UXj3ar5XHoPjll2kUqogYbQBkTH1Gj5bLZFxDguV5DWB9rQiaug/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),a("p",[e._v("而属于"),a("strong",[e._v("运行时")]),e._v("的就是流、会话和上下文了，在 Pipy 中，数据流是由对象（Pipy 的抽象）组成的。而这些对象抵达 Pipy，被抽象成不同的事件。而事件触发不同的过滤器的执行。")]),e._v(" "),a("p",[e._v("我个人更喜欢将其核心理解为：对数据流的事件处理引擎。")]),e._v(" "),a("p",[e._v("理解归理解，实践出真知。“大胆假设，小心求证！”")]),e._v(" "),a("h2",{attrs:{id:"本地编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地编译"}},[e._v("#")]),e._v(" 本地编译")]),e._v(" "),a("p",[e._v("从编译 Pipy 开始。")]),e._v(" "),a("h3",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[e._v("#")]),e._v(" 环境准备")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#安装 nodejs\n$ nvm install lts/erbium \n#安装 cmake\n$ brew install cmake\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h3",{attrs:{id:"编译-pipy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译-pipy"}},[e._v("#")]),e._v(" 编译 Pipy")]),e._v(" "),a("p",[e._v("从 "),a("code",[e._v("https://github.com/flomesh-io/pipy.git")]),e._v(" 克隆代码。")]),e._v(" "),a("p",[e._v("Pipy 的编译包括了两个部分，GUI 和 Pipy 本体。")]),e._v(" "),a("p",[e._v("GUI 是 Pipy 提供的一个用于开发模式下进行配置的界面，首先编译 Pipy GUI。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# pipy root folder\n$ cd gui\n$ npm install\n$ npm run build\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("接着编译 Pipy 的本体")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# pipy root folder\n$ mkdir build\n$ cd build\n$ cmake -DCMAKE_BUILD_TYPE=Release -DPIPY_GUI=ON ..\n$ make\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("完成后检查根目录下的 "),a("code",[e._v("bin")]),e._v(" 目录，可以看到 pipy 的可执行文件，大小只有 11M。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tMghG0NOfxfccGBoTG0PHr9icbByNr0opSczpVXXlezpqbjnICCIwV8CBqKicz1CHtuoa0l6K9tawoFOwf3sNPbg/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ bin/pipy --help\nUsage: pipy [options] <script filename>\nOptions:\n  -h, -help, --help                    Show help information\n  -v, -version, --version              Show version information\n  --list-filters                       List all filters\n  --help-filters                       Show detailed usage information for all filters\n  --log-level=<debug|info|warn|error>  Set the level of log output\n  --verify                             Verify configuration only\n  --reuse-port                         Enable kernel load balancing for all listening ports\n  --gui-port=<port>                    Enable web GUI on the specified port\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("h3",{attrs:{id:"demo-hello-pipy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo-hello-pipy"}},[e._v("#")]),e._v(" Demo：Hello Pipy")]),e._v(" "),a("p",[e._v("开发模式下可以让 Pipy 携带 GUI 启动，通过 GUI 进行配置。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#指定 gui 的端口为 6060，从 test 目录中加载配置\n$ bin/pipy --gui-port=6060 test/\n2021-05-30 22:48:41 [info] [gui] Starting GUI service...\n2021-05-30 22:48:41 [info] [listener] Listening on 0.0.0.0:6060\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("浏览器中打开")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tMghG0NOfxfccGBoTG0PHr9icbByNr0opPDicdPkf5a90rACSPvqxiapxatbUHmB32CnF0BQJpXxcCPSc8a2z8azw/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),a("p",[e._v("配置界面")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tMghG0NOfxfccGBoTG0PHr9icbByNr0op3kXZslyBVsyOR5z3PWN1D5ib9fiaialKpxYAdNCARTQtHlnXOu1xQBmkQ/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),a("p",[e._v("展开 "),a("code",[e._v("002-hello")]),e._v(" 子目录点选 "),a("code",[e._v("pipy")]),e._v(" 并点击运行按钮：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tMghG0NOfxfccGBoTG0PHr9icbByNr0opNVFwB04nMWFJgUJ8HUKQEL7oibOJEDLX4Fucic0BZmSY9caDIRbVXm0g/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ curl -i localhost:6080\nHTTP/1.1 200 OK\nConnection: keep-alive\nContent-Length: 7\nHello!\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"pipy-过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pipy-过滤器"}},[e._v("#")]),e._v(" Pipy 过滤器")]),e._v(" "),a("p",[e._v("通过 pipe 的命令可以输出其支持的过滤器列表，一共 31 个。通过将一系列过滤器进行组装，可以实现复杂的流处理。")]),e._v(" "),a("p",[e._v("比如 "),a("code",[e._v("007-logging")]),e._v(" 的配置实现了日志的功能：记录请求和响应的数据，并批量发送到 ElasticSearch。这里就用到了 "),a("code",[e._v("fork")]),e._v("、"),a("code",[e._v("connect")]),e._v("、"),a("code",[e._v("onSessionStart")]),e._v("、"),a("code",[e._v("encodeHttpRequest")]),e._v("、"),a("code",[e._v("decodeHttpRequest")]),e._v("、"),a("code",[e._v("onMessageStart")]),e._v("、"),a("code",[e._v("onMessage")]),e._v("、"),a("code",[e._v("decodeHttpResponse")]),e._v("、"),a("code",[e._v("replaceMessage")]),e._v("、"),a("code",[e._v("link")]),e._v("、"),a("code",[e._v("mux")]),e._v("、"),a("code",[e._v("task")]),e._v(" 等十多种过滤器。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tMghG0NOfxfccGBoTG0PHr9icbByNr0opnp5YWibdtqEkiaicyjtXb9OBYkQGgQjbzGdLM8cFiabhRQPmTOLzHINZnw/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ bin/pipy --list-filters\nconnect             (target[, options])                         Sends data to a remote endpoint and receives data from it\ndemux               (target)                                    Sends messages to a different pipline with each one in its own session and context\ndecodeDubbo         ()                                          Deframes a Dubbo message\ndecodeHttpRequest   ()                                          Deframes an HTTP request message\ndecodeHttpResponse  ()                                          Deframes an HTTP response message\ndummy               ()                                          Eats up all events\ndump                ([tag])                                     Outputs events to the standard output\nencodeDubbo         ([head])                                    Frames a Dubbo message\nencodeHttpRequest   ([head])                                    Frames an HTTP request message\nencodeHttpResponse  ([head])                                    Frames an HTTP response message\nexec                (command)                                   Spawns a child process and connects to its input/output\nfork                (target[, sessionData])                     Sends copies of events to other pipeline sessions\nlink                (target[, when[, target2[, when2, ...]]])   Sends events to a different pipeline\nmux                 (target[, selector])                        Sends messages from different sessions to a shared pipeline session\nonSessionStart      (callback)                                  Handles the initial event in a session\nonData              (callback)                                  Handles a Data event\nonMessageStart      (callback)                                  Handles a MessageStart event\nonMessageEnd        (callback)                                  Handles a MessageEnd event\nonSessionEnd        (callback)                                  Handles a SessionEnd event\nonMessageBody       (callback)                                  Handles a complete message body\nonMessage           (callback)                                  Handles a complete message including the head and the body\nprint               ()                                          Outputs raw data to the standard output\nreplaceSessionStart (callback)                                  Replaces the initial event in a session\nreplaceData         ([replacement])                             Replaces a Data event\nreplaceMessageStart ([replacement])                             Replaces a MessageStart event\nreplaceMessageEnd   ([replacement])                             Replaces a MessageEnd event\nreplaceSessionEnd   ([replacement])                             Replaces a SessionEnd event\nreplaceMessageBody  ([replacement])                             Replaces an entire message body\nreplaceMessage      ([replacement])                             Replaces a complete message including the head and the body\ntap                 (quota[, account])                          Throttles message rate or data rate\nuse                 (module, pipeline[, argv...])               Sends events to a pipeline in a different module\nwait                (condition)                                 Buffers up events until a condition is fulfilled\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br")])]),a("h3",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[e._v("#")]),e._v(" 原理")]),e._v(" "),a("p",[e._v("“Talk is cheap, show me the code.”")]),e._v(" "),a("h4",{attrs:{id:"配置加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置加载"}},[e._v("#")]),e._v(" 配置加载")]),e._v(" "),a("p",[e._v("个人比较喜欢看源码来理解实现，即使是 C++。从浏览器请求入手发现运行时向"),a("code",[e._v("/api/program")]),e._v(" 发送了 "),a("code",[e._v("POST")]),e._v(" 请求，请求的内容是配置文件的地址。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tMghG0NOfxfccGBoTG0PHr9icbByNr0opLZ1MEUzMNuHeFicJ27c0Rn3fibbB0Z2zGE425j1DndJK2yKUumliaKLTA/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),a("p",[e._v("检查源码后，找到逻辑的实现在 "),a("code",[e._v("src/gui.cpp:189")]),e._v("：")]),e._v(" "),a("p",[e._v("\\1. 创建新的 worker2. 加载配置，将 JavaScrip 代码解析成 "),a("code",[e._v("Configuration")]),e._v(" 对象 3. 启动 worker，执行"),a("code",[e._v("Configuration::apply()")]),e._v("4. 卸载旧的 worker")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tMghG0NOfxfccGBoTG0PHr9icbByNr0opWlcDZick9NtCb2GW1s9wVfj6PDX4ncMPJsicPibQ2V8rgWzXJaia4I2uwA/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),a("p",[e._v("从 "),a("code",[e._v("src/api/configuration.cpp:267")]),e._v(" 处看："),a("code",[e._v("pipeline")]),e._v("、"),a("code",[e._v("listen")]),e._v(" 和 "),a("code",[e._v("task")]),e._v(" 配置实际在 Pipy 的配置中都是被抽象为 "),a("code",[e._v("Pipeline")]),e._v(" 对象，只是在类型上有差异分别为："),a("code",[e._v("NAMED")]),e._v("、"),a("code",[e._v("LISTEN")]),e._v(" 和 "),a("code",[e._v("TASK")]),e._v("。比如 "),a("code",[e._v("listen")]),e._v(" 中可以通过 "),a("code",[e._v("fork")]),e._v(" 过滤器将事件的副本发送到指定的 "),a("code",[e._v("pipeline")]),e._v(" 中。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tMghG0NOfxfccGBoTG0PHr9icbByNr0oppiblzfj5LibLiaqvG9cNiciaDgsLicbKu5sWjWib25V5DuTicEOg3gLsNBAwQg/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),a("h4",{attrs:{id:"基于数据流事件的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于数据流事件的处理"}},[e._v("#")]),e._v(" 基于数据流事件的处理")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("src/inbound.cpp:171\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tMghG0NOfxfccGBoTG0PHr9icbByNr0opjIic4ddAgCbcyxagzqWtYHEYLlWbnUZe2N3m6k9ibgibibGB9ZZckBRMOA/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),a("h2",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),a("p",[e._v("Pipy 虽小（只有 11M），但以其可编程的特性提供了灵活的配置能力，潜力无限。")]),e._v(" "),a("p",[e._v("Pipy 像处理 HTTP 一样处理任意的七层协议。内部版本支持 Dubbo、Redis、Socks 等，目前正在迁移到开源版本。")]),e._v(" "),a("p",[e._v("期待即将开源的 Portal，以及服务网格 Flomesh。持续关注，后面考虑再写几篇。")]),e._v(" "),a("p",[e._v("“未来可期！”")]),e._v(" "),a("h4",{attrs:{id:"引用链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用链接"}},[e._v("#")]),e._v(" 引用链接")]),e._v(" "),a("p",[a("code",[e._v("[1]")]),e._v(" Flomesh: "),a("em",[e._v("https://flomesh.cn/")])]),e._v(" "),a("p",[e._v("全文完")]),e._v(" "),a("p",[e._v("本文由 "),a("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[e._v("简悦 SimpRead"),a("OutboundLink")],1),e._v(" 优化，用以提升阅读体验")]),e._v(" "),a("p",[e._v("使用了 全新的简悦词法分析引擎 beta，"),a("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看"),a("OutboundLink")],1),e._v("详细说明")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5OTg2MTM0MQ==&mid=2247484191&idx=1&sn=d25dd35ac1ce8e2fff1bc513a81e6c3f&scene=21#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("介绍"),a("OutboundLink")],1),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5OTg2MTM0MQ==&mid=2247484191&idx=1&sn=d25dd35ac1ce8e2fff1bc513a81e6c3f&scene=21#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("核心概念"),a("OutboundLink")],1),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5OTg2MTM0MQ==&mid=2247484191&idx=1&sn=d25dd35ac1ce8e2fff1bc513a81e6c3f&scene=21#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("本地编译"),a("OutboundLink")],1),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5OTg2MTM0MQ==&mid=2247484191&idx=1&sn=d25dd35ac1ce8e2fff1bc513a81e6c3f&scene=21#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[e._v("环境准备"),a("OutboundLink")],1),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5OTg2MTM0MQ==&mid=2247484191&idx=1&sn=d25dd35ac1ce8e2fff1bc513a81e6c3f&scene=21#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[e._v("编译 Pipy"),a("OutboundLink")],1),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5OTg2MTM0MQ==&mid=2247484191&idx=1&sn=d25dd35ac1ce8e2fff1bc513a81e6c3f&scene=21#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo：Hello Pipy"),a("OutboundLink")],1),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5OTg2MTM0MQ==&mid=2247484191&idx=1&sn=d25dd35ac1ce8e2fff1bc513a81e6c3f&scene=21#sr-toc-6",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pipy 过滤器"),a("OutboundLink")],1),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5OTg2MTM0MQ==&mid=2247484191&idx=1&sn=d25dd35ac1ce8e2fff1bc513a81e6c3f&scene=21#sr-toc-7",target:"_blank",rel:"noopener noreferrer"}},[e._v("原理"),a("OutboundLink")],1),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5OTg2MTM0MQ==&mid=2247484191&idx=1&sn=d25dd35ac1ce8e2fff1bc513a81e6c3f&scene=21#sr-toc-8",target:"_blank",rel:"noopener noreferrer"}},[e._v("配置加载"),a("OutboundLink")],1),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5OTg2MTM0MQ==&mid=2247484191&idx=1&sn=d25dd35ac1ce8e2fff1bc513a81e6c3f&scene=21#sr-toc-9",target:"_blank",rel:"noopener noreferrer"}},[e._v("基于数据流事件的处理"),a("OutboundLink")],1),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5OTg2MTM0MQ==&mid=2247484191&idx=1&sn=d25dd35ac1ce8e2fff1bc513a81e6c3f&scene=21#sr-toc-10",target:"_blank",rel:"noopener noreferrer"}},[e._v("结语"),a("OutboundLink")],1),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5OTg2MTM0MQ==&mid=2247484191&idx=1&sn=d25dd35ac1ce8e2fff1bc513a81e6c3f&scene=21#sr-toc-11",target:"_blank",rel:"noopener noreferrer"}},[e._v("引用链接"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);