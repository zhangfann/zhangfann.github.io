(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{477:function(e,a,s){"use strict";s.r(a);var n=s(42),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("[Linux内核之旅](javascript:void(0)😉 "),s("em",[e._v("今天")])]),e._v(" "),s("p",[e._v("以下文章来源于一口Linux ，作者土豆居士")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/F61ty8bFHlyU6PboBVedFg#",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("一口Linux")]),e._v(".写点代码，写点人生！"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("击上方“"),s("strong",[e._v("一口Linux")]),e._v("”，选择“"),s("strong",[e._v("星标公众号")]),e._v("”")]),e._v(" "),s("h1",{attrs:{id:"干货福利-第一时间送达"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#干货福利-第一时间送达"}},[e._v("#")]),e._v(" 干货福利，第一时间送达！")]),e._v(" "),s("h1",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")]),e._v(" "),s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",alt:"图片"}})]),e._v(" "),s("h2",{attrs:{id:"_0-前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[e._v("#")]),e._v(" 0. 前言")]),e._v(" "),s("p",[e._v("粉丝留言，想知道如何使用Makefile给多个文件和多级目录建立一个工程，必须安排！")]),e._v(" "),s("p",[e._v("关于Makefile的入门参考文章，可以先看这篇文章：")]),e._v(" "),s("p",[e._v("《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzUxMjEyNDgyNw==&mid=2247497099&idx=1&sn=cc1ecb9f77b13726ed7bac1cc8b9ba96&chksm=f96b877fce1c0e69ccd4e0a913bb8dce2f9217b4452083e1bfe94e803b5bba009f10db2cde41&token=1090410464&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Makefile入门教程"),s("OutboundLink")],1),e._v("》")]),e._v(" "),s("p",[e._v("为了让大家有个更加直观的感受，一口君将之前写的一个小项目，本篇在该项目基础上进行修改。")]),e._v(" "),s("p",[e._v("该项目详细设计和代码，见下文：")]),e._v(" "),s("p",[e._v("《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzUxMjEyNDgyNw==&mid=2247497355&idx=1&sn=34acdc6014924551d67f3aeb477ecca5&chksm=f96b847fce1c0d698109845db171eeb37b2774b9cb7a2a392145e4ed180afc05ef8cf5c7d91d&token=1108558673&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("从0写一个《电话号码管理系统》的C入门项目【适合初学者】"),s("OutboundLink")],1),e._v("》")]),e._v(" "),s("h2",{attrs:{id:"一、文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、文件"}},[e._v("#")]),e._v(" 一、文件")]),e._v(" "),s("p",[e._v("好了，开始吧!")]),e._v(" "),s("p",[e._v("我们将该项目的所有功能函数放到以该函数名命名的c文件，同时放到对应名称的子目录中。")]),e._v(" "),s("p",[e._v("比如函数allfree()，存放到 allfree/allfree.c中")]),e._v(" "),s("p",[e._v("最终目录结构如下图所示：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" peng@ubuntu:/mnt/hgfs/code/phone$ tree .\n.\n├── allfree\n│   ├── allfree.c\n│   └── Makefile\n├── create\n│   ├── create.c\n│   └── Makefile\n├── delete\n│   ├── delete.c\n│   └── Makefile\n├── display\n│   ├── display.c\n│   └── Makefile\n├── include\n│   ├── Makefile\n│   └── phone.h\n├── init\n│   ├── init.c\n│   └── Makefile\n├── login\n│   ├── login.c\n│   └── Makefile\n├── main\n│   ├── main.c\n│   └── Makefile\n├── Makefile\n├── menu\n│   ├── Makefile\n│   └── menu.c\n├── scripts\n│   └── Makefile\n└── search\n    ├── Makefile\n    └── search.c\n\n11 directories, 22 files\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br")])]),s("p",[e._v("直接看下编译结果吧：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("peng@ubuntu:/mnt/hgfs/code/phone$ make\nmake[1]: Entering directory '/mnt/hgfs/code/phone/allfree'\nmake[1]: Nothing to be done for 'all'.\nmake[1]: Leaving directory '/mnt/hgfs/code/phone/allfree'\nmake[1]: Entering directory '/mnt/hgfs/code/phone/create'\nmake[1]: Nothing to be done for 'all'.\nmake[1]: Leaving directory '/mnt/hgfs/code/phone/create'\nmake[1]: Entering directory '/mnt/hgfs/code/phone/delete'\nmake[1]: Nothing to be done for 'all'.\nmake[1]: Leaving directory '/mnt/hgfs/code/phone/delete'\nmake[1]: Entering directory '/mnt/hgfs/code/phone/display'\nmake[1]: Nothing to be done for 'all'.\nmake[1]: Leaving directory '/mnt/hgfs/code/phone/display'\nmake[1]: Entering directory '/mnt/hgfs/code/phone/init'\nmake[1]: Nothing to be done for 'all'.\nmake[1]: Leaving directory '/mnt/hgfs/code/phone/init'\nmake[1]: Entering directory '/mnt/hgfs/code/phone/login'\nmake[1]: Nothing to be done for 'all'.\nmake[1]: Leaving directory '/mnt/hgfs/code/phone/login'\nmake[1]: Entering directory '/mnt/hgfs/code/phone/menu'\nmake[1]: Nothing to be done for 'all'.\nmake[1]: Leaving directory '/mnt/hgfs/code/phone/menu'\nmake[1]: Entering directory '/mnt/hgfs/code/phone/search'\nmake[1]: Nothing to be done for 'all'.\nmake[1]: Leaving directory '/mnt/hgfs/code/phone/search'\nmake[1]: Entering directory '/mnt/hgfs/code/phone/main'\nmake[1]: Nothing to be done for 'all'.\nmake[1]: Leaving directory '/mnt/hgfs/code/phone/main'\ngcc -Wall -O3 -o phone allfree/*.o create/*.o delete/*.o display/*.o init/*.o login/*.o menu/*.o search/*.o main/*.o -lpthread\nphone make done! \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br")])]),s("p",[e._v("运行结果如下："),s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfcicQL2YyNxpUfoldjm5b27o5ZbDgIWZSpYMmURccfAYhUhLIQEhqAjdrQxRohbZuJsqgL6WicgxXXCw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),s("h2",{attrs:{id:"二、makefile常用基础知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、makefile常用基础知识点"}},[e._v("#")]),e._v(" 二、Makefile常用基础知识点")]),e._v(" "),s("h3",{attrs:{id:"_0-符号-n-的说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-符号-n-的说明"}},[e._v("#")]),e._v(" [0] 符号"),s("code",[e._v("'@' '$' '$$' '-' '-n '")]),e._v("的说明")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("'@'")]),e._v("\n通常makefile会将其执行的命令行在执行前输出到屏幕上。如果将‘@’添加到命令行前，这个命令将不被make回显出来。例如：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("@echo  --compiling module----;  // 屏幕输出  --compiling module----\necho  --compiling module----;  // 没有@ 屏幕输出echo  --compiling module----   \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ol",[s("li",[s("code",[e._v("' - '")])])]),e._v(" "),s("p",[e._v("通常删除，创建文件如果碰到文件不存在或者已经创建，那么希望忽略掉这个错误，继续执行，就可以在命令前面添加 -，")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("-rm dir；\n-mkdir aaadir；\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ol",[s("li",[s("code",[e._v("' $ '")]),e._v("美元符号"),s("code",[e._v("$")]),e._v("，主要扩展打开makefile中定义的变量")]),e._v(" "),s("li",[s("code",[e._v("' $$ '``$$")]),e._v(" 符号主要扩展打开makefile中定义的shell变量")])]),e._v(" "),s("h3",{attrs:{id:"_1-wildcard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-wildcard"}},[e._v("#")]),e._v(" [1] wildcard")]),e._v(" "),s("p",[e._v("说明: 列出当前目录下所有符合模式“ PATTERN”格式的文件名,并且以空格分开。“ PATTERN”使用shell可识别的通配符，包括“ ?”（单字符）、“ *”（多字符）等。示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$(wildcard *.c) \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("返回值为当前目录下所有.c 源文件列表。")]),e._v(" "),s("h3",{attrs:{id:"_2-patsubst"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-patsubst"}},[e._v("#")]),e._v(" [2] patsubst")]),e._v(" "),s("p",[e._v("说明：把字串“ x.c.c bar.c”中以.c 结尾的单词替换成以.o 结尾的字符。示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$(patsubst %.c,%.o,x.c.c bar.c)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("函数的返回结果 是")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" x.c.o bar.o\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"_3-notdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-notdir"}},[e._v("#")]),e._v(" [3] notdir")]),e._v(" "),s("p",[e._v("说明：去除文件名中的路径信息 示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SRC = ( notdir ./src/a.c ) \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("去除文件a . c 的路径信息 ， 使用 (notdir ./src/a.c) 去除文件a.c的路径信息，使用 (notdir./src/a.c)去除文件a.c的路径信息，使用(SRC)得到的是不带路径的文件名称，即a.c。")]),e._v(" "),s("h3",{attrs:{id:"_4-包含头文件路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-包含头文件路径"}},[e._v("#")]),e._v(" [4] 包含头文件路径")]),e._v(" "),s("p",[e._v("使用-I+头文件路径的方式可以指定编译器的头文件的路径 示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INCLUDES = -I./inc\n$(CC) -c $(INCLUDES) $(SRC)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"_5-addsuffix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-addsuffix"}},[e._v("#")]),e._v(" [5] addsuffix")]),e._v(" "),s("p",[e._v("函数名称：加后缀函数—addsuffix。语法：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$(addsuffix SUFFIX,NAMES…) \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("函数功能：为“NAMES…”中的每一个文件名添加后缀“SUFFIX”。参数“NAMES…” 为空格分割的文件名序列，将“SUFFIX”追加到此序列的每一个文件名 的末尾。返回值：以单空格分割的添加了后缀“SUFFIX”的文件名序列。函数说明：示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$(addsuffix .c,foo bar) \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("返回值为")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("foo.c bar.c\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"_6-包含另外一个文件-include"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-包含另外一个文件-include"}},[e._v("#")]),e._v(" [6] 包含另外一个文件：include")]),e._v(" "),s("p",[e._v("在Makefile使用include关键字可以把别的Makefile包含进来，这很像C语言的#include，被包含的文件会原模原样的放在当前文件的包含位置。比如命令")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("include file.dep\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("即把file.dep文件在当前Makefile文件中展开，亦即把file.dep文件的内容包含进当前Makefile文件")]),e._v(" "),s("blockquote",[s("p",[e._v("在 include前面可以有一些空字符，但是绝不能是[Tab]键开始。")])]),e._v(" "),s("h3",{attrs:{id:"_7-foreach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-foreach"}},[e._v("#")]),e._v(" [7] foreach")]),e._v(" "),s("p",[e._v("foreach函数和别的函数非常的不一样。因为这个函数是用来做循环用的 语法是：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$(foreach <var>,<list>,<text> )\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这个函数的意思是，把参数中的单词逐一取出放到参数所指定的变量中，然后再执行所包含的表达式。")]),e._v(" "),s("p",[e._v("每一次会返回一个字符串，循环过程中，的所返回的每个字符串会以空格分隔，最后当整个循环结束时，所返回的每个字符串所组成的整个字符串（以空格分隔）将会是foreach函数的返回值。")]),e._v(" "),s("p",[e._v("所以，最好是一个变量名，可以是一个表达式，而中一般会使用这个参数来依次枚举中的单词。")]),e._v(" "),s("p",[e._v("举例:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("names := a b c d\nfiles := $(foreach n,$(names),$(n).o)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("上面的例子中，"),s("code",[e._v("$(name)")]),e._v("中的单词会被挨个取出，并存到变量“n”中，“"),s("code",[e._v("$(n).o")]),e._v("”每次根据“"),s("code",[e._v("$(n)")]),e._v("”计算出一个值，这些值以空格分隔，最后作为foreach函数的返回，所以，"),s("code",[e._v("$(files)")]),e._v("的值是“a.o b.o c.o d.o”。")]),e._v(" "),s("p",[e._v("注意，foreach中的参数是一个临时的局部变量，foreach函数执行完后，参数的变量将不在作用，其作用域只在foreach函数当中。")]),e._v(" "),s("h3",{attrs:{id:"_8-call"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-call"}},[e._v("#")]),e._v(" [8] call")]),e._v(" "),s("p",[e._v("“ call”函数是唯一一个可以创建定制化参数函数的引用函数。使用这个函数可以实现对用户自己定义函数引用。我们可以将一个变量定义为一个复杂的表达式，用“ call”函数根据不同的参数对它进行展开来获得不同的结果。")]),e._v(" "),s("p",[e._v("函数语法：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$(call variable,param1,param2,...)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("函数功能：在执行时，将它的参数“ param”依次赋值给临时变量“ "),s("code",[e._v("$(1)")]),e._v("”、“ "),s("strong",[s("code",[e._v("$(2)")])]),e._v("” call 函数对参数的数目没有限制，也可以没有参数值，没有参数值的“ call”没有任何实际存在的意义。执行时变量“ variable”被展开为在函数上下文有效的临时变量，变量定义中的“ "),s("code",[e._v("$(1)")]),e._v("”作为第一个参数，并将函数参数值中的第一个参数赋值给它；变量中的“ "),s("strong",[s("code",[e._v("$(2)")])]),e._v("”一样被赋值为函数的第二个参数值；依此类推（变量**"),s("code",[e._v("$(0)")]),e._v("**代表变量“ variable”本身）。之后对变量“ variable” 表达式的计算值。")]),e._v(" "),s("p",[e._v("返回值：参数值“ param”依次替换“ "),s("strong",[s("code",[e._v("$(1)")])]),e._v("”、“ "),s("strong",[s("code",[e._v("$(2)")])]),e._v("”…… 之后变量“ variable”定义的表达式的计算值。")]),e._v(" "),s("p",[e._v("函数说明：")]),e._v(" "),s("ol",[s("li",[e._v("函数中“ variable”是一个变量名，而不是变量引用。因此，通常“ call”函数中的“ variable”中不包含“ "),s("strong",[s("code",[e._v("$")])]),e._v("”（当然，除非此变量名是一个计算的变量名）。")]),e._v(" "),s("li",[e._v("当变量“ variable”是一个 make 内嵌的函数名时（如“ if”、“ foreach”、“ strip”等），对“ param”参数的使用需要注意，因为不合适或者不正确的参数将会导致函数的返回值难以预料。")]),e._v(" "),s("li",[e._v("函数中多个“ param”之间使用逗号分割。")]),e._v(" "),s("li",[e._v("变量“ variable”在定义时不能定义为直接展开式！只能定义为递归展开式。")])]),e._v(" "),s("p",[e._v("函数示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('reverse = $(2)$(1)\nfoo = $(call reverse,a,b)\nall:\n @echo "foo=$(foo)"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("执行结果：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("foo=ba\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("即a替代了替代了(2)")]),e._v(" "),s("h2",{attrs:{id:"三、编译详细说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、编译详细说明"}},[e._v("#")]),e._v(" 三、编译详细说明")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfcicQL2YyNxpUfoldjm5b27o5PLBtH9dzLmVeZ4mZZibrMHHSEzD5Dcw5sv2Gef8PPbKNNxCoXpk5JLw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),s("p",[e._v("我们在根目录下执行make命令后，详细步骤如下：")]),e._v(" "),s("ol",[s("li",[e._v("include scripts/Makefile ：将文件替换到当前位置，")]),e._v(" "),s("li",[e._v("使用默认的目标all，该目标依赖于"),s("code",[e._v("$(Target)``$(Target)")]),e._v(" 在scripts/Makefile中定义了，即phone")]),e._v(" "),s("li",[e._v("而"),s("code",[e._v("$(Target)")]),e._v("依赖于mm")]),e._v(" "),s("li",[e._v("mm这个目标会执行")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("@ $(foreach n,$(Modules),$(call modules_make,$(n)))\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Modules是所有的目录名字集合， foreach 会遍历字符串$(Modules)中每个词语， 每个词语会赋值给n， 同时执行语句：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("call modules_make,$(n)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ol",[s("li",[e._v("modules_make 被"),s("code",[e._v("$(MAKE) -C $(1)")]),e._v("所替代，")])]),e._v(" "),s("p",[s("strong",[s("code",[e._v("$(MAKE)")])]),e._v(" 有默认的名字make -C：进入子目录执行make"),s("code",[e._v("$(1)")]),e._v(" ：是步骤4中"),s("code",[e._v("$(n)")]),e._v(",即每一个目录名字")]),e._v(" "),s("p",[e._v("最终步骤4的语句就是进入到每一个目录下，执行每一个目录下的Makefile")]),e._v(" "),s("ol",[s("li",[e._v("进入某一个子目录下，执行Makefile 默认目标是all，依赖Objs")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Objs := $(patsubst %.c,%.o,$(Source))\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("patsubst 把字串"),s("code",[e._v("$ource")]),e._v("中以.c 结尾的单词替换成以.o 结尾的字符 而")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Source := $(wildcard ./*.c)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("wildcard 会列举出当前目录下所有的.c文件")]),e._v(" "),s("p",[e._v("所以第6步最终就是将子目录下的所有的.c文件，编译生成对应文件名的.o文件")]),e._v(" "),s("ol",[s("li")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$(CC) $(CFLAGS) -o $(Target) $(AllObjs) $(Libs)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这几个变量都在文件scripts/Makefile中定义"),s("code",[e._v("$(CC)")]),e._v(" ：替换成gcc，制定编译器"),s("code",[e._v("$(CFLAGS)")]),e._v(" ：替换成-Wall -O3，即编译时的优化等级"),s("code",[e._v("-o $(Target)")]),e._v("：生成可执行程序phone"),s("code",[e._v("$(AllObjs)")]),e._v(" ：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("AllObjs := $(addsuffix /*.o,$(Modules))\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("addsuffix 会将 /*.o追加到"),s("code",[e._v("$(Modules)")]),e._v("中所有的词语后面，也就是我们之前在子目录下编译生成的所有的.o文件"),s("code",[e._v("$(Libs)")]),e._v(" ：替换为-lpthread，即所需要的动态库")]),e._v(" "),s("p",[e._v("大家可以根据这个步骤，来分析一下执行make clean时，执行步骤")]),e._v(" "),s("p",[e._v("完整的实例程序公众号后台回复："),s("strong",[e._v("电话号码管理")])]),e._v(" "),s("p",[e._v("《电话号码管理-makefile版.rar》")]),e._v(" "),s("p",[e._v("end")]),e._v(" "),s("p",[s("strong",[e._v("一口Linux")])]),e._v(" "),s("p",[s("strong",[e._v("关注，回复【"),s("strong",[s("strong",[e._v("1024")])]),e._v("】海量Linux资料赠送")])]),e._v(" "),s("p",[s("img",{attrs:{src:"http://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfc8535w2vKlsLPf5hwdMjpYrzuVCHx0rcQmvv8rYqTFtIyic5qErtciaibqaIOWgeKkDsOMeae4HciaUaw/0?wx_fmt=png",alt:"一口Linux"}})]),e._v(" "),s("p",[s("strong",[e._v("一口Linux")])]),e._v(" "),s("p",[e._v("写点代码，写点人生！")]),e._v(" "),s("p",[e._v("174篇原创内容")]),e._v(" "),s("p",[e._v("公众号")]),e._v(" "),s("p",[s("strong",[e._v("精彩文章合集")])]),e._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUxMjEyNDgyNw==&action=getalbum&album_id=1614665559315382276#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARM"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUxMjEyNDgyNw==&action=getalbum&album_id=1629876820810465283#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("粉丝问答"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUxMjEyNDgyNw==&action=getalbum&album_id=1479949091139813387#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("所有原创"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUxMjEyNDgyNw==&action=getalbum&album_id=1507350615537025026#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("linux"),s("OutboundLink")],1),e._v("入门")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUxMjEyNDgyNw==&action=getalbum&album_id=1598710257097179137#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("计算机网络"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUxMjEyNDgyNw==&action=getalbum&album_id=1502410824114569216#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux驱动"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzUxMjEyNDgyNw==&mid=2247496985&idx=1&sn=c3d5e8406ff328be92d3ef4814108cd0&chksm=f96b87edce1c0efb6f60a6a0088c714087e4a908db1938c44251cdd5175462160e26d50baf24&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("嵌入式驱动工程师学习路线"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzUxMjEyNDgyNw==&mid=2247497822&idx=1&sn=1e2aed9294f95ae43b1ad057c2262980&chksm=f96b8aaace1c03bc2c9b0c3a94c023062f15e9ccdea20cd76fd38967b8f2eaad4dfd28e1ca3d&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux嵌入式所有知识点-思维导图"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("点击“"),s("strong",[e._v("阅读原文")]),e._v("”查看更多分享，欢迎"),s("strong",[e._v("点分享、收藏、点赞、在看")])]),e._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/F61ty8bFHlyU6PboBVedFg##",target:"_blank",rel:"noopener noreferrer"}},[e._v("阅读原文"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("喜欢此内容的人还喜欢")]),e._v(" "),s("p",[e._v("Nginx 可视化管理和监控神器")]),e._v(" "),s("p",[e._v("互联网后端架构")]),e._v(" "),s("p",[e._v("不喜欢")]),e._v(" "),s("p",[e._v("不看的原因")]),e._v(" "),s("p",[e._v("确定")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("内容质量低")])]),e._v(" "),s("li"),e._v(" "),s("li",[s("p",[e._v("不看此公众号")])])]),e._v(" "),s("p",[e._v("是时候在项目中使用这个CSS属性了")]),e._v(" "),s("p",[e._v("前端宇宙")]),e._v(" "),s("p",[e._v("不喜欢")]),e._v(" "),s("p",[e._v("不看的原因")]),e._v(" "),s("p",[e._v("确定")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("内容质量低")])]),e._v(" "),s("li"),e._v(" "),s("li",[s("p",[e._v("不看此公众号")])])]),e._v(" "),s("p",[e._v("6 个没人讲过的 CSS 属性")]),e._v(" "),s("p",[e._v("前端技术优选")]),e._v(" "),s("p",[e._v("不喜欢")]),e._v(" "),s("p",[e._v("不看的原因")]),e._v(" "),s("p",[e._v("确定")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("内容质量低")])]),e._v(" "),s("li"),e._v(" "),s("li",[s("p",[e._v("不看此公众号")])])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzI3NzA5MzUxNA==&mid=2664610378&idx=1&sn=b5b0c6736c33227d2d2a604e985a05bd&send_time=",alt:"img"}})]),e._v(" "),s("p",[e._v("微信扫一扫\n关注该公众号")]),e._v(" "),s("p",[e._v("：，。视频小程序赞，轻点两下取消赞在看，轻点两下取消在看")])])}),[],!1,null,null,null);a.default=t.exports}}]);