(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{511:function(n,v,i){"use strict";i.r(v);var t=i(42),e=Object(t.a)({},(function(){var n=this,v=n.$createElement,i=n._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("p",[n._v("掘金是一个帮助开发者成长的社区，是给开发者用的 Hacker News，给设计师用的 Designer News，和给产品经理用的 Medium。\n前言\n最近忙里偷闲，给自己加油充电的时候，发现自己脑海中布局这块非常的凌乱混杂，于是花了一些时间将一些常用的布局及其实现方法整理梳理了出来，在这里，分享给大家。")]),n._v(" "),i("p",[n._v("单列布局\n单列布局是最常用的一种布局，一般是将一个元素作为容器，设置一个固定的宽度，水平居中对齐。")]),n._v(" "),i("p",[n._v("单列布局一般有两种形式：")]),n._v(" "),i("p",[n._v("(图片来源：https://blog.csdn.net/Ace_Arm/article/details/81036129)")]),n._v(" "),i("p",[n._v("一栏布局\n一栏布局头部、内容、底部宽度一致")]),n._v(" "),i("p",[n._v("效果图")]),n._v(" "),i("p",[n._v("代码实现\nhtml")]),n._v(" "),i("header"),n._v(" "),i("main"),n._v(" "),i("footer"),n._v("\n复制代码\ncss\n"),i("p",[n._v("header,footer{\nwidth: 1200px;\nheight: 100px;\nmargin: 0 auto;\nbackground: black;\n}\nmain{\nwidth: 1200px;\nheight: 600px;\nbackground: red;\nmargin: 0 auto;\n}\n复制代码\n一栏布局（通栏）\n一栏布局（通栏）头部和底部宽度一致，占满整个页面，中间内容区域宽度较小不占满屏幕。")]),n._v(" "),i("p",[n._v("效果图")]),n._v(" "),i("p",[n._v("代码实现\nhtml")]),n._v(" "),i("header"),n._v(" "),i("main"),n._v(" "),i("footer"),n._v("\n复制代码\ncss\n"),i("p",[n._v("header,footer{\nwidth: 100%;\nheight: 100px;\nbackground: black;\n}\nmain{\nwidth: 1200px;\nheight: 600px;\nbackground: red;\nmargin: 0 auto;\n}\n复制代码\n单列布局是最为基础和简单的一种，实现方法并不局限于以上两种，大家可自由发挥，找到更多的方法来实现。")]),n._v(" "),i("p",[n._v("2 列布局\n2 列布局的使用频率也非常高，其实现效果主要就是将页面分割成左右宽度不等的两列。一般宽度较小的一列会设置为固定宽度，作为侧边栏之类的，而另一列则充满剩余宽度，作为内容区。")]),n._v(" "),i("p",[n._v("在后台管理系统及 api 文档中使用较为广泛。")]),n._v(" "),i("p",[n._v("效果图\n先来看看效果：")]),n._v(" "),i("p",[n._v("代码实现\n实现两列布局的方法有很多，这里主要介绍两种方法。")]),n._v(" "),i("p",[n._v("calc 函数\ncalc() 函数用于动态计算长度值。实现思路很简单，侧边栏宽度固定，设置绝对定位，使其脱离文档流，内容区域通过 calc() 函数计算剩余宽度并设置宽度，再加一个 margin-left，值为侧边栏的宽度。")]),n._v(" "),i("p",[n._v("代码如下：")]),n._v(" "),i("p",[n._v("html")]),n._v(" "),i("div"),n._v(" "),i("div"),n._v("\n复制代码\ncss\n"),i("p",[n._v("*{\nmargin: 0;\npadding: 0;\n}\nbody,html{\nwidth: 100%;\nheight: 100%;\n}\n.slider,.main{\nheight: 100%;\n}\n.slider{\nposition: absolute;\nleft: 0;\ntop: 0;\nwidth: 100px;\nbackground: black;\n}\n.main{\nwidth: calc(100% - 100px);\nbackground: red;\nmargin-left: 100px;\n}\n复制代码\nflex 属性\n通过 flex 属性实现思路也很简单，将父元素设置为 flex，侧边栏宽度固定，内容区域设置flex:1即可充满剩余区域。")]),n._v(" "),i("p",[n._v("代码如下：")]),n._v(" "),i("p",[n._v("html")]),n._v(" "),i("div"),n._v(" "),i("div"),n._v("\n复制代码\ncss\n"),i("p",[n._v("*{\nmargin: 0;\npadding: 0;\n}\nbody,html{\nwidth: 100%;\nheight: 100%;\n}\nbody{\ndisplay: flex;\n}\n.slider,.main{\nheight: 100%;\n}\n.slider{\nwidth: 100px;\nbackground: black;\n}\n.main{\nflex: 1;"),i("br"),n._v("\nbackground: red;\n}\n复制代码\n3 列布局\n3 列布局在日常开发中使用频率也是很高的，其按照左中右的顺序进行排列，通常中间列最宽，左右两列次之。左右两边定宽，中间自适应，能根据屏幕大小做响应。")]),n._v(" "),i("p",[n._v("效果图\n还是先来看看效果图")]),n._v(" "),i("p",[n._v("代码实现\n三列布局的实现方法也很多，这里主要介绍两种（双飞翼布局、圣杯布局、flex 布局）")]),n._v(" "),i("p",[n._v("在介绍双飞翼布局和圣杯布局之前要先说一下 margin 设置负值的作用：")]),n._v(" "),i("p",[n._v("当 margin 的值设为负值的时候，元素会对应的像那个放向移动，比如 margin-left 为负值，元素则会左移")]),n._v(" "),i("p",[n._v("双飞翼布局\n代码如下：")]),n._v(" "),i("p",[n._v("html")]),n._v(" "),i("div",[i("div",[i("div",[n._v("\n            中间\n        ")])]),n._v(" "),i("div",[n._v("\n        左边\n    ")]),n._v(" "),i("div",[n._v("\n        右边\n    ")])]),n._v("\n复制代码\ncss\n"),i("ul",[i("li",[n._v("{\nmargin: 0;\npadding: 0;\n}")])]),n._v(" "),i("p",[n._v("body,\nhtml {\nwidth: 100%;\nheight: 100%;\n}\ndiv{\nheight: 100%;\n}\n.main>div {\nfloat: left;\n}")]),n._v(" "),i("p",[n._v(".left {\nwidth: 200px;\nbackground: red;\nmargin-left: -100%;\n}")]),n._v(" "),i("p",[n._v(".right {\nwidth: 200px;\nbackground: blue;\nmargin-left: -200px;\n}")]),n._v(" "),i("p",[n._v(".middle {\nwidth: 100%;\nbackground: yellow;")]),n._v(" "),i("p",[n._v("}")]),n._v(" "),i("p",[n._v(".content {\nmargin-left: 200px;\nmargin-right: 200px;\n}\n复制代码\n圣杯布局\n代码如下: html")]),n._v(" "),i("div",[i("div",[n._v("中间中间中间中间中间中间中间后")]),n._v(" "),i("div",[n._v("左边")]),n._v(" "),i("div",[n._v("右边")])]),n._v("\n复制代码\ncss\n"),i("ul",[i("li",[n._v("{\nmargin: 0;\npadding: 0;\n}")])]),n._v(" "),i("p",[n._v(".main {\nheight: 200px;\npadding: 0 150px 0 200px;\nbackground: greenyellow;\n*zoom: 1;\n}")]),n._v(" "),i("p",[n._v(".left,\n.center,\n.right {\nfloat: left;\n}")]),n._v(" "),i("p",[n._v(".center {\nwidth: 100%;\nheight: 200px;\nbackground: red;\n}")]),n._v(" "),i("p",[n._v(".left {\nwidth: 200px;\nheight: 200px;\nbackground: yellow;\nmargin-left: -100%;\nposition: relative;\nleft: -200px;\n}")]),n._v(" "),i("p",[n._v(".right {\nwidth: 150px;\nheight: 200px;\nbackground: gainsboro;\nmargin-left: -150px;\nposition: relative;\nleft: 150px;\n}\n复制代码\n双飞翼布局其实和圣杯布局的精髓是一样的，都是通过设置负 margin 来实现元素的排布，不同的就是 html 结构，双飞翼是在 center 元素内部又设置了一层 inner-center 的元素并设置它的左右 margin，而非圣杯布局的 padding，来排除两边元素的覆盖。所以这两种布局原理基本一样，关键就是在于设置负 margin 的技巧，和元素浮动的相对定位技巧来实现。")]),n._v(" "),i("p",[n._v("flex 布局\n代码如下: html")]),n._v(" "),i("div",[i("div",[n._v("左边定宽")]),n._v(" "),i("div",[n._v("中间自适应")]),n._v(" "),i("div",[n._v("右边定宽")])]),n._v("\n复制代码\ncss\n"),i("ul",[i("li",[n._v("{\npadding: 0px;\nmargin: 0px;\n}\nbody,html{\nwidth: 100%;\nheight: 100%;\n}\nbody{\ndisplay: flex;\n}")])]),n._v(" "),i("p",[n._v("#left,\n#right {\nwidth: 100px;\nbackground-color: #0FC;\n}\n#main {\nflex: 1;\nbackground-color: #999;\n}\n复制代码\n如果不考虑浏览器兼容问题的话，运用 flex 布局是最简单的方式。")]),n._v(" "),i("p",[n._v("垂直方向的布局（sticky footer）\n这种布局将页面分成上、中、下三个部分，上、下部分都为固定高度，中间部分高度不定。当页面高度小于浏览器高度时，下部分应固定在屏幕底部；当页面高度超出浏览器高度时，下部分应该随中间部分被撑开，显示在页面最底部。")]),n._v(" "),i("p",[n._v("这种布局也称之为sticky footer，意思是下部分粘黏在屏幕底部。")]),n._v(" "),i("p",[n._v("代码实现\n首先我们先构建简单的 HTML 代码")]),n._v(" "),i("body",[i("div"),n._v(" "),i("div")]),n._v("\n复制代码\n其中 content 为我们的内容区。下面开始介绍解决方法。\n"),i("p",[n._v("为内容区域添加最小的高度\n这种方法重要用 vh(viewpoint height) 来计算整体视窗的高度 (1vh 等于视窗高度的 1%), 然后减去底部 footer 的高度，从而求得内容区域的最小高度。例如我们可以添加如下样式：")]),n._v(" "),i("p",[n._v(".content{\nmin-height:calc(100vh-footer的高度);\nbox-sizing:border-box;\n}"),i("br"),n._v("\n复制代码\n从而这个问题就解决了，但是如果页面的 footer 高度不同怎么办? 每一个页面都要重新计算一次，这是很麻烦的，所以这种方法虽然简单但却是不推荐的。")]),n._v(" "),i("p",[n._v("使用 flex 布局\n这种方法就是利用 flex 布局对视窗高度进行分割。footer 的 flex 设为 0，这样 footer 获得其固有的高度; content 的 flex 设为 1，这样它会充满除去 footer 的其他部分。")]),n._v(" "),i("p",[n._v("代码如下：")]),n._v(" "),i("p",[n._v("body {\ndisplay: flex;\nflex-flow: column;\nmin-height: 100vh;\n}\n.content {\nflex: 1;\n}\n.footer{\nflex: 0;"),i("br"),n._v("\n}\n复制代码\n这样的布局简单使用，比较推荐。")]),n._v(" "),i("p",[n._v("在 content 的外面可以添加一个 wrapper\n这种方法就是在 content 的外面添加一个包裹容易，将 html 代码改成这样：")]),n._v(" "),i("body",[i("div",[i("div")]),n._v(" "),i("div")]),n._v("\n复制代码\n然后添加以下样式：\n"),i("p",[n._v("html, body, .wrapper {\nheight: 100%;\n}\nbody > .wrapper {\nheight: auto;\nmin-height: 100%;\n}\n.content {\npadding-bottom: 150px; /* 必须使用和footer相同的高度 "),i("em",[n._v("/\n}"),i("br"),n._v("\n.footer {\nposition: relative;\nmargin-top: -150px; /")]),n._v(" footer高度的负值 */\nheight: 150px;\nclear:both;\n}\n复制代码\n另外，为了保证兼容性，需要在 wrapper 上添加 clearfix 类。其代码如下：")]),n._v(" "),i("body",[i("div",[i("div")]),n._v(" "),i("div")]),n._v('\n复制代码\n.clearfix{\n     display: inline-block;\n}\n.clearfix:after {\n     content: ".";\n     display: block;\n     height: 0;\n     clear: both;\n     visibility: hidden;\n}    \n复制代码\nok, 好，完成了，这种方法也比较推荐，但就是加入的代码比较多，也改变了 html 的文档结构。\n'),i("p",[n._v("粘性布局（sticky）\n粘性布局是什么呢？我们先来看看效果演示")]),n._v(" "),i("p",[n._v("没错，其实就是在页面滚动的时候保持元素（这里的是标题）在页面视图上方，也就是我们常常看到的 吸附效果。")]),n._v(" "),i("p",[n._v("标题行设置了背景色。如果不设置背景色（背景透明），正常文档流的文字就会和标题行文字重叠在一起显示。")]),n._v(" "),i("p",[n._v("sticky 定位的元素会遮住滚动而来的 “正常” 的文档流；后面的 sticky 元素会覆盖前面的 sticky 元素，就好像一层层的便利贴，是不是很酷~~。")]),n._v(" "),i("p",[n._v("代码实现\n实现粘性布局主要依靠position的sticky属性。")]),n._v(" "),i("p",[n._v("position: sticky;\n复制代码\n先来看看兼容性：")]),n._v(" "),i("p",[n._v("从Can I use上查询可以看出，sticky 的兼容性并不是太好，所以大家使用的时候要慎重考虑，如果不要求兼容的情况，用这个还是相当的舒服了。")]),n._v(" "),i("p",[n._v("下面给出一个简单的示例。")]),n._v(" "),i("p",[n._v("html:")]),n._v(" "),i("main",[i("header",[n._v("标题一")]),n._v(" "),i("div"),n._v(" "),i("header",[n._v("标题二")]),n._v(" "),i("div"),n._v(" "),i("header",[n._v("标题三")]),n._v(" "),i("div"),n._v(" "),i("header",[n._v("标题四")]),n._v(" "),i("div")]),n._v("\n复制代码\njs(不想写太多 p 标签，所以用 js 生成，偷个懒):\n"),i("p",[n._v("let num = 20\nlet html = ''\nfor (var i = 0; i < num; i++) {\nhtml += "),i("code",[n._v("<p>${i + 1}</p>")]),n._v("\n}\nArray.prototype.slice.call(document.getElementsByClassName('content')).forEach(item=>{\nitem.innerHTML = html\n})\n复制代码\ncss:")]),n._v(" "),i("p",[n._v("main {\nwidth: 400px;\nheight: 300px;\nmargin: 200px auto;\noverflow: auto;\n}\nheader {\nposition: sticky;\ntop: 0;\nheight: 30px;\nbackground-color: blanchedalmond;\n}\n复制代码\n我是 monkeysoft，你的【三连】就是 monkeysoft 创作的最大动力，如果本篇文章有任何错误和建议，欢迎大家留言！")]),n._v(" "),i("p",[n._v("本文首发于公众号【猴哥说前端】，文章持续更新，可以微信搜索 【猴哥说前端】关注公众号第一时间阅读。")])])}),[],!1,null,null,null);v.default=e.exports}}]);