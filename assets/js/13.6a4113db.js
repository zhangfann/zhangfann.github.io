(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{359:function(a,t,r){"use strict";r.r(t);var s=r(42),v=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),r("h2",{attrs:{id:"架构设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构设计"}},[a._v("#")]),a._v(" 架构设计")]),a._v(" "),r("p",[r("img",{attrs:{src:"/vipserver/arch.bmp",alt:"arch"}})]),a._v(" "),r("h3",{attrs:{id:"客户端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[a._v("#")]),a._v(" 客户端")]),a._v(" "),r("p",[a._v("终端从客户端获得服务的ip地址")]),a._v(" "),r("p",[a._v("需部署使用一个dns域名, 部署一个web服务, 提供vipserver服务端ip列表,\n客户端可以在此dns地址, 获得vipserver服务端ip列表")]),a._v(" "),r("h3",{attrs:{id:"服务端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务端"}},[a._v("#")]),a._v(" 服务端")]),a._v(" "),r("p",[a._v("服务端集群内数据保持一致,\n使用Diamond持久配置中心作为存放数据的数据库")]),a._v(" "),r("h3",{attrs:{id:"数据结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[a._v("#")]),a._v(" 数据结构")]),a._v(" "),r("p",[r("img",{attrs:{src:"/vipserver/data.bmp",alt:"data"}}),a._v("\n地址列表: {ip, 端口, 权重, 环境信息(机房, 城市)}\n每个服务单独是一个文件, 对应一个地址列表")]),a._v(" "),r("h2",{attrs:{id:"系统设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统设计"}},[a._v("#")]),a._v(" 系统设计")]),a._v(" "),r("h3",{attrs:{id:"无侵入客户端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无侵入客户端"}},[a._v("#")]),a._v(" 无侵入客户端")]),a._v(" "),r("p",[a._v("DNS Filter, 当终端请求服务时, 通过DNS拦截,\n如果有vipserver监控的服务, 就返回服务响应ip")]),a._v(" "),r("h3",{attrs:{id:"本地缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地缓存"}},[a._v("#")]),a._v(" 本地缓存")]),a._v(" "),r("p",[a._v("vipserver每台server拥有全量数据,\n一台下线, 客户端可以请求其他server")]),a._v(" "),r("p",[a._v("客户端获取服务地址后, 写入本地缓存")]),a._v(" "),r("h3",{attrs:{id:"分量检测"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分量检测"}},[a._v("#")]),a._v(" 分量检测")]),a._v(" "),r("p",[a._v("将n个域名分配给m个机器检查,\n将n个域名与m进行mod运算,\n如果与本机下标相同, 则进行检查, 否则不进行检查")]),a._v(" "),r("h3",{attrs:{id:"负载均衡"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[a._v("#")]),a._v(" 负载均衡")]),a._v(" "),r("p",[a._v("客户端以轮询方式访问vipserver服务端, 以做到负载均衡")]),a._v(" "),r("h4",{attrs:{id:"权重计算"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#权重计算"}},[a._v("#")]),a._v(" 权重计算")]),a._v(" "),r("p",[a._v("对所有地址（ip）的权重求和\n那么每个地址的权重就把 sum 划分成了一个一的区间Ｄi。\n在 [0,sum] 间随机取浮点值，f = random(0, sum)。\n查找满足条件的地址 m，使得 m ∈Ｄi 即可。")])])}),[],!1,null,null,null);t.default=v.exports}}]);