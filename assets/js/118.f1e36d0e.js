(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{499:function(e,i,t){"use strict";t.r(i);var n=t(42),p=Object(n.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("除了花开疫散_我最希望的是开源的tdengine能媲美sqlite")]),e._v(" "),t("p",[e._v("除了花开疫散，我最希望的是开源的 TDengine 能媲美 SQLite")]),e._v(" "),t("p",[e._v("虽然新冠状病毒的疫情没有结束，涛思数据团队都居家远程办公，还是按期在 2 月 10 日线上发布了 TDengine ARM 32 位与 64 位版，而且 100% 开源，只是把原计划的线下发布活动取消了。大家现在就可以到 GitHub 下载所有源码进行编译、运行和测试了。虽然 TDengine 早开源了，但仅支持 X86，这次 ARM 版的发布，了却了我的一个心愿，就是利用 TDengine 体量小、性能高、资源占用少的优势，为边缘计算、嵌入式系统提供一高效、高速、简单易用的时序数据处理系统，来解决流行的 SQLite 在物联网、工业互联网场景下的诸多不足。")]),e._v(" "),t("p",[e._v("SQLite 这款产品在我心目中是神一样的存在，是我 3 年前创立涛思数据时树的一个学习标杆。从创始人 Richard Hipp 2000 年开始开发起，SQLite 现已经有数千亿份拷贝在各种设备里运行，包括大家熟悉的 Android、Apple 手机、Firefox、Chrome、Safari 浏览器，众多的嵌入式盒子，包括物联网网关等都装有 SQLite。它是全球装机量最大的数据库，远远超过大家熟悉的 MySQL、Oracle 数据库。为何 SQLite 如此流行？一句话，产品做到了极致。看看这些亮点：没有服务器，仅仅一个 C 语言库，整个数据库存放于单一跨平台的文件，支持 ACID，零配置，而且体量可以仅为 600KB。关键是，SQLite 还是开源免费的。在资源紧张的各种嵌入式设备里，不用它才怪呢。")]),e._v(" "),t("p",[e._v("做的这么好的产品，我们还有机会吗？幸运的是，我们有。因为随着物联网的兴起，各种大大小小的设备都在采集数据，而这些采集的数据具有鲜明的特点，比如带有时间戳、结构化、没有更新、数据源唯一等。而且这些数据的应用上，特点也很明显，比如数据往往只保留一定的时长、需要做降采样、插值、实时计算、聚合等操作，关心的是一段时间的趋势而不是某一特点时间的值等等。随着云平台的普及，这些设备往往还需要将原始或加工后的数据同步到云端。目前在嵌入式的各种盒子里，大家都是采用 SQLite 来处理。而 SQLite 是标准的关系型数据库，基本的存储、查询都没有问题，但采集量偏大之后，性能成为瓶颈，而且还得自己开发很多功能，比如定期删除数据、实现数据的断点续传、实现降采样、聚合计算等等。对于开发者来讲，用 SQLite 来处理这些采集的数据，只是一个权宜之计，不是最佳方案。这就是机会，而且是巨大的机会，因为越来越多的设备在联网，在采集数据。")]),e._v(" "),t("p",[e._v("三年前，我在研究物联网数据处理这个市场的时候，就仔细琢磨了云端和边缘侧的需求。云端是大数据平台，需要高并发、高吞吐率、高可靠，而单一嵌入式设备里，资源少，数据量小。但从功能来看，两者需求又是几乎一致的，都要有存储、查询、分析、计算、订阅的功能。因此从让开发者简单易用的角度出发，我决定将云端与边缘侧用同一套代码、同样的 API 接口实现，只是集群与单机版的区别，以解决云端的大数据量与高可靠问题。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/sNECaVj5KXONawWYVbYt9RibGju3hTowW0icia71fBibicFvI09LDlaLxdUfq2DJSzX0u0LLvSgibVyj4GF0Q0DB7lFg/640?wx_fmt=jpeg",alt:"img"}})]),e._v(" "),t("p",[e._v("三年前我的设计草图")]),e._v(" "),t("p",[e._v("首先，我认为要学习 SQLite 的无依赖、体量小的优点。因此 TDengine 的开发决定采用 C 语言，没有使用任何第三方的库，一切都是自己开发，包括定时器、RPC 等模块等。虽然 C 语言开发有一系列头疼问题，如内存泄露、无效指针、多线程同步等，但我很庆幸当时的决定，因为 TDengine  ARM 版的安装包不到 1.3MB，而且内存的需求不到 1MB，远远小于 InfluxDB、OpenTSDB 等其他时序数据。在资源紧张的嵌入式系统，TDengine 一下成了时序数据库的理想选择。")]),e._v(" "),t("p",[e._v("采集的时序数据的处理往往不只是一个简单的存储和查询，还需要做加工，最常用的是降采样，需要将采集的原始数据按照固定的时间间隔在时间轴上做聚合。在资源丰富的服务器，可以采用 Spark、Flink 等流式计算等工具来实现。在资源紧张的嵌入式系统，安装一个 Spark 只是一种奢望。SQLite 解决了数据存储问题，但没有提供缓存功能，因此如果一个嵌入式系统要对采集数据做实时缓存，就需要采用 Redis 这类工具，不然就需要自己开发。考虑到这些因素，我从一开始设计，就决定要打造一个全栈的时序数据处理工具，不仅只是一个时序数据库，还提供缓存、流式计算、消息队列、订阅等系列功能，最大程度地减少对系统资源的消耗，最大程度地减少系统设计和维护的复杂度。很庆幸，自己又做了一正确的决策，让 TDengine 在资源紧张的嵌入式系统里能脱颖而出。")]),e._v(" "),t("p",[e._v("在物联网发展起来之前，每个嵌入式盒子都是孤立的，还没有云端的概念。但现在，由于通讯成本大幅降低，各种采集的数据要汇聚到云端做进一步分析处理，为业务的运营、预警、优化等提供决策依据。因此边云协同（边缘计算 - 云端）概念应运而生，边缘侧需要源源不断的将采集包括加工后的的数据发往云端。但因为网络的稳定性、数据权限等问题，边云协同的实现不是一简单的事情。2017 年底，我认为要通过数据订阅的方式来解决这个问题，让云端可以订阅边缘侧的原始数据、或是符合指定过滤条件的数据。因此 TDengine 的第一个版本就带有订阅功能。在研究边云协同的研发同学试试我说的订阅功能，看是否能大幅减少你的开发成本。")]),e._v(" "),t("p",[e._v("SQLite 是超级成功的软件，但开发团队很小，其官网公布的开发者仅仅三个人。创始人 Richard Hipp 是 1984 年从美国乔治理工本科毕业的，2000 年时开始启动 SQLite 的开发，已经 20 年，难得的是他现在仍然是整个项目的架构师和负责人，贡献了大部分代码。因此从组建涛思数据团队的第一天起，我就牢牢的记住一个原则，底层工具的成功不依赖于团队的规模，而是要有一支能全心身投入的精干队伍，并且创始人自己要参与设计与编码工作。因此，时至今日，即使在获得 GGV 纪源资本、红杉中国的投资后，TDengine 研发团队的成员还不到 10 人。我想，随着业务的开展，也许我们会组建不小的外围应用开发和技术支持队伍，但是 TDengine 这个核心工具本身，研发人员一定会控制在 10 人以内。而且希望 20 年之后，我虽然已过 70，还能参与 TDengine 的研发，还能 debug 代码。")]),e._v(" "),t("p",[e._v("TDengine 不是要代替 SQLite，只是要在时序数据处理的这个细分市场里提供一更强大的工具。TDengine 是否能像 SQLite 这样成功，在数亿台设备上使用，取决于 TDengine 能否一直保持性能高、体量小、功能全、资源占用少的特色，取决于我自己还有整个团队能否十年如一日的坚持和专注。更重要的是，我们必须开源，100% 的开源，而且将开源进行到底。如果不开源，我想象不出任何途径能让 TDengine 获得 SQLite 这样的成功，让全球数千万开发者受益。如果你能去 GitHub 下载我们的源码，测试体验，就是对我们开源最大的支持，就能让我们离目标更近一步。如果你使用过程中遇到任何问题，欢迎通过 GitHub 递交给我们，哪怕在疫情期间，也都能得到我和团队的及时回复和反馈。隔离病毒，不隔离开源的热情！")]),e._v(" "),t("p",[e._v("一个程序员，如果一辈子能够开发出一款媲美 SQLite 的软件，让全球开发者受益，那一件最自豪、最幸福的事情。受上帝的垂青，50 岁的我，在一个早被 IT 行业淘汰的年龄，找到了一个这样的机会，而且很幸运，组建了一个精干的团队，还获得了不小的风险投资。现在版本已经发布，剩下的是要细细地磨，持续地磨，不断优化，解决各种实际应用中遇到的问题，而且除 X86、ARM 之外，适配更多的系统。愿 TDengine 能像 SQLite 一样流行，在数百亿的设备里安装上。")]),e._v(" "),t("p",[e._v("希望 TDengine ARM 版的发布能够减轻一下技术人和创业者在疫情和寒冬中的焦虑，能够温暖你、振奋你。人类抵挡了一次又一次的疫情，新冠病毒也将很快被人类征服。疫情会过去，寒冬会过去，春天会来，蝴蝶也会来，让我们一起静待春暖花开！")]),e._v(" "),t("p",[e._v("陶建辉")]),e._v(" "),t("p",[e._v("2020 年 2 月 23 日于北京望京家中")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/sNECaVj5KXONawWYVbYt9RibGju3hTowWCuoaUyHtxUvcIUEojQiboHfSqtj7NsicOIibCsblybe15HLunpEdsGORw/640?wx_fmt=png",alt:"img"}})]),e._v(" "),t("p",[e._v("点击阅读原文，体验 TDengine 最新版本")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://careerengine.us/redirect/to?url=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2F6Z6XTJ2zIoPJYphvzl9VpA",target:"_blank",rel:"noopener noreferrer"}},[e._v("阅读原文"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("全文完")]),e._v(" "),t("p",[e._v("本文由 "),t("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[e._v("简悦 SimpRead"),t("OutboundLink")],1),e._v(" 优化，用以提升阅读体验")]),e._v(" "),t("p",[e._v("使用了 全新的简悦词法分析引擎 beta，"),t("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看"),t("OutboundLink")],1),e._v("详细说明")])])}),[],!1,null,null,null);i.default=p.exports}}]);