(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{396:function(t,a,s){"use strict";s.r(a);var r=s(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"架构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#架构设计"}},[t._v("#")]),t._v(" 架构设计")]),t._v(" "),s("p",[s("img",{attrs:{src:"%E7%BD%91%E9%97%B8%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E7%A8%8B%E5%BA%8F.assets/arch.bmp",alt:"arch"}})]),t._v(" "),s("h1",{attrs:{id:"系统设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统设计"}},[t._v("#")]),t._v(" 系统设计")]),t._v(" "),s("h2",{attrs:{id:"分bucket读取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分bucket读取"}},[t._v("#")]),t._v(" 分bucket读取")]),t._v(" "),s("p",[t._v("分bucket读取, 可以进行并发读, 防止读重复")]),t._v(" "),s("h2",{attrs:{id:"统一消息队列写入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统一消息队列写入"}},[t._v("#")]),t._v(" 统一消息队列写入")]),t._v(" "),s("p",[t._v("使用统一消息队列, 可以进行并发写, 防止因某个读取线程阻塞, 导致写线程阻塞, 提高写效率")]),t._v(" "),s("h2",{attrs:{id:"消息堆积"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息堆积"}},[t._v("#")]),t._v(" 消息堆积")]),t._v(" "),s("p",[t._v("每个队列有固定长度, 当消息积压时, 会暂停生产")]),t._v(" "),s("h2",{attrs:{id:"写入失败"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写入失败"}},[t._v("#")]),t._v(" 写入失败")]),t._v(" "),s("p",[t._v("如果读取线程失败, 会将消息重新加入队列, 尝试10次后, 仍失败, 日志记录, 写下一个文件,")])])}),[],!1,null,null,null);a.default=e.exports}}]);