(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{466:function(t,e,r){"use strict";r.r(e);var _=r(42),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("这不是一个讲概念的专栏，而且我也不擅长讲概念，每一篇文章都是一个故事，我希望你可以通过这些故事了解我当时在实际工作中遇到问题和背后的思考，架构设计是种经验，我有幸参与到多个亿级系统的架构设计中，有所收获的同时也希望把这些收获分享与大家。")]),t._v(" "),r("p",[t._v("2013 年，我在做 APP 服务端的平台化转型，故事就从这里开始。")]),t._v(" "),r("p",[t._v("在最开始做网关时，我并没有一开始就明确说要做个 API 网关，而是做着做着发现这是个网关。因为当时我是在做服务端的平台化转型，最开始时只是提供了客户端登录、获取插件列表、插件启动授权几个简单的 API，其中客户端登录是通过 RSA 和 AES 非对称加密算法来实现，登录之后平台颁发 token 给客户端，有了 token 之后，客户端就通过 OAuth 2.0 协议来调用获取插件列表、插件启动授权等 API，不过由于最开始没想清楚，提供出去的 API 接口定义和格式不统一，虽然都是 json 格式，但几乎每个 API 都有自己的的格式定义，即每个 method 在服务端都实现了一个 Servlet 服务，客户端天天是要这接口要那接口，搞了上百个接口还是被客户端碾着走，更糟糕的是代码越来越臃肿还老出问题。")]),t._v(" "),r("p",[t._v("后来就想为何不把接口定义和格式统一了，就只提供一个 Serlvet 服务，通过解析 API 接口参数在后端进行服务的分发，这样至少可以减少每个 API 都写一遍 Servlet 的工作，当时的这个架构是 C/S 的架构，客户端通过公网访问弹内的服务器，这个功能上线其实是上线了一个新的 API，之后客户端的新功能都必须使用新的 API，老的 API 在客户端线上的版本逐步下线后，服务端再对老的 API 进行清理，当整个架构逐渐形成之后，服务端的开发效率得到了显著的提升，也是这时，我觉得这其实是个网关的雏形，所以整个平台演进的过程，在这一阶段我总结为：统一服务接口。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img0.tuicool.com/fQBbUfu.jpg!web",alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"_1-什么是网关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是网关"}},[t._v("#")]),t._v(" 1. 什么是网关？")]),t._v(" "),r("p",[t._v("现在来谈谈 API 网关，关于 API 网关的定义，有很多的说法，其字面意思就是系统的统一 API 入口。说白了， 就是将客户端的所有请求统一通过 API 网关接入服务端，并完成认证、授权、安全、流控、熔断、调度、转发、监 控等处理过程。API 网关的价值，就是为实现更加安全、高效和稳定的 API 调用提供服务保障。")]),t._v(" "),r("p",[t._v("就我当时负责的平台而言，统一了服务接口还不能说是做了一个网关，因为这仅仅是实现了网关统一接入组件的一个点，那网关的统一接入组件又是什么？下面我们先聊下网关的每一个组件，以及每一个组件的职责。")]),t._v(" "),r("p",[t._v("API 网关的核心组件")]),t._v(" "),r("p",[t._v("从 API 调用的过程来看，我把 API 网关划分为四个组件：")]),t._v(" "),r("ul",[r("li",[t._v("统一接入组件，管理所有的请求接入，负责认证鉴权、安全、校验、限流、降级和熔断等，它就像 API 网关的护城河；")]),t._v(" "),r("li",[t._v("服务调度组件，管理请求的路由和调度，负责协议解析、路由、转换、映射和服务编排等，它是外部请求调度后端服务的中间枢纽，也是 API 网关的大脑（只有大脑才知道哪个 API 应去哪里调度）；")]),t._v(" "),r("li",[t._v("服务发布组件，管理 API 的注册和订阅，负责服务发现、服务订阅和服务更新等，它是 API 网关的心脏（心脏会不断的把 API 信息同步给网关）；")]),t._v(" "),r("li",[t._v("服务监控组件，是对所有 API 请求的统一监控，负责日志、监控、告警和统计分析等，它是 API 网关的守卫。")])]),t._v(" "),r("p",[t._v("这里我画了一张 API 网关的架构示意图。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img1.tuicool.com/3Q7zMfv.jpg!web",alt:"img"}})]),t._v(" "),r("p",[t._v("统一接入组件")]),t._v(" "),r("p",[t._v("当时，统一了服务接口的确实现了 API 的统一接入点，但很快也暴露出了新的问题 —— 这个接入点很快就过热了，之前的登录 API 和插件 API 都是分开的，现在统一后，有些 API 出故障后影响面很大，印象非常深刻的一次是客户端上线了一个定时查询待出库订单数的功能，结果整个服务端全面打爆，服务重启很快又被打爆，这其实是统一之后服务端没有及时跟上必要的限流、熔断等防御手段。")]),t._v(" "),r("p",[t._v("所以，那次之后，服务端进行了第一次的系统拆分 —— 网关和服务中心。")]),t._v(" "),r("h3",{attrs:{id:"_2-分层架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-分层架构"}},[t._v("#")]),t._v(" 2. 分层架构")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img0.tuicool.com/JzyUvqb.jpg!web",alt:"img"}})]),t._v(" "),r("p",[t._v("平台提供的所有端能力进行服务下沉，搭建服务中心新系统，原系统作为网关将重点负责 API 接入、安全、流控、熔断、路由、分发、调度、监控等功能。除了垂直拆分，还做了水平拆分，即对平台 API 和业务 API 进行了隔离，简单说，就是提供了两个 Servlet。当时，还没有微服务化的概念，只是想着隔离平台调用与业务调用的相互影响，能解决当时的问题。后来，在认识了微服务之后，有一种后知后觉的感觉，这次系统的拆分使得平台整体的稳定性得到很大的提升，不过后来玩微服务有点玩坏了，而这就是后话了。")]),t._v(" "),r("p",[t._v("重构之后的网关架构比较整洁，在实现上，统一接入组件采用的是类似于责任链的方式，由于这时期的 API 调用主要是 HTTP 请求，所以网关是基于 Servlet 来提供 API 服务的，通过拦截器进行安全、流控、熔断等功能的实现。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img1.tuicool.com/VnQbimB.jpg!web",alt:"img"}})]),t._v(" "),r("p",[t._v("其中 FrequencyPipe 是负责流控和熔断的拦截器，这里必须得说一下，毕竟是这里栽了跟头。常见的限流算法有漏斗算法和令牌桶算法，我的理解，令牌桶常用于控制并发，无论何时，令牌的总数是固定的，每次调用开始都需要申请，调用结束都需要释放；漏桶适用于控制 QPS，漏桶可以在每秒生成 m 个令牌，每次调用开始都需要申请，但调用结束不需要释放，不过问题就是如果上一秒的调用没有结束，实际调用会大于当前生成的 m 个令牌控制的调用量。")]),t._v(" "),r("p",[t._v("在实现上，当时了解 Guava 的 RateLimiter 与 Semaphore 都可以实现，通过对比，网关使用的是 Guava 的 Semaphore 令牌桶策略来控制并发数，不过，遇到的问题就是每次重启都会有瞬时的流量超过并发数。而在后来随着微服务与网关越来越火，又有 Hystrix 或 Sentinel 提供了更强大的功能，比如 Hystrix 的线程熔断和 Sentinel 的异常熔断等等。")]),t._v(" "),r("h3",{attrs:{id:"_3-高可用架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-高可用架构"}},[t._v("#")]),t._v(" 3. 高可用架构")]),t._v(" "),r("p",[t._v("日志的作用不言而言，网关的调用日志是必不可少的。而且下定决心要做全链路的日志，是已经被各种查问题逼的不胜其烦的情况下了，你能想象到的，尤其是莫名被拉到一个群里，被 @有个问题要查网关一次调用的一个参数对不对或有没有，没有个日志服务平台，不仅要亲自操刀上阵，更悲催的是还只能去每台服务器上去找日志。")]),t._v(" "),r("p",[t._v("服务端在拆分了网关和服务中心之后，系统都开始往微服务架构的方向演进，一次 API 调用就需要有全局唯一的标识进行串联，网关采用的是 UUID，在 API 每次调用时都会生成一个 UUID 传递给上游并返回给客户端，这样当有问题需要查询时，就可以通过 UID 准确查找相关日志了。")]),t._v(" "),r("p",[t._v("怎么进行日志的采集、查询、统计，以及如何基于日志实现监控告警？")]),t._v(" "),r("p",[t._v("通常来讲，大多数系统打印日志采用的是 Log4j，网关也是，再通过集团提供的日志服务系统，比如 Scribe、Flume 等进行日志采集，然后就可以在日志系统或监控系统里看到数据了。")]),t._v(" "),r("p",[t._v("不过，日志采集看着简单，做起来还是个技术活，网关的调用量本身是很大的，先不看记录网关日志会有多大的存储量，关键点是看打印日志会对网关性能有多大的影响。")]),t._v(" "),r("p",[t._v("首先谈一下 Log4j，我们知道 Log4j 1.x 会引发线程 BLOCKED，所以 Log4j 1.x 不适合高并发的场景，解决方法一种是升级到 log4j2 或者更换为 logback，另一种是通过设置 BufferedIO 或者使用 AsyncAppender 来缓解出现 BLOCKED 的概率。遗憾的是，网关采用的是后者，这主要是依赖冲突导致的，不过这只是做日志采集里的一个小点。")]),t._v(" "),r("p",[t._v("基于 MMap、Kafka、Storm、ElasticSearch 实现日志服务平台")]),t._v(" "),r("p",[t._v("除此之外，网关自己还实现了一套日志服务系统，这主要是开放给平台用户的，当时集团的日志系统还不对外开发，所以自己就又搞了一套。")]),t._v(" "),r("p",[t._v("当时技术选型没有选择 Scribe、Flume，而是自己基于 MMap 技术来实现，这也受限于服务器 agent 权限，所以，基本思路是通过 Kafka 进行日志收集，然后 Storm 接收后写到 ElasticSearch 提供服务查询，这里有个技术点，最开始写日志是直接发 Kafka，不过线上发现网络的抖动会影响写 Kafka 的 RT，后来，我们尝试了 2 种方案，第一种是采用线程池异步写，另一种是基于 MMap 技术将日志先落盘，然后再异步的读文件发 Kafka，相比之下，第二种方案更不会丢数据。")]),t._v(" "),r("p",[t._v("日志打不好，找问题不仅抓瞎，弄不好系统还要扑街？")]),t._v(" "),r("p",[t._v("说到最后，也谈谈打日志出的问题。")]),t._v(" "),r("p",[t._v("第一，throw Exception，这点尤其注意，微服务架构里，如果服务提供方服务异常，一定不要将异常堆栈也传给服务调用方，虽然通过异常信息可以快速定位问题，但异常信息会占用大量的网络资源，严重的就变成服务不可用了，这里，我是有血的教训的，所以，我推荐的方式是定义返回结果对象里的返回值和错误码。")]),t._v(" "),r("p",[t._v("基于多维度的限流熔断策略，构建实时 API 成功率监控能力")]),t._v(" "),r("p",[t._v("上文说了全链路日志和实时监控，本文就说下限流降级，这里都是故事。网关系统，需要对调用 API 进行实时的性能监控和错误码监控，由于是实时计算，所以采用了 NoSQL 来缓存数据，因为是对 API 进行监控，所以将 API 接口名作为缓存 Key，可当 API 调用异常猛增时，缓存热定问题就出现了，很快就出现了 failover，然后服务不可用。所以，在处理数据时一定要考虑好数据热点问题，无论是 NoSQL 还是 MySQL。")]),t._v(" "),r("h3",{attrs:{id:"_4-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-总结"}},[t._v("#")]),t._v(" 4. 总结")]),t._v(" "),r("p",[t._v("言而总之，本篇文章重点讲述了 API 网关的统一接入、分层架构、高可用架构。下篇文章，我将继续介绍流量调度的配置中心、泛化调用。如果你觉得有收获，欢迎你把今天的内容分享给更多的朋友。")]),t._v(" "),r("p",[t._v("全文完")]),t._v(" "),r("p",[t._v("本文由 "),r("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[t._v("简悦 SimpRead"),r("OutboundLink")],1),t._v(" 优化，用以提升阅读体验")]),t._v(" "),r("p",[t._v("使用了 全新的简悦词法分析引擎 beta，"),r("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),r("OutboundLink")],1),t._v("详细说明")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.tuicool.com/articles/AB7Ffq7#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("1. 什么是网关？"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.tuicool.com/articles/AB7Ffq7#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("2. 分层架构"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.tuicool.com/articles/AB7Ffq7#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("3. 高可用架构"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.tuicool.com/articles/AB7Ffq7#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("4. 总结"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);