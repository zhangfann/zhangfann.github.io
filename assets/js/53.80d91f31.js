(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{438:function(s,e,t){"use strict";t.r(e);var n=t(42),_=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"高性能网络编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高性能网络编程"}},[s._v("#")]),s._v(" 高性能网络编程")]),s._v(" "),t("h2",{attrs:{id:"_1、建立连接-accept"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、建立连接-accept"}},[s._v("#")]),s._v(" 1、建立连接 accept")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("int accept(int sockfd, struct sockaddr *addr, socklen_t *addrlen);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("TCP 通过三次握手建立连接，如下图，")]),s._v(" "),t("p",[s._v("当服务器绑定、监听了某个端口后，这个端口的 SYN 队列和 ACCEPT 队列就建立好了（在内核中实现）。注意，SYN 队列存放的是未建立的连接，数值由内核 /proc/sys/net/ipv4/tcp_max_syn_backlog 参数决定，应用程序无法修改；而 ACCEPT 队列即 listen 函数的 backlog 参数决定，它是 ESTABLISHED 状态的连接，这个数值不能超过 /proc/sys/net/core/somaxconn。")]),s._v(" "),t("p",[s._v("客户端使用 connect 向服务器发起 TCP 连接，当客户端的 SYN 包到达了服务器后，内核会把这一信息放到 SYN 队列（即未完成握手队列）中，同时回一个 SYN+ACK 包给客户端。一段时间后，客户端再次发来了针对服务器 SYN 包的 ACK 网络分组时，内核会把连接从 SYN 队列中取出，再把这个连接放到 ACCEPT 队列（即已完成握手队列）中。之后服务器在调用 accept() 时，其实就是直接从 ACCEPT 队列中取出已经建立成功的连接套接字而已。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/603001/201512/603001-20151222182948827-1294436984.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("如果上图中第 1 步执行的速度大于第 2 步执行的速度，SYN 队列就会不断增大直到队列满；如果第 2 步执行的速度远大于第 3 步执行的速度，ACCEPT 队列同样会达到上限。第 1、2 步不是应用程序可控的，但第 3 步却是应用程序的行为，假设进程中调用 accept 获取新连接的代码段长期得不到执行，例如获取不到锁、IO 阻塞等。")]),s._v(" "),t("p",[s._v("另外，应用程序可以把 listen 时设置的套接字设为非阻塞模式（默认为阻塞模式），这两种模式会导致 accept 方法有不同的行为。")]),s._v(" "),t("p",[s._v("对阻塞套接字，accept 行为如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/603001/201512/603001-20151222185121296-1156600745.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("对非阻塞套接字，accept 会有两种返回，如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/603001/201512/603001-20151222185158202-293360434.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("非阻塞套接字上的 accept，不存在等待 ACCEPT 队列不为空的阶段，它要么返回成功并拿到建立好的连接，要么返回失败。")]),s._v(" "),t("p",[s._v("如果 accept 队列满，client 发来 ack，连接从 syn 队列移到 accept 队列的时候会发生什么呢？")]),s._v(" "),t("p",[s._v("1). 如果 /proc/sys/net/ipv4/tcp_abort_on_overflow 为 1，会发送 RST；如果为 0，则「什么都不做」，也就是「忽略」。")]),s._v(" "),t("p",[s._v("2). 但是，即使被忽略，对于 SYN RECEIVED 状态， 会有重试，重试次数定义在 /proc/sys/net/ipv4/tcp_synack_retries(重试时间有个算法)。")]),s._v(" "),t("p",[s._v("3). client 在收到 server 发来的重试 synack 之后，它认为之前发给 server 的 ack 丢失，会重发，此时如果 server 的 accept 队列有「空位」，会把连接移到 accpet 队列，并把 SYN RECEIVED 改成 ESTABLISHED。")]),s._v(" "),t("p",[s._v("4). 从另一个角度看， 即使 client 发的 ack 被忽略，因为 client 已经收到了 synack，client 认为连接已经建立，它可能会直接发送数据 (ack 和 数据一起发送)，这部分数据也会被忽略，会重传，幸好有「慢」启动机制保证重传的数据不会太多。")]),s._v(" "),t("p",[s._v("5). 如果 client 先等待 server 发来的数据，在 client 端连接是 ESTABLISHED，server 认为连接是 CLOSED，这会造成「半连接」。")]),s._v(" "),t("p",[s._v("6). 事实上，如果 accept 队列满了，内核会限制 syn 包的进入速度，如果太快，有些包会被丢弃。")]),s._v(" "),t("h2",{attrs:{id:"_2、消息发送-send"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、消息发送-send"}},[s._v("#")]),s._v(" 2、消息发送 send")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ssize_t send(int sockfd, const void *buf, size_t len, int flags);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在建立的 TCP 连接上发送消息，可以使用 send 或者 write 函数，先看下发送消息时内核在做什么：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/603001/201512/603001-20151222183418656-1949708106.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("当我们调用发送方法时，会把我们代码中构造好的消息流作为参数传递。这个消息流可大可小，例如几个字节，或者几兆字节。当消息流较大时，将有可能出现分片。")]),s._v(" "),t("p",[s._v("我们先来讨论分片问题，数据链路层有一个 MTU（最大传输单元）的限制，例如以太网限制为 1500 字节，802.3 限制为 1492 字节，如果 IP 层报文长度大于 MTU 限制，就会被分成若干个小于 MTU 的报文，每个报文都会有独立的 IP 头部，如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/603001/201512/603001-20151223103202827-2003971149.png",alt:"img"}})]),s._v(" "),t("p",[s._v("可以看出，IP 头部中指定长度的字段有 16 位，这意味着一个 IP 包最大可以是 65535 字节。")]),s._v(" "),t("p",[s._v("若 TCP 层在以太网中试图发送一个大于 1500 字节的消息，调用 IP 网络层方法发送消息时，IP 层会自动的获取所在局域网的 MTU 值，并按照所在网络的 MTU 大小来分片。IP 层同时希望这个分片对于传输层来说是透明的，接收方的 IP 层会根据收到的多个 IP 包头部，将发送方 IP 层分片出的 IP 包重组为一个消息。")]),s._v(" "),t("p",[s._v("这种 IP 层的分片效率是很差的，因为必须所有分片都到达才能重组成一个包，其中任何一个分片丢失了，都必须重发所有分片。所以，TCP 层会试图避免 IP 层执行数据报分片。")]),s._v(" "),t("p",[s._v("为了避免 IP 层的分片，TCP 协议定义了一个新的概念：MSS（最大报文段长度），它定义了一个 TCP 连接上，一个主机期望对端主机发送单个报文的最大长度。TCP3 次握手建立连接时，连接双方都要互相告知自己期望接收到的 MSS 大小。")]),s._v(" "),t("p",[s._v("如下图，是 TCP 三次握手的过程，SYN 包携带了期望的 MSS 大小：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/603001/201512/603001-20151223123320656-1946352226.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("例子中两台主机都在以太网内，MTU=1500，减去 IP 和 TCP 头部，MSS 就是 1460。")]),s._v(" "),t("p",[s._v("这个 MSS 就不会改变了吗？")]),s._v(" "),t("p",[s._v("会的。上文说过，MSS 就是为了避免 IP 层分片，在建立握手时告知对方期望接收的 MSS 值并不一定靠得住。因为这个值是预估的，TCP 连接上的两台主机若处于不同的网络中，那么，连接上可能有许多中间网络，这些网络分别具有不同的数据链路层，这样，TCP 连接上有许多个 MTU。特别是，若中间途径的 MTU 小于两台主机所在的网络 MTU 时，选定的 MSS 仍然太大了，会导致中间路由器出现 IP 层的分片。")]),s._v(" "),t("p",[s._v("怎样避免中间网络可能出现的分片呢？")]),s._v(" "),t("p",[s._v("通过 IP 头部的 DF 标志位，这个标志位是告诉 IP 报文所途经的所有 IP 层代码：不要对这个报文分片。如果一个 IP 报文太大必须要分片，则直接返回一个 ICMP 错误，说明必须要分片了，且待分片路由器网络接受的 MTU 值。这样，连接上的发送方主机就可以重新确定 MSS。")]),s._v(" "),t("p",[s._v("send 方法的流程可以分为 10 步：")]),s._v(" "),t("p",[s._v("1、应用程序调用 send 方法来发送一段较长的数据；")]),s._v(" "),t("p",[s._v("2、内核通过 tcp_sendmsg 方法来完成；")]),s._v(" "),t("p",[s._v("3-4、内核真正执行报文的发送，与 send 方法的调用并不是同步的。即，send 方法返回成功了，也不一定把 IP 报文都发送到网络中了。因此，得把需要发送的用户态内存中的数据，拷贝到内核态内存中，也使得进程可以快速释放发送数据占用的用户态内存。但这个拷贝操作并不是简单的复制，而是把待发送数据划分成多个尽量达到 MSS 大小的分片报文段，复制到内核中的 sk_buff 结构来存放，同时把这些分片组成队列，放到这个 TCP 连接对应的 tcp_write_queue 发送队列中。")]),s._v(" "),t("p",[s._v("5、内核中为这个 TCP 连接分配的内核缓存是有限的（/proc/sys/net/core/wmem_default）。当没有多余的内核态缓存来复制用户态的待发送数据时，需要调用 sk_stream_wait_memory 方法来等待滑动窗口移动，释放出一些缓存出来（收到 ACK 后，不需要再缓存原来已经发送出的报文，因为既然已经确认对方收到，就不需要定时重发，自然就释放缓存了）。例如：")]),s._v(" "),t("p",[s._v("["),t("img",{attrs:{src:"http://common.cnblogs.com/images/copycode.gif",alt:"img"}}),s._v("](javascript:void(0)😉")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("static inline long sock_sndtimeo(const struct sock *sk, int noblock)\n{\n    return noblock ? 0 : sk->sk_sndtimeo;\n}\n\n// 等待超时时间，对非阻塞套接字是0，对阻塞套接字由SO_SNDTIMEO选项指定\ntimeo = sock_sndtimeo(sk, flags & MSG_DONTWAIT); \n\nwait_for_memory:\n    if (copied)\n        tcp_push(sk, tp, flags & ~MSG_MORE, mss_now, TCP_NAGLE_PUSH);\n\n    if ((err = sk_stream_wait_memory(sk, &timeo)) != 0)\n        goto do_error;     \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("["),t("img",{attrs:{src:"http://common.cnblogs.com/images/copycode.gif",alt:"img"}}),s._v("](javascript:void(0)😉")]),s._v(" "),t("p",[s._v("6、假定使用了阻塞套接字，且等待了足够久的时间，收到了对方的 ACK，滑动窗口释放出了缓存。")]),s._v(" "),t("p",[s._v("7、将剩下的用户态数据都组成 MSS 报文拷贝到内核态的 sk_buff 中。")]),s._v(" "),t("p",[s._v("8、最后，调用 tcp_push 等方法（细节如下图），它最终会调用 IP 层的方法来发送 tcp_write_queue 队列中的报文。注意，IP 层返回时，并不一定是把报文发送了出去。")]),s._v(" "),t("p",[s._v("9-10、发送方法返回。无论是使用阻塞还是非阻塞套接字，发送方法成功返回时（无论全部成功或者部分成功），既不代表 TCP 连接的另一端主机接收到了消息，也不代表本机把消息发送到了网络上，只是说明，内核将会试图保证把消息送达对方。")]),s._v(" "),t("p",[s._v("tcp_push 方法的流程：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/603001/201512/603001-20151223111924702-873973948.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("这里有几个概念：")]),s._v(" "),t("p",[t("strong",[s._v("滑动窗口：")])]),s._v(" "),t("p",[s._v("TCP 连接上的双方都会通知对方自己的接收窗口大小。而对方的接收窗口大小就是自己的发送窗口大小。tcp_push 在发送数据时当然需要与发送窗口打交道。发送窗口是一个时刻变化的值，随着 ACK 的到达会变大，随着发出新的数据包会变小。当然，最大也只能到三次握手时对方通告的窗口大小。tcp_push 在发送数据时，最终会使用 tcp_snd_wnd_test 方法来判断当前待发送的数据，其序号是否超出了发送滑动窗口的大小，例如：")]),s._v(" "),t("p",[s._v("["),t("img",{attrs:{src:"http://common.cnblogs.com/images/copycode.gif",alt:"img"}}),s._v("](javascript:void(0)😉")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//检查这一次要发送的报文最大序号是否超出了发送滑动窗口大小\nstatic inline int tcp_snd_wnd_test(struct tcp_sock *tp, struct sk_buff *skb, unsigned int cur_mss)\n{\n    //end_seq待发送的最大序号\n    u32 end_seq = TCP_SKB_CB(skb)->end_seq;\n\n    if (skb->len > cur_mss)\n        end_seq = TCP_SKB_CB(skb)->seq + cur_mss;\n\n    //snd_una是已经发送过的数据中，最小的没被确认的序号；而snd_wnd就是发送窗口的大小\n    return !after(end_seq, tp->snd_una + tp->snd_wnd);\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("["),t("img",{attrs:{src:"http://common.cnblogs.com/images/copycode.gif",alt:"img"}}),s._v("](javascript:void(0)😉")]),s._v(" "),t("p",[t("strong",[s._v("慢启动和拥塞窗口：")])]),s._v(" "),t("p",[s._v("由于两台主机间的网络可能很复杂，通过广域网时，中间的路由器转发能力可能是瓶颈。也就是说，如果一方简单的按照另一方主机三次握手时通告的滑动窗口大小来发送数据的话，可能会使得网络上的转发路由器性能雪上加霜，最终丢失更多的分组。这时，各个操作系统内核都会对 TCP 的发送阶段加入慢启动和拥塞避免算法。慢启动算法说白了，就是对方通告的窗口大小只表示对方接收 TCP 分组的能力，不表示中间网络能够处理分组的能力。所以，发送方请悠着点发，确保网络非常通畅了后，再按照对方通告窗口来敞开了发。")]),s._v(" "),t("p",[s._v("拥塞窗口（cwnd）用来帮助慢启动的实现，连接刚建立时，拥塞窗口的大小远小于发送窗口，它实际上是一个 MSS。每收到一个 ACK，拥塞窗口扩大一个 MSS 大小，当然，拥塞窗口最大只能到对方通告的接收窗口大小。当然，为了避免指数式增长，拥塞窗口大小的增长会更慢一些，是线性的平滑的增长过程。")]),s._v(" "),t("p",[s._v("所以，在 tcp_push 发送消息时，还会检查拥塞窗口，飞行中的报文数要小于拥塞窗口个数，而发送数据的长度也要小于拥塞窗口的长度。")]),s._v(" "),t("p",[t("strong",[s._v("Nagle 算法：")])]),s._v(" "),t("p",[s._v("Nagle 算法的初衷是这样的：应用进程调用发送方法时，可能每次只发送小块数据，造成这台机器发送了许多小的 TCP 报文。对于整个网络的执行效率来说，小的 TCP 报文会增加网络拥塞的可能，因此，如果有可能，应该将相临的 TCP 报文合并成一个较大的 TCP 报文（当然还是小于 MSS 的）发送。Nagle 算法要求一个 TCP 连接上最多只能有一个发送出去还没被确认的小分组，在该分组的确认到达之前不能发送其他的小分组。")]),s._v(" "),t("p",[s._v("内核中是通过 tcp_nagle_test 方法实现该算法的。我们简单的看下：")]),s._v(" "),t("p",[s._v("["),t("img",{attrs:{src:"http://common.cnblogs.com/images/copycode.gif",alt:"img"}}),s._v("](javascript:void(0)😉")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("static inline int tcp_nagle_test(struct tcp_sock *tp, struct sk_buff *skb,\n        unsigned int cur_mss, int nonagle)\n{\n    // nonagle标志位设置了，返回1表示允许这个分组发送出去\n    if (nonagle & TCP_NAGLE_PUSH)\n        return 1;\n\n    // 如果这个分组包含了四次握手关闭连接的FIN包，也可以发送出去\n    if (tp->urg_mode || (TCP_SKB_CB(skb)->flags & TCPCB_FLAG_FIN))\n        return 1;\n\n    // 检查Nagle算法, 返回0表示可以发送，返回非0则不可以\n    if (!tcp_nagle_check(tp, skb, cur_mss, nonagle))\n        return 1;\n\n    return 0;\n}\n\n\nstatic inline int tcp_nagle_check(const struct tcp_sock *tp,\n        const struct sk_buff *skb, \n        unsigned mss_now, int nonagle)\n{\n    //先检查是否为小分组，即报文长度是否小于MSS\n    return (skb->len < mss_now &&\n            ( (nonagle&TCP_NAGLE_CORK) ||\n              (!nonagle             // 如果开启了Nagle算法\n               && tp->packets_out   // 若已经有小分组发出（packets_out表示“飞行”中的分组）还没有确认\n               && tcp_minshall_check(tp)) ) );\n}\n\nstatic inline int tcp_minshall_check(const struct tcp_sock *tp)\n{\n    //最后一次发送的小分组还没有被确认\n    return after(tp->snd_sml,tp->snd_una) &&\n        //将要发送的序号是要大于等于上次发送分组对应的序号\n        !after(tp->snd_sml, tp->snd_nxt);\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br")])]),t("p",[s._v("["),t("img",{attrs:{src:"http://common.cnblogs.com/images/copycode.gif",alt:"img"}}),s._v("](javascript:void(0)😉")]),s._v(" "),t("p",[s._v("设置 TCP_NODELAY 选项可以关闭 Nagle 算法，看看 setsockopt 是怎么工作的：")]),s._v(" "),t("p",[s._v("["),t("img",{attrs:{src:"http://common.cnblogs.com/images/copycode.gif",alt:"img"}}),s._v("](javascript:void(0)😉")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("static int do_tcp_setsockopt(struct sock *sk, int level,\n        int optname, char __user *optval, int optlen)\n{\n    switch (optname) {\n        case TCP_NODELAY:\n            if (val) {\n                //如果设置了TCP_NODELAY，则更新nonagle标志\n                tp->nonagle |= TCP_NAGLE_OFF|TCP_NAGLE_PUSH;\n                tcp_push_pending_frames(sk, tp);\n            } else {\n                tp->nonagle &= ~TCP_NAGLE_OFF;\n            }\n            break;\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("["),t("img",{attrs:{src:"http://common.cnblogs.com/images/copycode.gif",alt:"img"}}),s._v("](javascript:void(0)😉")]),s._v(" "),t("h2",{attrs:{id:"_3、消息接收-recv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、消息接收-recv"}},[s._v("#")]),s._v(" 3、消息接收 recv")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ssize_t recv(int sockfd, void *buf, size_t len, int flags);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("接收 TCP 消息的过程可以一分为二：")]),s._v(" "),t("ol",[t("li",[s._v("网卡接收到的报文，通过软中断，内核拿到并且解析其为 TCP 报文，然后 TCP 模块决定如何处理这个 TCP 报文；")]),s._v(" "),t("li",[s._v("用户进程调用 read、recv 等方法获取 TCP 消息，则是将内核已经从网卡上收到的消息流拷贝到用户进程里的内存中。")])]),s._v(" "),t("p",[s._v("内核在处理接收到的 TCP 报文时使用了 4 个队列：")]),s._v(" "),t("ul",[t("li",[s._v("receive 队列，receive 队列是允许用户进程直接读取的，它是将已经接收到的 TCP 报文，去除了 TCP 头部、排好序放入的、用户进程可以直接按序读取的队列；")]),s._v(" "),t("li",[s._v("out_of_order 队列，存放乱序的报文；")]),s._v(" "),t("li",[s._v("backlog 队列，临时队列，当 socker 被锁住时（该 socket 有进程上下文），网卡收到的报文会放入 backlog 队列；")]),s._v(" "),t("li",[s._v("prequeue 队列，如果 sysctl_tcp_low_latency=1 表示系统关闭 prequeue 队列，这是一个优化队列，可有可无。 并且如果有应用程序正在 recvmsg，则才会把数据包放入 prequeue 中。")])]),s._v(" "),t("p",[t("strong",[s._v("第一个场景：")])]),s._v(" "),t("p",[s._v("如下图，应用进程使用了阻塞套接字，调用 recv 等方法时 flag 标志位为 0，用户进程读取套接字时没有发生进程睡眠。")]),s._v(" "),t("p",[s._v("TCP 连接上将要收到的消息序号是 S1（TCP 上的每个报文都有序号），此时操作系统内核依次收到了序号 S1-S2 的报文、S3-S4、S2-S3 的报文，注意后两个包乱序了。之后，用户进程分配了一段 len 大小的内存用于接收 TCP 消息，此时，len 是大于 S4-S1 的。另外，用户进程始终没有对这个 socket 设置过 SO_RCVLOWAT 参数，因此，接收阀值 SO_RCVLOWAT 使用默认值 1。另外，系统参数 tcp_low_latency 设置为 0，即从操作系统的总体效率出发，使用 prequeue 队列提升吞吐量。当然，由于用户进程收消息时，并没有新包来临，所以此图中 prequeue 队列始终为空，先不细表。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/603001/201512/603001-20151222183425093-981881344.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("上图的流程可以分为 13 个步骤：")]),s._v(" "),t("ol",[t("li",[s._v("当网卡接收到报文并判断为 TCP 协议后，将会调用到内核的 tcp_v4_rcv 方法。此时，这个 TCP 连接上需要接收的下一个报文序号恰好就是 S1，而这一步里，网卡上收到了 S1-S2 的报文，所以，tcp_v4_rcv 方法会把这个报文直接插入到 receive 队列中；")]),s._v(" "),t("li",[s._v("接着收到了 S3-S4 报文。在第 1 步结束后，这时我们需要收到的是 S2 序号，但到来的报文却是 S3 打头的，怎么办呢？进入 out_of_order 队列！从这个队列名称就可以看出来，所有乱序的报文都会暂时放在这儿；")]),s._v(" "),t("li",[s._v("用户进程仍然没有调用 recv 来读取 socket，但又过来了我们期望的 S2-S3 报文，它会像第 1 步一样，直接进入 receive 队列。不同的时，由于此时 out_of_order 队列不像第 1 步是空的，所以，引发了接来的第 4 步。")]),s._v(" "),t("li",[s._v("每次向 receive 队列插入报文时都会检查 out_of_order 队列。由于收到 S2-S3 报文后，期待的序号成为了 S3，这样，out_of_order 队列里的唯一报文 S3-S4 报文将会移出本队列而插入到 receive 队列中（这件事由 tcp_ofo_queue 方法完成）。")]),s._v(" "),t("li",[s._v("用户进程开始读取 socket 了。做过应用端编程的同学都知道，先要在进程里分配一块内存，接着调用 read 或者 recv 等方法，把内存的首地址和内存长度传入，再把建立好连接的 socket 也传入。当然，对这个 socket 还可以配置其属性。这里，假定没有设置任何属性，都使用默认值，因此，此时 socket 是阻塞式，它的 SO_RCVLOWAT 是默认的 1。当然，recv 这样的方法还会接收一个 flag 参数，它可以设置为 MSG_WAITALL、MSG_PEEK、MSG_TRUNK 等等，这里我们假定为最常用的 0。")]),s._v(" "),t("li",[s._v("C 库和内核经过层层封装，接收 TCP 消息最终一定会走到 tcp_recvmsg 方法。下面介绍代码细节时，它会是重点。")]),s._v(" "),t("li",[s._v("在 tcp_recvmsg 方法里，会首先锁住 socket。为什么呢？因此 socket 是可以被多进程同时使用的，同时，内核中断也会操作它，而下面的代码都是核心的、操作数据的、有状态的代码，不可以被重入的，锁住后，再有用户进程进来时拿不到锁就要休眠在这了。内核中断看到被锁住后也会做不同的处理。")]),s._v(" "),t("li",[s._v("此时，第 1-4 步已经为 receive 队列里准备好了 3 个报文。最上面的报文是 S1-S2，将它拷贝到用户态内存中。由于第 5 步 flag 参数并没有携带 MSG_PEEK 这样的标志位，因此，再将 S1-S2 报文从 receive 队列的头部移除，从内核态释放掉。反之，MSG_PEEK 标志位会导致 receive 队列不会删除报文。所以，MSG_PEEK 主要用于多进程读取同一套接字的情形。")]),s._v(" "),t("li",[s._v("如第 8 步，拷贝 S2-S3 报文到用户态内存中。当然，执行拷贝前都会检查用户态内存的剩余空间是否足以放下当前这个报文，不足以时会直接返回已经拷贝的字节数。")]),s._v(" "),t("li",[s._v("同上。")]),s._v(" "),t("li",[s._v("receive 队列为空了，此时会先来检查 SO_RCVLOWAT 这个阀值。如果已经拷贝的字节数到现在还小于它，那么可能导致进程会休眠，等待拷贝更多的数据。第 5 步已经说明过了，socket 套接字使用的默认的 SO_RCVLOWAT，也就是 1，这表明，只要读取到报文了，就认为可以返回了。做完这个检查了，再检查 backlog 队列。backlog 队列是进程正在拷贝数据时，网卡收到的报文会进这个队列。此时若 backlog 队列有数据，就顺带处理下。")]),s._v(" "),t("li",[s._v("在本图对应的场景中，backlog 队列是没有数据的，已经拷贝的字节数为 S4-S1，它是大于 1 的，因此，释放第 7 步里加的锁，准备返回用户态了。")]),s._v(" "),t("li",[s._v("用户进程代码开始执行，此时 recv 等方法返回的就是 S4-S1，即从内核拷贝的字节数。")])]),s._v(" "),t("p",[t("strong",[s._v("第二个场景：")])]),s._v(" "),t("p",[s._v("用户进程调用 recv 方法时，连接上没有任何接收并缓存到内核的报文，而 socket 是阻塞的，所以进程睡眠了。然后网卡收到了 TCP 连接上的报文，此时 prequeue 队列开始产生作用。")]),s._v(" "),t("p",[s._v("下图中 tcp_low_latency 为默认的 0，套接字 socket 的 SO_RCVLOWAT 是默认的 1，仍然是阻塞 socket，如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/603001/201704/603001-20170424124515600-1196378187.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("上图的流程可以分为 11 个步骤：")]),s._v(" "),t("ol",[t("li",[s._v("用户进程分配了一块 len 大小的内存，将其传入 recv 这样的函数，同时 socket 参数皆为默认，即阻塞的、SO_RCVLOWAT 为 1。调用接收方法，其中 flags 参数为 0；")]),s._v(" "),t("li",[s._v("C 库和内核最终调用到 tcp_recvmsg 方法来处理；")]),s._v(" "),t("li",[s._v("锁住 socket；")]),s._v(" "),t("li",[s._v("由于此时 receive、prequeue、backlog 队列都是空的，即没有拷贝 1 个字节的消息到用户内存中，而我们的最低要求是拷贝至少 SO_RCVLOWAT 为 1 长度的消息。此时，开始进入阻塞式套接字的等待流程。最长等待时间为 SO_RCVTIMEO 指定的时间；")]),s._v(" "),t("li",[s._v("这个套接字上期望接收的序号也是 S1，此时网卡恰好收到了 S1-S2 的报文，在 tcp_v4_rcv 方法中，通过调用 tcp_prequeue 方法把报文插入到 prequeue 队列中。")]),s._v(" "),t("li",[s._v("插入 prequeue 队列后，此时会接着调用 wake_up_interruptible 方法，唤醒在 socket 上睡眠的进程。")]),s._v(" "),t("li",[s._v("用户进程被唤醒后，重新调用 lock_sock 接管了这个 socket，此后再进来的报文都只能进入 backlog 队列了。")]),s._v(" "),t("li",[s._v("进程醒来后，先去检查 receive 队列，当然仍然是空的；再去检查 prequeue 队列，发现有一个报文 S1-S2，正好是 socket 连接待拷贝的起始序号 S1，于是，从 prequeue 队列中取出这个报文并把内容复制到用户内存中，再释放内核中的这个报文。")]),s._v(" "),t("li",[s._v("目前已经拷贝了 S2-S1 个字节到用户态，检查这个长度是否超过了最低阀值（即 len 和 SO_RCVLOWAT 的最小值）。")]),s._v(" "),t("li",[s._v("由于 SO_RCVLOWAT 使用了默认的 1，所以准备返回用户。此时会顺带再看看 backlog 队列中有没有数据，若有，则检查这个无序的队列中是否有可以直接拷贝给用户的报文。当然，此时是没有的。所以准备返回，释放 socket 锁。")]),s._v(" "),t("li",[s._v("返回用户已经拷贝的字节数。")])]),s._v(" "),t("p",[t("strong",[s._v("第三个场景：")])]),s._v(" "),t("p",[s._v("这个场景中，我们把系统参数 tcp_low_latency 设为 1，socket 上设置了 SO_RCVLOWAT 属性的值。服务器先是收到了 S1-S2 这个报文，但 S2-S1 的长度是小于 SO_RCVLOWAT 的，用户进程调用 recv 方法读套接字时，虽然读到了一些，但没有达到最小阀值，所以进程睡眠了，与此同时，在睡眠前收到的乱序的 S3-S4 包直接进入 backlog 队列。此时先到达了 S2-S3 包，由于没有使用 prequeue 队列，而它起始序号正是下一个待拷贝的值，所以直接拷贝到用户内存中，总共拷贝字节数已满足 SO_RCVLOWAT 的要求！最后在返回用户前把 backlog 队列中 S3-S4 报文也拷贝给用户了。如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/603001/201704/603001-20170424124525522-1523322308.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("上图的流程可以分为 15 个步骤：")]),s._v(" "),t("ol",[t("li",[s._v("内核收到报文 S1-S2，S1 正是这个 socket 连接上待接收的序号，因此，直接将它插入有序的 receive 队列中。")]),s._v(" "),t("li",[s._v("用户进程所处的 linux 操作系统上，将 sysctl 中的 tcp_low_latency 设置为 1。这意味着，这台服务器希望 TCP 进程能够更及时的接收到 TCP 消息。用户调用了 recv 方法接收 socket 上的消息，这个 socket 上设置了 SO_RCVLOWAT 属性为某个值 n，这个 n 是大于 S2-S1，也就是第 1 步收到的报文大小。这里，仍然是阻塞 socket，用户依然是分配了足够大的 len 长度内存以接收 TCP 消息。")]),s._v(" "),t("li",[s._v("通过 tcp_recvmsg 方法来完成接收工作。先锁住 socket，避免并发进程读取同一 socket 的同时，也在告诉内核网络软中断处理到这一 socket 时要有不同行为，如第 6 步。")]),s._v(" "),t("li",[s._v("准备处理内核各个接收队列中的报文。")]),s._v(" "),t("li",[s._v("receive 队列中的有序报文可直接拷贝，在检查到 S2-S1 是小于 len 之后，将报文内容拷贝到用户态内存中。")]),s._v(" "),t("li",[s._v("在第 5 步进行的同时，socket 是被锁住的，这时内核又收到了一个 S3-S4 报文，因此报文直接进入 backlog 队列。注意，这个报文不是有序的，因为此时连接上期待接收序号为 S2。")]),s._v(" "),t("li",[s._v("在第 5 步，拷贝了 S2-S1 个字节到用户内存，它是小于 SO_RCVLOWAT 的，因此，由于 socket 是阻塞型套接字（超时时间在本文中忽略），进程将不得不转入睡眠。转入睡眠之前，还会干一件事，就是处理 backlog 队列里的报文，图 2 的第 4 步介绍过休眠方法 sk_wait_data，它在睡眠前会执行 release_sock 方法，看看是如何实现的：")]),s._v(" "),t("li",[s._v("进程休眠，直到超时或者 receive 队列不为空。")]),s._v(" "),t("li",[s._v("内核接收到了 S2-S3 报文。注意，这里由于打开了 tcp_low_latency 标志位，这个报文是不会进入 prequeue 队列以待进程上下文处理的。")]),s._v(" "),t("li",[s._v("此时，由于 S2 是连接上正要接收的序号，同时，有一个用户进程正在休眠等待接收数据中，且它要等待的数据起始序号正是 S2，于是，这种种条件下，使得这一步同时也是网络软中断执行上下文中，把 S2-S3 报文直接拷贝进用户内存。")]),s._v(" "),t("li",[s._v("上文介绍 tcp_data_queue 方法时大家可以看到，每处理完 1 个有序报文（无论是拷贝到 receive 队列还是直接复制到用户内存）后都会检查 out_of_order 队列，看看是否有报文可以处理。那么，S3-S4 报文恰好是待处理的，于是拷贝进用户内存。然后唤醒用户进程。")]),s._v(" "),t("li",[s._v("用户进程被唤醒了，当然唤醒后会先来拿到 socket 锁。以下执行又在进程上下文中了。")]),s._v(" "),t("li",[s._v("此时会检查已拷贝的字节数是否大于 SO_RCVLOWAT，以及 backlog 队列是否为空。两者皆满足，准备返回。")]),s._v(" "),t("li",[s._v("释放 socket 锁，退出 tcp_recvmsg 方法。")]),s._v(" "),t("li",[s._v("返回用户已经复制的字节数 S4-S1")])]),s._v(" "),t("p",[s._v("MSG_PEEK")]),s._v(" "),t("p",[s._v("MSG_WAITALL")]),s._v(" "),t("p",[s._v("MSG_TRUNK")]),s._v(" "),t("p",[s._v("SO_RCVLOWAT")]),s._v(" "),t("h2",{attrs:{id:"_4、关闭连接-close-shutdown"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、关闭连接-close-shutdown"}},[s._v("#")]),s._v(" 4、关闭连接 close/shutdown")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("int close(int fd);\nint shutdown(int sockfd, int how);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("关闭 TCP 连接时可以考虑下面几个问题：")]),s._v(" "),t("p",[s._v("1、当 socket 被多进程共享时，关闭连接时有何区别？")]),s._v(" "),t("p",[s._v("2、关连接时，若连接上有来自对端的还未处理的消息，会怎么处理？")]),s._v(" "),t("p",[s._v("3、关连接时，若连接上有本进程待发送却未来得及发送出的消息，又会怎么处理？")]),s._v(" "),t("p",[s._v("4、so_linger 这个功能的用处在哪？")]),s._v(" "),t("p",[s._v("5、对于监听 socket 执行关闭，和对处于 ESTABLISH 这种通讯的 socket 执行关闭，有何区别？")]),s._v(" "),t("p",[s._v("看看 close 与 shutdown 这两个系统调用对应的内核函数：（参见 unistd.h 文件）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#define __NR_close                               3\n__SYSCALL(__NR_close, sys_close)\n#define __NR_shutdown                           48\n__SYSCALL(__NR_shutdown, sys_shutdown)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/603001/201512/603001-20151222190416765-1850379916.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("sys_shutdown 与多进程无关，而 sys_close 则不然，上图中可以看到，层层封装调用中有一个方法叫 fput，它有一个引用计数，记录这个 socket 被引用了多少次。在说明多进程调用 close 的区别前，先在代码上简单看下 close 是怎么调用的，对内核代码没兴趣的同学可以仅看 fput 方法：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("void fastcall fput(struct file *file)\n{\n    if (atomic_dec_and_test(&file->f_count))//检查引用计数，直到为0才会真正去关闭socket\n        __fput(file);\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("当这个 socket 的引用计数 f_count 不为 0 时，是不会触发到真正关闭 TCP 连接的 tcp_close 方法的。")]),s._v(" "),t("p",[s._v("如果使用 fork 创建子进程，子进程会复制父进程打开的文件描述符，会导致该文件描述符的引用计数增加，因此，多进程中共享的同一个 socket 必须都调用了 close 才会真正的关闭连接。")]),s._v(" "),t("p",[s._v("TCP 连接是一种双工的连接，何谓双工？即连接双方可以并行的发送或者接收消息，而无须顾及对方此时到底在发还是收消息。这样，关闭连接时，就存在 3 种情形：")]),s._v(" "),t("ol",[t("li",[s._v("完全关闭连接；")]),s._v(" "),t("li",[s._v("关闭发送消息的功能；")]),s._v(" "),t("li",[s._v("关闭接收消息的功能。")])]),s._v(" "),t("p",[s._v("其中，后两者就叫做半关闭，由 shutdown 实现（所以 shutdown 多出一个参数正是控制关闭发送或者关闭接收），前者由 close 实现。")]),s._v(" "),t("p",[s._v("TCP 双工的这个特性使得连接的正常关闭需要四次握手，其含义为：主动端关闭了发送的功能；被动端认可；被动端也关闭了发送的功能；主动端认可。")]),s._v(" "),t("p",[s._v("但还存在程序异常的情形，此时，则通过异常的那端发送 RST 复位报文通知另一端关闭连接。")]),s._v(" "),t("p",[s._v("下图是 close 的主要流程：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/603001/201512/603001-20151223143116656-715541890.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("这个图稍复杂，这是因为它覆盖了关闭监听句柄、关闭普通连接、关闭设置了 SO_LINGER 的连接这三种主要场景。")]),s._v(" "),t("p",[s._v("1）关闭监听句柄")]),s._v(" "),t("p",[s._v("先从最右边的分支说说关闭监听 socket 的那些事。用于 listen 的监听句柄也是使用 close 关闭，关闭这样的句柄含义当然很不同，它本身并不对应着某个 TCP 连接，但是，附着在它之上的却可能有半连接（half-open）。")]),s._v(" "),t("p",[s._v("参照上图，close 首先会移除 keepalive 定时器。keepalive 功能常用于服务器上，防止僵死、异常退出的客户端占用服务器连接资源。移除此定时器后，若 ESTABLISH 状态的 TCP 连接在 tcp_keepalive_time 时间（如服务器上常配置为 2 小时）内没有通讯，服务器就会主动关闭连接。")]),s._v(" "),t("p",[s._v("接下来，关闭每一个半连接。如何关闭半连接？这时当然不能发 FIN 包（即正常的四次握手关闭连接），而是会发送 RST 复位标志去关闭请求。处理完所有半打开的连接 close 的任务就基本完成了。")]),s._v(" "),t("p",[s._v("2）关闭普通 ESTABLISH 状态的连接（未设置 so_linger）")]),s._v(" "),t("p",[s._v("首先检查是否有接收到却未处理的消息。")]),s._v(" "),t("p",[s._v("如果 close 调用时存在收到远端的、没有处理的消息，这时根据 close 这一行为的意义，是要丢弃这些消息的。但丢弃消息后，意味着连接远端误以为发出的消息已经被本机收到处理了（因为 ACK 包确认过了），但实际上确是收到未处理，此时也不能使用正常的四次握手关闭，而是会向远端发送一个 RST 非正常复位关闭连接。")]),s._v(" "),t("p",[s._v("如果此时没有未处理的消息，那么进入发送 FIN 来关闭连接的阶段。")]),s._v(" "),t("p",[s._v("这时，先看看是否有待发送的消息。发消息时要计算滑动窗口、拥塞窗口、Nagle 算法等，这些因素可能导致消息会延迟发送的。如果有待发送的消息，那么要尽力保证这些消息都发出去的。所以，会在最后一个报文中加入 FIN 标志，同时，关闭用于减少网络中小报文的 angle 算法，向连接对端发送消息。如果没有待发送的消息，则构造一个报文，仅含有 FIN 标志位，发送出去关闭连接。")]),s._v(" "),t("p",[s._v("3）使用了 so_linger 的连接")]),s._v(" "),t("p",[s._v("首先要澄清，为何要有 so_linger 这个功能？因为我们可能有强可靠性的需求，也就是说，必须确保发出的消息、FIN 都被对方收到。例如，有些响应发出后调用 close 关闭连接，接下来就会关闭进程。如果 close 时发出的消息其实丢失在网络中了，那么，进程突然退出时连接上发出的 RST 就可能被对方收到，而且，之前丢失的消息不会有重发来保障可靠性了。")]),s._v(" "),t("p",[s._v("so_linger 用来保证对方收到了 close 时发出的消息，即，至少需要对方通过发送 ACK 且到达本机。")]),s._v(" "),t("p",[s._v("怎么保证呢？等待！close 会阻塞住进程，直到确认对方收到了消息再返回。然而，网络环境又得复杂的，如果对方总是不响应怎么办？所以还需要 l_linger 这个超时时间，控制 close 阻塞进程的最长时间。注意，务必慎用 so_linger，它会在不经意间降低你程序中代码的执行速度（close 的阻塞）。")]),s._v(" "),t("p",[s._v("所以，当这个进程设置了 so_linger 后，前半段依然没变化。检查是否有未读消息，若有则发 RST 关连接，不会触发等待。接下来检查是否有未发送的消息时与第 2 种情形一致，设好 FIN 后关闭 angle 算法发出。接下来，则会设置最大等待时间 l_linger，然后开始将进程睡眠，直到确认对方收到后才会醒来，将控制权交还给用户进程。")]),s._v(" "),t("p",[s._v("这里需要注意，so_linger 不是确保连接被四次握手关闭再使 close 返回，而只是保证我方发出的消息都已被对方收到。例如，若对方程序写的有问题，当它收到 FIN 进入 CLOSE_WAIT 状态，却一直不调用 close 发出 FIN，此时，对方仍然会通过 ACK 确认，我方收到了 ACK 进入 FIN_WAIT2 状态，但没收到对方的 FIN，我方的 close 调用却不会再阻塞，close 直接返回，控制权交还用户进程。")]),s._v(" "),t("p",[s._v("从上图可知，so_linger 还有个偏门的用法，若 l_linger 超时时间竟被设为 0，则不会触发 FIN 包的发送，而是直接 RST 复位关闭连接。我个人认为，这种玩法确没多大用处。")]),s._v(" "),t("p",[s._v("最后做个总结。调用 close 时，可能导致发送 RST 复位关闭连接，例如有未读消息、打开 so_linger 但 l_linger 却为 0、关闭监听句柄时半打开的连接。更多时会导致发 FIN 来四次握手关闭连接，但打开 so_linger 可能导致 close 阻塞住等待着对方的 ACK 表明收到了消息。")]),s._v(" "),t("p",[s._v("再看看较为简单的 shutdown 流程：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/603001/201512/603001-20151223155252202-2052365547.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("1）shutdown 可携带一个参数，取值有 3 个，分别意味着：只关闭读、只关闭写、同时关闭读写。")]),s._v(" "),t("p",[s._v("对于监听句柄，如果参数为关闭写，显然没有任何意义。但关闭读从某方面来说是有意义的，例如不再接受新的连接。看看最右边蓝色分支，针对监听句柄，若参数为关闭写，则不做任何事；若为关闭读，则把端口上的半打开连接使用 RST 关闭，与 close 如出一辙。")]),s._v(" "),t("p",[s._v("2）若 shutdown 的是半打开的连接，则发出 RST 来关闭连接。")]),s._v(" "),t("p",[s._v("3）若 shutdown 的是正常连接，那么关闭读其实与对端是没有关系的。只要本机把接收掉的消息丢掉，其实就等价于关闭读了，并不一定非要对端关闭写的。实际上，shutdown 正是这么干的。若参数中的标志位含有关闭读，只是标识下，当我们调用 read 等方法时这个标识就起作用了，会使进程读不到任何数据。")]),s._v(" "),t("p",[s._v("4）若参数中有标志位为关闭写，那么下面做的事与 close 是一致的：发出 FIN 包，告诉对方，本机不会再发消息了。")]),s._v(" "),t("p",[t("strong",[s._v("参考文档：")])]),s._v(" "),t("p",[s._v("http://blog.csdn.net/russell_tao/article/details/9111769")]),s._v(" "),t("p",[s._v("http://blog.csdn.net/russell_tao/article/details/9370109")]),s._v(" "),t("p",[s._v("http://blog.csdn.net/russell_tao/article/details/9950615")]),s._v(" "),t("p",[s._v("http://blog.csdn.net/russell_tao/article/details/13092727")]),s._v(" "),t("p",[s._v("全文完")]),s._v(" "),t("p",[s._v("本文由 "),t("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[s._v("简悦 SimpRead"),t("OutboundLink")],1),s._v(" 优化，用以提升阅读体验")]),s._v(" "),t("p",[s._v("使用了 全新的简悦词法分析引擎 beta，"),t("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击查看"),t("OutboundLink")],1),s._v("详细说明")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/chenny7/p/5067826.html#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[s._v("高性能网络编程"),t("OutboundLink")],1),t("a",{attrs:{href:"https://www.cnblogs.com/chenny7/p/5067826.html#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[s._v("1、建立连接 accept"),t("OutboundLink")],1),t("a",{attrs:{href:"https://www.cnblogs.com/chenny7/p/5067826.html#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[s._v("2、消息发送 send"),t("OutboundLink")],1),t("a",{attrs:{href:"https://www.cnblogs.com/chenny7/p/5067826.html#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[s._v("3、消息接收 recv"),t("OutboundLink")],1),t("a",{attrs:{href:"https://www.cnblogs.com/chenny7/p/5067826.html#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[s._v("4、关闭连接 close/shutdown"),t("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=_.exports}}]);