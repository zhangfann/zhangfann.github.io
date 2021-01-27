(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{529:function(v,_,p){"use strict";p.r(_);var e=p(42),t=Object(e.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("p",[v._v("大家看今日头条的推荐会发现，每次刷新都会推荐不同的内容，而且翻页也很少出现重复内容。\n大家看今日头条的推荐会发现，每次刷新都会推荐不同的内容，而且翻页也很少出现重复内容。")]),v._v(" "),p("p",[v._v("那么这种个性化推荐系统的架构是什么样的呢？")]),v._v(" "),p("p",[v._v("所有文章都会存在一个大候选池中，比如用 Elasticsearch 存储。")]),v._v(" "),p("p",[v._v("我们难以对大候选池中的所有文章做 CTR 模型预估，也难以在这么大的候选池中实现业务要求的排序策略，所以大候选池的作用只是粗粒度的文章召回。")]),v._v(" "),p("p",[v._v("在粗排阶段，我们召回的文章集合应该在千级别，比如：3000 篇。")]),v._v(" "),p("p",[v._v("最简单的召回策略就是返回最近 24 小时的热门文章，当然如果可以结合用户偏好的文章类型更精细化的召回也可以考虑结合进来。")]),v._v(" "),p("p",[v._v("另外，大候选池只是数据源之一，我们还需要取一些运营位，广告位，它们整体作为我们的召回集合。")]),v._v(" "),p("p",[v._v("这个阶段的输入文章规模是 3000 篇，我们遍历 3000 篇文章做 CTR 预估得到模型打分并排序，靠前的文章点击率越高。")]),v._v(" "),p("p",[v._v("单纯依靠 CTR 得分排序，会造成内容不均衡，比如靠前的可能是大量的娱乐花边新闻，导致用户没法看到重要的时事政治新闻。")]),v._v(" "),p("p",[v._v("所以这个阶段需要结合业务特点，首先将 3000 篇文章按照业务类型等策略需求划分到多个小候选池，单个类型的候选池内可以进一步根据业务策略精细化排序。")]),v._v(" "),p("p",[v._v("最后，我们的目标是从众多候选池中，通过合理的分类配比生成要返回的 20 篇文章，也就是一页的内容。")]),v._v(" "),p("p",[v._v("这里配比就靠策略指定了，比如 2 篇体育的，2 篇娱乐的，2 篇政治的，大家可以根据公司需要决定。")]),v._v(" "),p("p",[v._v("广告和运营位在这个阶段可以插入到 20 篇文章的中间合适位置，一起返回给客户端。")]),v._v(" "),p("p",[v._v("我们从 3000 篇粗排结果中甄选出 20 篇文章，返回给客户端。")]),v._v(" "),p("p",[v._v("那么当用户再次下拉或者刷新的时候，我们需要推荐与这 20 篇不同文章，这样用户才不会觉得重复推荐，所以这里需要去重。")]),v._v(" "),p("p",[v._v("所以当我们返回 20 篇文章之前，需要在 redis 里记录下这 20 篇文章 ID。")]),v._v(" "),p("p",[v._v("当再次请求推荐接口时，我们仍旧从粗排召回 3000 篇文章（也许仍旧有部分文章属于我们之前返回的 20 篇），然后从 redis 里取出已经推荐过的文章 ID，从 3000 篇中过滤掉推荐过的文章。")]),v._v(" "),p("p",[v._v("对于剩余的文章，我们继续走精排 -> 配比的逻辑即可。")]),v._v(" "),p("p",[v._v("因为大候选池内容不断生成新的，用户不断访问推荐接口，那么该用户的 redis 访问历史集合会越来越大，对我们去重计算会造成很大压力（也占用了很多内存），所以我们需要让每个用户的 redis 历史推荐集合自动淘汰，在设计时可以利用滑动窗口的方式，只保存最近 N 小时推荐过的文章 ID 即可。")]),v._v(" "),p("p",[v._v("如果业务的内容生产速度较慢，而某用户持续的请求推荐接口，那么粗排召回的 3000 篇可能全部都被用户读过，导致去重后没有内容可以推荐。")]),v._v(" "),p("p",[v._v("这种极端情况下，代码可以直接取 redis 中的历史推荐文章 ID（可以用 zset 保存，key 是文章 ID，score 是推荐的时间点），直接按历史推荐集合 timeline 展现给用户即可。")])])}),[],!1,null,null,null);_.default=t.exports}}]);