(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{489:function(t,a,e){"use strict";e.r(a);var r=e(42),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("20张图_常见分布式理论与解决方案")]),t._v(" "),e("p",[t._v("对于分布式系统，最简单的理解就是一堆机器对外提供服务，相比单体服务，它可以承受更高的负载，但是分布式系统也带了一系列问题，比如如何解决某个节点故障的问题？如何解决数据一致性的问题？如何解决数据倾斜的问题？今天通过这篇文章，带大家搞懂和分布式相关的常见理论和解决方案。")]),t._v(" "),e("h2",{attrs:{id:"cap-理论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cap-理论"}},[t._v("#")]),t._v(" CAP 理论")]),t._v(" "),e("p",[t._v("先从定义开始：")]),t._v(" "),e("ul",[e("li",[t._v("C（Consistence） ：一致性，所有的节点访问的是最新的数据副本，这是什么意思呢？我们知道在分布式系统中，为了高可用，往往一个节点会有若干个数据副本，简称 Follower 节点，比较常见的模式是我们的数据更新一般会写入 Leader 节点，然后会同步给 Follower 节点，当我们读取数据的时候，不论从哪个节点读取都可以读到最新的数据，这就是一致性。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img0.tuicool.com/iaeIBzI.png!web",alt:"img"}})]),t._v(" "),e("p",[t._v("A、B、C 可以得到同样的数据。")]),t._v(" "),e("ul",[e("li",[t._v("A（Availability） ：可用性，非故障节点可以正常的操作，简单来说就是客户端一直可以正常访问并得到系统的正常响应，从用户角度来看就是不会出现系统操作失败或者访问超时等问题，但是系统内部可能会出现网络延迟等问题。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img0.tuicool.com/maMVzqq.png!web",alt:"img"}})]),t._v(" "),e("p",[t._v("C 节点因为自身问题不可用，正常情况会被剔除，B 节点与 A 节点之间可能存在同步延迟，但是 B 节点本身没有故障，所以 B 节点是可用的。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("P（Partition tolerance） ：分区容错性，网络的问题错综复杂，分布式系统肯定是要考虑这一点的，如果出现某个节点因为网络等问题造成数据不一致，或者数据延迟很久才同步过来，虽然会影响部分节点数据的时效性，但是服务节点依然是可用的，分布式系统要能容忍这种情况的。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.tuicool.com/vEzmYrr.png!web",alt:"img"}})])])]),t._v(" "),e("p",[t._v("B 对应的节点虽然和 Leader 断了联系，但是依然可以对外服务，只不过提供的是老数据。")]),t._v(" "),e("p",[t._v("在分布式系统中，CAP 是无法同时满足的，首先由于存在多节点，并且网络传输需要时间，所以可能会存在延迟，那么节点之间的数据我们无法保证某一时刻完全一致，因此 P（分区容错性）是要满足的。在 P 满足的情况下，为什么说 CA 不能同时满足呢？我们来通过假设看一看，如果 CA 同时满足会怎么样。")]),t._v(" "),e("ol",[e("li",[t._v("假设现在要求满足 C（一致性），那么就是说所有的节点在某一刻提供的数据都必须一致，我们知道在 P 的情况，是不可能保证的，要保证的话，就只能把其他节点全部干掉，比如禁止读写，那这其实就是和 A 是相悖的（某些节点虽然延迟，但是节点本身可用）。")]),t._v(" "),e("li",[t._v("假设现在要求满足 A（可用性），那么就是说只要节点本身没什么问题，就可以对外提供服务，哪怕有点数据延迟，很明显这肯定是和 C 相悖的。")])]),t._v(" "),e("p",[t._v("在实际的业务中，我们需要根据业务的场景来决定使用 CP，还是 AP。比如对一些和钱挂钩的业务，数据的一致性按道理应该是最重要的，因此一般会采用 CP，而对于一些不影响主体功能的业务，比如像新闻的阅读量，不同的用户看到的阅读量不一样并不会造成什么影响，可以采用 AP。")]),t._v(" "),e("h2",{attrs:{id:"base-理论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base-理论"}},[t._v("#")]),t._v(" BASE 理论")]),t._v(" "),e("p",[t._v("由于 CAP 理论中 C 和 A 无法兼得，eBay 的架构师提出了 BASE 理论，BASE 理论主要是在 CA 之间做文章，它不要求强一致性，因此可以满足一定的可用性。我们还是先从定义开始：")]),t._v(" "),e("ul",[e("li",[t._v("BA（Basically Available） ：基本可用，注意这个和不可用不是一回事，在分布式系统中出现不可预估的故障时，允许损失部分可用性，保证核心功能可用，比如正常一个接口响应 200ms，在出现故障时响应超过 1s，虽然响应时间变长了，但是接口还是可以对外提供服务的，再比如对于一个视频网站，在突发流量到来时，把视频的弹幕服务打挂了，但是视频的播放功能依然正常。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img2.tuicool.com/ZNVjYnV.png!web",alt:"img"}})]),t._v(" "),e("ul",[e("li",[t._v("S（Soft-state） ：软状态，即分布式系统允许存在一个中间的状态，但是这个中间状态并不会对服务造成严重的影响，比如对于主从复制这种，允许从节点短暂的延迟。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.tuicool.com/viUbmu.png!web",alt:"img"}})]),t._v(" "),e("ul",[e("li",[t._v("E（Eventually Consistent） ：最终一致性，由于软状态的存在，系统对延迟是可以容忍的，但是在一段时间后，延迟的数据需要最终保持一致。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img0.tuicool.com/QVbyemI.png!web",alt:"img"}})]),t._v(" "),e("p",[t._v("总的来说，BASE 理论适用性应该更广泛，很多时候我们并不要求数据的强一致性，只要在短暂的延时之后能达到一致性也是可以的。")]),t._v(" "),e("h2",{attrs:{id:"一致性-hash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一致性-hash"}},[t._v("#")]),t._v(" 一致性 hash")]),t._v(" "),e("p",[t._v("hash 这个词对我们来说并不陌生，以缓存服务器来说，一般会在线上配置好几台服务器，然后根据 hash 来决定请求哪台缓存服务，比如常见的就是取模方式 hash(key)%num 来获取目标机器。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img2.tuicool.com/3UFBVz6.png!web",alt:"img"}})]),t._v(" "),e("p",[t._v("假设现在有 3 台缓存服务器，并且当前有 3 个缓存的 key，分别是 k0，k1，k2，在经过 hash 以后，它们的分布情况如下：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("hash(k0)%3=0 #No.0\nhash(k1)%3=1 #No.1\nhash(k2)%3=2 #No.2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("很幸运，分布的非常均匀，每台机器一个。某天，由于线上要做个活动，预计访问量会加大，需要选择加一台服务器来分担压力，于是经过 hash 之后，k0，k1，k2 的分布情况如下：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("hash(k0)%4=0 #No.1\nhash(k1)%4=1 #No.2\nhash(k2)%4=2 #No.3\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img2.tuicool.com/6RNnY3U.png!web",alt:"img"}})]),t._v(" "),e("ul",[e("li",[t._v("k0 的目标缓存服务器由原本的 No.0 变成了 No.1")]),t._v(" "),e("li",[t._v("k1 的目标缓存服务器由原本的 No.1 变成了 No.2")]),t._v(" "),e("li",[t._v("k2 的目标缓存服务器由原本的 No.2 变成了 No.3")])]),t._v(" "),e("p",[t._v("可以发现因为添加了一台缓存节点，导致了 k0，k1，k2 原来的缓存全部失效了，这似乎有点问题，类似缓存雪崩，严重的话会对 DB 造成很大的压力，造成这个问题的主要原因是因为我们加了一个节点，导致 hash 结果发生了变动，此时的 hash 可以说是不稳定的。")]),t._v(" "),e("p",[t._v("为了解决 rehash 不稳定的问题，于是出现了一致性 hash 算法。一致性 hash 的原理比较简单，首先存在一个 hash 圆环，这个圆环可以存放 0-2^32-1 个节点。")]),t._v(" "),e("ol",[e("li",[t._v("第一步就是把我们的目标服务器节点通过 hash 映射到这个环上")]),t._v(" "),e("li",[t._v("第二步根据我们需要查找的 key，它应该也对应 hash 环上的某个位置")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img0.tuicool.com/F3A73qm.png!web",alt:"img"}})]),t._v(" "),e("p",[t._v("也许你会问，这 k0、k1、k2 也没和某个缓存节点对上呀～，这就是一致性 hash 不同的地方，它此时查找的方式并不是 hash(key)= 某个节点 ，而是根据 key 的位置，顺时针找到第一个节点，这个节点就是当下这个 key 的目标节点。")]),t._v(" "),e("p",[t._v("我们再来看看在一致性 hash 的情况下，新增一个节点会发生什么。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img2.tuicool.com/m6vAnae.png!web",alt:"img"}})]),t._v(" "),e("p",[t._v("此时唯一的变动就是 k0 原本应该打到 cache0 节点的，现在却打到了我们新加的节点 cache3 上，而 k1，k2 是不变的，也就是说有且只有 k0 的缓存失效了，相比之前，大大降低了缓存失效的面积。")]),t._v(" "),e("p",[t._v("当然这样的节点分布算是比较理想的了，如果我们的节点是这样分布的：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img0.tuicool.com/fi6Zvm2.png!web",alt:"img"}})]),t._v(" "),e("p",[t._v("几个 cache 节点分布的比较集中，由于顺时针查找法，所以最终 k0，k1，k2 都落在 cache0 节点上，也就是说 cache1、cache2 基本就是多余的，所以为了解决这种数据倾斜的问题，一致性 hash 又引入了虚拟节点的概念，每个节点可以有若干个虚拟节点，比如：")]),t._v(" "),e("ol",[e("li",[t._v("cache0->cache0#1")]),t._v(" "),e("li",[t._v("cache1->cache1#1")]),t._v(" "),e("li",[t._v("cache2->cache2#1")])]),t._v(" "),e("p",[t._v("虚拟节点并不是真正的服务节点，它只是一个影子，它的目的就是站坑位，让节点更加分散，更加均匀。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img0.tuicool.com/YbE3ieR.png!web",alt:"img"}})]),t._v(" "),e("p",[t._v("这样通过映射出虚拟节点以后，k0 打到 cache2，k1 打到 cache0，k2 打到 cache1，虚拟节点越多，理论分布的越均匀。")]),t._v(" "),e("h2",{attrs:{id:"gossip-协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gossip-协议"}},[t._v("#")]),t._v(" Gossip 协议")]),t._v(" "),e("p",[t._v("集群往往是由多个节点共同组成的，当一个节点加入集群或者一个节点从集群中下线的时候，都需要让集群中其他的节点知道，这样才能将数据信息分享给新节点而忽略下线节点。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.tuicool.com/aQviE3E.png!web",alt:"img"}})]),t._v(" "),e("p",[t._v("A、B、C 节点之间可以互相传递消息，但是 D 节点在下线之后会被广播告诉其他存活节点。")]),t._v(" "),e("p",[t._v("这样的广播协议就是今天要说 Gossip 协议，Gossip 协议也叫 Epidemic 协议（流行病协议），当一个消息到来时，通过 Gossip 协议就可以像病毒一样感染全部集群节点，当然我们利用的是它这个极强的散播能力。")]),t._v(" "),e("p",[t._v("Gossip 的过程是由一个种子节点发起的，当一个种子节点有信息需要同步到网络中的其他节点时，它会随机的选择周围几个节点散播消息，收到消息的节点也会重复该过程，直至最终网络中所有的节点都收到了消息。这个过程可能需要一定的时间，所以不能保证某个时间点所有的节点都有该条消息，但是理论上最终所有节点都会收到消息，因此它是一个 最终一致性协议 。")]),t._v(" "),e("p",[t._v("Gossip 协议的特点：")]),t._v(" "),e("ol",[e("li",[t._v("Gossip 协议是周期性散播消息，每隔一段时间传播一次")]),t._v(" "),e("li",[t._v("被感染的节点，每次可以继续散播 N 个节点")]),t._v(" "),e("li",[t._v("每次散播消息时，都会选择尚未发送过的节点进行散播")]),t._v(" "),e("li",[t._v("收到消息的节点，不会向发送的节点散播")]),t._v(" "),e("li",[t._v("同一个节点可能会收到重复的消息，因为可能同时多个节点正好向它散播")]),t._v(" "),e("li",[t._v("集群是去中心化的，节点之间都是平等的")]),t._v(" "),e("li",[t._v("消息的散播不用等接收节点的 ack，即消息可能会丢失，但是最终应该会被感染")])]),t._v(" "),e("p",[t._v("我们来看个例子：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img2.tuicool.com/i2qUVfY.png!web",alt:"img"}})]),t._v(" "),e("ol",[e("li",[t._v("种子节点是 A")]),t._v(" "),e("li",[t._v("A 节点选择 B、C 节点进行散播")]),t._v(" "),e("li",[t._v("C 散播到 D，B 散播 D 和 E，可以发现 D 收到两次")]),t._v(" "),e("li",[t._v("D 散播到 F，最终整个网络都同步到了消息")])]),t._v(" "),e("p",[t._v("Gossip 有点类似图的广度优先遍历算法，一般用于网络拓扑结构信息的分享和维护，像 redis、consul 都有使用到。")]),t._v(" "),e("h2",{attrs:{id:"raft-算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raft-算法"}},[t._v("#")]),t._v(" Raft 算法")]),t._v(" "),e("p",[t._v("分布式协议的难点之一就是数据的一致性，当由多个节点组成的集群中只有一个节点收到数据，我们就算成功的话，风险太大，当要求所有节点都收到数据才响应成功，性能又太差，所以一般会在数据的安全和性能之间做个折中，只要保证绝大部分节点同步数据成功，我们就算成功，Raft 算法作为比较知名的一致性算法，被广泛应用于许多中间件中，比如像 etcd，接下来我们就看看 Raft 算法是如何工作的。")]),t._v(" "),e("p",[t._v("首先介绍下在 Raft 算法中，几种情况下每个节点对应的角色：")]),t._v(" "),e("ol",[e("li",[t._v("Leader 节点：同大多数分布式中的 Leader 节点一样，数据的变更都是通过它的")]),t._v(" "),e("li",[t._v("Follower 节点：Leader 节点的追随者，负责复制数据并且在选举时候投票的节点")]),t._v(" "),e("li",[t._v("Candidate 候选节点：参与选举的节点，就是 Follower 节点参与选举时会切换的角色")])]),t._v(" "),e("p",[t._v("Raft 算法将一致性问题分解为两个的子问题， Leader 选举 和 状态复制 。")]),t._v(" "),e("h3",{attrs:{id:"选举"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选举"}},[t._v("#")]),t._v(" 选举")]),t._v(" "),e("p",[t._v("首先我们来看看 Leader 的选举，系统在刚开始的时候，所有节点都为 Follower 节点，这时大家都有机会参与选举，也就是把自己变成 Candidate，但是如果每个 Follower 节点都变成 Candidate 那么就会陷入无限的死循环，于是每个 Follower 都一个定时器，并且定时器的时间是随机的，当某个 Follower 的定时器时间走完之后，会确认当前是否存在 Leader 节点，如果不存在就会把自己变成 Candidate，这时会投自己 1 票，同时告诉其它节点，让它们来投票，当拿到超过半数以上的投票时，当前的 Candidate 就会变成 Leader 节点。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img2.tuicool.com/iYFvieF.png!web",alt:"img"}})]),t._v(" "),e("ol",[e("li",[t._v("由于 A 节点的定时器时间最短（10ms），所以 A 会成为 Candidate")]),t._v(" "),e("li",[t._v("A 投自己一票，同时 B、C 也投出自己的同意票，因此 A 会变成 Leader 节点，同时会记录是第 M 任。这个 M 是做版本校验的，比如一个编号是 10 的节点，收到了一个编号是 9 的节点的投票请求，那么就会拒绝这个请求。")])]),t._v(" "),e("p",[t._v("在 Leader 节点选举出来以后，Leader 节点会不断的发送心跳给其它 Follower 节点证明自己是活着的，其他 Follower 节点在收到心跳后会清空自己的定时器，并回复给 Leader，因为此时没必要触发选举了。")]),t._v(" "),e("p",[t._v("如果 Leader 节点在某一刻挂了，那么 Follower 节点就不会收到心跳，因此在定时器到来时就会触发新一轮的选举，流程还是一样，但是如果恰巧两个 Follower 都变成了 Candidate，并且都得到了同样的票数，那么此时就会陷入僵局，为了打破僵局，这时每个 Candidate 都会随机推迟一段时间再次请求投票，当然一般情况下，就是先来先得，优先跑完定时器的 Candidate 理论成为 Leader 的概率更大。")]),t._v(" "),e("p",[t._v("好的选举流程大致如上，接下来我们来看看数据的复制。")]),t._v(" "),e("h3",{attrs:{id:"复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[t._v("#")]),t._v(" 复制")]),t._v(" "),e("p",[t._v("当 Leader 节点收到 Client 的请求变更时，会把变更记录到 log 中，然后 Leader 会将这个变更随着下一次的心跳通知给 Follower 节点，收到消息的 Follower 节点把变更同样写入日志中，然后回复 Leader 节点，当 Leader 收到大多数的回复后，就把变更写入自己的存储空间，同时回复 client，并告诉 Follower 应用此 log。至此，集群就变更达成了共识。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img0.tuicool.com/JBRZBji.png!web",alt:"img"}})]),t._v(" "),e("p",[t._v("最后，Raft 算法是能够实现分布式系统强一致性的算法，每个系统节点有三种状态 Leader 、 Follower 、 Candidate ，实现 Raft 算法两个最重要的事是： 主的选举 和 日志的复制 。")]),t._v(" "),e("h2",{attrs:{id:"分布式事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[t._v("#")]),t._v(" 分布式事务")]),t._v(" "),e("p",[t._v("事务相信大家不陌生，事务的本质是要么一起向前冲，要么一起保持不动。对于 MySQL 的 InnoDB 来说，我们只需要执行 begin 、 commit 就行，有时候我们可能需要回滚 rollback 。但是这是在同一数据库的前提下，如果我们的数据表分库了或者说我们要操作的资源在不同的网络节点上该怎么办？这就得用到我们今天要说的分布式事务了，分布式事务有 2PC、3PC、TCC 等， 但是无论哪种都无法保证完美的 ACID，我们来一起看看是怎么回事吧。")]),t._v(" "),e("h3",{attrs:{id:"_2pc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2pc"}},[t._v("#")]),t._v(" 2PC")]),t._v(" "),e("p",[t._v("从名字可以看出它是分两个阶段的，所以它也叫做二阶段提交，即 准备 和 提交 ，2PC 要求有个事务的协调者，相比常规的事务，我们的请求是发给这个协调者的，然后由协调者帮我们协调各个节点资源的提交。")]),t._v(" "),e("ul",[e("li",[t._v("准备阶段 ：协调者会让各个参与事务的参与者，把除了提交之外所有的事情都干好，也就是就等着提交了")]),t._v(" "),e("li",[t._v("提交阶段 ：协调者收到各个参与者的准备消息后，根据准备情况通知各个参与者提交（commit）或者回滚（rollback）")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img2.tuicool.com/Nz2QZbu.png!web",alt:"img"}})]),t._v(" "),e("p",[t._v("可以发现整个过程非常依赖协调者，如果协调者挂了，那么整个分布式事务就不可用，所以一般建议协调者至少有个备份节点。")]),t._v(" "),e("p",[t._v("如果协调者在收到所有节点的 ok 之后，在准备发送 commit 消息的时候，由于网络问题，导致其中一个节点始终收不到消息，那么收不到消息的节点就会一直占着资源不释放，出现这种情况的时候，建议协调者有个重试功能，在 commit 失败之后，不停的重试，直至成功。2PC 协议是一种强一致性协议，它是同步阻塞的，所以在高并发的场景它的性能可能还会有问题。")]),t._v(" "),e("h3",{attrs:{id:"_3pc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3pc"}},[t._v("#")]),t._v(" 3PC")]),t._v(" "),e("p",[t._v("2PC 存在一些问题，比如协调者从挂了到恢复后并不知道当前节点的状态，现在应该做什么（是该提交还是回滚等等），还有就是当发生网络问题的时候，无法通信的节点只会傻傻的等待，造成资源一直处于锁定状态。鉴于这些问题，出现了 3PC。")]),t._v(" "),e("p",[t._v("首先 3PC 顾名思义，会分为 3 个阶段，分别是 准备阶段 、 预提交阶段 和 提交阶段 。")]),t._v(" "),e("ul",[e("li",[t._v("准备阶段 ：主要是询问参与者自身的状况，比如你的负载情况如何？能参与接下来的任务吧？")]),t._v(" "),e("li",[t._v("预提交阶段 ：除了 commit 之外的所有准备工作，就等着 commit 了")]),t._v(" "),e("li",[t._v("提交阶段 ：执行真正的 commit 或者 rollback")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img0.tuicool.com/7bmeeqe.png!web",alt:"img"}})]),t._v(" "),e("p",[t._v("如果在事务期间，有新的协调者顶替进来，它就可以根据一个参与者的状态来判断当前应该干嘛，比如如果一个参与者处于提交阶段，那么表明当前的事务正处于提交阶段。当因为网络问题某个节点一直收不到提交信息，那么此时也不会傻等了，会有超时时间，当超时时间过去了，节点可以自动提交，但是这里有个问题，对于参与者节点来说，当前应该是 commit 还是 rollback 呢？")]),t._v(" "),e("p",[t._v("其实 2PC 和 3PC 都无法保证绝对的一致性，因为某个参与者节点可能就是因为网络问题收不到消息，但是其他参与者节点已经提交了事务，一般为了预防这种问题，最好加一个报警，比如监控到事务异常的时候，通过脚本自动补偿差异的信息。")]),t._v(" "),e("h3",{attrs:{id:"tcc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcc"}},[t._v("#")]),t._v(" TCC")]),t._v(" "),e("p",[t._v("TCC 事务的全程是 Try 、 Commit 、 Cancel ，TCC 事务使用场景更贴近实际应用，因此它的使用也更广泛。")]),t._v(" "),e("ul",[e("li",[t._v("Try ：Try 这个过程，一般表示锁定资源的过程，比如常见的下单，在 try 阶段，我们不是真正的减库存，而是把下单的库存给锁定住。")]),t._v(" "),e("li",[t._v("Commit ：真正的执行业务逻辑了，带提交的。")]),t._v(" "),e("li",[t._v("Cancel ：撤销，如果 Commit 失败可以把锁定的资源释放回来")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.tuicool.com/vUBZ3qf.png!web",alt:"img"}})]),t._v(" "),e("p",[t._v("TCC 对应用的侵入性强。业务逻辑的每个分支都需要实现 try、confirm、cancel 三个操作，代码改造成本高。在出现网络或者其他系统故障时，TCC 要根据实际业务场景实现对应的回滚逻辑。Commit 或者 Cancel 有可能会重试，因此对应的部分最好支持幂等。")]),t._v(" "),e("p",[t._v("最后其实上面 3 种分布式事务理论上都无法保证绝对的一致性，因为无法解决网络等带来的意外因素，要解决它，要么只能无限重试，但是这个无限重试最好通过消息队列 + 守护进程的方式来自动补数据，前提还是得保证消息队列不丢失数据。总之不仅仅是分布式事务会带来这些问题，分布式本身也会带来许许多多的问题，没有绝对的解决方案，只有更好的解决方案。")]),t._v(" "),e("p",[t._v("往期精彩 ：")]),t._v(" "),e("p",[t._v("全文完")]),t._v(" "),e("p",[t._v("本文由 "),e("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[t._v("简悦 SimpRead"),e("OutboundLink")],1),t._v(" 优化，用以提升阅读体验")]),t._v(" "),e("p",[t._v("使用了 全新的简悦词法分析引擎 beta，"),e("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),e("OutboundLink")],1),t._v("详细说明")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.tuicool.com/articles/vi6rAzn#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAP 理论"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.tuicool.com/articles/vi6rAzn#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("BASE 理论"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.tuicool.com/articles/vi6rAzn#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("一致性 hash"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.tuicool.com/articles/vi6rAzn#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gossip 协议"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.tuicool.com/articles/vi6rAzn#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raft 算法"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.tuicool.com/articles/vi6rAzn#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("选举"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.tuicool.com/articles/vi6rAzn#sr-toc-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("复制"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.tuicool.com/articles/vi6rAzn#sr-toc-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式事务"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.tuicool.com/articles/vi6rAzn#sr-toc-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("2PC"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.tuicool.com/articles/vi6rAzn#sr-toc-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("3PC"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.tuicool.com/articles/vi6rAzn#sr-toc-10",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCC"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=v.exports}}]);