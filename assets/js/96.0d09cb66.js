(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{475:function(v,_,t){"use strict";t.r(_);var o=t(42),a=Object(o.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("熟悉我的人最近可能知道我这一年的精力基本都扑在 "),t("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/alauda/kube-ovn",target:"_blank",rel:"noopener noreferrer"}},[v._v("kube-ovn"),t("OutboundLink")],1),v._v(" 这个项目上，自然而然的接触了很多 ovs 社区的知识。而这篇论文其实很早就看到了，但是当时很多概念都理解不了。经过一年后再翻开发现已经能明白一些了，于是做一下阅读心得和自己的思考。")]),v._v(" "),t("p",[v._v("当然论文里的一些东西其实还是理解的比较模糊，有什么不对的地方希望大佬们可以指正。")]),v._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" "),t("strong",[v._v("概述")])]),v._v(" "),t("p",[v._v("这篇论文发表在 "),t("strong",[v._v("NSDI‘15")]),v._v(" 上，是网络系统学术领域中相当好的一个会议了，而论文的作者正是 ovs 的几位主要作者，早期（包括现在）的代码基本上都是由他们贡献的，他们可以说是介绍 ovs 设计理念和实现细节的地表最强战队了。不过这篇论文诞生在五年前，期间很多实现细节可能已经发生了变化，不过作者们思考的问题和解决方式还是很值得一看。")]),v._v(" "),t("p",[v._v("论文主要分为三个部分来介绍设计与实现的内容：")]),v._v(" "),t("ol",[t("li",[v._v("介绍 ovs 作为软件交换机和传统交换机的区别，以及由于支持 OpenFlow 而面临的挑战。")]),v._v(" "),t("li",[v._v("介绍为了支持 OpenFlow 所选择的整体架构模型，也就是用户态进行流表计算，内核态记录 flow cache 的工作模型。")]),v._v(" "),t("li",[v._v("集中介绍了大量工程实践中这种模型存在的性能问题以及对其如何进行优化。")])]),v._v(" "),t("h2",{attrs:{id:"ovs-面临的挑战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ovs-面临的挑战"}},[v._v("#")]),v._v(" "),t("strong",[v._v("OVS 面临的挑战")])]),v._v(" "),t("p",[v._v("相比于传统硬件交换机相对固定的安装和配置，软件交换机在安装和配置上都更加灵活。随着虚拟化的流行我们可以通过软件交换机从而实现对网络的虚拟化，在固定的物理网络拓扑上按需构建自己所期望的虚拟网络拓扑。")]),v._v(" "),t("p",[v._v("想象一下一个纯物理的网络环境，你需要自己购买物理的交换机，路由器和防火墙，将一根根网线插入到对应的网络设备和主机接口之间，再登录一台台设备进行配置。没加入一个新的物理设备都需要手动的去联线，如果要对网络拓扑进行更改或者更换其中某个设备就又是一番体力活。所以我们倾向于一个"),t("strong",[v._v("固定")]),v._v("的物理网络拓扑来减少维护量。")]),v._v(" "),t("p",[v._v("而在虚拟化和容器化流行的今天，接入网络的计算节点会频繁变化，每个用户都有特殊的网络规划和网络策略，从用户的视角看也更希望自己处在一个逻辑上独立的网络空间。因此网络虚拟化凭借其"),t("strong",[v._v("灵活性")]),v._v("逐渐进入人们的视野。")]),v._v(" "),t("p",[v._v("为了支持这种网络的灵活性，ovs 对 "),t("strong",[v._v("OpenFlow")]),v._v(" 的语法进行了支持，使用户具有了可对网络流量进行编程的能力。想象一下传统的物理交换机，其主要的功能就是根据从某个端口进来的数据包根据其目标 mac 地址选择发送到哪个端口，你可以理解为它的核心就是一个 mac 地址到交换机端口映射的"),t("strong",[v._v("哈希表")]),v._v("，交换机里面的硬件电路根据从各个端口收集上来的信息对这个哈希表进行查询和更新。")]),v._v(" "),t("p",[v._v("而通过 OpenFlow 你可以设计针对某个特征的数据包的处理流水线，这里的特征不局限于 L2 的 mac 地址，可以是 L3 的 IP 和 L4 的端口信息。最终结果可以不止是一个转发动作，可以通过某些字段的替换，实现路由，防火墙，负载均衡等复杂功能。流水线也可以不止一个阶段，可以组合多个阶段实现不同的功能，甚至流水线中可以通过条件分支选择不同的功能。不过现在一些高级的硬件交换机也具备了 L4 的能力，但是基本上都是通过固定的硬件流水线来实现，而没有软件交换机这种能自定义流水线并快速迭代的能力。（其实支持 OpenFlow 的硬件交换机现在也出现了，软硬件双方都在不断侵蚀对方的地盘）")]),v._v(" "),t("p",[v._v("但是 OpenFlow 的灵活性并不是没有代价的，性能问题成为了工程中的难题。由于流水线提供了灵活的编程能力，开发人员又多倾向于通过逻辑上的模块化设计流水线，一个数据包的流水线可能会包含多个模块，经常需要几十个流表项的匹配计算才能得出最终的动作。而流表中又存在优先级的概念，在大规模集群中很可能要计算了大量不匹配的流表项才找到匹配的流表项。原本硬件电路中一个哈希表查询的操作，在这里可能是上百条正则匹配的操作。可以想象如果是这种直接了当的每个数据包走一遍流表的实现，CPU 很快就会跑满，性能上是无法接受的。")]),v._v(" "),t("p",[v._v("下面就将从 ovs 的架构模型和缓存实现的细节来介绍如何解决性能相关的问题。")]),v._v(" "),t("h2",{attrs:{id:"ovs-设计架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ovs-设计架构"}},[v._v("#")]),v._v(" "),t("strong",[v._v("OVS 设计架构")])]),v._v(" "),t("p",[v._v("ovs 的核心架构如下图所示:")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://pic4.zhimg.com/v2-4506c68694511bbc2b84e58cd08fdd43_b.jpg",alt:"img"}})]),v._v(" "),t("p",[v._v("其中和数据流转发相关的主要是"),t("strong",[v._v("用户态")]),v._v("的 "),t("strong",[v._v("ovs-vswitchd")]),v._v(" 和"),t("strong",[v._v("内核态")]),v._v("的 "),t("strong",[v._v("kernel datapath")]),v._v("，其他组件主要是提供控制平面的功能，将来有机会详细介绍 ovs 技术细节时会再介绍。")]),v._v(" "),t("p",[v._v("其中 kernel datapath 的核心功能是一个和硬件交换机转发哈希表类似的哈希表，区别在于硬件交换机大多只需要根据数据包中目的 mac 地址即可进行哈希映射查找下一步操作，而 kernel datapath 需要根据数据包中 L2 到 L4 的所有信息进行哈希映射找到对应的动作。")]),v._v(" "),t("p",[v._v("而这个哈希映射表该如何构建呢，这就是用户态 ovs-vswitchd 的功能，它会比对当前数据包的头部信息和流表的规则，得出一个对应的动作，并把头部信息和动作的对应关系作为一个哈希条目插入到内核态 datapath 的哈希表中。因此内核态的哈希表可以看做是当前流表的一个缓存。")]),v._v(" "),t("p",[v._v("具体来说，在一个数据连接的生命周期中，当第一个数据包到达 kernel datapath 中，当前的缓存中并没有对应的规则，因此 kernel datapath 会向用户态的 vswitchd 发送一个请求。vswitchd 计算出对应的规则后再将得出的规则发送给内核态的 datapath，datapath 更新自己的缓存，数据包按规则通过。由于已经有了缓存的规则，该连接上之后的数据包无需再通过用户态的 vswitchd 计算规则，可以直接命中内核态的缓存执行对应操作。")]),v._v(" "),t("p",[v._v("这个架构在性能上并不是一个最优的选择。因为数据包的首包需要经过内核态和用户态的来回切换，会造成额外的"),t("strong",[v._v("延迟")]),v._v("，在大量短连接的情况下会造成缓存大量 "),t("strong",[v._v("miss")]),v._v("，延迟的效果会更明显。将 vswitchd 和 datapath 合并在 kernel 来实现从性能角度显然要更优一些。但是从工程和用户接受角度来看当前的架构会更灵活一些。")]),v._v(" "),t("p",[v._v("首先，内核模块的开发调试都有较高的门槛，如果所有数据平面都在内核态实现，那么新开发者的加入和社区的建设都将面临很大的挑战。")]),v._v(" "),t("p",[v._v("其次，对于用户来说软件的安装和更新都是以内核模块形式进行，这需要有编译内核模块的经验才能正确的使用 ovs，对用户来说也有很高的门槛，并不利于软件的推广。")]),v._v(" "),t("p",[v._v("因此 ovs 目前采用了这种分层的结构，内核态只保留最为简单的缓存，可以保证长时间的稳定，无需因为内核版本的变化而改变。而复杂的功能例如接受 controller 的 flow 信息，适配新的 flow 规则，flow 的计算等较为多变的功能在用户态实现，方便开发者和用户进行快速的迭代。")]),v._v(" "),t("p",[v._v("既然出于工程的原因选择了当前架构，那么如何优化缓存的命中率以及降低内核态和用户态之间的性能损耗就成了重中之重。论文的剩余部分就围绕性能优化展开。")]),v._v(" "),t("p",[t("strong",[v._v("优化")])]),v._v(" "),t("p",[t("strong",[v._v("Tuple Space Search")])]),v._v(" "),t("p",[v._v("先来看下用户态流表规则的计算，如果数据包按照流表的形式进行遍历计算的话，即使是只计算首包也需要大量的正则匹配，会消耗大量的 cpu。因此 ovs 并没有采用决策树这种较为直观的数据结构去计算规则，而是使用 "),t("strong",[v._v("Tuple Space Search Classifier")]),v._v(" 算法进行规则计算。")]),v._v(" "),t("p",[v._v("关于 **Tuple Space Search （TSS）**是一种特殊的数据包分类算法，有专门的论文进行了解释。举例来说，OpenFlow 的数据包匹配可能会涉及 L2~L4 的所有字段，然而并不是所有的规则都用到了所有的字段，可能大部分只用到 L2 有的用到 L3 ，一小部分用到 L4，我们可以根据流表的内容将规则收敛到几个只包含特定字段的哈希表，然后将数据包和每个哈希表用到的字段进行匹配根据优先级得到最终的结果。")]),v._v(" "),t("p",[v._v("相比较单一一个包含所有字段的哈希表，TSS 可以极大降低"),t("strong",[v._v("内存的消耗")]),v._v("。据估算包含所有字段的哈希表需要的条目数将会是 2 的 275 次方。而相比于决策树，TSS 在规则的"),t("strong",[v._v("更新和增加")]),v._v("上的复杂度会更低一些。")]),v._v(" "),t("p",[t("strong",[v._v("MicroFlow Caching")])]),v._v(" "),t("p",[v._v("在 ovs 的早期设计中 kernel datapath 并没有使用上面复杂的分类算法，而是使用了最简单的将所有字段进行哈希的一个单一的哈希表。")]),v._v(" "),t("p",[v._v("这种模式下任意一个字段的变化都会导致缓存 miss，会触发用户态 vswitchd 去计算下一步动作，因此缓存从用户态到内核态的下发时间变得十分重要。在这方面 ovs 做了大量的工程方面优化，例如缓存的批量下发，多核并行，减少系统调用次数等等。在哈希表的实现上也用到了很多新技术，例如 "),t("strong",[v._v("cuckoo hasing")]),v._v(" 和内核的 "),t("strong",[v._v("RCU")]),v._v(" 机制来保证并发的和 worst case 下的性能。")]),v._v(" "),t("p",[t("strong",[v._v("MegaFlow Caching")])]),v._v(" "),t("p",[v._v("在通常的流量模式下，MicroFlow 能达到不错的性能。然而在一些特殊的流量模式下，例如端口扫描，每个连接数据包头部都不一样，cache 会大量 miss，ovs 需要来回在内核态和用户态之间进行计算更新，CPU 资源会被耗尽。")]),v._v(" "),t("p",[v._v("为了避免这种性能极度恶化的情况，ovs 引入了 MegaFlow。和 MicroFlow 的精确匹配不同，MegaFlow 可以做到模糊匹配，一个条目可以匹配一组数据包。它的实现和用户态的 TSS 类似，但是在组织上有所不同。一是没有优先级，这样可以快速返回无需遍历所有的哈希表；二是 MegaFlow 中不像用户态中大量 table 组成了 pipeline，只通过一个 table 来进行匹配。")]),v._v(" "),t("p",[v._v("MegaFlow Cache 性能最关键的就是看如何能实现更好的泛化能力，即每个条目都能匹配尽可能多的数据包，减少用户态和内核态之间进行交互的次数。同时需要尽可能降低哈希查询的次数，在尽可能少的表里得到预期的结果。")]),v._v(" "),t("p",[v._v("论文中介绍了多个优化的细节，例如用 "),t("strong",[v._v("Prefix Tracking")]),v._v(" 来对 IP 范围和端口范围进行聚类；使用"),t("strong",[v._v("分段查询")]),v._v("避免某个 L4 的规则更新导致所有的 Cache 失效。以及利用优先级对多个"),t("strong",[v._v("哈希表排序")]),v._v("，降低平均查询次数等等。")]),v._v(" "),t("p",[t("strong",[v._v("Cache Invalidation")])]),v._v(" "),t("p",[v._v("前面介绍了很多缓存实现的细节，可以看到 ovs 的缓存体系已经比较复杂了，带来的负面影响就是缓存的失效更新也变的十分复杂。MicroFlow 由于是精确匹配可以很容易的判断哪个条目失效了，而 MegaFlow 采用的是模糊匹配，那么当一条 OpenFlow 规则更新时，判断这个规则影响了哪些缓存就变的十分困难。如果控制平面规则变化频繁，那么缓存更新的计算同样会消耗大量的资源。")]),v._v(" "),t("p",[v._v("在这里作者兜了个大弯子，先是介绍了将流表变更进行分类。简单的可追踪的变更直接更新对应的 MegaFlow，对于影响范围大不好判断的变更需要重新 validate 所有的 MegaFlow。")]),v._v(" "),t("p",[v._v("然而随着 ovs 的发展，流表的功能越来越复杂，几乎所有的变更都变成了难以判断影响范围的变更，因此 ovs 最终放弃了对变更进行分类，转而使用多线程来对所有 MegaFlow 进行更新。")]),v._v(" "),t("p",[t("strong",[v._v("一点小的想法")])]),v._v(" "),t("p",[v._v("最近由于在对 kube-ovn 进行了比较多的稳定性和性能方面的测试，也不断的接触到了很多性能相关的问题。ovs 最早是为虚拟化进行设计的，其最为核心的竞争力还是在通过 OpenFlow 实现网络拓扑的可编程和高度的灵活性，随之而来在性能上会带来一些损失。缓存对相对固定的流量模式有很好的加速效果，但是由于 ovs 的灵活性，网络拓扑和流量模式的变化也会更为频繁。在容器化的工作负载下，由于迭代速度的加快，工作负载的增多，网络的变化会更加的频繁。")]),v._v(" "),t("p",[v._v("现在 dpdk 的用户态加速方案和智能网卡的流表 offload 都可以很好的解决吞吐量和延迟的问题，但是由于对硬件条件的依赖，在一些情况下不能很好的实施。一套纯软件的解决方案依然很有必要。")]),v._v(" "),t("p",[v._v("从性能角度来看其实还是有一些优化的空间，例如：")]),v._v(" "),t("ol",[t("li",[v._v("ovs 出于社区和分发的考虑做了 datapath 内核态和用户态的分离，但是针对特定场景例如公有云，有足够的实力对内核进行维护，其实可以考虑将所有的数据平面都放到"),t("strong",[v._v("内核态")]),v._v("，避免切换带来的开销.")]),v._v(" "),t("li",[v._v("目前 kernel datapath 的缓存是"),t("strong",[v._v("响应式")]),v._v("加载的，即缓存在第一个数据包到来前都是空的，根据数据包的到来驱动缓存的更新。这样首包延迟是不可避免的，在流量高发期 CPU 的消耗也会很频繁。如果 vswitchd 在空闲时，能主动推送一部分缓存到内核态，实现缓存的"),t("strong",[v._v("预加载")]),v._v("或许能降低峰值的 CPU 使用。")]),v._v(" "),t("li",[v._v("由于 openflow 规则的复杂，缓存的 invalidation 无法做到增量式更新。但是在实际场景中用到的规则其实是有限的，在一些简单场景下"),t("strong",[v._v("增量式更新")]),v._v("还是有可能的，所以总感觉现在粗暴的对所有 MegaFlow 进行检查并不是一个很好的做法。")])]),v._v(" "),t("p",[v._v("当然这篇论文已经是五年前的事情了，很多设计可能都发生了改变，欢迎大佬的指正。点击阅读原文可以获得这篇论文的 pdf 文件。")]),v._v(" "),t("p",[v._v("全文完")]),v._v(" "),t("p",[v._v("本文由 "),t("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[v._v("简悦 SimpRead"),t("OutboundLink")],1),v._v(" 优化，用以提升阅读体验")]),v._v(" "),t("p",[v._v("使用了 全新的简悦词法分析引擎 beta，"),t("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[v._v("点击查看"),t("OutboundLink")],1),v._v("详细说明")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/101566941?utm_source=wechat_session&utm_medium=social&utm_oi=28462207205376&utm_campaign=shareopn#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[v._v("概述"),t("OutboundLink")],1),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/101566941?utm_source=wechat_session&utm_medium=social&utm_oi=28462207205376&utm_campaign=shareopn#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[v._v("OVS 面临的挑战"),t("OutboundLink")],1),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/101566941?utm_source=wechat_session&utm_medium=social&utm_oi=28462207205376&utm_campaign=shareopn#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[v._v("OVS 设计架构"),t("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=a.exports}}]);