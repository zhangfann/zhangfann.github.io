(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{440:function(t,r,a){"use strict";a.r(r);var e=a(42),i=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" "),a("strong",[t._v("背景")])]),t._v(" "),a("p",[t._v("倒排索引是 Google 搜索引擎中最为关键的技术之一。应对海量数据时，高效的索引创建和索引的实时更新都是必须解决的难题。Google 设计了 MapReduece 系统解决了海量数据索引创建的问题，但 MR 并没有解决增量数据的实时更新问题。")]),t._v(" "),a("p",[t._v("因此，Google 设计 Percolator 的初衷是："),a("strong",[t._v("支持海量数据存储、并行随机读写、跨行事务的分布式数据库")]),t._v("。")]),t._v(" "),a("p",[t._v("由于 Percolator 构建在不支持跨行事务的 BigTable 之上，基于 BigTable 达到 Percolator 的设计目标便是其要解决的核心问题，本文主要描述 Percolator 系统中的事务相关设计。")]),t._v(" "),a("h2",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" "),a("strong",[t._v("特点")])]),t._v(" "),a("p",[t._v("Percolator 提供了跨行、跨表的、基于快照隔离的 ACID 事务。")]),t._v(" "),a("h2",{attrs:{id:"snapshop-isolation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snapshop-isolation"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Snapshop isolation")])]),t._v(" "),a("p",[t._v("Percolator 使用 Bigtable 的时间戳记维度实现数据的多版本化从而达到了 snapshot isolation，优点是：")]),t._v(" "),a("p",[t._v("对于读：读操作都能够从一个带时间戳的稳定快照获取\n对于写：较好地处理写 - 写冲突：若事务并发更新同一个记录，最多只有一个会提交成功")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic3.zhimg.com/v2-5c60b8222bfdf9ae7736c7228c324f9e_b.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("快照隔离的事务均携带两个时间戳：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=start%5C_ts",alt:"img"}})]),t._v(" "),a("p",[t._v("（图中小空格）与")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=commit%5C_ts",alt:"img"}})]),t._v(" "),a("p",[t._v("（图中小黑球）。上图中：")]),t._v(" "),a("ul",[a("li",[a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=start%5C_ts_%7Bt2%7D+%3C+commit%5C_ts_%7Bt1%7D",alt:"img"}})]),t._v(" "),a("p",[t._v("，所以事务 1 的更新对 2 不可见")])]),t._v(" "),a("li",[a("p",[t._v("事务 3 可以看到事务 2 和 事务 1 的提交信息")])]),t._v(" "),a("li",[a("p",[t._v("事务 1 和 事务 2 并发执行：如果两者更新同一个记录，至少有一个会失败")])])]),t._v(" "),a("h2",{attrs:{id:"lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lock"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Lock")])]),t._v(" "),a("p",[t._v("Percolator 后端存储基于 BigTable。由于 Bigtable 没有提供便捷的冲突解决和锁管理方案，Percolator 需要实现一套独立的锁管理机制。必须满足以下条件：")]),t._v(" "),a("p",[t._v("能直面机器故障：若一个锁在两阶段提交时消失，系统可能将两个有冲突的事务都提交。")]),t._v(" "),a("p",[t._v("高吞吐量：上千台机器会同时请求获取锁。\n低延时：每个读操作都需要读取一次锁")]),t._v(" "),a("h2",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" "),a("strong",[t._v("事务")])]),t._v(" "),a("h2",{attrs:{id:"存储-column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储-column"}},[t._v("#")]),t._v(" "),a("strong",[t._v("存储 - COLUMN")])]),t._v(" "),a("p",[t._v("Percolator 在 BigTable 上抽象了五个 COLUMN，其中三个跟事务相关")]),t._v(" "),a("p",[a("strong",[t._v("LOCK COLUMN")])]),t._v(" "),a("p",[t._v("事务产生的锁，未提交的事务会写本项，记录 primary lock 的位置。事务成功提交后，该记录会被清理。记录内容格式：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bkey%2Cstart%5C_ts%5C%7D%3D%3E%5C%7Bprimary%5C_key%2Clock%5C_type%2C...%5C%7D",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=key+",alt:"img"}})]),t._v(" "),a("p",[t._v("：数据的 key")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=start%5C_ts",alt:"img"}})]),t._v(" "),a("p",[t._v("：事务开始时间戳")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=primary",alt:"img"}})]),t._v(" "),a("p",[t._v("：事务 primary 引用。在执行 Percolate 事务时，会从待修改的 keys 中选择一个 (随机选择) 作为")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=Primary",alt:"img"}})]),t._v(" "),a("p",[t._v("，其余的则作为")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=Secondaries+",alt:"img"}})]),t._v(" "),a("p",[a("strong",[t._v("DATA COLUMN")])]),t._v(" "),a("p",[t._v("存储实际用户数据，数据格式为")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bkey%2Cstart%5C_ts%5C%7D+%3D%3E+%5C%7Bvalue%5C%7D",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=key+",alt:"img"}})]),t._v(" "),a("p",[t._v("：真实的 key")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=start%5C_ts",alt:"img"}})]),t._v(" "),a("p",[t._v("：事务的开始时间戳")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=value",alt:"img"}})]),t._v(" "),a("p",[t._v("： 用户数据值")]),t._v(" "),a("p",[a("strong",[t._v("WRITE COLUMN")])]),t._v(" "),a("p",[t._v("已提交的数据信息，存储数据所对应的时间戳。数据格式")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bkey%2Ccommit%5C_ts%5C%7D%3D%3E%5C%7Bstart%5C_ts%5C%7D",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=key+",alt:"img"}})]),t._v(" "),a("p",[t._v("：数据的 key")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=commit%5C_ts+",alt:"img"}})]),t._v(" "),a("p",[t._v("：事务提交时间戳")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=start%5C_ts",alt:"img"}})]),t._v(" "),a("p",[t._v("：事务开始时间戳，可根据 key + start_ts 在 DATA COLUMN 中找到数据 value")]),t._v(" "),a("p",[t._v("关键在于 WRITE COLUMN，只有该列正确写入后，事务的修改才会真正被其他事务可见。读请求会首先在该 COLUMN 中寻找最新一次提交的 start timestamp，这决定了接下来从 DATA COLUMN 的哪个 key 读取最新数据。")]),t._v(" "),a("h2",{attrs:{id:"事务提交关键流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务提交关键流程"}},[t._v("#")]),t._v(" "),a("strong",[t._v("事务提交关键流程")])]),t._v(" "),a("p",[a("strong",[t._v("Prewrite")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/v2-0bf1bf0a331fa63b74249e66a2ca180c_b.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("Prewrite 是事务两阶段提交的第一步：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("客户端首先从 Oracle 获取全局唯一时间戳作为当前事务的")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=start%5C_ts",alt:"img"}})]),t._v(" "),a("p",[t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("客户端会从所有 key 中选出一个作为")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=Primary",alt:"img"}})]),t._v(" "),a("p",[t._v("，其余的作为")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=Secondaries",alt:"img"}})]),t._v(" "),a("p",[t._v("。并将所有的 key/value 数据写入请求并行地发往对应的存储节点。存储节点对 key 的处理如下：")])])]),t._v(" "),a("p",[t._v("\\1.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=write-write",alt:"img"}})]),t._v(" "),a("p",[t._v("冲突检查：从 WRITE COLUMN 列中获取当前 key 的最新数据，若其")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=commit%5C_ts",alt:"img"}})]),t._v(" "),a("p",[t._v("大于等于")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=start%5C_ts",alt:"img"}})]),t._v(" "),a("p",[t._v("，说明在该事务的更新过程中其他事务提交过对该 key 的修改，返回"),a("em",[t._v("WriteConflict")]),t._v("错误\n\\2. 检查 key 是否已被锁，如果是，返回"),a("em",[t._v("KeyIsLock")]),t._v("的错误\n\\3. 向 LOCK COLUMN 列写入")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bstart%5C_ts%2Ckey%2Cprimary%5C_ref%5C%7D",alt:"img"}})]),t._v(" "),a("p",[t._v("为当前 key 加锁。若当前 key 被选为 primary，")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=primary%5C_ref",alt:"img"}})]),t._v(" "),a("p",[t._v("标记为")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=primary+",alt:"img"}})]),t._v(" "),a("p",[t._v("。若为 secondary，则指向")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=primary",alt:"img"}})]),t._v(" "),a("p",[t._v("的信息\n\\4. 向 DATA COLUMN 列写入数据​")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bkey%2Cstart%5C_ts%2Cvalue%5C%7D",alt:"img"}})]),t._v(" "),a("p",[a("strong",[t._v("Commit")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic2.zhimg.com/v2-aa02f4dba7e6330d5c87ec60eacf80ad_b.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("Prewrite 成功后，进入事务的第二阶段 Commit。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("从 Oracle 获取时间戳作为事务的提交时间")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=commit%5C_ts",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("向 primary key 所在的存储节点发送 commit 请求")])]),t._v(" "),a("li",[a("p",[t._v("步骤 2 正确完成后该事务即可标记为成功，接下来异步并行地向 secondary keys 所在的节点发送 commit 请求")])]),t._v(" "),a("li",[a("p",[t._v("存储节点对于客户端请求的处理：")])])]),t._v(" "),a("p",[t._v("\\1. 获取 key 的 lock, 检查其合法性，若非法，则返回失败\n\\2. 将​")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bkey%2Ccommit%5C_ts%2Cstart%5C_ts%5C%7D",alt:"img"}})]),t._v(" "),a("p",[t._v("写入 WRITE COLUMN\n\\3. 从 LOCK COLUMN 中删除 key 的锁记录以释放锁")]),t._v(" "),a("p",[t._v("值得说明的是，一旦")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=Primary",alt:"img"}})]),t._v(" "),a("p",[t._v("节点提交成功后，整个事务就算提交成功了。")]),t._v(" "),a("p",[t._v("在某些实现中（如 TiDB），Commit 阶段并非并行执行，而是先向")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=Primary+",alt:"img"}})]),t._v(" "),a("p",[t._v("节点发起 commit 请求，成功后即可响应客户端成功且后台异步地再向")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=Secondaries",alt:"img"}})]),t._v(" "),a("p",[t._v("发起 commit。")]),t._v(" "),a("h2",{attrs:{id:"读取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取"}},[t._v("#")]),t._v(" "),a("strong",[t._v("读取")])]),t._v(" "),a("p",[t._v("WRITE COLUMN 记录了 key 的提交记录，当客户端读取一个 key 时，会从 WRITE COLUMN 中读根据 key 查找记录的")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=start%5C_ts",alt:"img"}})]),t._v(" "),a("p",[t._v("，再根据")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bkey+%2B+start%5C_ts%5C%7D",alt:"img"}})]),t._v(" "),a("p",[t._v("作为新的 key 从 DATA COLUMN 中读取 value。")]),t._v(" "),a("p",[t._v("存储节点对读请求处理流程如下：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("检查区间")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5B0%2Cstart%5C_ts%5D",alt:"img"}})]),t._v(" "),a("p",[t._v("内 Lock 是否存在，若存在，则返回错误。在该区间内有 lock 意味着有未提交的事务，客户端需要等到持有该锁的事务提交了才能读取到最新的数据")])]),t._v(" "),a("li",[a("p",[t._v("如果不存在有冲突的 Lock，获取 WRITE COLUMN 中合法的最新提交记录")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bkey%2C+commit%5C_ts+%3D%3E+start%5C_ts%5C%7D",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("根据步骤 2 获取的信息，从 DATA COLUMN 中获取到相应的数据")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bkey%2Cstart%5C_ts+%3D%3E+value%5C%7D",alt:"img"}})])])]),t._v(" "),a("h2",{attrs:{id:"异常处理-清理锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常处理-清理锁"}},[t._v("#")]),t._v(" "),a("strong",[t._v("异常处理 - 清理锁")])]),t._v(" "),a("p",[t._v("在 Prewrite 阶段检测到锁冲突时会直接报错（读时遇到锁就等直到锁超时或者被锁的持有者清除，写时遇到锁，直接回滚然后给客户端返回失败由客户端进行重试），锁清理是在读阶段执行。有以下几种情况时会产生垃圾锁：")]),t._v(" "),a("p",[t._v("\\1. Prewrite 阶段：部分节点执行失败，在成功节点上会遗留锁\n\\2. Commit 阶段：Primary 节点执行失败，事务提交失败，所有节点的锁都会成为垃圾锁\n\\3. Commit 阶段：Primary 节点执行成功，事务提交成功，但是在 secondary 节点上异步 commit 失败导致遗留的锁\n\\4. 客户端奔溃或者客户端与存储节点之间出现了网络分区造成无法通信")]),t._v(" "),a("p",[t._v("对于前三种情况，客户端出错后会主动发起 Rollback 请求，要求存储节点执行事务 Rollback 流程。这里不做描述。")]),t._v(" "),a("p",[t._v("对于最后一种情况，事务的发起者已经无法主动清理，只能依赖其他事务在发生锁冲突时来清理。")]),t._v(" "),a("p",[a("strong",[t._v("Percolator 采用延迟处理来释放锁")])]),t._v(" "),a("p",[t._v("事务 A 运行时发现与事务 B 发生了锁冲突，A 必须有能力决定 B 是一个正在执行中的事务还是一个失败事务。因此，问题的关键在于如何正确地判断出 LOCK COLUMN 中的锁记录是属于当前正在处于活跃状态的事务还是其他失败事务遗留在系统中的垃圾记录 ？")]),t._v(" "),a("p",[t._v("梳理事务的 Commit 流程一个关键的顺序是：事务 Commit 时，1). 检查其锁是否还存在；2). 先向 WRITE COLUMN 写入记录再删除 LOCK COLUMN 中的记录。")]),t._v(" "),a("p",[t._v("假如事务 A 在事务 B 的 primary 节点上执行，它在清理事务 B 的锁之前需要先进行锁判断：如果事务 B 的锁已经不存在（事实上，如果事务 B 的锁不存在，事务 A 也不会产生锁冲突了），那说明事务 B 已经成功提交。如果事务 B 的 primary lock 还存在，说明事务没有成功提交，此时清理 B 的 primary lock。")]),t._v(" "),a("p",[t._v("假如事务 A 在事务 B 的 secondary 节点上执行，如果发现与事务 B 存在锁冲突，那么它需要判断到底是执行 Roll Forward 还是 Roll Back 动作。")]),t._v(" "),a("p",[t._v("判断的方法是去 Primary 上查找 primary lock 是否存在：")]),t._v(" "),a("p",[t._v("如果存在，说明事务 B 没有成功提交，需要执行 Roll Back：清理 LOCK COLUMN 中的锁记录；\n如果不存在，说明事务已经被成功提交，此时执行 Roll Forward：在该 secondary 节点上的 WRITE COLUMN 写入内容并清理 LOCK COLUMN 中的锁记录。")]),t._v(" "),a("p",[t._v("几种情形分析：")]),t._v(" "),a("p",[t._v("节点作为 Primary 在事务 B 的 commit 阶段写 WRITE COLUMN 成功，但是删除 LOCK COLUMN 中的锁记录失败。如果是由于在写入过程中出现了进程退出，那么节点在重启后可以恢复出该事务并删除 LOCK COLUMN\n节点作为 Primary 在事务 B 的 commit 阶段写 WRITE COLUMN 失败：意味事务 B 提交失败，那么事务 A 可以直接删除事务 B 在 LOCK COLUMN 中的锁记录\n节点作为 Secondary 在事务 B 的 commit 阶段写 WRITE COLUMN 成功，但是清理 LOCK COLUMN 锁失败，因为在事务 commit 的时候先向 primary 节点发起 commit，因此，进入这里必然意味着 primary 节点上 commit 成功，即 primary lock 肯定已经不存在，因此，直接执行 Roll Forward 即可。")]),t._v(" "),a("p",[t._v("有一个场景值得探讨")]),t._v(" "),a("p",[t._v("假如事务 A（清理锁）和事务 B（提交）并发执行，可能出现的执行顺序是：A1->B1->A2->B2->B3，也即在事务 B 向 WRITE COLUMN 中插入记录之前其锁就被其他事务清理了，会不会出现什么问题？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic4.zhimg.com/v2-bd8c41657aef4dbfecf588d0c0d1727b_b.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("可能产生的问题：如果此时有 start_ts 更大的读请求到来，由于事务 B 的锁记录已经不存在，因此它会认为事务 B 的 WRITE COLUMN 已经得到是最新内容，但是实际情况是 B 的 WRITE COLUMN 记录还未得到更新，造成了无法读取到最新的数据。")]),t._v(" "),a("p",[t._v("暂时还没想清楚这个问题是如何解决的？")]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" "),a("strong",[t._v("示例")])]),t._v(" "),a("p",[t._v("银行转账，Bob 向 Joe 转账 7 元。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=Txn.start%5C_ts+%3D+7%EF%BC%8CTxn.commit%5C_ts+%3D+8",alt:"img"}})]),t._v(" "),a("p",[t._v("首先以")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bkey%3DBob%5C%7D",alt:"img"}})]),t._v(" "),a("p",[t._v("查询 WRITE COLUMN 获取最新时间戳（小于 7 的最新时间戳），得到")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=start%5C_ts%3D5",alt:"img"}})]),t._v(" "),a("p",[t._v("。再从 DATA COLUMN 里面读取该时间戳的数据值")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=key%3DBob%2Cts+%3D+5%2C+value%3D10",alt:"img"}})]),t._v(" "),a("p",[t._v("，同样获取到 Joe 的帐户下该时间戳下的值为")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=key%3DJoe%2Cts%3D5%2Cvalue%3D2",alt:"img"}})]),t._v(" "),a("p",[t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic4.zhimg.com/v2-7f51ba3578dfb070c5d3bce90035d8b3_b.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("转账开始：使用")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=start%5C_ts%3D7",alt:"img"}})]),t._v(" "),a("p",[t._v("作为事务开始时间戳，将 Bob 选为本事务的")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=primary",alt:"img"}})]),t._v(" "),a("p",[t._v("，写入 LOCK COLUMN 来锁定 Bob 的帐户，同时将数据")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bkey%3DBob%2C+start%5C_ts%3D7%2Cvalue%3D3%5C%7D",alt:"img"}})]),t._v(" "),a("p",[t._v("写入 DATA COLUMN。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/v2-66ca0d0a622bb354ac209a0da7bae058_b.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("与此同时，使用")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=start%5C_ts%3D7",alt:"img"}})]),t._v(" "),a("p",[t._v("锁定 Joe 的帐户，当前锁作为")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=secondary",alt:"img"}})]),t._v(" "),a("p",[t._v("并存储一个指向")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=primary",alt:"img"}})]),t._v(" "),a("p",[t._v("的引用（当失败时，能够快速定位到锁，并根据其状态异步清理），并将 Joe 改变后的余额")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bkey%3DJoe%2Cstart%5C_ts%3D7%2Cvalue%3D9%5C%7D",alt:"img"}})]),t._v(" "),a("p",[t._v("写入到 DATA COLUMN")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/v2-7e71c95a0ff75212f3ea2cf008281c20_b.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("事务携带当前时间戳")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=commit%5C_ts%3D8",alt:"img"}})]),t._v(" "),a("p",[t._v("进入 commit 阶段：WRITE COLUMN 列中写入记录")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bkey%3DBob%2Ccommit%5C_ts%3D8%2Cstart%5C_ts%3D7%5C%7D",alt:"img"}})]),t._v(" "),a("p",[t._v("，删除")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=primary",alt:"img"}})]),t._v(" "),a("p",[t._v("所在的 LOCK COLUMN 数据至此，读请求过来时将看到 Bob 的余额为 3。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic2.zhimg.com/v2-b19d6e110de5b500374c745768ca29c1_b.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("依次在")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=secondary",alt:"img"}})]),t._v(" "),a("p",[t._v("中写入 WRITE COLUMN 数据项并清理锁，整个事务提交结束。在本例中，只有 Joe，写入的内容为")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=%5C%7Bkey%3DJoe%2Ccommit%5C_ts%3D8%2Cstart%5C_ts%3D7%5C%7D",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic3.zhimg.com/v2-0e894acd1dc7e6f9ff7fa1fa633a3952_b.jpg",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"点评"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点评"}},[t._v("#")]),t._v(" "),a("strong",[t._v("点评")])]),t._v(" "),a("p",[t._v("Percolator 的事务方案对写友好，对读不友好")]),t._v(" "),a("p",[t._v("事务写 primary record 就相当于先把协调者的决议持久化，然后再异步持久化到参与者，减少了多参与者出现异常的等待，但协议的交互轮次并未减少\n对于读而言，因为持久化决议分成先写 primary 再写其他参与者，导致参与者的加锁时间变长了。SI 隔离级别下，单机读分布式事务参与者因此会等待更长的时间。单机写的锁冲突也会加剧。")]),t._v(" "),a("p",[t._v("Percolator 的事务方案写性能本身也不算非常理想，体现在")]),t._v(" "),a("p",[t._v("协议基于 BigTable 设计，持久化次数多\n如果 2pc 中 commit 时 primary 出问题，其他参与者也不可用且持锁的参与者再没有可能推进，依赖其他事务的锁清理机制。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" "),a("strong",[t._v("参考")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//andremouche.github.io/transaction/percolator.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shirly's Blogandremouche.github.io"),a("img",{attrs:{src:"https://pic1.zhimg.com/v2-7dd958e998d56d86f733b6aa4ed905d0_180x120.jpg",alt:"图标"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//loopjump.com/percolator_paper_note/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LoopJump's Blogloopjump.com"),a("img",{attrs:{src:"https://pic3.zhimg.com/v2-b92c15c8a1b13e7ef57c5e36b03dfb3e_180x120.jpg",alt:"图标"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.jianshu.com/p/05194f4b29dd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Percolator 简单翻译与个人理解www.jianshu.com"),a("img",{attrs:{src:"https://pic1.zhimg.com/v2-547f4acc485796c7e7e10705cc843218_180x120.jpg",alt:"图标"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//dbaplus.cn/news-21-439-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Codis 作者首度揭秘 TiKV 事务模型，Google Spanner 开源实现！dbaplus.cn"),a("img",{attrs:{src:"https://pic2.zhimg.com/v2-b43f1c621465a5638b9d4ad288f28895_ipico.jpg",alt:"图标"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//www.it165.net/admin/html/201508/6346.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速理解 Omid:Yahoo 在 HBase 上的分布式事务方案 - 数据库服务器 - 最新 IT 资讯_电脑知识大全_网络安全教程 - 次元立方网www.it165.net"),a("img",{attrs:{src:"https://pic1.zhimg.com/v2-10fe546dbb663db23816bafbb8b5d808_ipico.jpg",alt:"图标"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("全文完")]),t._v(" "),a("p",[t._v("本文由 "),a("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[t._v("简悦 SimpRead"),a("OutboundLink")],1),t._v(" 优化，用以提升阅读体验")]),t._v(" "),a("p",[t._v("使用了 全新的简悦词法分析引擎 beta，"),a("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),a("OutboundLink")],1),t._v("详细说明")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53197633#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("背景"),a("OutboundLink")],1),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53197633#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("特点"),a("OutboundLink")],1),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53197633#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Snapshop isolation"),a("OutboundLink")],1),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53197633#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lock"),a("OutboundLink")],1),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53197633#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("事务"),a("OutboundLink")],1),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53197633#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("存储 - COLUMN"),a("OutboundLink")],1),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53197633#sr-toc-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("事务提交关键流程"),a("OutboundLink")],1),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53197633#sr-toc-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("读取"),a("OutboundLink")],1),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53197633#sr-toc-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("异常处理 - 清理锁"),a("OutboundLink")],1),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53197633#sr-toc-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),a("OutboundLink")],1),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53197633#sr-toc-10",target:"_blank",rel:"noopener noreferrer"}},[t._v("点评"),a("OutboundLink")],1),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53197633#sr-toc-11",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=i.exports}}]);