(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{488:function(t,e,_){"use strict";_.r(e);var r=_(42),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("iptables和linux内核的联系")]),t._v(" "),_("p",[t._v("iptables 在 Linux 是基本的防火墙工具，同时也是很常见的网络工作，但是 iptables 实际上只是应用层的东西，那么 iptables 是如何和 Linux 的内核网络栈联系起来的，这里我就这个问题进行一个简单的介绍。")]),t._v(" "),_("h3",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),_("p",[t._v("iptables 在 Linux 是基本的防火墙工具，同时也是很常见的网络工作，但是 iptables 实际上只是应用层的东西，那么 iptables 是如何和 Linux 的内核网络栈联系起来的，这里我就这个问题进行一个简单的介绍。")]),t._v(" "),_("h3",{attrs:{id:"netfilter-框架"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#netfilter-框架"}},[t._v("#")]),t._v(" NetFilter 框架")]),t._v(" "),_("p",[t._v("Netfilter 框架是 Linux 内核网络为应用提供的注册各种 Handler 的框架，通过 Netfilter 框架，允许用户铜鼓欧 Handler 达到控制 Linux 网络部分功能的效果。")]),t._v(" "),_("p",[t._v("常用的注入点有以下这些：")]),t._v(" "),_("ul",[_("li",[t._v("NF_IP_PRE_ROUTING: 数据包进入网络栈时就会被调用，没有任何网络决策被执行；")]),t._v(" "),_("li",[t._v("NF_IP_LOCAL_IN: 进来的数据包被确认是发给这个系统后被执行；")]),t._v(" "),_("li",[t._v("NF_IP_FORWARD: 进来的数据包被确认是发给其他主机后执行；")]),t._v(" "),_("li",[t._v("NF_IP_LOCAL_OUT: 本机创建的出去流量进入网络栈后被执行；")]),t._v(" "),_("li",[t._v("NF_IP_POST_ROUTING: 出去流量（包括本地产生的和转发的）路由完成后（放入网卡前）被执行；")])]),t._v(" "),_("h3",{attrs:{id:"iptables"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#iptables"}},[t._v("#")]),t._v(" Iptables")]),t._v(" "),_("p",[t._v("iptables 就是 Linux 内核提供给应用层用于设置 NetFliter 的工具之一，iptables 通过 "),_("code",[t._v("table")]),t._v(" 来组织规则，所谓的 table 其实就是对应的不同的功能，例如：")]),t._v(" "),_("ul",[_("li",[t._v("NAT：网络地址转换")]),t._v(" "),_("li",[t._v("Filter：过滤数据包")]),t._v(" "),_("li",[t._v("Mangle：修改数据包（主要是修改 IP Header）")]),t._v(" "),_("li",[t._v("Raw：修改原始数据包")]),t._v(" "),_("li",[t._v("Security：这个是给数据报添加 SELinux 标识的（一般用户都用不到）")])]),t._v(" "),_("p",[t._v("在每个表中，iptables 通过链来组织规则，所谓的链其实就是对应到 NetFilter 中的不同 Hook，其实就是定义规则的执行时机时机顺序：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("iptables 链")]),t._v(" "),_("th",[t._v("NetFilter Hook")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("PREROUTING")]),t._v(" "),_("td",[t._v("NF_IP_PRE_ROUTING")])]),t._v(" "),_("tr",[_("td",[t._v("INPUT")]),t._v(" "),_("td",[t._v("NF_IP_LOCAL_IN")])]),t._v(" "),_("tr",[_("td",[t._v("FORWARD")]),t._v(" "),_("td",[t._v("NF_IP_FORWARD")])]),t._v(" "),_("tr",[_("td",[t._v("OUTPUT")]),t._v(" "),_("td",[t._v("NF_IP_LOCAL_OUT")])]),t._v(" "),_("tr",[_("td",[t._v("POSTROUTING")]),t._v(" "),_("td",[t._v("NF_IP_POST_ROUTING")])])])]),t._v(" "),_("h4",{attrs:{id:"table-的运行顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#table-的运行顺序"}},[t._v("#")]),t._v(" table 的运行顺序")]),t._v(" "),_("p",[t._v("因为 table 是 iptables 才有的概念，当不同的 table 包含相同链的规则时，最终在 NetFilter 中是需要有一个顺序的，这个顺序用户是不能指定优先级的，但是 iptables 给你定义好了执行顺序，默认的顺序是这么走的：")]),t._v(" "),_("ul",[_("li",[t._v("主链是从左到右：\n"),_("ul",[_("li",[t._v("PreRouting -> Input -> Output -> PostRouting")]),t._v(" "),_("li",[t._v("PreRouting -> Forward -> PostRouting")])])]),t._v(" "),_("li",[t._v("对于每个链，执行顺序从上往下走")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Tables↓/Chains→")]),t._v(" "),_("th",[t._v("PREROUTING")]),t._v(" "),_("th",[t._v("INPUT")]),t._v(" "),_("th",[t._v("FORWARD")]),t._v(" "),_("th",[t._v("OUTPUT")]),t._v(" "),_("th",[t._v("POSTROUTING")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("(routing decision)")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("raw")]),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("(connection tracking enabled)")]),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("mangle")]),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td",[t._v("✓")])]),t._v(" "),_("tr",[_("td",[t._v("nat (DNAT)")]),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("(routing decision)")]),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("filter")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("security")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("nat (SNAT)")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✓")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("✓")])])])]),t._v(" "),_("h3",{attrs:{id:"用户自定义链"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户自定义链"}},[t._v("#")]),t._v(" 用户自定义链")]),t._v(" "),_("p",[t._v("对于 iptables 来说，所谓的规则可以理解为两部分组成，分别是：")]),t._v(" "),_("ul",[_("li",[t._v("匹配部分")]),t._v(" "),_("li",[t._v("动作部分\n"),_("ul",[_("li",[t._v("终结动作：可以马上给出结果的动作，例如默认的 ：ACCEPT，REJECT 等；")]),t._v(" "),_("li",[t._v("非终结动作：调用另外一条链的动作，直到另外一条链返回")])])])]),t._v(" "),_("p",[t._v("这里所谓的自定义链条就是"),_("strong",[t._v("非终结动作")]),t._v("，那么为什么要引入自定义链呢？")]),t._v(" "),_("h4",{attrs:{id:"引入自定义链"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#引入自定义链"}},[t._v("#")]),t._v(" 引入自定义链")]),t._v(" "),_("p",[t._v("前面说了，默认 iptables 只有 5 条链，虽然 iptables 用表来区分了，但是，还是不够，尤其是在企业级使用中（例如 Istio），往往会创建一大堆的规则，那么当我想查看某一个功能的规则的时候，可能就不好找了，所以这个自定义链就可以起作用了。我们可以将不同的应用 / 功能的规则放入单独的链中，这样我们需要修改或者查看的时候直接看对应的链就可以了，例如")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("INPUT_CHAIN_NGINX")]),t._v("：表示针对 nginx 的自定义链")]),t._v(" "),_("li",[_("code",[t._v("INPUT_CHAIN_ENVOY")]),t._v("：表示针对 envoy 的自定义链")])]),t._v(" "),_("h4",{attrs:{id:"自定义链的执行实际"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自定义链的执行实际"}},[t._v("#")]),t._v(" 自定义链的执行实际")]),t._v(" "),_("p",[t._v("因为默认情况下，iptables 只会使用 5 条默认的链，所以自定义的链是不会被执行的。如果想要执行自定义链，就需要在默认的链中主动调用自定义链（所谓的非终止动作），这样就和自定义链配合起来了。一个例子：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("[root@liqiang.io]# iptables -I INPUT -p tcp --dport 9090 -j INPUT_CHAIN_ENVOY\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("就表示在 INPUT 链中添加一个 "),_("code",[t._v("INPUT_CHAIN_ENVOY")]),t._v(" 的引用，当 INPUT 链执行的时候，对应就执行这个自定义的链。和其他链的顺序就按照前面的表格顺序执行，在 INPUT 链中的顺序就和你定义的先后顺序从旧往新执行，先执行旧的定义，再执行新的定义。")]),t._v(" "),_("h3",{attrs:{id:"连接跟踪"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连接跟踪"}},[t._v("#")]),t._v(" 连接跟踪")]),t._v(" "),_("p",[t._v("iptables 还执行连接追踪的功能，这个也是基于 NetFilter 实现的，这里连接跟踪所谓的连接不单单指我们常见的 TCP 连接，还包括 UDP，甚至 ICMP 也算，这些协议都称为"),_("strong",[t._v("可跟踪协议")]),t._v("，跟踪的基础是基于” 连接 “的元组，例如 TCP 的就是四元组 "),_("code",[t._v("<SrcIP, SrcPORT, DestIP, DestPort>")]),t._v("。")]),t._v(" "),_("h4",{attrs:{id:"连接跟踪的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连接跟踪的作用"}},[t._v("#")]),t._v(" 连接跟踪的作用")]),t._v(" "),_("p",[t._v("连接跟踪本质上还是为包的动作服务的，例如一个设置了防火墙的 Web 主机，如果我们打开了 80 端口的入口，那么对于出口是全开还是全闭，可能都不合适。那么能不能做到半开半闭，如何半开半闭这就是连接跟踪的功能了，想象一下我们要对谁开放？我们要对访问了我们 80 端口的客户端开放，那么这里就可以先跟踪成功访问 80 端口的客户端的信息，然后再定义一条针对已经打开的连接的出口规则：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("[root@liqiang.io]# iptables -A OUTPUT -m state --state NEW,RELATED -j ALLOW\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("这样就不需要针对特定的客户端来开放出口流量了。")]),t._v(" "),_("h3",{attrs:{id:"ref"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" Ref")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/a-deep-dive-into-iptables-and-netfilter-architecture",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Deep Dive into Iptables and Netfilter Architecture"),_("OutboundLink")],1)])]),t._v(" "),_("p",[t._v("全文完")]),t._v(" "),_("p",[t._v("本文由 "),_("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[t._v("简悦 SimpRead"),_("OutboundLink")],1),t._v(" 优化，用以提升阅读体验")]),t._v(" "),_("p",[t._v("使用了 全新的简悦词法分析引擎 beta，"),_("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),_("OutboundLink")],1),t._v("详细说明")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://liqiang.io/post/relation-between-iptables-and-linux-kernal#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("概述"),_("OutboundLink")],1),_("a",{attrs:{href:"https://liqiang.io/post/relation-between-iptables-and-linux-kernal#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("NetFilter 框架"),_("OutboundLink")],1),_("a",{attrs:{href:"https://liqiang.io/post/relation-between-iptables-and-linux-kernal#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Iptables"),_("OutboundLink")],1),_("a",{attrs:{href:"https://liqiang.io/post/relation-between-iptables-and-linux-kernal#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("table 的运行顺序"),_("OutboundLink")],1),_("a",{attrs:{href:"https://liqiang.io/post/relation-between-iptables-and-linux-kernal#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("用户自定义链"),_("OutboundLink")],1),_("a",{attrs:{href:"https://liqiang.io/post/relation-between-iptables-and-linux-kernal#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("引入自定义链"),_("OutboundLink")],1),_("a",{attrs:{href:"https://liqiang.io/post/relation-between-iptables-and-linux-kernal#sr-toc-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义链的执行实际"),_("OutboundLink")],1),_("a",{attrs:{href:"https://liqiang.io/post/relation-between-iptables-and-linux-kernal#sr-toc-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("连接跟踪"),_("OutboundLink")],1),_("a",{attrs:{href:"https://liqiang.io/post/relation-between-iptables-and-linux-kernal#sr-toc-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("连接跟踪的作用"),_("OutboundLink")],1),_("a",{attrs:{href:"https://liqiang.io/post/relation-between-iptables-and-linux-kernal#sr-toc-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ref"),_("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);