(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{471:function(s,n,a){"use strict";a.r(n);var e=a(42),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("[Linux内核之旅](javascript:void(0)😉 "),a("em",[s._v("今天")])]),s._v(" "),a("p",[s._v("以下文章来源于技术简说 ，作者董旭")]),s._v(" "),a("p",[s._v("本公众号作者为Linux内核之旅社区成员-董旭")]),s._v(" "),a("p",[s._v("基于tcpdump原理手动实现抓包程序")]),s._v(" "),a("p",[s._v("前面两篇文章分析tcpdump实现抓包原理：")]),s._v(" "),a("p",[s._v("1、"),a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=Mzg5MTU1ODgyMA==&mid=2247483799&idx=1&sn=d31ddd924b8809040c004c5f163cb61d&chksm=cfcacf5cf8bd464abdab4c3a9b571d6e52d0a8d0ee9d71191bbe8ed3c3dfb084e303b636afce&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("文章1"),a("OutboundLink")],1),s._v("主要从Linux内核角度分析tcpdump旁路嗅探数据包的过程")]),s._v(" "),a("p",[s._v("2、"),a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=Mzg5MTU1ODgyMA==&mid=2247483893&idx=1&sn=e6ba1fdb1bb5a792ccb141b936eb5211&chksm=cfcacf3ef8bd462868d9b1071c28aa5b7fe0871f48564971079b4a666cd96f1c084877731ba3&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("文章2"),a("OutboundLink")],1),s._v("主要从Linux内核角度分析tcpdump利用BPF机制实现数据包捕获前的过滤过程")]),s._v(" "),a("p",[s._v("本次将根据前面的分析，手动写一个基于tcpdump工具原理的简易抓包程序，实现从链路层的抓包，加深一下关于tcpdump原理的印象。")]),s._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("p",[s._v("流程分析")]),s._v(" "),a("h4",{attrs:{id:"_1、pf-packet协议族的socket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、pf-packet协议族的socket"}},[s._v("#")]),s._v(" 1、PF_PACKET协议族的socket")]),s._v(" "),a("p",[s._v("正如在"),a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=Mzg5MTU1ODgyMA==&mid=2247483799&idx=1&sn=d31ddd924b8809040c004c5f163cb61d&chksm=cfcacf5cf8bd464abdab4c3a9b571d6e52d0a8d0ee9d71191bbe8ed3c3dfb084e303b636afce&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("文章1"),a("OutboundLink")],1),s._v("中分析时，以"),a("code",[s._v("socket(PF_PACKET, SOCK_RAW, htons(ETH_P_ALL))")]),s._v("为着手点。我们通常都是通过创建PF_PACKET协议族的socket,用来抓包、分析数据的。")]),s._v(" "),a("p",[s._v("如下，创建一个PF_PACKET类型的socket,type指定为SOCK_RAW,当指定SOCK_RAW时，获取的数据包是一个完整的数据链路层数据包。proticol字段设置为htons(ETH_P_ALL)，表示接收端数据链路层所有协议帧。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('/*socket函数原型：\n#include <sys/socket.h>\nsockfd = socket(int socket_family, int socket_type, int protocol);\n*/\nsock = socket(AF_PACKET, SOCK_RAW, htons(ETH_P_ALL));\n if (sock < 0) {\n  perror("socket");\n  return 1;\n }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h4",{attrs:{id:"_2、设置链路层属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、设置链路层属性"}},[s._v("#")]),s._v(" 2、设置链路层属性")]),s._v(" "),a("h5",{attrs:{id:"核心结构体-struct-sockaddr-ll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心结构体-struct-sockaddr-ll"}},[s._v("#")]),s._v(" 核心结构体：struct sockaddr_ll")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("struct sockaddr_ll\n{\n unsigned short int sll_family; /* 一般为AF_PACKET */\n unsigned short int sll_protocol; /* 上层协议类型 */\n int  sll_ifindex; /* 网卡接口索引号，0 匹配所有的网络接口卡 */\n unsigned short int sll_hatype; /* 报头类型 */\n unsigned char sll_pkttype; /* 包类型 */\n unsigned char sll_halen; /* 地址长度 */\n unsigned char sll_addr[8]; /* MAC地址 */\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("该结构体为设备无关的物理层地址结构，数据链路层的头信息通常定义在sockaddr_all的结构体中，当发送数据包时，指定 sll_family, sll_addr, sll_halen, sll_ifindex, sll_protocol 就足够了。其它字段设置为0；sll_hatype和 sll_pkttype是在接收数据包时使用的；如果要bind, 只需要使用 sll_protocol和 sll_ifindex就足够。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" struct sockaddr_ll addr;\n memset(&addr, 0, sizeof(addr));\n addr.sll_ifindex = if_nametoindex(name);//name为当前要抓包的网卡接口名称\n addr.sll_family = AF_PACKET;\n addr.sll_protocol = htons(ETH_P_ALL);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"_3、将创建的soccket与地址绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、将创建的soccket与地址绑定"}},[s._v("#")]),s._v(" 3、将创建的soccket与地址绑定")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' if (bind(sock, (struct sockaddr *) &addr, sizeof(addr))) {\n  perror("bind");\n  return 1;\n }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_4、抓包的过滤条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、抓包的过滤条件"}},[s._v("#")]),s._v(" 4、抓包的过滤条件")]),s._v(" "),a("p",[s._v("在"),a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=Mzg5MTU1ODgyMA==&mid=2247483893&idx=1&sn=e6ba1fdb1bb5a792ccb141b936eb5211&chksm=cfcacf3ef8bd462868d9b1071c28aa5b7fe0871f48564971079b4a666cd96f1c084877731ba3&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("文章2"),a("OutboundLink")],1),s._v("中，介绍了BPF过滤机制，在tcpdump的过滤机制中有一个重要的结构体:struct sock_filter，同时也是cBPF汇编的一个框架")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("struct sock_filter {\n __u16 code;   /*指令  32位*/\n __u8 jt; /* jt是指令结果为true的跳转 */\n __u8 jf; /* jf是为false的跳转 */\n __u32 k;      /* 指令参数*/\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("该结构体一般是封装在struct sock_fprog中使用:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("struct sock_fprog      \n{\n    unsigned short  len;   \n    struct sock_filter   *filter;\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("在"),a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=Mzg5MTU1ODgyMA==&mid=2247483799&idx=1&sn=d31ddd924b8809040c004c5f163cb61d&chksm=cfcacf5cf8bd464abdab4c3a9b571d6e52d0a8d0ee9d71191bbe8ed3c3dfb084e303b636afce&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("文章1"),a("OutboundLink")],1),s._v("中分析过，使用tcpdump -d参数可以生成BPF汇编伪代码：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("dx@ubuntu:~$ sudo tcpdump -d 'ip and tcp port 80'\n(000) ldh      [12]\n(001) jeq      #0x800           jt 2    jf 12\n(002) ldb      [23]\n(003) jeq      #0x6             jt 4    jf 12\n(004) ldh      [20]\n(005) jset     #0x1fff          jt 12   jf 6\n(006) ldxb     4*([14]&0xf)\n(007) ldh      [x + 14]\n(008) jeq      #0x50            jt 11   jf 9\n(009) ldh      [x + 16]\n(010) jeq      #0x50            jt 11   jf 12\n(011) ret      #262144\n(012) ret      #0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("这种伪代码在C程序中是无法使用的，需要借用tcpdump -dd参数生成等效的c代码：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("dx@ubuntu:~$ sudo tcpdump -dd 'ip and tcp port 80'\n{ 0x28, 0, 0, 0x0000000c },\n{ 0x15, 0, 10, 0x00000800 },\n{ 0x30, 0, 0, 0x00000017 },\n{ 0x15, 0, 8, 0x00000006 },\n{ 0x28, 0, 0, 0x00000014 },\n{ 0x45, 6, 0, 0x00001fff },\n{ 0xb1, 0, 0, 0x0000000e },\n{ 0x48, 0, 0, 0x0000000e },\n{ 0x15, 2, 0, 0x00000050 },\n{ 0x48, 0, 0, 0x00000010 },\n{ 0x15, 0, 1, 0x00000050 },\n{ 0x6, 0, 0, 0x00040000 },\n{ 0x6, 0, 0, 0x00000000 },\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("这段代码就是struct sock_filter：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("static struct sock_filter bpfcode[13] = {\n{ 0x28, 0, 0, 0x0000000c },\n{ 0x15, 0, 10, 0x00000800 },\n{ 0x30, 0, 0, 0x00000017 },\n{ 0x15, 0, 8, 0x00000006 },\n{ 0x28, 0, 0, 0x00000014 },\n{ 0x45, 6, 0, 0x00001fff },\n{ 0xb1, 0, 0, 0x0000000e },\n{ 0x48, 0, 0, 0x0000000e },\n{ 0x15, 2, 0, 0x00000050 },\n{ 0x48, 0, 0, 0x00000010 },\n{ 0x15, 0, 1, 0x00000050 },\n{ 0x6, 0, 0, 0x00040000 },\n{ 0x6, 0, 0, 0x00000000 },\n};\n\nstruct sock_fprog bpf = { 13, bpfcode };\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h4",{attrs:{id:"_5、设置bpf过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、设置bpf过滤器"}},[s._v("#")]),s._v(" 5、设置BPF过滤器")]),s._v(" "),a("p",[s._v("Linux在安装和卸载过滤器时都使用了函数setsockopt(),其中标志SOL_SOCKET代表对socket进行设置，SO_ATTACH_FILTER表示安装过滤器动作，setsockopt在内核中的调用可以看"),a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=Mzg5MTU1ODgyMA==&mid=2247483893&idx=1&sn=e6ba1fdb1bb5a792ccb141b936eb5211&chksm=cfcacf3ef8bd462868d9b1071c28aa5b7fe0871f48564971079b4a666cd96f1c084877731ba3&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("文章2"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('setsockopt(sd, SOL_SOCKET, SO_ATTACH_FILTER, &Filter, sizeof(Filter));\n if (setsockopt(sock, SOL_SOCKET, SO_ATTACH_FILTER, &bpf, sizeof(bpf))) {\n  perror("setsockopt ATTACH_FILTER");\n  return 1;\n }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"_6、设置网卡的混杂模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、设置网卡的混杂模式"}},[s._v("#")]),s._v(" 6、设置网卡的混杂模式")]),s._v(" "),a("p",[s._v("关键结构体：struct packet_mreq")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("struct packet_mreq\n{\nintmr_ifindex; /* 接口索引 */\nunsigned shortmr_type; /* mreq 类型 */\nunsigned shortmr_alen; /* 地址长度 */\nunsigned charmr_address[8]; /* 物理地址 */\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("混杂模式：")]),s._v(" "),a("p",[s._v("混杂模式就是接收所有经过网卡的数据包，包括不是发给本机的包，默认情况下网卡只把发给本机的包（包括广播包）传递给上层程序，其它的包一律丢弃；简单的讲，混杂模式就是指网卡能接受所有通过它的数据流，不管是什么格式，什么地址，当网卡处于混杂模式时，该网卡就具有“广播地址”，它对所有遇到的每一个数据帧都产生一个硬件中断，以便提醒操作系统处理流经过该物理媒体上的每一个报文包。")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("shortmr_type")]),s._v("字段可以设置混杂模式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    struct packet_mreq mreq;\n    memset(&mreq, 0, sizeof(mreq));\n mreq.mr_type = PACKET_MR_PROMISC;//设置混杂模式\n mreq.mr_ifindex = if_nametoindex(name);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("将设置的混杂模式设置到socket:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' if (setsockopt(sock, SOL_PACKET,\n    PACKET_ADD_MEMBERSHIP, (char *)&mreq, sizeof(mreq))) {\n  perror("setsockopt MR_PROMISC");//ACKET_ADD_MEMBERSHIP 用于增加一个绑定\n  return 1;\n }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"_7、定义要获得的数据报文信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、定义要获得的数据报文信息"}},[s._v("#")]),s._v(" 7、定义要获得的数据报文信息")]),s._v(" "),a("h5",{attrs:{id:"源和目的mac地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源和目的mac地址"}},[s._v("#")]),s._v(" 源和目的MAC地址")]),s._v(" "),a("p",[s._v("关键结构体：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("struct ether_header\n{\n  uint8_t  ether_dhost[ETH_ALEN]; /* 目的MAC地址 */\n  uint8_t  ether_shost[ETH_ALEN]; /* 源MAC地址 */\n  uint16_t ether_type;          /* packet type ID field */\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("IP信息(源、目的IP，IP版本)、上层协议类型")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('struct iphdr\n  {\n#if __BYTE_ORDER == __LITTLE_ENDIAN\n    unsigned int ihl:4;\n    unsigned int version:4;\n#elif __BYTE_ORDER == __BIG_ENDIAN\n    unsigned int version:4;\n    unsigned int ihl:4;\n#else\n# error "Please fix <bits/endian.h>"\n#endif\n    uint8_t tos;\n    uint16_t tot_len;\n    uint16_t id;\n    uint16_t frag_off;\n    uint8_t ttl;\n    uint8_t protocol;  //上层协议类型\n    uint16_t check;\n    uint32_t saddr;   //源地址\n    uint32_t daddr;   //目的地址\n    /*The options start here. */\n  };\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h4",{attrs:{id:"_8、循环接收捕获的数据包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、循环接收捕获的数据包"}},[s._v("#")]),s._v(" 8、循环接收捕获的数据包")]),s._v(" "),a("p",[s._v("在"),a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=Mzg5MTU1ODgyMA==&mid=2247483799&idx=1&sn=d31ddd924b8809040c004c5f163cb61d&chksm=cfcacf5cf8bd464abdab4c3a9b571d6e52d0a8d0ee9d71191bbe8ed3c3dfb084e303b636afce&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("文章1"),a("OutboundLink")],1),s._v("中，分析了数据包是怎样捕获的:")]),s._v(" "),a("blockquote",[a("p",[s._v("回顾：")]),s._v(" "),a("p",[s._v("tcpdump进行抓包的内核流程梳理")]),s._v(" "),a("ul",[a("li",[s._v("应用层通过libpcap库：调用系统调用创建socket,"),a("code",[s._v("sock_fd = socket(PF_PACKET, SOCK_RAW, htons(ETH_P_ALL));")]),s._v("tcpdump在socket创建过程中创建packet_type(struct packet_type),并挂载到全局的ptype_all链表上。(同时在packet_type设置回调函数packet_rcv")]),s._v(" "),a("li",[s._v("网络收包/发包时，会在各自的处理函数(收包时："),a("code",[s._v("__netif_receive_skb_core")]),s._v("，发包时："),a("code",[s._v("dev_queue_xmit_nit")]),s._v(")中遍历ptype_all链表，并同时执行其回调函数，这里tcpdump的注册的回调函数就是packet_rcv")]),s._v(" "),a("li",[s._v("packet_rcv函数中会将用户设置的过滤条件，通过BPF进行过滤，并将过滤的数据包添加到接收队列中")]),s._v(" "),a("li",[s._v("应用层调用recvfrom 。PF_PACKET 协议簇模块调用packet_recvmsg 将接收队列中的数据copy应用层，到此将数据包捕获到。")])])]),s._v(" "),a("p",[s._v("所以上面创建好的PF_PACKET类型socket，并设置好过滤器后，当网卡有数据进出时，就已经将数据报文添加到了接收队列上了，下面只需要我们进行recv获取数据报文即可。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' for (;;) {\n  n = recv(sock, buf, sizeof(buf), 0);\n  if (n < 1) {\n   perror("recv");\n   return 0;\n  }\n        //获取链路层的源和目的地址\n  mac_hdr=(struct ether_header *)buf;\n\n  ip = (struct iphdr *)(buf + sizeof(struct ether_header));\n\n  inet_ntop(AF_INET, &ip->saddr, saddr_str, sizeof(saddr_str));\n  inet_ntop(AF_INET, &ip->daddr, daddr_str, sizeof(daddr_str));\n\n  switch (ip->protocol) {\n#define PTOSTR(_p,_str) \\\n   case _p: proto_str = _str; break\n\n  PTOSTR(IPPROTO_ICMP, "icmp");\n  PTOSTR(IPPROTO_TCP, "tcp");\n  PTOSTR(IPPROTO_UDP, "udp");\n  default:\n   proto_str = "";\n   break;\n  }\n        printf(" SMAC:%X:%X:%X:%X:%X:%X",\n    (u_char)mac_hdr->ether_shost[0],\n    (u_char)mac_hdr->ether_shost[1],\n    (u_char)mac_hdr->ether_shost[2],\n    (u_char)mac_hdr->ether_shost[3],\n    (u_char)mac_hdr->ether_shost[4],\n    (u_char)mac_hdr->ether_shost[5]\n   );\n\n  printf(" ==>  DMAC:%X:%X:%X:%X:%X:%X  ",\n    (u_char)mac_hdr->ether_dhost[0],\n    (u_char)mac_hdr->ether_dhost[1],\n    (u_char)mac_hdr->ether_dhost[2],\n    (u_char)mac_hdr->ether_dhost[3],\n    (u_char)mac_hdr->ether_dhost[4],\n    (u_char)mac_hdr->ether_dhost[5]\n   );\n  printf("IPv%d proto=%d(%s) src=%s dst=%s\\n",\n    ip->version, ip->protocol, proto_str, saddr_str, daddr_str);\n }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br")])]),a("p",[s._v("至此，从创建socket，到设置socket过滤器、网卡工作模式，到接收捕获的数据包就结束了。")]),s._v(" "),a("h3",{attrs:{id:"-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[s._v("#")])]),s._v(" "),a("p",[s._v("附：源代码")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_gif/EjWxxIM2EQJDl28hhtwMqByPiceMkObWic7WIIXpTBn5ibvVNKicK8Dhjga8Q1zasPKVgbhC4vd3CyyCH4tJMvicQ2Q/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",alt:"图片"}})]),s._v(" "),a("p",[s._v("实现捕获数据包的过滤条件：ip and tcp port 80")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#include <stdio.h>\n#include <string.h>\n#include <sys/types.h>\n#include <sys/socket.h>\n#include <net/if.h>\n#include <net/ethernet.h>\n#include <netinet/in.h>\n#include <netinet/ip.h>\n#include <arpa/inet.h>\n#include <netpacket/packet.h>\n#include <linux/filter.h>\n\nstatic struct sock_filter bpfcode[13] = {\n{ 0x28, 0, 0, 0x0000000c },\n{ 0x15, 0, 10, 0x00000800 },\n{ 0x30, 0, 0, 0x00000017 },\n{ 0x15, 0, 8, 0x00000006 },\n{ 0x28, 0, 0, 0x00000014 },\n{ 0x45, 6, 0, 0x00001fff },\n{ 0xb1, 0, 0, 0x0000000e },\n{ 0x48, 0, 0, 0x0000000e },\n{ 0x15, 2, 0, 0x00000050 },\n{ 0x48, 0, 0, 0x00000010 },\n{ 0x15, 0, 1, 0x00000050 },\n{ 0x6, 0, 0, 0x00040000 },\n{ 0x6, 0, 0, 0x00000000 },\n};\n\nint main(int argc, char **argv)\n{\n int sock;\n int n;\n char buf[2000];\n struct sockaddr_ll addr;\n struct packet_mreq mreq;\n struct iphdr *ip;\n    struct ether_header *mac_hdr;\n    char saddr_str[INET_ADDRSTRLEN], daddr_str[INET_ADDRSTRLEN];\n char *proto_str;\n char *name;\n struct sock_fprog bpf = { 13, bpfcode };\n\n if (argc != 2) {\n  printf("Usage: %s ifname\\n", argv[0]);\n  return 1;\n }\n\n name = argv[1];\n\n sock = socket(AF_PACKET, SOCK_RAW, htons(ETH_P_ALL));\n if (sock < 0) {\n  perror("socket");\n  return 1;\n }\n\n memset(&addr, 0, sizeof(addr));\n addr.sll_ifindex = if_nametoindex(name);\n addr.sll_family = AF_PACKET;\n addr.sll_protocol = htons(ETH_P_ALL);\n\n if (bind(sock, (struct sockaddr *) &addr, sizeof(addr))) {\n  perror("bind");\n  return 1;\n }\n\n if (setsockopt(sock, SOL_SOCKET, SO_ATTACH_FILTER, &bpf, sizeof(bpf))) {\n  perror("setsockopt ATTACH_FILTER");\n  return 1;\n }\n\n memset(&mreq, 0, sizeof(mreq));\n mreq.mr_type = PACKET_MR_PROMISC;\n mreq.mr_ifindex = if_nametoindex(name);\n\n if (setsockopt(sock, SOL_PACKET,\n    PACKET_ADD_MEMBERSHIP, (char *)&mreq, sizeof(mreq))) {\n  perror("setsockopt MR_PROMISC");\n  return 1;\n }\n\n for (;;) {\n  n = recv(sock, buf, sizeof(buf), 0);\n  if (n < 1) {\n   perror("recv");\n   return 0;\n  }\n        //获取链路层的源和目的地址\n  mac_hdr=(struct ether_header *)buf;\n\n  ip = (struct iphdr *)(buf + sizeof(struct ether_header));\n\n  inet_ntop(AF_INET, &ip->saddr, saddr_str, sizeof(saddr_str));\n  inet_ntop(AF_INET, &ip->daddr, daddr_str, sizeof(daddr_str));\n\n  switch (ip->protocol) {\n#define PTOSTR(_p,_str) \\\n   case _p: proto_str = _str; break\n\n  PTOSTR(IPPROTO_ICMP, "icmp");\n  PTOSTR(IPPROTO_TCP, "tcp");\n  PTOSTR(IPPROTO_UDP, "udp");\n  default:\n   proto_str = "";\n   break;\n  }\n        printf(" SMAC:%X:%X:%X:%X:%X:%X",\n    (u_char)mac_hdr->ether_shost[0],\n    (u_char)mac_hdr->ether_shost[1],\n    (u_char)mac_hdr->ether_shost[2],\n    (u_char)mac_hdr->ether_shost[3],\n    (u_char)mac_hdr->ether_shost[4],\n    (u_char)mac_hdr->ether_shost[5]\n   );\n\n  printf(" ==>  DMAC:%X:%X:%X:%X:%X:%X  ",\n    (u_char)mac_hdr->ether_dhost[0],\n    (u_char)mac_hdr->ether_dhost[1],\n    (u_char)mac_hdr->ether_dhost[2],\n    (u_char)mac_hdr->ether_dhost[3],\n    (u_char)mac_hdr->ether_dhost[4],\n    (u_char)mac_hdr->ether_dhost[5]\n   );\n  printf("IPv%d proto=%d(%s) src=%s dst=%s\\n",\n    ip->version, ip->protocol, proto_str, saddr_str, daddr_str);\n }\n\n return 0;\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br")])]),a("h4",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/EjWxxIM2EQLoiaBp9GUEWP5Qx1RQRc0CFGcDVdUb9aaJyWYhmI3LuPZh6wMy1kaEjO7ibnT510jXTAJzLytF2Rwg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),s._v(" "),a("blockquote",[a("p",[s._v("注意：程序指定的参数：ens33为自己的网卡接口名称，可以通过ip addr进行查看。")])]),s._v(" "),a("p",[s._v("喜欢此内容的人还喜欢")]),s._v(" "),a("p",[s._v("Filebeat、Logstash、Rsyslog 各种姿势采集Nginx日志")]),s._v(" "),a("p",[s._v("高效运维")]),s._v(" "),a("p",[s._v("不喜欢")]),s._v(" "),a("p",[s._v("不看的原因")]),s._v(" "),a("p",[s._v("确定")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("内容质量低")])]),s._v(" "),a("li"),s._v(" "),a("li",[a("p",[s._v("不看此公众号")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzI3NzA5MzUxNA==&mid=2664610380&idx=1&sn=2f15cdfb6e31bcd5b5f62437ca4c7740&send_time=",alt:"img"}})]),s._v(" "),a("p",[s._v("微信扫一扫\n关注该公众号")]),s._v(" "),a("p",[s._v("：，。视频小程序赞，轻点两下取消赞在看，轻点两下取消在看")])])}),[],!1,null,null,null);n.default=t.exports}}]);