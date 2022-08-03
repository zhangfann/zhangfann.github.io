(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{546:function(_,v,p){"use strict";p.r(v);var t=p(42),n=Object(t.a)({},(function(){var _=this,v=_.$createElement,p=_._self._c||v;return p("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[p("p",[_._v("初学者的 SDN 学习之路\nhttps://mp.weixin.qq.com/s/7p4W5sqQ6bOz_6waQ9wbww")]),_._v(" "),p("p",[p("strong",[_._v("编者按：")]),_._v(" 本文是旧文，但现在读来也不过时，特别是又有很多初学者加入 SDN 的学习大潮，读读过来人的经验很有作用。如果初学者觉得自学找不到方向，也可以参加培训班，由老师带你入门。目前，由 ONF 推出的 SDN 认证 OCSA 第二期培训班将于 3.21-3.23 在线直播培训，通过学习可系统地掌握传统网络的概念性知识及 SDN 理论，能在 SDN 环境下对网络进行安装和配置，了解控制及数据层面的设备，可进行初级的 SDN 实践应用，感兴趣的可报名参加。")]),_._v(" "),p("p",[_._v("Software Defined Network 顾名思义软件定义网络，可以简单地分为网络和软件两个部分：软件和网络。此外，通过使用 OpenFlow 协议来实现 SDN 是一种较为普遍的方式，所以本篇将从软件和网络以及 OpenFlow 三个方面进行介绍。在研究 SDN 的研究者之中，有相当大比例的网络工程师，他们了解网络，精通网络，然而却并不了解软件开发。除此之外，还有很大比例的研究者是软件工程师，他们软件开发能力出色，然而并不了解网络运作的机制，在接触 SDN 之前，他们的范围仅仅只是应用层，底层的东西交给全交给主机的协议栈了。还有一部分同学是像我这样，通信工程出身，学的是物理层的编码解码，误码率，电磁波。不像计算机专业那些学生一样，学习各种语言，操弄各种编译器，混迹于 github 这种全球最大的男性交友网站。剩下最后一种就是又懂网络，又懂编程。这种人，我一般称之为老师，是用来请教问题的，比如地球 - 某某老师。一般的, 他们不屑于看到这种文章，太 low。")]),_._v(" "),p("p",[p("img",{attrs:{src:"http://mmbiz.qpic.cn/mmbiz_jpg/u6UOjABnicbuEczuS8NFGNWxyOoPpZ3AzHGFe1UHq956T8HnnaBTojYn6Z0wlcLB6qnUicQdias56ruJXia5nzVTxg/0?wx_fmt=jpeg",alt:""}})]),_._v(" "),p("p",[_._v("本篇主要的目标用户是对网络和软件开发都不太了解，或者网络和编程开发只擅长一种的研究者。由于我也是一个初学者，所以仅当做经验分享吧。如有表达不对的地方，敬请指出，万分感谢。")]),_._v(" "),p("p",[p("strong",[_._v("网络")])]),_._v(" "),p("p",[_._v("软件定义网络，如果不了解网络，那如何去定义一个你不了解的东西？如果不知道网络中存在的问题，如何使用 SDN 来改善？所以网络知识至关重要。然而作为一个初学者，并不需要网络各个方面都精通，也做不到，仅需学习基础知识，并选择一个研究场景即可。")]),_._v(" "),p("p",[p("strong",[_._v("计算机网络")])]),_._v(" "),p("p",[_._v("学习网络的必修课是计算机网络。计算机网络讲述的是计算机网络的运作机制，都是极其基础重要的知识。谢希仁前辈的《计算机网络》是从底层往上层介绍，从物理层的 hub 到数据层的网桥和交换机，到网络层的路由器，最后讲到 TCP/UDP 的传输层，止于应用层，适合有通信背景的学习者。《计算机网络：自顶向下方法》则是从另一个角度出发，从应用层向下介绍，摆脱了物理层的枯燥，这样的思路更适合学习计算机出门的学习者。《CCNA 学习指南》也是推荐的书籍之一，前部分内容讲解计算机网络非常简单明了，更贴近于真实网络规划，可以当做计算机网络的进阶书籍阅读。")]),_._v(" "),p("p",[_._v("学习完计算机网络之后，学习者应该懂得二层交换、三层路由，了解到 OSI 七层协议栈，也了解了 TCP/IP，ARP,ICMP,DNS, DHCP。作为检验标准，读者可以尝试介绍一个客户端主机和跨网段的服务器进行通信的流程。")]),_._v(" "),p("p",[_._v("关于网络协议，只需了解主要的一两种，其他了解其作用即可，因为协议实在太多了，没有必要学完。RIP、BGP、OSPF 和 IS-IS 需要了解。如果研究的课题与路由协议相关，则可详细学习，初期不建议深入学习。学习成果检验是对比路由协议的差异，如 RIP 的广播路由信息和 OSPF 的告知邻居。")]),_._v(" "),p("p",[_._v("ARP,ICMP，DNS,DHCP 这几种功能型报文非常重要，均需了解其工作流程，具体的报文格式，可适当了解关键字段。项目需要时再深入研究。")]),_._v(" "),p("p",[_._v("TCP/UDP 的差别需要牢记，适合的应用场景也许了解。关于 TCP 的状态机，建议尝试记忆，TCP 的三次握手建立连接，四次握手释放连接是面试高频题。")]),_._v(" "),p("p",[_._v("应用层的仅需了解若干常用协议如 SMTP,POP3，HTTP 及其对应的传输层的端口号即可。")]),_._v(" "),p("p",[p("strong",[_._v("网络场景")])]),_._v(" "),p("p",[_._v("当学习了基础的网络知识，学习者已经具备了一定知识储备，对网络也有了基础的了解。然而现网之复杂，并不是看了一本《计算机网络》就可以了解的。网路可以按照规模分为局域网，城域网，广域网，也可以按照功能划分成接入网，传输网和核心网。当然按照场景划分就更多了。云计算网络的典型场景数据中心网络是目前研究的热门领域。以校园网为代表的园区网也是较为常见的 SDN 应用部署场景。跨数据中心的互连互通、WAN 的研究则是研究的另一个大方向。")]),_._v(" "),p("p",[_._v("选择一个自己喜欢的应用场景，进行深入研究，并根据需求学习相关知识，会大大提高学习的效率。比如我选择学习数据中心网络，所以我需要学习一些云计算的知识，需要了解数据中心中的网络架构。我推荐《腾云：云计算和大数据时代的网络技术揭秘》作为云计算网络知识的科普书籍。书中介绍了很多有用的知识，包括云计算的起源，云计算和网络的关系，网络安全，以及数据中心网络中的一些关键网络技术。读完你应该了解到什么是 TOR 和 EOR，知道了刀片服务器，了解到 VN-TAG 是用来标识虚拟机到 TOR 的流量的，了解到 VXLAN 和 NVGRE 的作用，了解到交换机还可以组装的，除了 OVS 之外还有 NEXUS 1000v 等产品。读完这本书，能对现网的一些技术，以及产品有一些科普性质的了解，对后续深入学习研究有很大帮助。")]),_._v(" "),p("p",[_._v("相信有了前面计算机网络知识作为铺垫，再选定一个特定的研究场景，网络方面的学习已经不成问题。")]),_._v(" "),p("p",[p("strong",[_._v("软件开发")])]),_._v(" "),p("p",[_._v("软件开发是 SDN 学习中另一个重要方面，这方面我同样不是行家，我也是新手，所以以下言论仅当做自己的经验介绍。")]),_._v(" "),p("p",[p("strong",[_._v("选择一门语言，选择一个控制器")])]),_._v(" "),p("p",[_._v("根据自己的喜好，选择一门语言，然后根据语言，选择一个对应的控制器，这是开发的第一步。如我自己，在折腾了 C/C++,Java,Python 之后，最终还是皈依到了 Python 大法的旗下。根据 Python 语言，我选择了由 Python 语言写的 POX。POX 无需安装，直接可以运行。同时，POX 代码简单，初学者只需阅读 pox/forwarding 文件夹下的代码即可。")]),_._v(" "),p("p",[_._v("根据我们已有的网络知识，我们基本可以看懂 pox/forwarding 文件夹下的程序逻辑。以 l2_learning.py 为例，该文件完成了一个简单的二层交换的应用，其逻辑为：记录 MAC 地址和 Port 的对应关系，转发时，查询 MactoPort 表，若查询成功，则转发，若失败则泛洪。后来 RYU 出现了，封装更好的，性能更好的 RYU 成为了我的首选。")]),_._v(" "),p("p",[_._v("在编程的过程中，需要进行程序设计，其中设计的算法以及数据结构的知识在这里不多介绍，有兴趣的读者可以自行学习。")]),_._v(" "),p("p",[p("strong",[_._v("以项目为导向，先写起来")])]),_._v(" "),p("p",[_._v("阅读源码需要有明确的目的性。最开始可以先尝试读一些简单的如 Simple switch 之类的代码，掌握一些简单的 API 的使用，理解基础的内容，然后再进行深入的源码阅读。")]),_._v(" "),p("p",[_._v("在进一步学习 SDN 开发时，建议以项目为导向，先写起来，在尝试中去解决问题。在写的过程中遇到问题再去查看源码找关键点，如此一来学习非常有效率，且学到的东西很快就可以用上，学习效果好。特别是在 OpenFlow 协议已经经过多个版本的扩张，目前内容已经非常多的情况下，选择性学习能帮助你降低学习的压力，提高学习的效率。")]),_._v(" "),p("p",[_._v("时间充裕的情况下，你可以选择好好阅读那些你认为重要的代码。比我在经历了多个 APP 开发之后，我觉得我需要好好了解一下 RYU 的内部机制了。所以我花了三天，把从底层 socket 到协议解析，到事件分发到 handler 注册的代码认真看了一遍，收益颇多。")]),_._v(" "),p("p",[p("strong",[_._v("学会 Debug")])]),_._v(" "),p("p",[_._v("写程序容易，调程序难。掌握正确的调试方法能大大提高开发的效率。")]),_._v(" "),p("p",[_._v("为提高调试的效率，在程序设计的时候就需要非常注意。写程序时需要注意程序的设计，比如成端的逻辑尽可能写成函数；一个函数不得过长，最好别超过一个屏幕的行数；尽可能模块化地编程，可以提高代码的重用率，将错误域缩小到某模块，某函数，容易定位错误。在调试的过程中，控制变量的思维方式可以大大提升效率。其他编码风格方面的要求，建议按照 google 的 PEP8 风格进行代码编写。")]),_._v(" "),p("p",[_._v("对操作系统的熟悉和理解也将大大提高开发效率。熟悉 Linux 的基本操作是必须的，如果不清楚，你可能需要自学一下 linux 和 shell。在调试的过程中，错误显示一般是英文，所以能读懂错误信息，并学会谷歌是一项必备的技能。一般的问题谷歌都可以解决。另外，加几个 SDN 的技术群也是提高 DEBUG 效率的一个重要手段。")]),_._v(" "),p("p",[_._v("关于开发的建议还有，构建一套适合自己的、高效的开发环境，以及做好版本控制。比如我自己，我只用 sublime 编译器，编译运行和调试都直接在终端中进行。版本控制使用 git。版本控制的重要性不许赘述，详情谷歌。")]),_._v(" "),p("p",[p("strong",[_._v("OpenFlow")])]),_._v(" "),p("p",[_._v("目前应用最广泛的 SDN 实现协议: OpenFlow, 是学习 SDN 中必须要学的核心内容。在设计一个 SDN 的应用时，需要以下的步骤：")]),_._v(" "),p("ol",[p("li",[p("p",[_._v("明确网络应用的逻辑")])]),_._v(" "),p("li",[p("p",[_._v("明确对应的操作所采用的 OpenFlow 报文")])]),_._v(" "),p("li",[p("p",[_._v("根据应用逻辑以及 OpenFlow 协议进行编程开发")])])]),_._v(" "),p("p",[_._v("比如一个简单的二层交换机，首先我们明确了他的运作机理是 MAC 学习和转发，然后明确转发所需要使用的 OpenFlow 报文是: packet_out 和 Flow_mod，最后根据应用逻辑以及 OpenFlow 协议对应的报文，进行编程开发。")]),_._v(" "),p("p",[_._v("所以我们可以知道 OpenFlow 在 SDN 应用中的重要性。")]),_._v(" "),p("p",[_._v("OpenFlow 经过这几年的发展已经从 1.0 版本发展到了 1.5 版本，初学者在学习的时候需要注意顺序。建议先学习 OF1.0 版本，再学习 OF1.3 版本，更高版本根据需要进行学习。")]),_._v(" "),p("p",[_._v("OpenFlow1.0 版本是 OpenFlow 火起来时的第一个版本，其内容并不多，Match 域仅有 12 个字段，动作种类也不多，同时也是单流表。对于初学者而言，学习 1.0 版本可以大大降低学习压力，掌握 OpenFlow 核心内容。在正确理解 SDN，以及可以使用 OpenFlow1.0 协议开发 SDN 应用之后，可尝试学习 1.3 版本协议。1.3 版本较 1.0 版本内容大幅增加。经过几个版本的迭代，OpenFlow1.3 版本协议已经有了三种表：")]),_._v(" "),p("p",[_._v("1)flow table")]),_._v(" "),p("p",[_._v("2)group table")]),_._v(" "),p("p",[_._v("3)meter table")]),_._v(" "),p("p",[_._v("动作种类也得到了拓展，多流表的概念也变得成熟，Match 匹配域已经多达几十个，所以这时 OpenFlow 已经将 Match 域分成几类, 并以 OXM 的形式呈现出来。多控制器写作的概念在 1.3 版本中也已经相当成熟。")]),_._v(" "),p("p",[_._v("OpenFlow1.3 版本为 SDN 应用开发提供了很多便捷，开发人员可以利用多流表，设计更多复杂的应用逻辑。作为一个比较稳定的版本，1.3 版本成为继 1.0 版本之后控制器支持最多的版本，所以此版本是 SDN 学习者应该要学习的。")]),_._v(" "),p("p",[_._v("总结")]),_._v(" "),p("p",[_._v("SDN 学习与其他研究方向相比，要求较高，需要了解软件开发以及网络，学习起来，并不太容易。同样作为初学者，我从大三开始接触，有幸有学长带着入门，再后来由于网络知识的缺陷，一度陷入不知道做什么的状态。恶补了网络知识之后，才慢慢走上正轨。然后最近我又遇到了编程上的难题，急需恶补，急需努力提升自己的开发能力。本篇学习笔记，是几年来学习的粗略总结，希望对 SDN 初学者有帮助。")]),_._v(" "),p("p",[_._v("最后，兴趣是最好的老师，如果你喜欢 SDN 这个方向，就会学得很快，比如最近一个学弟兼老乡北邮 - 毛健炜就进步飞快。如果在学习的过程中没有成就感，没有乐趣，也可以试试别的方向，做自己喜欢的事最重要。")]),_._v(" "),p("p",[_._v("作者简介：李呈，2014/09 - 至今，北京邮电大学信息与通信工程学院未来网络理论与应用实验室（FNL 实验室）攻读硕士研究生。")]),_._v(" "),p("p",[_._v("特别链接：OCSA 第二期培训班 (课程链接见 "),p("strong",[_._v("阅读原文")]),_._v("）")]),_._v(" "),p("p",[_._v("开课时间")]),_._v(" "),p("p",[_._v("2017-03-21 到 2017-03-23")]),_._v(" "),p("p",[_._v("课程价格")]),_._v(" "),p("p",[_._v("人民币 599 元")]),_._v(" "),p("p",[_._v("优惠活动：")]),_._v(" "),p("ol",[p("li",[p("p",[_._v("早鸟票优惠：3 月 1 日前报名，可享受课程费用优惠价 499 元 / 人。")])]),_._v(" "),p("li",[p("p",[_._v("推荐有奖：推荐身边同学 / 朋友一块报名，推荐人与被推荐人双双享受 9 折报名优惠。")])]),_._v(" "),p("li",[p("p",[_._v("分享有奖：将本课程链接：http://edu.sdnlab.com/training/153.html 发至微信朋友圈，点赞数达 10 个，即可享受报名费 9 折优惠。")])]),_._v(" "),p("li",[p("p",[_._v("以上 1-3 条优惠，可同时享受。")])]),_._v(" "),p("li",[p("p",[_._v("团购优惠：同一账户一次性下单超过 5 人（含 5 人），即可享受课程费用 8 折优惠。")])])]),_._v(" "),p("p",[_._v("团购优惠可与早鸟票优惠同时享受，但选择 “团购优惠” 时不能享受 “推荐有奖” 或“分享有奖”优惠。")]),_._v(" "),p("p",[_._v("备注：符合条件者报名时可联系陈老师（QQ 号：76123961）修改订单价。")]),_._v(" "),p("p",[_._v("认证价格")]),_._v(" "),p("p",[_._v("人民币 1299 元")]),_._v(" "),p("ol",[p("li",[p("p",[_._v("报名本课程的学员可自愿申请是否报考 OCSA 考试。")])]),_._v(" "),p("li",[p("p",[_._v("学员可通过 SDNLAB 报名参加 OCSA 考试，价格为人民币 1299 元。")])]),_._v(" "),p("li",[p("p",[_._v("考试通过后，将获得由 ONF 颁发的 OCSA 证书（带编号）。")])])]),_._v(" "),p("p",[p("img",{attrs:{src:"http://mmbiz.qpic.cn/mmbiz_png/u6UOjABnicbuEczuS8NFGNWxyOoPpZ3Az3Hr55692HKAkpYzRwGuFgHEo0NthHqc1VPQSWicribeGHJI6gNuGA71w/0?wx_fmt=png",alt:""}})]),_._v(" "),p("p",[_._v("微信 ID：SDNLAB")]),_._v(" "),p("p",[p("img",{attrs:{src:"http://mmbiz.qpic.cn/mmbiz_png/u6UOjABnicbuEczuS8NFGNWxyOoPpZ3AztEyUpQSKicJWxwHQwmK75Jop0N4VYaUyA0Oz06F3J1oW0Eo2KZaqnAA/0?wx_fmt=png",alt:""}})]),_._v(" "),p("p",[_._v("长按左侧二维码关注")]),_._v(" "),p("p",[_._v("全文完")]),_._v(" "),p("p",[_._v("本文由 "),p("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[_._v("简悦 SimpRead"),p("OutboundLink")],1),_._v(" 优化，用以提升阅读体验")]),_._v(" "),p("p",[_._v("使用了 全新的简悦词法分析引擎 beta，"),p("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[_._v("点击查看"),p("OutboundLink")],1),_._v("详细说明")])])}),[],!1,null,null,null);v.default=n.exports}}]);