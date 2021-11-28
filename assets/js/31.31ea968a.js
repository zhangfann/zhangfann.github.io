(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{413:function(v,_,t){"use strict";t.r(_);var p=t(42),r=Object(p.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/RgSga7rAb5o5Vpm2PiBtDg",target:"_blank",rel:"noopener noreferrer"}},[v._v("来源"),t("OutboundLink")],1)]),v._v(" "),t("p",[v._v("自从软件开发的早期 (1960 年代) 以来，解决大型软件系统中的复杂性一直是一项艰巨的任务。多年来，软件工程师和架构师为解决软件系统的复杂性进行了许多尝试：David Parnas 的模块化和信息隐藏(1972)，Edsger W. Dijkstra 的关注分离(1974)，面向服务的体系结构(1998)。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/XCETLoXzTr9w4qNRPLGNX0N8q32dgibwJBy5vUxDpTNbiaEUHk59HEe0XHUO0jl4PelXsoAjX0bltNpdp2N9ThEg/640?wx_fmt=jpeg",alt:"img"}})]),v._v(" "),t("p",[v._v('他们所有人都使用了久经考验的成熟技术来解决大型系统的复杂性：分而治之。自 2010 年代以来，这些技术不足以解决 Web 规模应用程序或现代大型企业应用程序的复杂性。结果，架构师和工程师开发了一种新方法来解决现代软件系统的复杂性：微服务架构。它也使用了相同的旧 "分而治之" 技术，尽管采用了新颖的方式。')]),v._v(" "),t("p",[v._v("软件设计模式是解决软件设计中常见问题的通用，可重用的解决方案。设计模式可帮助我们共享通用词汇，并使用经过实战检验的解决方案，而不是重新发明轮子。今天描述的是一组设计模式，以帮助您实现这些最佳实践。")]),v._v(" "),t("p",[v._v("本文"),t("strong",[v._v("主要内容：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 微服务架构")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 微服务架构的优势")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 微服务架构的缺点")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 何时使用微服务架构")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 微服务架构设计模式")]),v._v(" "),t("p",[v._v("请注意，此清单的大多数设计模式都有几种上下文，可以在非微服务体系结构中使用。但是我将在微服务架构的背景下对其进行描述。")]),v._v(" "),t("p",[t("strong",[v._v("微服务架构")])]),v._v(" "),t("p",[v._v("**微服务体系结构：**简要概述以及为什么要在下一个项目中使用它以及模块化单片软件体系结构真的死了吗?")]),v._v(" "),t("p",[v._v("我的"),t("strong",[v._v("微服务架构定义")]),v._v("是：")]),v._v(" "),t("p",[v._v("微服务架构旨在将大型，复杂的系统垂直 (按功能或业务要求) 划分为较小的子系统，这些子系统属于流程 (因此可独立部署)，并且这些子系统之间通过与语言无关的轻量级网络通信相互通信(例如 REST，gRPC) 或异步 (通过消息传递) 方式。")]),v._v(" "),t("p",[v._v("这是具有微服务架构的业务 Web 应用程序的组件视图：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/XCETLoXzTr9w4qNRPLGNX0N8q32dgibwJCdibw578Lh5QZclGw8iaZuplLicnjUJPW8zjlRTLdXx45ld2nhJFNNlRg/640?wx_fmt=jpeg",alt:"img"}})]),v._v(" "),t("p",[v._v("> Microservice Architecture by Md Kamaruzzaman")]),v._v(" "),t("p",[v._v("微服务架构的"),t("strong",[v._v("重要特征")]),v._v("：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 整个应用程序分为多个单独的进程，每个进程可以包含多个内部模块。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 与模块化 Monoliths 或 SOA 相反，微服务应用程序是垂直拆分的 (根据业务能力或领域) 微服务边界是外部的。结果，微服务通过网络调用 (RPC 或消息) 相互通信。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 由于微服务是独立的流程，因此它们可以独立部署。他们以轻巧的方式交流，不需要任何智能交流渠道。")]),v._v(" "),t("p",[v._v("微服务架构的"),t("strong",[v._v("优势")]),v._v("：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 更好的开发规模。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 更高的发展速度。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 支持迭代或增量现代化。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 充分利用现代软件开发生态系统 (云，容器，DevOps，无服务器) 的优势。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 支持水平缩放和粒度缩放。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 由于尺寸较小，它降低了开发人员的认知复杂度。")]),v._v(" "),t("p",[v._v("微服务架构的"),t("strong",[v._v("缺点")]),v._v("：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 大量的活动部件 (服务，数据库，流程，容器，框架)。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 复杂性从代码转移到基础架构。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" RPC 调用和网络流量的激增。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 管理整个系统的安全性具有挑战性。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 设计整个系统比较困难。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 介绍分布式系统的复杂性。")]),v._v(" "),t("p",[t("strong",[v._v("何时使用")]),v._v("微服务架构：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" Web 规模应用程序开发。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 当多个团队处理应用程序时，进行企业应用程序开发。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 长期收益优先于短期收益。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 该团队拥有能够设计微服务架构的软件架构师或高级工程师。")]),v._v(" "),t("p",[t("strong",[v._v("微服务架构的设计模式")])]),v._v(" "),t("p",[t("strong",[v._v("每个微服务独占数据库")])]),v._v(" "),t("p",[v._v("一旦公司用许多较小的微服务替换了大型的单片系统，它面临的最重要的决定就是关于数据库。在整体架构中，使用大型中央数据库。许多架构师都喜欢保留数据库原样，即使他们转向微服务架构也是如此。尽管它提供了一些短期好处，但它是一种反模式，尤其是在大规模系统中，因为微服务将紧密耦合在数据库层中。转向微服务的整个目标将失败 (例如，团队授权，独立开发)。")]),v._v(" "),t("p",[v._v("更好的方法是为每个微服务都提供自己的数据存储，以使数据库层中的服务之间不存在强耦合。在这里，我使用数据库一词来表示数据的逻辑分离，即微服务可以共享同一物理数据库，但是它们应该使用单独的架构 / 集合 / 表。它还将确保根据域驱动设计正确隔离微服务。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/XCETLoXzTr9w4qNRPLGNX0N8q32dgibwJUehtJMibXpDvScaR8vheWsZP6z6O9jfOFGfjEcmCtPHDea00iaSMIZibA/640?wx_fmt=jpeg",alt:"img"}})]),v._v(" "),t("p",[v._v("> Database per Microservice by Md Kamaruzzaman")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 数据对服务的完全所有权。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 开发服务的团队之间的松耦合。")]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在服务之间共享数据变得充满挑战。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 提供应用程序范围的 ACID 事务保证变得更加困难。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 将 Monolith 数据库分解为较小的零件需要仔细设计，这是一项艰巨的任务。")]),v._v(" "),t("p",[v._v("每个微服务"),t("strong",[v._v("何时使用数据库：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在大型企业中的应用。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 当团队需要其微服务的完全所有权以进行开发扩展和提高开发速度时。")]),v._v(" "),t("p",[t("strong",[v._v("什么时候不使用")]),v._v("每个微服务的数据库：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在小型应用中。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 如果一个团队开发所有微服务。")]),v._v(" "),t("p",[v._v("启用"),t("strong",[v._v("技术示例")]),v._v("：")]),v._v(" "),t("p",[v._v("所有 SQL 和 NoSQL 数据库都提供逻辑上的数据分离 (例如，分离的表，集合，模式，数据库)。")]),v._v(" "),t("p",[t("strong",[v._v("事件源 Event Sourcing")])]),v._v(" "),t("p",[v._v("在微服务架构中，尤其是在每个微服务使用数据库的情况下，微服务需要交换数据。对于有弹性，高度可扩展和容错的系统，它们应通过交换事件进行异步通信。")]),v._v(" "),t("p",[v._v("在这种情况下，可能需要进行原子操作，例如，更新数据库并发送消息。如果您有 SQL 数据库，并且希望为大量数据分配分布式事务，则不能使用两阶段锁定 (2PL)，因为它无法扩展。")]),v._v(" "),t("p",[v._v("如果使用 NoSQL 数据库并希望具有分布式事务，则不能使用 2PL，因为许多 NoSQL 数据库不支持两阶段锁定。")]),v._v(" "),t("p",[v._v('在这种情况下，请结合使用基于事件的体系结构和事件源。在传统数据库中，具有当前 "状态" 的业务实体被直接存储。在事件源中，将存储任何状态更改事件或其他重要事件，而不是实体。')]),v._v(" "),t("p",[v._v("这意味着业务实体的修改将保存为一系列不可变的事件。通过在给定时间重新处理该业务实体的所有事件，可以扣除该业务实体的状态。因为数据存储为一系列事件，而不是通过直接更新数据存储来存储，所以各种服务可以从事件存储中重播事件以计算其各自数据存储的适当状态。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/XCETLoXzTr9w4qNRPLGNX0N8q32dgibwJw9wtq6GFMy46ONjQpZ0cctjyQPsG0N180Ehd0XVvxnpGhFctgA9lvg/640?wx_fmt=jpeg",alt:"img"}})]),v._v(" "),t("p",[v._v("> Event Sourcing by Md Kamaruzzaman")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 为高度可扩展的系统提供原子性。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 实体的自动历史记录，包括时间旅行功能。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 松散耦合和事件驱动的微服务。")]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 从事件存储中读取实体变得具有挑战性，通常需要额外的数据存储 (CQRS 模式)")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 系统的整体复杂性增加，通常需要域驱动设计。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 系统需要处理重复事件 (幂等) 或丢失事件。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 迁移事件模式变得具有挑战性。")]),v._v(" "),t("p",[t("strong",[v._v("何时使用")]),v._v("事件来源：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 具有 SQL 数据库的高度可扩展的事务系统。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 带有 NoSQL 数据库的事务系统。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 高度可扩展且具有弹性的微服务架构。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 典型的消息驱动或事件驱动系统 (电子商务，预订和预订系统)。")]),v._v(" "),t("p",[t("strong",[v._v("何时不使用")]),v._v("事件来源：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 具有 SQL 数据库的低伸缩性事务系统。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在简单的微服务架构中，微服务可以同步交换数据 (例如，通过 API)。")]),v._v(" "),t("p",[v._v("启用"),t("strong",[v._v("技术示例")]),v._v("：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" **事件存储：**EventStoreDB，Apache Kafka，Confluent Cloud，AWS Kinesis，Azure 事件中心，GCP 发布 / 订阅，Azure Cosmos DB，MongoDB，Cassandra。Amazon DynamoDB，")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" **框架：**Lagom，Akka，Spring，akkatecture，Axon，Eventuate")]),v._v(" "),t("p",[t("strong",[v._v("命令查询职责隔离 (CQRS)")])]),v._v(" "),t("p",[v._v("如果我们使用事件源，那么从事件存储中读取数据将变得充满挑战。要从数据存储中获取实体，我们需要处理所有实体事件。另外，有时我们对读写操作有不同的一致性和吞吐量要求。")]),v._v(" "),t("p",[v._v("在这种用例中，我们可以使用 CQRS 模式。在 CQRS 模式中，系统的数据修改部分 (命令) 与数据读取 (查询) 部分分开。CQRS 模式有两种形式：简单和高级，这导致软件工程师之间产生一些混淆。")]),v._v(" "),t("p",[v._v("以简单的形式，不同的实体或 ORM 模型用于读取和写入，如下所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/XCETLoXzTr9w4qNRPLGNX0N8q32dgibwJ8bnJcFucxtpJiakbwFwIhmtbyXWBiaWwqRv1KOw7eKal3GZ78IbWbaTQ/640?wx_fmt=jpeg",alt:"img"}})]),v._v(" "),t("p",[v._v("> CQRS (simple) by Md Kamaruzzaman")]),v._v(" "),t("p",[v._v('它有助于实施 "单一责任原则" 和 "关注点分离"，从而使设计更简洁。')]),v._v(" "),t("p",[v._v('在其高级形式中，不同的数据存储区用于读取和写入操作。高级 CQRS 与事件来源一起使用。根据使用情况，使用不同类型的写入数据存储和读取数据存储。写入数据存储区是 "记录系统"，即整个系统的黄金来源。')]),v._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/XCETLoXzTr9w4qNRPLGNX0N8q32dgibwJicfYMaWvyt7kcdLQjEw58gotOwHQdZ2CoWwtmdc3Zl2iaXeR0PyRa04w/640?wx_fmt=jpeg",alt:"img"}})]),v._v(" "),t("p",[v._v("> CQRS (advanced) by Md Kamaruzzaman")]),v._v(" "),t("p",[v._v("对于重读应用程序或微服务体系结构，将 OLTP 数据库 (任何提供 ACID 事务保证的 SQL 或 NoSQL 数据库) 或分布式消息平台用作写存储。对于繁重的写程序(高写可伸缩性和吞吐量)，使用了水平可写伸缩的数据库(公共云全局数据库)。规范化的数据保存在写入数据存储中。")]),v._v(" "),t("p",[v._v("为搜索 (例如 Apache Solr，Elasticsearch) 或读取 (键值数据存储，文档数据存储) 而优化的 NoSQL 数据库用作读取存储。在许多情况下，在需要 SQL 查询的地方使用可伸缩的 SQL 数据库。归一化和优化的数据将保存在读取存储中。")]),v._v(" "),t("p",[v._v("数据从写入存储异步复制到读取存储。结果，读存储区滞后于写存储区，并且最终保持一致。")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在事件驱动的微服务中更快地读取数据。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 数据的高可用性。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 读写系统可以独立扩展。")]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 读取数据存储弱一致性 (最终一致性)")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 系统的整体复杂性增加。货运培训 CQRS 可能会严重危害整个项目。")]),v._v(" "),t("p",[t("strong",[v._v("何时使用")]),v._v(" CQRS：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在使用事件源的高度可扩展的微服务体系结构中。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在读取数据需要查询到多个数据存储区的复杂域模型中。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在读写操作具有不同负载的系统中。")]),v._v(" "),t("p",[t("strong",[v._v("何时不使用")]),v._v(" CQRS：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在微事件数量微不足道的微服务体系结构中，使用事件存储快照来计算实体状态是更好的选择。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在读写操作具有相似负载的系统中。")]),v._v(" "),t("p",[v._v("启用"),t("strong",[v._v("技术示例")]),v._v("：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" **写存储：**EventStoreDB，Apache Kafka，Confluent Cloud，AWS Kinesis，Azure Event Hub，GCP 发布 / 订阅，Azure Cosmos DB，MongoDB，Cassandra。亚马逊 DynamoDB")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" **阅读商店：**Elastic Search，Solr，Cloud Spanner，Amazon Aurora，Azure Cosmos DB，Neo4j")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" **框架：**Lagom，Akka，Spring，akkatecture，Axon，Eventuate")]),v._v(" "),t("p",[t("strong",[v._v("SAGA")])]),v._v(" "),t("p",[v._v("如果您将微服务体系结构与每个微服务的数据库一起使用，那么通过分布式事务管理一致性就具有挑战性。您不能使用传统的两阶段提交协议，因为它无法扩展 (SQL 数据库) 或不被支持(许多 NoSQL 数据库)。")]),v._v(" "),t("p",[v._v("您可以将 Saga 模式用于 Microservice Architecture 中的分布式事务。Saga 是一种旧模式，于 1987 年开发，作为 SQL 数据库中长期运行的数据库事务的概念替代方案。但是，这种模式的现代变体对于分布式事务也非常有效。Saga 模式是一个本地事务序列，其中每个事务在单个微服务中更新数据存储中的数据并发布事件或消息。传奇中的第一个事务由外部请求 (事件或操作) 启动。一旦本地事务完成(数据存储在数据存储中，并且发布消息或事件)，发布的消息 / 事件将触发 Saga 中的下一个本地事务。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/XCETLoXzTr9w4qNRPLGNX0N8q32dgibwJq9dBmhuz2F4LicaLeIF425icCemeRvWibAgmefwrsTpXmWQNNN3BSWVHg/640?wx_fmt=jpeg",alt:"img"}})]),v._v(" "),t("p",[v._v("> Saga by Md Kamaruzzaman")]),v._v(" "),t("p",[v._v("如果本地事务失败，则 Saga 执行一系列补偿事务，以撤消先前本地事务的更改。")]),v._v(" "),t("p",[v._v("Saga 交易协调主要有"),t("strong",[v._v("两种变体：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" "),t("strong",[v._v("分散的协调")]),v._v("，每个微服务生成并收听其他微服务的事件 / 消息，并决定是否应该采取措施。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" "),t("strong",[v._v("统筹协调")]),v._v("，协调器告诉协调的微服务哪些本地事务需要执行。")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 通过高度可扩展的或松散耦合的，事件驱动的微服务架构中的事务来提供一致性。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 通过使用没有 2PC 支持的 NoSQL 数据库的微服务体系结构中的事务来提供一致性。")]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 需要处理短暂故障，并应提供幂等性。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 难以调试，并且随着微服务数量的增加，复杂性也随之增加。")]),v._v(" "),t("p",[t("strong",[v._v("何时使用")]),v._v("：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在使用事件源的高度可扩展的，松散耦合的微服务架构中。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在使用分布式 NoSQL 数据库的系统中。")]),v._v(" "),t("p",[t("strong",[v._v("什么时候不使用")]),v._v("：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 具有 SQL 数据库的低伸缩性事务系统。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在服务之间存在循环依赖性的系统中。")]),v._v(" "),t("p",[v._v("启用"),t("strong",[v._v("技术示例：")])]),v._v(" "),t("p",[v._v("Axon，Eventuate，Narayana")]),v._v(" "),t("p",[t("strong",[v._v("前端的后端 (BFF)")])]),v._v(" "),t("p",[v._v("在现代业务应用程序开发中，尤其是在微服务体系结构中，前端和后端应用程序是分离的和独立的服务。它们通过 API 或 GraphQL 连接。如果应用程序还具有 Mobile App 客户端，则对 Web 和 Mobile 客户端使用相同的后端微服务将成为问题。移动客户端的 API 要求通常与 Web 客户端不同，因为它们具有不同的屏幕大小，显示，性能，能源和网络带宽。")]),v._v(" "),t("p",[v._v("后端的后端模式可用于每个 UI 都有为特定 UI 定制的单独后端的场景。它还提供了其他优势，例如充当下游微服务的外观，从而减少了 UI 与下游微服务之间的闲聊通信。同样，在高度安全的情况下，下游微服务部署在 DMZ 网络中，BFF 用于提供更高的安全性。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/XCETLoXzTr9w4qNRPLGNX0N8q32dgibwJCz1jTaJ5Lej2RDoZzf8hML8FlmKGhUQOAQ6J6oa6oSXGV4Rb5safLw/640?wx_fmt=jpeg",alt:"img"}})]),v._v(" "),t("p",[v._v("> Backends for Frontends by Md Kamaruzzaman")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" BFF 之间的关注点分离。我们可以针对特定的 UI 优化它们。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 提供更高的安全性。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 减少 UI 与下游微服务之间的交流。")]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" BFF 之间的代码重复。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 如果使用其他许多 UI(例如，智能电视，Web，移动设备，台式机)，BFF 的数量也会激增。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" BFF 不应包含任何业务逻辑，而应仅包含特定于客户的逻辑和行为，因此需要仔细设计和实施。")]),v._v(" "),t("p",[t("strong",[v._v("何时将后端用于前端：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 如果应用程序具有多个具有不同 API 要求的 UI。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 如果出于安全原因在 UI 和下游微服务之间需要额外的一层。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 如果在 UI 开发中使用微前端。")]),v._v(" "),t("p",[t("strong",[v._v("何时不使用")]),v._v("后端作为前端：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 如果应用程序具有多个 UI，但是它们使用相同的 API。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 如果未在 DMZ 中部署核心微服务。")]),v._v(" "),t("p",[v._v("启用"),t("strong",[v._v("技术示例：")])]),v._v(" "),t("p",[v._v("任何后端框架 (Node.js，Spring，Django，Laravel，Flask，Play 等) 都支持它。")]),v._v(" "),t("p",[t("strong",[v._v("API 网关")])]),v._v(" "),t("p",[v._v("在微服务架构中，UI 通常与多个微服务连接。如果微服务是细粒度的 (FaaS)，则客户端可能需要连接许多微服务，这变得很繁琐且具有挑战性。而且，服务(包括其 API) 可以发展。大型企业还希望拥有其他跨领域的问题(SSL 终止，身份验证，授权，限制，日志记录等)。")]),v._v(" "),t("p",[v._v("解决这些问题的一种可能方法是使用 API 网关。API 网关位于客户端 APP 和后端微服务之间，并充当外观。它可以用作反向代理，将客户端请求路由到适当的后端微服务。它还可以支持将客户端请求的扇出扩展到多个微服务，然后将汇总的响应返回给客户端。它还支持基本的跨领域关注。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/XCETLoXzTr9w4qNRPLGNX0N8q32dgibwJVAv3nn7Flzianzia0X2yOYMOll5yUibyjQ8usDK3tQQzsL0moiaQbFicTUQ/640?wx_fmt=jpeg",alt:"img"}})]),v._v(" "),t("p",[v._v("> API Gateway by Md Kamaruzzaman")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 提供前端和后端微服务之间的松散耦合。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 减少客户端和微服务之间的往返呼叫次数。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 通过 SSL 终止，身份验证和授权实现高安全性。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 集中管理的跨领域问题，例如日志记录和监视，节流，负载平衡。")]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 可能导致微服务架构中的单点故障。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 由于额外的网络呼叫，延迟增加了。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 如果不进行扩展，它们很容易成为整个企业的瓶颈。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 额外的维护和开发成本。")]),v._v(" "),t("p",[t("strong",[v._v("何时使用 API 网关：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在复杂的微服务架构中，这几乎是强制性的。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在大型公司中，必须使用 API 网关来集中安全性和跨领域问题。")]),v._v(" "),t("p",[t("strong",[v._v("何时不使用 API 网关：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在安全性和中央管理不是最高优先级的私人项目或小型公司中。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 如果微服务的数量很小。")]),v._v(" "),t("p",[v._v("启用"),t("strong",[v._v("技术示例：")])]),v._v(" "),t("p",[v._v("Amazon API Gateway，Azure API 管理，Apigee，Kong，WSO2 API 管理器")]),v._v(" "),t("p",[t("strong",[v._v("扼杀者")])]),v._v(" "),t("p",[v._v("如果要在棕地项目中使用微服务架构，则需要将旧版或现有的 Monolithic 应用程序迁移到微服务。将现有的大型生产单片式应用程序迁移到微服务中具有很大的挑战性，因为这可能会破坏应用程序的可用性。")]),v._v(" "),t("p",[v._v('一种解决方案是使用 Strangler 模式。Strangler 模式意味着通过逐步用新的微服务替换特定功能，将 Monolithic 应用程序逐步迁移到微服务架构。此外，新功能仅在微服务中添加，绕过了传统的 Monolithic 应用程序。然后将 Facade(API 网关) 配置为在旧版 Monolith 和微服务之间路由请求。一旦功能从 Monolith 迁移到微服务，Facade 就会拦截客户端请求并路由到新的微服务。一旦所有旧版 Monolithic 功能都已迁移，旧版 Monolithic 应用程序将被 "勒死"，即退役。')]),v._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/XCETLoXzTr9w4qNRPLGNX0N8q32dgibwJwQXezMYGNicxoQ8vfRamHqibUy9SkKvBxCr6M5qLeOkJCdoxDCkaQN3Q/640?wx_fmt=jpeg",alt:"img"}})]),v._v(" "),t("p",[v._v("> Strangler by Md Kamaruzzaman")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 将 Monolithic 应用程序安全迁移到微服务。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 迁移和新功能开发可以并行进行。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 迁移过程可以有自己的进度。")]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在现有的 Monolith 和新的微服务之间共享数据存储变得充满挑战。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 添加外观 (API 网关) 将增加系统延迟。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 端到端测试变得困难。")]),v._v(" "),t("p",[t("strong",[v._v("何时使用")]),v._v(" Strangler：")]),v._v(" "),t("p",[v._v("将大型后端单片应用程序增量迁移到微服务。")]),v._v(" "),t("p",[t("strong",[v._v("何时不使用")]),v._v(" Strangler：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 如果后端整体组件较小，则批量替换是一个更好的选择。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 如果客户端对旧版 Monolithic 应用程序的请求无法被拦截。")]),v._v(" "),t("p",[t("strong",[v._v("推动技术：")])]),v._v(" "),t("p",[v._v("带有 API 网关的后端应用程序框架。")]),v._v(" "),t("p",[t("strong",[v._v("断路器")])]),v._v(" "),t("p",[v._v("在微服务体系结构中，微服务进行同步通信，微服务通常调用其他服务来满足业务需求。由于瞬态故障 (网络连接速度慢，超时或时间不可用)，对另一个服务的调用可能会失败。在这种情况下，重试呼叫可以解决此问题。但是，如果存在严重问题 (微服务完全失败)，则微服务将长时间不可用。在这种情况下，重试是没有意义的，并且浪费了宝贵的资源 (线程被阻塞，浪费了 CPU 周期)。同样，一项服务的故障可能会导致整个应用程序级联故障。在这种情况下，立即失败是一种更好的方法。")]),v._v(" "),t("p",[v._v("对于此类用例，可以使用断路器模式。微服务应通过代理来请求另一个微服务，该代理的工作方式类似于断路器。代理应该计算最近发生的故障数，并使用它来决定是允许操作继续进行还是直接返回异常。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/XCETLoXzTr9w4qNRPLGNX0N8q32dgibwJ6CU7NLe1ZI6ibiaTDVAo2IaX8oDcWMLUXW7jz8QxfuIUFRMv4ibeyeY6w/640?wx_fmt=jpeg",alt:"img"}})]),v._v(" "),t("p",[v._v("> Circuit Breaker by Md Kamaruzzaman")]),v._v(" "),t("p",[t("strong",[v._v("断路器")]),v._v("可以具有以下"),t("strong",[v._v("三种状态：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(' **已关闭：**断路器将请求发送到微服务，并计算给定时间段内的故障数。如果在一定时间内的故障数量超过阈值，则它将跳闸并进入 "打开状态"。')]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" **打开：**来自微服务的请求立即失败，并返回异常。超时后，断路器进入半开状态。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(' **半开放式：**仅允许来自微服务的有限数量的请求通过并调用该操作。如果这些请求成功，则断路器将进入闭合状态。如果任何请求失败，则断路器进入 "打开" 状态。')]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 提高微服务架构的容错性和弹性。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 停止将故障级联到其他微服务。")]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 需要复杂的异常处理。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 记录和监视。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 应该支持手动重置。")]),v._v(" "),t("p",[t("strong",[v._v("何时使用")]),v._v("断路器：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 在紧密耦合的微服务体系结构中，微服务进行同步通信。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 一个微服务是否依赖于多个其他微服务。")]),v._v(" "),t("p",[t("strong",[v._v("何时不使用")]),v._v("断路器：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 松散耦合的，事件驱动的微服务架构。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 微服务是否不依赖于其他微服务。")]),v._v(" "),t("p",[t("strong",[v._v("推动技术：")])]),v._v(" "),t("p",[v._v("API 网关，服务网格，各种断路器库 (Hystrix，Reselience4J，Polly。")]),v._v(" "),t("p",[t("strong",[v._v("外部化配置")])]),v._v(" "),t("p",[v._v("每个业务应用程序都有许多用于各种基础结构的配置参数 (例如，数据库，网络，连接的服务地址，凭据，证书路径)。同样，在企业环境中，应用程序通常部署在各种运行时中 (本地，开发，生产)。实现此目标的一种方法是通过内部配置，这是一种致命的不良做法。由于很容易破坏生产凭据，因此可能导致严重的安全风险。另外，配置参数的任何更改都需要重建应用程序。在微服务架构中，这一点尤为重要，因为我们可能拥有数百种服务。")]),v._v(" "),t("p",[v._v("更好的方法是外部化所有配置。结果，将构建过程与运行时环境分开。此外，由于生产配置文件仅在运行时或通过环境变量使用，因此将安全风险降到最低。")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 生产配置不是代码库的一部分，因此可以最大程度地减少安全漏洞。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 无需重新构建即可更改配置参数。")]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("p",[v._v("我们需要选择一个支持外部化配置的框架。")]),v._v(" "),t("p",[t("strong",[v._v("何时使用")]),v._v("外部化配置：")]),v._v(" "),t("p",[v._v("任何重要的生产应用程序都必须使用外部配置。")]),v._v(" "),t("p",[t("strong",[v._v("何时不使用")]),v._v("外部化配置：")]),v._v(" "),t("p",[v._v("在概念发展的证明。")]),v._v(" "),t("p",[v._v("**推动技术：**几乎所有企业级的现代框架都支持外部化配置。")]),v._v(" "),t("p",[t("strong",[v._v("消费者驱动的合同测试")])]),v._v(" "),t("p",[v._v("在微服务架构中，通常由独立的团队开发许多微服务。这些微服务一起工作来满足业务需求 (例如，客户请求)，并且彼此同步或异步地通信。消费者微服务的集成测试具有挑战性。通常，在这种情况下使用 TestDouble 可以进行更快，更便宜的测试。但是 TestDouble 通常并不代表真正的提供程序微服务。另外，如果提供者微服务更改了其 API 或消息，则 TestDouble 无法确认这一点。另一个选择是进行端到端测试。虽然在生产之前必须进行端到端测试，但它脆弱，缓慢，昂贵，并且不能替代集成测试 (测试金字塔)。")]),v._v(" "),t("p",[v._v("消费者驱动的合同测试可以在这方面为我们提供帮助。此处，消费者微服务所有者团队编写了一个测试套件，其中包含针对特定提供者微服务的请求和预期响应 (用于同步通信) 或预期消息(用于异步通信)。这些测试套件称为显式合同。对于提供商微服务，其使用者的所有合同测试套件都添加到了自动测试中。在执行针对特定提供程序微服务的自动测试时，它将运行自己的测试，合同并验证合同。通过这种方式，合同测试可以帮助以自动化的方式维护微服务通信的完整性。")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 如果提供者意外更改了 API 或消息，则会在很短的时间内自动找到它。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 更少的惊喜和更高的健壮性，尤其是包含大量微服务的企业应用程序。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 改善团队自主权。")]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 由于合同测试可能使用完全不同的测试工具，因此需要进行额外的工作才能 "),t("strong",[v._v("·")]),v._v(" 在合同商微服务中开发和集成合同测试。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 如果合同测试与实际服务消耗不匹配，则可能导致生产失败。")]),v._v(" "),t("p",[t("strong",[v._v("何时使用")]),v._v("消费者驱动的合同测试：")]),v._v(" "),t("p",[v._v("在大型企业业务应用程序中，通常，不同的团队开发不同的服务。")]),v._v(" "),t("p",[t("strong",[v._v("何时不使用")]),v._v("消费者主导的合同测试：")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 一个团队开发所有微服务的相对简单，较小的应用程序。")]),v._v(" "),t("p",[t("strong",[v._v("·")]),v._v(" 提供者微服务是否相对稳定且未处于积极开发中。")]),v._v(" "),t("p",[t("strong",[v._v("推动技术：")])]),v._v(" "),t("p",[v._v("契约，邮递员，Spring Cloud 合同")]),v._v(" "),t("p",[t("strong",[v._v("结论")])]),v._v(" "),t("p",[v._v('在现代的大型企业软件开发中，微服务体系结构可以帮助扩展规模并带来许多长期利益。但是微服务架构并不是可以在每个用例中使用的 "银弹"。')]),v._v(" "),t("p",[v._v("如果在错误的应用程序类型中使用它，则微服务架构会带来更多的麻烦。")]),v._v(" "),t("p",[v._v("想要采用微服务体系结构的开发团队应遵循一组最佳实践，并使用一组可重复使用的，经过严格实践的设计模式。")]),v._v(" "),t("p",[v._v("微服务架构中最重要的设计模式是每个微服务的数据库。实施此设计模式具有挑战性，并且需要其他几个紧密相关的设计模式 (事件源，CQRS 和 Saga)。")]),v._v(" "),t("p",[v._v("在具有多个客户端 (Web，移动，台式机，智能设备) 的典型业务应用程序中，客户端与微服务之间的通信可能会比较混乱，可能需要具有附加安全性的中央控制。在这种情况下，前端的设计模式和 API 网关非常有用。")]),v._v(" "),t("p",[v._v("同样，断路器模式可以极大地帮助处理此类应用程序中的错误情况。将旧的 Monolithic 应用程序迁移到微服务中具有很大的挑战性，而 Strangler 模式可以帮助迁移。")]),v._v(" "),t("p",[v._v("消费者驱动的合同测试是微服务集成测试的工具模式。同时，外部化配置是任何现代应用程序开发中的强制性模式。")]),v._v(" "),t("p",[v._v("该列表并不全面，并且取决于您的用例，您可能需要其他设计模式。但是此列表将为您提供有关微服务体系结构设计模式的出色介绍。")])])}),[],!1,null,null,null);_.default=r.exports}}]);