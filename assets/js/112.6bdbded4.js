(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{495:function(e,t,i){"use strict";i.r(t);var a=i(42),A=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("p",[e._v("ebpf_让云原生运维拥有超能力")]),e._v(" "),i("p",[e._v("俞凡 [DeepNoMind](javascript:void(0)😉 "),i("em",[e._v("前天")])]),e._v(" "),i("p",[e._v("收录于话题")]),e._v(" "),i("p",[e._v("#云原生2个内容")]),e._v(" "),i("p",[e._v("#网络14个内容")]),e._v(" "),i("p",[e._v("#eBPF1个内容")]),e._v(" "),i("blockquote",[i("p",[i("em",[e._v("eBPF给Linux内核带来了可编程性，由于其安全、灵活、对应用无侵入的特点，在云原生网络、安全、可观测性方面带来了很多创造性的应用。本文基于Cilium项目的首席开源官Liz Rice在InfoQ Live上的分享整理。原文：eBPF - Superpowers for Cloud Native Operations[1]")])])]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/9utHkjMdE0X9icyRvZ7moKJcQzoQfZNoRBUu5PDTBydtAEVcKCMfJHZyO8v09UGIBJIvfcN4qV1NpCuMC2s8Gfg/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),i("blockquote",[i("p",[e._v("Liz Rice是Isovalent的首席开源官，Isovalent是云原生网络和安全专家，是基于eBPF的Cilium项目的创建者。她是CNCF技术监督委员会主席，并于2018年担任KubeCon + CloudNativeCon联合主席。她是O'Reilly出版的《容器安全（Container Security）》一书的作者。")])]),e._v(" "),i("p",[e._v("我叫Liz Rice，是Isovalent的首席开源官，这家公司是Cilium网络项目的幕后推手。我也是CNCF技术监督委员会主席。今天我想和你们谈谈eBPF，这是一项让我兴奋了一段时间的技术。我想和大家分享的是，为什么它真正革命性的改变了为网络、可观察性和安全性而构建工具的方式，尤其是在云原生的世界中。")]),e._v(" "),i("h1",{attrs:{id:"什么是ebpf"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#什么是ebpf"}},[e._v("#")]),e._v(" 什么是eBPF？")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/9utHkjMdE0X9icyRvZ7moKJcQzoQfZNoRCO6XFMJxToQIf2I2V2bItygXHjCicaEibia2iaCsHZ5BlvY4mJlxHFRX7A/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),i("p",[e._v("让我们从了解eBPF开始。我们一般会完整拼出这个缩写，它代表了扩展的伯克利包过滤器（Extended Berkeley Packet Filter）。作为一个名字，它并不是非常有用，提供不了多少信息，你真正需要知道的是，eBPF允许你编写在内核中运行的自定义代码。你不再需要编写新的内核模块，可以根据需要动态加载和卸载eBPF程序。你可能知道，我们编写的应用程序通常是在用户空间中运行，用户空间应用程序能做的事情很有限，需要通过系统调用接口来请求内核帮它做一些事情。实际上，只要应用程序想做什么有意思的事情，内核就会参与进来。例如每次你想在屏幕上显式字符或打开一个文件或发送一个网络数据包，都将涉及到内核。")]),e._v(" "),i("h1",{attrs:{id:"在内核中运行用户代码"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#在内核中运行用户代码"}},[e._v("#")]),e._v(" 在内核中运行用户代码")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/9utHkjMdE0X9icyRvZ7moKJcQzoQfZNoRYXGjhKspJdyqOlmYoicUB9jVIPpSNHRpeKC3h0ECzjD8s9ApvUt0V0g/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),i("p",[e._v("对于eBPF程序，我们必须编写两个部分，eBPF程序本身通过C语言编写，另外需要编写一个用户空间应用程序，它将通过系统调用接口来加载eBPF程序，并将其附加到某个将触发我们eBPF程序运行的事件上。我们可以将eBPF程序附加到许多不同类型的事件上。最早实现的事件是收到网络数据包的时候，这就是包过滤这个名字的由来。此外还可以附加到其他事件上，例如kprobe，它是内核中函数的入口，kretprobe，它是内核中函数的返回值。它们在用户空间中也有等价的接口，uprobe和uretprobe。你还可以将eBPF程序附加在跟踪点（trace point）上。几乎可以将eBPF程序插入内核中的任何位置，只要你知道事件发生时涉及到的内核函数，这样就可以将eBPF程序附加到代码中的正确位置。")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/9utHkjMdE0X9icyRvZ7moKJcQzoQfZNoR4FemHbtGwqeBnXhtoXPTcF2AA7icickur5KoWUibBlKcazhuBIw0CcGibQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),i("p",[e._v("按照传统，我们要写一个Hello World，这是我的Hello World。我们很快过一下makefile，可以看到我们要构建一个应用程序和一个object文件。有许多不同的方法可以组合eBPF对象程序和eBPF用户空间应用程序。在这个例子中使用的框架允许我单独构建对象文件，然后加载它，并在用户空间应用程序中运行它。实际上我构建了两个目标，可执行文件本身和作为目标文件的eBPF代码。eBPF代码非常简单，只是Hello World。bpf_printk这个函数很方便，可以输出消息以及相关的上下文信息。这个程序将由系统调用execve触发，每次运行新程序，这个系统调用都会被触发或调用，任何新程序都会触达调用点（kprobe），从而触发eBPF程序运行。")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/9utHkjMdE0X9icyRvZ7moKJcQzoQfZNoREODRlSOKUCKo0SlNOFX6IxgcUqMAU2B4Wp7m7BqBkTDKQ2aAOELH0Q/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),i("p",[e._v("这是将在内核中运行的部分")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/9utHkjMdE0X9icyRvZ7moKJcQzoQfZNoRqYkr4t0DhaWzmqaYiaico0f0dNXvz2MS3EKPtQuwvZggqZo51bkp9p8w/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),i("p",[e._v("Go代码运行在用户空间")]),e._v(" "),i("p",[e._v("上面的C代码运行在内核中，Go代码运行在用户空间。用户空间程序主要是将目标文件加载到内核中，从对象文件中获取Hello World程序，并将其附加到系统调用，然后还将负责实际获取输出并打印到屏幕上。")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/9utHkjMdE0X9icyRvZ7moKJcQzoQfZNoRcvJISa1XghWx5OW7iaJGPadibAdhKlyibsbXmbgBJ7qjZhVUic3CLicln3A/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),i("p",[e._v("如果执行make，编译系统会分别编译C代码和Go代码。")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/9utHkjMdE0X9icyRvZ7moKJcQzoQfZNoRiafIynXMYPRc642pyiaOib5JZuuHSjf6CPnsx7SoJOanswfw1qR0arAnw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),i("p",[e._v("如果以非特权用户身份运行程序，系统会报错，因为需要一个叫做CAP_BPF的功能，这是一个特权功能，需要作为root用户执行，或者也可以给个别用户权限，但作为普通无特权的用户没有权限执行。")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/9utHkjMdE0X9icyRvZ7moKJcQzoQfZNoRJRHNOU0e1OZAzkyWsPRQVmeWXMOhWmxdvpxx8aNaLbpWyxRxjYNxDA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),i("p",[e._v("以root用户身份运行，可以看到一些跟踪消息。这台机器上正在进行很多操作，有很多node和shell在运行。")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/9utHkjMdE0X9icyRvZ7moKJcQzoQfZNoRp4lFiatSDQTBJbMdbYyBuSRFaNgu9Oakia4tzAVdCvqYAgJSAK8DOJTg/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),i("p",[e._v("我在另一个bash shell中运行ps，可以看到我的bash-22005，对应于运行ps的进程ID。指出这一点的原因是这个非常简单的eBPF Hello World可以看到所有这些不同的进程调用的执行。谁执行的，从哪发起的执行，都不重要，只要它们是发生在这个虚拟机上，发生在这个内核中，那么我的eBPF程序就会被触发。这是eBPF的强大功能之一，它连接到内核，而虚拟机上只有一个内核。这个Hello World非常简单，如果你想深入了解，我在GitHub上提供了一些更高级的例子：github.com/lizrice/ebpf-beginners。")]),e._v(" "),i("h1",{attrs:{id:"kubernetes的可编程内核"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes的可编程内核"}},[e._v("#")]),e._v(" Kubernetes的可编程内核")]),e._v(" "),i("p",[e._v("让我们来看看Kubernetes的世界，想想当我们在容器和pod中运行应用程序代码时，能够将eBPF程序附加到内核中意味着什么。我们的容器化应用程序主要在用户空间中运行，像任何其他应用程序一样，如果它想做一些有用的事情，不得不请求内核代表它去做。在Kubernetes中，这些容器被包含在称为pod的抽象中，但它们仍然共享一个内核。每个主机（Kubernetes节点）只有一个内核，可以是物理机，也可以是虚拟机。")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/9utHkjMdE0X9icyRvZ7moKJcQzoQfZNoRnfZwtjkqb756z7Iic0XfcP0XbWGFTPFhl7uMSwRyEWyOwasaGC9ibdQQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),i("p",[e._v("如果运行在pod中的应用程序尝试做一些有趣的事情，比如读写文件，或发送/接收网络流量，或者创建一个新的容器，都会涉及到内核，内核知道机器上运行的所有应用程序中发生的所有事情。这意味着，如果我们将eBPF程序连接到内核中适当的点上，就可以知道在用户空间中运行的所有pod、所有应用程序中发生的所有事情。")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/9utHkjMdE0X9icyRvZ7moKJcQzoQfZNoRT1XGsRXwzSh6krdE91hmttPGgQKichn7mERaGDbBJv1u369gQqqnbog/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),i("h1",{attrs:{id:""}},[i("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])]),e._v(" "),i("h1",{attrs:{id:"kubernetes可识别的网络流量"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes可识别的网络流量"}},[e._v("#")]),e._v(" Kubernetes可识别的网络流量")]),e._v(" "),i("p",[e._v("让我们特别考虑一下网络，以及Kubernetes对网络的感知能力。当我们在Kubernetes运行pod时，每个pod都有一个唯一的IP地址。pod的生命周期非常短暂，可以动态的创建销毁，根据需求动态缩放pod是很常见的。每次创建pod时，都要给它分配一个IP地址，这意味着IP地址的生命周期也是短暂的。传统上，我们会监控网络流量，看到它们从一个IP地址流向另一个IP地址，这是很有用的。但在Kubernetes的世界里，这会很难处理，因为这些pod的地址一直在变化。")]),e._v(" "),i("p",[e._v("下面我想快速演示一下Cilium是如何跟踪endpoint的。每次创建pod时，Kubernetes都会向网络插件请求一个IP地址。我们把Kubernetes集群里的所有pod都显示出来，有许多不同的应用pod，网络是通过Cilium建立的。")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/9utHkjMdE0X9icyRvZ7moKJcQzoQfZNoRwFJeUwG5jgYeug2uJ1a5T6Ofias1fJdAic4HtSNkVkT7t7oIk0TFhoXg/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),i("p",[e._v("这个集群有两个node，每个node上都有一个Cilium代理。Cilium代理负责获取每个pod在节点上创建时的IP地址。如果访问其中一个pod (hqk94)，可以获取该代理知道的endpoint列表，可以看到标签信息和endpoint信息。")]),e._v(" "),i("p",[i("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),i("p",[i("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),i("p",[e._v("对于每个endpoint，我们都知道与之相关的Kubernetes标签、命名空间，知道它在哪个服务帐户下运行。对于代理知道的每个endpoint，可以将IP地址与pod和在该pod中运行的应用程序关联起来。把这些信息放在一起，就可以提取出与这些应用程序相关的网络信息。这是Cilium用户界面的截图，显示了不同服务之间的流量。因为有IP地址和pod之间的映射，所以它知道每个消息涉及哪个pod。")]),e._v(" "),i("p",[i("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),i("p",[e._v("这是监控Kubernetes网络流量的一种非常强大的方法。这种方式之所以可能，是因为包括Cilium在内的eBPF应用程序可以知道整个节点上发生的所有事情。需要注意，eBPF可以看到在其他pod中运行的所有应用程序，而无需更改这些应用程序。这不涉及任何指令，不需要更改应用程序配置，eBPF代码可以自动识别它们。")]),e._v(" "),i("h1",{attrs:{id:"sidecar模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sidecar模式"}},[e._v("#")]),e._v(" Sidecar模式")]),e._v(" "),i("p",[i("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),i("p",[e._v("Nathan LeClaire最近在Twitter上发了这个非常棒的保险杠贴纸原型，我认为它很好的包装了使用eBPF的可观察性和安全工具的强大能力（到目前为止，通常被实现为sidecar模型）。在sidecar模型中，可观察性或安全工具作为sidercar容器注入到每个pod中。sidecar也是一个容器，pod中的所有容器都可以共享网络命名空间和卷信息等内容，所以sidecar可以看到pod中其他容器中发生的事情。为了在pod里部署sidecar，必须在YAML中进行配置。这项操作可能是手动的，也可能是自动的。你可以将sidecar定义注入应用程序YAML，从而实现自动化部署。它可以在部署之前定义，或者是通过接入控制webhook动态完成。无论如何，sidecar模式要求将sidecar容器注入到每个pod中。如果sidecar没有得到正确的配置，就无法在pod中运行。这是sidecar脆弱的一点，如果恶意用户设法运行了一个pod，并避免了sidecar的注入，那就无法看到该pod中发生了什么。")]),e._v(" "),i("p",[i("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),i("p",[e._v("eBPF的真正好处之一是我们不需要做任何更改，就可以让程序在内核中运行，知道所有的容器和pod中发生的所有事情，不需要在任何地方修改任何YAML，也不需要在应用程序中添加任何工具。这就是为什么有许多新项目基于eBPF以及这种技术令人兴奋的原因之一，使用eBPF来实现可观察性和安全性工具，当然还有孕育了这种技术的网络场景。")]),e._v(" "),i("p",[i("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),i("h1",{attrs:{id:"-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[e._v("#")])]),e._v(" "),i("h1",{attrs:{id:"云原生中的ebpf"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#云原生中的ebpf"}},[e._v("#")]),e._v(" 云原生中的eBPF")]),e._v(" "),i("p",[e._v("接下来我们快速浏览一下云原生环境中的一些eBPF项目。我已经讲了一些关于Cilium的内容，它是基于eBPF的网络。实际上，我们可以使用eBPF使网络中的某些部分更加高效。Falco是CNCF酝酿的一个安全工具项目，用来监视安全事件，并在这些事件发生时发出警报。Tracee是另一个类似Falco的项目，但可能更容易安装和配置。比Falco更轻量，但也更不成熟。最后是Pixie，这是一个新产品，最近被New Relic收购后提出将其贡献给CNCF沙箱。Cilium的孵化申请也在进行中。所有这些项目都在利用eBPF在云原生上做一些非常有趣和强大的事情。")]),e._v(" "),i("p",[i("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),i("h1",{attrs:{id:"进程可视化"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#进程可视化"}},[e._v("#")]),e._v(" 进程可视化")]),e._v(" "),i("p",[e._v("我想展示一些我们在Cilium中进行的实验，结合了之前展示的两个概念。在Hello World演示中，可以看到进程ID和调用进程的名称。eBPF可以访问有关进程和在这些进程中运行的程序的信息，也有关于Cilium的网络流量的信息。如果我们将这两种类型的信息结合在一起，就会得到这样的信息：我们可以确切的看到哪个进程、在哪个节点上、在哪个pod中、在哪个命名空间、正在运行什么可执行文件、在处理哪个特定的网络连接。")]),e._v(" "),i("p",[i("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),i("p",[e._v("在这个例子中，有Twitter和Elasticsearch的网络连接，这看起来完全合理。假设还存在与加密货币矿机的连接，或某个恶意应用程序的已知命令和控制中心。有了这些信息，就能够准确的追踪到哪个可执行文件负责打开该连接，以及是从哪个pod打开的。这将给你提供所有可能需要的证据来追溯漏洞是在哪里发生的或者攻击是如何发生的。")]),e._v(" "),i("h1",{attrs:{id:"总结"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),i("p",[e._v("希望这能让你对eBPF的强大功能有所了解。eBPF不是魔法，需要我们编写代码。为了有效的访问信息，其中一些代码将需要大量的内核数据结构知识。编写eBPF代码不是一件容易的事，但它确实提供了非常强大的好处。到目前为止，我已经讨论了如何使Linux内核可编程。但eBPF不仅限于Linux，微软最近宣布了Windows上的eBPF，采用相同的概念和相同的通用抽象，但不会是一模一样的。你没法将一个在Linux上运行的eBPF应用程序直接在Windows上运行，因为它们在内核中查看的数据结构并不相同，只是尽量保持概念的一致。不仅仅适用于Linux，我认为这是eBPF生态系统真正令人兴奋的事情。")]),e._v(" "),i("h1",{attrs:{id:"资源"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#资源"}},[e._v("#")]),e._v(" 资源")]),e._v(" "),i("p",[e._v("希望上面的介绍能让你了解为什么我对eBPF如此兴奋。如果你想了解更多，在eBPF网站[2]上有一些很棒的资源。当然，如果你想了解更多关于Cilium网络的知识，可以访问Cilium[3]和Isovalent[4]的官网。Slack上还有一个非常有用的关于Cilium和eBPF的频道。")]),e._v(" "),i("h1",{attrs:{id:"q-a"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[e._v("#")]),e._v(" Q&A")]),e._v(" "),i("blockquote",[i("p",[e._v("Ruckle：我在云原生领域工作已经有一段时间了。Linux内核并不总是能让人想到创新的地方。正如你所描述的，有许多非常聪明的工程师试图找到提高内核可编程性的方法，并最终打开了巨大的可能性。从你最后描述的使用这种技术的开源项目和事物的成熟度来看，这种技术可能会比人们想象的更快的进入Kubernetes生产集群。eBPF进展如何？我知道Netflix最近有一篇关于他们如何使用它的博客文章。你怎么看我们现在的状况？这是创新者的事情吗？还是已经进入早期使用者阶段了？你认为这项技术在成熟度范围内属于哪个位置？")]),e._v(" "),i("p",[e._v("Rice：由于Linux内核支持的成熟，对于eBPF来说，这是一个非常有趣和令人兴奋的时刻。当某些东西第一次进入Linux内核时，一切都很好，只是没人用它。实际上，人们倾向于使用已经发布几年的内核。内核需要一段时间才能进入所有不同的Linux发行版。如果你运行的是Red Hat Linux，或者是长期支持的Ubuntu发行版，那么它可能使用的是几个月前，甚至是一两年前的内核。现在，eBPF的支持在内核中已经存在了很长时间，已经相当成熟了，大多数人在生产环境中使用的内核都具有运行eBPF的能力。这就意味着我们突然从一个有趣的实验变成了一个潜在的框架。平台实际上存在于每个人的生产环境中，对于基于eBPF的工具来说，当前是一个非常好的时机。")]),e._v(" "),i("p",[e._v("其中一些工具已经存在一段时间了。你提到的Netflix，来自Netflix的Brendan Gregg是eBPF领域的真正创新者之一。多年来，他一直在谈论、展示和使用eBPF，特别是在性能测量和调优方面。Netflix已经在生产环境中用了很长时间了。Facebook也参与了eBPF的创新，并且一直在使用并公开谈论他们已经使用了很长时间的一些事情。如果我们考虑采用曲线（在CNCF中被称为跨越鸿沟曲线），我们很喜欢把不同项目的成熟度阶段映射到这条曲线上。也许沙盒是为创新者准备的，孵化是为早期采用者准备的，毕业是为早期的大多数准备的。现在我们开始看到处于孵化阶段的eBPF项目。事实上，如果你现在正在使用这些工具，其实你并没有完全处于前沿位置。希望这能够说明关于成熟度的问题。")])]),e._v(" "),i("blockquote",[i("p",[e._v("Ruckle：我认为你说得很有道理，比如Netflix和Facebook，所有这些和云有关的变化，都倾向于从符合这种类型的公司开始。如果这些公司在生产环境上自信的使用这种技术，这可能意味着成熟度和工具开始发挥作用，其他类型的工程组织也会开始利用这种技术。")]),e._v(" "),i("p",[e._v("然后，如果你有一个水晶球，你认为eBPF在五年内会如何发展？你对这项技术的目标和期望是什么？我知道你在几个月前将eBPF和Docker进行了比较，思考它如何真正改变了一些事情。如果可以的话，请告诉我们你对未来五年的看法。")]),e._v(" "),i("p",[e._v('Rice：即使是最谨慎的估计，我也认为我们将看到基于eBPF的工具被非常广泛的采用，正如我试图传达的那样，它们不需要以任何方式修改应用程序，甚至不需要改变应用的配置方式，更不用说添加任何工具了。我认为这使得它在所有这些可观察性工具中非常强大，我们在基于微服务的环境中更需要这些工具，需要大规模的工具。在我看来，我们很可能看到这些工具逐渐成熟并被广泛采用。我们最终会看到eBPF被大规模的用于许多基于网络的功能。例如，Facebook和Cloudflare，都发表过关于他们如何使用eBPF来帮助解决拒绝服务攻击等问题。如果使用eBPF，可以在一个数据包实际出现在你的机器上的时候，很早就把它钩住，实际上，当它还在网卡中的时候，如果你能看到这个数据包并说"我不喜欢这个样子。这是恶意的"，然后就可以直接丢弃。对于某些类型的攻击，这是一个非常强大的保护机制。')]),e._v(" "),i("p",[e._v("另一方面，我们会在五年内看到什么？我们会看到很多内核功能在eBPF中被重写吗？我们是否可以看到内核的一些特性被更高效或更可定制的eBPF实现所取代？这是我们开始看到的一些东西。例如，在网络数据路径中，如果有一个确切知道往哪里发送网络数据包的eBPF程序，那就不必遍历整个IP协议栈以及内核中的所有IP表。我不认为我们会用eBPF取代整个Linux内核，但我们可能会看到内核的很多领域都有这些替代实现。看到这些发展将会非常有趣。")]),e._v(" "),i("p",[e._v("最后，我对eBPF在Windows上所发生的事情感到兴奋。如果我们有可以跨操作系统使用的eBPF功能，会发生什么？这可能是非常强大和有趣的。")])]),e._v(" "),i("blockquote",[i("p",[e._v("Ruckle：我认为这个问题的答案总是视情况而定。我很欣赏你对不同情况分别进行了谨慎、乐观的分析。从成本优化，弹性以及其他方面，都可以从eBPF中得到很多好处，因此似乎不可避免会在接下来的几年里在所有场景中扮演某种角色。那么几个监听相同事件的eBPF程序是否会相互冲突？")]),e._v(" "),i("p",[e._v("Rice：在某些情况下，不可能，因为根据正在运行的程序的类型，可能只能观察信息，不一定能改变状态。例如，如果你连接到一个系统调用，可以看到该系统调用的参数，但不能更改它们。从这个意义上说，不同程序中哪个最先出现并不重要，他们不应该互相影响。如果你正在处理网络数据包，并且可能会将它们丢弃，这显然会产生影响，你肯定需要能够对它们进行优先级排序，我不太确定怎么决定顺序。")])]),e._v(" "),i("blockquote",[i("p",[e._v("Ruckle：我们可以说eBPF是服务网格的进化吗？")]),e._v(" "),i("p",[e._v("Rice：我不能说它本身就是服务网格的进化。我确实认为有一些有趣的东西，一些服务网格的功能可以在eBPF中实现，其中一个例子就是加密。你可以用服务网格在这两个服务之间设置mTLS，确保不同服务之间的流量是加密的。通过使用网络层加密可以获得相同的效果，Cilium支持这一功能，我相信其他的网络层也一样。如果你能感知服务，知道两端都可以加密和解密，就可以使用IPsec或WireGuard之类的东西在网络层加密，尽管并不完全相同，但都可以实现加密通信的目的。还有一些与服务网格相关的其他功能，也可以在eBPF中实现。我想说的是，将eBPF更多的看作是一个可以构建工具的环境，而不是工具本身。我不会说它是服务网格，但它使你能够构建服务网格功能。")])]),e._v(" "),i("blockquote",[i("p",[e._v("Ruckle：我认为看看社区如何利用这一点，以及其他一些服务网格社区如何开始使用eBPF，如何聚合，随着时间的推移有一些真正有趣的eBPF应用，这将是一件很酷的事情。\nRice：完全正确。")])]),e._v(" "),i("blockquote",[i("p",[e._v("Ruckle：除了网络、安全性和可观察性，我们还看到eBPF可以用在哪些场景？\nRice：还有什么？\nRuckle：研发，研发人员会在这方面乱作一团。\nRice：我不认为会看到用户空间应用程序进入内核领域。也许我错了，但我倾向于认为，我们更有可能看到在eBPF中实现内核中现有的功能。我在想，一定还有其他一些有趣的方面，并不是网络、安全性和可观察性的一部分。网络、安全性和可观察性涵盖了相当多的内容。")])]),e._v(" "),i("blockquote",[i("p",[e._v("Ruckle：内核的范围很大，都可以考虑可编程性。其中有大量的技术，以及可能被技术改进或颠覆的东西。让我们继续关注，看看社区会出现什么。")]),e._v(" "),i("p",[e._v("您认为用C编写eBPF代码的抽象层对新程序员有帮助吗？这方面有什么想法或动力吗？")]),e._v(" "),i("p",[e._v("Rice：现在，我们用一个受限的C版本编写eBPF程序。虽然是C代码，但有些事情是不被允许的。比如，在解引用指针之前，必须检查指针是否为空，因为不想让内核崩溃。现在，我们还是用C写这些代码。我在这里展示了一个Hello World，我认为它很有趣，可以解释正在发生的事情。我真的不认为会有一个应用程序开发人员突然编写大量eBPF代码的世界，就像我不认为会看到人们对内核做出贡献一样。大多数时候，我们依靠内核维护者来代表我们完成这些工作。我想对于eBPF来说也是一样的，我们可能会看到一些eBPF功能库，人们可以将其用作构建块。")]),e._v(" "),i("p",[e._v("我们已经有了一个抽象，即bpftrace，这是一种更高级别的工具，允许你表示希望在何处挂钩eBPF程序，还提供了一些基本功能，如事件计数。最近发生的另一件事是Rust编译器，它合并了一个PR来支持BPF作为编译目标，这样就可以在Rust中编写eBPF代码，将其编译并加载到内核中。这将是一个有趣的尝试。")])]),e._v(" "),i("blockquote",[i("p",[e._v("Ruckle：有没有号召所有人采取行动？他们应该用eBPF做什么？跟他们信任的供应商谈一谈？对社区做出贡献？在你分享了这些信息后，你会建议人们做什么？")]),e._v(" "),i("p",[e._v("Rice：我认为，从运维角度来看，eBPF是一种新的平台技术，一种新的做事方式，对大多数Kubernetes集群的运维人员来说可能非常有用。我100%鼓励有兴趣的人参与进来，尝试一下，看看eBPF初学者指南。对大多数人来说，我们不需要真正深入细节。也许一个新的可观察性工具是用Rust编写的，或者一个新的安全工具是用Rust编写的，我们可能会想，“这真是一种很酷的语言。我对这个工具感兴趣是因为它是用Rust编写的”，因为也许我们意识到Rust具有安全优势。我只是以Rust为例。我想我们可能会以同样的方式对待eBPF，eBPF作为一个平台有一些优势，当我们考虑在环境中需要什么工具时，不要因为它不是用eBPF编写的而忽略任何东西。就像你不会说我使用的每个工具都必须用Rust编写一样。你可能会说，我想研究一些基于eBPF的工具，因为它们提供了一些优势。我们可以一起来探索。")])]),e._v(" "),i("blockquote",[i("p",[e._v("References:\n[1] https://www.infoq.com/presentations/ebpf-cloud-native/\n[2] https://ebpf.io/\n[3] https://cilium.io/\n[4] https://www.isovalent.com/")])]),e._v(" "),i("blockquote",[i("p",[e._v("你好，我是俞凡，在Motorola做过研发，现在在Mavenir做技术工作，对通信、网络、后端架构、云原生、DevOps、CICD、区块链、AI等技术始终保持着浓厚的兴趣，平时喜欢阅读、思考，相信持续学习、终身成长，欢迎一起交流学习。\n微信公众号：DeepNoMind")])]),e._v(" "),i("p",[e._v("收录于话题 #网络")]),e._v(" "),i("p",[e._v("14个")]),e._v(" "),i("p",[e._v("下一篇写给互联网工程师的5G书 | 1. 简介")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU2MTgxODgwNA==&mid=2247484278&idx=1&sn=bfd42714e0814dc6ff1716347c7a637c&chksm=fc73beadcb0437bb24081dcbef101bac814e0c73d783a12bf3b5b31ba327cbf9076bc589956a&token=232224079&lang=zh_CN##",target:"_blank",rel:"noopener noreferrer"}},[e._v("阅读原文"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("喜欢此内容的人还喜欢")]),e._v(" "),i("p",[e._v("SpringCloud Alibaba：理论+实践通关微服务灵魂摆渡者—Nacos")]),e._v(" "),i("p",[e._v("螺旋编程极客")]),e._v(" "),i("p",[e._v("不喜欢")]),e._v(" "),i("p",[e._v("不看的原因")]),e._v(" "),i("p",[e._v("确定")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("内容质量低")])]),e._v(" "),i("li"),e._v(" "),i("li",[i("p",[e._v("不看此公众号")])])]),e._v(" "),i("p",[e._v("MongoDB自动化运维")]),e._v(" "),i("p",[e._v("DatabaseBlog")]),e._v(" "),i("p",[e._v("不喜欢")]),e._v(" "),i("p",[e._v("不看的原因")]),e._v(" "),i("p",[e._v("确定")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("内容质量低")])]),e._v(" "),i("li"),e._v(" "),i("li",[i("p",[e._v("不看此公众号")])])]),e._v(" "),i("p",[i("img",{attrs:{src:"https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzU2MTgxODgwNA==&mid=2247484278&idx=1&sn=bfd42714e0814dc6ff1716347c7a637c&send_time=",alt:"img"}})]),e._v(" "),i("p",[e._v("微信扫一扫\n关注该公众号")]),e._v(" "),i("p",[e._v("：，。视频小程序赞，轻点两下取消赞在看，轻点两下取消在看")])])}),[],!1,null,null,null);t.default=A.exports}}]);