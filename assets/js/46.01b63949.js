(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{446:function(_,v,e){"use strict";e.r(v);var t=e(42),p=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("p",[_._v("第 1 天：前端布局概述今天是《前端小课》第二阶段第一天，正式进入打卡。打卡的正确方式如下图所示，打卡指令在文章某个角落中，一图胜千言：")]),_._v(" "),e("p",[_._v("CSS 的主要作用是样式和布局，第一阶段我们学习了 CSS 样式相关的内容，这一阶段学习 CSS 布局相关的内容。CSS 布局非常重要，各种「网页骨架」都是通过布局来实现的，比如把元素放到页面中指定位置。CSS 布局对于刚入门的同学理解起来比较难，它不像 iOS 的布局那么单一，通过 frame 布局或自动布局搞定一切。由于 Web 页面需要适配到多种屏幕，既要适配各种 iPhone、Android 设备，又要适配 PC 端，还修改浏览器的大小。总之 Web 的布局需要适配尺寸太多了，假如常见的设备尺寸是（320-1024），那么你需要适配 320-1024 中的任何尺寸。所以 Web 中的布局相对复杂，单纯地使用一种布局方式很难做到适配多种屏幕。移动端的布局也在逐步向前端这个方向转变，比如用的最多的 Flexbox。")]),_._v(" "),e("p",[_._v("一个完整的 Web 页面是由一个一个 HTML 元素组成，每个元素都是一个盒子，如何摆放这些盒子是通过「布局」来决定的。Web 的默认布局方式是流式布局（Nomal flow），只要不修改 CSS 的布局属性（display、float、position），HTML 元素就会按照默认布局方式来摆放这些「盒子」。在第一阶段中的盒子模型我们学习了 CSS 中的盒子模型。"),e("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI5MTY0ODAwNQ==&mid=2247484083&idx=1&sn=2d02221949f29faa9fd19a01cfd13257&chksm=ec0c25d9db7baccfda3ca372cb3d3a079939227e4d40620aa4dacfd1c8e10b59dfa8d850ab14&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[_._v("第 10 天：撑起 CSS 布局的半壁江山 --- 盒子模型"),e("OutboundLink")],1),_._v(" 。")]),_._v(" "),e("p",[_._v("很多时候流式布局并不能满足某些页面的设计，这就需要打破流式布局或修改流式布局的默认摆放位置。比如我的网站，使用流式布局很难实现：")]),_._v(" "),e("p",[_._v("前端常用的布局可以用下面的图来表示：")]),_._v(" "),e("p",[e("strong",[_._v("1.")]),_._v(" floats")]),_._v(" "),e("p",[_._v("它最初的设计是为了做文字环绕的效果，后来有人也用它来做布局，它的表现形式类似于行内元素，会一个挨着一个进行布局，可以从左边或右边开始布局。这种方案比较 trick。适合做左右布局的样式。")]),_._v(" "),e("p",[_._v("p {\nfloat: right;\n/"),e("em",[_._v("float: left;")]),_._v("/\n}")]),_._v(" "),e("p",[e("strong",[_._v("2.")]),_._v(" position：")]),_._v(" "),e("p",[_._v("它可以使元素脱离流式布局，放到指定位置。这种布局方式类似于 iOS 中的 frame 布局，可以通过坐标来控制元素的显示位置。主要有下面几个值：")]),_._v(" "),e("p",[_._v("static：默认值，流式布局；")]),_._v(" "),e("p",[_._v("relative：相对布局，相对的基准是元素在流失布局的位置；")]),_._v(" "),e("p",[_._v("absolute：绝对布局，相对的基准是最近一个使用 position 不为 static 的父元素；")]),_._v(" "),e("p",[_._v("fixed：固定在可视区域的某一个位置；")]),_._v(" "),e("p",[_._v("sticky：当滑动到某个位置时悬停在某个位置，类似于 iOS 中 UITableview 的 section header 悬停效果。")]),_._v(" "),e("p",[_._v("p {\nposition: relative;\nleft: 10px;\ntop: 10px;\n}")]),_._v(" "),e("p",[_._v("**3.**Flexbox（Flexible Box Layout Moudle）:")]),_._v(" "),e("p",[_._v("这种布局方式应该移动端的同学都知道，它应用非常广泛，在移动端也有类似的实现。它是一种一维布局方式，可以通过行或者列来布局子元素。如果想让某些元素使用 flexbox 布局，首先需要指定它的父元素为一个 flexbox 容器，容器具有一些属性决定子元素如何摆放。每个子元素也具有自己的属性来决定自己如何展示。它具有「弹性」，子元素会根据父元素的尺寸来决定自己该占用多大的空间。")]),_._v(" "),e("p",[_._v("p {\n/"),e("em",[_._v("p 就是一个 flex 容器")]),_._v("/\ndisplay: flex;\n}")]),_._v(" "),e("p",[_._v("**4.**grid：")]),_._v(" "),e("p",[_._v("flexbox 布局是一维的，而 grid 布局更高级一些，它是二维的，可以同时布局行和列，也就是说你可以指定一个容器是几行几列的。这种方式类似于一个表格。同样 grid 布局容器和它的 item 都具有不同的属性。「超越技术网站」中间的格子就是利用这种布局实现的。")]),_._v(" "),e("p",[_._v("p {\n/"),e("em",[_._v("p 就是一个 flex 容器")]),_._v("/\ndisplay: grid;\n}")]),_._v(" "),e("p",[_._v("**5.**table：")]),_._v(" "),e("p",[_._v("被退化的布局方式，现在几乎不再使用它来布局，通常使用它做表格样式。做布局时它有很多缺点，比如调试难。")]),_._v(" "),e("p",[_._v("display: table;\n}")]),_._v(" "),e("p",[_._v("**6.**muti-column：")]),_._v(" "),e("p",[_._v("多列布局，布局的时候需要告诉浏览器有多少列，或者列的宽度。比如报纸这种以列排列的样式通常使用这种布局。但是现在 Flexbox 布局完全可以做到这一点，这种布局方式也很少被用到。")]),_._v(" "),e("p",[_._v("p {\ncolumn-width: 100px;\n}")]),_._v(" "),e("p",[e("strong",[_._v("总结")])]),_._v(" "),e("p",[_._v("以上就是 CSS 中常用的布局方式，可以通过 float、position 和 diplay 来控制 HTML 元素该如何显示，在实际开发中往往会结合多种布局方式。通过这节课程希望你能够对 CSS 布局有一个整体的了解，然后我们逐个突破，以及学习各种布局的使用场景。同一个页面会有多种布局方式，衡量是不是一种好的布局是看它能不能在不同浏览器中正常显示，不同设备有没有错乱。目前网页设计遵循的规则是移动优先。")]),_._v(" "),e("p",[_._v("今天的有效打卡指令（任意一个）：")]),_._v(" "),e("p",[_._v("\\1. 从前端布局中你有什么启发？")]),_._v(" "),e("p",[_._v("\\2. 你最常用的布局方式有哪些？")]),_._v(" "),e("p",[_._v("\\3. 文中总共提到了多少种布局？")]),_._v(" "),e("p",[_._v("来自 "),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/oDNuyEdgUPweSZiOWnriQA",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://mp.weixin.qq.com/s/oDNuyEdgUPweSZiOWnriQA"),e("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=p.exports}}]);