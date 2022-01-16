(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{413:function(e,l,n){"use strict";n.r(l);var t=n(42),v=Object(t.a)({},(function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("经典系统设计图解笔记（一）：即时聊天系统")]),e._v(" "),n("p",[e._v("在自己学习各种各样软件系统，特别是分布式系统的过程中，我做了一些笔记，有许多常见的、经典的系统，是非常值得学习和总结的。它们数量不算多，但具有典型意义，可能这样的系统也就十几个。")]),e._v(" "),n("p",[e._v("我在回顾这些笔记的时候发现，有时候一张简单的图，包含最核心的几个设计，就可以很大程度地帮助理解和记忆。所以我想把这些笔记和图解的结合通过文章的形式发出来，预计每篇文章都很短，基本上一张图，加上一点说明性的文字。")]),e._v(" "),n("p",[e._v("Disclaimer：这些都来自我自己的阅读和理解，肯定有着相当的改变和简化，因此它并不代表任何系统实际的样子。")]),e._v(" "),n("p",[e._v("今天是第一篇，即时聊天系统，但是基本上好多即时通讯软件都属于这一类，比如微信，比如 QQ，比如 Facebook Messenger，比如 WhatsApp。")]),e._v(" "),n("ul",[n("li",[e._v("用户发送消息，直接发给 ChatService，它会做少量的处理并持久化，然后发给一个 channel，每一个对话（thread）都会有一个 channel，这个过程中，它并不关心这个对话有多少人参与（支持群聊）。由于单台机器和客户端的连接数量有限（比如小于 2^16=65536），因此 PushService 需要有很多机器，根据用户的 id 来 sharding，它们去订阅自己感兴趣的频道，有新的消息就发送给用户。")]),e._v(" "),n("li",[e._v("PushService 获取客户端的心跳，保持来自客户端的连接（long polling 或者 socket）为了实时性肯定要用 pull 模型，不能用 push 模型。因此它知道用户的当前在线状态，也知道最后一条发送成功消息的时间戳（状态）。这个状态可以用于决定用户离线时消息是否要通过其它方式通知用户。")]),e._v(" "),n("li",[e._v("右侧的消息数据库，RDB 往往不太适合，因为消息数量太大，对于一组对话（thread）的展示，需要找到该对话 N 条最近的记录，行数据库效率较低，可以考虑列数据库，比如 HBase。这种方式下，同一 thread 下的消息都是按时序存放在一起的，读的效率非常高，写因为基本是 append，也很方便。")]),e._v(" "),n("li",[e._v("用户数据的存储，可以使用 RDB，也可以使用 KV 数据库。")]),e._v(" "),n("li",[e._v("对于用户上线、下线的实现，其实也类似，上线、下线的事件可以推送到一个特定的 Channel 里面，而用户的好友，也就是感兴趣的 PushService 的个体去订阅消息；还有一种思路是把状态更新到用户表里面，这样所有人都可以查询得到，这后一种方式适合非好友也要查看用户状态的情况。上、下线需要保留缓冲时间，容许一定状态的延迟，没必要，也不应过于实时。")])])])}),[],!1,null,null,null);l.default=v.exports}}]);