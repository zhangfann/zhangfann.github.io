(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{531:function(e,a,t){"use strict";t.r(a);var r=t(42),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("数据库的2021: 本年回顾")]),e._v(" "),t("p",[e._v("对数据库行业来说，这是疯狂的一年，新来者超越了守旧者，供应商为基准数字而争斗，以及令人瞠目结舌的融资回合。我们也不得不通过收购、破产或撤资来和我们的一些数据库朋友说再见。")]),e._v(" "),t("p",[e._v("随着年底的临近，在我们进入2022年的时候，值得反思和总结。以下是一些亮点，以及我对它们对数据库领域可能意味着什么的一些想法。")]),e._v(" "),t("h1",{attrs:{id:"postgresql的统治"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postgresql的统治"}},[e._v("#")]),e._v(" PostgreSQL的统治")]),e._v(" "),t("p",[e._v("开发者中的传统智慧已经发生了变化。PostgreSQL已经成为新应用程序的首选。它是可靠的。它有许多功能，并不断增加更多。在2010年，PostgreSQL开发团队转向了更积极的发布计划，每年推出一次新的主要版本（H/T Tomas Vondra）。当然，PostgreSQL也是开源的。")]),e._v(" "),t("p",[e._v("现在，"),t("strong",[e._v("PostgreSQL的兼容性")]),e._v("是很多系统的一个突出特点。这种兼容性是通过支持PostgreSQL的SQL方言（DuckDB）、有线协议（QuestDB、HyPer）或整个前端（Amazon Aurora、YugaByte、Yellowbrick）实现的。大公司已经加入了进来。谷歌在10月宣布，他们在Cloud Spanner中增加了PostgreSQL的兼容性。同样在10月，亚马逊宣布了Babelfish功能，将SQL Server查询转换为Aurora PostgreSQL。")]),e._v(" "),t("p",[e._v("衡量一个数据库是否受欢迎的一个标准是"),t("strong",[e._v("DB-Engine排名")]),e._v("。这个排名并不完美，分数有些主观，但它是对前10个系统的合理近似值。截至2021年12月，该排名显示，虽然PostgreSQL仍然是第四大最受欢迎的数据库（在Oracle、MySQL和MSSQL之后），但它在过去一年中缩小了与MSSQL的差距。")]),e._v(" "),t("p",[e._v("另一个需要考虑的趋势是PostgreSQL在网上社区被提及的频率。这给出了另一个信号，即人们在数据库中谈论的内容。我下载了所有在数据库Subreddit上发表的2021条评论，并计算了数据库名称的频率（当然是在PostgreSQL中）。我从我的数据库数据库中交叉引用了我所知道的每一个数据库的列表，清理了缩写（例如，Postgres → PostgreSQL，Mongo → MongoDB，ES → Elasticsearch），然后计算出前10个提及最多的DBMS。")]),e._v(" "),t("p",[e._v("当然这个排名并不科学，因为我没有对评论进行情感分析。但它清楚地表明，在过去的一年中，人们提到Postgres的次数比其他系统多。经常有开发者发帖询问他们的新应用应该使用什么DBMS，而社区的回复几乎都是Postgres。")]),e._v(" "),t("p",[e._v("首先，关系型数据库系统已经成为绿色应用的首选，这是一件好事。这显示了Ted Codd在1970年代的关系模型的持久力。其次，PostgreSQL是一个伟大的数据库系统。是的，它有已知的问题和黑暗的角落，就像每一个DBMS一样。但是，由于有这么多的注意力和精力集中在它身上，PostgreSQL在这些年里只会变得更好。")]),e._v(" "),t("h1",{attrs:{id:"暴力的基准测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#暴力的基准测试"}},[e._v("#")]),e._v(" 暴力的基准测试")]),e._v(" "),t("p",[e._v("今年，不同的数据库供应商之间在基准测试结果上并没有放松。供应商试图表明他们的系统比竞争对手的系统快，这可以追溯到20世纪80年代末。这就是为什么TPC的建立是为了提供一个无党派的论坛来主持比较的工作。但是，随着TPC的影响力和普遍性在过去十年中的减弱，我们现在发现自己处于新一轮的数据库基准战争中。")]),e._v(" "),t("p",[e._v("今年有三场因基准结果而升温的主要争斗。")]),e._v(" "),t("ul",[t("li",[e._v("Databricks vs. Snowflake")])]),e._v(" "),t("p",[e._v("Databricks宣布他们新的Photon SQL引擎在100TB TPC-DS中创造了新的世界纪录。Snowflake进行了反击，称其数据库速度快了2倍，而且Databricks对Snowflake的运行是错误的。Databricks反驳说，他们的SQL引擎提供了比Snowflake更好的执行和价格性能。")]),e._v(" "),t("ul",[t("li",[e._v("Rockset vs. Apache Druid vs. ClickHouse")])]),e._v(" "),t("p",[e._v("ClickHouse大摇大摆地走出来，说与Druid和Rockset相比，它的成本效益很好。但是没有那么快。Imply用对Druid的较新版本的测试来回应，并声称取得了胜利。Rockset也加入进来，说它的性能在实时分析方面比其他两家更好。")]),e._v(" "),t("ul",[t("li",[e._v("ClickHouse vs. TimescaleDB")])]),e._v(" "),t("p",[e._v("嗅到了水中的血腥味，老虎式的Timescale也加入了战团。他们公布了自己的基准测试结果，并借此机会指出了ClickHouse技术的弱点。关于第三方基准的讨论在Hacker News上变得很激烈。")]),e._v(" "),t("p",[e._v("在以前的基准地盘战争中，数据库社区已经流了太多的血[1] [2] [3]。我完全承认，我曾经在这个游戏中。但是我已经失去了太多的朋友。我甚至因为马虎的基准测试结果而和一个女朋友分手过一次。随着我年龄的增长，我现在可以说不值得了。现在比较系统就更难了，因为云DBMS有很多活动部件和可调整的选项，往往很难确定性能差异的真正原因。真正的应用也不仅仅是一个接一个地运行相同的查询。摄取、转换和清理数据时的用户体验与原始性能数字一样重要。而且，正如我在这篇关于Databricks的基准测试结果的文章中告诉记者的那样，只有老人才会关心官方的TPC数字。")]),e._v(" "),t("h1",{attrs:{id:"大数据-大资金"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大数据-大资金"}},[e._v("#")]),e._v(" 大数据，大资金")]),e._v(" "),t("p",[e._v("自2020年下半年以来，价值至少1亿美元的风险投资回合的数量一直在稳步增长。2020年有327个这样的巨型交易（仅不到风险投资交易总额的一半）。而截至2021年1月，有超过100个由风险投资支持的价值1亿美元以上的投资回合。")]),e._v(" "),t("p",[e._v("其中很多投资资金在2021年被扔给了数据库公司。对于运行中的数据库，CockroachDB以1.6亿美元的轮次开始了这一年的筹资排行榜，然后在2021年12月又筹集了2.78亿美元，结束了这一年的筹资。Yugabyte在筹集1.88亿美元的C轮融资时得到了回报。PlanetScale为他们的托管版Vitess拉出了2000万美元的B轮融资。相对较老的NoSQL中坚力量DataStax也为他们的Cassandra业务筹集了3760万美元的风险投资。")]),e._v(" "),t("p",[e._v("尽管这些金额令人印象深刻，但分析型数据库市场更加火热。TileDB在2021年9月筹集了一笔未披露的金额。Vectorized.io为其兼容Kafka的流媒体平台筹集了1500万美元。StarTree走出了隐身状态，宣布了其2400万美元的融资，以实现Apache Pinot的商业化。Matviews-on-steroids DBMS Materialize宣布，他们的C轮融资获得了6000万美元。SingleStore在2021年9月筹集了8000万美元，使他们离上市又近了一步。年初，Starburst Data为其Trino系统（以前的PrestoSQL）筹集了1亿美元。Firebolt是另一家走出隐身状态的DBMS初创公司，宣布他们为其基于ClickHouse分叉的新云数据仓库筹集了1.27亿美元。一家新公司ClickHouse, Inc.筹集了惊人的2.5亿美元，以围绕该系统建立一个新公司（以及从Yandex获得使用ClickHouse名称的权利）。")]),e._v(" "),t("p",[e._v("但今年最大一轮融资的明显赢家是Databricks，他们在2021年8月筹集了高达16亿美元的资金，把其他人都吓跑了。")]),e._v(" "),t("p",[e._v("我们正处于数据库的黄金时代。今天有这么多优秀的选择。投资者正在寻找能够成为下一个类似Snowflake的IPO的数据库初创企业。这些筹款金额比以前的数据库初创公司要大。例如，Snowflake直到其D系列才有一轮超过1亿美元的融资，那是在公司成立五年后。Starburst在成立不到三年的时间内完成了1亿美元的融资。现在，在融资方面有很多因素（例如，Starburst团队在分拆之前在TeraData从事Presto的工作多年），但我感觉这些天有更多的钱被扔了出去。")]),e._v(" "),t("h1",{attrs:{id:"悼念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#悼念"}},[e._v("#")]),e._v(" 悼念")]),e._v(" "),t("p",[e._v("遗憾的是，在过去的一年里，我们与一些数据库朋友告别了。")]),e._v(" "),t("p",[e._v("ServiceNow收购了Swarm64\n该公司一开始是一个用于在PostgreSQL上运行分析工作负载的FPGA加速器。然后他们转而成为一个使用扩展的PostgreSQL的纯软件加速器。但他们没能获得牵引力，尤其是在面对其他资金雄厚的云数据仓库时。在ServiceNow被收购后，Swarm64产品是否会继续下去仍然没有消息。")]),e._v(" "),t("p",[e._v("Splice Machine破产了\nSplice正在推动一个混合（HTAP）的DBMS，将HBase用于操作工作负载和Spark SQL用于分析。他们随后推动为运营/实时ML应用提供一个平台。但是，由于专门的OLTP和OLAP系统的主导地位，一个一体化的混合系统未能在数据库市场上取得进展。")]),e._v(" "),t("p",[e._v("私募股权公司收购Cloudera\n自从上个十年的后半期世界远离了MapReduce和Hadoop技术，Cloudera就没能在云数据仓库市场有同样的吸引力。Impala和Kudu的大部分原始工程团队已经离开了公司，尽管这些项目仍在开发并推出新版本。该公司的股票已经跌到了2018年的IPO价格以下。它的新投资者是否能够扭转公司的局面，还有待观察。")]),e._v(" "),t("p",[e._v("看到另一个数据库项目或公司倒闭总是令人难过，但这就是数据库行业的血腥性质。开源有可能帮助DBMS比创建它的公司更长久，但并不总是如此。由于其复杂性，数据库需要全职工作人员来修复错误和增加新功能。将一个已停用的DBMS的源代码权利和控制权转移到一个开源软件基金会，如Apache基金会或CNCF，并不意味着该项目将神奇地复苏。例如，RethinkDB在公司破产后被捐赠给了Linux基金会，但从Github上的所有迹象来看，他们已经死在了水里（提交量很少，PR没有被合并）。这种情况的另一个例子包括DeepDB：该公司失败了，并为代码创建了自己的非营利基金会，但没有人在上面工作。我预计明年会有更多的数据库公司倒闭，它们无法与主要的云计算供应商和上面列出的资金充足的初创公司竞争。")]),e._v(" "),t("h1",{attrs:{id:"毅力的见证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#毅力的见证"}},[e._v("#")]),e._v(" 毅力的见证")]),e._v(" "),t("p",[e._v("对许多人来说，这场大流行病是一个艰难的时刻。新闻中报道了这么多可怕的事情，当一个令人振奋的故事发生时总是很好。正如你们中的许多人所知，甲骨文公司的联合创始人拉里-埃里森近年来一直在倒霉。早在2015年，拉里对事情感觉很好，因为他是世界上第五大富豪。但沧海桑田，拉里在2018年的亿万富翁排名中跌落到了第10位的低位。")]),e._v(" "),t("p",[e._v("但这种情况在2021年12月发生了变化，拉里-埃里森超过了谷歌联合创始人拉里-佩奇和谢尔盖-布林，排名上升，再次成为世界第五富豪。2021年12月，拉里-埃里森单日赚了160亿美元，此前由于宣布企业盈利好于预期，甲骨文公司的股票在过去20年中的单日涨幅位居第二。新闻媒体将其归结为投资者的信心增强，认为甲骨文向云计算的转变正在发挥作用。")]),e._v(" "),t("p",[e._v("拉里和我是老相识了，对于数据库界和整个人类来说，这无疑是一个振奋人心的故事。当他作为世界上第10位最富有的人时，他可能会感到有点忧郁，他的运气不好。但我很高兴看到，他能够把自己从阴沟里拉出来，重新回到属于他所属的位置。")])])}),[],!1,null,null,null);a.default=s.exports}}]);