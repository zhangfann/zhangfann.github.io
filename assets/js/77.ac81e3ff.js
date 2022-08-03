(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{460:function(e,_,v){"use strict";v.r(_);var r=v(42),t=Object(r.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("原创 果冻虾仁 [编程往事](javascript:void(0)😉 "),v("em",[e._v("前天")])]),e._v(" "),v("p",[e._v("收录于话题")]),e._v(" "),v("p",[e._v("#C++27个内容")]),e._v(" "),v("p",[e._v("#并发编程5个内容")]),e._v(" "),v("p",[e._v("#STL1个内容")]),e._v(" "),v("p",[e._v("#线程安全2个内容")]),e._v(" "),v("p",[e._v("众所周知，STL容器不是线程安全的。对于vector，即使写方（生产者）是单线程写入，但是并发读的时候，由于潜在的内存重新申请和对象复制问题，会导致读方（消费者）的迭代器失效。实际表现也就是招致了core dump。另外一种情况，如果是多个写方，并发的"),v("code",[e._v("push_back()")]),e._v("，也会导致core dump。")]),e._v(" "),v("h2",{attrs:{id:"解法一"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解法一"}},[e._v("#")]),e._v(" 解法一")]),e._v(" "),v("p",[e._v("加锁是一种解决方案，比如互斥锁"),v("code",[e._v("std::mutex")]),e._v("。但是加"),v("code",[e._v("std::mutex")]),e._v("确实性能较差。对于多读少写的场景可以用读写锁（也叫共享独占锁）来缓解。比如C++17引入了"),v("code",[e._v("std::shared_mutex")]),e._v(" 。更多锁的种类可以阅读我之前写的这篇文章：")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NDIyMjI3OQ==&mid=2649002539&idx=1&sn=b0cd8b1d1e471be565168b71458863e4&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何理解互斥锁、条件变量、读写锁以及自旋锁？"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("当然本文的目的自然不是自我重复再次介绍一次锁的使用，请继续阅读解法二！")]),e._v(" "),v("h2",{attrs:{id:"解法二"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解法二"}},[e._v("#")]),e._v(" 解法二")]),e._v(" "),v("p",[e._v("更多的时候，其实可以通过固定vector的大小，避免动态扩容（无push_back）来做到lock-free！")]),e._v(" "),v("p",[e._v("即在开始并发读写之前（比如初始化）的时候，给vector设置好大小。")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("struct Data {\n...\n};\nvector<Data> v;\nv.resize(1000);\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br")])]),v("p",[e._v("注意是"),v("code",[e._v("resize()")]),e._v("，不是"),v("code",[e._v("reserve()")]),e._v("！")]),e._v(" "),v("p",[e._v("可能大家平时用"),v("code",[e._v("reserve()")]),e._v("比较多，顾名思义，reserve就是预留内存。为的是避免内存重新申请以及容器内对象的拷贝。说白了，"),v("code",[e._v("reserve()")]),e._v("是给"),v("code",[e._v("push_back()")]),e._v("准备的！")]),e._v(" "),v("p",[e._v("而resize除了预留内存以外，还会调用容器元素的构造函数，不仅分配了N个对象的内存，还会构造N个对象。从这个层面上来说，"),v("code",[e._v("resize()")]),e._v("在时间效率上是比"),v("code",[e._v("reserve()")]),e._v("低的。但是在多线程的场景下，用resize再合适不过。")]),e._v(" "),v("p",[e._v("你可以resize好N个对象，多线程不管是读还是写，都是通过容器的下标访问"),v("code",[e._v("operator[]")]),e._v("来访问元素，不要"),v("code",[e._v("push_back()")]),e._v("新元素。所谓的『写操作』在这里不是插入新元素，而是修改旧元素。")]),e._v(" "),v("p",[e._v("如果N的最大个数是可以预期的就直接设置就好，如果没办法预期就再把vector搞成ring buffer（环形队列）来缓解压力。")]),e._v(" "),v("p",[e._v("可以给元素类加上成员变量标记当前的读写状态、是否被消费等等。")]),e._v(" "),v("p",[e._v("当然，你会说，如果B，C，D，E，F这个5个线程是等价的，要不停消费vector中的元素，会造成重复消费不？")]),e._v(" "),v("p",[e._v("当然会。你可以把队列头的下标定义成原子变量（"),v("code",[e._v("std::atomic")]),e._v("），尽管原子变量也需要做线程同步，但是比一般的锁开销要小很多啦。")]),e._v(" "),v("p",[e._v("如果你想连原子变量也不用，有没有办法呢？有啊。那就给B，C，D，E，F分配不同的消费队列啊。比如当前有5个读线程，那么每个线程就消费下标对5取模之后的某个固定结果的下标。比如：")]),e._v(" "),v("ul",[v("li",[e._v("B消费：0、5、10、15、……")]),e._v(" "),v("li",[e._v("C消费：1、6、11、16、……")]),e._v(" "),v("li",[e._v("D消费：2、7、12、17、……")]),e._v(" "),v("li",[e._v("E消费：3、8、13、18、……")]),e._v(" "),v("li",[e._v("F消费：4、9、14、19、……")])]),e._v(" "),v("p",[e._v("每个读线程各自维护自己当前消费的最新下标。")]),e._v(" "),v("p",[e._v("这样做有啥问题没？也有，就是可能会导致不同的线程繁忙和等待的情况差异巨大：忙的忙死，闲的闲死。具体场景具体分析，总之，无论如何要控制住。不要让一个任务hang住整个线程。")]),e._v(" "),v("p",[e._v("vector是顺序容器，STL中还有一类关联容器其线程安全问题也不容小觑。比如map、unordered_map。")]),e._v(" "),v("p",[e._v("我们可能会有这样一种场景：在并发环境下，收集一些Key-Value，存储在某一个公共的容器中。这里也谈一下不用锁的方案，当然做不到放之四海皆准。它有一些限制条件，只能看是否满足你的需要了。")]),e._v(" "),v("p",[e._v("当有多个写线程对情况下，并发地插入 map/unordered_map都会引发core dump。对此，在某些场景下也可以避免加锁：如果全量的key有办法在并发之前就能拿到的，那么就对这个map，提前做一下insert。并发环境中如果只是修改value，而不是插入新key就不会core dump！不过如果你没办法保证多个写线程不会同时修改同一个key的value，那么可能存在value的覆盖。无法保证这点时，还是需要加锁。不过可以对key采取某种hash策略转成整型，然后进行"),v("code",[e._v("分段加锁")]),e._v("，减少一点锁冲突的概率，或者用一下"),v("code",[e._v("CAS")]),e._v("的策略。")]),e._v(" "),v("p",[e._v("另外对于unordered_map，在单写多读的多线程场景下，会不会有问题呢？也可能有。gcc 4.7.2的unordered_map实现曾被爆出有这个问题。原因的新插入的元素，触发了rehash，让其他线程在unordered_map中查找的过程之中，出现了core dump。见：")]),e._v(" "),v("blockquote",[v("p",[e._v("https://stackoverflow.com/questions/16353334/segv-in-gccs-stdunordered-map")])]),e._v(" "),v("p",[e._v("我不确定clang以及后续的gcc版本是否还有此问题。应该在不添加任何额外同步代码的情况下，无法解决。")]),e._v(" "),v("h2",{attrs:{id:"容器并发前初始化与伪共享的争议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#容器并发前初始化与伪共享的争议"}},[e._v("#")]),e._v(" 容器并发前初始化与伪共享的争议")]),e._v(" "),v("p",[e._v("本文内容我曾经在知乎上写过，有网友评论：解法二会有false sharing（伪共享）的问题。")]),e._v(" "),v("p",[e._v("这里我简单回应一下，谈论伪共享，要考虑具体的场景。的确某些时候伪共享会带来性能损失，但是要和并行化带来的性能提升来比较，孰高孰低。如果并行提升的性能足够多，是足以弥补这点伪共享的损失的。")]),e._v(" "),v("p",[e._v("比如我要进行远程IO，我有N个key要查询redis，把他们的结果存储到一个vector中，这个vector的写入操作在IO的异步回调函数中。在不加任何额外处理的情况下，极大概率会导致vector的core dump。而如果vector初始化一下，则无需在回调函数中加锁，就能保证安全。这时候并行IO本身带来的性能提升，远远大于"),v("code",[e._v("可能")]),e._v("的伪共享带来损失。")]),e._v(" "),v("p",[e._v("这里为什么说"),v("code",[e._v("可能")]),e._v("呢？因为伪共享的触发没你想象的这么简单。如何成功模拟出一次伪共享带来性能损失的例子？你可以写程序自测一下，并不容易……甚至你改一下优化级别，改成O2，测试表现都很不一样。")]),e._v(" "),v("p",[e._v("一般网络上谈论伪共享时所举的例子，并不是一个vector中多个元素之间并行读写触发了伪共享。而是vector的元素类型是一个对象，对象中有2个数据字段a和b，在多线程分别更新同一个元素的a和b字段的时候，导致了伪共享。比如一个线程更新vector中每个元素的a字段，另外一个线程更新vector中每个元素的b字段。")]),e._v(" "),v("p",[e._v("Anyway，伪共享的议题比较复杂，欢迎留意评论！")]),e._v(" "),v("h1",{attrs:{id:"往期推荐"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#往期推荐"}},[e._v("#")]),e._v(" 往期推荐")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NDIyMjI3OQ==&mid=2649003915&idx=1&sn=d269b04fc417a424082ae5a570df16cb&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/hQZ4NEZ2sic7foicQ0TZo28fEQz8LOn8ibHKZjoVhl1KKwak2jC2kianAGpZMpxeXhHsXyYrnBib09Q0P61M1joDlxg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),v("OutboundLink")],1),e._v("“伪共享”凌乱记")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NDIyMjI3OQ==&mid=2649002539&idx=1&sn=b0cd8b1d1e471be565168b71458863e4&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/hQZ4NEZ2sic7foicQ0TZo28fEQz8LOn8ibHTVJP3hS9NJohCyYD1TZ6WMVNUDE9PpE923MibT48fjwPeF8ia1gulc7w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),v("OutboundLink")],1),e._v("如何理解互斥锁、条件变量、读写锁以及自旋锁？")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NDIyMjI3OQ==&mid=2649004091&idx=1&sn=47b2a52d314ef7d83d0350134d082e59&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/hQZ4NEZ2sic7foicQ0TZo28fEQz8LOn8ibHZKYtCUK8DSVLFlnufkyoFsrMrSuWl0l7UqlvtU3zic56fxicMnm3wKZQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),v("OutboundLink")],1),e._v("C++代码简化之道（一）")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NDIyMjI3OQ==&mid=2649002738&idx=1&sn=a696e6c2bbb61bfe8d4d4d727814997f&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/hQZ4NEZ2sic7foicQ0TZo28fEQz8LOn8ibHrBHbsZaZicqxPQicnaTLicHY94TnRoqKPM012jl8ACLrHDf9VOviaOw71g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),v("OutboundLink")],1),e._v("疑难杂症录：C++代码出现内存泄露？不是吧…")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NDIyMjI3OQ==&mid=2649003742&idx=1&sn=4ad639f954f067e2eb0478e187944abe&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/hQZ4NEZ2sic7foicQ0TZo28fEQz8LOn8ibHAM98iaiaJqQlqaCUMhgJGVnHj3Z0faXFxpvHpJxibsZGicKnJBzf0mRbZQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),v("OutboundLink")],1),e._v("百度工程师厂外生存指南")]),e._v(" "),v("p",[e._v("收录于话题 #C++")]),e._v(" "),v("p",[e._v("27个")]),e._v(" "),v("p",[e._v("上一篇当我们谈论shared_ptr的线程安全性时，我们在谈论什么下一篇C++代码简化之道 (2)：消除非必要的指针")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/2nDfyIc9UL4sCm6M0MHn2g##",target:"_blank",rel:"noopener noreferrer"}},[e._v("阅读原文"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("喜欢此内容的人还喜欢")]),e._v(" "),v("p",[e._v("一日一技：同样的代码，为什么他占用的内存更小？")]),e._v(" "),v("p",[e._v("未闻Code")]),e._v(" "),v("p",[e._v("不喜欢")]),e._v(" "),v("p",[e._v("不看的原因")]),e._v(" "),v("p",[e._v("确定")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("内容质量低")])]),e._v(" "),v("li"),e._v(" "),v("li",[v("p",[e._v("不看此公众号")])])]),e._v(" "),v("p",[e._v("精美图文带你掌握JVM 内存布局")]),e._v(" "),v("p",[e._v("顶级架构师")]),e._v(" "),v("p",[e._v("不喜欢")]),e._v(" "),v("p",[e._v("不看的原因")]),e._v(" "),v("p",[e._v("确定")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("内容质量低")])]),e._v(" "),v("li"),e._v(" "),v("li",[v("p",[e._v("不看此公众号")])])]),e._v(" "),v("p",[e._v("Nginx+Redis 搭建高性能缓存利器")]),e._v(" "),v("p",[e._v("Java知音")]),e._v(" "),v("p",[e._v("不喜欢")]),e._v(" "),v("p",[e._v("不看的原因")]),e._v(" "),v("p",[e._v("确定")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("内容质量低")])]),e._v(" "),v("li"),e._v(" "),v("li",[v("p",[e._v("不看此公众号")])])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MjM5NDIyMjI3OQ==&mid=2649004247&idx=1&sn=62da757389ee405cc3be681139fdd549&send_time=",alt:"img"}})]),e._v(" "),v("p",[e._v("微信扫一扫\n关注该公众号")]),e._v(" "),v("p",[e._v("：，。视频小程序赞，轻点两下取消赞在看，轻点两下取消在看")])])}),[],!1,null,null,null);_.default=t.exports}}]);