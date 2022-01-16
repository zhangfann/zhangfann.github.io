(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{499:function(s,e,n){"use strict";n.r(e);var a=n(42),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("c_cpp为什么要专门设计个do_while")]),s._v(" "),n("p",[s._v("原创 果冻虾仁 [编程往事](javascript:void(0)😉 "),n("em",[s._v("昨天")])]),s._v(" "),n("p",[s._v("收录于话题")]),s._v(" "),n("p",[s._v("#for循环1个内容")]),s._v(" "),n("p",[s._v("#C++30个内容")]),s._v(" "),n("p",[s._v("#do while1个内容")]),s._v(" "),n("p",[s._v("#C++115个内容")]),s._v(" "),n("p",[s._v("最初"),n("code",[s._v("do ... while")]),s._v("的出现，更多的是作为循环控制流的一种语法糖。因为不论是while 还是 for循环，都是要先判断是否满足进入循环体的条件的。满足条件之后才能进入循环去执行循环体内的操作。")]),s._v(" "),n("p",[s._v("而有些时候，第一次的执行逻辑我们不需要满足循环条件，也要执行。这时候就可以用"),n("code",[s._v("do ... while")]),s._v("。举个例子，前几天的LeetCode每日一题 "),n("code",[s._v("869. 重新排序得到2的幂")]),s._v("，刚好遇到这么一个场景：")]),s._v(" "),n("blockquote",[n("p",[s._v("给定正整数 N ，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。如果我们可以通过上述方式得到 2 的幂，返回 true；否则，返回 false。")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("https://leetcode-cn.com/problems/reordered-power-of-2/")])]),s._v(" "),n("p",[s._v("解题偷懒的话，可以直接用STL的排列相关的函数next_permutation来解答：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution {\npublic:\n    bool reorderedPowerOf2(int n) {\n        auto check = [](int n) {\n            return (n&(n-1)) == 0;\n        };\n\n        string s = to_string(n);\n        int len = s.size();\n        sort(s.begin(), s.end());\n\n        do {\n            if (s[0] == '0') {\n                continue;\n            }\n            if (check(stoi(s))) {\n                return true;\n            }\n        } while (next_permutation(s.begin(), s.end()));\n\n        return false;\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("本题，在我们将字符串"),n("code",[s._v("sort()")]),s._v("以后，变成了字典升序，然后每次通过调用"),n("code",[s._v("next_permutation()")]),s._v(" 修改字符串s，变成其中字母的下一个排列。当不存在下一个排列的时候（字符串已经变成字典序逆序），返回false。")]),s._v(" "),n("p",[s._v("在一开始进来的时候不能")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("        while (next_permutaion(s.begin(), s.end()) {\n            if (s[0] == '0') {\n                continue;\n            }\n            if (check(stoi(s))) {\n                return true;\n            }\n        }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("因为这样会导致sort完成的那个s（升序）没有参与到check的计算，造成遗漏。")]),s._v(" "),n("p",[s._v("如果不能"),n("code",[s._v("do ... while")]),s._v("就只能这样写：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("        sort(s.begin(), s.end());\n\n        if (s[0] != '0' && check(stoi(s))) {\n            return true;\n        }\n        while (next_permutation(s.begin(), s.end())) {\n            if (s[0] == '0') {\n                continue;\n            }\n            if (check(stoi(s))) {\n                return true;\n            }\n        }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("在while执行之前做一次check计算，然后才进入while。逻辑上当然没问题，只是造成了代码冗余。")]),s._v(" "),n("p",[s._v("当然这是do ... while最初的用法，后面程序员们集思广益，又利用do ... while的特性发明了独特了 do ... while(0)的特殊使用场景")]),s._v(" "),n("h2",{attrs:{id:"do-while-0-搭配宏函数的定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#do-while-0-搭配宏函数的定义"}},[s._v("#")]),s._v(" do ... while(0) 搭配宏函数的定义")]),s._v(" "),n("p",[s._v("C和C++语言中有宏的概念，而Java没有，所以这个条款对Java程序员没有用。")]),s._v(" "),n("p",[s._v("在C/C++中，有时候我们可能用宏来定义“函数”。我们都知道其本质还是宏，而非函数。所以其实还是在编译预处理阶段进行代码文本的暴力替换！而如果你定义的宏函数中的代码，被插入的位置，附近有括号或分号，有时候常常不能如你所愿的编译运行。")]),s._v(" "),n("p",[n("strong",[s._v("而do ... while(0)构造的代码块则不会受到大括号、分号等的影响。不管你把你的宏函数放到任何地方都不会出错。")])]),s._v(" "),n("p",[s._v("比如Redis源码中就有大量的这种用法，下面这段出自zmalloc的源码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#define update_zmalloc_stat_alloc(__n) do { \\\n    size_t _n = (__n); \\\n    if (_n&(sizeof(long)-1)) _n += sizeof(long)-(_n&(sizeof(long)-1)); \\\n    if (zmalloc_thread_safe) { \\\n        update_zmalloc_stat_add(_n); \\\n    } else { \\\n        used_memory += _n; \\\n    } \\\n} while(0)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"do-while-0-中断顺序执行的逻辑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#do-while-0-中断顺序执行的逻辑"}},[s._v("#")]),s._v(" do ... while(0) 中断顺序执行的逻辑")]),s._v(" "),n("p",[s._v("这个条款适用于C、C++、Java等有"),n("code",[s._v("do ... while")]),s._v("用法的语言。由于Java中int和bool不能转换，所以在Java中是：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("do {\n} while (false);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("下面言归正传，关于这个用法，其实我在之前这篇文章的条款7也介绍过了。")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NDIyMjI3OQ==&mid=2649004091&idx=1&sn=47b2a52d314ef7d83d0350134d082e59&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),n("OutboundLink")],1),s._v("C++代码简化之道（一）")]),s._v(" "),n("p",[s._v("概括一下，函数（或方法）中一段顺序逻辑，依次经历1，2，3三个步骤，然后是其他逻辑（比如 4， 5）。其中1，如果失败就不执行2，2如果失败不执行3。就是逻辑中断之后直接跳到4和5。容易想到的实现思路有三：")]),s._v(" "),n("ol",[n("li",[s._v("把步骤1， 2，3抽象成函数。每次判断函数的返回值，成功才调用下一个函数。OK。这样没问题。但是如果这种类似的逻辑很多，就要抽成很多个函数，而每个函数内只有寥寥几行代码。未免啰嗦。")]),s._v(" "),n("li",[s._v("使用异常。如果是Java语言应该很习惯用异常来实现这个逻辑，把顺序逻辑封在try catch块里。每个步骤失败直接throw异常。OK，C++也可以写类似的代码。然而C++用异常隐患很多，不如Java安全，很多工程规范都竭力避免抛异常。另外就是抛异常也不是无开销的，而且这里只是逻辑中断，逻辑上也不算『异常』，通过throw异常和catch异常的方式未免影响代码可读性……")]),s._v(" "),n("li",[s._v("goto【Java没有，C和C++有】确实看过一些代码确实在这种场合使用过goto。当然我们要严厉禁止goto。这个方案直接略过。")])]),s._v(" "),n("p",[s._v("其实还有第4种方案："),n("code",[s._v("do while(0)")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("do {\n    // 步骤1\n    ...\n    if (步骤1失败) {\n        break;\n    }\n    // 步骤2\n    ...\n    if (步骤2失败) {\n        break;\n    }\n    // 步骤3\n    ...\n    if (步骤3失败) {\n        break;\n    }\n} while(0);\n\n// 步骤4\n...\n// 步骤5\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("这个其实也适用于其他用do while的语言，不止C++。当然关于这个用法在C++11以后，很多人提出，用立即执行的lambda会更好，表现力会更强一些：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[...](...) { // 通过捕获或传参传入一些上下文中的变量，\n             // 用...替代，表示省略 ...不是语法的一部分！\n    // 步骤1\n    ...\n    if (步骤1失败) {\n        return;\n    }\n    // 步骤2\n    ...\n    if (步骤2失败) {\n        return;\n    }\n    // 步骤3\n    ...\n    if (步骤3失败) {\n        return;\n    }\n}(); // 比普通lambda表达式多了一个括号，表示立即执行\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("这种匿名的、定义处立即执行的lambda，也叫"),n("code",[s._v("IIFE")]),s._v("(Immediately Invoked Function Expression) ，翻译成："),n("strong",[s._v("立即调用函数表达式")]),s._v("。IIFE是Javascript中的概念，见国外有些人也把C++的这种lambda表达式用法称作IIFE，私以为可能不是C++这边的官方说法。")]),s._v(" "),n("p",[s._v("Anyway，不过其实IIFE的风格，代码量上也并没有比"),n("code",[s._v("do ... while(0)")]),s._v("减少多少，而且还要额外的传参或捕获。支持者们认为，这里面的return中断逻辑，要比"),n("code",[s._v("do ... while(0)")]),s._v("的 break表达中断要好。这个……见仁见智吧。")]),s._v(" "),n("h1",{attrs:{id:"往期推荐"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#往期推荐"}},[s._v("#")]),s._v(" 往期推荐")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NDIyMjI3OQ==&mid=2649003059&idx=1&sn=9de099fe618452c90e068d6761b4dd02&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),n("OutboundLink")],1),s._v("实践解读CLOSE_WAIT和TIME_WAIT")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NDIyMjI3OQ==&mid=2649002886&idx=1&sn=815697147d0fd7415a4fc0d73aec5c89&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),n("OutboundLink")],1),s._v("大四那一年")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NDIyMjI3OQ==&mid=2649004681&idx=1&sn=02f8c4509b18de5d8c8abac527bbf660&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),n("OutboundLink")],1),s._v("白嫖Github的Action做定时任务")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NDIyMjI3OQ==&mid=2649004646&idx=1&sn=e3f3a6e5b6e7e03e8be4660b9c983f18&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),n("OutboundLink")],1),s._v("brpc小课堂：从StringPiece说开来")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NDIyMjI3OQ==&mid=2649004917&idx=1&sn=4ab837ecf07f7e3b6170eef797c5c518&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),n("OutboundLink")],1),s._v("STL中有哪些副作用或容易会产生性能开销的地方？")]),s._v(" "),n("p",[s._v("收录于话题 #C++")]),s._v(" "),n("p",[s._v("30个")]),s._v(" "),n("p",[s._v("下一篇brpc小课堂：从StringPiece说开来")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NDIyMjI3OQ==&mid=2649004970&idx=1&sn=f6f95d917dd4d627658eb927fa5649cf&chksm=be9b220289ecab14df0241b25ca67b2eb36389fb6b9f544792d9e113213ad28be22ac320fda8&scene=90&subscene=93&sessionid=1637020862&clicktime=1637020867&enterid=1637020867&ascene=56&devicetype=android-28&version=28001053&nettype=WIFI&abtest_cookie=AAACAA%3D%3D&lang=zh_CN&exportkey=AaiPZcNqVEvjMR%2FyEra6%2F3g%3D&pass_ticket=B5Af7VGA1rFU89WBqAMAJ7Nb2HYBNa%2FY%2F3NYojthlDopCk74724M1tBv5G%2FQOL6H&wx_header=1C/C++##",target:"_blank",rel:"noopener noreferrer"}},[s._v("阅读原文"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("喜欢此内容的人还喜欢")]),s._v(" "),n("p",[s._v("这些JavaScript 细节，你未必知道")]),s._v(" "),n("p",[s._v("JavaScript 每日一练")]),s._v(" "),n("p",[s._v("不喜欢")]),s._v(" "),n("p",[s._v("不看的原因")]),s._v(" "),n("p",[s._v("确定")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("内容质量低")])]),s._v(" "),n("li"),s._v(" "),n("li",[n("p",[s._v("不看此公众号")])])]),s._v(" "),n("p",[s._v("MySQL规范「建表规范」有了这个技术规范，看谁还敢说我的建表不规范！- 第397篇")]),s._v(" "),n("p",[s._v("SpringBoot")]),s._v(" "),n("p",[s._v("不喜欢")]),s._v(" "),n("p",[s._v("不看的原因")]),s._v(" "),n("p",[s._v("确定")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("内容质量低")])]),s._v(" "),n("li"),s._v(" "),n("li",[n("p",[s._v("不看此公众号")])])]),s._v(" "),n("p",[s._v("Python 可视化如何配色？这个工具你值得拥有")]),s._v(" "),n("p",[s._v("Python实用宝典")]),s._v(" "),n("p",[s._v("不喜欢")]),s._v(" "),n("p",[s._v("不看的原因")]),s._v(" "),n("p",[s._v("确定")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("内容质量低")])]),s._v(" "),n("li"),s._v(" "),n("li",[n("p",[s._v("不看此公众号")])])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MjM5NDIyMjI3OQ==&mid=2649004970&idx=1&sn=f6f95d917dd4d627658eb927fa5649cf&send_time=",alt:"img"}})]),s._v(" "),n("p",[s._v("微信扫一扫\n关注该公众号")]),s._v(" "),n("p",[s._v("：，。视频小程序赞，轻点两下取消赞在看，轻点两下取消在看")]),s._v(" "),n("iframe",{staticStyle:{margin:"0px",padding:"0px",outline:"0px",width:"370px",height:"56px",border:"0px",display:"block !important"},attrs:{name:"jaeFetchUserJSFrame",src:"about:blank",allowtransparency:"true"}})])}),[],!1,null,null,null);e.default=t.exports}}]);