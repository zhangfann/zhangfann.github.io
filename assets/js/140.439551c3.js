(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{522:function(_,t,v){"use strict";v.r(t);var r=v(42),a=Object(r.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("人人都在谈的图数据库到底是个啥？")]),_._v(" "),v("ul",[v("li",[_._v("云社区 - 华为云图数据库的原始设计动机就是更好地描述实体之间的关系。图数据库与关系型数据库最大的不同就是免索引邻接。图数据模型中的每个节点都会维护与它相邻的节点关系，这就...")])]),_._v(" "),v("p",[_._v("近些年来，在大数据处理过程中有一种被广泛提及和使用的数据库，那就是图数据库。那么图数据库究竟是什么呢？")]),_._v(" "),v("p",[_._v("图数据库，如果是刚接触的人，可能会被其字面意思所误导。其实，图数据库并不是指存储图片、图像的数据库，而是指存储图这种数据结构的数据库。那么图又是什么呢？")]),_._v(" "),v("p",[_._v("我们通过下面的例子来认识一下。")]),_._v(" "),v("p",[_._v("东汉末年，孙权、刘备联军曾在赤壁一带以火攻敌船之计大破曹军。")]),_._v(" "),v("p",[_._v("如果我们把各阵营之间的关系抽象一下，以阵营作为点，阵营之间的关系作为边，这样我们就可以用如下的图来形象地表示上述关系：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://bbs-img.huaweicloud.com/blogs/img/1620462355464014840.PNG",alt:""}})]),_._v(" "),v("p",[_._v("以上就是这里所谓的图（的可视化展示）。")]),_._v(" "),v("p",[_._v("我们把这种存储实体和实体之间关系的数据结构，称为图，Graph，图由点和边组成，一个点就是一个实体，比如上述实例中的阵营，两个实体之间的关系则用有方向或无方向的边来表示，比如刘备和孙权之间的联盟关系等。这种通用的结构可以对现实中的各种场景进行建模，从交通运输系统到组织架构管理，从工艺流程设计到社交网络。")]),_._v(" "),v("h2",{attrs:{id:"什么是图数据库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是图数据库"}},[_._v("#")]),_._v(" 什么是图数据库")]),_._v(" "),v("p",[_._v("知道了图的概念，你就可以理解什么是图数据库了。简单来说，图数据库就是用来处理图这种数据结构的工具。")]),_._v(" "),v("p",[_._v("不同于传统的使用二维表格存储数据的关系型数据库，图数据库在传统意义上被归类为 NoSQL(Not Only SQL) 数据库的一种，也就是说图数据库属于非关系型数据库。")]),_._v(" "),v("p",[_._v("一般的图数据库至少包含图存储、图查询、图分析这三种功能。")]),_._v(" "),v("h2",{attrs:{id:"为什么要用图数据库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用图数据库"}},[_._v("#")]),_._v(" 为什么要用图数据库")]),_._v(" "),v("p",[_._v("那我们为什么要用图数据库呢？我们还是用东汉末年的例子来讲解一下图数据库相对于关系型数据库的优势。")]),_._v(" "),v("p",[_._v("假设某关系型数据库中有三张表，分别是东汉末年人物表、东汉末年战役表和东汉末年人物参战表。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("表 1  东汉末年人物表")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("ID")])]),_._v(" "),v("tr",[v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("2")])]),_._v(" "),v("tr",[v("td",[_._v("3")])]),_._v(" "),v("tr",[v("td",[_._v("…")])])])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("表 2  东汉末年战役表")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("ID")])]),_._v(" "),v("tr",[v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("2")])]),_._v(" "),v("tr",[v("td",[_._v("3")])]),_._v(" "),v("tr",[v("td",[_._v("…")])])])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("表 3 东汉末年人物参战表")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("ID")])]),_._v(" "),v("tr",[v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("2")])]),_._v(" "),v("tr",[v("td",[_._v("3")])]),_._v(" "),v("tr",[v("td",[_._v("…")])])])]),_._v(" "),v("p",[_._v("当我们想知道 “樊城之战的守方是谁”，查询一般会比较快，从表 2 可以直接得到，但当我们想知道“刘备集团发动了哪些战争” 的时候，尽管我们也可以从表 2 查到答案，但是我们可能需要遍历整个表 2，查询效率会瞬间降低。而当我们要查询诸如 “关羽出战过刘备集团发动的哪些战争” 的时候，我们来看一下执行这条查询时关系型数据库是怎么做的："),v("br"),_._v("\nA.    首先通过东汉末年人物表找到关羽对应的人物 ID"),v("br"),_._v("\nB.    再使用东汉末年人物参战表找到其参战的战役"),v("br"),_._v("\nC.    最后通过东汉末年战役表找到其参战的哪些战役的攻方是刘备集团")]),_._v(" "),v("p",[_._v("我们会发现，这个查询实在是太繁琐了。")]),_._v(" "),v("p",[_._v("而如果我们将以上表格转化为如下的一张关系图谱，那么谁和谁是什么关系就一目了然了。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://bbs-img.huaweicloud.com/blogs/img/1620462867304026073.PNG",alt:""}})]),_._v(" "),v("p",[_._v("这么说也许你还没有真正领略到图数据库的巨大威力，我们再来看一个最经典的社交网络中查询性能对比的数据。")]),_._v(" "),v("p",[_._v("在《Neo4j in Action》这本书中，作者做了一个测试：在一个包含 100 万人，每个人约有 50 个朋友的社交网络中找最大深度为 5 的朋友的朋友，得到的实验结果如下：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("深度")]),_._v(" "),v("th",[_._v("关系型数据库 MySQL 查询时间")]),_._v(" "),v("th",[_._v("图数据库 Neo4j 查询时间")]),_._v(" "),v("th",[_._v("返回结果数")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("2")]),_._v(" "),v("td",[_._v("0.016")]),_._v(" "),v("td",[_._v("0.01")]),_._v(" "),v("td",[_._v("~2500")])]),_._v(" "),v("tr",[v("td",[_._v("3")]),_._v(" "),v("td",[_._v("30.267")]),_._v(" "),v("td",[_._v("0.168")]),_._v(" "),v("td",[_._v("~11,0000")])]),_._v(" "),v("tr",[v("td",[_._v("4")]),_._v(" "),v("td",[_._v("1543.505")]),_._v(" "),v("td",[_._v("1.359")]),_._v(" "),v("td",[_._v("~60,0000")])]),_._v(" "),v("tr",[v("td",[_._v("5")]),_._v(" "),v("td",[_._v("未完成")]),_._v(" "),v("td",[_._v("2.132")]),_._v(" "),v("td",[_._v("~80,0000")])])])]),_._v(" "),v("p",[_._v("测试结果表明，深度为 2 时两种数据库的性能差别不大，都很迅速；当深度为 3 时，关系型数据库需要半分钟完成查询，图数据库依旧在 1 秒内搞定；当深度为 4 时，关系型数据库耗费了接近半小时返回结果，图数据库不到 2 秒；而当深度达到 5 以后，关系型数据库就迟迟无法响应了，图数据库却依旧可以「秒杀」，表现出了非常良好的性能。")]),_._v(" "),v("p",[_._v("据此，我们可以从以下几个方面理解为什么要用图数据库：")]),_._v(" "),v("ul",[v("li",[_._v("关系型数据库不擅长处理数据之间的关系，而图数据库在处理数据之间关系方面灵活且高性能")])]),_._v(" "),v("p",[_._v("我们不可否认关系型数据库自上世纪 80 年代以来一直都是数据库领域发展的主力，当前，随着社交、物联网、金融、电商等领域的快速发展，由此产生的数据呈现指数级的增长，而传统的关系型数据库在处理复杂关系的数据上表现很差，这是因为关系型数据库是通过外键的约束来实现多表之间的关系引用的。查询实体之间的关系需要 JOIN 操作，而 JOIN 操作通常非常耗时。")]),_._v(" "),v("p",[_._v("而图数据库的原始设计动机就是更好地描述实体之间的关系。图数据库与关系型数据库最大的不同就是免索引邻接。图数据模型中的每个节点都会维护与它相邻的节点关系，这就意味着查询时间与图的整体规模无关，只与每个节点的邻点数量有关，这使得图数据库在处理大量复杂关系时也能保持良好的性能。")]),_._v(" "),v("p",[_._v("另外，图的结构决定了其易于扩展的特性。我们不必在模型设计之初就把所有的细节都考虑到，因为在后续增加新的节点、新的关系、新的属性甚至新的标签都很容易，也不会破坏已有的查询和应用功能。")]),_._v(" "),v("ul",[v("li",[_._v("数据之间的关系越来越重要")])]),_._v(" "),v("p",[_._v("当我们在问图数据库为什么如此重要时，其实就是在问，数据之间的关系为何如此重要？正如大家都知道人际关系的价值，其实数据的价值也在于它们之间的关联关系上。")]),_._v(" "),v("p",[_._v("举个例子。最近直播带货非常火，假如某个主播在微博上有几百万的粉丝，这个数据如果不利用起来，价值并不大，但如果他直播带货，把关注他的粉丝和可能来他直播间购物的顾客联系起来时，这些数据立马展现出巨大的商业价值。")]),_._v(" "),v("ul",[v("li",[_._v("使用图的方式表达现实世界中的很多事物更直接，更直观，也更易于理解")])]),_._v(" "),v("p",[_._v("自然界中有各种各样的关系，而关系型数据库只能把这些拍扁成表格形态的行列数据，而图数据基于图模型以一种直观的方式去模拟这些关系，因而更形象。"),v("br"),_._v("\n另外，现在大部分的图数据库都提供了可视化的图展示，使得查询和分析变得很直观。")]),_._v(" "),v("ul",[v("li",[_._v("专业的图分析算法为实际场景提供解决方案")])]),_._v(" "),v("p",[_._v("图数据库起源于图理论，借助于专业的图分析算法，能够为实际场景提供合适的解决方案。")]),_._v(" "),v("h2",{attrs:{id:"图数据库如何存储、查询、分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图数据库如何存储、查询、分析"}},[_._v("#")]),_._v(" 图数据库如何存储、查询、分析")]),_._v(" "),v("ul",[v("li",[_._v("图存储")])]),_._v(" "),v("p",[_._v("图数据库如何存储图，对查询和分析效率至关重要。图数据库使用图模型来操作图数据。所谓的图模型是指图数据库描述和组织图数据的方式。")]),_._v(" "),v("p",[_._v("目前主流的图数据库选择的图模型是属性图。属性图由点、边、标签和属性组成，我们结合一个具体的属性图实例来看一下。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://bbs-img.huaweicloud.com/blogs/img/1620463155960023392.PNG",alt:""}})]),_._v(" "),v("p",[_._v("以上属性图可以帮助我们理解一些相关概念："),v("br"),_._v("\n       1）    可以为点设置标签，比如 person, war 等，拥有相同标签的点我们认为它们属于一个分组，是一个集合，这样刘备和曹操属于一个分组；"),v("br"),_._v("\n       2）    同样可以为边设置标签，标签可以为 relation 等；"),v("br"),_._v("\n       3）    节点可以拥有很多属性，比如 style name、year 等，这些属性值以键值对的形式表示，例如：刘备的 style name 是玄德；"),v("br"),_._v("\n       4）    边也可以拥有属性，比如 army 等；"),v("br"),_._v("\n       5）    边允许有方向，例如刘备和汉中之战之间的边的方向是由刘备指向汉中之战的；"),v("br"),_._v("\n       6）    元数据是用来描述点和边的属性信息的，元数据由若干标签组成，每个标签由若干属性组成。")]),_._v(" "),v("ul",[v("li",[_._v("图查询")])]),_._v(" "),v("p",[_._v("如果我们想知道刘备的籍贯在哪，刘备和曹操是什么关系，汉中之战的发动方是谁等等，这些都属于图查询的范畴。")]),_._v(" "),v("p",[_._v("我们知道，SQL 是关系型数据库的查询语言，但是图数据库的查询语言并没有复用 SQL。这是因为本质上图数据库处理的是高维数据，而 SQL 所适用的是二维的数据结构，其并不擅长关系的查询和操作。使用专门的图查询语言比 SQL 更加高效。")]),_._v(" "),v("p",[_._v("目前主流的图查询语言包括 Gremlin 和 Cypher 等。")]),_._v(" "),v("ul",[v("li",[_._v("图分析")])]),_._v(" "),v("p",[_._v("图分析是指通过各种图算法来挖掘图信息的一门技术。")]),_._v(" "),v("p",[_._v("核心的图算法可以分成三类：路径搜索类、中心性分析类和社区发现类。")]),_._v(" "),v("p",[_._v("路径搜索是探索图中节点通过边建立的直接或间接的联系。例如在下图中，通过路径搜索，我们发现了这样一条路径：孙策 -[夫妻]- 大乔 -[姐妹]- 小乔 -[夫妻]- 周瑜, 据此得知孙策和周瑜是连襟的关系。路径搜索类算法广泛用于物流配送、社交关系分析等场景。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://bbs-img.huaweicloud.com/blogs/img/1620463294246046999.png",alt:""}})]),_._v(" "),v("p",[_._v("中心性分析是指分析特定节点在图中的重要程度及其影响力。例如在上图中，直观来看，孙权是一个重要的人物，因为与他直接相连的边的数量最多。中心性分析类算法一般用于网页排序、意见领袖挖掘、流感传播等场景。")]),_._v(" "),v("p",[_._v("社区发现意在发现图中联系更紧密的群体结构。如果把更多的三国人物和关系加到上图中，利用 Louvain 等社团挖掘类算法，我们很容易发现这些人物分属三个阵营，如下图所示。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://bbs-img.huaweicloud.com/blogs/img/1620463329341092561.png",alt:""}})]),_._v(" "),v("p",[_._v("社区发现类算法可用于犯罪团伙挖掘等场景。")]),_._v(" "),v("h2",{attrs:{id:"图数据库有什么用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图数据库有什么用"}},[_._v("#")]),_._v(" 图数据库有什么用")]),_._v(" "),v("p",[_._v("介绍完图数据库的主要功能，我们再来看看图数据库都有哪些应用场景。图数据库擅长的应用领域包括：")]),_._v(" "),v("ul",[v("li",[_._v("社交领域：Facebook, Twitter 用它来进行社交关系管理、好友推荐")])]),_._v(" "),v("p",[_._v("我们熟悉的好友推荐。就可以采用推荐好友的好友的方法。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://bbs-img.huaweicloud.com/blogs/img/1620463451936042041.PNG",alt:""}})]),_._v(" "),v("p",[_._v("徐庶和司马徽向刘备推荐诸葛亮可以通过下图形象地展示")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://bbs-img.huaweicloud.com/blogs/img/1620463481203006484.PNG",alt:""}})]),_._v(" "),v("ul",[v("li",[_._v("电商领域：华为商城用它来实现商品实时推荐")])]),_._v(" "),v("p",[_._v("通过分析目标用户和其他用户的喜好商品，找到相似的其他用户，把这些用户购买过的商品推荐给目标用户。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://bbs-img.huaweicloud.com/blogs/img/1620463656071059070.PNG",alt:""}})]),_._v(" "),v("ul",[v("li",[_._v("金融领域：中国工商银行、摩根大通用它来做风控管理")])]),_._v(" "),v("p",[_._v("目前来看，金融领域对图数据库的需求很迫切，以贷款为例，在整个贷款周期中，图数据库都能发挥巨大的作用。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://bbs-img.huaweicloud.com/blogs/img/1620463759001059506.PNG",alt:""}})]),_._v(" "),v("ul",[v("li",[_._v("安平领域：公安用它来进行嫌疑关系审查、犯罪团伙挖掘")])]),_._v(" "),v("p",[_._v("东汉末年，曹操刺杀董卓，貂蝉挑拨董卓父子关系，吕布斩杀董卓，但是董卓却不知道，这些事件幕后主凶之一都有王允，如下图所示。现实中也可能是这样，幕后真凶可能与目标案件没有直接关系，只有间接的关系。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://bbs-img.huaweicloud.com/blogs/img/1620463793220042895.PNG",alt:""}})]),_._v(" "),v("h2",{attrs:{id:""}},[v("a",{staticClass:"header-anchor",attrs:{href:"#"}},[_._v("#")])]),_._v(" "),v("p",[_._v("什么样的场景适合用图数据库")]),_._v(" "),v("p",[_._v("你可以根据以下几点来判断你的问题是否需要图数据库：")]),_._v(" "),v("p",[_._v("如果你的问题中频繁出现多对多的关系，建议首选图数据库；"),v("br"),_._v("\n如果你的问题中数据之间的关系非常重要，建议首选图数据库；"),v("br"),_._v("\n如果你需要处理大规模数据集之间的关系，建议首选图数据库。")]),_._v(" "),v("h2",{attrs:{id:"图数据库产品"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图数据库产品"}},[_._v("#")]),_._v(" 图数据库产品")]),_._v(" "),v("p",[_._v("现在图数据库产品已经出现百家争鸣的局面，Neo4j 作为老牌图数据的代表，尽管依然拥趸众多，但是由于其自身的缺陷，挑战者正在增多，而"),v("a",{attrs:{href:"https://www.huaweicloud.com/product/ges.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("华为云图引擎图数据库 GES"),v("OutboundLink")],1),_._v(" 作为国产图数据库之光，正在成为其中的佼佼者。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://bbs-img.huaweicloud.com/blogs/img/1620463954521018403.PNG",alt:""}})]),_._v(" "),v("p",[_._v("GES 使用界面")]),_._v(" "),v("p",[_._v("【版权声明】本文为华为云社区用户原创内容，未经允许不得转载，如需转载请发送邮件至："),v("a",{attrs:{href:"mailto:cloudbbs@huaweicloud.com"}},[_._v("cloudbbs@huaweicloud.com")]),_._v("；如果您发现本社区中有涉嫌抄袭的内容，欢迎发送邮件进行举报，并提供相关证据，一经查实，本社区将立刻删除涉嫌侵权内容。")]),_._v(" "),v("p",[_._v("全文完")]),_._v(" "),v("p",[_._v("本文由 "),v("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[_._v("简悦 SimpRead"),v("OutboundLink")],1),_._v(" 优化，用以提升阅读体验")]),_._v(" "),v("p",[_._v("使用了 全新的简悦词法分析引擎 beta，"),v("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[_._v("点击查看"),v("OutboundLink")],1),_._v("详细说明")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://bbs.huaweicloud.com/blogs/265577#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[_._v("什么是图数据库"),v("OutboundLink")],1),v("a",{attrs:{href:"https://bbs.huaweicloud.com/blogs/265577#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[_._v("为什么要用图数据库"),v("OutboundLink")],1),v("a",{attrs:{href:"https://bbs.huaweicloud.com/blogs/265577#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[_._v("图数据库如何存储、查询、分析"),v("OutboundLink")],1),v("a",{attrs:{href:"https://bbs.huaweicloud.com/blogs/265577#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[_._v("图数据库有什么用"),v("OutboundLink")],1),v("a",{attrs:{href:"https://bbs.huaweicloud.com/blogs/265577#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[_._v("什么样的场景适合用图数据库"),v("OutboundLink")],1),v("a",{attrs:{href:"https://bbs.huaweicloud.com/blogs/265577#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[_._v("图数据库产品"),v("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);