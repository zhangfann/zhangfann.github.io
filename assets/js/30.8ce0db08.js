(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{414:function(t,r,e){"use strict";e.r(r);var o=e(42),n=Object(o.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("目前从事的是 C++ 后台开发工作，虽然是个老问题了，但后面还会有很多同学看到，那我就来回答下吧，希望对你有点帮助。"),e("img",{attrs:{src:"https://pic1.zhimg.com/v2-b2ebfcc258c19bb5a3e2960dfd5e390c_r.jpg?source=1940ef5c",alt:"img"}}),t._v("图源: hippopx CCOC++ 开源项目众多，"),e("strong",[t._v("题主问的是后台开发方向的项目，那范围就缩小了很多")]),t._v("。题主已经有两年 C++ 经验了，那应该可以看懂一些大中型 C++ 项目源码，所以我推荐的项目有小型的也有大型成熟的，但是都是 C++ 后台开发相关的项目。项目涉及后台开发组件包括："),e("strong",[t._v("网络库、RPC 框架、数据库、配置文件处理、消息队列、序列化等等")]),t._v("话不多说，我们开始吧。"),e("strong",[t._v("下面这个项目，我想最先推荐。"),e("strong",[t._v("Google 开源代码规范我们学习开源项目源码，但是自己写代码的时候，良好的代码规范也必不可少，这方面可以参考 Google 开源代码规范。C++ 是 Google 大部分开源项目的主要编程语言，正如每个 C++ 程序员都知道的, C++ 有很多强大的特性, 但这种强大不可避免的导致它走向复杂，使代码更容易产生 bug，难以阅读和维护。本指南的目的是通过详细阐述 C++ 注意事项来驾驭其复杂性. 这些规则在保证代码易于管理的同时, 也能高效使用 C++ 的语言特性."),e("strong",[t._v("这个代码规范的 PDF 文档，已经有人已经在评论区给出。**"),e("strong",[t._v("项目主页")]),t._v("："),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/zh-google-styleguide/zh-google-styleguide",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/zh-google-styleguide/zh-google-styleguide"),e("OutboundLink")],1),t._v("数据库")]),t._v("cpp_redis****项目主页")]),t._v("："),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/Cylix/cpp_redis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Cylix/cpp_redis/"),e("OutboundLink")],1),t._v("C++11 Lightweight Redis client: async, thread-safe, no dependency, pipelining, multi-platform这是一个 C++11 编写的轻量级 Redis 客户端，具有异步、线程安全、无依赖、pipelining、跨平台等特性。代码量不大，可以学习如何编写一个简洁高效的网络通信客户端程序，另外项目采用了 C++11 编写，通过这个开源项目，你还可以学习如何使用这些语言新特性。"),e("strong",[t._v("LevelDb****项目主页：")]),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/google/leveldb",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/google/leveldb"),e("OutboundLink")],1),t._v("由 Google 的两位工程师 Sanjay Ghemawat 和 Jeff Dean 开发的键 / 值对（Key/Value Pair）嵌入式数据库，具有很高的随机写，顺序读 / 写性能，采用 LSM 树 (Log Structured-Merge Tree) 实现，LSM 树的核心思想就是放弃部分读的性能，换取最大的写入能力.关于 LevelDb 详细内容学习可参考教程："),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//kevins.pro/leveldb_chinese_doc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kevins.pro/leveldb_chinese_doc.html"),e("OutboundLink")],1),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//leveldb-handbook.readthedocs.io/zh/latest/basic.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leveldb-handbook.readthedocs.io/zh/latest/basic.html"),e("OutboundLink")],1),t._v("文件解析器在后台项目中需要经常处理配置文件解析工作，这些配置文件可以是 XML、JSON 或者是 YAML 等格式的标记语言文件，下面这几个项目就是几个不错的文件解析器，代码可读性好。"),e("strong",[t._v("JSON 处理****C++ JSON 解析器")]),t._v("JSON++ is a light-weight JSON parser, writer and reader written in C++. JSON++ can also convert JSON documents into lossless XML documents.用 C++ 写的轻量级 JSON 解析器，同时还可以将 jSON 文档转换成 XML 文档")]),t._v("项目主页**："),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/hjiang/jsonxx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/hjiang/jsonxx"),e("OutboundLink")],1),e("strong",[t._v("迷你的 C++11 JSON 库")]),t._v("json11 is a tiny JSON library for C++11, providing JSON parsing and serialization.同样是是个 mini JSON 库，仅 1 个 CPP 文件和一个头文件，方便的嵌入到自己的项目中"),e("strong",[t._v("项目主页")]),t._v("："),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/dropbox/json11",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/dropbox/json11"),e("OutboundLink")],1),e("strong",[t._v("TinyXML")]),t._v("我们经常需要在项目中处理 XML 配置文件，有没有想过自己编写一个简单通过的 XML 解析器，这里就是一个用 C++ 编写的，非常简单小巧的 XML 解析器，可以很容易地集成到其它项目中，出于 C++ 学习目的的话，你也可以把代码下载下来学习练手。"),e("strong",[t._v("项目主页")]),t._v(": "),e("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//sourceforge.net/projects/tinyxml/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://sourceforge.net/projects/tinyxml/"),e("OutboundLink")],1),e("strong",[t._v("yaml-cpp")]),t._v('YAML 也是一种类似 XML 和 JSON 一样的配置文件语言，YAML 的意思其实是："Yet Another Markup Language"（仍是一种标记语言），是专门用来写配置文件的语言，相比 JSON 更加简洁和方便阅读。这个项目就是一个用 cpp 写的 yaml 文件解析器，项目代码量也不大，结构清晰，可以用作学习参考。'),e("strong",[t._v("项目主页：")]),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/jbeder/yaml-cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/jbeder/yaml-cpp"),e("OutboundLink")],1),e("strong",[t._v("如果说前面的是练手，那下面介绍的项目会高级一些")]),t._v("。下面会介绍几个 C++ 后台开发中，具有代表性的项目和开源框架，做后台开发，这些项目你或多或少会使用到，了解一些项目源码自然更好。"),e("strong",[t._v("在开始接触比较大型项目之前，特别是初学者，如果感觉 C++ 学的还有些吃力，建议可以跟着老师视频学习，这里推荐一个 ACM 亚洲区冠军编写的免费 C++ 课程，可以点开看看，合适的话体验一下，反正免费~"),e("strong",[t._v("学好 C++ 才是入职大厂的敲门砖！ 当年要是有这课，我的 C++ 也不至于这样网络库")]),t._v("Muduo")]),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/chenshuo/muduo",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/chenshuo/muduo"),e("OutboundLink")],1),t._v("说到开源网络库，就不得不提 muduo ，它是一个基于 Reactor 模式的现代 C++ 网络库，采用非阻塞 IO 模型，基于事件驱动和回调，原生支持多核多线程，适合编写 Linux 服务端多线程网络应用程序。muduo 是知乎大神陈硕开发，基于 Reactor 模式，Redis 和 Java 的 Netty 库也是采用这种模式实现，具有如下特点：采用非阻塞 IO 模型、基于事件驱动和回调，原生支持多核多线程。学习 moduo 源码可以配合陈硕的《"),e("strong",[t._v("Linux 多线程服务器端编程")]),t._v("》，这本书以 muduo 网络库为例，讲解这种编程模型的使用方法及注意事项，重点讲解一种适应性较强的多线程服务器的编程模型，即 one loop per thread。消息队列后端开发常用到消息队列，消息队列是分布式系统中重要的组件，主要解决了应用耦合、异步处理、流量削锋等问题。消息队列在实际应用中包括如下四个场景：应用耦合：多应用间通过消息队列对同一消息进行处理，避免调用接口失败导致整个过程失败；异步处理：多应用对消息队列中同一消息进行处理，应用间并发处理消息，相比串行处理，减少处理时间；限流削峰：广泛应用于秒杀或抢购活动中，避免流量过大导致应用系统挂掉的情况；消息驱动的系统：系统分为消息队列、消息生产者、消息消费者，生产者负责产生消息，消费者 (可能有多个) 负责对消息进行处理；消息队列详细介绍参考："),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//cloud.tencent.com/developer/article/1006035",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.tencent.com/developer/article/1006035"),e("OutboundLink")],1),t._v("业界有名的 zeromq 核心代码也是用 C++ 编写，如果想深入研究消息队列，可以从这入手试试，下面给出项目主页和门户网站。"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//zeromq.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zeromq.org/"),e("OutboundLink")],1),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/zeromq/libzmq",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/zeromq/libzmq"),e("OutboundLink")],1),t._v("序列化序列化： 将数据结构或对象转换成二进制串的过程反序列化：将在序列化过程中所生成的二进制串转换成数据结构或者对象的过程数据结构、对象与二进制串不同的计算机语言中，数据结构，对象以及二进制串的表示方式并不相同。数据结构和对象：对于类似 Java 这种完全面向对象的语言，工程师所操作的一切都是对象（Object），来自于类的实例化。在 Java 语言中最接近数据结构的概念，就是 POJO（Plain Old Java Object）或者 Javabean－－那些只有 setter/getter 方法的类。而在 C++ 这种半面向对象的语言中，数据结构和 struct 对应，对象和 class 对应。二进制串：序列化所生成的二进制串指的是存储在内存中的一块数据。C++ 语言具有内存操作符，所以二进制串的概念容易理解，例如，C++ 语言的字符串可以直接被传输层使用，因为其本质上就是以’\\0’结尾的存储在内存中的二进制串。在 Java 语言里面，二进制串的概念容易和 String 混淆。实际上 String 是 Java 的一等公民，是一种特殊对象（Object）。对于跨语言间的通讯，序列化后的数据当然不能是某种语言的特殊数据类型。二进制串在 Java 里面所指的是 byte[]，byte 是 Java 的 8 中原生数据类型之一（Primitive data types）。序列化参考链接： "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//tech.meituan.com/2015/02/26/serialization-vs-deserialization.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tech.meituan.com/2015/02/26/serialization-vs-deserialization.html"),e("OutboundLink")],1),e("strong",[t._v("Protobuf")]),t._v("Protocol Buffer (简称 Protobuf) 是 Google 出品的性能优异、跨语言、跨平台的序列化库。"),e("strong",[t._v("项目主页")]),t._v("："),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/protocolbuffers/protobuf"),e("OutboundLink")],1),t._v("教程参考："),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//colobu.com/2019/10/03/protobuf-ultimate-tutorial-in-go/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Protobuf 终极教程"),e("OutboundLink")],1),t._v("RPC"),e("code",[t._v("RPC (Remote Procedure Call)")]),t._v("远程过程调用是一个计算机通信协议。我们一般的程序调用是本地程序内部的调用，"),e("code",[t._v("RPC")]),t._v("允许你像调用本地函数一样去调用另一个程序的函数，这中间会涉及网络通信和进程间通信，但你无需知道实现细节，"),e("code",[t._v("RPC")]),t._v("框架为你屏蔽了底层实现。RPC 是一种服务器 - 客户端（Client/Server）模式，经典实现是一个通过**「发送请求 - 接受回应」"),e("strong",[t._v("进行信息交互的系统。推荐几个 RPC 开源项目，供学习研究，"),e("strong",[t._v("先从简单的玩具项目入手")]),t._v("：rest_rpc"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/qicosmos/rest_rpc",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/qicosmos/rest_rpc"),e("OutboundLink")],1),t._v("c++11, high performance, cross platform, easy to use rpc framework.It's so easy to love RPC.Modern C++ 开发的 RPC 库就是这么简单好用！rest_rpc 是一个高性能、易用、跨平台、header only 的 c++11 rpc 库，它的目标是让 tcp 通信变得非常简单易用，即使不懂网络通信的人也可以直接使用它。 可以快速上手，使用者只需要关注自己的业务逻辑即可。"),e("strong",[t._v("再介绍几个业内成熟的后台开发 RPC 框架："),e("strong",[t._v("谷歌 gRPC谷歌开源的高性能远程过程调用系统。在 gRPC 里"),e("em",[t._v("客户端")]),t._v("应用可以像调用本地对象一样直接调用另一台不同的机器上"),e("em",[t._v("服务端")]),t._v("应用的方法，使得您能够更容易地创建分布式应用和服务。与许多 RPC 系统类似，gRPC 也是基于以下理念：定义一个"),e("em",[t._v("服务")]),t._v("，指定其能够被远程调用的方法（包含参数和返回类型）。在服务端实现这个接口，并运行一个 gRPC 服务器来处理客户端调用。在客户端拥有一个"),e("em",[t._v("存根")]),t._v("能够像服务端一样的方法"),e("img",{attrs:{src:"https://pic4.zhimg.com/v2-cf07fd08b3690e4496779410059f036f_r.jpg?source=1940ef5c",alt:"img"}}),t._v("中文官方文档："),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//doc.oschina.net/grpc%3Ft%3D58008",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://doc.oschina.net/grpc?t=58008"),e("OutboundLink")],1),e("strong",[t._v("项目主页")]),t._v("："),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/grpc/grpc",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/grpc/grpc"),e("OutboundLink")],1),t._v('百度 brpc百度内最常使用的工业级 RPC 框架, 有 1,000,000 + 个实例 (不包含 client) 和上千种多种服务。"brpc" 的含义是 "better RPC"。你可以使用它：搭建能在')]),t._v("一个端口")]),t._v("支持多协议的服务, 或访问各种服务restful http/https, "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//http2.github.io/http2-spec",target:"_blank",rel:"noopener noreferrer"}},[t._v("h2"),e("OutboundLink")],1),t._v("/"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//grpc.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC"),e("OutboundLink")],1),t._v("。使用 brpc 的 http 实现比 "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//curl.haxx.se/libcurl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("libcurl"),e("OutboundLink")],1),t._v(" 方便多了。从其他语言通过 HTTP/h2+json 访问基于 protobuf 的协议."),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/redis_client.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("redis"),e("OutboundLink")],1),t._v(" 和 "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/memcache_client.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("memcached"),e("OutboundLink")],1),t._v(", 线程安全，比官方 client 更方便。"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/brpc/brpc/blob/master/src/brpc/rtmp.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("rtmp"),e("OutboundLink")],1),t._v("/"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Flash_Video",target:"_blank",rel:"noopener noreferrer"}},[t._v("flv"),e("OutboundLink")],1),t._v("/"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/HTTP_Live_Streaming",target:"_blank",rel:"noopener noreferrer"}},[t._v("hls"),e("OutboundLink")],1),t._v(", 可用于搭建"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/brpc/media-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("流媒体服务"),e("OutboundLink")],1),t._v(".hadoop_rpc(可能开源)支持 "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Remote_direct_memory_access",target:"_blank",rel:"noopener noreferrer"}},[t._v("rdma"),e("OutboundLink")],1),t._v("(即将开源)支持 "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/thrift.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("thrift"),e("OutboundLink")],1),t._v(" , 线程安全，比官方 client 更方便各种百度内使用的协议: "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/baidu_std.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("baidu_std"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/streaming_rpc.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("streaming_rpc"),e("OutboundLink")],1),t._v(", hulu_pbrpc, "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/baidu/sofa-pbrpc",target:"_blank",rel:"noopener noreferrer"}},[t._v("sofa_pbrpc"),e("OutboundLink")],1),t._v(", nova_pbrpc, public_pbrpc, ubrpc 和使用 nshead 的各种协议.基于工业级的 "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//raft.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RAFT 算法"),e("OutboundLink")],1),t._v("实现搭建"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/High_availability",target:"_blank",rel:"noopener noreferrer"}},[t._v("高可用"),e("OutboundLink")],1),t._v("分布式系统，已在 "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/brpc/braft",target:"_blank",rel:"noopener noreferrer"}},[t._v("braft"),e("OutboundLink")],1),t._v(" 开源。Server 能"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/server.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("同步"),e("OutboundLink")],1),t._v("或"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/server.md%23%E5%BC%82%E6%AD%A5service",target:"_blank",rel:"noopener noreferrer"}},[t._v("异步"),e("OutboundLink")],1),t._v("处理请求。Client 支持"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/client.md%23%E5%90%8C%E6%AD%A5%E8%AE%BF%E9%97%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("同步"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/client.md%23%E5%BC%82%E6%AD%A5%E8%AE%BF%E9%97%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("异步"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/client.md%23%E5%8D%8A%E5%90%8C%E6%AD%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("半同步"),e("OutboundLink")],1),t._v("，或使用"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/combo_channel.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("组合 channels"),e("OutboundLink")],1),t._v(" 简化复杂的分库或并发访问。"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/builtin_service.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过 http 界面"),e("OutboundLink")],1),t._v("调试服务, 使用 "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/cpu_profiler.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("cpu"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/heap_profiler.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("heap"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/contention_profiler.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("contention"),e("OutboundLink")],1),t._v(" profilers.获得"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/overview.md%23%E6%9B%B4%E5%A5%BD%E7%9A%84%E5%BB%B6%E6%97%B6%E5%92%8C%E5%90%9E%E5%90%90",target:"_blank",rel:"noopener noreferrer"}},[t._v("更好的延时和吞吐"),e("OutboundLink")],1),t._v(".把你组织中使用的协议快速地"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/new_protocol.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("加入 brpc"),e("OutboundLink")],1),t._v("，或定制各类组件, 包括"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/load_balancing.md%23%E5%91%BD%E5%90%8D%E6%9C%8D%E5%8A%A1",target:"_blank",rel:"noopener noreferrer"}},[t._v("命名服务"),e("OutboundLink")],1),t._v(" (dns, zk, etcd), "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc/blob/master/docs/cn/load_balancing.md%23%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1",target:"_blank",rel:"noopener noreferrer"}},[t._v("负载均衡"),e("OutboundLink")],1),t._v(" (rr, random, consistent hashing)"),e("strong",[t._v("项目主页：")]),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/apache/incubator-brpc",target:"_blank",rel:"noopener noreferrer"}},[t._v("apache/incubator-brpc"),e("OutboundLink")],1),t._v("腾讯 tars腾讯开源的 RPC 框架TARS 是 Linux 基金会的开源项目，它是基于名字服务使用 TARS 协议的高性能 RPC 开发框架，配套一体化的运营管理平台，并通过伸缩调度，实现运维半托管服务。TARS 是腾讯从 2008 年到今天一直在使用的后台逻辑层的统一应用框架，覆盖腾讯 100 多个产品。目前支持 C++,Java,PHP,Nodejs,Go 语言。该框架为用户提供了涉及到开发、运维、以及测试的一整套解决方案，帮助一个产品或者服务快速开发、部署、测试、上线。 它集可扩展协议编解码、高性能 RPC 通信框架、名字路由与发现、发布监控、日志统计、配置管理等于一体，通过它可以快速用微服务的方式构建自己的稳定可靠的分布式应用，并实现完整有效的服务治理。"),e("img",{attrs:{src:"https://pic2.zhimg.com/v2-d0aca6977180c205992fa7387da6ccae_r.jpg?source=1940ef5c",alt:"img"}}),t._v("目前该框架在腾讯内部，各大核心业务都在使用，颇受欢迎，基于该框架部署运行的服务节点规模达到上万个。"),e("strong",[t._v("TARS-CPP 项目主页")]),t._v("： "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/TarsCloud/TarsCpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/TarsCloud/TarsCpp"),e("OutboundLink")],1),t._v("搜狗 srpc这是搜狗自研的 RPC 系统，主要功能和特点：这是一个基于 "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/sogou/workflow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sogou C++ Workflow"),e("OutboundLink")],1),t._v(" 的项目，兼具：高性能低开发和接入门槛完美兼容 workflow 的串并联任务流对于已有 pb/thrift 描述文件的项目，可以做到一键迁移支持多种 IDL 格式，包括：ProtobufThrift支持多种数据布局，使用上完全透明，包括：Protobuffer serializeThrift Binary serializejson serialize支持多种压缩，使用上完全透明，包括：gzipzlibsnappylz4支持多种通信协议，使用上完全透明，包括：tcphttpsctpsslhttps用户可以通过 http+json 实现跨语言：如果自己是 server 提供方，用任何语言的 http server 接受 post 请求，解析若干 http header 即可如果自己是 client 调用方，用任何语言的 http client 发送 post 请求，添加若干 http header 即可内置了可以与其他 RPC 框架的 server/client 无缝互通的 client/server，包括：BPRCThrift Framed BinaryThrift Http Binary兼容 workflow 的使用方式：提供创建任务的接口来创建一个 rpc 任务可以把 rpc 任务放到任务流图中，回调函数里也可以拿到当前的任务流workflow 所支持的其他功能，包括 upstream、计算调度、异步文件 IO 等")]),t._v("项目主页**："),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/sogou/srpc",target:"_blank",rel:"noopener noreferrer"}},[t._v("sogou/srpc"),e("OutboundLink")],1),t._v("单元测试"),e("strong",[t._v("Google Test")]),t._v("程序写的好，单元测试少不了。现在流行的软件开发模式「测试驱动开发」，学习使用单元测试保证代码健壮性，Google 的开源 C++ 单元测试框架 Google Test 也称为 gtest ，提供了丰富的断言和各类比较操作。断言gtest 使用一系列断言的宏来检查值是否符合预期，主要分为两类：ASSERT 和 EXPECT。区别在于 ASSERT 不通过的时候会认为是一个 fatal 的错误，退出当前函数（只是函数）。而 EXPECT 失败的话会继续运行当前函数，所以对于函数内几个失败可以同时报告出来。通常我们用 EXPECT 级别的断言就好，除非你认为当前检查点失败后函数的后续检查没有意义。"),e("strong",[t._v("项目主页：")]),t._v(" "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/google/googletest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/google/googletest/"),e("OutboundLink")],1),e("strong",[t._v("还是那句话，C++ 本身是高级语言里面比较难的一门，建议可以跟着老师视频学习，这里推荐一个 ACM 亚洲区冠军的免费 C++ 课程，可以点开看看，合适的话体验一下："),e("strong",[t._v("学好 C++ 才是入职大厂的敲门砖！ 当年要是有这课，我的 C++ 也不至于这样加个餐上面推荐的开源项目，有些用到了现代 C++ 特性，你可能会在项目源码中看到 C++1x 甚至更现代的 C++20 语法，不要慌，参考下面这个 11.7K star 的现代 C++ 教程项目快速上手："),e("strong",[t._v("这是一本现代 C++ 快速上手电子书，目标读者："),e("strong",[t._v("本书假定读者已经熟悉了传统 C++ ，至少在阅读传统 C++ 代码上不具备任何困难。换句话说，那些长期使用传统 C++ 进行编码的人、渴望在短时间内迅速了解")]),t._v("现代 C++")]),t._v(" 特性的人非常适合阅读本书；本书一定程度上介绍了一些现代 C++ 的")]),t._v("黑魔法")]),t._v("，但这些魔法毕竟有限，不适合希望进阶学习现代 C++ 的读者，本书的定位系"),e("strong",[t._v("现代 C++ 的快速上手")]),t._v("。当然，希望进阶学习的读者可以使用本书来回顾并检验自己对 "),e("strong",[t._v("现代 C++")]),t._v(" 的熟悉度。"),e("img",{attrs:{src:"https://pic1.zhimg.com/v2-5fa8f043da4d1bc7dba1688bc1bee659_r.jpg?source=1940ef5c",alt:"img"}}),e("strong",[t._v("项目主页")]),t._v("： "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/changkun/modern-cpp-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/changkun/modern-cpp-tutorial"),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=n.exports}}]);