(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{531:function(t,a,r){"use strict";r.r(a);var s=r(42),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"架构设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构设计"}},[t._v("#")]),t._v(" 架构设计")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/03/16/dNkhbfDaeVES9r3.jpg",alt:"arch"}})]),t._v(" "),r("h1",{attrs:{id:"系统设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统设计"}},[t._v("#")]),t._v(" 系统设计")]),t._v(" "),r("h2",{attrs:{id:"分bucket读取"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分bucket读取"}},[t._v("#")]),t._v(" 分bucket读取")]),t._v(" "),r("p",[t._v("分bucket读取, 可以进行并发读, 防止读重复")]),t._v(" "),r("h2",{attrs:{id:"统一消息队列写入"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#统一消息队列写入"}},[t._v("#")]),t._v(" 统一消息队列写入")]),t._v(" "),r("p",[t._v("使用统一消息队列, 可以进行并发写, 防止因某个读取线程阻塞, 导致写线程阻塞, 提高写效率")]),t._v(" "),r("h2",{attrs:{id:"消息堆积"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息堆积"}},[t._v("#")]),t._v(" 消息堆积")]),t._v(" "),r("p",[t._v("每个队列有固定长度, 当消息积压时, 会暂停生产")]),t._v(" "),r("h2",{attrs:{id:"写入失败"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#写入失败"}},[t._v("#")]),t._v(" 写入失败")]),t._v(" "),r("p",[t._v("如果读取线程失败, 会将消息重新加入队列, 尝试10次后, 仍失败, 日志记录, 写下一个文件,")])])}),[],!1,null,null,null);a.default=e.exports}}]);