(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{473:function(t,e,r){"use strict";r.r(e);var n=r(42),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("好久不见，分外想念。")]),t._v(" "),r("p",[t._v("最近一直有小朋友问我有没有什么学习 OVN 的资料，OVS 社区不像一些已经被商业化渗透很深的社区，整体是个比较松散自由的状态。官方自己的文档更新都很随意，大家也没什么抢发版本更新，抢发教程的利益冲动。OVN 相关的资料在互联网上也很分散，这里分享一下我收集的私货，希望能帮助到对 OVN 感兴趣的小朋友。")]),t._v(" "),r("p",[r("strong",[t._v("1. 几篇官方的文档")])]),t._v(" "),r("p",[t._v("第一要看的肯定还是官方的文档，不过官方挂在网站上的文档是 3 个版本前的，可见这个社区有多松散了。不过初步了解的话还是够的，等有大概的概念后可以再去代码里扒最新的文档出来。其中最重要的是 ovn-architecture 这篇文档介绍了整体的架构，组件功能，和一些操作的具体实现流程，建议先大概的看一下，有一个整体的印象。其余的 ovn-nb 和 ovn-sb 介绍了具体的 OVN 操作对象和各个字段属性，ovn-nbctl 和 ovn-sbctl 是一些具体的操作方法。这四个文档是在之后使用 OVN 以及代码对接中会反复查阅的四个文档。此外官网上还有近几年 OVSCon 上的 Slides，由于没什么商业化的内容，大家都是纯技术切磋，内容都很不错。")]),t._v(" "),r("p",[t._v("[1]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//www.openvswitch.org/support/dist-docs/ovn-architecture.7.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.openvswitch.org/support/dist-docs/ovn-architecture.7.txt"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("[2]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//www.openvswitch.org/support/dist-docs/ovn-nb.5.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.openvswitch.org/support/dist-docs/ovn-nb.5.txt"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("[3]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//www.openvswitch.org/support/dist-docs/ovn-nbctl.8.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.openvswitch.org/support/dist-docs/ovn-nbctl.8.txt"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("[4]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//www.openvswitch.org/support/dist-docs/ovn-sb.5.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.openvswitch.org/support/dist-docs/ovn-sb.5.txt"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("[5]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//www.openvswitch.org/support/dist-docs/ovn-sbctl.8.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.openvswitch.org/support/dist-docs/ovn-sbctl.8.txt"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("[6]OVSCon 2019 "),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//www.openvswitch.org/support/ovscon2019/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.openvswitch.org/support/ovscon2019/"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("2. 上手博客系列")])]),t._v(" "),r("p",[t._v("了解完大概后就要上手实践了，但是官方文档都是些比较零散的功能介绍，没有场景化的教程，很难根据官方文档直接上手干活。好在有几个博客系列介绍了如何利用 OVN 的功能，借助 namespace 组件一个复杂的虚拟网络，包含了 L2，L3，Gateway，ACL，DHCP 等等功能的使用。我最早也是通过这一系列的实践博客才上手的。最新的功能这些博客里没有覆盖到，不过跟着博客走一遍，有了写基本的感觉，再看新功能就不会那么抽象了。")]),t._v(" "),r("p",[t._v("[7]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//blog.spinhirne.com/p/blog-series.html%23introToOVN",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://blog.spinhirne.com/p/blog-series.html#introToOVN"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("[8]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//hustcat.github.io/tags/%23OVN",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://hustcat.github.io/tags/#OVN"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("3. Geneve 是什么，性能怎么样？")])]),t._v(" "),r("p",[t._v("OVN 采用了 Overlay 的方式来构建网络，Overlay 的隧道协议选用了 Geneve 这种比较新的封装协议。为什么要使用 Geneve 这种新型协议？这种封装协议对性能会有什么样的影响？下面几个文档将会解答你这些疑问。")]),t._v(" "),r("p",[t._v("[9]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.redhat.com/en/blog/what-geneve",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.redhat.com/en/blog/what-geneve"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("[10]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//blog.russellbryant.net/2017/05/30/ovn-geneve-vs-vxlan-does-it-matter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.russellbryant.net/2017/05/30/ovn-geneve-vs-vxlan-does-it-matter/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("[11]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//octo.vmware.com/geneve-vxlan-network-virtualization-encapsulations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://octo.vmware.com/geneve-vxlan-network-virtualization-encapsulations/"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("4. RedHat 的 OVN 系列博客")])]),t._v(" "),r("p",[t._v("RedHat (或者是 IBM) 目前作为 OVN 的主要支持者之一，在 Kubernetes 和 OpenStack 产品中都使用了 OVN 来构建网络，也写了大量相关的技术博客，还都有一定的深度，推荐关注一下他们家的技术博客。")]),t._v(" "),r("p",[t._v("[12]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//developers.redhat.com/blog/2018/12/07/ip-packet-buffering-in-ovn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.redhat.com/blog/2018/12/07/ip-packet-buffering-in-ovn/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("[13]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//developers.redhat.com/blog/2018/09/27/dynamic-ip-address-management-in-open-virtual-network-ovn-part-two/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.redhat.com/blog/2018/09/27/dynamic-ip-address-management-in-open-virtual-network-ovn-part-two/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("[14]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//developers.redhat.com/blog/2018/09/03/ovn-dynamic-ip-address-management/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.redhat.com/blog/2018/09/03/ovn-dynamic-ip-address-management/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("[15]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//developers.redhat.com/blog/2018/09/03/ovn-dynamic-ip-address-management/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.redhat.com/blog/2018/09/03/ovn-dynamic-ip-address-management/"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("5. OVN 和 OpenStack，Kubernetes 结合的实现参考")])]),t._v(" "),r("p",[t._v("OVN 和云平台的结合有几个比较不错的实现。一个是和 OpenStack 结合的 networking-ovn，可以说这个是目前把 OVN 功能发挥的最极致的一个实现，有很多特色功能都值得参考，我目前也在计划看看能不能把里面的一部分设计应用到容器网络上。容器圈里比较老牌的是 ovn-kubernetes，这是比较早尝试将 OVN 和 Kubernetes 结合的项目，我自己在做 Kube-OVN 的时候也参考了里面很多的实现。还有就是不太有名的 Kube-OVN 了，自我感觉这里面实现的逻辑还是比较清晰的，之前还有小朋友和我说每次不知道怎么用 OVN 实现一个功能就去翻 Kube-OVN 的代码，每次都能找到解决方法。")]),t._v(" "),r("p",[t._v("[16]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/openstack/networking-ovn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/openstack/networking-ovn"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("[17]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/ovn-org/ovn-kubernetes",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ovn-org/ovn-kubernetes"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("[18]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/alauda/kube-ovn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/alauda/kube-ovn"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("6. 我们出的视频课程")])]),t._v(" "),r("p",[t._v("最后介绍一下我们最近出的一系列线上直播的课程录像。这个课程主要是介绍 Kube-OVN 的一些使用的，不过我们每个操作都会对应到 OVN 里面的实现细节，包括我们如何设计 OVN 中的网络拓扑，如何利用虚拟交换，虚拟路由器，负载均衡器，ACL 等 OVN 中的概念，以及一些问题排查的方法。可以看成一个 OVN 和 Kubernetes 集成的实践教程，大家感兴趣的可以来看看。")]),t._v(" "),r("p",[t._v("[19]"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//v.qq.com/vplus/38b5355c4bfdfa3adef1e7c7ee68744c%3Fpage%3Dvideo",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://v.qq.com/vplus/38b5355c4bfdfa3adef1e7c7ee68744c?page=video"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("希望这些资料能帮助到你上手 OVN。如果觉得这期自习周报对你有帮助，欢迎点赞，分享，我们下周再见。")]),t._v(" "),r("p",[t._v("全文完")]),t._v(" "),r("p",[t._v("本文由 "),r("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[t._v("简悦 SimpRead"),r("OutboundLink")],1),t._v(" 优化，用以提升阅读体验")]),t._v(" "),r("p",[t._v("使用了 全新的简悦词法分析引擎 beta，"),r("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),r("OutboundLink")],1),t._v("详细说明")])])}),[],!1,null,null,null);e.default=o.exports}}]);