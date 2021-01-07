(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{482:function(e,t,a){"use strict";a.r(t);var i=a(42),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("RecSys 是聚焦于推荐系统的 ACM 学术会议，因为推荐系统应用广泛，这个会议也吸引着大量工业界的朋友参加。")]),e._v(" "),a("p",[e._v("RecSys 2020¹ 原计划是在南美洲巴西举办，因为疫情的原因不得不改到线上。虽说线上举办会议，参会效果会打折扣，但也为远在北京的我提供了参会便利。得益于各方的努力和软件的应用，整体来看此次参会的效果高于我对它的预期。这里分享一些从工程师角度发现的亮点，希望对大家有所帮助。")]),e._v(" "),a("p",[e._v("会议组织的一些亮点")]),e._v(" "),a("p",[e._v("先简单介绍一下此次会议的组织方式，不得不说组织方确实用心了，为了确保会议正常进行相关人员可能连续 24 个小时都没休息。")]),e._v(" "),a("ul",[a("li",[e._v("为了使全球各时区的参会人员都能方便地听到文章作者们的演讲，大多数演讲作者会在不同的时间段演讲两次")]),e._v(" "),a("li",[e._v("为了线上会议的流程可以顺利进行，大会利用 Whova 软件帮助整个流程，Whova 当中包括了会议时间表，直播平台，收集提问，论坛交友，活动组织等功能")]),e._v(" "),a("li",[e._v("为了参会者可以方便集合自由讨论，大会用 Gather.town 组织 Poster Session 等活动，大家可以自行在一个虚拟的空间进行交流，下图，我站在这个虚拟空间过道的 RECSYS 面板前，算是拍照留念了。")])]),e._v(" "),a("p",[e._v("RecSys2020 最新研究的一些亮点")]),e._v(" "),a("p",[e._v("这是我第三次参加 RecSys。推荐系统的研究进展并不快，在会议上常常看到一些奇怪的研究方向，重复的研究结果，不过也能看到一些亮点。")]),e._v(" "),a("p",[e._v("工业方向亮点有")]),e._v(" "),a("ul",[a("li",[e._v("PURS: Personalized Unexpected Recommender System for Improving User Satisfaction,")]),e._v(" "),a("li",[e._v("Behavior-based Popularity Ranking on Amazon Video")]),e._v(" "),a("li",[e._v("Query as Context for Item-to-Item Recommendation\n这些方法要么经过工业界 AB 测试的验证，要么是工程实现简单，并能解决实际问题。")])]),e._v(" "),a("p",[e._v("学术方向亮点有")]),e._v(" "),a("ul",[a("li",[e._v("Counterfactual Learning for Recommender System")]),e._v(" "),a("li",[e._v("Debiasing Item-to-Item Recommendations with Small Annotated Datasets")]),e._v(" "),a("li",[e._v("A Large-scale Open Dataset for Bandit Algorithms\n这些方法要么新奇，未来前景广泛，要么公开了源代码或者数据。")])]),e._v(" "),a("p",[e._v("下面我对这些亮点一一做简单的介绍")]),e._v(" "),a("p",[e._v("PURS: Personalized Unexpected Recommender System for Improving User Satisfaction")]),e._v(" "),a("p",[e._v("作者 Pan Li 是 NYU Stern School of Business 的一名博士生，这个工作是与阿里巴巴合作的成果，为了解决推荐系统当中的 Filter Bubble 的问题，他们提出了 PURS，并公布了源代码 ¹，这个工作的优势包括")]),e._v(" "),a("ul",[a("li",[e._v("在优酷 App 进行了 AB 测试，并在一些关键指标上面有很大的提升，其中人均观看时长提升了 4.6%")]),e._v(" "),a("li",[e._v("这个工作和 Filter Bubble 有关，这个话题大家讨论很多，但是这个方向的有效的研究并不多，这个工作是少有奏效的方法")]),e._v(" "),a("li",[e._v("这个工作考虑到了 Exploration 个性化的问题，有些人愿意探索不同类型的视频内容，有些人就不愿意，作者有考虑到这一点，实现了个性化的 Exploration")])]),e._v(" "),a("p",[e._v("Behavior-based Popularity Ranking on Amazon Video")]),e._v(" "),a("p",[e._v("作者 Lakshmi Ramachandran 是 Amazon Video 的 Applied Scientists，介绍了他们的 Popularity Ranking 的一个工作。")]),e._v(" "),a("p",[e._v("之前我以为 Popularty Ranking 用当前统计的 Populartity 即可完成排序，没想到 Popularity Ranking 也可以利用机器学习解决 Popularity Ranking 当中的冷启动的问题：一些新的内容无法通过普通的 Popularity Ranking 排到一个好的位置，曝光给用户。")]),e._v(" "),a("p",[e._v("作者利用内容本身的一些文本信息、之前的流行度、和用户的交互信息等数据预测当前的 Popularity，最终以预测的 Popularity 进行排序。一个有趣的现象是内容在平台上存在的时长这一特征，这个特征会给新内容高的分数。下面的截图提到了 Age Feature（在平台上存在的时长）的影响")]),e._v(" "),a("p",[e._v("Query as Context for Item-to-Item Recommendation")]),e._v(" "),a("p",[e._v("作者 Moumita Bhattacharya 是 ESTY.COM 一家电商网站的 Senior Applied Scientist，她介绍了 ESTY 打造相关商品推荐的技术选择。他们有 6500 万的商品这使得他们的技术选择和 Amazon Video 就会很不一样，Amazon Video 的视频数量可能也就是几万的量级。")]),e._v(" "),a("p",[e._v("相关物品推荐分成两个阶段，在第一个阶段的 Candidate Set Generation 部分，他们利用 Word2Vector 的技术，把用户搜索点击的内容作为训练数据，给每个内容生成 Embedding，之后用 Faiss: A library for efficient similarity search，返回与当前物品最相似物品列表作为 Candidate Set。")]),e._v(" "),a("p",[e._v("第二阶段用 lightGBM 对 Candidate Set 进行排序。")]),e._v(" "),a("p",[e._v("这个工作的亮点之一是，他们利用了 Context 进行相关物品的个性化。下图是提到，可以将当前的节目作为 Context，比如说在万圣节时期，给红色帽子推荐相关的物品，可以把一些适合万圣节，同时相关的物品推荐出来，而不是只推荐红色的帽子。")]),e._v(" "),a("p",[e._v("Counterfactual Learning for Recommender System")]),e._v(" "),a("p",[e._v("作者 Zhenhua Dong 是华为诺亚方舟实验室的 Principal Researcher，这次演讲汇总了华为在 Counterfactual 方向上的一系列成果。为了解决 Counterfactual 的问题，作者提出 Uniform Unbiased Data，通过在从 1% 流量当中，随机选择内容向用户展现，使得每一个内容都有机会收集到用户的反馈。利用 Uniform Unbiased Data，作者展开了一系统的研究和实验，取得了一系列的成果，其中之一是利用这 1% 的流量产生的 Unbiased Data, 创造了 3% 的指标提升。")]),e._v(" "),a("p",[e._v("Debiasing Item-to-Item Recommendations with Small Annotated Datasets")]),e._v(" "),a("p",[e._v("作者 Tobias Schnabel 是微软研究院的研究员，提出利用小规模的标注数据来提升 Item-to-Item 的推荐（和之前提到的一个物品的相关推荐一样），同时公布了数据和源代码 ²。智能不够，人工来凑。实验表明这种方式的确有效，这说明我们的训练数据当中有很多干扰，并不能完全表示用户对所有物品的喜好。工业界或许可以利用之前提到的 Unbiased Data 达到 Small Annotated Dataset 的效果。")]),e._v(" "),a("p",[e._v("Large-scale Open Dataset for Bandit Algorithms")]),e._v(" "),a("p",[e._v("From Workshop: REVEAL 2020: Bandit and Reinforcement Learning from User Interactions")]),e._v(" "),a("p",[e._v("作者 Yuta Saito 是一名本科生，在这次 Workshop 展示了他在 RL&Bandits 方向的工作。")]),e._v(" "),a("p",[e._v("强化学习的核心问题之一是如何在上线或者进行实验之前，评估训练好的强化学习的模型，也就是 Offline Policy Evaluation。学术界提出了很多的方法，很多都是用模拟器产生的数据，但是少有一些实际数据的支持。")]),e._v(" "),a("p",[e._v("这个工作提供了两组通过 Uniform Rank 和 Bernoliour Rank 产生的服饰购物行为数据，可以用来测评不同的 Offline Policy Evaluation 的效果，也可以用来开发新的 Policy，用 Offline Policy Evaluation 来评测 。Open Bandits Pipeline 开源代码代码 ³ 质量高，有很多代码注释。")]),e._v(" "),a("p",[e._v("推荐系统不像图像识别，理论上推荐系统是典型的强化学习的应用场景，但限于各种工程约束，理论的不成熟，强化学习一直没有很好地应用于推荐系统，最近几年业界开始有成功的应用。这个领域值得继续关注。")]),e._v(" "),a("p",[e._v("总结")]),e._v(" "),a("p",[e._v("这次线上 RecSys 体验别具一格，并没有像我之前担心的那样，效果打很多折扣，很多参会者也是有很认真地了准备演讲。希望下次 RecSys 能看到更多的有亮点的工作。")]),e._v(" "),a("p",[e._v("参考资料")]),e._v(" "),a("ol",[a("li",[e._v("RecSys 官网：https://recsys.acm.org/recsys20/")]),e._v(" "),a("li",[e._v("PURS 开源代码： https://github.com/lpworld/PURS")]),e._v(" "),a("li",[e._v("Debiasing Item-to-Item Recommendations with Small Annotated Datasets 的开源代码和数据：https://github.com/microsoft/debiasing-item2item")]),e._v(" "),a("li",[e._v("Open Bandits Pipeline 开源代码：https://github.com/st-tech/zr-obp")])])])}),[],!1,null,null,null);t.default=n.exports}}]);