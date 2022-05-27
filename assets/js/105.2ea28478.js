(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{488:function(e,t,r){"use strict";r.r(t);var _=r(42),n=Object(_.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("一个历经了三十多年发展的软件，这话听起来就让人感到沉甸甸的。但这款产品经历无数风雨后不仅活得好好的，至今还在不断焕发新的生机。")]),e._v(" "),r("p",[e._v("本期"),r("a",{attrs:{href:"https://www.infoq.cn/minibook/LxX7bFUwKH17bzxQkSKt",target:"_blank",rel:"noopener noreferrer"}},[e._v("《中国卓越技术团队访谈录》"),r("OutboundLink")],1),e._v("封面故事的主角是金山办公旗下的 WPS 研发团队。WPS 是通用型国产办公软件的代表，可能是目前国内最大的 C++ 单体项目。有人用这样一种比喻去形容 WPS 的源代码：“就像翻动沉积岩，一层一层，这层是框架、往下是更老的核心框架、再翻则是更底层的数据处理等等，和考古一样（有趣）。” 虽然底层的东西一直都处于比较稳定的状态，不过在底层之上，也有另一番热闹景象。")]),e._v(" "),r("p",[r("strong",[e._v("采访嘉宾：")])]),e._v(" "),r("p",[e._v("**庄湧，**金山办公高级副总裁、研发中台事业部总经理")]),e._v(" "),r("p",[r("strong",[e._v("晁云瞳（Yeppy）")]),e._v("，金山办公助理总裁、金山文档事业部副总经理，兼 WebOffice 负责人")]),e._v(" "),r("p",[r("strong",[e._v("柳杨")]),e._v("，金山办公总监，负责 Linux 方向研发")]),e._v(" "),r("h2",{attrs:{id:"重新演绎-wps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重新演绎-wps"}},[e._v("#")]),e._v(" 重新演绎 WPS")]),e._v(" "),r("p",[e._v("1989 年，WPS 1.0 问世后，在中文文字处理软件市场上获得了消费者的广泛追捧。一时间，风头无两。")]),e._v(" "),r("p",[e._v("上个世纪 90 年代末，微软公司的办公软件跟随着操作系统进入中国市场，装载在中国消费者电脑上，MS Office 成为 “事实标准” 的时候，也是 WPS 推翻重来之时。这是一段不得不提的历史。当时 WPS 不是要改写，不是重构，而是需要一次彻底的重写。")]),e._v(" "),r("p",[e._v("“我们要让用户能够在 Windows 端重新使用 WPS，首先就得承认微软 Office 的市场地位以及事实，而且要想让用户能够无缝切换过来，就必须得做到兼容。”2003 年进入 WPS 的庄湧表示，"),r("strong",[e._v("当时 V6 的主要目标是 “三大兼容”，包括：文件格式兼容、操作习惯兼容、二次开发接口兼容。")])]),e._v(" "),r("p",[e._v("2002 年～2005 年，历经三年时间，一个涵盖了数百万行代码，内部研发代号为 “V6” 的 WPS 2005 版本，"),r("strong",[e._v("在一个全新的架构下 “重生” 了，并且能很好地兼容微软办公软件文件格式。")])]),e._v(" "),r("p",[e._v("对于当时的 WPS 来说，只有这三大兼容做好了，才能让 WPS 有机会跟微软 Office 同台竞技。但也因为 “完美兼容”，一些质疑抄袭的声音开始出现。")]),e._v(" "),r("p",[e._v("同样在 2003 年加入 WPS 的 Yeppy 还记得，当时有一些用户认为 WPS 推翻重写的决策是错误的，“说我们‘放弃了传统’。重写之后，WPS 原先很多心思巧妙的设计和功能来不及做，所以都砍掉了。我们是为了重新回到同台竞技的状态，但有些用户不理解，为什么不做自己的特色而是跟着人家跑了。”")]),e._v(" "),r("p",[e._v("当时 WPS 2002 的产品在政企客户中的口碑并不好。Yeppy 表示，问题主要体现在几个方面：首先微软 Office 的文档格式逐渐成为主流，WPS 在打开微软文档的时候，容易出现各种错误和异常。其次产品交互和处于市场领先地位的竞品有很大不同，站在客户的角度，其实是给他们带来了不小的学习成本。")]),e._v(" "),r("p",[e._v("第三，还是兼容问题，微软 Office 不再兼容 WPS。客户的系统（比如 ERP、OA 系统）都已经跟 Office 打通，需要导出、导入 Office 文件并在这些系统里处理，但这些系统接入 WPS 后发现功能都失效，不能用了。")]),e._v(" "),r("p",[e._v("“其实说来说去就是一个问题，企业已经有的这些文件是 IT 资产，员工生产力也是资产，各种系统是 IT 基础建设的资产，从做 B 端市场的角度来说，我们至少要把这些资产给保护好，人家才愿意用我们的产品。”Yeppy 说道。")]),e._v(" "),r("p",[e._v("于是，兼容成了 WPS 突围的唯一出路。文档格式兼容，保证不管用户从哪个端打开，文档都不会跑版、数据表现一致；操作习惯兼容，则要让用户在使用的过程中每个动作都不受影响，不另外产生新的学习成本；二次开发接口兼容主要是面向政府企业客户，这些客户更多是跟系统对接，很多时候需要用到丰富的二次开发接口，所以这个接口也要跟微软的保持一致。")]),e._v(" "),r("p",[e._v("那时候，像庄湧和 Yeppy 这批新人进 WPS 后就投入到了做兼容这件事上。")]),e._v(" "),r("h2",{attrs:{id:"四大引擎的演进"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四大引擎的演进"}},[e._v("#")]),e._v(" 四大引擎的演进")]),e._v(" "),r("p",[e._v("以文件格式兼容、操作习惯兼容、二次开发接口兼容为目标，WPS 2005 版本构建了全新的四大引擎，分别是文字的排版引擎、表格的计算引擎、演示的动画播放引擎以及公共的图形对象渲染引擎。")]),e._v(" "),r("p",[e._v("庄湧表示，本质上，支撑 WPS 后续发展的基础就是当年的四大引擎，演进过程可以分三个阶段去看。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jiler.cn/techug/uploads/2021/10/img1635396607634339154.png",alt:"img"}})]),e._v(" "),r("p",[e._v("2005 年 9 月 3 日，WPS Office 2005 封盘纪念。")]),e._v(" "),r("p",[e._v("第一个阶段是 PC 时代，彼时四大引擎的重心是打磨自身，最基本的目标是保证 WPS 在 Windows 端的稳定性以及性能提升。")]),e._v(" "),r("p",[e._v("文字排版引擎方面，不仅要让 WPS 打开微软 Office 文档的时候一页不差、一行不差、一字不差，同时也要提升性能，在打开几百页、上千页文档的时候，无论是在哪个位置编辑，甚至在多人协作时（当时还不是现在普遍的基于网络端的协作协同，而是需要通过文件传递和发送的方式去做批复），都要保障过程的顺畅。")]),e._v(" "),r("p",[e._v("包括后来进入以银行为代表的金融企业，打磨表格的计算引擎的重点之一也是性能。“要做到在百万行数据中，无论在哪个地方操作都稳定且顺畅，背后其实要花好多功夫去优化。” 庄湧说。")]),e._v(" "),r("p",[e._v("第二个阶段是移动时代。2011 年，雷军重回金山软件担任董事长，并一脚把 WPS 踹进了移动互联网。那会移动手机起步不久，受限于内存和屏幕尺寸，对于像 Office 这样的产品是否适合在手机上使用，该怎么用，大家心里都没底。但也正是因为这个机遇，WPS 的团队才真正开始用产品思维去思考问题。此前，为了与微软 Office 更好地兼容，团队更多是思考怎么和微软做得更像。")]),e._v(" "),r("p",[e._v("团队面临的第一个问题就是，移动端的办公软件应该采用什么引擎？直接移植 C++ 开发的 PC 端引擎到安卓平台，会遇到很多兼容性问题，拖慢研发进度。因此研发团队选择了用 Java 语言开发新引擎，以赶上移动互联网时代的快速发展。而在做 iOS 版本的时候，庄湧既借鉴了安卓团队的移动开发经验，同时由于 iOS 平台支持 C++ 语言的开发，又复用了 PC 端的内核代码进行移植，节省了时间。")]),e._v(" "),r("p",[e._v("然而，落地执行中团队遇到了更大困难：移动场景下办公需求发生了剧烈变化，功能不能照搬照抄，而是要围绕小内存、小屏幕等特性做取舍，这是移动时代引擎迭代过程中最大的挑战。“但是当时我们内部流行一句话，理解要执行，不理解也要在执行的过程中去加深理解。” 庄湧说。")]),e._v(" "),r("p",[e._v("当时移动端仍然是新鲜事物，要把电脑里的办公软件搬到小小的手机屏幕里，这件事从没有哪家公司或者是哪个人尝试过，没有经验可借鉴，短时间甚至找不到合适的人。为了支持移动版开发，WPS 安卓团队的人不得不从 PC 团队中抽调，且均是骨干。")]),e._v(" "),r("p",[e._v("随着人均持有的办公设备越来越多（比如手机、iPad、电脑等），为了解决文档在不同设备间流转所面临的问题，借助云技术，金山办公研发了 WPS 云文档。而随着对 Linux、Mac 等平台的不断适配，四大引擎在移动时代也充分验证了跨平台能力。")]),e._v(" "),r("p",[e._v("第三阶段，随着 Web 端需求的增长，尤其是疫情下在线协作办公需求爆发，WPS 团队进一步在引擎中加入了协同特性。")]),e._v(" "),r("h2",{attrs:{id:"新的不稳定状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新的不稳定状态"}},[e._v("#")]),e._v(" 新的不稳定状态")]),e._v(" "),r("p",[e._v("在日益月新的互联网行业里，新产品新事物层出不穷，某种意义上，发展了许多年的 WPS 已经是个相对稳定和成熟的产品，成长空间是否已经接近天花板？")]),e._v(" "),r("p",[e._v("对于这个问题，Yeppy 说：“得看怎么去理解‘稳定’这两个字。如果是说内核，内核能不能保证不出错呢？”")]),e._v(" "),r("p",[e._v("他以 WPS 的在线协作文档产品「金山文档」举例道，“为了能帮用户处理 Office 文档，我们在服务器上也跑了一个自己的内核。假如我们处理同一份文件，你在编辑，我也在编辑，那这两个编辑动作，该怎么样合到一个文件去，这里面有一个 OT（Operational Transformation）引擎，并且这个 OT 引擎一定要和我们原来的引擎相结合，保证计算、排版、调度、绘制、动画这些功能都是正常的。”")]),e._v(" "),r("p",[e._v("“加了上面这些东西以后，原来的功能还算不算稳定呢？”Yeppy 进一步表示，从最基础的功能来说，WPS 看起来没有大的变化，但能力一直在横向和纵向扩展，比如协作是通过云端的引擎来做，比如多平台适配把内核从单一环境 “搬” 到了不同的设备环境，但它并不是直接搬就能跑起来，里面还有大量的开发和适配工作，这其实是一种“新的不稳定状态”。")]),e._v(" "),r("p",[e._v("WPS 的客户端基本覆盖全平台，在服务器、云存储、浏览器前端等方向都有人在研究、在折腾各种新技术。")]),e._v(" "),r("p",[e._v("Yeppy 介绍道，在线协作文档的服务器上跑的是核心引擎，怎么去做多人之间的操作、协作变换则是另外一个模块，用户连到服务器后怎么做并发承载，则是用的具备并发特性的语言去处理。为了能在各种浏览器运行，前端用的是 JavaScript，甚至在 10 年前团队还曾经试过用 Adobe 的 Flex 技术去做在浏览器里运行的小办公平台。诸如此类，不胜枚举。“"),r("strong",[e._v("折腾新技术其实是为了新的场景做准备")]),e._v("。”Yeppy 说道。")]),e._v(" "),r("p",[e._v("庄湧亦表示，从 PC 到移动再到云端，从工具转向云服务，为了解决用户的跨设备以及多人之间的协同协作问题，WPS 一直在不断吸收新技术，包括 AI。"),r("strong",[e._v("但技术只是手段，目的是帮助用户解决问题和提升工作效率，本质还是 “用户第一” 的理念，基于用户的场景和真实需求去应用技术。")])]),e._v(" "),r("h2",{attrs:{id:"linux-版-wps-从-用爱发电-开始"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux-版-wps-从-用爱发电-开始"}},[e._v("#")]),e._v(" Linux 版 WPS：从 “用爱发电” 开始")]),e._v(" "),r("p",[e._v("即使是 “小部分” 人群的需求，WPS 也没有忽视。如今，WPS Office 基本做到了全平台覆盖，包括在早期并不能带来商业价值的 Linux 平台。")]),e._v(" "),r("p",[e._v("今年是 Linux 系统诞生三十周年，若从 2011 年立项算起，WPS 陪伴 Linux 其实也有十年了。柳杨从 2013 年开始参与 Linux 版 WPS 开发，他坦言，从操作系统的角度看，当时的 Linux 相比起 Windows，市占率非常低，而大家决定做 Linux 版的出发点其实很简单，因为有用户需要。")]),e._v(" "),r("p",[e._v("“那时候用户给我们发了不少邮件，说想要 Linux 版，因为觉得 Linux 平台没有好用的办公软件。” 柳杨补充说，决定开发 Linux 版也跟 WPS 全平台覆盖的愿景有关，“"),r("strong",[e._v("我们就想让全平台用户都能有好用的办公软件")]),e._v("。Linux 用户虽然不像 Windows 用户那么庞大，但是从 Linux 的用户画像来看，其中包括大量技术人员，有一些是真正的系统爱好者，有一些是在 Linux 平台上工作的，这些用户其实也是我们需要考虑到的一批优质用户。”")]),e._v(" "),r("p",[e._v("“每一次我们发新版本的时候，尤其在 Linux 平台，很多用户就会给我们好评，说我们是一家良心企业，因为做 Linux 社区版不赚钱，但是我们一直在维护，默默去做这个产品，用户也常给我们一些正向的反馈。” 谈及怎么坚持做这么多年 Linux 社区版的时候，柳杨表示来自用户的支持也是一种动力。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jiler.cn/techug/uploads/2021/10/img1635396611302697004.png",alt:"img"}})]),e._v(" "),r("p",[e._v("Linux 版 WPS 收到来自用户的暖心评价")]),e._v(" "),r("p",[e._v("不过在发展过程中，Linux 版也有过一个 “小插曲”。2017 年上半年，一条关于“WPS Office for Linux 项目中止” 的消息不胫而走，在圈内引起过一阵热议。随后金山办公官方对此作出否认，称“WPS Office for Linux 并未停止更新，也从未有过停止更新的任何计划。”")]),e._v(" "),r("p",[e._v("柳杨回忆道，“官方说明是我这边推动市场部去做的。” 为什么会出现这个传闻？他进一步解释称，原因主要有两方面，一是 Linux 面向个人的社区版分为海外版和国内版，当时有人提到海外版近一年没更新，很快网上就开始流传 Linux 版停止更新的猜测；二是跟当时产品刚好碰上大版本更迭有关。")]),e._v(" "),r("p",[e._v("“17 年属于我们的一个转折点，WPS 要从 WPS 2016 升级到 WPS 2019，当时内部都在重点准备这个大版本，在推出 2016 加强版的同时，我们也在准备研究和开发 WPS 2019 版。大版本开发的工作量非常大，因此时间跨度也比较长。” 柳杨指出，大版本更新不仅做了新图表、云文档、SmartArt 等大量新功能，同时做了各种优化工作以及 bug 修复。而在这些工作没做完之前，发小版本其实对用户来说意义不大。")]),e._v(" "),r("p",[e._v("此外，柳杨还提及了当下一个重要的行业变化。近几年，在 IT 国产化的浪潮下，强化产业链供应链自主可控，WPS 在 Linux 上的商业价值迅速显现，因此 Linux 团队经常需要闭关去做新的需求。")]),e._v(" "),r("p",[e._v("据最新数据，金山办公的业务覆盖中国 30 多个省市自治区政府、400 多个市县级政府，连续多年为包括党政机关、金融、能源、航空、医疗、教育等领域在内众多行业提供定制化的办公产品和服务，帮助政府和企业加速实现数字化、智能化办公。")]),e._v(" "),r("h2",{attrs:{id:"程序员文化的传承"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#程序员文化的传承"}},[e._v("#")]),e._v(" 程序员文化的传承")]),e._v(" "),r("p",[e._v("2019 年 11 月，金山办公上市。现在人们往往只会看到其 “光鲜亮丽” 的一面：金山办公的市值挺高，WPS 活得挺滋润。但其实过去有很长一段时间，WPS 的日子并不好过，其发展起起伏伏。金山办公名誉董事长雷军亦曾说过：“曾经有很多人很多次劝我放弃 WPS，但是我们能够坚持下来，还是跟我们的使命息息相关，而不是一个纯粹的商业决定。”")]),e._v(" "),r("p",[e._v("“技术立业” 的程序员文化是金山从创办之初就传承下来的。如今金山办公数千名员工，60% 以上是程序员，总数超过 2188 人，研发费用占营收比例超过 30%，位居科创板前列。Yeppy 认为，WPS 能坚持这么多年，一个很重要的原因是跟公司里的研发人员多有关，研发人很多时候会比较理想化、有使命感。公司历代领军人物细数下来，其实都是研发出身。")]),e._v(" "),r("p",[e._v("最早可以追溯到 1988 年，当年求伯君把自己关在一个旅馆的小房间，用汇编语言敲出了 WPS 的第一个版本，这十多万行代码揭开了中文排版、中文办公时代的帷幕，这是个振奋人心的起点。“"),r("strong",[e._v("我认为这算是程序员个人英雄时代巅峰的辉煌。")]),e._v("”Yeppy 感慨道，因为在那之后，软件开发就更多是群体作战模式。现在公司这么多号人，就是为了把几条产品线做到极致。")]),e._v(" "),r("p",[e._v("“来 WPS 十年，我一直就是做 WPS Linux 版这款产品，从最开始只有几个人做，到现在我们也有非常大的团队去做，就一直围绕一个产品，把一件事做到极致。” 柳杨的语气中不乏坚定，在他看来，整个公司的氛围和基因里具备专注、热爱和理想的东西。“在我的认知范围里，我的职场生涯不用做太多花花绿绿的东西，也许把某一件事做好了，做到极致也就够了。”")]),e._v(" "),r("p",[e._v("两个月前，在"),r("a",{attrs:{href:"https://www.infoq.cn/article/k0ibBfCYT3c52BNFbdJx",target:"_blank",rel:"noopener noreferrer"}},[e._v("金山技术开放日"),r("OutboundLink")],1),e._v("的活动上，庄湧曾介绍说，金山办公的技术人员具备一些独特特质，比如喜爱不断 “折腾”、精益求精等。具体来说，金山办公一代代传承下来的优秀程序员在写代码之前都会有多个维度的思考，从深度性到通用性，再到可维护性以及可扩展性。")]),e._v(" "),r("p",[e._v("2002 年那一次 WPS 代码推翻重写，同时进行重塑的还有 WPS 的内核引擎。这么多年过去，当时重塑的四大办公软件引擎作为底座能支撑到今天，或许也恰恰印证了金山办公技术人的实力与底蕴。")]),e._v(" "),r("p",[e._v("本文选自《中国卓越技术团队访谈录》（2021 年第五季），"),r("a",{attrs:{href:"https://www.infoq.cn/minibook/LxX7bFUwKH17bzxQkSKt",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击下载电子书"),r("OutboundLink")],1),e._v("，查看更多独家专访！")]),e._v(" "),r("p",[r("strong",[e._v("《中国顶尖技术团队访谈录》品牌升级，现正式更名为《中国卓越技术团队访谈录》")]),e._v("，这是 InfoQ 打造的重磅内容产品，以各个国内优秀企业的 IT 技术团队为线索策划系列采访，希望向外界传递杰出技术团队的做事方法 / 技术实践，让开发者了解他们的知识积累、技术演进、产品锤炼与团队文化等，并从中获得有价值的见解。")]),e._v(" "),r("p",[e._v("如果你身处传统企业经历了完整的数字化转型过程或者正在互联网公司进行创新技术的研发，并希望 InfoQ 可以关注并采访你所在的技术团队，可以添加微信：caifangfang842852，请注明来意及公司名称。")]),e._v(" "),r("p",[e._v("本文文字及图片出自 "),r("a",{attrs:{href:"https://www.infoq.cn/article/3bCZ0MqjJrmyBkTJCHxs",target:"_blank",rel:"noopener noreferrer"}},[e._v("InfoQ"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("全文完")]),e._v(" "),r("p",[e._v("本文由 "),r("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[e._v("简悦 SimpRead"),r("OutboundLink")],1),e._v(" 优化，用以提升阅读体验")]),e._v(" "),r("p",[e._v("使用了 全新的简悦词法分析引擎 beta，"),r("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看"),r("OutboundLink")],1),e._v("详细说明")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.techug.com/post/one-of-the-largest-c-plus-software-projects-in-china-wps-s-self-defense-way.html#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("重新演绎 WPS"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.techug.com/post/one-of-the-largest-c-plus-software-projects-in-china-wps-s-self-defense-way.html#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("四大引擎的演进"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.techug.com/post/one-of-the-largest-c-plus-software-projects-in-china-wps-s-self-defense-way.html#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("新的不稳定状态"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.techug.com/post/one-of-the-largest-c-plus-software-projects-in-china-wps-s-self-defense-way.html#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux 版 WPS：从 “用爱发电” 开始"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.techug.com/post/one-of-the-largest-c-plus-software-projects-in-china-wps-s-self-defense-way.html#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[e._v("程序员文化的传承"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);