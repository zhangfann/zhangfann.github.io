(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{564:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"map-set分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map-set分类"}},[t._v("#")]),t._v(" map set分类")]),t._v(" "),s("p",[t._v("-有序\n-k不可重复\n保存kv map\n保存k set\n-k可重复\nmultimap\nmultiset\n-无序\n-k可重复\nunordered_multimap\nunordered_multiset\n-k不可重复\nunordered_map\nunordered_set")]),t._v(" "),s("h1",{attrs:{id:"map-4种添加方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map-4种添加方式"}},[t._v("#")]),t._v(" map 4种添加方式")]),t._v(" "),s("p",[t._v("auto ret= word_count.insert({k, v});\nword_count.insert(make_pair(k, v));\nword_count.insert(pair<string, size_t>(k, v));\nword_count.insert(map<string, size_t>::value_type(k, v));")]),t._v(" "),s("p",[t._v("ret=={插入迭代器的位置, 是否成功}\n是否成功\n-map中存在 => false\n-map中不存在 => true\nif(!ret.second){\n++ret.first->second; //map不存在 添加计数\n}")]),t._v(" "),s("h1",{attrs:{id:"删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),s("p",[t._v("word_count.erase(key)-> int 删除的元素数量")]),t._v(" "),s("h1",{attrs:{id:"查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找"}},[t._v("#")]),t._v(" 查找")]),t._v(" "),s("h2",{attrs:{id:"下标访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下标访问"}},[t._v("#")]),t._v(" 下标访问")]),t._v(" "),s("p",[t._v("map[key]\n-存在 返回value\n-不存在 插入key\nmap.at(key)\n-存在 返回value\n-不存在 抛出异常")]),t._v(" "),s("h2",{attrs:{id:"遍历map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遍历map"}},[t._v("#")]),t._v(" 遍历map")]),t._v(" "),s("div",{staticClass:"language-c++ line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("for(const auto &w: word_count){\n    cout<< w.first << w.second << endl;\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"count-计数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#count-计数"}},[t._v("#")]),t._v(" count 计数")]),t._v(" "),s("p",[t._v("map.count(key:string) -> int")]),t._v(" "),s("h2",{attrs:{id:"find-查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find-查找"}},[t._v("#")]),t._v(" find 查找")]),t._v(" "),s("h3",{attrs:{id:"map-find"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map-find"}},[t._v("#")]),t._v(" map find")]),t._v(" "),s("p",[t._v("map.find(key:string) -> map::iterator\nmap使用find 而不用下标的意义在于\n我们只需要看一下这个key是否在map中")]),t._v(" "),s("h3",{attrs:{id:"set查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set查找"}},[t._v("#")]),t._v(" set查找")]),t._v(" "),s("p",[t._v("set"),s("string",[t._v(' s_set;\ns_set.find("123")== s_set.end()')])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);