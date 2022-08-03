(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{457:function(e,t,r){"use strict";r.r(t);var o=r(42),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("前面已整理过一篇**"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/jfqKJprfeWrwqkgLr7wZ6w",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于 LSMTree 的开源单机存储引擎"),r("OutboundLink")],1),e._v("**。本篇收集几个 B-Tree/B+Tree 的开源实现。")]),e._v(" "),r("h3",{attrs:{id:"lmdb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lmdb"}},[e._v("#")]),e._v(" "),r("strong",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/LMDB/lmdb",target:"_blank",rel:"noopener noreferrer"}},[e._v("LMDB"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("LMDB（Lightning Memory-Mapped Database）是一个 C 语言实现的 B+Tree 结构的 key-value 存储引擎。它支持 MVCC、支持事务（ACID）、支持一写多读并发执行（读和写互不阻塞）。")]),e._v(" "),r("p",[e._v("我觉得 LMDB 设计上最大的特点，或者说 “槽点” 是：没有自己管理内存；而是直接使用 mmap，将内存 / 缓存的管理交给操作系统。")]),e._v(" "),r("p",[e._v("重点是，这竟然还成为了 LMDB 宣传的 “亮点”：")]),e._v(" "),r("p",[e._v("With memory-mapped files, it has the read performance of a pure in-memory database while retaining the persistence of standard disk-based databases.")]),e._v(" "),r("p",[e._v("有点想吐槽……")]),e._v(" "),r("p",[e._v("不用自己实现内存（缓存）管理，好处是简化了存储引擎的实现。根据经验，如果数据量和内存大小接近，大部分请求都能命中 page cache，使用 mmap 似乎问题不大。MongoDB 最初的存储引擎就是采用了类似的方式。")]),e._v(" "),r("p",[e._v("但是如果数据量远超过内存大小（很多场景都是如此），那么海量的 page cache miss 造成的缺页、换页可能会是性能灾难，并且你几乎做不了任何控制和优化，毕竟你把一切都交给了操作系统。")]),e._v(" "),r("p",[e._v("当然，LMDB 仍然非常经典，代码不长，资料也不少，就算不看代码，看看相关文档也好："),r("strong",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//symas.com/lmdb/technical/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LMDB TECHNICAL INFORMATION"),r("OutboundLink")],1)]),e._v("。")]),e._v(" "),r("h3",{attrs:{id:"boltdb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#boltdb"}},[e._v("#")]),e._v(" "),r("strong",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/etcd-io/bbolt",target:"_blank",rel:"noopener noreferrer"}},[e._v("BoltDB"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("BoltDB 是参考 LMDB，并用 Go 语言实现的存储引擎。业界使用 BoltDB 的开源项目主要有 "),r("strong",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/etcd-io/etcd",target:"_blank",rel:"noopener noreferrer"}},[e._v("etcd"),r("OutboundLink")],1)]),e._v("、"),r("strong",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/hashicorp/consul",target:"_blank",rel:"noopener noreferrer"}},[e._v("consul"),r("OutboundLink")],1)]),e._v(" 等。")]),e._v(" "),r("p",[e._v("BoltDB 源码比较清晰，没有太多奇技淫巧，就是经典的 B+Tree 实现。性能上可能不够突出，不过胜在简单可靠。")]),e._v(" "),r("p",[e._v("目前，BoltDB 的原作者已经 “放弃治疗” 了，现在这个项目由 etcd 团队维护一个 fork 分支。")]),e._v(" "),r("h3",{attrs:{id:"berkeleydb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#berkeleydb"}},[e._v("#")]),e._v(" "),r("strong",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.oracle.com/database/technologies/related/berkeleydb-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BerkeleyDB"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("不同于前面提到的 LMDB 和 BoltDB，BerkeleyDB 是一个 B-Tree 结构的存储引擎。关于 B-Tree 和 B+Tree 的差别，网上的资料很多，这里就不赘述。")]),e._v(" "),r("p",[e._v("BerkeleyDB 是一个比较历史悠久的项目。BerkeleyDB 的前身是伯克利加州大学为了移除受 AT&T 限制的代码，从 BSD 4.3 到 4.4 时所改写的软件。目前的代码由 Oracle 维护。")]),e._v(" "),r("h3",{attrs:{id:"wiredtiger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiredtiger"}},[e._v("#")]),e._v(" "),r("strong",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/wiredtiger/wiredtiger",target:"_blank",rel:"noopener noreferrer"}},[e._v("WiredTiger"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("WiredTiger 一个 B-Tree 存储引擎。2014 年，WiredTiger 被当时崛起的文档型数据库 MongoDB 收购。MongoDB 3.2 之后 WiredTiger 成为 MongoDB 的默认存储引擎。")]),e._v(" "),r("h3",{attrs:{id:"其它"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[e._v("#")]),e._v(" "),r("strong",[e._v("其它")])]),e._v(" "),r("p",[e._v("MySQL 的官方存储引擎 "),r("strong",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/mysql/mysql-server/tree/8.0/storage/innobase",target:"_blank",rel:"noopener noreferrer"}},[e._v("InnoDB"),r("OutboundLink")],1)]),e._v(" 和 "),r("strong",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/postgres/postgres/tree/master/src/backend/storage",target:"_blank",rel:"noopener noreferrer"}},[e._v("PostgreSQL 的存储引擎"),r("OutboundLink")],1)]),e._v(" 也是优秀的 B+Tree 和 B-Tree 存储引擎。不过，因为关系数据库的复杂性，这两个存储引擎也比上面提到的几个存储引擎复杂不少。")]),e._v(" "),r("p",[e._v("全文完")]),e._v(" "),r("p",[e._v("本文由 "),r("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[e._v("简悦 SimpRead"),r("OutboundLink")],1),e._v(" 优化，用以提升阅读体验")]),e._v(" "),r("p",[e._v("使用了 全新的简悦词法分析引擎 beta，"),r("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看"),r("OutboundLink")],1),e._v("详细说明")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/406755099?utm_source=weibo&utm_medium=social&utm_oi=28462207205376&utm_content=snapshot#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("LMDB"),r("OutboundLink")],1),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/406755099?utm_source=weibo&utm_medium=social&utm_oi=28462207205376&utm_content=snapshot#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("BoltDB"),r("OutboundLink")],1),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/406755099?utm_source=weibo&utm_medium=social&utm_oi=28462207205376&utm_content=snapshot#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("BerkeleyDB"),r("OutboundLink")],1),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/406755099?utm_source=weibo&utm_medium=social&utm_oi=28462207205376&utm_content=snapshot#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[e._v("WiredTiger"),r("OutboundLink")],1),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/406755099?utm_source=weibo&utm_medium=social&utm_oi=28462207205376&utm_content=snapshot#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[e._v("其它"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);