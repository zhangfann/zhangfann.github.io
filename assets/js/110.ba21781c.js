(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{492:function(t,e,r){"use strict";r.r(e);var a=r(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("构建一套属于你自己的小型仿真威胁狩猎平台")]),t._v(" "),r("p",[t._v("本文主要讲述如何在自己本地构建起一套小型威胁狩猎平台。")]),t._v(" "),r("h2",{attrs:{id:"_0x01-前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_0x01-前言"}},[t._v("#")]),t._v(" 0x01 前言")]),t._v(" "),r("p",[t._v("本文主要讲述如何在自己本地构建起一套小型威胁狩猎平台，同时你也可以基于该小型威胁狩猎平台来辅助你理解 ATT&CK 相关技战术，并了解蓝队视角下红队攻击技术可能会带来哪些痕迹。")]),t._v(" "),r("h2",{attrs:{id:"_0x02-平台架构-构建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_0x02-平台架构-构建"}},[t._v("#")]),t._v(" 0x02 平台架构 / 构建")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image.3001.net/images/20211105/1636076658_61848c726d17f14356f3b.jpg!small",alt:"img"}})]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统")]),t._v(" "),r("th",[t._v("功能角色")]),t._v(" "),r("th",[t._v("采集数据")]),t._v(" "),r("th",[t._v("插件配置")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows server 2012")]),t._v(" "),r("td",[t._v("域控服务器")]),t._v(" "),r("td",[t._v("Windows event log、Sysmon_log")]),t._v(" "),r("td",[t._v("Splunk_forwarder、Sysmon")])]),t._v(" "),r("tr",[r("td",[t._v("Windows server 2016")]),t._v(" "),r("td",[t._v("域内主机")]),t._v(" "),r("td",[t._v("Windows event log、Sysmon_log")]),t._v(" "),r("td",[t._v("Splunk_forwarder、Sysmon")])]),t._v(" "),r("tr",[r("td",[t._v("Ubuntu 18.04")]),t._v(" "),r("td",[t._v("Linux 主机")]),t._v(" "),r("td",[t._v("System_log、Audit_log")]),t._v(" "),r("td",[t._v("Audit、Splunk_forwarder")])]),t._v(" "),r("tr",[r("td",[t._v("Ubuntu 18.04")]),t._v(" "),r("td",[t._v("Soc 服务器")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Splunk Free")])]),t._v(" "),r("tr",[r("td",[t._v("Kali linux")]),t._v(" "),r("td",[t._v("模拟 Red Team")]),t._v(" "),r("td"),t._v(" "),r("td")])])]),t._v(" "),r("h3",{attrs:{id:"环境构建说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境构建说明"}},[t._v("#")]),t._v(" 环境构建说明：")]),t._v(" "),r("p",[t._v("1、模拟部署 Windows AD 域环境，并在域环境下开启 Windows 日志审核策略，并部署 Sysmon 作为 Windows 日志的补充。部署 Splunk 日志转发工具，转发 Windows event_log 和 Sysmon_log 至 Soc 平台；")]),t._v(" "),r("p",[t._v("2、部署 Ubuntu18.04，并安装 Splunk Free，作为 Soc 平台，收集域内主机日志，并对模拟攻击行为产生的数据进行分析。")]),t._v(" "),r("p",[t._v("3、Kali linux 作为模拟 Red Team 的攻击机，本次测试直接使用 Atomic Red Team 在 Windows server 2016 上进行本地测试。也可以使用远程测试，把相关测试文件部署在 Kali linux 上。")]),t._v(" "),r("h2",{attrs:{id:"_0x03-模拟狩猎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_0x03-模拟狩猎"}},[t._v("#")]),t._v(" 0x03 模拟狩猎")]),t._v(" "),r("p",[t._v("在接下来的例子中我们将会模拟使用 Atomic Red Team 在 Windows server 2016 上模拟 T1069-002 权限组发现。")]),t._v(" "),r("h3",{attrs:{id:"阶段-1-t1069-002-介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#阶段-1-t1069-002-介绍"}},[t._v("#")]),t._v(" 阶段 1：T1069.002 介绍")]),t._v(" "),r("p",[t._v("攻击者可能会尝试查找域级别的组和权限设置。域级别的权限组的信息可以帮助攻击者确定存在哪些组以及哪些用户属于特定组。攻击者可以使用此信息来确定哪些用户具有提升的权限，例如域管理员。")]),t._v(" "),r("p",[t._v("在 Windows 操作系统上可以使用 net group /domain 命令进行查找，在 Mac 操作系统上使用 dscacheutil -q group 命令、Linux 上可以使用 ldapsearch 命令查找。")]),t._v(" "),r("h3",{attrs:{id:"阶段-2-执行测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#阶段-2-执行测试"}},[t._v("#")]),t._v(" 阶段 2：执行测试")]),t._v(" "),r("p",[t._v("本次模拟主要为 Atomic Red Team 项目中的 T1069-002 第一个测试项，该测试项包含以下命令：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('net localgroup\nnet group /domain\nnet group "domain admins" /domain\nnet group "enterprise admins" /domain\n')])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br")])]),r("p",[t._v("执行模拟测试：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("Invoke-AtomicTest T1069.002 -TestNumbers 1\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:"https://image.3001.net/images/20211105/1636076693_61848c95a7c3d301deeb6.jpg!small",alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"阶段-3-分析及检测"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#阶段-3-分析及检测"}},[t._v("#")]),t._v(" 阶段 3：分析及检测")]),t._v(" "),r("p",[t._v("测试命令执行后，数据采集器将会采集 windows 安全日志 / Sysmon 日志，并发送至 SOC 平台。SOC 平台将会收集到攻击所使用的命令以及基本的进程信息。我们可以在这里提取到许多有价值的信息，包括一些进程调用、命令行参数。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image.3001.net/images/20211105/1636076706_61848ca2b5b0767861042.jpg!small",alt:"img"}})]),t._v(" "),r("p",[t._v("对数据的挖掘和分析，有助于帮助我们观察攻击中的载荷信息。直观的观察到攻击的执行流程，从 powershell.exe 的进程启用，到调用 cmd.exe、net.exe、net1.exe 等进程，再到具体命令的执行。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image.3001.net/images/20211105/1636076725_61848cb5a038661e525e2.jpg!small",alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"阶段-4-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#阶段-4-总结"}},[t._v("#")]),t._v(" 阶段 4：总结")]),t._v(" "),r("p",[t._v("在完成一次简单的模拟测试之后，你可以，分析哪些字段可以用于生成告警规则，以便于你在真实的生产环境中检测该攻击事件的发生。当然，真实的攻击并非这么简单，因此需要你不断的进行学习红队的相关技术，分析其攻击行为特征。")]),t._v(" "),r("h2",{attrs:{id:"_0x04-最后"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_0x04-最后"}},[t._v("#")]),t._v(" 0x04 最后")]),t._v(" "),r("p",[t._v("通过这篇文章，你可以简单的利用自己的资源部署一套小型仿真威胁狩猎平台，来模拟各种攻击手法，并分析相关特征。同时，也可以辅助你来理解 ATT&CK 相关技战术手法。")]),t._v(" "),r("p",[t._v("基于这套小型仿真威胁狩猎平台，你还可以做更多的事情，值得你去发掘，比如利用 Sysmon、Audit 日志等，去做更有意义的事情。")]),t._v(" "),r("h2",{attrs:{id:"_0x05-参考文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_0x05-参考文章"}},[t._v("#")]),t._v(" 0x05 参考文章")]),t._v(" "),r("p",[t._v("Sysmon 使用社区指南")]),t._v(" "),r("p",[t._v("https://mp.weixin.qq.com/s/yloFDpJ6wvFZymzqCRtbBQ")]),t._v(" "),r("p",[t._v("windows 基本审核策略")]),t._v(" "),r("p",[t._v("https://docs.microsoft.com/zh-cn/windows/security/threat-protection/auditing/basic-security-audit-policies")]),t._v(" "),r("p",[t._v("Atomic Red Team")]),t._v(" "),r("p",[t._v("https://github.com/redcanaryco/atomic-red-team/")]),t._v(" "),r("p",[t._v("Threathunting-book")]),t._v(" "),r("p",[t._v("全文完")]),t._v(" "),r("p",[t._v("本文由 "),r("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[t._v("简悦 SimpRead"),r("OutboundLink")],1),t._v(" 优化，用以提升阅读体验")]),t._v(" "),r("p",[t._v("使用了 全新的简悦词法分析引擎 beta，"),r("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),r("OutboundLink")],1),t._v("详细说明")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.freebuf.com/articles/endpoint/303763.html#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("0x01 前言"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.freebuf.com/articles/endpoint/303763.html#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("0x02 平台架构 / 构建"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.freebuf.com/articles/endpoint/303763.html#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("环境构建说明："),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.freebuf.com/articles/endpoint/303763.html#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("0x03 模拟狩猎"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.freebuf.com/articles/endpoint/303763.html#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("阶段 1：T1069.002 介绍"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.freebuf.com/articles/endpoint/303763.html#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("阶段 2：执行测试"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.freebuf.com/articles/endpoint/303763.html#sr-toc-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("阶段 3：分析及检测"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.freebuf.com/articles/endpoint/303763.html#sr-toc-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("阶段 4：总结"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.freebuf.com/articles/endpoint/303763.html#sr-toc-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("0x04 最后"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.freebuf.com/articles/endpoint/303763.html#sr-toc-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("0x05 参考文章"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);