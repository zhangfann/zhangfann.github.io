(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{565:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("git clone https://github.com/google/googletest.git\ncd googletest/\nmkdir build\ncd build/\ncmake ..\nmake -j\nmake install")]),t._v(" "),a("h1",{attrs:{id:"集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成"}},[t._v("#")]),t._v(" 集成")]),t._v(" "),a("p",[t._v("CFLAGS += -I/usr/local/include\n; 这里将.a文件写入依赖后 make会自动编译进去\nTest: *.o /usr/local/lib/libgtest.a\n$(CPP) $^ $(LDFLAGS) -o  $@")])])}),[],!1,null,null,null);e.default=n.exports}}]);