(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{466:function(r,t,e){"use strict";e.r(t);var a=e(42),_=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h2",{attrs:{id:"_1-阿里如何进行-rdma-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-阿里如何进行-rdma-部署"}},[r._v("#")]),r._v(" "),e("strong",[r._v("1 阿里如何进行 RDMA 部署")])]),r._v(" "),e("h3",{attrs:{id:"_1-1-rdma-部署规划中的考虑因素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-rdma-部署规划中的考虑因素"}},[r._v("#")]),r._v(" 1.1 RDMA 部署规划中的考虑因素")]),r._v(" "),e("p",[r._v("存储集群的部署规划控制着网络拓扑结构、RDMA 通信范围、存储节点配置等，必须考虑多种因素，包括存储容量与需求的匹配、硬件成本的控制、性能的优化、可用性和 SLA 风险的最小化。最终的结果是所有这些因素之间的权衡。")]),r._v(" "),e("p",[r._v("例如，微软部署 RDMA 的规模是适用于整个 CLOS 网络。因此，如果不加以阻止，PFC 风暴可能会蔓延到整个网络，并导致整个集群的崩溃。在生产级存储系统中，这种风险是不可接受的。")]),r._v(" "),e("h3",{attrs:{id:"_1-2-盘古的-rdma-部署选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-盘古的-rdma-部署选择"}},[r._v("#")]),r._v(" 1.2 盘古的 RDMA 部署选择")]),r._v(" "),e("p",[r._v("RDMA 部署所采用的关键原则是可用性优先。")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://pic3.zhimg.com/v2-2746547643d52b0c64b4f4a369348aee_r.jpg",alt:"img"}})]),r._v(" "),e("p",[e("strong",[r._v("网络和节点配置")]),r._v("。图 2 显示了盘古基于 CLOS 的网络拓扑结构。与常见的 dual-home 实践相一致，我们部署了 Mellanox CX 系列双端口 RNIC 来连接带有两个不同 ToR 交换机的主机。特别是，两个物理端口绑定到一个 IP 地址。网络连接（例如 RDMA 中的 QP）以循环方式 (Round-Robin) 在两个端口上进行均衡。当一个端口关闭时，可以将此端口上的连接迁移到另一个端口。")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://pic4.zhimg.com/v2-bdcdd991f0e8e984cd48f2f52f91b45b_r.jpg",alt:"img"}})]),r._v(" "),e("p",[r._v("表 1 报告了 25Gbps 和 100Gbps RNIC 存储节点的典型硬件配置。每个节点的 SSD 数量由 RNIC 总带宽与单个 SSD 的吞吐量决定，允许 I/O 吞吐量与网络带宽相匹配。请注意，25Gbps 和 100Gbps 配置中的 SSD 类型是不同的，这会导致不成比例的数字。计算和存储节点部署在单个 podset 中的不同机架中。然后根据计算需求计算出计算节点数和存储节点数。")]),r._v(" "),e("p",[e("strong",[r._v("RDMA 范围")]),r._v("。为了最小化故障域，我们只在每个 podset 内和存储节点之间启用 RDMA 通信。计算和存储节点之间的通信通过专用用户空间 TCP 协议执行。这是由于计算节点的硬件配置复杂，更新速度快。因此，TCP 可以有效地作为一种独立于硬件的传输协议来应用。与内核 TCP 相比，用户空间 TCP 更便于升级和管理，而内核 TCP 由于其通用性而被选择用于跨 podset 通信。")]),r._v(" "),e("p",[r._v("生产部署是 podset 级 RDMA 的另一个关注点。在许多数据中心中，podset 位于不同的建筑中（跨楼）。对于交叉构建的 RDMA 链路，基本链路延迟要大得多，而 PFC 机制需要更大的 headroom 缓冲区。为了启用 RDMA，必须仔细调整和测试 Spine 交换机上的 PFC/ECN 阈值。这是一项艰巨的任务，目前还没有取得足够的成果。")]),r._v(" "),e("p",[e("strong",[r._v("RDMA/TCP 混合服务")]),r._v("。据我们所知，以前关于 RDMA 部署的研究并没有探讨 RDMA 和 TCP 混合服务。在盘古，我们遵循可用性第一原则，将 TCP 作为最后的手段。尽管目前取得了进展，RDMA 设备还远没有完美无缺。因此，当可用性或 SLA 受到威胁时，将受影响的链路从 RDMA 切换到 TCP 可以保持可用带宽。此逃逸计划不会影响未受影响的 RDMA 链接。")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://pic3.zhimg.com/v2-374cb50aac7aac6f342d60387faafbbe_r.jpg",alt:"img"}})]),r._v(" "),e("p",[r._v("然而，在混合部署过程中，我们确定共存的 TCP 流量会引发大量 TX 暂停（即 NICs 发送的 PFC 暂停帧），即使 RDMA/TCP 流量被隔离在两个优先级队列中。表 2 报告了盘古在不同负载和大约 50%TCP 流量下的 TX 暂停生成率。测试在 Mellanox CX-4 25Gbps 双端口 RNIC 上执行。如此大量的 TX 暂停对性能有害，并可能导致 PFC 风暴。我们与 Mellanox 一起研究了这个问题，并确定 Linux 内核中 TCP 的处理是高度 I/O 密集型的。内核 TCP 在 NIC 的 PCIe 总线上启动过多的部分写入 / 偏好性写入（partial writes）。随着 PCIe 带宽的消耗，NIC 的接收管道速度减慢。缓冲区溢出，NIC 随后开始传输 PFC pause 帧。")]),r._v(" "),e("p",[r._v("为了优化 TCP 的内存访问，我们对数据访问过程进行了一些调整。首先，禁用大接收偏移量（LRO，Large Receive Offset）可以减少内存带宽的使用。这是由于启用 LRO 时访问多个缓存线造成的。此外，启用 NUMA 还提高了内存访问的效率，从而有助于减轻 PCIe 的压力。我们还为 RDMA 流量在 RNIC 上分配了更大的缓冲区，以防止 TX 暂停。最后，使应用程序数据缓存线对齐（cacheline-aligned）也是提高内存效率的常见优化实践。")]),r._v(" "),e("h2",{attrs:{id:"_2-阿里部署-rdma-的性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-阿里部署-rdma-的性能优化"}},[r._v("#")]),r._v(" "),e("strong",[r._v("2 阿里部署 RDMA 的性能优化")])]),r._v(" "),e("h3",{attrs:{id:"_2-1-性能障碍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-性能障碍"}},[r._v("#")]),r._v(" 2.1 性能障碍")]),r._v(" "),e("p",[r._v("盘古的性能优化目标是在最大化吞吐量的同时，最大限度地减少延迟。")]),r._v(" "),e("p",[e("strong",[r._v("RDMA - 存储协同设计")]),r._v("。将 RDMA 协议栈与存储后端集成是一项挑战。它必须涵盖关键的性能点，如线程建模、内存管理和数据序列化。由于线程之间的通信开销，线程模型直接影响延迟。设计良好的内存管理和数据序列化是在数据访问期间实现零拷贝的关键。在这里，我们将简要介绍这些用于存储目的的组件的设计。")]),r._v(" "),e("p",[r._v("用户空间存储操作系统（USSOS）是一个统一的用户空间存储软件平台，旨在支持 NVMe SSD 和持久性内存等新的存储介质。其设计原则（例如，内存管理、共享内存机制和用户空间驱动程序）基于众所周知的用户空间技术（例如，DPDK 和 SPDK）。相关测试显示，在盘古启用 USSOS 可以将 CPU 效率平均可提高 5% 以上。")]),r._v(" "),e("p",[r._v("作为 USSOS 的核心部分，用户空间存储文件系统（USSFS）是一种为 SSD 设计的高性能本地文件系统。通过在用户空间中运行，USSFS 能够绕过内核以避免用户 / 内核空间交叉开销。USSOS 将磁盘划分为 “块”，这些块被 ChunkServer 在其 API 中使用（例如，创建、封装和删除）。USSOS 直接将数据和元数据写入磁盘，并使用轮询来感知完成事件。对于不同的块大小，与 Ext4 文件系统相比 USSFS 能够将 IOPS 提高 4-10 倍。")]),r._v(" "),e("p",[r._v("运行到完成（run-to-completion）模型被认为是 RDMA 网络栈与存储栈集成的最佳方法。这个模型以前在讨论分类存储的研究中被探讨过（例如，Reflex，i10）。然而，这些研究是在 2017 年将 RDMA 引入 Pangu 之后发表的。Reflex 和 i10 侧重于远程直接 I/O，而 Pangu 中的 ChunkServer 则作为本地存储引擎应用于分布式存储。谷歌的 Snap 利用一个单独的网络进程来统一网络功能，减少网络连接的数量。")]),r._v(" "),e("p",[e("strong",[r._v("100Gbps 网络的内存瓶颈")]),r._v("。部署 100Gbps 网络可以实现更低的延迟和更高的吞吐量。随着网络速度的提高，内存吞吐量成为了系统的瓶颈。")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://pic1.zhimg.com/v2-f3a1c1396b8ef08580a901e7ff2086ac_r.jpg",alt:"img"}})]),r._v(" "),e("p",[r._v("为了获得内存访问吞吐量的上限，我们使用 Intel memory Latency Checker（MLC）工具测试内存吞吐量。表 3 详细说明了硬件资源的实际使用情况。在我们的测试中，最大可实现的内存带宽为 61GB/s，读写比为 1:1。但是，Pangu 工作负载的平均内存吞吐量已经是 29GB/s+28GB/s=57GB/s。这表明内存是瓶颈，而不是网络。")]),r._v(" "),e("p",[r._v("通过监视盘古中的内存使用情况，我们确定验证和数据复制过程都需要优化。数据完整性是分布式存储最重要的特性之一。盘古采用循环冗余校验（CRC）进行应用级数据验证。")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://pic4.zhimg.com/v2-250210a0bdfa574a6e30b675b671942b_r.jpg",alt:"img"}})]),r._v(" "),e("p",[r._v("如图 4 所示，接收到的数据被分成 4KB 的块，每个块加上 4B CRC 值和 44B 间隙。当计算应用于整个数据集时，此操作是内存和计算密集型操作。数据在写入磁盘时也会被复制，以便包含 CRC 校验。由于 RDMA 的远程内存访问语义，在其他组件中不执行复制。")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://pic3.zhimg.com/v2-7a171cf374e27712b07574ca15750846_r.jpg",alt:"img"}})]),r._v(" "),e("p",[e("strong",[r._v("大量 QP")]),r._v("。我们过去在盘古的运行线程之间采用全网状链路模式（full-mesh link mode），以最大化吞吐量和最小化延迟（图 6（a））。假设每个 ChunkServer 有 14 个线程，每个 BlockServer 有 8 个线程，每个节点同时包含 ChunkServer 和 BlockServer。对于 100 个存储节点组成的集群中的全网格模式，可能有 14 个节点 ×8×2×99 = 每个节点 22176 个 QPs。由于 cache 未命中（cache miss），RNICs 对于大量 QP 的性能会急剧下降。特别地，RX 暂停（即，接收到的 PFC 暂停帧）的数目非常高。")]),r._v(" "),e("p",[r._v("以前的研究也证明了同样的问题。为了解决这个问题，FaSST 在线程之间共享 QPs，由于线程之间 QPs 的锁争用（lock contention），从而降低了 CPU 效率和性能。另一种启发式方法是包含一个专用的代理线程来管理所有的接收和发送请求。但是，切换到 / 从专用代理线程切换回来会增加延迟。此外，单线程很难打满整个网络带宽。此外，代理解决方案对底层 RDMA 库是不透明的。")]),r._v(" "),e("h3",{attrs:{id:"_2-2-盘古的性能相关设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-盘古的性能相关设计"}},[r._v("#")]),r._v(" 2.2 盘古的性能相关设计")]),r._v(" "),e("p",[r._v("盘古的性能相关设计是基于软硬件协同设计的原则，以最小化性能开销。")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://pic4.zhimg.com/v2-bfa591b0e0b3703dccbc41185968221f_r.jpg",alt:"img"}})]),r._v(" "),e("p",[e("strong",[r._v("存储 - RDMA 统一的运行到完成（Run-to-Completion）协议栈")]),r._v("。我们对存储和网络都采用了从运行到完成的线程模型，以实现低延迟。图 5 示出了用于处理请求的过程。当节点接收到写 RPC 时，RNIC 通过 DMA 将其发送到用户空间。RPC 框架使用轮询获得请求，然后将其交给 ChunkServer 模块进行处理。然后 ChunkServer 通知 USSFS 为请求分配一个 “chunk” 资源。最后，用户空间驱动程序与 NVMe SSD 交互以存储数据。这些操作通常在单个服务器线程中执行，而不进行线程切换。这种从运行到完成的模型使延迟最小化。为了减少任务（jobs）造成的阻塞时间，应用程序在提交大的 I/O 请求时会将请求拆分为小的请求。这种优化确保了对 I/O 信号的快速响应。针对大型 I/O 请求的另一种优化策略涉及将辅助工作（例如格式化和 CRC 计算）传递到非 I/O 线程，然后在那里对它们进行处理。这些优化将典型存储请求（例如，4KB 大小）的平均延迟减少到 30us 以下。")]),r._v(" "),e("p",[r._v("数据格式统一为 I/O 向量。在网络中使用分散 - 聚集 DMA（通过单个中断传输不连续数据），通过单个 RDMA verb 传输 I/O 向量而不进行复制。由于 RDMA 语义，序列化是不必要的。")]),r._v(" "),e("p",[e("strong",[r._v("零拷贝和 CRC 卸载")]),r._v("。如上述所述，数据必须在 I/O 路径上复制一次，因为每个 4KB 的数据块都经过验证，并附有一个 CRC 校验值。这里，我们利用 RNICs 的用户模式内存注册（UMR）特性来避免这种数据复制。UMR 可以通过定义适当的内存 keys 将 RDMA 数据分散在远程端。因此，可以根据存储应用程序格式格式化和组织数据。我们使用 UMR 将发送方的连续数据重新映射到接收方的 I/O 缓冲区，其中包含 4KB 的数据、4B 的校验值和 44B 的间隔。在 CRC 计算之后，填充的 I/O 缓冲区可以直接用于磁盘写入。此外，CRC 计算能够卸载到有能力的 RNIC（例如 Mellanox CX-5），从而降低 CPU 和内存的使用。4KB 数据被发送到 RNIC，然后生成 4B CRC 校验和。")]),r._v(" "),e("p",[e("strong",[r._v("共享链接")]),r._v("。我们采用共享链路模式，有效地减少了盘古 QP 的数量。共享链接模式是在应用层实现的，不影响 RDMA 库。目的节点中的对应线程被分配给源节点中的每个线程（图 6（b））。线程对节点的请求被发送到相应的线程，该线程随后将请求发送到正确的目标线程。")]),r._v(" "),e("p",[r._v("考虑一个有 N 个线程的守护进程，每个线程轮询 N 个请求 / 响应队列以获得请求 / 响应。请注意，每个请求 / 响应队列只有一个生产者 / 消费者。因此，我们对每个请求 / 响应队列使用无锁队列来避免争用。根据我们的测试，这个设计增加了大约 0.3us 的延迟。")]),r._v(" "),e("p",[r._v("在共享链接模式下，当源线程发送太多请求时，在请求调度期间，相应线程上会有资源开销。Pangu 支持共享组，其中一个节点中的线程可以分为多个组。对应线程只转发对其组成员的请求。回到上一个示例，全共享模式中的 QP 的数量现在减少到（8+8）×99=1584。如果线程被分成 2 个共享组，QP 的数量将是（8× 2 + 8 × 2) × 99 =3,168.")]),r._v(" "),e("p",[r._v("未完待续...")]),r._v(" "),e("p",[e("strong",[r._v("参考文献")]),r._v("：Yixiao Gao, et., al. “When Cloud Storage Meets RDMA”. In Proceedings of USENIX NSDI, 2021.")]),r._v(" "),e("p",[e("strong",[r._v('更多精彩内容，请关注微信公众号 "网络技术风云汇"。')])]),r._v(" "),e("p",[r._v("全文完")]),r._v(" "),e("p",[r._v("本文由 "),e("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[r._v("简悦 SimpRead"),e("OutboundLink")],1),r._v(" 优化，用以提升阅读体验")]),r._v(" "),e("p",[r._v("使用了 全新的简悦词法分析引擎 beta，"),e("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[r._v("点击查看"),e("OutboundLink")],1),r._v("详细说明")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/376989325#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[r._v("1 阿里如何进行 RDMA 部署"),e("OutboundLink")],1),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/376989325#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[r._v("1.1 RDMA 部署规划中的考虑因素"),e("OutboundLink")],1),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/376989325#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[r._v("1.2 盘古的 RDMA 部署选择"),e("OutboundLink")],1),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/376989325#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[r._v("2 阿里部署 RDMA 的性能优化"),e("OutboundLink")],1),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/376989325#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[r._v("2.1 性能障碍"),e("OutboundLink")],1),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/376989325#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[r._v("2.2 盘古的性能相关设计"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=_.exports}}]);