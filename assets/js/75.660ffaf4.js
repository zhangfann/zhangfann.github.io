(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{470:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"iptables-netfilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iptables-netfilter"}},[t._v("#")]),t._v(" iptables & netfilter")]),t._v(" "),a("h2",{attrs:{id:"_1、简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、简介"}},[t._v("#")]),t._v(" 1、简介")]),t._v(" "),a("p",[t._v("netfilter/iptables（下文中简称为 iptables）组成 Linux 内核下的包过滤防火墙，完成封包过滤、封包重定向和网络地址转换（NAT）等功能。]")]),t._v(" "),a("p",[t._v("iptabels 其实不是真正的防火墙, netfilter 才是防火墙真正的安全框架（framework），netfilter 位于内核空间。iptables 其实是一个命令行工具，位于用户空间，我们用这个工具操作真正的框架。")]),t._v(" "),a("p",[t._v("Netfilter 是 Linux 操作系统核心层内部的一个数据包处理模块，它具有如下功能：")]),t._v(" "),a("ul",[a("li",[t._v("网络地址转换 (Network Address Translate)")]),t._v(" "),a("li",[t._v("数据包内容修改")]),t._v(" "),a("li",[t._v("数据包过滤的防火墙功能")])]),t._v(" "),a("h2",{attrs:{id:"_2、iptables-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、iptables-基础"}},[t._v("#")]),t._v(" 2、iptables 基础")]),t._v(" "),a("p",[t._v("iptatble 是按规则来办事的，当数据包与规则匹配时，iptables 就根据规则所定义的方法来处理这些数据包，如放行（accept）、拒绝（reject）和丢弃（drop）等。配置防火墙的主要工作就是添加、修改和删除这些规则。")]),t._v(" "),a("p",[t._v("netfilter 才是真正的防火墙，它是内核的一部分，所以，如果我们想要防火墙能够达到” 防火” 的目的，则需要在内核中设置关卡，所有进出的报文都要通过这些关卡，经过检查后，符合放行条件的才能放行，符合阻拦条件的则需要被阻止，于是，就出现了 input 关卡和 output 关卡，而这些关卡在 iptables 中不被称为” 关卡”, 而被称为” 链”。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2.tuicool.com/UB3Mzqj.jpg!web",alt:"img"}})]),t._v(" "),a("p",[t._v("iptatbles 中不仅有 "),a("code",[t._v("input")]),t._v(" 、 "),a("code",[t._v("output")]),t._v(" 关卡，还有 "),a("code",[t._v("prerouting")]),t._v(" 、 "),a("code",[t._v("forward")]),t._v(" 、 "),a("code",[t._v("postrouting")]),t._v(" ，当我们启用了防火墙功能时，报文需要经过如下关卡，也就是说，根据实际情况的不同，报文经过” 链” 可能不同。如果报文需要转发，那么报文则不会经过 input 链发往用户空间，而是直接在内核空间中经过 forward 链和 postrouting 链转发出去的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2.tuicool.com/EvqUFru.jpg!web",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"_2-1、链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、链"}},[t._v("#")]),t._v(" 2.1、链")]),t._v(" "),a("p",[t._v("防火墙的作用就在于对经过的报文匹配” 规则”，然后执行对应的” 动作”, 所以，当报文经过这些关卡的时候，则必须匹配这个关卡上的规则，但是，这个关卡上可能不止有一条规则，而是有很多条规则，当我们把这些规则串到一个链条上的时候，就形成了” 链”。")]),t._v(" "),a("p",[t._v("这样来说，把他们称为” 链” 更为合适，每个经过这个” 关卡” 的报文，都要将这条” 链” 上的所有规则匹配一遍，如果有符合条件的规则，则执行规则对应的动作。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2.tuicool.com/M7V3uaZ.jpg!web",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"_2-2、表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、表"}},[t._v("#")]),t._v(" 2.2、表")]),t._v(" "),a("p",[t._v("具有相同功能规则的集合叫做 “表”，iptables 定义来 4 种表，每种表对应了不同的功能，即我们定义的规则都逃脱不了这 4 种功能的范围。")]),t._v(" "),a("ul",[a("li",[t._v("filter 表：过滤功能，防火墙；内核模块：iptable_filter")]),t._v(" "),a("li",[t._v("nat 表：网络地址转换功能；内核模块：iptable_nat")]),t._v(" "),a("li",[t._v("mangle 表：拆解报文，修改，并重新封装功能；内核模块：iptable_mangle")]),t._v(" "),a("li",[t._v("raw 表：关闭 nat 表上启用的连接追踪机制；内核模块：iptatble_raw")])]),t._v(" "),a("p",[t._v("需要注意的是，某些 “链” 注定 不会包含“某类规则”，表链的对应关系如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img0.tuicool.com/A7Z36jN.png!web",alt:"img"}})]),t._v(" "),a("p",[t._v("综合上面描述，数据包经过防火墙的流程总结为下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img0.tuicool.com/zuIjamZ.jpg!web",alt:"img"}})]),t._v(" "),a("p",[t._v("如果想要 linux 主机支持转发，则需要开启内核的 IP_FORWARD 功能，可以临时修改对应文件 / proc/sys/net/ipv4/ip_forward。")]),t._v(" "),a("p",[t._v("在写 Iptables 规则的时候，要时刻牢记这张路由次序图，灵活配置规则。")]),t._v(" "),a("h3",{attrs:{id:"_2-3、规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、规则"}},[t._v("#")]),t._v(" 2.3、规则")]),t._v(" "),a("p",[t._v("根据指定的匹配条件来尝试匹配每个流经此处的报文，一旦匹配成功，则由规则后面指定的处理动作进行处理。")]),t._v(" "),a("p",[t._v("匹配条件分为")]),t._v(" "),a("p",[t._v("基本匹配条件：源 IP、目的 IP 等")]),t._v(" "),a("p",[t._v("扩展匹配条件：源端口、目的端口等")]),t._v(" "),a("p",[t._v("处理动作（在 iptatbles 中被称为 target）：")]),t._v(" "),a("ul",[a("li",[t._v("ACCEPT：允许数据包通过")]),t._v(" "),a("li",[t._v("DROP：丢弃数据包，不给任何回应信息")]),t._v(" "),a("li",[t._v("REJECT：拒绝数据包通过，必要时发送一个响应信息")]),t._v(" "),a("li",[t._v("SNAT：源地址转换，解决内网用户用同一个公网地址上网的问题")]),t._v(" "),a("li",[t._v("MASOUERADE：SNAT 的一种特殊形式，适用于动态的、临时会变的 ip 上")]),t._v(" "),a("li",[t._v("DNAT：目的地址转换")]),t._v(" "),a("li",[t._v("REDIRECT：在本机做端口映射")]),t._v(" "),a("li",[t._v("LOG：在 / var/log/messages 文件中记录日志信息，然后将数据包传递给下一条规则。")])]),t._v(" "),a("h2",{attrs:{id:"_3、使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用"}},[t._v("#")]),t._v(" 3、使用")]),t._v(" "),a("h3",{attrs:{id:"_3-1、规则查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、规则查询"}},[t._v("#")]),t._v(" 3.1、规则查询")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#查看对应表所有规则,省略表名默认为filter表\niptables -t 表名 -L\n\n#指定链的规则,-v：详细信息 -n：直接显示IP地址 --line-numbers：显示规则序号 -x：显示计数器的精确值 \niptables --line-numbers -t 表名 -nvxL 链名\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3-2、规则管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、规则管理"}},[t._v("#")]),t._v(" 3.2、规则管理")]),t._v(" "),a("p",[t._v("添加规则")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("命令语法：iptables -t 表名 -A 链名 匹配条件 -j 动作\n示例：iptables -t filter -A INPUT -s 192.168.1.146 -j DROP\n\n-I：在对应链开头添加规则\n-A：在末尾添加规则\n\n\n规则是按照顺序执行的,添加时候可以指定规则序号,这样就可以在任意位置插入规则了.\n\n命令语法：iptables -t 表名 -I 链名 规则序号 匹配条件 -j 动作\n示例：iptables -t filter -I INPUT 5 -s 192.168.1.146 -j REJECT\n\n---设置默认动作---\n命令语法：iptables -t 表名 -P 链名 动作\n示例：iptables -t filter -P FORWARD ACCEPT\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("删除规则")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("命令语法：iptables -t 表名 -D 链名 规则序号\n示例：iptables -t filter -D INPUT 3\n\n---按照具体匹配条件与动作删除规则--\n命令语法：iptables -t 表名 -D 链名 匹配条件 -j 动作\n示例：iptables -t filter -D INPUT -s 192.168.1.146 -j DROP\n-F：清空对应链的规则，如果省略链名表示删除表中所有规则\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("修改规则")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---规则原本的匹配条件不可省略!如果省略,源地址会变成0.0.0.0/0,此时如果是拒绝动作,那么ssh就断掉了---\n命令语法：iptables -t 表名 -R 链名 规则序号 规则原本的匹配条件 -j 动作\n示例：iptables -t filter -R INPUT 3 -s 192.168.1.146 -j ACCEPT\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("保存规则")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---保存在/etc/sysconfig/iptables文件中\nservice iptables save 或\niptables-save > /etc/sysconfig/iptables\n\n---从文件中重新载入规则\niptatbles-restore < /etc/sysconfig/iptables\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"_3-3、基本匹配条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、基本匹配条件"}},[t._v("#")]),t._v(" 3.3、基本匹配条件")]),t._v(" "),a("p",[t._v("当规则中同时存在多个匹配条件时, 多个条件之间默认存在 “与” 的关系.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("-s: 指定源 ip, 多个 ip 用逗号隔开, 也可以指定一个网段")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("iptables -t filter -I INPUT -s 192.168.1.111,192.168.1.118 -j DROP\niptables -t filter -I INPUT -s 192.168.1.0/24 -j ACCEPT\niptables -t filter -I INPUT ! -s 192.168.1.0/24 -j ACCEPT\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("-d: 匹配目标地址, 用法和 - s 一样")])]),t._v(" "),a("li",[a("p",[t._v("-p: 匹配报文协议类型, 可以匹配的协议类型 tcp、udp、udplite、icmp、esp、ah、sctp 等")])]),t._v(" "),a("li",[a("p",[t._v("-i: 匹配报文从哪个网卡接口流入本机, 由于匹配条件只是用于匹配报文流入的网卡，所以在 OUTPUT 链与 POSTROUTING 链中不能使用此选项")])]),t._v(" "),a("li",[a("p",[t._v("-o: 匹配报文从哪个网卡接口流出本机")])])]),t._v(" "),a("h3",{attrs:{id:"_3-3、扩展匹配条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、扩展匹配条件"}},[t._v("#")]),t._v(" 3.3、扩展匹配条件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("tcp 扩展模块")]),t._v(" "),a("p",[t._v("常用的扩展匹配条件如下：")]),t._v(" "),a("p",[t._v("-p tcp -m tcp –-sport 用于匹配 tcp 协议报文的源端口，可以使用冒号指定一个连续的端口范围")]),t._v(" "),a("p",[t._v("-p tcp -m tcp –-dport 用于匹配 tcp 协议报文的目标端口，可以使用冒号指定一个连续的端口范围")]),t._v(" "),a("p",[t._v("--tc-flages 用于匹配 tcp 头部字段标志位, 第一部分为需要匹配哪些标志位, 第二部分为哪些标志位为 1")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("iptables -t filter -I INPUT -p tcp -m tcp --dport 22 --tcp-flags SYN,ACK,FIN,RST,URG,PSH SYN -j REJECT\niptables -t filter -I INPUT -p tcp -m tcp --dport 22 --tcp-flags SYN,ACK,FIN,RST,URG,PSH SYN -j REJECT\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("--syn 相当于使用”–tcp-flags SYN,RST,ACK,FIN SYN")])]),t._v(" "),a("li",[a("p",[t._v("udp 模块")]),t._v(" "),a("p",[t._v("当使用扩展匹配条件时，如果未指定扩展模块，iptables 会默认调用与”-p” 对应的协议名称相同的模块，所以，当使用”-p udp” 时，可以省略”-m udp”.udp 只有 sport 和 dport 两个匹配条件")])]),t._v(" "),a("li",[a("p",[t._v("mutiport 扩展模块")]),t._v(" "),a("p",[t._v("常用的扩展匹配条件如下：")]),t._v(" "),a("p",[t._v("-p tcp -m multiport –-sports 用于匹配报文的源端口，可以指定离散的多个端口号, 端口之间用” 逗号” 隔开")]),t._v(" "),a("p",[t._v("-p udp -m multiport –-dports 用于匹配报文的目标端口，可以指定离散的多个端口号，端口之间用” 逗号” 隔开")])]),t._v(" "),a("li",[a("p",[t._v("iprange 模块")]),t._v(" "),a("p",[t._v("包含的扩展匹配条件如下")]),t._v(" "),a("p",[t._v("-m iprange –-src-range：指定连续的源地址范围, 用 "),a("code",[t._v("-")]),t._v(" 指定一个连续的范围")]),t._v(" "),a("p",[t._v("-m iprange -–dst-range：指定连续的目标地址范围")])]),t._v(" "),a("li",[a("p",[t._v("string 模块")]),t._v(" "),a("p",[t._v("使用 string 扩展模块，可以指定要匹配的字符串，如果报文中包含对应的字符串，则符合匹配条件, 常用扩展匹配条件如下")]),t._v(" "),a("p",[t._v("–-algo：指定对应的匹配算法，可用算法为 bm、kmp，此选项为必需选项。")]),t._v(" "),a("p",[t._v("–-string：指定需要匹配的字符串")])]),t._v(" "),a("li",[a("p",[t._v("time 模块")]),t._v(" "),a("p",[t._v("常用扩展匹配条件如下")]),t._v(" "),a("p",[t._v("–-timestart：用于指定时间范围的开始时间，不可取反")]),t._v(" "),a("p",[t._v("–-timestop：用于指定时间范围的结束时间，不可取反")]),t._v(" "),a("p",[t._v("–-weekdays：用于指定” 星期几”，可取反")]),t._v(" "),a("p",[t._v("–-monthdays：用于指定” 几号”，可取反")]),t._v(" "),a("p",[t._v("–-datestart：用于指定日期范围的开始日期，不可取反")]),t._v(" "),a("p",[t._v("–-datestop：用于指定日期范围的结束时间，不可取反")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("iptables -t filter -I OUTPUT -p tcp --dport 80 -m time --timestart 09:00:00 --timestop 19:00:00 -j REJECT\niptables -t filter -I OUTPUT -p tcp --dport 80  -m time --weekdays 6,7 -j REJECT\niptables -t filter -I OUTPUT -p tcp --dport 80  -m time --monthdays 22,23 -j REJECT\niptables -t filter -I OUTPUT -p tcp --dport 80  -m time --weekdays 5 --monthdays 22,23,24,25,26,27,28 -j REJECT\niptables -t filter -I OUTPUT -p tcp --dport 80  -m time --datestart 2017-12-24 --datestop 2017-12-27 -j REJECT\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("connlimit 模块")]),t._v(" "),a("p",[t._v("使用 connlimit 扩展模块，可以限制每个 IP 地址同时链接到 server 端的链接数量，注意：我们不用指定 IP，其默认就是针对” 每个客户端 IP”，即对单 IP 的并发连接数限制")]),t._v(" "),a("p",[t._v("–-connlimit-above：单独使用此选项时，表示限制每个 IP 的链接数量。")]),t._v(" "),a("p",[t._v("–-connlimit-mask：此选项不能单独使用，在使用–connlimit-above 选项时，配合此选项，则可以针对” 某类 IP 段内的一定数量的 IP” 进行连接数量的限制")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("iptables -I INPUT -p tcp --dport 22 -m connlimit --connlimit-above 2 -j REJECT\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("limit 模块")]),t._v(" "),a("p",[t._v("如果我想要限制单位时间内流入的包的数量，就能用 limit 模块, 我们可以以秒为单位进行限制，也可以以分钟、小时、天作为单位进行限制")]),t._v(" "),a("p",[t._v("常用的扩展匹配条件如下")]),t._v(" "),a("p",[t._v("–-limit-burst：类比” 令牌桶” 算法，此选项用于指定令牌桶中令牌的最大数量")]),t._v(" "),a("p",[t._v("–-limit：类比” 令牌桶” 算法，此选项用于指定令牌桶中生成新令牌的频率，可用时间单位有 second、minute 、hour、day。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("iptables -t filter -I INPUT -p icmp -m limit --limit-burst 3 --limit 10/minute -j ACCEPT\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("icmp 模块")]),t._v(" "),a("p",[t._v("–-icmp-type：匹配 icmp 报文的具体类型, 可以使用 type/code 和 description 两种方式表示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img1.tuicool.com/NZRjIv.jpg!web",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("state 模块")]),t._v(" "),a("p",[t._v("问题: 怎样判断这些报文是为了回应我们之前发出的报文，还是主动向我们发送的报文呢？")]),t._v(" "),a("p",[t._v("state 模块可以让 iptables 实现” 连接追踪” 机制,” 连接” 其中的报文可以分为 5 种状态，报文状态可以为 NEW、ESTABLISHED、RELATED、INVALID、UNTRACKED.")]),t._v(" "),a("p",[t._v("--state")])])]),t._v(" "),a("h3",{attrs:{id:"_3-4、黑白名单机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4、黑白名单机制"}},[t._v("#")]),t._v(" 3.4、黑白名单机制")]),t._v(" "),a("p",[t._v("前文中一直在强调一个概念：报文在经过 iptables 的链时，会匹配链中的规则，遇到匹配的规则时，就执行对应的动作，如果链中的规则都无法匹配到当前报文，则使用链的默认策略（默认动作），链的默认策略通常设置为 ACCEPT 或者 DROP。")]),t._v(" "),a("p",[t._v("所以，当链的默认策略为 ACCEPT 时，链中的规则对应的动作应该为 DROP 或者 REJECT，表示只有匹配到规则的报文才会被拒绝，没有被规则匹配到的报文都会被默认接受，这就是” 黑名单” 机制。")]),t._v(" "),a("p",[t._v("同理，当链的默认策略为 DROP 时，链中的规则对应的动作应该为 ACCEPT，表示只有匹配到规则的报文才会被放行，没有被规则匹配到的报文都会被默认拒绝，这就是” 白名单” 机制。")]),t._v(" "),a("p",[t._v("在对应的链中没有设置任何规则时，这样使用默认策略为 DROP 是非常不明智的，因为管理员也会把自己拒之门外，即使对应的链中存在放行规则，当我们不小心使用”iptables -F” 清空规则时，放行规则被删除，则所有数据包都无法进入，这个时候就相当于给管理员挖了个坑，所以，我们如果想要使用” 白名单” 的机制，最好将链的默认策略保持为”ACCEPT”，然后将” 拒绝所有请求” 这条规则放在链的尾部，将” 放行规则” 放在前面，这样做，既能实现” 白名单” 机制，又能保证在规则被清空时，管理员还有机会连接到主机")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("iptables -P INPUT ACCEPT\niptabels -I INPUT -p tcp --dport 22 -j ACCEPT\niptabels -I INPUT -p tcp --dport 80 -j ACCEPT\niptables -A INPUT -j ACCEPT\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_3-5、自定义链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5、自定义链"}},[t._v("#")]),t._v(" 3.5、自定义链")]),t._v(" "),a("p",[t._v("当默认链中的规则非常多时，不方便我们管理。")]),t._v(" "),a("p",[t._v("想象一下，如果 INPUT 链中存放了 200 条规则，这 200 条规则有针对 httpd 服务的，有针对 sshd 服务的，有针对私网 IP 的，有针对公网 IP 的，假如，我们突然想要修改针对 httpd 服务的相关规则，难道我们还要从头看一遍这 200 条规则，找出哪些规则是针对 httpd 的吗？这显然不合理。")]),t._v(" "),a("p",[t._v("但是需要注意的是，自定义链并不能直接使用，而是需要被默认链引用才能够使用.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("--创建自定义链\niptables -t filter -N IN_WEB\n\n--引用自定义链\niptables -t filter -I INPUT -p tcp --dport 80 -j IN_WEB\n\n--重命名自定义链\niptables -E IN_WEB WEB\n\n--删除自定义链\n删除自定义链需要满足两个条件\n1、自定义链没有被引用\n2、自定义链中没有任何规则\n\niptables -D INPUT 1\niptables -F WEB\niptables -X WEB\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("h3",{attrs:{id:"_3-6、网络防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6、网络防火墙"}},[t._v("#")]),t._v(" 3.6、网络防火墙")]),t._v(" "),a("p",[t._v("防火墙从逻辑上讲，可以分为主机防火墙与网络防火墙。")]),t._v(" "),a("p",[t._v("主机防火墙：针对于单个主机进行防护。")]),t._v(" "),a("p",[t._v("网络防火墙：往往处于网络入口或边缘，针对于网络入口进行防护，服务于防火墙背后的本地局域网。")]),t._v(" "),a("p",[t._v("iptables 都是作为主机防火墙的角色出现的, 如果想要使用 iptables 充当网络防火墙，iptables 所在的主机则需要处于网络入口处, 网络防火墙主要职责就是 “过滤并转发”, 所以规则只能定义在 FORWARD 链中.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img1.tuicool.com/IFBNz2.jpg!web",alt:"img"}})]),t._v(" "),a("p",[t._v("上图中把 C 主机的网关指向 B 主机网卡 1 的 IP,A 主机网关设为 B 网卡 2 的地址.")]),t._v(" "),a("p",[t._v("A ping 10.1.0.1 是 ping 不通的, A 主机通过路由表得知，发往 10.1.0.0/16 网段的报文的网关为 B 主机，当报文达到 B 主机时，B 主机发现 A 的目标为 10.1.0.1，而自己的 IP 是 10.1.0.3，这时，B 主机则需要将这个报文转发给 10.1.0.1（也就是 C 主机），但是，Linux 主机在默认情况下，并不会转发报文，如果想要让 Linux 主机能够转发报文，需要额外的设置，这就是为什么 10.1.0.1 没有回应的原因.")]),t._v(" "),a("p",[t._v("A ping 10.1.0.3 可以 ping 通: 当报文到达 B 时, B 主机发现自己既是 192.168.1.146 又是 10.1.0.3，所以，B 主机就直接回应了 A 主机，并没有将报文转发给谁，所以 A 主机得到了 10.1.0.3 的回应。")]),t._v(" "),a("p",[t._v("临时生效: 把 / proc/sys/net/ipv4/ip_forward 文件内容设置为 1 表示支持转发报文.")]),t._v(" "),a("p",[t._v("永久生效:/etc/sysctl.conf 添加 net.ipv4.ip_forward=1")]),t._v(" "),a("p",[t._v("此时就可以 ping 通了")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#如果想要iptables作为网络防火墙，iptables所在主机开启核心转发功能，以便能够转发报文。\n#使用如下命令查看当前主机是否已经开启了核心转发，0表示为开启，1表示已开启\ncat /proc/sys/net/ipv4/ip_forward\n#使用如下两种方法均可临时开启核心转发，立即生效，但是重启网络配置后会失效。\n方法一：echo 1 > /proc/sys/net/ipv4/ip_forward\n方法二：sysctl -w net.ipv4.ip_forward=1\n#使用如下方法开启核心转发功能，重启网络服务后永久生效。\n配置/etc/sysctl.conf文件（centos7中配置/usr/lib/sysctl.d/00-system.conf文件），在配置文件中将 net.ipv4.ip_forward设置为1\n \n#由于iptables此时的角色为"网络防火墙"，所以需要在filter表中的FORWARD链中设置规则。\n#可以使用"白名单机制"，先添加一条默认拒绝的规则，然后再为需要放行的报文设置规则。\n#配置规则时需要考虑"方向问题"，针对请求报文与回应报文，考虑报文的源地址与目标地址，源端口与目标端口等。\n#示例为允许网络内主机访问网络外主机的web服务与sshd服务。\niptables -A FORWARD -j REJECT\niptables -I FORWARD -s 10.1.0.0/16 -p tcp --dport 80 -j ACCEPT\niptables -I FORWARD -d 10.1.0.0/16 -p tcp --sport 80 -j ACCEPT\niptables -I FORWARD -s 10.1.0.0/16 -p tcp --dport 22 -j ACCEPT\niptables -I FORWARD -d 10.1.0.0/16 -p tcp --sport 22 -j ACCEPT\n \n#可以使用state扩展模块，对上述规则进行优化，使用如下配置可以省略许多"回应报文放行规则"。\niptables -A FORWARD -j REJECT\niptables -I FORWARD -s 10.1.0.0/16 -p tcp --dport 80 -j ACCEPT\niptables -I FORWARD -s 10.1.0.0/16 -p tcp --dport 22 -j ACCEPT\niptables -I FORWARD -m state --state ESTABLISHED,RELATED -j ACCEPT\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("h3",{attrs:{id:"_3-7、动作总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-7、动作总结"}},[t._v("#")]),t._v(" 3.7、动作总结")]),t._v(" "),a("p",[t._v("网关配置和上面一样.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img1.tuicool.com/v6JN7zy.jpg!web",alt:"img"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("SNAT(服务在外网, 内网主动访问外网)")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#主机B\niptables -t nat -A POSTROUTING -s 10.1.0.0/16 -j SNAT --to-source 192.168.1.146\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("此时内网主机 ping A 主机就能 ping 通, iptables 会自动维护 NAT 表, 并将响应报文的目标地址转换回来.")])]),t._v(" "),a("li",[a("p",[t._v("DNAT(服务在内网, 外网主动访问内网)")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#主机B\niptables -t nat -F\niptables -t nat -I PREROUTING -d 192.168.1.146 -p tcp --dport 3389 -j DNAT --to-destination 10.1.0.6:3389\niptables -t nat -A POSTROUTING -s 10.1.0.0/16 -j SNAT --to-source 192.168.1.146\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("表示报文目标地址为 B 公网 IP, 目标端口为 3389 的报文符合匹配条件, 做 DNAT 转换映射到 10.1.0.6:3389 上.")]),t._v(" "),a("p",[t._v("注：理论上只配置 DNAT 规则即可，但是如果在测试时无法正常 DNAT，可以尝试配置对应的 SNAT，此处按照配置 SNAT 的流程进行。")])]),t._v(" "),a("li",[a("p",[t._v("MASQUERADE")]),t._v(" "),a("p",[t._v("MASQUERADE 会动态的将源地址转换为可用的 IP 地址，其实与 SNAT 实现的功能完全一致，都是修改源地址，只不过 SNAT 需要指明将报文的源地址改为哪个 IP，而 MASQUERADE 则不用指定明确的 IP，会动态的将报文的源地址修改为指定网卡上可用的 IP 地址.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("iptables -t nat -I POSTROUTING -s 10.1.0.0/16 -o eth0 -j MASQUERADE\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("表示通过外网网卡出去的报文在经过 POSTROUTING 链时，会自动将报文的源地址修改为外网网卡上可用的 IP 地址，这时，即使外网网卡中的公网 IP 地址发生了改变，也能够正常的、动态的将内部主机的报文的源 IP 映射为对应的公网 IP, 可以把 MASQUERADE 理解为动态的、自动化的 SNAT，如果没有动态 SNAT 的需求，没有必要使用 MASQUERADE，因为 SNAT 更加高效。")])]),t._v(" "),a("li",[a("p",[t._v("REDIRECT")]),t._v(" "),a("p",[t._v("使用 REDIRECT 动作可以在本机上进行端口映射")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#将本机80端口映射到本机8080端口\niptables -i nat -A PREROUTING -o tcp --dport 80 -j REDIRECT --to-ports 8080\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"_4、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、总结"}},[t._v("#")]),t._v(" 4、总结")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("规则顺序很重要")]),t._v(" "),a("p",[t._v("如果报文已经被前面的规则匹配到，IPTABLES 则会对报文执行对应的动作，通常是 ACCEPT 或者 REJECT，报文被放行或拒绝以后，即使后面的规则也能匹配到刚才放行或拒绝的报文，也没有机会再对报文执行相应的动作了（前面规则的动作为 LOG 时除外），所以，针对相同服务的规则，更严格的规则应该放在前面。")])]),t._v(" "),a("li",[a("p",[t._v("当规则中有多个匹配条件时, 条件之间是 “与” 的关系")])]),t._v(" "),a("li",[a("p",[t._v("在不考虑 1 的情况下, 应该将更容易被匹配的规则放在前面")]),t._v(" "),a("p",[t._v("比如，你写了两条规则，一条针对 sshd 服务，一条针对 web 服务。假设，一天之内，有 20000 个请求访问 web 服务，有 200 个请求访问 sshd 服务，那么，应该将针对 web 服务的规则放在前面，针对 sshd 的规则放在后面，因为访问 web 服务的请求频率更高。如果将 sshd 的规则放在前面，当报文是访问 web 服务时，sshd 的规则也要白白的验证一遍，由于访问 web 服务的频率更高，白白耗费的资源就更多。")])]),t._v(" "),a("li",[a("p",[t._v("当 IPTABLES 所在主机作为网络防火墙时，在配置规则时，应着重考虑方向性，双向都要考虑，从外到内，从内到外。")])]),t._v(" "),a("li",[a("p",[t._v("在配置 IPTABLES 白名单时，往往会将链的默认策略设置为 ACCEPT，通过在链的最后设置 REJECT 规则实现白名单机制，而不是将链的默认策略设置为 DROP，如果将链的默认策略设置为 DROP，当链中的规则被清空时，管理员的请求也将会被 DROP 掉。")])])]),t._v(" "),a("p",[t._v("全文完")]),t._v(" "),a("p",[t._v("本文由 "),a("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[t._v("简悦 SimpRead"),a("OutboundLink")],1),t._v(" 优化，用以提升阅读体验")]),t._v(" "),a("p",[t._v("使用了 全新的简悦词法分析引擎 beta，"),a("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),a("OutboundLink")],1),t._v("详细说明")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("iptables & netfilter"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("1、简介"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("2、iptables 基础"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.1、链"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.2、表"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.3、规则"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("3、使用"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.1、规则查询"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.2、规则管理"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.3、基本匹配条件"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-10",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.3、扩展匹配条件"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-11",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.4、黑白名单机制"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-12",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.5、自定义链"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-13",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.6、网络防火墙"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-14",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.7、动作总结"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.tuicool.com/articles/AfqIz2Q#sr-toc-15",target:"_blank",rel:"noopener noreferrer"}},[t._v("4、总结"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);