(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{502:function(t,r,e){"use strict";e.r(r);var a=e(42),o=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("apache_flink在汽车之家的应用与实践")]),t._v(" "),e("p",[t._v("本文整理自汽车之家实时计算平台负责人邸星星在 Flink Forward Asia 2020 分享的议题《Apache Flink 在汽车之家的应用及实践》。")]),t._v(" "),e("p",[t._v("本文整理自汽车之家实时计算平台负责人邸星星在 Flink Forward Asia 2020 分享的议题《Apache Flink 在汽车之家的应用及实践》。主要内容包括：")]),t._v(" "),e("ol",[e("li",[t._v("背景及现状")]),t._v(" "),e("li",[t._v("AutoStream 平台")]),t._v(" "),e("li",[t._v("基于 Flink 的实时生态建设")]),t._v(" "),e("li",[t._v("后续规划")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914736",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"一、背景及现状"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、背景及现状"}},[t._v("#")]),t._v(" 一、背景及现状")]),t._v(" "),e("h3",{attrs:{id:"_1-第一阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-第一阶段"}},[t._v("#")]),t._v(" 1. 第一阶段")]),t._v(" "),e("p",[t._v("在 2019 年之前，汽车之家的大部分实时业务都是运行在 Storm 之上的。Storm 作为早期主流的实时计算引擎，凭借简单的 Spout 和 Bolt 编程模型以及集群本身的稳定性，俘获了大批用户，我们在 2016 年搭建了 Storm 平台。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914737",alt:"img"}})]),t._v(" "),e("p",[t._v("随着实时计算的需求日渐增多，数据规模逐步增大，Storm 在开发及维护成本上都凸显了不足，这里列举几个痛点:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("开发成本高")]),t._v(" "),e("p",[t._v("我们一直是用的 Lambda 架构，会用 T+1 的离线数据修正实时数据，即最终以离线数据为准，所以计算口径实时要和离线完全保持一致，实时数据开发的需求文档就是离线的 SQL，实时开发人员的核心工作就是把离线的 SQL 翻译成 Storm 代码，期间虽然封装了一些通用的 Bolt 来简化开发，但把离线动辄几百行的 SQL 精准地翻译成代码还是很有挑战的，并且每次运行都要经过打包、上传、重启的一系列的繁琐操作，调试成本很高。")])]),t._v(" "),e("li",[e("p",[t._v("计算低效")]),t._v(" "),e("p",[t._v("Storm 对状态支持的不好，通常需要借助 Redis、HBase 这类 kv 存储维护中间状态，我们之前是强依赖 Redis。比如常见的计算 UV 的场景，最简单的办法是使用 Redis 的 sadd 命令判断 uid 是否为已经存在，但这种方法会带来很高的网络 IO，同时如果没有提前报备的大促或搞活动导致流量翻倍的情况，很容易把 Redis 内存搞满，运维同学也会被杀个措手不及。同时 Redis 的吞吐能力也限制了整个作业的吞吐量。")])]),t._v(" "),e("li",[e("p",[t._v("难以维护、管理")]),t._v(" "),e("p",[t._v("由于采用编写 Storm 代码方式开发，难以分析元数据及血缘关系，同时可读性差，计算口径不透明，业务交接成本很高。")])]),t._v(" "),e("li",[e("p",[t._v("对数仓不友好")]),t._v(" "),e("p",[t._v("数据仓库团队是直接对接业务需求的团队，他们更熟悉基于 Hive 的 SQL 开发模式，通常都不擅长 Storm 作业的开发，这导致一些原本是实时的需求，只能退而求其次选择 T+1 的方式给出数据。")])])]),t._v(" "),e("p",[t._v("在这个阶段，我们支持了最基本的实时计算需求，因为开发门槛比较高，很多实时业务都是由我们平台开发来完成，既做平台，又做数据开发，精力分散很严重。")]),t._v(" "),e("h3",{attrs:{id:"_2-第二阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-第二阶段"}},[t._v("#")]),t._v(" 2. 第二阶段")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914738",alt:"img"}})]),t._v(" "),e("p",[t._v("我们从 2018 年开始调研 Flink 引擎，其相对完备的 SQL 支持，天生对状态的支持吸引了我们，在经过学习调研后，2019 年初开始设计开发 Flink SQL 平台，并于 2019 年中上线了 AutoStream 1.0 平台。平台上线之初就在仓库团队、监控团队和运维团队得以应用，能够快速被用户主要得益于以下几点:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v('开发、维护成本低：汽车之家大部分的实时任务可以用 Flink SQL + UDF 实现。平台提供常用的 Source 和 Sink，以及业务开发常用的 UDF，同时用户可以自己编写 UDF。基于 "SQL + 配置" 的方式完成开发，可以满足大部分需求。对于自定义任务，我们提供方便开发使用的 SDK，助力用户快速开发自定义 Flink 任务。平台面向的用户已经不只是专业的数据开发人员了，普通开发、 测试、运维人员经过基本的学习都可以在平台上完成日常的实时数据开发工作，实现平台赋能化。数据资产可管理，SQL 语句本身是结构化的，我们通过解析一个作业的 SQL，结合 source、 sink 的 DDL，可以很容易的知道这个作业的上下游，天然保留血缘关系。')])]),t._v(" "),e("li",[e("p",[t._v("高性能：Flink 可以完全基于状态 (内存，磁盘) 做计算，对比之前依赖外部存储做计算的场景，性能提升巨。在 818 活动压测期间，改造后的程序可以轻松支持原来几十倍流量的实时计算，且横向扩展性能十分良好。")])]),t._v(" "),e("li",[e("p",[t._v("全面的监控报警：用户将任务托管在平台上，任务的存续由平台负责，用户专注于任务本身的逻辑开发本身即可。对于 SQL 任务，SQL 的可读性极高，便于维护；对于自定义任务，基于我们 SDK 开发，用户可以更专注于梳理业务逻辑上。不论是 SQL 任务还是 SDK，我们都内嵌了大量监控，并与报警平台关联，方便用户快速发现分析定位并修复任务，提高稳定性。")])]),t._v(" "),e("li",[e("p",[t._v("赋能业务：支持数仓分层模型，平台提供了良好的 SQL 支持，数仓人员可以借助 SQL，将离线数仓的建设经验应用于实时数仓的建设上，自平台上线后，数仓逐步开始对接实时计算需求。")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914739",alt:"img"}})]),t._v(" "),e("p",[t._v("痛点：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("易用性有待提高，比如用户无法自助管理 UDF，只能使用平台内置的 UDF 或者把打好的 jar 包发给平台管理员，通过人工的方式处理上传问题。")])]),t._v(" "),e("li",[e("p",[t._v("随着平台作业量的高速增长，平台 on-call 成本非常高。首先我们经常面对一些新用户的基础问题：")]),t._v(" "),e("ol",[e("li",[t._v("平台的使用问题；")]),t._v(" "),e("li",[t._v("开发过程中遇到的问题，比如为什么打包报错；")]),t._v(" "),e("li",[t._v("Flink UI 的使用问题；")]),t._v(" "),e("li",[t._v("监控图形的含义，如何配置报警。")])])])]),t._v(" "),e("p",[t._v("还有一些不太容易快速给出答案的问题：")]),t._v(" "),e("ol",[e("li",[t._v("Jar 包冲突；")]),t._v(" "),e("li",[t._v("为什么消费 Kafka 延迟；")]),t._v(" "),e("li",[t._v("任务为什么报错。")])]),t._v(" "),e("p",[t._v("尤其是延迟问题，我们常见的数据倾斜，GC，反压问题可以直接引导用户去 Flink UI 和监控图表上去查看，但有时候还是需要手动去服务器上查看 jmap、jstack 等信息，有时候还需要生成火焰图来帮助用户定位性能问题。")]),t._v(" "),e("p",[t._v("初期我们没有和运营团队合作，完全是我们开发人员直接对接处理这些问题，虽然期间补充了大量的文档，但是整体上 on-call 成本还是很高。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("在 Kafka 或 Yarn 出现故障时，没有快速恢复的方案，当面对一些重保业务时，有些捉襟见肘。众所周知，没有永远稳定，不出故障的环境或组件，当有重大故障出现时，需要有快速恢复业务的应对方案。")])]),t._v(" "),e("li",[e("p",[t._v("资源没有合理管控，存在比较严重的资源浪费的情况。随着使用平台开发任务的用户不断增加，平台的作业数也不断增加。有些用户不能很好的把控集群资源的使用，经常出现过多申请资源的问题，导致作业运行效率低下甚至空闲，造成了资源的浪费。")])])]),t._v(" "),e("p",[t._v("在 AutoStream1.0 平台这个阶段，基于 SQL 开发的方式极大地降低了实时开发的门槛，各业务方可以自己实现实时业务的开发，同时数仓同学经过简单的学习后，就开始对接实时业务，将我们平台方从大量的业务需求中释放出来，让我们可以专心做平台方面的工作。")]),t._v(" "),e("h3",{attrs:{id:"_3-当前阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-当前阶段"}},[t._v("#")]),t._v(" 3. 当前阶段")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914740",alt:"img"}})]),t._v(" "),e("p",[t._v("针对上面的几个方面，我们有针对性行的做了以下几点升级：")]),t._v(" "),e("ol",[e("li",[t._v("引入 Jar Service：支持用户自助上传 UDF jar 包，并在 SQL 片段中自助引用，实现自助管理 UDF。同时自定义作业也可以配置 Jar Service 中的 Jar，面对多个作业共用同一个 Jar 的场景，用户只需要在作业中配置 Jar Service 中的 jar 包路径就可以，避免每次上线都重复上传 Jar 的繁琐操作；")]),t._v(" "),e("li",[t._v("自助诊断：我们开发了动态调整日志级别、自助查看火焰图等功能，方便用户自己定位问题，减轻我们日常 on-call 成本；")]),t._v(" "),e("li",[t._v("作业健康检查功能：从多个维度分析，为每个 Flink 作业打分，每个低分项都相应的给出建议；")]),t._v(" "),e("li",[t._v("Flink 作业级别的快速容灾恢复：我们建设了两套 YARN 环境，每一个 YARN 对应一个单独的 HDFS，两个 HDFS 之前通过 SNAPSHOT 方式进行 Checkpoint 数据的双向复制，同时在平台上增加了切换集群的功能，在一个 YARN 集群不可用的情况下，用户可以自助在平台上，选择备用集群的 Checkpoint；")]),t._v(" "),e("li",[t._v("Kafka 多集群架构支持：使用我们自研的 Kafka SDK，支持快速切换 Kafka 集群；")]),t._v(" "),e("li",[t._v("对接预算系统：每个作业占用的资源都直接对应到预算团队，这样一定程度上保证资源不会被其他团队占用，同时每个团队的预算管理员可以查看预算使用明细，了解自己的预算支持了团队内的哪些业务。")])]),t._v(" "),e("p",[t._v("目前用户对平台的使用已经趋于熟悉，同时自助健康检查和自助诊断等功能的上线，我们平台方的日常 on-call 频率在逐步降低，开始逐渐进入平台建设的良性循环阶段。")]),t._v(" "),e("h3",{attrs:{id:"_4-应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-应用场景"}},[t._v("#")]),t._v(" 4. 应用场景")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914741",alt:"img"}})]),t._v(" "),e("p",[t._v("汽车之家用于做实时计算的数据主要分为三类：")]),t._v(" "),e("ol",[e("li",[t._v("客户端日志，也就是我们内部说的点击流日志，包括用户端上报的启动日志、时长日志、PV 日志、点击日志以及各类事件日志，这类主要是用户行为日志，是我们建设实时数仓中流量宽表、UAS 系统、实时画像的基础，在这之上还支持了智能搜索、智能推荐等在线业务；同时基础的流量数据也用于支持各业务线的流量分析、实时效果统计，支持日常运营决策。")]),t._v(" "),e("li",[t._v("服务端日志，包括 nginx 日志、各类后端应用产生的日志、各种中间件的日志。这些日志数据主要用于后端服务的健康监测、性能监控等场景。")]),t._v(" "),e("li",[t._v("业务库的实时变更记录，主要有三种：MySQL 的 binlog，SQLServer 的 CDC，TiDB 的 TiCDC 数据，基于这些实时的数据变更记录，我们通过对各种内容数据的抽象与规范，建设了内容中台、资源池等基础服务；也有一些做简单逻辑的业务数据实时统计场景，结果数据用于实时大屏、罗盘等，做数据展现。")])]),t._v(" "),e("p",[t._v("以上这三类数据都会实时写入 Kafka 集群，在 Flink 集群中针对不同场景进行计算，结果数据写入到 Redis、MySQL、Elasticsearch、HBase、Kafka、Kylin 等引擎中，用于支持上层应用。")]),t._v(" "),e("p",[t._v("下面列举了一些应用场景：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914742",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"_5-集群规模"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-集群规模"}},[t._v("#")]),t._v(" 5. 集群规模")]),t._v(" "),e("p",[t._v("目前 Flink 集群服务器 400+，部署模式为 YARN (80%) 和 Kubernetes，运行作业数 800+，日计算量 1 万亿，峰值每秒处理数据 2000 万条。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914743",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"二、autostream-平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、autostream-平台"}},[t._v("#")]),t._v(" 二、AutoStream 平台")]),t._v(" "),e("h3",{attrs:{id:"_1-平台架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-平台架构"}},[t._v("#")]),t._v(" 1. 平台架构")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914744",alt:"img"}})]),t._v(" "),e("p",[t._v("上面是 AutoStream 平台目前的整体架构，主要是以下几部分内容：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("AutoStream core System")]),t._v(" "),e("p",[t._v("这是我们平台的核心服务，负责对元数据服务、Flink 客户端服务、Jar 管理服务及交互结果查询服务进行整合，通过前端页面把平台功能暴露给用户。")])])]),t._v(" "),e("p",[t._v("主要包括 SQL 和 Jar 作业的管理、库表信息的管理、UDF 管理、操作记录及历史版本的管理、健康检查、自助诊断、报警管理等模块，同时提供对接外部系统的能力，支持其他系统通过接口方式管理库表信息、SQL 作业信息及作业启停操作等。基于 Akka 任务的生命周期管理和调度系统提供了高效，简单，低延迟的操作保障，提升了用户使用的效率和易用性。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("元数据服务 (Catalog-like Unified Metastore)")]),t._v(" "),e("p",[t._v("主要对应 Flink Catalog 的后端实现，除了支持基本的库表信息管理外，还支持库表粒度的权限控制，结合我们自身的特点，支持用户组级别的授权。")])])]),t._v(" "),e("p",[t._v("底层我们提供了 Plugin Catalog 机制，既可以用于和 Flink 已有的 Catalog 实现做集成，也可以方便我们嵌入自定义的 Catalogs，通过 Plugin 机制可以很容易的重用 HiveCatalog，JdbcCatalog 等，从而保证了库表的周期的一致性。")]),t._v(" "),e("p",[t._v("同时元数据服务还负责对用户提交的 DML 语句进行解析，识别当前作业的依赖的表信息，用于作业的分析及提交过程，同时可以记录血缘关系。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Jar Service")]),t._v(" "),e("p",[t._v("平台提供的各类 SDK 在 Jar Service 上进行统一管理，同时用户也可以在平台上把自定义 Jar、UDF jar 等提交到 Jar Service 上统一管理，然后在作业中通过配置或 DDL 引用。")])]),t._v(" "),e("li",[e("p",[t._v("Flink 客户端服务 (Customed Flink Job Client)")]),t._v(" "),e("p",[t._v("负责把平台上的作业转化成 Flink Job 提交到 Yarn 或 Kubernetes 上，我们在这一层针对 Yarn 和 Kubernetes 做了抽象，统一两种调度框架的行为，对外暴露统一接口及规范化的参数，弱化 Yarn 和 Kubernetes 的差异，为 Flink 作业在两种框架上无缝切换打下了良好的基础。")])])]),t._v(" "),e("p",[t._v("每个作业的依赖不尽相同，我们除了对基础依赖的管理以外，还需要支持个性化的依赖。比如不同版本的 SQL SDK，用户自助上传的 Jar、UDF 等，所以不同作业的提交阶段需要做隔离。")]),t._v(" "),e("p",[t._v("我们采用的是 Jar service + 进程隔离的方式，通过和 Jar Service 对接，根据作业的类型和配置，选用相应的 Jar，并且提交单独的进程中执行，实现物理隔离。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("结果缓存服务 (Result Cache Serivce)")]),t._v(" "),e("p",[t._v("是一个简易的缓存服务，用于 SQL 作业开发阶段的在线调试场景。当我们分析出用户的 SQL 语句，将 Select 语句的结果集存入缓存服务中；然后用户可以在平台上通过选择 SQL 序号 (每个完整的 SELECT 语句对应一个序号)，实时查看 SQL 对应的结果数据，方便用户开发与分析问题。")])]),t._v(" "),e("li",[e("p",[t._v("内置 Connectors (Source & Sink)")]),t._v(" "),e("p",[t._v("最右侧的部分主要是各种 Source、Sink 的实现，有一些是重用 Flink 提供的 connector，有一些是我们自己开发的 connector。")])])]),t._v(" "),e("p",[t._v("针对每一种 connector 我们都添加了必要 Metric，并配置成单独的监控图表，方便用户了解作业运行情况，同时也为定位问题提供数据依据。")]),t._v(" "),e("h3",{attrs:{id:"_2-基于-sql-的开发流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-基于-sql-的开发流程"}},[t._v("#")]),t._v(" 2. 基于 SQL 的开发流程")]),t._v(" "),e("p",[t._v("在平台提供以上功能的基础上，用户可以快速的实现 SQL 作业的开发：")]),t._v(" "),e("ol",[e("li",[t._v("创建一个 SQL 任务；")]),t._v(" "),e("li",[t._v("编写 DDL 声明 Source 和 Sink；")]),t._v(" "),e("li",[t._v("编写 DML，完成主要业务逻辑的实现；")]),t._v(" "),e("li",[t._v("在线查看结果，若数据符合预期，添加 INSERT INTO 语句，写入到指定 Sink 中即可。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914745",alt:"img"}})]),t._v(" "),e("p",[t._v("平台默认会保存 SQL 每一次的变更记录，用户可以在线查看历史版本，同时我们会记录针对作业的各种操作，在作业维护阶段可以帮助用户追溯变更历史，定位问题。")]),t._v(" "),e("p",[t._v("下面是一个 Demo，用于统计当天的 PV、UV 数据：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914746",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"_3-基于-catalog-的元数据管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-基于-catalog-的元数据管理"}},[t._v("#")]),t._v(" 3. 基于 Catalog 的元数据管理")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914747",alt:"img"}})]),t._v(" "),e("p",[t._v("元数据管理的主要内容：")]),t._v(" "),e("ol",[e("li",[t._v("支持权限控制：除了支持基本的库表信息管理外，还支持表粒度的权限控制，结合我们自身的特点，支持用户组级别的授权；")]),t._v(" "),e("li",[t._v("Plugin Catalog 机制：可以组合多种其他 Catalog 实现，复用已有的 Catalog；")]),t._v(" "),e("li",[t._v("库表生命周期行为统一：用户可以选择平台上的表和底层存储的生命周期统一，避免两边分别维护，重复建表；")]),t._v(" "),e("li",[t._v("新老版本完全兼容：由于在 AutoStream 1.0 的时候，我们没有单独引入 Metastore 服务，此外 1.0 时期的 DDL SQL 解析模块是自研的组件。所以在建设 MetaStore 服务时，需要考虑历史作业和历史库表信息兼容的问题。\n"),e("ol",[e("li",[t._v("对于库表信息，新的 MetaStore 在底层将新版和旧版的库表信息转换成统一的存储格式，从而保证了库表信息的兼容性。")]),t._v(" "),e("li",[t._v("对于作业，这里我们通过抽象接口，并分别提供 V1Service 和 V2Service 两种实现路径，保证了新老作业在用户层面的兼容。")])])])]),t._v(" "),e("p",[t._v("下面是几个模块和 Metastore 交互的示意图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914748",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"_4-udxf-管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-udxf-管理"}},[t._v("#")]),t._v(" 4. UDXF 管理")]),t._v(" "),e("p",[t._v("我们引入了 Jar Service 服务用来管理各种 Jar，包括用户自定义作业、平台内部 SDK 组件、UDXF 等，在 Jar Service 基础上我们可以很容易的实现 UDXF 的自助管理，在 On k8s 的场景下，我们提供了统一的镜像，Pod 启动后会从 Jar Service 下载对应的 Jar 到容器内部，用于支持作业的启动。")]),t._v(" "),e("p",[t._v("用户提交的 SQL 中如果包含 Function DDL，我们会在 Job Client Service 中会解析 DDL，下载对应的 Jar 到本地。")]),t._v(" "),e("p",[t._v("为了避免和其他作业有依赖冲突，我们每次都会单独启动一个子进程来完成作业提交的操作。UDXF Jar 会被并加入到 classpath 中，我们对 Flink 做了一些修改，作业提交时会把这个 Jar 一并上传到 HDFS 中；同时 AutoSQL SDK 会根据函数名称和类名为当前作业注册 UDF。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914749",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"_5-监控报警及日志收集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-监控报警及日志收集"}},[t._v("#")]),t._v(" 5. 监控报警及日志收集")]),t._v(" "),e("p",[t._v("得益于 Flink 完善的 Metric 机制，我们可以方便的添加 Metric，针对 Connector，我们内嵌了丰富的 Metric，并配置了默认的监控看板，通过看板可以查看 CPU、内存、JVM、网络传输、Checkpoint、各种 Connector 的监控图表。同时平台和公司的云监控系统对接，自动生成默认的报警策略，监控存活状态、消费延迟等关键指标。同时用户可以在云监控系统修改默认的报警策略，添加新的报警项实现个性化监控报警。")]),t._v(" "),e("p",[t._v("日志通过云 Filebeat 组件写入到 Elasticsearch 集群，同时开放 Kibana 供用户查询。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914750",alt:"img"}})]),t._v(" "),e("p",[t._v("整体的监控报警及日志收集架构如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914751",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"_6-健康检查机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-健康检查机制"}},[t._v("#")]),t._v(" 6. 健康检查机制")]),t._v(" "),e("p",[t._v("随着作业数的高速增长，出现了很多资源使用不合理的情况，比如前面提到的资源浪费的情况。用户大多时候都是在对接新需求，支持新业务，很少回过头来评估作业的资源配置是否合理，优化资源使用。所以平台规划了一版成本评估的模型，也就是现在说的健康检查机制，平台每天会针对作业做多维度的健康评分，用户可以随时在平台上查看单个作业的得分情况及最近 30 天的得分变化曲线。")]),t._v(" "),e("p",[t._v("低分作业会在用户登录平台时进行提示，并且定期发邮件提醒用户进行优化、整改，在优化作业后用户可以主动触发重新评分，查看优化效果。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914752",alt:"img"}})]),t._v(" "),e("p",[t._v("我们引入了多维度，基于权重的评分策略，针对 CPU、内存使用率、是否存在空闲 Slot、GC 情况、Kafka 消费延迟、单核每秒处理数据量等多个维度的指标结合计算拓补图进行分析评估，最终产生一个综合分。")]),t._v(" "),e("p",[t._v("每个低分项都会显示低分的原因及参考范围，并显示一些指导建议，辅助用户进行优化。")]),t._v(" "),e("p",[t._v("我们新增了一个 Metric，用一个 0%~100% 的数字体现 TaskManagner CPU 利用率。这样用户可以直观的评估 CPU 是否存在浪费的情况。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914753",alt:"img"}})]),t._v(" "),e("p",[t._v("下面是作业评分的大致流程：首先我们会收集和整理运行作业的基本信息和 Metrics 信息。然后应用我们设定好的规则，得到基本评分和基础建议信息。最后将得分信息和建议整合，综合评判，得出综合得分和最终的报告。用户可以通过平台查看报告。对于得分较低的作业，我们会发送报警给作业的归属用户。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914754",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"_7-自助诊断"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-自助诊断"}},[t._v("#")]),t._v(" 7. 自助诊断")]),t._v(" "),e("p",[t._v("如之前提到的痛点，用户定位线上问题时，只能求助于我们平台方，造成我们 on-call 工作量很大，同时用户体验也不好，鉴于此，所以我们上线了以下功能：")]),t._v(" "),e("ol",[e("li",[t._v("动态修改日志级别：我们借鉴了 Storm 的修改日志级别的方式，在 Flink 上实现了类似功能，通过扩展 REST API 和 RPC 接口的方法，支持修改指定 Logger 的到某一日志级别，并支持设置一个过期时间，当过期后，改 Logger 的日志会重新恢复为 INFO 级别；")]),t._v(" "),e("li",[t._v("支持自助查看线程栈和堆内存信息：Flink UI 中已经支持在线查看线程栈 (jstack)，我们直接复用了这个接口；还额外增加了查看堆内存 (jmap) 的接口，方便用户在线查看；")]),t._v(" "),e("li",[t._v("支持在线生成、查看火焰图：火焰图是定位程序性能问题的一大利器，我们利用了阿里的 arthas 组件，为 Flink 增加了在线查看火焰图的能力，用户遇到性能问题时，可以快速评估性能瓶颈。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914755",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"_8-基于-checkpoint-复制的快速容灾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-基于-checkpoint-复制的快速容灾"}},[t._v("#")]),t._v(" 8. 基于 Checkpoint 复制的快速容灾")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914756",alt:"img"}})]),t._v(" "),e("p",[t._v("当实时计算应用在重要业务场景时，单个 Yarn 集群一旦出现故障且短期内不可恢复，那么可能会对业务造成较大影响。")]),t._v(" "),e("p",[t._v("在此背景下，我们建设了 Yarn 多集群架构，两个独立的 Yarn 各自对应一套独立的 HDFS 环境，checkpoint 数据定期在两个 HDFS 间相互复制。目前 checkpoint 复制的延迟稳定在 20 分钟内。")]),t._v(" "),e("p",[t._v("同时，在平台层面，我们把切换集群的功能直接开放给用户，用户可以在线查看 checkpoint 的复制情况，选择合适的 checkpoint 后 (当然也可以选择不从 checkpoint 恢复) 进行集群切换，然后重启作业，实现作业在集群间的相对平滑的迁移。")]),t._v(" "),e("h2",{attrs:{id:"三、基于-flink-的实时生态建设"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、基于-flink-的实时生态建设"}},[t._v("#")]),t._v(" 三、基于 Flink 的实时生态建设")]),t._v(" "),e("p",[t._v("AutoStream 平台的核心场景是支持实时计算开发人员的使用，使实时计算开发变得简单高效、可监控、易运维。同时随着平台的逐步完善，我们开始摸索如何对 AutoStream 平台进行重用，如何让 Flink 应用在更多场景下。重用 AutoStream 有以下几点优势：")]),t._v(" "),e("ol",[e("li",[t._v("Flink 本身是优秀的分布式计算框架，有着较高的计算性能，良好的容错能力和成熟的状态管理机制，社区蓬勃发展，功能及稳定性有保障；")]),t._v(" "),e("li",[t._v("AutoStream 有着完善的监控和报警机制，作业运行在平台上，无需单独对接监控系统，同时 Flink 对 Metric 支持很友好，可以方便的添加新的 Metric；")]),t._v(" "),e("li",[t._v("大量的技术沉淀和运营经验，通过两年多的平台建设，我们在 AutoStream 上已经实现了较为完善的 Flink 作业全生命周期的管理，并建设了 Jar Service 等基础组件，通过简单的上层接口包装，就可以对接其他系统，让其他系统具备实时计算的能力；")]),t._v(" "),e("li",[t._v("支持 Yarn 和 Kubernetes 部署。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914757",alt:"img"}})]),t._v(" "),e("p",[t._v("基于以上几点，我们在建设其他系统时，优先重用 AutoStream 平台，以接口调用的方式进行对接，将 Flink 作业全流程的生命周期，完全托管给 AutoStream 平台，各系统优先考虑实现自身的业务逻辑即可。")]),t._v(" "),e("p",[t._v("我们团队内的 AutoDTS (接入及分发任务) 和 AutoKafka (Kafka 集群复制) 系统目前就是依托于 AutoStream 建设的。简单介绍一下集成的方式，以 AutoDTS 为例：")]),t._v(" "),e("ol",[e("li",[t._v("把任务 Flink 化，AutoDTS 上的接入、分发任务，都是以 Flink 作业的形式存在；")]),t._v(" "),e("li",[t._v("和 AutoStream 平台对接，调用接口实现 Flink 作业的创建、修改、启动、停止等操作。这里 Flink 作业既可以是 Jar，也可以是 SQL 作业；")]),t._v(" "),e("li",[t._v("AutoDTS 平台根据业务场景，建设个性化的前端页面，个性化的表单数据，表单提交后，可以将表单数据存储到 MySQL 中；同时需要把作业信息以及 Jar 包地址等信息组装成 AutoStream 接口定义的格式，通过接口调用在 AutoStream 平台自动生成一个 Flink 任务，同时保存这个 Flink 任务的 ID；")]),t._v(" "),e("li",[t._v("启动 AutoDTS 的一个接入任务，直接调用 AutoStream 接口就实现了作业的启动。")])]),t._v(" "),e("h3",{attrs:{id:"_1-autodts-数据接入分发平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-autodts-数据接入分发平台"}},[t._v("#")]),t._v(" 1. AutoDTS 数据接入分发平台")]),t._v(" "),e("p",[t._v("AutoDTS 系统主要包含两部分功能：")]),t._v(" "),e("ol",[e("li",[t._v("数据接入：将数据库中的变更数据 (Change log) 实时写入到 Kafka；")]),t._v(" "),e("li",[t._v("数据分发：将接入到 Kafka 的数据，实时写入到其他存储引擎。")])]),t._v(" "),e("h4",{attrs:{id:"_1-1-autodts-数据接入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-autodts-数据接入"}},[t._v("#")]),t._v(" 1.1 AutoDTS 数据接入")]),t._v(" "),e("p",[t._v("下面是数据接入的架构图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914758",alt:"img"}})]),t._v(" "),e("p",[t._v("我们维护了基于 Flink 的数据接入 SDK 并定义了统一的 JSON 数据格式，也就是说 MySQL Binlog，SQL Server、 TiDB 的变更数据接入到 Kafka 后，数据格式是一致的，下游业务使用时，基于统一格式做开发，无需关注原始业务库的类型。")]),t._v(" "),e("p",[t._v("数据接入到 Kafka Topic 的同时，Topic 会自动注册为一张 AutoStream 平台上的流表，方便用户使用。")]),t._v(" "),e("p",[t._v("数据接入基于 Flink 建设还有一个额外的好处，就是可以基于 Flink 的精确一次语义，低成本的实现精确一次数据接入，这对支持数据准确性要求很高的业务来说，是一个必要条件。")]),t._v(" "),e("p",[t._v("目前我们在做把业务表中的全量数据接入 Kafka Topic 中，基于 Kafka 的 compact 模式，可以实现 Topic 中同时包含存量数据和增量数据。这对于数据分发场景来说是十分友好的，目前如果想把数据实时同步到其他存储引擎中，需要先基于调度系统，接入一次全量数据，然后再开启实时分发任务，进行变更数据的实时分发。有了 Compact Topic 后，可以省去全量接入的操作。Flink1.12 版本已经对 Compact Topic 做支持，引入 upsert-kafka Connector [1]")]),t._v(" "),e("p",[t._v("[1] "),e("a",{attrs:{href:"https://link.segmentfault.com/?enc=gu4OQBKMETE6hEbTx7c3Yw%3D%3D.9W8861mJtygpnNM2VQmyTwzTxTpDVdre7f1dhhh5l%2FFwQeZANP9HAiE5v%2Ff6Apqj4iyXON61YAQ%2Bn1GomzjiH3D242nprKrVtYQN4lUbpamYZN1ZjZS%2FTbiTkxLTjIU1lVj%2FislimfGYU7SzhtquMQ%3D%3D",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cwiki.apache.org/conf..."),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("下面是一条样例数据：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914759",alt:"img"}})]),t._v(" "),e("p",[t._v("默认注册到平台上的流表是 Schemaless 的，用户可以用 JSON 相关的 UDF 获取其中的字段数据。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914760",alt:"img"}})]),t._v(" "),e("p",[t._v("下面是使用流表的示例：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914761",alt:"img"}})]),t._v(" "),e("h4",{attrs:{id:"_1-2-autodts-数据分发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-autodts-数据分发"}},[t._v("#")]),t._v(" 1.2 AutoDTS 数据分发")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914762",alt:"img"}})]),t._v(" "),e("p",[t._v("我们已经知道，接入到 Kafka 中的数据是可以当做一张流表来使用的，而数据分发任务本质上是把这个流表的数据写入到其他存储引擎，鉴于 AutoStream 平台已经支持多种 Table Sink (Connector)，我们只需要根据用户填写的下游存储的类型和地址等信息，就可以通过拼装 SQL 来实现数据的分发。")]),t._v(" "),e("p",[t._v("通过直接重用 Connector 的方式，最大化的避免了重复开发的工作。")]),t._v(" "),e("p",[t._v("下面是一个分发任务对应的 SQL 示例：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914763",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"_2-kaka-多集群架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-kaka-多集群架构"}},[t._v("#")]),t._v(" 2. Kaka 多集群架构")]),t._v(" "),e("p",[t._v("Kafka 在实际应用中，有些场景是需要做 Kafka 多集群架构支持的，下面列举几个常见的场景：")]),t._v(" "),e("ul",[e("li",[t._v("数据冗余灾备，实时复制数据到另一个备用集群，当一个 Kafka 集群不可用时，可以让应用切换到备用集群，快速恢复业务；")]),t._v(" "),e("li",[t._v("集群迁移，当机房合同到期，或者上云时，都需要做集群的迁移，此时需要把集群数据整体复制到新机房的集群，让业务相对平滑迁移；")]),t._v(" "),e("li",[t._v("读写分离场景，使用 Kafka 时，大多数情况都是读多写少，为保证数据写入的稳定性，可以选择建设 Kafka 读写分离集群。")])]),t._v(" "),e("p",[t._v("我们目前建设了 Kafka 多集群架构，和 Flink 相关的主要有两块内容：")]),t._v(" "),e("ol",[e("li",[t._v("Kafka 集群间数据复制的程序运行在 Flink 集群中；")]),t._v(" "),e("li",[t._v("改造了 Flink Kafka Connector，支持快速切换 Kafka 集群。")])]),t._v(" "),e("h4",{attrs:{id:"_2-1-整体架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-整体架构"}},[t._v("#")]),t._v(" 2.1 整体架构")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914764",alt:"img"}})]),t._v(" "),e("p",[t._v("先来看一下 Kafka 集群间的数据复制，这是建设多集群架构的基础。我们是使用 MirrorMaker2 来实现数据复制的，我们把 MirrorMaker2 改造成普通的 Flink 作业，运行在 Flink 集群中。")]),t._v(" "),e("p",[t._v("我们引入了 Route Service 和 Kafka SDK，实现客户端快速切换访问的 Kafka 集群。")]),t._v(" "),e("p",[t._v("客户端需要依赖我们自己发布的 Kafka SDK，并且配置中不再指定 bootstrap.servers 参数，而是通过设置 cluster.code 参数来声明自己要访问的集群。 SDK 会根据 cluster.code 参数，访问 Route Service 获取集群真正的地址，然后创建 Producer/Consumer 开始生产 / 消费数据。")]),t._v(" "),e("p",[t._v("SDK 会监听路由规则的变化，当需要切换集群时，只需要在 Route Service 后台切换路由规则，SDK 发现路由集群发生变化时，会重启 Producer/Consumer 实例，切换到新集群。")]),t._v(" "),e("p",[t._v("如果是消费者发生了集群切换，由于 Cluster1 和 Cluster2 中 Topic 的 offset 是不同的，需要通过 Offset Mapping Service 来获取当前 Consumer Group 在 Cluster2 中的 offset，然后从这些 Offset 开始消费，实现相对平滑的集群切换。")]),t._v(" "),e("h4",{attrs:{id:"_2-2-kafka-集群间的数据复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-kafka-集群间的数据复制"}},[t._v("#")]),t._v(" 2.2 Kafka 集群间的数据复制")]),t._v(" "),e("p",[t._v("我们使用 MirrorMaker2 来实现集群间的数据复制，MirrorMaker2 是 Kafka 2.4 版本引入的，具体以下特性：")]),t._v(" "),e("ul",[e("li",[t._v("自动识别新的 Topic 和 Partition；")]),t._v(" "),e("li",[t._v("自动同步 Topic 配置：Topic 的配置会自动同步到目标集群；")]),t._v(" "),e("li",[t._v("自动同步 ACL；")]),t._v(" "),e("li",[t._v("提供 Offset 的转换工具：支持根据源集群、目标集群及 Group 信息，获取到该 Group 在目标集群的中对应的 Offset 信息；")]),t._v(" "),e("li",[t._v("支持扩展黑白名单策略：可以灵活定制，动态生效。")])]),t._v(" "),e("p",[t._v("clusters = primary, backup")]),t._v(" "),e("p",[t._v("primary.bootstrap.servers = vip1:9091")]),t._v(" "),e("p",[t._v("backup.bootstrap.servers = vip2:9092")]),t._v(" "),e("p",[t._v("primary->backup.enabled = true")]),t._v(" "),e("p",[t._v("backup->primary.enabled = true")]),t._v(" "),e("p",[t._v("这段配置完成 primary 到 backup 集群的双向数据复制，primary 集群中的 topic1 中的数据会复制到 backup 集群中的 primary.topic1 这个 Topic 中，目标集群的 Topic 命名规则是 sourceCluster.sourceTopicName，可以通过实现 ReplicationPolicy 接口来自定义命名策略。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914765",alt:"img"}})]),t._v(" "),e("h4",{attrs:{id:"_2-3-mirrormaker2-相关的-topic-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-mirrormaker2-相关的-topic-介绍"}},[t._v("#")]),t._v(" 2.3 MirrorMaker2 相关的 Topic 介绍")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("源集群中的 Topic")])]),t._v(" "),e("p",[t._v("**heartbeats：**存储心跳数据；")]),t._v(" "),e("p",[t._v("**mm2-offset-syncs.targetCluster.internal：**存储源集群 (upstreamOffset) 和目标集群的 offset(downstreamOffset) 对应关系。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("目标集群中的 Topic")])]),t._v(" "),e("p",[t._v("**mm2-configs.sourceCluster.internal：**connect 框架自带，用来存储配置；")]),t._v(" "),e("p",[t._v("**mm2-offsets.sourceCluster.internal：**connect 框架自带，用来存储 WorkerSourceTask 当前处理的 offset，mm2 场景下是为了当前数据同步到源集群 topic partition 的哪一个 offset，这个更像是 Flink 的 checkpoint 概念；")]),t._v(" "),e("p",[t._v("**mm2-status.sourceCluster.internal：**connect 框架自带，用来存储 connector 状态。")])])]),t._v(" "),e("p",[t._v("上面三个用的都是 connect runtime 模块中的 KafkaBasedLog 工具类，这个工具类可以读写一个 compact 模式的 topic 数据，此时 MirrorMaker2 把 topic 当作 KV 存储使用。")]),t._v(" "),e("p",[t._v("sourceCluster.checkpoints.internal：记录 sourceCluster consumer group 在当前集群对应的 offset，mm2 会定期从源 kafka 集群读取 topic 对应的 consumer group 提交的 offset， 并写到目标集群的 sourceCluster.checkpoints.internal topic 中。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914766",alt:"img"}})]),t._v(" "),e("h4",{attrs:{id:"_2-4-mirrormaker2-的部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-mirrormaker2-的部署"}},[t._v("#")]),t._v(" 2.4 MirrorMaker2 的部署")]),t._v(" "),e("p",[t._v("下面是 MirrorMaker2 作业运行的流程，在 AutoKafka 平台上创建一个数据复制作业，会调用 AutoStream 平台接口，相应的创建一个 MM2 类型的作业。启动作业时，会调用 AutoStream 平台的接口把 MM2 作业提交到 Flink 集群中运行。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914767",alt:"img"}})]),t._v(" "),e("h4",{attrs:{id:"_2-5-路由服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-路由服务"}},[t._v("#")]),t._v(" 2.5 路由服务")]),t._v(" "),e("p",[t._v("Route Service 负责处理客户端的路由请求，根据客户端的信息匹配合适的路由规则，将最终路由结果，也就是集群信息返回给客户端。")]),t._v(" "),e("p",[t._v("支持基于集群名称、Topic、Group、ClientID 以及客户端自定义的参数灵活配置路由规则。")]),t._v(" "),e("p",[t._v("下面的例子就是将 Flink 作业 ID 为 1234 的消费者，路由到 cluster_a1 集群。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914768",alt:"img"}})]),t._v(" "),e("h4",{attrs:{id:"_2-6-kafka-sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-kafka-sdk"}},[t._v("#")]),t._v(" 2.6 Kafka SDK")]),t._v(" "),e("p",[t._v("使用原生的 kafka-clients 是无法和 Route Service 进行通信的，客户端需要依赖我们提供的 Kafka SDK (汽车之家内部开发的 SDK) 能和 Route Service 通信，实现动态路由的效果。")]),t._v(" "),e("p",[t._v("Kafka SDK 实现了 Producer、Consumer 接口，本质是 kafka-clients 的代理，业务做较少的改动就可以引入 Kafka SDK。")]),t._v(" "),e("p",[t._v("业务依赖 Kafka SDK 后，Kafka SDK 会负责和 Route Service 通信，监听路由变化，当发现路由的集群发生变化时，会 close 当前的 Producer/Consumer，创建新的 Producer/Consumer，访问新的集群。")]),t._v(" "),e("p",[t._v("此外 Kafka SDK 还负责将 Producer、Consumer 的 metric 统一上报到云监控系统的 prometheus，通过查看平台预先配置好的仪表盘，可以清晰的看到业务的生产、消费情况。")]),t._v(" "),e("p",[t._v("同时 SDK 会收集一些信息，比如应用名称、IP 端口、进程号等，这些信息可以在 AutoKafka 平台上查到，方便我们和用户共同定位问题。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914769",alt:"img"}})]),t._v(" "),e("h4",{attrs:{id:"_2-7-offset-mapping-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-offset-mapping-service"}},[t._v("#")]),t._v(" 2.7 Offset Mapping Service")]),t._v(" "),e("p",[t._v("当 Consumer 的路由发生变化并切换集群时，情况有一些复杂，因为目前 MirrorMaker2 是先把数据从源集群消费出来，再写入到目标集群的，同一条数据可以确保写入到目标 topic 的相同分区，但是 offset 和源集群是不同的。")]),t._v(" "),e("p",[t._v("针对这种 offset 不一致的情况，MirrorMaker2 会消费源集群的 __consumer_offsets 数据，加上目标集群对应的 offset，写入到目标集群的 sourceCluster.checkpoints.internal topic 中。")]),t._v(" "),e("p",[t._v("同时，源集群的 mm2-offset-syncs.targetCluster.internal topic 记录了源集群和目标集群 offset 的映射关系，结合这两个 topic，我们建设了 Offset Mapping Service 来完成目标集群的 offset 的转换工作。")]),t._v(" "),e("p",[t._v("所以当 Consumer 需要切换集群时，会调用 Offset Mapping Service 的接口，获取到目标集群的 offsets，然后主动 seek 到这些位置开始消费，这样实现相对平滑的集群切换工作。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914770",alt:"img"}})]),t._v(" "),e("h4",{attrs:{id:"_2-8-flink-与-kafka-多集群架构的集成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-flink-与-kafka-多集群架构的集成"}},[t._v("#")]),t._v(" 2.8 Flink 与 Kafka 多集群架构的集成")]),t._v(" "),e("p",[t._v("由于 Kafka SDK 兼容 kafka-clients 的用法，用户只需要更换依赖，然后设置 cluster.code、Flink.id 等参数即可。")]),t._v(" "),e("p",[t._v("当 Producer/Consumer 发生集群切换后，由于创建了新的 Producer/Consumer 实例，Kafka 的 metric 数据没有重新注册，导致 metric 数据无法正常上报。我们在 AbstractMetricGroup 类中增加了 unregister 方法，在监听 Producer/Consumer 的切换事件时，重新注册 kafka metrics 就可以了。")]),t._v(" "),e("p",[t._v("至此我们完成了 Flink 对 Kafka 多集群架构的支持。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914771",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"四、后续规划"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、后续规划"}},[t._v("#")]),t._v(" 四、后续规划")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914772",alt:"img"}})]),t._v(" "),e("ol",[e("li",[t._v("目前我们支持的数据统计类场景大多是基于流量数据或用户行为数据的，这些场景对精确一次的语义要求不高，随着目前社区对 Change Log 支持的逐步完善，同时我们的数据接入体系是支持精确一次语义的，并且正在做业务表全量接入到 Kafka 的功能，所以后续可以实现精确一次的数据统计，支持交易、线索、金融类的统计需求。")]),t._v(" "),e("li",[t._v("一些公司已经提出湖仓一体的理念，数据湖技术确实可以解决一些原有数仓架构的痛点，比如数据不支持更新操作，无法做到准实时的数据查询。目前我们在做一些 Flink 和 Iceberg、Hudi 集成的一些尝试，后续会在公司寻找场景并落地。")])]),t._v(" "),e("p",[t._v("更多 Flink 相关技术问题，可扫码加入社区钉钉交流群；")]),t._v(" "),e("p",[t._v("第一时间获取最新技术文章和社区动态，请关注公众号～")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000040914773",alt:"img"}})]),t._v(" "),e("p",[t._v("全文完")]),t._v(" "),e("p",[t._v("本文由 "),e("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[t._v("简悦 SimpRead"),e("OutboundLink")],1),t._v(" 优化，用以提升阅读体验")]),t._v(" "),e("p",[t._v("使用了 全新的简悦词法分析引擎 beta，"),e("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),e("OutboundLink")],1),t._v("详细说明")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("一、背景及现状"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("1. 第一阶段"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("2. 第二阶段"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("3. 当前阶段"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("4. 应用场景"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("5. 集群规模"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("二、AutoStream 平台"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("1. 平台架构"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("2. 基于 SQL 的开发流程"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("3. 基于 Catalog 的元数据管理"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-10",target:"_blank",rel:"noopener noreferrer"}},[t._v("4. UDXF 管理"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-11",target:"_blank",rel:"noopener noreferrer"}},[t._v("5. 监控报警及日志收集"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-12",target:"_blank",rel:"noopener noreferrer"}},[t._v("6. 健康检查机制"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-13",target:"_blank",rel:"noopener noreferrer"}},[t._v("7. 自助诊断"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-14",target:"_blank",rel:"noopener noreferrer"}},[t._v("8. 基于 Checkpoint 复制的快速容灾"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-15",target:"_blank",rel:"noopener noreferrer"}},[t._v("三、基于 Flink 的实时生态建设"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-16",target:"_blank",rel:"noopener noreferrer"}},[t._v("1. AutoDTS 数据接入分发平台"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-17",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.1 AutoDTS 数据接入"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-18",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.2 AutoDTS 数据分发"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-19",target:"_blank",rel:"noopener noreferrer"}},[t._v("2. Kaka 多集群架构"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-20",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.1 整体架构"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-21",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.2 Kafka 集群间的数据复制"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-22",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.3 MirrorMaker2 相关的 Topic 介绍"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-23",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.4 MirrorMaker2 的部署"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-24",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.5 路由服务"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-25",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.6 Kafka SDK"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-26",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.7 Offset Mapping Service"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-27",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.8 Flink 与 Kafka 多集群架构的集成"),e("OutboundLink")],1),e("a",{attrs:{href:"https://segmentfault.com/a/1190000040914734?utm_source=tuicool&utm_medium=referral#sr-toc-28",target:"_blank",rel:"noopener noreferrer"}},[t._v("四、后续规划"),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=o.exports}}]);