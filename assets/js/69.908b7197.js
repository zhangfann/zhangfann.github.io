(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{454:function(e,t,r){"use strict";r.r(t);var o=r(42),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("UCloud基于P4交换机的云平台网络实践")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.v2ex.com/member/wxxshu",target:"_blank",rel:"noopener noreferrer"}},[e._v("wxxshu"),r("OutboundLink")],1),e._v(" · 2018-06-28 14:26:10 +08:00 · 1584 次点击")]),e._v(" "),r("p",[e._v("这是一个创建于 1169 天前的主题，其中的信息可能已经有所发展或是发生改变。")]),e._v(" "),r("p",[e._v("自 2012 年 UCloud 成立起，虚拟网络始终是 IaaS 产品的一个核心组件，也经过了多次演进。演进中我们始终思考的是：如何在不增加用户成本的情况下为用户提供更可靠、更快速的网络。而答案则是要求技术团队不断采用新技术，来同时满足租户隔离、转发能力、稳定性等多种需求。")]),e._v(" "),r("p",[e._v("我们最早的 SDN 方案在转发面是采用 Open vSwitch （以下简称 OVS ）来实现，控制面是自研的控制器。期间亦首先采用盛科的 SDN 交换机，来解决物理机（ bare metal ）和公有云之间的互访需求。为解决 SDN 交换机 OpenFlow 流表条目有限的问题，UCloud 开始采用 DPDK 技术的网关集群来替代 SDN 交换机。经过实践检验的各种 DPDK 网关，越来越多地出现在 UCloud 的云平台中，为用户提供更快速的网络能力。")]),e._v(" "),r("p",[r("strong",[e._v("DPDK 的不足")])]),e._v(" "),r("p",[e._v("随着 2017 年 25G 网络开始迅速被采用，对 UCloud 的虚拟网络又提出了更高的挑战。在此背景下，DPDK 也逐渐暴露出了一些不足：")]),e._v(" "),r("p",[e._v("– 基于 DPDK 的应用可以达到很高的包转发速率，但这是通过多服务器、多核负载均衡实现的。且负载均衡算法通常是由硬件交换机或者网卡实现的，并不能被软件定义。如果网络中出现单个大象流，无法被硬件交换机或者网卡的负载均衡算法很好的分发，就会造成单根网线或者单个 CPU Core 出现拥塞，对业务造成巨大影响。 – 随着网络带宽从 10G 向 25G、40G、50G、100G 的演进，DPDK 需要更强力的 CPU 才能够达到线速，而更强力的 CPU 通常价钱也很昂贵，不利成本。特别是单 Core 的主频越高，价格越贵，且主频增加之间和价格增加是非线性关系。")]),e._v(" "),r("p",[r("strong",[e._v("两个被排除的方案")])]),e._v(" "),r("p",[e._v("2017 年中 UCloud 开始对新的 SDN 硬件卸载方案做评估：")]),e._v(" "),r("p",[e._v("**首先进入我们视野的是基于 VXLAN VTEP 的解决方案。**此类方案通常由交换机厂商提供包括 SDN Controller 在内的整套解决方案，比较适合私有云的环境部署。但缺点也很显而易见：封闭、非标准化、无法定制。通常用户只能通过北向厂商特有的 API 方式和此类方案进行交互。且此类方案通常只支持 10w 左右的虚拟网络 MAC 地址，很难满足 UCloud 的业务需要。此外 UCloud 对基于 Ethernet Over GRE （ Linux GRETAP ）的 Overlay 封装有需求，但没有一家硬件交换机支持该 Overlay 协议。")]),e._v(" "),r("p",[e._v("**接下来我们又把目光投向了支持 OpenFlow **1.3 协议的硬件交换机。经过一番预研和测试，我们发现支持 OpenFlow 1.3 协议的硬件交换机和 OVS 间存在着巨大的 GAP。实际上不可能把我们的 OpenFlow 流表移植到硬件交换机上。除了同样不支持 Ethernet Over GRE 协议外，我们 OVS 上使用的 Flow Based Tunneling 特性也没有硬件交换机支持。")]),e._v(" "),r("p",[r("strong",[e._v("P4 进入视野")]),e._v(" 2017 年 Q4，我们开始预研 Barefoot 的支持 P4 的可编程交换机（ Tofino 芯片），很快发现了它能够很好地满足我们的需求。")]),e._v(" "),r("p",[e._v("提到 P4 和 Barefoot 就不能不提 Nick Mckeown 教授。2007 年 Nick 和伙伴们一起创立了 Nicira Networks 公司，也几乎标志着“软件定义网络(SDN)”这个产业的诞生。Nicira 作为 OpenFlow 的大本营，接连发布了 NOX 和 Open vSwitch 作为 OpenFlow 的重要组件。")]),e._v(" "),r("p",[e._v("2012 年 VMware 收购 Nicira 后，Nick 认为 SDN 的第二步则是发展为它专门优化的硬件设备，又和同伴共同发起了对数据包进行处理的编程语言 P4 （ Programming Protocol-Independent Packet Processors ），帮助网络用户摆脱被芯片硬件厂商各种协议的制约。")]),e._v(" "),r("p",[r("strong",[e._v("– P4 在设计上具备如下优点：")]),e._v(" – 可灵活定义转发设备数据处理流程，且可以做到转发无中断的重配置。 – 转发设备协议无关转发。 – 设备无关性。")]),e._v(" "),r("p",[e._v("2013 年 Nick 成立了 Barefoot Networks 公司，致力于开发基于 P4 的网络芯片 Tofino 和软件开发套件 Capilano，并帮助 P4 社区发展壮大。")]),e._v(" "),r("p",[r("strong",[e._v("Barefoot 支持 P4 的可编程交换机（基于 Tofino 芯片），具备如下优点：")])]),e._v(" "),r("p",[e._v("– 相对 DPDK 更高的转发性能 – 1.8T ~ 6.5T 线速转发 – 更低时延 – 单线最高 100G，避免单线拥塞 – 转发性能可预期，DPDK 的转发性能随业务模型可能变化 – 相对其他硬件交换机，更开放 – 可编程能力强，转发面 p4lang 定制开发 – 完美解决 Ethernet Over GRE 和 Flow Based Tunneling 的问题 – 开发效率高 – 控制面可通过 Apache Thrift、gRPC 接口远程管理 – 操作系统采用 Open Network Linux （基于 Debian ） – 生态圈：P4 Runtime、Stratum")]),e._v(" "),r("p",[r("strong",[e._v("P4 Switch 架构")])]),e._v(" "),r("p",[r("strong",[e._v("1.控制面实现")])]),e._v(" "),r("p",[r("img",{attrs:{src:"http://blog.ucloud.cn/wp-content/uploads/2018/06/implement.png",alt:"img"}})]),e._v(" "),r("p",[e._v("最初我们准备修改 Barefoot 提供的 switch.p4 来实现我们的功能，但尝试阅读代码后发现 switch.p4 虽然完整的包含交换机所需要的功能，但很多特性我们并不需要，所以我们没有选择修改、裁剪 switch.p4 ，而是自己从头开始写一个更符合自身需求的控制面。")]),e._v(" "),r("p",[e._v("NOS 这层参考我们之前开发 DPDK 程序的经验，完全通过 Linux 来实现。P4 代码会把所有非 Ethernet Over GRE 封装的报文当做控制报文送到 CPU 口。CPU 口在 Linux 上就是一个虚拟网卡，报文再通过 Kernel 转发到 hostif 的虚拟网卡上。hostif 的虚拟网卡上配置 IP 地址，ARP 学习等功能都通过 Linux Kernel 来实现。Quagga 等 Userspace 的程序就通过 hostif 虚拟网卡上的 IP 和上级路由器跑 BGP，再将学习到的路由写到 Kernel 的路由表。我们直接开发的 APP 模块以 bf_switchd 插件的方式加载，通过 netlink 接口学习 Kernel 的 ARP 表、路由表，调用 P4 代码编译后生成的 API 写入 Tofino 芯片。")]),e._v(" "),r("p",[e._v("Controller 这一层最早我们是通过 P4 编译器生成的 Apache Thrift 接口将数据下发到 bf_switchd，然后写入 Tofino 芯片。但通过简单的性能测试发现，由于 Apache Thrift 接口设计的限制，每次 RPC 调用只能配置一条数据，因此需要配置大量数据时性能很不理想。为此我们在 APP 模块中启动了 gRPC server，重新定义了批量下发配置的接口，将配置下发速度提升了 8 倍。未来我们计划将控制面演进到 P4 Runtime 和 Stratum。")]),e._v(" "),r("p",[r("strong",[e._v("2.Sharding")])]),e._v(" "),r("p",[e._v("P4 可编程交换机的 PPS 或者 BPS 性能很强能够线速转发，对比 DPDK，制约单机性能的瓶颈主要出现在交换机的 DRAM 和 TCAM 上。毕竟 DPDK 跑在 X86 服务器上内存 64G 起步，512G 也不稀奇，而交换机芯片上的内存资源就相对要少很多。")]),e._v(" "),r("p",[e._v("为了突破单台交换机的资源瓶颈，我们设计了将数据按租户分片的方案，从而实现了水平扩展的目标。")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://blog.ucloud.cn/wp-content/uploads/2018/06/sharding.png",alt:"img"}})]),e._v(" "),r("p",[e._v("首先采用 64 口 P4 可编程交换机作为接入层，主要实现数据分片和灰度发布的能力。例如采用 VNI 的后 6 位分为 64 个分片，为每个分片指定一个下一跳地址，从而达到整个集群的资源水平扩展的能力。")]),e._v(" "),r("p",[r("strong",[e._v("3.强灰度能力")])]),e._v(" "),r("p",[e._v("传统上网络设备通常采用主备、或者主主的方式部署，当需要升级的时候将全部流量切到一半设备上，另外一半设备下线升级，升级完成后再重新加入集群分担一半的流量。这种升级方式简单粗放，在 UCloud 我们提出了更高的要求。我们软件行业的现状就是不论花多大的成本去测试，真正的用户行为总是不可能被穷尽的，缺陷总是会有的，这时我们最后的安全网就是“灰度发布”。在现网真实环境作为终极测试的同时，通过控制变更范围尽可能的减少风险；一旦真的有缺陷快速回滚，最大程度的降低影响面。在 UCloud 我们坚定的在每个产品上采用按账号灰度发布，即使是在虚拟网络设备上。")]),e._v(" "),r("p",[e._v("我们将灰度发布交换机软件的能力 Buildin 在 Access 层：")]),e._v(" "),r("ol",[r("li",[e._v("当需要升级交换机软件时，将预留灰度交换机安装新版本软件；")]),e._v(" "),r("li",[e._v("按照灰度账号定义新的数据分片，指定灰度交换机同步新的数据分片；")]),e._v(" "),r("li",[e._v("按照 VNI+源地址或 VNI+目的地址配置灰度规则按 VM 的粒度将流量切换到灰度交换机处理；")]),e._v(" "),r("li",[e._v("切换完成后立刻自动回归测试，Ping 检测各种场景下的网络互通性是否正常；")]),e._v(" "),r("li",[e._v("测试通过则逐步增加灰度的 VM 地址，直到整个 VPC 的流量全部切换到灰度交换机；")]),e._v(" "),r("li",[e._v("再切换一个新的 VPC，直到所有分片内的 VPC 都切换到新的交换机下；")]),e._v(" "),r("li",[e._v("旧的交换机下线清洗，安装新版本软件，直到整个集群完成升级。")])]),e._v(" "),r("p",[e._v("通过这种传统网络设备完全不同的升级方式，在 SDN 软件快速迭代的背景下，有力地保障了 SDN 网络的可靠性。")]),e._v(" "),r("p",[r("strong",[e._v("P4 Switch 应用")]),e._v(" P4 可编程交换机在 UCloud 规划的使用场景包括：")]),e._v(" "),r("p",[e._v("– 支持租户的增强交换和路由 – 物理机接入虚拟网络 – 一致性哈希 ECMP 负载均衡 – 流量限速与计费 – ARP 代理 – 等等")]),e._v(" "),r("p",[e._v("目前 UCloud 已经采用 P4 可编程交换机完成了新一代交换网关 UXR 的开发和测试工作，同时部署了一个地域并切换灰度流量进行验证。")]),e._v(" "),r("p",[r("strong",[e._v("总结")]),e._v(" Barefoot 的 Tofino 芯片在 2018 年初量产后，P4 可编程交换机开始逐渐出现在市场上，但仍是一个新兴事物。不可否认目前确实还有一些不足之处，但 UCloud 确实看到它和之前的交换机相比，能给软件工程师无与伦比的自由度。")]),e._v(" "),r("p",[e._v("在 6 月 27 日 Barefoot CEO Craig Barratt 先生一行来 UCloud 总部的技术交流中，大家也认为通过紧密合作，能够产生更加贴切需求、切实解决痛点的可定制解决方案。我们相信凭借持续的技术演进，可以不断为云平台用户提供更快速更强大的网络能力，就像 Barefoot 主页所说，We can now finally say “ Software is eating the network ”。")]),e._v(" "),r("p",[r("strong",[e._v("参考链接：")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://p4.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("P4"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.barefootnetworks.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Barefoot"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.quagga.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quagga"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://dpdk.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DPDK"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://openvswitch.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open vSwitch"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("想要获取更多技术和活动资讯，关注**“ UCloud 技术公告牌”**微信公众号；或搜索微信 ID：ucloud_tech 进行关注")])])}),[],!1,null,null,null);t.default=n.exports}}]);