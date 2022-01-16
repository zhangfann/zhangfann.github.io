(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{476:function(n,a,r){"use strict";r.r(a);var t=r(42),e=Object(t.a)({},(function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("p",[n._v("推广 - @dongfuye1 - 什么是 TCC，TCC 是 Try 、Confirm 、Cancel 三个词语的缩写，最早是由 Pat Helland 于 2007 年发表的一篇名为《 Life b......")]),n._v(" "),r("p",[n._v("什么是 TCC，TCC 是 Try 、Confirm 、Cancel 三个词语的缩写，最早是由 Pat Helland 于 2007 年发表的一篇名为《 Life beyond Distributed Transactions:an Apostate’s Opinion 》的论文提出。")]),n._v(" "),r("h3",{attrs:{id:"tcc-组成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcc-组成"}},[n._v("#")]),n._v(" TCC 组成")]),n._v(" "),r("p",[n._v("TCC 分为 3 个阶段")]),n._v(" "),r("ul",[r("li",[n._v("Try 阶段：尝试执行，完成所有业务检查（一致性）, 预留必须业务资源（准隔离性）")]),n._v(" "),r("li",[n._v("Confirm 阶段：如果所有分支的 Try 都成功了，则走到 Confirm 阶段。Confirm 真正执行业务，不作任何业务检查，只使用 Try 阶段预留的业务资源")]),n._v(" "),r("li",[n._v("Cancel 阶段：如果所有分支的 Try 有一个失败了，则走到 Cancel 阶段。Cancel 释放 Try 阶段预留的业务资源。")])]),n._v(" "),r("p",[n._v("TCC 分布式事务里，有 3 个角色，与经典的 XA 分布式事务一样：")]),n._v(" "),r("ul",[r("li",[n._v("AP / 应用程序，发起全局事务，定义全局事务包含哪些事务分支")]),n._v(" "),r("li",[n._v("RM / 资源管理器，负责分支事务各项资源的管理")]),n._v(" "),r("li",[n._v("TM / 事务管理器，负责协调全局事务的正确执行，包括 Confirm，Cancel 的执行，并处理网络异常")])]),n._v(" "),r("p",[n._v("如果我们要进行一个类似于银行跨行转账的业务，转出（ TransOut ）和转入（ TransIn ）分别在不同的微服务里，一个成功完成的 TCC 事务典型的时序图如下：")]),n._v(" "),r("p",[r("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-3ec75efe643ab05d89ce0bcb344a46ed_1440w.jpg",alt:"img"}})]),n._v(" "),r("h3",{attrs:{id:"tcc-网络异常"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcc-网络异常"}},[n._v("#")]),n._v(" TCC 网络异常")]),n._v(" "),r("p",[n._v("TCC 在整个全局事务的过程中，可能发生各类网络异常情况，典型的是空回滚、幂等、悬挂，由于 TCC 的异常情况，和 SAGA 、可靠消息等事务模式有相近的地方，因此我们把所有异常的解决方案统统放在这篇文章"),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/388444465",target:"_blank",rel:"noopener noreferrer"}},[n._v("《还被分布式事务的网络异常困扰吗？一个函数调用帮你搞定它》"),r("OutboundLink")],1),n._v("进行讲解")]),n._v(" "),r("h3",{attrs:{id:"tcc-实践"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcc-实践"}},[n._v("#")]),n._v(" TCC 实践")]),n._v(" "),r("p",[n._v("对于前面的跨行转账操作，最简单的做法是，在 Try 阶段调整余额，在 Cancel 阶段反向调整余额，Confirm 阶段则空操作。这么做带来的问题是，如果 A 扣款成功，金额转入 B 失败，最后回滚，把 A 的余额调整为初始值。在这个过程中如果 A 发现自己的余额被扣减了，但是收款方 B 迟迟没有收到余额，那么会对 A 造成困扰。")]),n._v(" "),r("p",[n._v("更好的做法是，Try 阶段冻结 A 转账的金额，Confirm 进行实际的扣款，Cancel 进行资金解冻，这样用户在任何一个阶段，看到的数据都是清晰明了的。")]),n._v(" "),r("p",[n._v("下面我们进行一个 TCC 事务的具体开发")]),n._v(" "),r("p",[n._v("目前可用于 TCC 的开源框架，主要为 Java 语言，其中以 seata 为代表。我们的例子采用 go 语言，使用的分布式事务框架为 https://github.com/yedf/dtm，它对分布式事务的支持非常优雅。下面来详细讲解 TCC 的组成")]),n._v(" "),r("p",[n._v("我们首先创建两张表，一张是用户余额表，一张是冻结资金表，建表语句如下：")]),n._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("CREATE TABLE dtm_busi.`user_account` (\n  `id` int(11) AUTO_INCREMENT PRIMARY KEY,\n  `user_id` int(11) not NULL UNIQUE ,\n  `balance` decimal(10,2) NOT NULL DEFAULT '0.00',\n  `create_time` datetime DEFAULT now(),\n  `update_time` datetime DEFAULT now()\n);\n\nCREATE TABLE dtm_busi.`user_account_trading` (\n  `id` int(11) AUTO_INCREMENT PRIMARY KEY,\n  `user_id` int(11) not NULL UNIQUE ,\n  `trading_balance` decimal(10,2) NOT NULL DEFAULT '0.00',\n  `create_time` datetime DEFAULT now(),\n  `update_time` datetime DEFAULT now()\n);\n")])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br"),r("span",{staticClass:"line-number"},[n._v("6")]),r("br"),r("span",{staticClass:"line-number"},[n._v("7")]),r("br"),r("span",{staticClass:"line-number"},[n._v("8")]),r("br"),r("span",{staticClass:"line-number"},[n._v("9")]),r("br"),r("span",{staticClass:"line-number"},[n._v("10")]),r("br"),r("span",{staticClass:"line-number"},[n._v("11")]),r("br"),r("span",{staticClass:"line-number"},[n._v("12")]),r("br"),r("span",{staticClass:"line-number"},[n._v("13")]),r("br"),r("span",{staticClass:"line-number"},[n._v("14")]),r("br"),r("span",{staticClass:"line-number"},[n._v("15")]),r("br")])]),r("p",[n._v("trading 表中，trading_balance 记录正在交易的金额。")]),n._v(" "),r("p",[n._v("我们先编写核心代码，冻结 / 解冻资金操作，会检查约束 balance+trading_balance >= 0，如果约束不成立，执行失败")]),n._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v('func adjustTrading(uid int, amount int) (interface{}, error) {\n  幂等、悬挂处理\n  dbr := sdb.Exec("update dtm_busi.user_account_trading t join dtm_busi.user_account a on t.user_id=a.user_id and t.user_id=? set t.trading_balance=t.trading_balance + ? where a.balance + t.trading_balance + ? >= 0", uid, amount, amount)\n  if dbr.Error == nil && dbr.RowsAffected == 0 { // 如果余额不足，返回错误\n    return nil, fmt.Errorf("update error, balance not enough")\n  }\n  其他情况检查及处理\n}\n')])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br"),r("span",{staticClass:"line-number"},[n._v("6")]),r("br"),r("span",{staticClass:"line-number"},[n._v("7")]),r("br"),r("span",{staticClass:"line-number"},[n._v("8")]),r("br")])]),r("p",[n._v("然后是调整余额")]),n._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v('func adjustBalance(uid int, amount int) (ret interface{}, rerr error) {\n  幂等、悬挂处理\n  这里略去进行相关的事务处理，包括开启事务，以及在 defer 中处理提交或回滚\n  // 将原先冻结的资金记录解冻\n  dbr := db.Exec("update dtm_busi.user_account_trading t join dtm_busi.user_account a on t.user_id=a.user_id and t.user_id=? set t.trading_balance=t.trading_balance + ?", uid, -amount)\n  if dbr.Error == nil && dbr.RowsAffected == 1 { // 解冻成功\n    // 调整金额\n    dbr = db.Exec("update dtm_busi.user_account set balance=balance+? where user_id=?", amount, uid)\n  }\n  其他情况检查及处理\n}\n')])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br"),r("span",{staticClass:"line-number"},[n._v("6")]),r("br"),r("span",{staticClass:"line-number"},[n._v("7")]),r("br"),r("span",{staticClass:"line-number"},[n._v("8")]),r("br"),r("span",{staticClass:"line-number"},[n._v("9")]),r("br"),r("span",{staticClass:"line-number"},[n._v("10")]),r("br"),r("span",{staticClass:"line-number"},[n._v("11")]),r("br")])]),r("p",[n._v("下面我们来编写具体的 Try/Confirm/Cancel 的处理函数")]),n._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v('RegisterPost(app, "/api/TransInTry", func (c *gin.Context) (interface{}, error) {\n  return adjustTrading(1, reqFrom(c).Amount)\n})\nRegisterPost(app, "/api/TransInConfirm", func TransInConfirm(c *gin.Context) (interface{}, error) {\n  return adjustBalance(1, reqFrom(c).Amount)\n})\nRegisterPost(app, "/api/TransInCancel", func TransInCancel(c *gin.Context) (interface{}, error) {\n  return adjustTrading(1, -reqFrom(c).Amount)\n})\n\nRegisterPost(app, "/api/TransOutTry", func TransOutTry(c *gin.Context) (interface{}, error) {\n  return adjustTrading(2, -reqFrom(c).Amount)\n})\nRegisterPost(app, "/api/TransOutConfirm", func TransInConfirm(c *gin.Context) (interface{}, error) {\n  return adjustBalance(2, -reqFrom(c).Amount)\n})\nRegisterPost(app, "/api/TransOutCancel", func TransInCancel(c *gin.Context) (interface{}, error) {\n  return adjustTrading(2, reqFrom(c).Amount)\n})\n')])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br"),r("span",{staticClass:"line-number"},[n._v("6")]),r("br"),r("span",{staticClass:"line-number"},[n._v("7")]),r("br"),r("span",{staticClass:"line-number"},[n._v("8")]),r("br"),r("span",{staticClass:"line-number"},[n._v("9")]),r("br"),r("span",{staticClass:"line-number"},[n._v("10")]),r("br"),r("span",{staticClass:"line-number"},[n._v("11")]),r("br"),r("span",{staticClass:"line-number"},[n._v("12")]),r("br"),r("span",{staticClass:"line-number"},[n._v("13")]),r("br"),r("span",{staticClass:"line-number"},[n._v("14")]),r("br"),r("span",{staticClass:"line-number"},[n._v("15")]),r("br"),r("span",{staticClass:"line-number"},[n._v("16")]),r("br"),r("span",{staticClass:"line-number"},[n._v("17")]),r("br"),r("span",{staticClass:"line-number"},[n._v("18")]),r("br"),r("span",{staticClass:"line-number"},[n._v("19")]),r("br")])]),r("p",[n._v("到此各个子事务的处理函数已经 OK 了，然后是开启 TCC 事务，进行分支调用")]),n._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v('// TccGlobalTransaction 会开启一个全局事务\n_, err := dtmcli.TccGlobalTransaction(DtmServer, func(tcc *dtmcli.Tcc) (rerr error) {\n  // CallBranch 会将事务分支的 Confirm/Cancel 注册到全局事务上，然后直接调用 Try\n  res1, rerr := tcc.CallBranch(&TransReq{Amount: 30}, host+"/api/TransOutTry", host+"/api/TransOutConfirm", host+"/api/TransOutRevert"\n  进行错误检查，以及其他逻辑\n  res2, rerr := tcc.CallBranch(&TransReq{Amount: 30}, host+"/api/TransInTry", host+"/api/TransInConfirm", host+"/api/TransInRevert")\n  进行错误检查，有任何错误，返回错误，回滚交易\n  // 如果没有错误，函数正常返回后，全局事务会提交，TM 会调用各个事务分支的 Confirm，完成整个事务\n})\n')])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br"),r("span",{staticClass:"line-number"},[n._v("6")]),r("br"),r("span",{staticClass:"line-number"},[n._v("7")]),r("br"),r("span",{staticClass:"line-number"},[n._v("8")]),r("br"),r("span",{staticClass:"line-number"},[n._v("9")]),r("br")])]),r("p",[n._v("至此，一个完整的 TCC 分布式事务编写完成。")]),n._v(" "),r("p",[n._v("如果您想要完整运行一个成功的示例，那么按照 dtm 项目的说明搭建好环境之后，运行下面命令运行 tcc 的例子即可")]),n._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("go run app/main.go tcc_barrier\n")])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br")])]),r("h3",{attrs:{id:"tcc-的回滚"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcc-的回滚"}},[n._v("#")]),n._v(" TCC 的回滚")]),n._v(" "),r("p",[n._v("假如银行将金额准备转入用户 2 时，发现用户 2 的账户异常，返回失败，会怎么样？我们修改代码，模拟这种情况：")]),n._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v('RegisterPost(app, "/api/TransInTry", func (c *gin.Context) (interface{}, error) {\n  return gin.H{"dtm_result":"FAILURE"}, nil\n})\n')])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br")])]),r("p",[n._v("这是事务失败交互的时序图")]),n._v(" "),r("p",[r("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-2bf898713a7288b7ea1d2687058d9c44_1440w.jpg",alt:"img"}})]),n._v(" "),r("p",[n._v("这个跟成功的 TCC 差别就在于，当某个子事务返回失败后，后续就回滚全局事务，调用各个子事务的 Cancel 操作，保证全局事务全部回滚。")]),n._v(" "),r("h3",{attrs:{id:"小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[n._v("#")]),n._v(" 小结")]),n._v(" "),r("p",[n._v("在这篇文章里，我们介绍了 TCC 的理论知识，也通过一个例子，完整给出了编写一个 TCC 事务的过程，涵盖了正常成功完成，以及成功回滚的情况。相信读者通过这边文章，对 TCC 已经有了深入的理解。")]),n._v(" "),r("p",[n._v("关于分布式事务中需要处理的幂等、悬挂、空补偿，请参考另一篇文章："),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/388444465",target:"_blank",rel:"noopener noreferrer"}},[n._v("分布式事务你不能不知的坑，一个函数调用帮你搞定它"),r("OutboundLink")],1)]),n._v(" "),r("p",[n._v("关于分布式事务更多更全面的知识，请参考"),r("a",{attrs:{href:"https://segmentfault.com/a/1190000040321750",target:"_blank",rel:"noopener noreferrer"}},[n._v("分布式事务最经典的七种解决方案"),r("OutboundLink")],1)]),n._v(" "),r("p",[n._v("文中使用的例子节选自 "),r("a",{attrs:{href:"https://github.com/yedf/dtm",target:"_blank",rel:"noopener noreferrer"}},[n._v("yedf/dtm"),r("OutboundLink")],1),n._v("，支持多种事务模式：TCC 、SAGA 、XA 、事务消息 跨语言支持，已支持 golang 、python 、PHP 、nodejs 等语言的客户端。提供子事务屏障功能，优雅解决幂等、悬挂、空补偿等问题。阅读完此篇干货，欢迎大家访问 https://github.com/yedf/dtm 项目，给颗星星支持！")]),n._v(" "),r("p",[n._v("全文完")]),n._v(" "),r("p",[n._v("本文由 "),r("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[n._v("简悦 SimpRead"),r("OutboundLink")],1),n._v(" 优化，用以提升阅读体验")]),n._v(" "),r("p",[n._v("使用了 全新的简悦词法分析引擎 beta，"),r("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[n._v("点击查看"),r("OutboundLink")],1),n._v("详细说明")]),n._v(" "),r("p",[r("a",{attrs:{href:"https://v2ex.com/t/794530#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[n._v("TCC 组成"),r("OutboundLink")],1),r("a",{attrs:{href:"https://v2ex.com/t/794530#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[n._v("TCC 网络异常"),r("OutboundLink")],1),r("a",{attrs:{href:"https://v2ex.com/t/794530#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[n._v("TCC 实践"),r("OutboundLink")],1),r("a",{attrs:{href:"https://v2ex.com/t/794530#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[n._v("TCC 的回滚"),r("OutboundLink")],1),r("a",{attrs:{href:"https://v2ex.com/t/794530#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[n._v("小结"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);