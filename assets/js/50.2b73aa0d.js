(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{433:function(_,t,v){"use strict";v.r(t);var i=v(42),p=Object(i.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKVEKVE6icD852eSH42WsO0aciaR7zbW5rQQXzqY3jAS2kSYpWiaMyVEr2cXAqu6dx0opc1zX7WXSfeA/640?wx_fmt=jpeg",alt:"img"}})]),_._v(" "),v("p",[_._v("这条路又是否适合传统金融机构呢？")]),_._v(" "),v("p",[_._v("传统银行有必要拥抱云原生吗？这个问题，或许还没有太多答案。")]),_._v(" "),v("p",[_._v("但这些问题，在传统银行大步向前、业务飞速发展的过程中，一定会遇到：")]),_._v(" "),v("ul",[v("li",[_._v("怎样才能在整个底盘升级过程中，尽量避免对已上线业务造成打扰？")]),_._v(" "),v("li",[_._v("想做到架构平稳切换，压测方案如何设计定夺？")]),_._v(" "),v("li",[_._v("银行怎样改造数据中心，才能保证不同业务间的流量调度、隔离一切正常？")])]),_._v(" "),v("p",[_._v("而网商银行就用自身的云原生实践给出了解答。从云平台 + 分布式架构，演化到云原生、混合云弹性架构，这家被称为 “国内首家跑在云技术之上” 的商业银行，他们五年来的云化升级历程，所遇到的典型挑战、解决思路都颇具借鉴意义。")]),_._v(" "),v("p",[_._v("在雷锋网《AI 金融评论》与阿里云联合主办 “银行系统云化升级” 实战体验营，网商银行基础技术架构部负责人蒋易民就深入讲解了他们的云原生演进之路。")]),_._v(" "),v("p",[_._v("欲获得所有讲者视频以及 PPT 回顾内容，可在**《AI 金融评论》对话框回复 “参会”，**即可进群获取回放链接。")]),_._v(" "),v("p",[v("strong",[_._v("以下为经雷锋网 AI 金融评论编辑的蒋易民演讲内容：")])]),_._v(" "),v("p",[_._v("今天很荣幸和大家分享网商银行的实践情况。")]),_._v(" "),v("p",[v("strong",[_._v("从云计算走向金融级云原生")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAJmBOicumffYVH7FT07AZeT4As1yGicGHK2FBlVtERqzPEIEqRRHiatDL4A2KAicjvLDcy7Yq2HhGr70A/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDOkI06I5ib1PrgGLZEs4hp9bic38iaeufDibHiadLgEfUia4X2cpeR0XXYPOg/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[_._v("从这张图来看，网商银行主要经历了"),v("strong",[_._v("三代架构的演进")]),_._v("。")]),_._v(" "),v("p",[_._v("一，2015-2016 年，主要是基于云平台 + 分布式架构建立起来的。整个的部署模式是同城双活模式。")]),_._v(" "),v("p",[_._v("二，2017-2018 年，在同城双活的基础上需要建设一个异地数据中心，希望这个异地的数据中心在日常过程中能承载业务流量，能与杭州数据中心同时对外提供服务。")]),_._v(" "),v("p",[_._v("在满足异地灾备要求的同时考虑提升整个 IT 基础设施的资产利用率，所以打造了单元化多活架构，它是一个三地五中心的部署结构。")]),_._v(" "),v("p",[_._v("三，2019 年，网商银行开始关注云原生架构，包括开始引进一些产品，设计建设相关能力。在这个过程中，我们也建设了混合云弹性架构，具备了在两朵云之间调度资源的能力。")]),_._v(" "),v("p",[_._v("在上图右侧的曲线可以看出，从网商银行开业，全行的容量水位大概是 50 TPS，经过多年的发展，到现在已经到了 5 万 TPS。")]),_._v(" "),v("p",[_._v("但在整个过程中，也发现了"),v("strong",[_._v("存在的一些问题")]),_._v("：")]),_._v(" "),v("p",[_._v("在底层基础架构频繁演进过程中，需要大量上层业务研发去配合。这个时候升级改造，控制进度、周期是非常难的。")]),_._v(" "),v("p",[_._v("一代架构的演进大概需要两年左右的时间，基本上把全行所有的系统都切过了。过程中，研发人员的体验感也不是特别好。")]),_._v(" "),v("p",[_._v("怎样才能在整个底盘升级过程中，尽量避免对已上线业务造成打扰？这也是我们引入云原生最初的一个原动力。")]),_._v(" "),v("p",[_._v("放眼多年的发展，我们的路径是一种双模路径——**为什么叫双模？**就是在多个架构运行过程中，除了对新技术的探索，最重要的是要做好技术风险的防控，保证业务的连续性。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDoFqHol7MYG5ZYATgdJtOUJciaw7za82IR4ejITg5yUvuibFptcOx5xEg/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[v("strong",[_._v("怎样保证在新旧架构演进的过程中，最大化地减少对业务的影响？")])]),_._v(" "),v("p",[_._v("我们在进行新技术探索时，也需要做好风险防控。")]),_._v(" "),v("p",[_._v("新一代架构诞生以后，并不是立马全面投产，新老架构会经历较长时间并轨运行，这种情况下是基于增量式的交付，逐渐把老的架构往新的架构演进，并且具备快速回退的能力。")]),_._v(" "),v("p",[v("strong",[_._v("网商银行的技术架构特征")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAJmBOicumffYVH7FT07AZeT4As1yGicGHK2FBlVtERqzPEIEqRRHiatDL4A2KAicjvLDcy7Yq2HhGr70A/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[_._v("回顾网商银行多年的发展，全行的技术架构特征，有以下几个方面：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDI8fOY2FzmsNqUEjlLSbIIlUcGea9hEekmica5SUvUwpeofgVo3hEgNA/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[_._v("因为网商银行是一家没有线下网点的互联网银行，IT 系统需要支撑上亿的客户，每天处理上亿的交易量，双 11 这种活动也会带来流量的一个突增。同时还要确保安全、稳定和可控。")]),_._v(" "),v("p",[_._v("从我行的架构特征来看，要满足这些高性能、高可靠，还有高弹性、高标准，低成本、低风险等要求，架构演进主要也是围绕着解决稳定、效能、安全、容量、成本等多个方面进行。"),v("strong",[_._v("从安全角度来看，有两个维度：")])]),_._v(" "),v("p",[_._v("一，信息安全，主要是确保抵御恶意攻击的能力，保证用户数据和隐私安全。")]),_._v(" "),v("p",[_._v("二，资金安全，需要避免在交易过程中数据不一致，特别是一些缺陷导致公司和客户的资金出现问题。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDBUUCBZBB782HLdzgnPA9icGWe0C4b4q3XDTRiaAXttoQiaEAiatoBgMKYQ/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[_._v("多年的架构演进，**“压舱石” 是什么，那非全链路追踪和压测能力莫属。**如何做到架构平稳切换，压测方案的设计是其中重要一环。")]),_._v(" "),v("p",[_._v("从开业至今五年多，三代架构的演进整体上是平滑的，我们认为很关键的一点是从第一代架构诞生就已具备了全链路压测的本领。我们的方案跟一些业内方案可能存在一些差异，我们是直接拿生产环境去压测的，没有去做模拟的环境，尽最大可能避免环境配置和服务器的水位不同带来的一些差异。")]),_._v(" "),v("p",[_._v("从上图可以看出，我们计算上是共享的，但是存储层面是同库不同表。从这个角度来看，在压测过程中是能最大化还原真实的生产流量对生产系统的压力。")]),_._v(" "),v("p",[v("strong",[_._v("云原生在网商银行的关键实践")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAJmBOicumffYVH7FT07AZeT4As1yGicGHK2FBlVtERqzPEIEqRRHiatDL4A2KAicjvLDcy7Yq2HhGr70A/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDlxGsrEF1z4aoKuGnxnpuAkEqse2TbuVxZFD44icIPftvZBHbbVyzibjg/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[_._v("云原生架构是基于云原生技术的一组架构原则和设计模式的集合，最关键的点就是把一些业务处理逻辑中非功能性的代码剥离出来，从而让云设施接管应用中原有的大量非功能特性（如弹性、韧性、安全、可观测性、灰度等）。")]),_._v(" "),v("p",[_._v("图左可以看到，传统架构的一段代码逻辑包含三部分，非功能性代码、业务代码、三方依赖。\n而云原生，希望非功能性的代码在理想情况下最大化的减少，相对的业务代码只要聚焦自己的业务即可。")]),_._v(" "),v("p",[_._v("大量非功能的特性，包括弹性、容量、安全可观测性、灰度等都会逐渐下沉到底层的基础设施，特别像高可用能力、容灾能力、容量保障、安全特性，还有一些可运维的特性，逐渐让基础设施去接管。")]),_._v(" "),v("p",[_._v("这种情况下可以看出，在我们在部署上会发生的一些变化。从图的右下角看到，容器会进行进一步的拆分，拆成应用一个进程，边车（sidecar）一个进程。")]),_._v(" "),v("p",[v("strong",[_._v("网商银行云原生的关键实践，主要包含 4 个部分：微服务，容器化，不可变基础设施，服务网格。")])]),_._v(" "),v("p",[_._v("受益于第一代跟第二代架构打下的基础，前两个层面已经有了较好的积累，我们在进行云原生实践过程中没有投入太多的精力，后两个部分投入很大。")]),_._v(" "),v("p",[_._v("涉及到不可变基础设施最重要的一点，就是要完成它的镜像化改造。对此，我们的要求应用是无状态化。")]),_._v(" "),v("p",[_._v("早期的微服务有部分系统并不具备无状态化，此时要求逐渐变成无状态化。对于服务网格，我们引进 SOFA Mesh 来实现 Mesh 的落地。（注：SOFA 是蚂蚁金服自主研发的分布式中间件，Scalable Open Financial Architecture；SOFAMesh 即其第三轮开源产品）")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDjic6JJWuQib4eZ9fEelUve6vNfN0oXUxkk8JcVib42YSsTgaoJ8Yhceyg/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[_._v("现在网商银行部署的一个基线，主要是三地五中心的模式。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDibPkbPDrJA5k1ZsRqhXYia3tIhyqCYbRKwjxeMemSvA17Bh2juW3JQvg/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[_._v("从应用层看，现有容量运用三个数据中心已经足够，但在存储层面选择了 5 个中心。这种情况下，我们做的是多活的模式。")]),_._v(" "),v("p",[_._v("那么这套架构是怎么建起来的？依赖于商业化的一些成熟产品，包括金融级中间件 SOFASTACK、分布式数据库 OceanBase。")]),_._v(" "),v("p",[_._v("这套架构最核心的一个特征，就是可以做到同城和异地容灾切换时，RPO=0。")]),_._v(" "),v("p",[_._v("如图所示，IDC1 跟 IDC2 如果同时出现问题，我们可以做到分钟级内把流量切到 IDC3。这个过程基于异地多活架构提供的能力是非常快的。从近期生产演练的数据来看，同城大概是 2 分钟，异地大概是 3 分钟。")]),_._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"微服务与单元化架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微服务与单元化架构"}},[_._v("#")]),_._v(" "),v("strong",[_._v("微服务与单元化架构")])])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHD8YV8qCT0EzG8fmlmiaTGtlNjzlUFCsKXzAfVECc7U2kGpXKTqz4vnJA/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[_._v("如图所示，网商银行早期也是非单元化。")]),_._v(" "),v("p",[_._v("非单元化有一个很典型的特点：在计算跟存储上，会存在交叉访问的情况。虽然网商早期设计中，做好了分库分表的设计，但从上层计算层面看，它也会出现跨层。")]),_._v(" "),v("p",[_._v("早期运用同城双活的模式，两边的数据跟计算存在交叉，这是没什么问题的。但要建设异地数据中心时，两地之间的延迟可能会导致一次服务的耗时大幅上涨，可能会导致最终客户的一笔交易会出现超时，这种情况下计算跟存储之间的跨城通讯是不可以接受的。")]),_._v(" "),v("p",[_._v("**如何解决？**采用的是单元化的架构模式，最典型特征是，它的流量是受控的，能形成一个小的闭环，让计算跟存储基本封闭在一个逻辑数据中心，但不排除有部分的跨城或者跨数据中心的访问。")]),_._v(" "),v("p",[_._v("当跨城、跨数据中心的访问是基于服务级别，不是数据级别的情况下，它的延迟是可以得到很好的控制。")]),_._v(" "),v("p",[_._v("当我们进入了单元化架构，在服务上会有多种路由模式，除了在同一个数据中心内部，单元之间、同城的数据中心之间也都会存在通讯的情况。最重要的是我们解决了跨城数据服务通讯。从实践来看，延迟是可以接受的。")]),_._v(" "),v("p",[_._v("重点看右下角的路由表，分片标记用户，用户属于某一个数据中心下面的一个单元，通过该路由表，用户的请求进入后会找到对应的数据中心下面的单元。也可能会出现一部分用户进入后，并没有到正确的数据中心，这种情况下我们会在接入层把用户的请求转到它对应的一个数据中心。")]),_._v(" "),v("p",[_._v("路由的核心是在 SDK 层面解决的。在业务系统代码里引入一些关键的 API 去做一些路由的定制，这种情况其实是非常重的。")]),_._v(" "),v("p",[_._v("从全行的单元化升级来看，花的时间也较长，这个跨度至少是一年以上，才会把一些关键的系统全部切到单元化架构上面。")]),_._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"容器技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#容器技术"}},[_._v("#")]),_._v(" "),v("strong",[_._v("容器技术")])])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDOZG8f3gMRUGENBQxyXxNtmuON8AOv7fibOD4y1xTodLWJDzRcMsJygg/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[_._v("网商银行早期也经历过富容器，这种较重，包含了所有的应用发布部署需要的依赖，不限于一些关键的 RPC、消息、数据库等 SDK。")]),_._v(" "),v("p",[_._v("最小的部署单元也是一个容器，在云原生里做进一步划分。")]),_._v(" "),v("p",[_._v("容器会区分为 APP 的容器，跟 Sidecar 的容器。根据现在的实践来看，主要是包含 Service Mesh 里面 MOSN 的容器，还有 DBMesh 的容器。这两个容器解决的是 RPC、消息，还有数据库跟缓存层面的转发。")]),_._v(" "),v("p",[_._v("这种模式有一个最大的好处，就是 MOSN 跟 DBMesh 可以独立演进，即可以不需要在上层业务容器配合的情况下，自己完成一些升级跟发布。")]),_._v(" "),v("p",[_._v("当我们做一次全行的架构升级，富容器模式会带着全行所有的应用，可能会进行一到多次迭代的发布。")]),_._v(" "),v("p",[_._v("升级一个 SDK 最大的问题是什么呢？因为各个系统有自己的进度安排，各自资源可能不一致。要做到全行统一升级，周期往往会拉得非常长。")]),_._v(" "),v("p",[_._v("最不可控的是什么？升级过程中，不同的系统质量保障各有差异。有些可能做得非常好，但有些如果稍有瑕疵，就会引发生产问题，这种情况下很难通过统一的手段去保障。")]),_._v(" "),v("p",[_._v("全行架构升级过程中，关注质量的品质，一致性和普遍性。")]),_._v(" "),v("p",[_._v("相对而言，"),v("strong",[_._v("轻容器")]),_._v("较好做，因为所有的能力下沉到 MOSN 跟 DBMesh 之后，只要在这两个层面做好质量保障，聚焦后能保障升级品质的一致性和普遍性。上层云的应用很少会关注下层的一些变化。")]),_._v(" "),v("p",[_._v("举个例子，有一次全行升级，大概是一个人花了不到一个月的时间，把全行上万的容器全部进行升级，基本不会对上层的业务造成打扰。所以轻容器相比富容器模式有了极大的提升。")]),_._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"不可变基础设施"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不可变基础设施"}},[_._v("#")]),_._v(" "),v("strong",[_._v("不可变基础设施")])])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDy4288bRGBWDB8FwXgdl7TnxLzVhGu6EE4fN9WL2iaQLXFQtNMicalaCQ/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[_._v("早期发布时，这是分阶段的，一般要先创建服务器，再下载依赖，过程中可能还要安装一些插件。全程存在很多变量，包括环境标记，依赖于不同人的配置能力。")]),_._v(" "),v("p",[_._v("早期配置的过程，会把一部分代码的参数放在配置平台。相当于引入一个可变的变量。")]),_._v(" "),v("p",[_._v("当配置平台发生一些变化，整个部署的效果就可能会出现差异，最明显的就是线下环境部署没问题，但在生产过程可能会发现问题。")]),_._v(" "),v("p",[v("strong",[_._v("怎么解决？在云原生架构理念上，我们考虑把所有的信息都放在镜像化包中，最大的好处是所有东西都包含在一个镜像里面，就可以从镜像环境到生产环境都使用同一个镜像。")])]),_._v(" "),v("p",[_._v("这个过程需要应用保证它的无状态化。如果做不到无状态化，它就不能做到自动的扩收容和自动恢复。")]),_._v(" "),v("p",[_._v("从图中可以看出，我们的镜像是分层的，这有利于不同的团队可以聚焦在自己的那一部分，然后整合起来形成一个大的镜像。在发布过程中，能保证质量品质的一致性，不会受限类似于一些环境或者人的操作水平。")]),_._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"单机故障问题的云原生解决方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单机故障问题的云原生解决方法"}},[_._v("#")]),_._v(" "),v("strong",[_._v("单机故障问题的云原生解决方法")])])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDdC1kj9onWbkbjbncaUe4HLYsZtwkg7Hcl0sSH42qN7UwRibicDcZibCsQ/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[_._v("在实际的生产过程中，全行几百个系统最典型的问题是单物理机故障对业务产生的影响较大。")]),_._v(" "),v("p",[_._v("物理机的规模较小，很容易导致部分核心系统的容器分布集中。普通的 PC 物理机会有宕机问题，造成影响面的半径较大。")]),_._v(" "),v("p",[_._v("比方说一个核心系统，可能有百分之四十容器集中在这台物理机上。当它出现问题，对业务稳定有极大的挑战，即使只是小部分出问题也会引起较大的抖动。")]),_._v(" "),v("p",[v("strong",[_._v("怎么解决？有了云原生架构后，我们根据业务特点，包括应用等级，去制定策略，确保所有的调度不会集中在个别的物理机上，也可以说是把它 “打散”。")])]),_._v(" "),v("p",[_._v("另一方面，之前配置中心不能自动发现物理机上的容器问题并自动剔除，通过监控 MOSN 的监控状态，探测它的服务健康状态。下发自愈策略后，当它发现监控报警有问题，让它自动剔除。")]),_._v(" "),v("p",[_._v("因为在分布式架构下，很多业务最终会汇集到同一个服务上。怎样保证这些服务占用的资源不会互相影响？这也是我们目前面临的一个较大的挑战。")]),_._v(" "),v("p",[_._v("其实除了物理机故障场景，在实际生产过程中还经常遇到这种问题：因为业务场景增多，有一些日常过程中流量非常少的业务场景，突然间提速后，会导致周边跟业务相关的所有系统发生变化。")]),_._v(" "),v("p",[_._v("这种情况下，很可能出现部分服务器请求积压，导致其他业务请求发到这台服务器时处理时会失败。这种情况下可能会影响很多业务，严重情况时会出现 “雪崩” 效应。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDvhcHmEGIKxYPOQlWRgKJx8fiaibxBb6H8bUGLO988zy9Pl4b2QJaWYLw/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("p",[_._v("很多时候联机交易跟批量交易并没有拆分系统，所以他们占用的资源是同一批。")]),_._v(" "),v("p",[_._v("这种情况下，在新的云原生架构下，借助资源调度和流量的标记能力对资源进行隔离使用，这样联机交易和批量任务所依赖的资源就可以区分开来，同时，我们希望把这些批量任务托管起来，做到资源的弹性调度。")]),_._v(" "),v("p",[_._v("当批量任务开始跑批时，能动态给它更多的资源；但没有跑批时，把资源给释放出来，可以减少对联机交易的一些影响。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDOpQicYC1vYvMZOQdpQGw8o4c0gv1yibrc4TmOx5ADPoYQUicHVS62kY1w/640?wx_fmt=jpeg",alt:"图片"}})]),_._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"不同业务的流量隔离与调拨"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不同业务的流量隔离与调拨"}},[_._v("#")]),_._v(" "),v("strong",[_._v("不同业务的流量隔离与调拨")])])])]),_._v(" "),v("p",[_._v("从上图可以看出，当一个流量进到生产系统时，它经过了多个系统，最终它会反映到的底层是容器，当没有进行有效区分时，不同的流量在容器内部是互相干扰的。")]),_._v(" "),v("p",[_._v("基于新的云原生能力，在流量转发的过程，它会有具备染色能力，可以在流量通过 mosn 时进行标记，让它路由到指定的一些容器上，就可以做到不同业务请求下，它会路由到不同的容器集群里，业务之间的相互影响就得到进一步降低。")]),_._v(" "),v("p",[_._v("**最典型的是生产遇到的热点账户问题，很容易导致全行的交易抖动。**如果我们可以识别不同的业务所导致的热点，可以做到有效的隔离，发生热点时不会影响到非产生热点的其他业务场景。")]),_._v(" "),v("p",[_._v("而近几年银行在改造数据中心，新中心的流量调度能力以往是比较弱的。")]),_._v(" "),v("p",[_._v("数据中心间的流量调拨的一般做法会在流量入口层做处理。如果投产过程中出现问题，对业务打扰较大。虽然也能做到快速回切，但从银行每天上亿的交易笔数来看，哪怕是几十秒，受影响的用户数可能也非常大。")]),_._v(" "),v("p",[_._v("在新的云原生架构之下，基于 mosn 可以打造更细粒度流量调拨，从数据中心层面进一步下沉到单个应用级别。可以找一些不敏感的应用服务先切流，避免影响到关键业务内容。")]),_._v(" "),v("p",[_._v("云原生架构的核心价值是可以实现"),v("strong",[_._v("流量的精细化隔离")]),_._v("。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDyrKXQoWyGsyoiadf0ic5GkaZ6AFhfgSqT3b0658eOTl5M2QQfRc95DBw/640?wx_fmt=jpeg",alt:"img"}})]),_._v(" "),v("p",[_._v("在单元化异地多活架构下，可以做到数据中心里某一个逻辑区域的隔离。到云原生架构下，可以把流量的隔离能力做得更细。")]),_._v(" "),v("p",[_._v("原来的模式下，两个业务同时进来，还是会互相影响。"),v("strong",[_._v("而云原生模式，可以按业务等级进行管理。")])]),_._v(" "),v("p",[_._v("我们会给不同敏感度的业务打上标记，以此区分业务应该到什么样的容器下去做完成交易。")]),_._v(" "),v("p",[_._v("标记能力因为有 MOSN，所以实现起来较容易。相比早期第二代架构做单元化用 UID 做标记，是通过研发人员编写代码实现的。因此借助 MOSN，可以用很低的代价实现这个逻辑。")]),_._v(" "),v("p",[_._v("运用 MOSN 之后新的数据中心启用方式会有什么不一样？")]),_._v(" "),v("p",[_._v("我们早期做新数据中心压测，一般来说有两种方式。")]),_._v(" "),v("p",[_._v("1、 通过找一些系统进行流量转发。做流量转发往往需要系统自我改造，这样不具备规模化、快速化的复制能力。")]),_._v(" "),v("p",[_._v("2、 直接把流量入口迁入新的数据中心。")]),_._v(" "),v("p",[_._v("早期做数据中心压测时，很难做到较细粒度，这和网商银行是异地多活模式有很大关系。它有一个全局的路由表，如果做不到新旧数据中心隔离，就会有问题。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDgBhOUEI7UCD0Sb56BQmX4DfqITy5fSR3GP3xPicCBzKE0iasqibPlia1nA/640?wx_fmt=jpeg",alt:"img"}})]),_._v(" "),v("p",[_._v("举个例子：在没有升级能力的情况下，如果做压测，可能就需要让全局路由表在新的数据中心生效。新的数据中心在没有经过充分验证的情况下，一旦路由表生效，生产流量进入就很有可能导致故障。我们通过 Mesh 进行了路由表的隔离。")]),_._v(" "),v("p",[_._v("新旧数据中心的路由表是有差异的，这个差异体现在哪里？")]),_._v(" "),v("p",[_._v("两个老数据中心生产流量配比可以做到 50%：50%，新数据中心没有生产流量，而压测流量在两个老数据中心和新数据中心中配比可以做到 40%、40%、20%，压测流量有一部分在新的机房进行处理，根据新的路由表转到了新的数据中心。")]),_._v(" "),v("p",[_._v("Mesh 在我们新的实践过程中，可以支撑不同的技术栈。从网商银行建站以来，我们是有一部分外购的系统，虽然它是 Java 技术栈，但是它可能和我们的体系，比方说基于 SOFA，还是有差异的。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDuZbpUibPPvL4vmLwcXPV3VDzdqaIGf0zGlvScquIZna1WhRd9uz8uoA/640?wx_fmt=jpeg",alt:"img"}})]),_._v(" "),v("p",[_._v("实践层面上看，让外购的厂商改成 SOFA 框架是很难的。传统模式下是希望厂商适当改一部分，框架不用修改，他可能修改服务调用方式，而我行内部的这些自研系统，他会提供某种轻量级的 HTTP 服务，暴露给外购系统进行互联互通。")]),_._v(" "),v("p",[_._v("整个过程来看，代价是较高的，它对相关的每个系统都有改造要求。")]),_._v(" "),v("p",[_._v("现在随着我们整个业务的发展，特别是**智能化和新技术引进，逐渐出现了 JAVA 之外的其他语言系统，最典型的就是 Python、GO 语言，这些系统怎样跟 Java 系统互联互通？**这种情况下其实也会带来新的问题。")]),_._v(" "),v("p",[_._v("在云原生模式下，这个问题就变得简单。因为 sidecar 解决了，像服务发现路由、加密。鉴权，限流等通用性问题，它集成了一些不同的语言，这种情况下，它只要提供一个 SDK，轻量化就能对接上系统。")]),_._v(" "),v("p",[_._v("这样服务提供方和服务消费者都不用做大的改动，只要单边系统修改就可以，不需要所有相关方做改造，对我们整个研发效能提升和业务拓展带来非常大的帮助。")]),_._v(" "),v("p",[v("strong",[_._v("未来：可信原生")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAJmBOicumffYVH7FT07AZeT4As1yGicGHK2FBlVtERqzPEIEqRRHiatDL4A2KAicjvLDcy7Yq2HhGr70A/640?wx_fmt=jpeg",alt:"img"}})]),_._v(" "),v("p",[_._v("总结下来，前面提到的云原生实践更多的是在稳定性、效能方面去提升。现在需要关注的问题，在云原生架构模式下，我们做安全会有哪些不一样的地方？")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDNWpNRfMVQwCZ6WfZSqL1Oib3HQlxRm1Qz9HzDzI2ROp7o54Aia5wQicjA/640?wx_fmt=jpeg",alt:"img"}})]),_._v(" "),v("ul",[v("li",[_._v("解决应用层的安全。")]),_._v(" "),v("li",[_._v("从整个基础设施层面做到安全可信。其中包含多个环节，包括硬件准入，从主机的供应链层面可能要防止物理机入侵。")]),_._v(" "),v("li",[_._v("从镜像准入层面做一些控制，防止镜像被非法篡改后在生产上运行。")])]),_._v(" "),v("p",[_._v("在有了 MOSN 以后，最大的好处就是可以做到全局的服务和数据鉴权。")]),_._v(" "),v("p",[_._v("原来那种架构模式，如果要做数据鉴权跟服务鉴权，也需要很多系统去改，去做 SDK 的升级。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKyeFoVtWfSicKLlJeNK4aHDibvAicnxostCUXjrM5dmUXwQSXmFZKu39hrpkZ6OSN5Z5T98OrjUxQ8Q/640?wx_fmt=jpeg",alt:"img"}})]),_._v(" "),v("p",[_._v("在写入镜像中心时，要做安全可信。")]),_._v(" "),v("p",[_._v("1、首先，控制在研发环境的镜像编译、准入。")]),_._v(" "),v("p",[_._v("2、在整个镜像被使用的过程中，去验证镜像是否安全。")]),_._v(" "),v("p",[_._v("3、从底层的物理机层面，在供应链采购时可能会做准入控制。")]),_._v(" "),v("p",[_._v("4、在上层应用层的容器启动时，我们也会探测它是不是可信的。")]),_._v(" "),v("p",[_._v("有了 MOSN，我们在进行服务的鉴权，还有数据的加密都可以下沉到相关的 sidecar，这种时候做安全方面的控制都集中在底层的基础设施，可以明显看到云原生带来的红利。")]),_._v(" "),v("p",[_._v("上层的业务可以不用关心相关的要求，基本上安全工程师通过配置一些规则，然后把这些规则下发到全行相关的一些 sidecar 产品上即可，包括 MOSN、DBMESH。")]),_._v(" "),v("p",[v("strong",[_._v("答疑环节精选")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAJmBOicumffYVH7FT07AZeT4As1yGicGHK2FBlVtERqzPEIEqRRHiatDL4A2KAicjvLDcy7Yq2HhGr70A/640?wx_fmt=jpeg",alt:"img"}})]),_._v(" "),v("p",[v("strong",[_._v("问：压测采用的是生产流量还是模拟的流量？")])]),_._v(" "),v("p",[_._v("**蒋易民：**我们用的是模拟的流量，它跟生产流量是不一样的。这是另外一套账号体系，它不是真实的。")]),_._v(" "),v("p",[_._v("生产流量是真实的用户，压测流量来源于压测平台，且流量并不是同一套流量，用户体系也是不一样的。在存储结构上是同库上两套不同的表（表结构完全一致但表名不同），落的数据处于不同的区域。")]),_._v(" "),v("p",[v("strong",[_._v("问：关于客户统一视图查询的问题。")])]),_._v(" "),v("p",[_._v("**蒋易民：**如果要在多个服务中获得最新的客户信息汇总，就需要把数据集中化处理了。但是从实际的过程看，至少在交易层面，是很少用到客户信息的汇总，更多的是在批处理层面。在批处理层面，我们会把它放到类似于 odps 大数据平台去解决。")]),_._v(" "),v("p",[_._v("所有数据回流到大数据平台，多库多表，最终会集中到一张表里，这个数据是全量的。")]),_._v(" "),v("p",[_._v("采用 sidecar 以后，我们运行这套架构也有较长时间了，对日常其实没什么影响。基本上层业务对它没有什么感知。整个 sidecar 引进以后，对资源的占用是非常少的，不会影响到整个系统的容量水平。"),v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/CG32iaJuMWAJaBiayX2Io4EMS9NhATZoEiaO3eH6xEkq1p9UfH6kjick08ibPBibgHMGgaUQ6qIQUsdFZwUWB9CKXnWQ/640?wx_fmt=png",alt:"img"}})]),_._v(" "),v("p",[v("strong",[_._v("1000 + 位金融企业家")])]),_._v(" "),v("p",[v("strong",[_._v("最期待的数字化论坛")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAJmBOicumffYVH7FT07AZeT4As1yGicGHK2FBlVtERqzPEIEqRRHiatDL4A2KAicjvLDcy7Yq2HhGr70A/640?wx_fmt=jpeg",alt:"img"}})]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAJkL70TVdYfXyAibGiaKeurib777Y8oEiaQahF2ASdm64HKrib1iaia3XOLUjXr0Y1IgQQgpGnaeft4cCWgQ/640?wx_fmt=jpeg",alt:"img"}})]),_._v(" "),v("p",[v("strong",[_._v("推荐****阅读")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAJmBOicumffYVH7FT07AZeT4As1yGicGHK2FBlVtERqzPEIEqRRHiatDL4A2KAicjvLDcy7Yq2HhGr70A/640?wx_fmt=jpeg",alt:"img"}})]),_._v(" "),v("p",[v("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzIxMDY1ODQxMg==&mid=2247496912&idx=1&sn=75e166fae89ae91d0e073aa802d042b1&chksm=976381d3a01408c55c52d9ce2926c75787f32f14cef9b35a6041fcfc36a47ce1e5ef6b6d96e5&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKOnric7t98zKtbpWxzR2uS0PqEpq9YeibQvLAleyobrb0LLIPUtukrOX8YYObUccSSMJkrnAVLOrfg/640?wx_fmt=jpeg",alt:"img"}}),v("OutboundLink")],1)]),_._v(" "),v("p",[v("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzIxMDY1ODQxMg==&mid=2247497050&idx=1&sn=693d7c1fb9e1f4f12bf523cd3f1902ec&chksm=97638059a014094fb370bec7a5fcebd84612f8aae500151c9879eabaa949c8a7193323ecbac7&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWAKfKyGupa9RWDtibS4x9ffXl4TzzVzy8NbRC6mibbtqsoVE0JK1ClJ1pSItoT0jE7xym1XLdRavvZMg/640?wx_fmt=jpeg",alt:"img"}}),v("OutboundLink")],1)]),_._v(" "),v("p",[v("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzIxMDY1ODQxMg==&mid=2247497189&idx=1&sn=07c94d79f8ca4533e81c04560e0ad3c8&chksm=976380e6a01409f0dc56cfbfa0bc4f01b61b1fe79a64096ff751a63cd119e2f39876fb1a242a&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/CG32iaJuMWALIVflCHUcMVBNWB0v9YDedGD4uHrNk105k1jcJrhUOe51gfricicYS5IhHAiaaEqib4pGq0hjDEPGKFw/640?wx_fmt=jpeg",alt:"img"}}),v("OutboundLink")],1)]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/CG32iaJuMWAKQlKZaTDcmQ46bmn0tF6GSaJ8WXl8evVLzSeBBicLFZ7AvtrFeKF87BYR2B5KC9HcsSSiahLegxTsQ/640?wx_fmt=png",alt:"img"}})]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_gif/CG32iaJuMWAIe0C7dDbETaeA3kSpYP3Chef5L0PRaslUOwXH2JD9PU3jMK0rVsbFKKUNg069wgE86KC83vBmTrQ/640?wx_fmt=gif",alt:"img"}})]),_._v(" "),v("p",[_._v("全文完")]),_._v(" "),v("p",[_._v("本文由 "),v("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[_._v("简悦 SimpRead"),v("OutboundLink")],1),_._v(" 优化，用以提升阅读体验")]),_._v(" "),v("p",[_._v("使用了 全新的简悦词法分析引擎 beta，"),v("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[_._v("点击查看"),v("OutboundLink")],1),_._v("详细说明")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/DtOoYVWo_OuPTNDBzcdj4w#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[_._v("微服务与单元化架构"),v("OutboundLink")],1),v("a",{attrs:{href:"https://mp.weixin.qq.com/s/DtOoYVWo_OuPTNDBzcdj4w#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[_._v("容器技术"),v("OutboundLink")],1),v("a",{attrs:{href:"https://mp.weixin.qq.com/s/DtOoYVWo_OuPTNDBzcdj4w#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[_._v("不可变基础设施"),v("OutboundLink")],1),v("a",{attrs:{href:"https://mp.weixin.qq.com/s/DtOoYVWo_OuPTNDBzcdj4w#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[_._v("单机故障问题的云原生解决方法"),v("OutboundLink")],1),v("a",{attrs:{href:"https://mp.weixin.qq.com/s/DtOoYVWo_OuPTNDBzcdj4w#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[_._v("不同业务的流量隔离与调拨"),v("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=p.exports}}]);