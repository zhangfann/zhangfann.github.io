(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{519:function(e,t,r){"use strict";r.r(t);var c=r(42),a=Object(c.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("驭龙_开源主机入侵检测系统了解一下")]),e._v(" "),r("p",[r("strong",[e._v("0x00 简介")])]),e._v(" "),r("p",[e._v("驭龙 HIDS 是一款由 YSRC 开源的入侵检测系统，由 Agent， Daemon， Server 和 Web 四个部分组成。集异常检测、监控管理为一体，拥有异常行为发现、快速阻断、高级分析等功能，可从多个维度行为信息中发现入侵行为。")]),e._v(" "),r("p",[e._v("简单的讲，驭龙提供了一个 OSSEC/OSSIM 之外的开源 HIDS 选择。对于 “一个人的安全部 / 没有钱的安全部” 来说，是一个功能更丰富，二次开发门槛更低一些的“轮子”。")]),e._v(" "),r("p",[e._v("除了 agent 中涉及到驱动的部分是 c 写的，其他后端、web 都是 golang 写的，天然跨平台。agent 支持 32 位 / 64 位 win、linux 环境，后端所依赖的 Elasticsearch、MongoDB 本身也支持多平台，所以后端部署在 win、linux 皆可。如果只有小几百个 agent 部署实例，最少单台机器就能支撑。")]),e._v(" "),r("p",[r("strong",[e._v("0x01 功能特点")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("实时监控、秒级响应")])]),e._v(" "),r("li",[r("p",[e._v("全局首次出现概念，可发现未知威胁")])]),e._v(" "),r("li",[r("p",[e._v("支持自定义规则，高扩展性")])]),e._v(" "),r("li",[r("p",[e._v("高级分析功能，可溯源")])]),e._v(" "),r("li",[r("p",[e._v("全局快速阻断（进程、文件）")])]),e._v(" "),r("li",[r("p",[e._v("威胁情报查询（可自定义接口）")])])]),e._v(" "),r("p",[r("strong",[e._v("0x02 整体架构")])]),e._v(" "),r("p",[e._v("Agent 为采集者角色，收集服务器信息、开机启动项、计划任务、监听端口、服务、登录日志、用户列表，实时监控文件操作行为、网络连接、执行命令，初步筛选整理后通过 RPC 协议传输到 Server 节点。")]),e._v(" "),r("p",[e._v("Daemon 为守护服务进程，为 Agent 提供进程守护、静默环境部署作用，其任务执行功能通过接收服务端的指令实现 Agent 热更新、阻断功能和自定义命令执行等，任务传输过程使用 RSA 进行加密。")]),e._v(" "),r("p",[e._v("Server 为整套系统的大脑，支持横向扩展分布式部署，解析用户定义的规则（已内置部分基础规则）对从各 Agent 接收到的信息和行为进行分析检测和保存，可从各个维度的信息中发现 webshell 写入行为、异常登录行为、异常网络连接行为、异常命令调用行为等，从而实现对入侵行为实时预警。")]),e._v(" "),r("p",[e._v("架构图")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/PAV8ewtdsKpgbXDrcfjGk4OrCsRfyBknzaUYiblws7acuJKz5dibfKUAC1ykVqrJe4GkiaTNWibQUuD8Q48r9PfLIQ/640?wx_fmt=png",alt:""}})]),e._v(" "),r("p",[e._v("测试演示")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_gif/PAV8ewtdsKr48nKatW2cHlzhcsFU45NGhMSoJibp0f43xmRrvVFuibbSLDvwG6CMo2fEMtCaQNgpbqHQUb55icvpA/640?wx_fmt=gif",alt:""}})]),e._v(" "),r("p",[r("strong",[e._v("0x03 web 控制台")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("控制台拥有以下功能：")]),e._v(" "),r("p",[e._v("统计查看、主机查看管理、数据分析、告警处理、任务推送、规则配置、系统设置。")])])]),e._v(" "),r("p",[e._v("展示驭龙 HIDS 的各项数据信息，包括：警报分布、警报信息 TOP、警报类型统计、主机数、任务、数据总览等等。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/PAV8ewtdsKr48nKatW2cHlzhcsFU45NGWScJTBcibrKRVEZfkImTFJvHnYpLqyVQtrAasfz5hIw9yMU9M75iaRIg/640?wx_fmt=png",alt:""}})]),e._v(" "),r("ul",[r("li",[r("h3",{attrs:{id:"主机列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主机列表"}},[e._v("#")]),e._v(" 主机列表")]),e._v(" "),r("h3",{attrs:{id:"展示当前已部署-agent-的主机列表-可通过搜索功能和快速标签进行筛选并进行实时监控主机行为和查看关键信息。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#展示当前已部署-agent-的主机列表-可通过搜索功能和快速标签进行筛选并进行实时监控主机行为和查看关键信息。"}},[e._v("#")]),e._v(" 展示当前已部署 agent 的主机列表，可通过搜索功能和快速标签进行筛选并进行实时监控主机行为和查看关键信息。")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/PAV8ewtdsKr48nKatW2cHlzhcsFU45NGgQ5ZX8pcSHJZficiaib3UUDRIn5Bvz0ZzoicZt0j3e1ia3VAEibNQT29jjJg/640?wx_fmt=png",alt:""}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("主机信息查看")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/PAV8ewtdsKr48nKatW2cHlzhcsFU45NGH2q4jEowWE03p8iaLrJL2e37yaTIS2mI3P4T3Q47RoYKPQDXNmMd7zw/640?wx_fmt=png",alt:""}})])]),e._v(" "),r("li",[r("p",[e._v("实时监控")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_gif/PAV8ewtdsKr48nKatW2cHlzhcsFU45NGPNDIIzbeoNQiaKyFPQRPA57AYUo7UPLzcgtOLsItahZjwDzevJSSXpA/640?wx_fmt=gif",alt:""}})])]),e._v(" "),r("li",[r("p",[e._v("数据分析")]),e._v(" "),r("p",[e._v("通过此功能可搜索分析查看所有从 agent 收集到的信息，包括以下：用户列表、服务列表、开机启动项、计划任务、监听端口、登录日志、文件行为、网络连接、执行命令以及统计信息。可对整个企业主机行为信息进行人工分析和入侵行为进行溯源。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/PAV8ewtdsKr48nKatW2cHlzhcsFU45NGE28VJDDLzGa79ia7o6MYQfyKWQgvDs2usH7J8fNIzlGJWbylLRYOxWQ/640?wx_fmt=png",alt:""}})])]),e._v(" "),r("li",[r("p",[e._v("警告")]),e._v(" "),r("p",[e._v("所有触发规则的记录都会在此显示，通过此面板进行处置，网络连接、进程和文件可在此面板进行全网阻断。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/PAV8ewtdsKr48nKatW2cHlzhcsFU45NGiaal5RSRvsLhKPLPwD45ZOTVv2jQgojSVut3kH1hb5BXCE7Up4QarIg/640?wx_fmt=png",alt:""}})])]),e._v(" "),r("li",[r("p",[e._v("任务")]),e._v(" "),r("p",[e._v("可通过此功能对指定主机发送任务指令，包括以下：")])]),e._v(" "),r("li",[r("p",[e._v("kill: 结束进程 (传入进程名)")])]),e._v(" "),r("li",[r("p",[e._v("uninstall: 卸载自身")])]),e._v(" "),r("li",[r("p",[e._v("update: agent 更新")])]),e._v(" "),r("li",[r("p",[e._v("delete: 文件删除 (传入文件路径)")])]),e._v(" "),r("li",[r("p",[e._v("exec: 自定义命令 (这个功能其实比较 “危险”，所以对外发布的代码中我们注释掉了。如需启用这个功能，请去掉注释，自行编译 agent)")])]),e._v(" "),r("li",[r("p",[e._v("reload: 重启 agent")])]),e._v(" "),r("li",[r("p",[e._v("quit: 结束自身")])]),e._v(" "),r("li",[r("p",[e._v("规则引擎")]),e._v(" "),r("p",[e._v("定义告警规则，可通过此面板进行添加、修改、删除、启用、关闭、导出，具体格式可查看规则编写文档。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/PAV8ewtdsKr48nKatW2cHlzhcsFU45NGmC31iacoYYmp2JyKYficlVeBicRibehicWsia2vqoJ8BeR8rIZuN1A8dwdibQ/640?wx_fmt=png",alt:""}})])])]),e._v(" "),r("p",[e._v("其他还有些设置相关的，这边就不再贴了。")]),e._v(" "),r("p",[r("strong",[e._v("0x04 规则")])]),e._v(" "),r("p",[e._v("具体的规则格式、结构、字段定义请参照 Github 上的文档。")]),e._v(" "),r("p",[e._v("这里引用职业欠钱前辈写的《"),r("a",{attrs:{href:"https://xz.aliyun.com/t/1626/",target:"_blank",rel:"noopener noreferrer"}},[e._v("大型互联网企业入侵检测实战总结"),r("OutboundLink")],1),e._v("》中关于入侵检测基本原则的描述，在定义规则的时候可以思考一下。")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("不能把每一条告警都彻底跟进的模型，等同于无效模型 ——有入侵了再说之前有告警，只是太多了没跟过来 / 没查彻底，这是马后炮，等同于不具备发现能力；")])]),e._v(" "),r("li",[r("p",[e._v("我们必须屏蔽一些重复发生的相似的误报告警，以集中精力对每一个告警都闭环掉 —— 这会产生白名单，也就是漏报，因此单个模型的漏报是不可避免的；")])]),e._v(" "),r("li",[r("p",[e._v("由于任何单模型都会存在漏报，所以我们必须在多个纬度上做多个模型，形成纵深 —— 假设 WebShell 静态文本分析被黑客变形绕过了，在 RASP（运行时环境）的恶意调用还可以监控到，这样可以选择接受单个模型的漏报，但在整体上仍然不漏；")])]),e._v(" "),r("li",[r("p",[e._v("任何模型都有误报漏报，我们做什么，不做什么，需要考虑的是 “性价比” —— 比如某些变形的 WebShell 可以写成跟业务代码非常相似，人的肉眼几乎无法识别，再追求一定要在文本分析上进行对抗，就是性价比很差的决策，通过 RASP 的检测方案，其性价比更高一些；")])]),e._v(" "),r("li",[r("p",[e._v("我们不可能知道黑客所有的攻击手法，也不可能针对每一种手法都建设策略（不具备性价比），但是，针对重点业务，我们可以通过加固的方式，让黑客能攻击的路径极度收敛，仅在关键环节进行对抗（包括加固的有效性检测）可能会让 100% 的目标变得现实")])])]),e._v(" "),r("p",[e._v("基于上述几个原则，我们可以知道一个事实，或许，我们永远不可能在单点上做到 100 分，但是，我们可以通过一些组合方式，让攻击者很难绕过所有的点。")]),e._v(" "),r("p",[e._v("更多细节的介绍以及系统部署、编译步骤、规则编写的文档请参照 GitHub  https://github.com/ysrc/yulong-hids")]),e._v(" "),r("p",[r("strong",[e._v("0x05  又及")])]),e._v(" "),r("p",[e._v("驭龙项目目前的开源版本已经可以正常使用，基础功能也基本都有了。")]),e._v(" "),r("p",[e._v("但是目前并没有完全开发完毕，这边列了一些 To do:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("建立入侵行为 case 库，自动化重放 case 模拟测试")])]),e._v(" "),r("li",[r("p",[e._v("机器学习判断可疑行为，作为规则之外的补充")])]),e._v(" "),r("li",[r("p",[e._v("资产盘点，例如识别补丁，应用版本、负责人，各种包 / kernel 版本...")]),e._v(" "),r("p",[e._v("辅以漏洞库，能更快速的应急响应，哪些必须要修，那些不修可以接受")])]),e._v(" "),r("li",[r("p",[e._v("区分通讯模式（主动、被动）")])]),e._v(" "),r("li",[r("p",[e._v("使用消息队列代替 RPC")])]),e._v(" "),r("li",[r("p",[e._v("基线核查，没有代码能力的社区成员也可以整理好相关文档，YSRC 来实现")])]),e._v(" "),r("li",[r("p",[e._v("幻影蜜罐，agent 动态代理蜜罐端口，大规模提升蜜罐覆盖密度")])]),e._v(" "),r("li",[r("p",[e._v("支持多场景（办公环境、Docker），目前驭龙仅适合线上服务器环境")])]),e._v(" "),r("li",[r("p",[e._v("轻量级的 linux 内核防护，在不升级内核的情况下，免疫一些攻击")])])]),e._v(" "),r("p",[e._v("除了希望社区在二次开发过程中会回馈一部分代码给上游之外，YSRC 这边急需补充一些人手：")]),e._v(" "),r("p",[e._v("渗透测试核心，不限学历，要求无黑产经历，熟悉各种渗透姿势，猥琐流；")]),e._v(" "),r("p",[e._v("资深 golang 开发，配合安全同事、带领开发同事进行功能及架构迭代；")]),e._v(" "),r("p",[e._v("...")]),e._v(" "),r("p",[e._v("具体 JD 就不写了，跟大部分厂商的要求大同小异。")]),e._v(" "),r("p",[e._v("地点 base 苏州，感兴趣的可以关注公众号后对话或者发送简历至 sec@ly.com")]),e._v(" "),r("p",[r("strong",[e._v("最后，感谢驭龙项目的两位核心开发同事 wolf、nearg1e，贡献了驱动代码的 Z000000、mlsm，帮助 review 驱动代码的 taylor3768，以及对外测试期间提供了协助、反馈及建议的 kingjin、superhuahua、Johnny")])]),e._v(" "),r("p",[r("strong",[e._v("你们的贡献在开源社区留下了自己的印记")])]),e._v(" "),r("p",[r("strong",[e._v("we salute you~")])]),e._v(" "),r("p",[r("strong",[e._v("YSRC 坚持开源不易，git clone 的时候顺手转发一下文章吧")])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://res.wx.qq.com/mpres/htmledition/images/icon/common/emotion_panel/smiley/smiley_54.png",alt:""}})]),e._v(" "),r("p",[e._v("关注公众号后回复 驭龙，加入驭龙讨论群。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/PAV8ewtdsKomFhjF6qbTUKIUzoWA9CtkDjYAPLVn3SNyMC2GsdbgDRd95IZsrSxGKyCaWNk1foeyojYrjqE7Ow/640?wx_fmt=jpeg",alt:""}})]),e._v(" "),r("p",[e._v("往期文章")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483935&idx=1&sn=1736efd4b523dd4a225ef55a015a9d65&chksm=eb8c56a6dcfbdfb0ce77e4aed6bb88fd629973dc19ddfa1ce39737473b53a6ccbde00ba2e7e1&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("思科 Smart Install 远程命令执行漏洞探测及应急处置"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483926&idx=1&sn=8eb133a94d639d7468974aeafd595943&chksm=eb8c56afdcfbdfb9156ac0d2d413b76779b60981c9036cfd746c1e72a67c966972e43ea8e045&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("利用插件对 Chrome 进行 UXSS"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483910&idx=1&sn=9ed36865a591a4411ecf862370cf740c&chksm=eb8c56bfdcfbdfa993ac2fb4700e770accb5fda530ede2ccf0ab5d946e1c6e8a16444052b863&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("驭龙 EventLog 读取模块的迭代历程"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483905&idx=1&sn=248d323bd5b1f0157b8c8e54945e0394&chksm=eb8c56b8dcfbdfae5dda9dcdeb16972523de276f22d0c3a361776b0e4146ad21def7722882f2&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("巡风已支持检测 CVE-2017-3506 weblogic 漏洞"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483896&idx=1&sn=de5d9523dfdbde3a9552e9820b7836cc&chksm=eb8c5541dcfbdc577cdadec9e843b0309db5e50e4a086818134496256f1f43a2853391bb4937&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("moloch 网络流量回溯分析系统"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483889&idx=1&sn=7e28ea26dc36cc013c18415eda56f123&chksm=eb8c5548dcfbdc5e19e7c6d79760bab96cfc0add533d9066ea01970bbb181a2bb7514cad5514&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Exploiting Python PIL Module Command Execution Vulnerability"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483880&idx=1&sn=8d8bd3bc535608a92e28170bcff41373&chksm=eb8c5551dcfbdc47c4d6ae88721a0d31ca86cca29349f1e51396402dbf25d5db236daa2893e8&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("同程旅游四层负载实战"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483877&idx=1&sn=17efb11f4be3e7021ab188de4cd65875&chksm=eb8c555cdcfbdc4aef50f890ace55d0b0f0302f3b98f460767191698f932860e5eab3af19e07&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("基于 ASM 的 java 字符串混淆工具实现"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483867&idx=1&sn=e7db081603e265627634d5d8910dd3af&chksm=eb8c5562dcfbdc74085c9a7debd88474643452ec2918ead9c9f4fbb7c8ceb7e2af0c6cf673d8&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("为 OLLVM 添加字符串混淆功能"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483845&idx=1&sn=c1dbf423e1c5e577ba2bd7a3cb839165&chksm=eb8c557cdcfbdc6aa90d6885f38505a9b220a61ee374c5375950a2bab8e43f6c8b413ae350b0&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins 高危代码执行漏洞检测 / 开源漏洞靶场"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483840&idx=1&sn=8ee45a5ae8c1d03cb346d589307ec088&chksm=eb8c5579dcfbdc6f625356dc23ed5317e5c0e0e52d68b30af80897a4c6c7107dbfd0dcbd5797&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eat.Hack.Sleep.Repeat - YSRC 第二期夏日安全之旅"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483822&idx=1&sn=63e6ee0b0c79f05ec8d688be446c8c4a&chksm=eb8c5517dcfbdc013687e6938f87e154eef6cac4af40dc30560493cf2a377c2d6704f1f4c23c&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("带你一程，守卫者们，集结了!"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483817&idx=1&sn=5a1fd58b65edf4b88d2f455a486b97bd&chksm=eb8c5510dcfbdc061b7c78e5915c859cf7fbc92c0e41020a37854a9fecdd8259f7834da82505&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Django 的两个 url 跳转漏洞分析: CVE-2017-7233&7234"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483812&idx=1&sn=323069fdc3ff78249c46889bb1481efa&chksm=eb8c551ddcfbdc0b3cd6c3d5e0c573611a8ef88fd25ef20f4c0b5ed98dac47b3e5c915a0a262&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("应急不扎心 巡风现已支持检测 S2-045 漏洞"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483807&idx=2&sn=10280b70ae00147e792583d4598ea54a&chksm=eb8c5526dcfbdc308e14d6e58ba62e83e7844e3f376a58e0c90f911490604a6481622bb3c7f8&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("同程安全研究员获谷歌、腾讯安全致谢"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483807&idx=1&sn=f7f85accbf98fc2fac00fe8b9a80e021&chksm=eb8c5526dcfbdc30fcecc97d50c4b312f652a0eea9ca50ed397e4520c141e59314d06e9bb6d6&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android 字符串及字典混淆开源实现"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483800&idx=1&sn=c85a12cc85a9d86d85e4b6c44409f09f&chksm=eb8c5521dcfbdc37aa954ff39bfd004099cb2a394665e7f13b32d7a69e1c01d74950e4659a4c&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("我可能是用了假的隐身模式"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483796&idx=1&sn=450e7f66de2d71f6fd52b6f39d6ba0a6&chksm=eb8c552ddcfbdc3b7ab617ef0d135689126ae7e4dbace5ac514ddd93a08414219efabdb90319&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("同程旅游 Hadoop 安全实践"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483788&idx=1&sn=2c83dbc48a76468754bf0323fd2bff84&chksm=eb8c5535dcfbdc23c421dff900ec0ffe3e9fe58d91dff1ef4ba95b9b99f41b2271a5b4c4b49f&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("点我的链接就能弹你一脸计算器"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483783&idx=1&sn=9657366436ff10459a587b377d7ff937&chksm=eb8c553edcfbdc285d6fbbbd7a93e1ca72e84f6e8241c96f6e40c924e1dbe912c9ac97015724&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("点我的链接我就能知道你用了哪些 chrome 插件"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483779&idx=1&sn=aa0331245075f0d9f23611fb15f63143&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("YSRC 诚意之作，巡风 - 企业安全漏洞快速应急、巡航系统"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483773&idx=1&sn=d654e17c9c3b5e689f9ac04a45a8f993&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("基于文件特征的 Android 模拟器检测"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483766&idx=1&sn=556e4013ecf61057dc3f3ef75c5d31e0&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android 逆向与病毒分析"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483743&idx=1&sn=5c5e87d1546a1e66aa6dec044cce555f&chksm=eb8c55e6dcfbdcf0f719ca88dc5aae7bfbb2849937c831d1b40eb65bb09917436ea3d187a154&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("F-Scrack 弱口令检测脚本"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483739&idx=1&sn=d5c65abb664ce83eb9848cfc044c7f48&chksm=eb8c55e2dcfbdcf4885607b1ad4b410d00f2315881d6a156873727e141bd39a7be57b59aeb24&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("unsafe 模式下的 CSP Bypass"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483735&idx=1&sn=bfaae9189ddbb1e88713337d29cfdc36&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("被动扫描器 GourdScan v2.0 发布！"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483735&idx=2&sn=8dbfbbff09cba47a9b7fc9c1ad82f5eb&chksm=eb8c55eedcfbdcf8db6b06f911fb2919cd6e3c27c8bddff925f7ed900b6105d6acbdabe37eda&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android App 常见逆向工具和使用技巧"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483709&idx=1&sn=0c212e3af58abf46de987cff4b8541e1&chksm=eb8c5584dcfbdc9265922a7f33cafe84d18a1490f808087c626e04641ee7eb989481b0d40ce0&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("XSS Trap - XSS DNS 防护的简单尝试"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483703&idx=1&sn=faf3d61481c35fce5b09936867c82f90&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("A BLACK PATH TOWARD THE SUN － HTTP Tunnel 工具简介"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4MzI4MDg1NA==&mid=2247483695&idx=1&sn=1de5db39d6986560d80ab604aae88467&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("初探 Windows Fuzzing 神器 ----Winafl"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("全文完")]),e._v(" "),r("p",[e._v("本文由 "),r("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[e._v("简悦 SimpRead"),r("OutboundLink")],1),e._v(" 优化，用以提升阅读体验")]),e._v(" "),r("p",[e._v("使用了 全新的简悦词法分析引擎 beta，"),r("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看"),r("OutboundLink")],1),e._v("详细说明")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/kzeAEvz-ejLD71fgb5t8tA#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("主机列表"),r("OutboundLink")],1),r("a",{attrs:{href:"https://mp.weixin.qq.com/s/kzeAEvz-ejLD71fgb5t8tA#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("展示当前已部署 agent 的主机列表，可通过搜索功能和快速标签进行筛选并进行实时监控主机行为和查看关键信息。"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);