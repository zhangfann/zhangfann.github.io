(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{452:function(e,t,r){"use strict";r.r(t);var o=r(42),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[r("img",{attrs:{src:"https://pic1.zhimg.com/v2-605fc4d9d76c3340f116ab59c3a5cbdf_xs.jpg?source=1940ef5c",alt:"img"}})]),e._v(" "),r("p",[e._v("Jacenhu")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.zhihu.com/zvideo/1314558391004463104",target:"_blank",rel:"noopener noreferrer"}},[e._v("一名分布式存储工程师的技能树是怎样的"),r("img",{attrs:{src:"https://pica.zhimg.com/v2-605fc4d9d76c3340f116ab59c3a5cbdf_s.jpg?source=12a79843",alt:"img"}}),e._v("Jacenhu 的视频 · 1998 播放"),r("OutboundLink")],1),e._v("我是做云存储开发的，我大概列举一下，抛砖引玉。下面的内容为我实践过的，或者准备实践的。"),r("img",{attrs:{src:"https://pic1.zhimg.com/50/v2-048894d9d168721f58199def74865c31_720w.jpg?source=1940ef5c",alt:"img"}}),e._v("一、计算机通用基础（1）编程语言主要是 C/C++，推荐看：《C++ Primer》、《Effective c++》、《Effective STL》、《STL 源码剖析》、《深度探索 C++ 对象模型》等再掌握几个脚本语言更佳：Shell、Python（2）数据结构与算法推荐看：《数据结构与算法分析》，可以通过 Leetcode 平台练习。（3）计算机网络推荐看：《TCP IP 详解卷一协议》、《UNIX 环境高级编程》、《UNIX 网络编程卷一》、《Linux 多线程服务端编程》（4）操作系统推荐看：《现代操作系统》、《深度理解计算机系统》熟悉 LinuxIO 协议栈"),r("img",{attrs:{src:"https://pica.zhimg.com/50/v2-adab4e1eee6b9a970ccf355fb5e87d46_720w.jpg?source=1940ef5c",alt:"img"}}),e._v("（5）设计模式推荐看：《设计模式：可复用面向对象软件的基础》（6）分布式系统推荐学习分布式系统入门课程：MIT 6.824: Distributed Systems官网："),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//pdos.csail.mit.edu/6.824/schedule.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("6.824 Schedule: Spring 2020pdos.csail.mit.edu/6.824/schedule.html"),r("OutboundLink")],1),e._v("油管视频："),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.youtube.com/channel/UC_7WrbZTCODu1o_kfUMq88g",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.youtube.com/channel/UC_7WrbZTCODu1o_kfUMq88gwww.youtube.com/channel/UC_7WrbZTCODu1o_kfUMq88g"),r("OutboundLink")],1),e._v("B 站："),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.bilibili.com/video/av87684880",target:"_blank",rel:"noopener noreferrer"}},[e._v("2020 MIT 6.824 分布式系统_哔哩哔哩 (゜ - ゜) つロ 干杯~-bilibiliwww.bilibili.com/video/av87684880"),r("img",{attrs:{src:"https://pic4.zhimg.com/v2-e0917ddcf9f0d0a93e7ef769b6347a8b_180x120.jpg",alt:"img"}}),r("OutboundLink")],1),e._v("二、存储业务知识不同存储服务：文件、块、对象数据一致性：强一致性、最终一致性、弱一致性模型数据可靠性、冗余策略：多副本（直接复制、链式复制）、纠删码分布式数据分布：一致性 Hash、Crush、DHT 环容错：故障检测（如心跳）、故障恢复（如重构）消息并发处理或消息时序：lamport timestamp、vector clock、version vector 等分布式事务：CAP 理论、两阶段提交（2pc）、三阶段提交（3pc）等集群管理：节点间状态同步等数据压缩：重删压缩Qos快照垃圾回收三、存储新介质 / 技术（1）RDMA 网络RDMA(Remote Direct Memory Access) 技术全称远程直接数据存取，就是为了解决网络传输中服务器端数据处理的延迟而产生的。RDMA 通过网络把资料直接传入计算机的存储区，将数据从一个系统快速移动到远程系统存储器中，而不对操作系统造成任何影响，这样就不需要用到多少计算机的处理功能。它消除了外部存储器复制和上下文切换的开销，因而能解放内存带宽和 CPU 周期用于改进应用系统性能。（2）NVME 非易失存储NVMe，全称为 Non-Volatile Memory express，中文名称为 “非易失性内存主机控制器接口规范”。NVME 的三个优点：低延迟、高 IOPS、低功耗。在传统的 AHCI 规范下，硬盘数据需要经主板南桥再到 CPU，而在 NVMe 规范下，通过 PCI-E 通道与 CPU 直连，可以免去 SATA 接口的外置控制器（PCH）与 CPU 通信所带来的延时，效率会更高；NVMe 规范可以把最大队列深度从 32 提升到 64000，SSD 的 IOPS 能力也会得到大幅提升；NVMe 规范加入了自动功耗状态切换和动态能耗管理功能，能够显著增加移动设备的续航能力。（3）Optane一种超高速内存新技术，兼容 NVMe 存储协议。（4）SPDKSPDK 的目标是通过使用 Intel 的网络，处理，存储技术，将固态存储介质出色的功效发挥到极致。相对于传统 IO 方式，SPDK 运用了两项关键技术：UIO 和 pooling。（5）DPDKDPDK 使用了轮询 (polling) 而不是中断来处理数据包。在收到数据包时，经 DPDK 重载的网卡驱动不会通过中断通知 CPU，而是直接将数据包存入内存，交付应用层软件通过 DPDK 提供的接口来直接处理，这样节省了大量的 CPU 中断时间和内存拷贝时间。四、相关书籍《大话存储》《大规模分布式存储系统：原理解析与架构实战》《Ceph 设计原理与实现》《数据密集型应用系统设计》《Paxos 到 Zookeeper：分布式一致性原理与实践》《分布式系统：概念与设计》《分布式系统：原理与范型》五、相关论文可以看看工业届和学术界的（1）工业界的论文Google：GFS、MapReduce、BigTable；Amazon：DynamoDB（2）Lamport 的论文"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//lamport.azurewebsites.net/pubs/pubs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Writings of Leslie Lamportlamport.azurewebsites.net/pubs/pubs.html"),r("OutboundLink")],1),e._v("六、相关会议这里只列举一些USENIX FAST，USENIX ATC，SOSP，OSDI，ASPLOS，Eurosys 等。七、相关开源项目内存数据库 redis；单机存储 rocksdb、leveldb；分布式存储系统 Ceph 等。"),r("strong",[e._v("码字不易，如果我的回答或者文章有价值，记得点赞哦。也欢迎关注我，共同学习和交流。")]),r("a",{attrs:{href:"https://www.zhihu.com/people/jacenhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jacenhu 的知乎主页www.zhihu.com/people/jacenhu"),r("img",{attrs:{src:"https://pic4.zhimg.com/v2-605fc4d9d76c3340f116ab59c3a5cbdf_ipico.jpg",alt:"img"}}),r("OutboundLink")],1),r("strong",[e._v("我的其他知乎文章")]),r("a",{attrs:{href:"https://www.zhihu.com/answer/1498431640",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jacenhu：如何正确通过 C++ Primer 学习 C++？1077 赞同 · 25 评论回答"),r("img",{attrs:{src:"https://pic2.zhimg.com/v2-feb4e1b7a054a1ba6b68751f133f232a_720w.jpg",alt:"img"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[r("img",{attrs:{src:"https://pic2.zhimg.com/de35a33054b5bc745b3f8a4b11d01756_xs.jpg?source=1940ef5c",alt:"img"}})]),e._v(" "),r("p",[e._v("dongmao zhang")]),e._v(" "),r("p",[e._v("分布式存储工程师显然要关注分布式和存储这两个方面**分布式："),r("strong",[e._v("Lamport 大师的论文读过没？，什么是 lamport 锁？Paxos 如果选举？CAP 原理到底怎么玩？一致性 hash 怎么搞？AmazonDynamoDB 那篇著名的论文只是要读过．分布式系统里面 Member ship 怎么管理？什么是 gossip protocol?MapReduce 好歹知道一下, google 的 MapReduce 论文总得仔细读读，要不然连个 word count 都不会，都不好跟人打招呼．\n分布式系统的历史和现状多了解？chord, kademlia, hadoop, corosync, ceph, cassandra,伊利诺斯大学有个分布式在线课程最后会实现一个分布式的 k-v 数据库，课程里有 lecture，也有作业还有 TA 帮助你们，给回答问题，强烈推荐一点儿参考资料:\n课程：\n"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.coursera.org/course/cloudcomputing",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.coursera.org/course/cloudcomputing"),r("OutboundLink")],1),e._v("\n论文:\npaxos 论文: "),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//research.microsoft.com/en-us/um/people/lamport/pubs/paxos-simple.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://research.microsoft.com/en-us/um/people/lamport/pubs/paxos-simple.pdf"),r("OutboundLink")],1),e._v("dynamodb 论文:"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf"),r("OutboundLink")],1),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//citeseerx.ist.psu.edu/viewdoc/download%3Fdoi%3D10.1.1.37.767%26rep%3Drep1%26type%3Dpdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.37.767&rep=rep1&type=pdf"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/kevinxhuang/awesome-distributed-systems",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub - kevinxhuang/awesome-distributed-systems: A curated list of awesome distributed systems books, papers, resources and shiny things."),r("OutboundLink")],1),e._v("\n这个总结的也很好．别忘了，还有存储")]),e._v("存储：**基本常用的数据结构总要熟悉吧，btree 啊，skiplist，LSM 啊操作系统原理总要懂的一些的，什么是 inode，什么是 page cache, 什么是 elevator 算法，什么是 superblock, bio, 什么是 plug 什么是 unplug，这些要是不明白，maillist 里面说什么都很难理解。推荐 Understand Linux Kernel 那本书吧．理解硬盘原理，知道硬盘有多慢，知道写不同的 sector 的时候不是原子的，理解 transaction介绍文件系统的书少，但是介绍数据库的书多，基本原理都差不多，都是 btree, lsm,　transcation，还有各种 allocator 的概念乱飞．现在在单机用的存储, ext2(这个代码简单，也没有 journal), sqlite3, rocksdb还特别推荐这篇文章 "),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//coding-geek.com/how-databases-work/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How does a relational database work - Coding Geek"),r("OutboundLink")],1),e._v("， 虽然是介绍数据库的，但是底层的原理都很像，建议一读。\n又一点参考资料:stanford 的数据库原理课程：\n"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//web.stanford.edu/class/cs245/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CS 245 Database System Principles :: Main"),r("OutboundLink")],1),e._v("对应数据库的 text book:"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//product.dangdang.com/20736063.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("数据库系统实现 （英文版 第 2 版）"),r("OutboundLink")],1),e._v("，这本书是影印版，也有翻译的，但还是推荐读原文，看懂还是不成问题的一个德语的课程，不过 slide 都是英文的\n"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.informatik.hu-berlin.de/de/forschung/gebiete/wbi/teaching/archive/ws1213/vl_dbs2",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.informatik.hu-berlin.de/de/forschung/gebiete/wbi/teaching/archive/ws1213/vl_dbs2"),r("OutboundLink")],1),e._v("sqlite 的 rollback mode 的实现\n"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.sqlite.org/atomiccommit.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Atomic Commit In SQLite"),r("OutboundLink")],1),e._v("\nsqlite 的 WAL 的实现\n"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//www.sqlite.org/wal.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Write-Ahead Logging"),r("OutboundLink")],1),e._v("理解 Linux 内核\n"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//gauss.ececs.uc.edu/Courses/c4022/code/memory/understanding.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://gauss.ececs.uc.edu/Courses/c4022/code/memory/understanding.pdf"),r("OutboundLink")],1),r("strong",[e._v("语言")]),e._v("RocksDB C++\nCeph C++Hadoop JavaCanssandra JavaRedis CInfluxDB Golang\n看你做什么项目了，这些主流语言总得会一样.大规模的分布式系统总要部署运维自动化测试什么的，一些胶水语言不可少，\nBash, Python 能大大提高工作效率需要大数据分析用户行为？需要大数据预测硬盘什么时候坏？我用的是 Spark 做数据分析，这时候还需要 Python.有时候需要写一个 Proxy 做流量清理，或者 cache 一些请求，减少存储集群本身的压力，那 openresty 是好帮手，所以你需要 Lua. 　或者 Golang 也是一个好选择．")])])}),[],!1,null,null,null);t.default=a.exports}}]);