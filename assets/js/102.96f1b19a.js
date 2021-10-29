(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{488:function(n,t,a){"use strict";a.r(t);var e=a(42),p=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("SDN 控制器对网络流量具有极强的控制能力，在各项配置策略的细粒度、实时推送等方面具有独特优势，但这种工作模式也给网络的安全模型带来了较大冲击。")]),n._v(" "),a("p",[a("strong",[n._v("引言")])]),n._v(" "),a("p",[n._v("随着信息化发展，传统网络逐步发展成提供多媒体业务的融合网络，但传统架构越来越无法满足高效灵活业务的承载需求，面临一系列困境。比如：管理运维复杂, 缺少集中管控；新技术的引入严重依赖现网设备，网络技术创新困难；设备日益臃肿，技术演进实现的复杂度显著增加。")]),n._v(" "),a("p",[n._v("为了摆脱传统网络封闭架构的困境，增强网络灵活配置和可编程的能力，软件定义网络 SDN（Software Defined Network）技术应运而生。相较于传统网络，SDN 通过把网络的控制层和转发层分离，用集中控制器取代原来的路由协议自协商方式，极大提升了网络的管控效率和灵活性。")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://s.secrss.com/anquanneican/559cfd7ec5a23512e0d65c7d49cd5cd8.jpg",alt:"img"}})]),n._v(" "),a("p",[a("strong",[n._v("SDN 简介")])]),n._v(" "),a("p",[n._v("SDN 起源于 2008 年美国斯坦福大学教授 Nick McKeown 等人的 Ethane 项目研究，研究团队在 ACM SIGCOMM 发表了题为 “OpenFlow：Enabling Innovation in Campus Networks” 的论文，首次详细介绍了 SDN 的概念，其主要思想是将传统网络设备的数据平面和控制平面分离，使用户能通过标准化的接口对各种网络转发设备进行统一管理和配置。这种架构具有可编程可定义的特性，对网络资源的设计、管理和使用提供了更多的可能性，更容易推动网络的革新与发展。")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://s.secrss.com/anquanneican/bc9215706c1516dab4e26249af6da3be.jpg",alt:"img"}})]),n._v(" "),a("p",[n._v("图 1 Nick McKeown 的 Ethane 项目和 SDN 的发展")]),n._v(" "),a("p",[a("strong",[n._v("技术架构")])]),n._v(" "),a("p",[n._v("如图 2 所示，SDN 采用控制与转发分离、软件可编程的网络体系架构，其架构由应用平面（Application Plane）、控制平面（Control Plane）和数据平面（Data Plane）组成。")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://s.secrss.com/anquanneican/941d970d9fb244781dfd519b3ce4b6e6.jpg",alt:"img"}})]),n._v(" "),a("p",[a("img",{attrs:{src:"https://s.secrss.com/anquanneican/d6c0b209c2437873fedd7dfd8aeae7dc.jpg",alt:"img"}})]),n._v(" "),a("p",[n._v("图 2 SDN 架构图")]),n._v(" "),a("p",[n._v("数据平面：该平面由若干网元组成，每个网元可以包含一个或多个 SDN Datapath。每个 SDN Datapath 是一个逻辑上的网络设备，单纯被用来转发和处理数据。数据平面主要负责数据的处理、转发和状态收集。")]),n._v(" "),a("p",[n._v("控制平面：该平面由 SDN 控制器组成，主要负责两个任务：一是将 SDN 应用的请求转换到 SDN Datapath，二是为 SDN 应用层提供底层网络的抽象模型。一个 SDN 控制器包括北向接口代理（NBI）、SDN 控制逻辑和控制平面接口驱动（CDPI 驱动，也称南向接口驱动）三部分。CDPI 将转发规则通过 SDN 控制逻辑发送到网络设备, 要求能够匹配不同厂商和型号的设备, 不影响控制层及以上的逻辑。NBI 允许第三方开发个人网络管理软件和应用, 为管理人员提供更多选择。")]),n._v(" "),a("p",[n._v("应用平面：该平面由 SDN 应用构成，SDN 应用能够通过可编程方式把需要请求的网络行为提交给控制器，其包含多个北向接口驱动（NBI 驱动），同时可对自身功能进行抽象、封装来对外提供北向代理接口。")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://s.secrss.com/anquanneican/8645cdb01532f394594910ba8b605d81.jpg",alt:"img"}})]),n._v(" "),a("p",[n._v("图 3 传统网络与 SDN 架构对比")]),n._v(" "),a("p",[a("strong",[n._v("技术优势")])]),n._v(" "),a("p",[n._v("SDN 的控制转发分离、逻辑集中控制、开放网络编程 API 被视为 SDN 区别于传统网络技术的三个主要特征，同时也为 SDN 带来很多优势。")]),n._v(" "),a("p",[n._v("\\1. 更高效的资源利用：相比传统网络，SDN 控制器监控网络基础设施的状态，能够更加智能和灵活地调配网络资源，减少盲目的网络资源投资，提高资源利用率。")]),n._v(" "),a("p",[n._v("\\2. 更弹性的资源调度：应用层可通过标准的北向接口制定符合其业务需求的网络策略，由 SDN 控制器将策略配置到网络设备中，实现资源的弹性调度。")]),n._v(" "),a("p",[n._v("\\3. 更灵活的集中管理：标准化的南向接口屏蔽了设备的异构性，实现了异构网络设备的集中化统一管控。另外，SDN 控制器能够实现网络的集中管控，网络运维人员能够基于完整的网络全局视图实施网络规划。")]),n._v(" "),a("p",[a("strong",[n._v("发展现状")])]),n._v(" "),a("p",[n._v("2011 年，Google、Microsoft、Facebook、Yahoo 等企业推动成立了非营利性组织开放网络基金会 （ONF - Open Networking Foundation）。ONF 是目前推动 SDN 发展和标准化的最有影响力的组织，其成员主要是网络服务提供商、电信运营商和科研机构。ONF 推出了 Open Flow 协议及其后续版本，目前已推出 1.5 版本。ONF 对 SDN 的南向接口协议也做出了贡献，推出了支持 Open Flow 协议的交换机的配置协议 OF-Config，目前已经发展到 1.2 版本。")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://s.secrss.com/anquanneican/a005eac55eb1785cf46beb205c841b80.jpg",alt:"img"}})]),n._v(" "),a("p",[n._v("2013 年，18 家企业共同成立了 ODL（Open Day Light）组织，主要目标是推动 SDN 控制器的发展，但并不指定 SDN 标准。ODL 要打造从南向接口开始的全方位网络操作系统，包括中心控制平台、北向接口、服务、网络应用，但不包括转发层面，允许全世界的开发人员基于他们的系统进行二次开发。ODL 从 2014 年 2 月 开始，先后发布了 SDN 控制器版本 Hydrogen、Helium、Lithium、Beryllium 等多个版本。")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://s.secrss.com/anquanneican/9a926d1a4a6b489fc82a4d74d242638b.jpg",alt:"img"}})]),n._v(" "),a("p",[n._v("在运营商方面，SDN 与 NFV（Network Function Virtualization，网络功能虚拟化）结合，实现以通用硬件以及虚拟化技术实现网络功能的方案，这种方案可以降低网络成本，使业务对硬件的依赖性降低，业务部署速度也大大提升。")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://s.secrss.com/anquanneican/771af29d8984f5c48a86e440b4f882eb.jpg",alt:"img"}})]),n._v(" "),a("p",[a("strong",[n._v("SDN 对安全的影响")])]),n._v(" "),a("p",[n._v("SDN 控制器对网络流量具有极强的控制能力，在各项配置策略的细粒度、实时推送等方面具有独特优势，但这种工作模式也给网络的安全模型带来了较大冲击，主要体现在两个方面。")]),n._v(" "),a("p",[n._v("\\1. 数据控制方式不同：传统网络环境中防火墙等安全设备被部署在关键位置，信息流被强制从安全设备中流过，以便安全设备进行实时监控和检测。而 SDN 是个流规则驱动型网络，信息流是否流过安全设备均由控制器下发的流规则决定，安全设备自身没有决定权。")]),n._v(" "),a("p",[n._v("\\2. 信息获取方式不同：在传统网络中，管理员需要同时向多个设备发送状态请求信息，综合评估收到的信息后，才能得到网络当前的安全态势。而 SDN 架构中的控制器作为整个网络的 “指挥控制中心”，可以为整个网络建立全局实时的安全态势视图。然而，这种便捷的网络态势信息获取方式也极易被攻击者重点攻击和利用。")]),n._v(" "),a("p",[a("strong",[n._v("SDN 自身的安全")])]),n._v(" "),a("p",[a("img",{attrs:{src:"https://s.secrss.com/anquanneican/c5d6ce28ae8d80332157f1eea1da4b5c.jpg",alt:"img"}})]),n._v(" "),a("p",[n._v("图 4 结构示意图")]),n._v(" "),a("p",[n._v("SDN 架构可以解决数据中心网络管理、运营维护和成本等问题，但 SDN 自身的安全问题将成为制约其商用化和推广的一个重要因素，SDN 的控制平面、应用平面、数据平面和标准接口等方面都将面临安全挑战。")]),n._v(" "),a("p",[n._v("\\1. 控制平面安全：集中化的控制平面承载网络环境中的所有控制流，是网络服务的中枢，直接关系网络服务的可用性、可靠性和数据安全性，面临网络监听、IP 地址欺骗、DoS/DDoS 攻击和病毒木马攻击的威胁。")]),n._v(" "),a("p",[n._v("\\2. 应用平面安全：随着 SDN 的推广和发展，应用层将提供各种复杂的网络服务，恶意应用和应用安全规则混乱的安全问题也将随之而来。")]),n._v(" "),a("p",[n._v("\\3. 数据平面安全：基础设施层的交换机等设备主要负责数据处理、转发和状态收集, 对控制器下发的流规则绝对信任，该层面临恶意 / 虚假流规则注入、DoS/DDoS 攻击、非法访问、身份假冒等问题，还可能面临由虚假控制器的无序控制指令导致的交换机流表混乱等威胁。")]),n._v(" "),a("p",[n._v("\\4. 南向接口安全：OpenFlow 协议是 ONF 标准化组织唯一确定的 SDN 南向接口通信规范，OpenFlow 安全通道采用 SSL/TLS 对数据进行加密, OpenFlow 1.3.0 版本之后的规范将 TLS 设为可选项, 允许控制通道不采取任何安全措施，南向接口面临窃听、控制器假冒等安全威胁。")]),n._v(" "),a("p",[n._v("\\5. 北向接口安全：北向接口对应用程序的认证方法和粒度尚没有统一的规定。相对南向接口, 北向接口在控制器和应用程序之间建立的信赖关系更加脆弱, 攻击者可利用北向接口的开放性和可编程性, 对控制器中的某些重要资源进行访问，使得攻击北向接口的门槛更低，面临非法访问、数据泄露、消息篡改、身份假冒、应用程序自身的漏洞等问题。")]),n._v(" "),a("p",[a("strong",[n._v("小结")])]),n._v(" "),a("p",[a("img",{attrs:{src:"https://s.secrss.com/anquanneican/403746ad0268a357b863495cd2800609.jpg",alt:"img"}})]),n._v(" "),a("p",[n._v("图 5 SDN 安全架构示意图")]),n._v(" "),a("p",[n._v("SDN 的管理集中性、可编程性和开放性等为网络安全管理带来了机会（Security by SDN），但 SDN 自身的安全也受到挑战（Security for SDN）。随着技术发展，无论是 by SDN 还是 for SDN 的安全问题在一定程度上得到缓解，但关键问题仍然存在。SDN 的稳健发展，需要持续关注和解决这些安全问题。")]),n._v(" "),a("p",[a("strong",[n._v("参考文献")])]),n._v(" "),a("p",[n._v("[1] McKeown N, Anderson T, Balakrishnan H, et al. OpenFlow: enabling innovation in campus")]),n._v(" "),a("p",[n._v("networks[J]. ACM SIGCOMM Computer Communication Review, 2008, 38(2): 69-74.")]),n._v(" "),a("p",[n._v("[2] 郑毅, 华一强, 何晓峰. SDN 的特征、发展现状及趋势 [J]. 电信科学, 2013, 9: 102-106.")]),n._v(" "),a("p",[n._v("[3] 王淑玲, 李济汉, 张云勇, 房秉毅. SDN 架构及安全性研究 [J]. 电信科学, 2013.")]),n._v(" "),a("p",[n._v("[4] 张朝昆, 崔勇, 唐翯翯, 吴建平. 软件定义网络（SDN）研究进展 [J]. 软件学报, 2015.")]),n._v(" "),a("p",[n._v("[5] 袁伟, 齐玉东, 陈青华. SDN 技术及应用研究综述 [J]. 第三届中国指挥控制大会, 2015.")]),n._v(" "),a("p",[n._v("[6]ONF. Open Flow Switch Specification Version 1.5.0 (Protocol version 0x06) [EB/OL].https://www.opennetworking.org/images/stories/downloads/sdn-resources/onf-specifications/openflow/openflow-switch-v1.5.0.pdf, 2014.")]),n._v(" "),a("p",[n._v("[7]ONF. Open Flow Configuration and Management Protocol OF-CONFIG 1.0 [EB/OL].https://www.opennetworking.org/images/stories/downloads/sdn-resources/onf-specifications/openflow/openflow-spec-v1.0.0.pdf, 2011")]),n._v(" "),a("p",[n._v("[8] 王蒙蒙, 刘建伟, 陈杰, 毛剑, 毛可飞. 软件定义网络：安全模型、机制及研究进展 [J]. 软件学报, 2016.")]),n._v(" "),a("p",[n._v("[9] 张朝昆, 崔勇, 唐翯翯, 吴建平. 软件定义网络（SDN）研究进展 [J]. 软件学报, 2015.")]),n._v(" "),a("p",[n._v("[11] 杨盾, 王小鹏. 应对 DDoS 攻击的 SDN 网络安全特性研究 [J]. 软件, 2018.")]),n._v(" "),a("p",[n._v("作者：徐国坤 田夫笔耕")]),n._v(" "),a("p",[n._v("声明：本文来自中国保密协会科学技术分会，版权归作者所有。文章内容仅代表作者独立观点，不代表安全内参立场，转载目的在于传递更多信息。如有侵权，请联系 anquanneican@163.com。")]),n._v(" "),a("p",[n._v("全文完")]),n._v(" "),a("p",[n._v("本文由 "),a("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[n._v("简悦 SimpRead"),a("OutboundLink")],1),n._v(" 优化，用以提升阅读体验")]),n._v(" "),a("p",[n._v("使用了 全新的简悦词法分析引擎 beta，"),a("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[n._v("点击查看"),a("OutboundLink")],1),n._v("详细说明")])])}),[],!1,null,null,null);t.default=p.exports}}]);