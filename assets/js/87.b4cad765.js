(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{469:function(e,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://img2.tuicool.com/U3UnMvv.png!web",alt:"img"}})]),e._v(" "),a("h2",{attrs:{id:"微服务监控的挑战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务监控的挑战"}},[e._v("#")]),e._v(" 微服务监控的挑战")]),e._v(" "),a("p",[e._v("监控的目的是为了让集群中所有的服务组件，不管是 HTTP 服务，数据库服务，还是中间件服务。都能够健康稳定的运行，能发现问题，遇到问题能找到原因。在过去，监控工具侧重于基础设施或单一软件组件以及衡量运营健康。这些工具在实现这一目标方面只取得了一定的成功，但是对于单一的，传统的应用程序和基础设施来说效果不错。微服务的出现暴露了工具中的弱点。现在，组件托管在位于私有云，公共云或两者的混合体之间的虚拟化机器或容器内。获悉我并不需要关心服务 cpu 用了多少，内存用了多少？确保这些服务相互通信以提供所需的结果需要从监控的角度重要看几件事情：")]),e._v(" "),a("ol",[a("li",[e._v("微服务集群中是否所有的服务的吞吐率，响应时间都正常？")]),e._v(" "),a("li",[e._v("服务调用线中哪些线负载过大，哪些线负载过小？")]),e._v(" "),a("li",[e._v("服务的错误率，例如 HTTP 500 错误。")])]),e._v(" "),a("p",[e._v("我们想要监控分析应用，从它的服务状态出发是否更直接呢？")]),e._v(" "),a("h2",{attrs:{id:"已有监控方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已有监控方案"}},[e._v("#")]),e._v(" 已有监控方案")]),e._v(" "),a("p",[e._v("目前有些厂商提出了微服务的监控解决方案。")]),e._v(" "),a("ul",[a("li",[e._v("从 APM 角度监控服务端到端状态。")]),e._v(" "),a("li",[e._v("为每种类型服务开发 agent 收集应用状态信息。")])]),e._v(" "),a("ol",[a("li",[e._v("通过产生统一的应用日志分析监控方案")]),e._v(" "),a("li",[e._v("其他方案")])]),e._v(" "),a("p",[e._v("每一种商业或开源方案都有它的优势所在。可以根据你的需求来进行选择。例如你的所有服务都是自己研发，日志标准一致 or 能够统一处理。所有访问信息都能打出日志，那么我认为日志分析可能是你最适合的方案。但是对于公有云平台，那就不同了。")]),e._v(" "),a("h2",{attrs:{id:"好雨云帮采用的方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#好雨云帮采用的方案"}},[e._v("#")]),e._v(" 好雨云帮采用的方案")]),e._v(" "),a("p",[e._v("好雨云帮提供了公有云和私有化的部署方式，平台内部署的服务各式各样。各种通信协议，各种日志标准。我们怎么实现对所有服务的应用状态监控？好雨云帮完善的租户网络，环境隔离，因此我们提供用户在自己环境下安装自己的监控组件，我们的基础数据收集是通过网络分析。下文详细讲解：")]),e._v(" "),a("h3",{attrs:{id:"kubernetes-pod-共享机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-pod-共享机制"}},[e._v("#")]),e._v(" kubernetes POD 共享机制")]),e._v(" "),a("p",[e._v("kubernetes 中 pod 内容器共享网络空间，挂在卷等为我们监控 pod 内主服务容器提供方便。其实按照官方对 pod 的定义的使用面来说：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("* content management systems, file and data loaders, local cache managers, etc.\n* log and checkpoint backup, compression, rotation, snapshotting, etc.\n* data change watchers, log tailers, logging and monitoring adapters, event publishers, etc.\n* proxies, bridges, and adapters\n* controllers, managers, configurators, and updaters\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("pod 内除了主服务外我们可以部署一些附属服务。之前的文章我谈过使用 pod 的插件服务收集处理日志。今天我再谈使用 pod 的网络便利监控主服务应用级指标。")]),e._v(" "),a("h3",{attrs:{id:"通过共享的网卡抓包分析网络流量反应应用状况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过共享的网卡抓包分析网络流量反应应用状况"}},[e._v("#")]),e._v(" 通过共享的网卡抓包分析网络流量反应应用状况")]),e._v(" "),a("p",[e._v("我们拿一个 http 服务为例，我们监控网络流量能拿到几乎所有访问和服务返回信息。例如 1 分钟内多少 request, 分别请求哪些 path, 多长时间服务返回了。返回状态码等等信息。")]),e._v(" "),a("p",[e._v("要获得以上的数据，我们需要获取到网络包，解码网络包然后获得 http 协议数据。")]),e._v(" "),a("p",[e._v("我们 WatchData 服务容器与应用容器在同 pod 中，经过应用容器 eth0 网卡的流量我们再 WatchData 容器中 eth0 网卡获取。通过解码网络包获取 http 报文头关键信息，每一个 Response 形成一个消息发送到 server 端完成分析，存储然后形成连续的实时的监控数据。下图展现个简要的整体架构图：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img0.tuicool.com/22amuu7.png!web",alt:"img"}})]),e._v(" "),a("p",[e._v("当然，上文已经说了，我们采取此方案主要就是为了能够监控各种应用，只是 http 怎么行。不通的通信应用使用不同的通信协议，比如 mysql 的协议，mongodb 的协议。TCP/IP 网络协议栈分为应用层（Application）、传输层（Transport）、网络层（Network）和链路层（Link）四层。。我们抓取到的网络包信息也是四层模型。")]),e._v(" "),a("h3",{attrs:{id:"网络抓包-golang-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络抓包-golang-实现"}},[e._v("#")]),e._v(" 网络抓包 Golang 实现")]),e._v(" "),a("p",[e._v("使用 golang 实现网络抓包非常容易。得益于谷歌的包：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("github.com/google/gopacket\ngithub.com/google/gopacket/layers\ngithub.com/google/gopacket/pcap\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("这里我举一个监听网卡的 Demo 主要代码")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//device 网卡名\nif handle, err := pcap.OpenLive(device, int32(n.Option.Snaplen), true, n.Option.TimeOut); err != nil {\n            log.With("error", err.Error()).Errorln("PCAP OpenLive Error.")\n            return 1\n        } else if err := handle.SetBPFFilter(n.Option.Expr); err != nil { // optional\n            log.With("error", err.Error()).Errorln("PCAP SetBPFFilter Error.", n.Option.Expr)\n            return 1\n        } else {\n            log.Infoln("Start listen the device ", device)\n            packetSource := gopacket.NewPacketSource(handle, handle.LinkType())\n            go func(close chan struct{}, h *pcap.Handle) {\n                for {\n                    select {\n                    case packet := <-packetSource.Packets():\n                        n.handlePacket(packet) // Do something with a packet here.\n                    case <-close:\n                        log.Infoln("stop listen the device.")\n                        h.Close()\n                        return\n                    }\n                }\n            }(n.Option.Close, handle)\n        }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br")])]),a("p",[e._v("这段代码就是监听某个网卡，通过 n.Option.Expr 规则过滤点无用网络包，规则语法与 linux tcpdump 一样。参考： "),a("code",[e._v("PCAP-FILTER")])]),e._v(" "),a("p",[e._v("接收到网络包一般有多种类型：2 层模型的包，和 4 层模型的包。如果你不关注 tcp 握手这种类型的包你只需要关注具有四层模型的网络包。n.handlePacket(packet) 处理网络包。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('app := packet.ApplicationLayer()\n    if app != nil {\n        //log.With("type", app.LayerType().String()).Infoln("Receive a application layer packet")\n        //log.Infoln(packet.String())\n        go func() {\n            sd := &SourceData{\n                Source:      app.Payload(),\n                ReceiveDate: packet.Metadata().Timestamp,\n            }\n            tran := packet.TransportLayer()\n            if tran != nil {\n                src, dst := tran.TransportFlow().Endpoints()\n                sd.SourcePoint = &src\n                sd.TargetPoint = &dst\n                if tran.LayerType().Contains(layers.LayerTypeTCP) {\n                    tcp := &layers.TCP{}\n                    err := tcp.DecodeFromBytes(tran.LayerContents(), gopacket.NilDecodeFeedback)\n                    if err != nil {\n                        log.With("error", err.Error()).Errorln("Decode bytes to TCP error")\n                    } else {\n                        sd.TCP = tcp\n                    }\n                }\n            }\n            netL := packet.NetworkLayer()\n            if netL != nil {\n                src, dst := packet.NetworkLayer().NetworkFlow().Endpoints()\n                sd.SourceHost = &src\n                sd.TargetHost = &dst\n            }\n            decode := FindDecode(n.Option.Protocol)\n            if decode != nil {\n                decode.Decode(sd)\n            } else {\n                log.Debugf("%s protol can not be supported \\n", n.Option.Protocol)\n            }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br")])]),a("p",[e._v("如上代码简单处理四层模型网络包。一般你可以从网络层获取双方 ip 地址，从传输层获取双方端口以及 tcp 包的相关信息。从应用层获取应用数据。具体的怎么优化和实践就留给大家自己尝试吧。")]),e._v(" "),a("h2",{attrs:{id:"网络抓包监控的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络抓包监控的优缺点"}},[e._v("#")]),e._v(" 网络抓包监控的优缺点")]),e._v(" "),a("h4",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[e._v("#")]),e._v(" 优点：")]),e._v(" "),a("ul",[a("li",[e._v("应用无关性，监控工具通用性强。")]),e._v(" "),a("li",[e._v("数据全面性，你可以获取很多直接和间接反应应用状态的数据。")]),e._v(" "),a("li",[e._v("不侵入代码，一般不影响网络。")]),e._v(" "),a("li",[e._v("高并发下不影响应用。")])]),e._v(" "),a("h4",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[e._v("#")]),e._v(" 缺点：")]),e._v(" "),a("ul",[a("li",[e._v("资源消耗，抓包分析包是一个物理资源消耗的过程。")]),e._v(" "),a("li",[e._v("需要自己开发。")])]),e._v(" "),a("p",[e._v("总之，就像上文说得一样。如果你的需求只是想监控一个应用。你就别考虑这个方案了。如果你想监控集群中所有应用，你可以尝试。")]),e._v(" "),a("h2",{attrs:{id:"推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐"}},[e._v("#")]),e._v(" 推荐")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI3NTEwOTA4OQ==&mid=2649179299&idx=1&sn=1ca833f95e6e92f163e8c309228d1579&chksm=f31a212dc46da83ba128653afa72163b7e64242f999e0e4dab150b445ab9a0d4e0b2c7de7399&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Big Picture of Kubernetes"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI3NTEwOTA4OQ==&mid=2649177165&idx=1&sn=4e8dc9c679da148cba6776ddf85d8199&chksm=f31a59c3c46dd0d5758e3fecb53ebb485f984170f1786cbcf3c1cdea84c6a696b1981536a140&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes 入门培训（内含 PPT）"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("随手关注或者” 在看 “，诚挚感谢！")]),e._v(" "),a("p",[e._v("全文完")]),e._v(" "),a("p",[e._v("本文由 "),a("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[e._v("简悦 SimpRead"),a("OutboundLink")],1),e._v(" 优化，用以提升阅读体验")]),e._v(" "),a("p",[e._v("使用了 全新的简悦词法分析引擎 beta，"),a("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看"),a("OutboundLink")],1),e._v("详细说明")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.tuicool.com/articles/fmmM73B#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("微服务监控的挑战"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/fmmM73B#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("已有监控方案"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/fmmM73B#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("好雨云帮采用的方案"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/fmmM73B#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubernetes POD 共享机制"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/fmmM73B#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[e._v("通过共享的网卡抓包分析网络流量反应应用状况"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/fmmM73B#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[e._v("网络抓包 Golang 实现"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/fmmM73B#sr-toc-6",target:"_blank",rel:"noopener noreferrer"}},[e._v("网络抓包监控的优缺点"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/fmmM73B#sr-toc-7",target:"_blank",rel:"noopener noreferrer"}},[e._v("优点："),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/fmmM73B#sr-toc-8",target:"_blank",rel:"noopener noreferrer"}},[e._v("缺点："),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/fmmM73B#sr-toc-9",target:"_blank",rel:"noopener noreferrer"}},[e._v("推荐"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);