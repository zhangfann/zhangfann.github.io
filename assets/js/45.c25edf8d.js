(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{431:function(e,n,r){"use strict";r.r(n);var t=r(42),o=Object(t.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Flexbox 布局是一维布局方式，也就是说它会按照 row（行）或者 column（列）对容器中的子元素进行布局。移动端也存在这种布局方式，比如：Android 中的 FlexboxLayout，iOS 中的 yoga（https://github.com/facebook/yoga/tree/master/YogaKit）。几乎所有的平台都会支持这种布局方式，说明它一定有自己的布局优势。")]),e._v(" "),r("p",[e._v("Flexbox 布局是通过 CSS 中的属性 display：flex 来控制的，布局时需要指定一个容器 flex container，然后把要布局的元素放到容器中，这些元素被称为 flex item。我们看一下 MDN 上的一张图：")]),e._v(" "),r("p",[e._v("Flexbox 会把整个布局按两根轴（主轴（main axis），与主轴交叉的轴（cross axis））来布局。最外层为容器，容器内部为 item。整个布局思路就是按照不同的轴对 item 进行布局。")]),e._v(" "),r("p",[e._v("比如我们想实现下面这种效果：")]),e._v(" "),r("p",[e._v("想实现上面这种布局方式，可以嵌套 2 个 flex 容器：")]),e._v(" "),r("p",[e._v("总之，Flexbox 其实是一种通过一个容器来控制它内容元素的布局方式，容器具有一些属性来控制它内部的元素该如何布局，内部元素也有一些属性来控制元素本身的布局方式。我们一起看看这些属性：")]),e._v(" "),r("p",[e._v("作用于「容器」上的属性")]),e._v(" "),r("p",[r("em",[e._v("flex-direction")]),e._v(": 布局方向，决定子元素要按照什么方向进行布局，也就是「主轴」的方向，主轴的方向不等于 x 轴，这一点需要初学者注意；")]),e._v(" "),r("p",[e._v(".container {\ndisplay: flex;\nflex-direction: row;\n#row 主轴就是 X 轴的方向（默认）\n#row-reverse 主轴的相反方向\n#column 主轴方向为 Y 轴\n#column-reverse 主轴的相反方向\n}")]),e._v(" "),r("p",[r("em",[e._v("flex-wrap")]),e._v(": 定义子元素「超出」容器后该如何布局;")]),e._v(" "),r("p",[e._v(".container {\ndisplay: flex;\nflex-direction: row;\nflex-wrap: no-wrap | wrap | wrap-reverse;\n}")]),e._v(" "),r("p",[r("em",[e._v("flex-flow")]),e._v(": 为 flex-direction | flex-wrap 的复合，比如：")]),e._v(" "),r("p",[e._v("flex-flow: row wrap;")]),e._v(" "),r("p",[r("em",[e._v("justify-content")]),e._v(": 「主轴」的对齐方式；")]),e._v(" "),r("p",[e._v(".container {\ndisplay: flex;\nflex-direction: row;\nflex-wrap: wrap;\n/* 主轴的对齐方式*/\njustify-content:flex-start | flex-end | center | space-between | space-around;\n}")]),e._v(" "),r("p",[r("em",[e._v("align-items")]),e._v(": 定义交叉轴的对齐方式;")]),e._v(" "),r("p",[e._v(".container {\ndisplay: flex;\nflex-direction: row;\n/* 交叉轴的方向 */\nalign-items: center | flex-start | flex-end | stretch | baseline;\n}")]),e._v(" "),r("p",[r("em",[e._v("align-content")]),e._v(": 如果存在多行，将对多行进行对齐，如果只有一行将不起作用，它会影响 align-items 的对齐方式；")]),e._v(" "),r("p",[e._v(".container {\ndisplay: flex;\nflex-direction: row;\nflex-wrap: wrap;\nalign-content: flex-start | flex-end | center | stretch | space-around | space-between;\n}")]),e._v(" "),r("p",[e._v("flex-item 的属性")]),e._v(" "),r("p",[e._v("flex-item 也有自己的属性，通过这些属性可以单独控制自己该如何布局。")]),e._v(" "),r("p",[r("em",[e._v("order")]),e._v(" : 控制显示顺序，默认值为 0，可以设置负数和整数。设置第 3 个孩子的 order 为 -1，其它的孩子都为 0，所以第三个孩子将排到第一个。")]),e._v(" "),r("p",[e._v("span:nth-child(3) {\nbackground-color: #FFC988;\norder: -1;\n}")]),e._v(" "),r("p",[r("em",[e._v("flex-grow")]),e._v(" : 表示当容器存在「剩余空间」时，该如何分配剩余空间，默认值为 0，也就是说不会分配剩余空间。它的值为整数，是分配的比例。把第 3 个元素的 flex-grow 设置成 1，由于其它元素均为 0，那么剩余空间都将会全部分配给第三元素。")]),e._v(" "),r("p",[e._v("span:nth-child(3) {\nbackground-color: #FFC988;\nflex-grow: 1;\norder: -1;\n}")]),e._v(" "),r("p",[r("em",[e._v("flex-shrink")]),e._v(" : 当容器空间不足时该如何缩小子元素，默认值为 1。如果设置为 0，即使容器空间不足，也不会缩小；")]),e._v(" "),r("p",[r("em",[e._v("flex-basic")]),e._v(" ：它表示占用的最小空间，计算剩余空间会利用这个值来计算。")]),e._v(" "),r("p",[e._v("span:nth-child(3) {\nbackground-color: #FFC988;\nflex-grow: 1;\nflex-shrink: 0;\nflex-basis: 150px;\norder: -1;\n}")]),e._v(" "),r("p",[r("em",[e._v("flex")]),e._v(" ：为 flex-grow, flex-shrink, flex-basic 的混合值，默认为 0 1 auto；")]),e._v(" "),r("p",[r("em",[e._v("align-self")]),e._v(" : 对齐方式，它默认继承自父元素的 align-items 值，可通过这个属性来修改这个值。设置第三个元素对齐方式为居中对齐。")]),e._v(" "),r("p",[e._v("span:nth-child(3) {\nbackground-color: #FFC988;\nflex-grow: 1;\nflex-basis: 150px;\nalign-self: center;\n}")]),e._v(" "),r("p",[e._v("至此，flexbox 布局就介绍完了，我认为整个布局思路就是围绕轴、容器和子元素进行的，通过设置容器的属性来控制整个容器内部子元素该如何布局，子元素可以单独通过自己的属性来控制自己该如何布局。")]),e._v(" "),r("p",[e._v("周末写了下网站首页，使用 flexbox 进行布局，效果如下：")]),e._v(" "),r("p",[e._v("大家加油！！！")]),e._v(" "),r("p",[e._v("参考：")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/css-flexbox/",target:"_blank",rel:"noopener noreferrer"}},[r("em",[e._v("https://www.w3.org/TR/css-flexbox/")]),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",target:"_blank",rel:"noopener noreferrer"}},[r("em",[e._v("https://css-tricks.com/snippets/css/a-guide-to-flexbox/")]),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",target:"_blank",rel:"noopener noreferrer"}},[r("em",[e._v("https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox")]),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[r("em",[e._v("http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html")]),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"}},[r("em",[e._v("http://www.ruanyifeng.com/blog/2015/07/flex-examples.html")]),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://zellwk.com/blog/simple-form-with-flexbox/",target:"_blank",rel:"noopener noreferrer"}},[r("em",[e._v("https://zellwk.com/blog/simple-form-with-flexbox/")]),r("OutboundLink")],1)]),e._v(" "),r("p",[r("strong",[e._v("推荐阅读：")])]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI5MTY0ODAwNQ==&mid=2247483763&idx=1&sn=f835b835e1d0429af4d781823c5fae01&chksm=ec0c2619db7baf0fce8d3a806cd1fc1537a1f8d3940fe162ebd0d5c57a7e4f98e6da5d4e7508&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("第 3 天 - Web UI 布局方式（二）Position"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI5MTY0ODAwNQ==&mid=2247483761&idx=1&sn=ffbfc1de0482d380f2ca6b91f2099e49&chksm=ec0c261bdb7baf0dadac510881dd77c5b114923c1cf60ea640b3ab0e10a51579222a04d4d4dd&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("第 2 天 - Web UI 布局（一） 流式布局"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("来自 "),r("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI5MTY0ODAwNQ==&mid=2247483796&idx=1&sn=e9730f74adc7828c0efd0c3564c57a54&chksm=ec0c26fedb7bafe81cde24f0ccb290a4903f8a7fe4239fd6f64faccc85e8105a25da77f6633b&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mp.weixin.qq.com/s?__biz=MzI5MTY0ODAwNQ==&mid=2247483796&idx=1&sn=e9730f74adc7828c0efd0c3564c57a54&chksm=ec0c26fedb7bafe81cde24f0ccb290a4903f8a7fe4239fd6f64faccc85e8105a25da77f6633b&scene=21#wechat_redirect"),r("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=o.exports}}]);