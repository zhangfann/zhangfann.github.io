(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{503:function(t,n,e){"use strict";e.r(n);var i=e(42),a=Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("掘金是一个帮助开发者成长的社区，是给开发者用的 Hacker News，给设计师用的 Designer News，和给产品经理用的 Medium。\n已更新 Vue3 版，请看此篇 备战 2021，仿探探拖拽卡片效果 Vue3 实现")]),t._v(" "),e("p",[t._v("类似Tinder和探探的卡片效果的组件，社区中已经非常多了。我这一版除了可以实现和他们一样的效果外。还增加了飞卡的效果，就是类似我的女神邱淑贞这样。")]),t._v(" "),e("p",[t._v("可以将卡片朝任意拖拽方向飞出去，必须得帅是不是！")]),t._v(" "),e("p",[t._v("下面带大家一步步来实现这个效果")]),t._v(" "),e("p",[t._v("绝对原创，如有雷同，纯属对方抄袭😁")]),t._v(" "),e("p",[t._v("其实我最早实现这个效果，是在 2018 年的时候，在 weex 上实现过一版。原帖请看这里：zhuanlan.zhihu.com/p/37482853")]),t._v(" "),e("p",[t._v("咱们这次不要求在 weex 里可用，所以叠起来非常简单。")]),t._v(" "),e("p",[t._v("首先让三个卡片按照近大远小的原则分别设置设置z-index，宽和高，比如每一层卡片的宽和高比上一层卡片要缩小 20 个像素（还有一种做法是通过 zoom 或者 scale 来设置远处卡片的缩小级别）。然后加入绝对定位position:absolute和z-index就可以将卡片层叠起来了。")]),t._v(" "),e("p",[t._v("因为只有第一张卡片可以拖动，所以我们只要监听第一张卡片的拖动事件。比如touchstart,touchmove,touchcancel,touchend。")]),t._v(" "),e("p",[t._v("拖动的时候需要注意，在touchstart的时候记录一下手指按下的位置，在touchmove时要减去这个位置，看上去就是点哪儿从哪儿拖。")]),t._v(" "),e("p",[t._v("touchStart:function(e){\nvar curTouch=e.touches[0];\nthis.startLeft=curTouch.clientX-this.left;\nthis.startTop=curTouch.clientY-this.top;\n}\ntouchMove:function(e){\nvar curTouch=e.touches[0];\nthis.left=curTouch.clientX-this.startLeft;\nthis.top=curTouch.clientY-this.startTop;\n}\n复制代码")]),t._v(" "),e("p",[t._v("要实现超任意拖拽方向飞出去这个效果，需要用到一些数学公式。")]),t._v(" "),e("p",[t._v("计算卡片当前拖拽的坐标和起始坐标的夹角")]),t._v(" "),e("p",[t._v("var angle=Math.atan2((当前坐标.y-起点坐标.y), (当前坐标.x-起点坐标.x));\n复制代码\n飞出去的落点x轴坐标通过计算 angle 的余弦值再乘以力度得出")]),t._v(" "),e("p",[t._v("this.left=Math.cos(angle)*this.throwDistance;\n复制代码\n飞出去的落点y轴坐标通过计算 angle 的正弦值再乘以力度得出")]),t._v(" "),e("p",[t._v("this.top=Math.sin(angle)*this.throwDistance;\n复制代码\n这里咱们做得再完善一些，在拖动结束时去判断一下当前拖动的距离是否足够触发飞卡效果。如果不触发飞卡效果，则触发回位效果。这样的话也可以防止用户误操作。")]),t._v(" "),e("p",[t._v("getDistance:function(x1, y1, x2, y2) {\nvar _x = Math.abs(x1 - x2);\nvar _y = Math.abs(y1 - y2);\nreturn Math.sqrt(_x * _x + _y * _y);\n}")]),t._v(" "),e("p",[t._v("var distance=this.getDistance(0,0,this.left,this.top);\nif(distance>this.throwTriggerDistance){\nthis.makeCardThrow();\n}else{\nthis.makeCardBack();\n}\n复制代码\n上推其实很简单，一开始的时候，我就定义了四张（不是3张吗？怎么变4张了）卡片的大小和位置。")]),t._v(" "),e("p",[t._v("当第一张卡飞出去后")]),t._v(" "),e("p",[t._v("第 2 张卡片变更为原本第 1 张卡片的位置和大小\nthis.width2=this.cardWidth;\nthis.height2=this.cardHeight;\nthis.left2=0;\nthis.top2=0;\n复制代码\n第 3 张卡片变更为原本第 2 张卡片的位置和大小\nthis.width3=(this.cardWidth-this.leftPad"),e("em",[t._v("2);\nthis.height3=(this.cardHeight-this.topPad")]),t._v("2);\nthis.left3=this.leftPad;\nthis.top3=(this.topPad"),e("em",[t._v("3);\n复制代码\n第 4 张卡片原本是透明的，现在变为第 3 张卡片的位置和大小\nthis.width4=(this.cardWidth-this.leftPad")]),t._v("4);\nthis.height4=(this.cardHeight-this.topPad"),e("em",[t._v("4);\nthis.left4=this.leftPad")]),t._v("2;\nthis.top4=(this.topPad*6);\nthis.opacity4=1;\n复制代码\n我把阴影效果先去掉，大家观察一下这个细节")]),t._v(" "),e("p",[t._v("底层的卡片上推和第一张卡片的飞出效果是同时进行的，由 css 的transition来控制。不过时间是我们设定好的，所以只要在上推和飞出的动画时间结束后，我们重置一下所有 4 张卡片的大小和位置即可。")]),t._v(" "),e("p",[t._v("this.onThrowStart();\nsetTimeout(function(){\nthat.isThrow=false;\nthat.isAnimating=false;\nthat.onThrowDone();\nthat.resetAllCard();\n},400);\n复制代码\n这里需要注意，所有四张卡片都需要瞬间完成重置，所以这步之前应该禁用掉 transition 动画。")]),t._v(" "),e("p",[t._v("为了适应各种使用场景，我们要将这个效果封装一下。")]),t._v(" "),e("p",[t._v("@onDragMove='onCardDragMove'\n@onDragStop='onCardDragStop'\n@onThrowDone='onCardThrowDone'\n@onThrowFail='onCardThrowFail'")]),t._v(" "),e("p",[t._v(':cardWidth="200"\n:cardHeight="200"\ncardBgColor="#fff"\n:leftPad="10"\n:topPad="6"\n:borderRadius="8"\n:throwTriggerDistance="100"\ndragDirection="all"\n:hasShadow="false"\n:hasBorder="true"\n复制代码\n提供三个 slot，你可以非常方便的往卡片里塞内容')]),t._v(" "),e("p",[t._t("firstCard"),t._v('\n复制代码\n某乎的推荐回答\n@onDragMove=\'onCardDragMove\'\n@onDragStop=\'onCardDragStop\'\n@onThrowDone=\'onCardThrowDone\'\n:cardWidth="300"\n:cardHeight="120"\n:throwTriggerDistance="100"\ndragDirection="horizontal"\n:hasShadow="true"\n复制代码\n仅允许水平拖动')],2),t._v(" "),e("p",[t._v("由于改变宽高会导致文字换行变化，也许卡片用缩放的话，用户体验会更好一些吧")]),t._v(" "),e("p",[t._v("探探的效果\n实现探探效果的核心是监听卡片拖动的位置")]),t._v(" "),e("p",[t._v('onCardDragMove(obj){\nif(obj.left<-10){\nthis.actionName="不喜欢";\n}else if(obj.left>10){\nthis.actionName="喜欢";\n}else{\nthis.actionName="";\n}\n}\n复制代码')]),t._v(" "),e("p",[t._v("github.com/ezshine/ezf…")]),t._v(" "),e("p",[t._v("这周我会抽空再实现一个 vue3 版本的~")]),t._v(" "),e("p",[t._v("近期文章（感谢掘友的鼓励与支持🌹🌹🌹）")]),t._v(" "),e("p",[t._v("🔥做了一夜动画，就为让大家更好的理解 Vue3 的 Composition Api 836 赞\n🔥2020，疫情重创了我的第三次创业 | 掘金年度征文 122 赞\n🔥我失败的创业历史之” 有温度 “的人文考勤系统 15 赞\n🔥如何用 JS 做一个老虎机抽奖，由服务端控制得奖几率 38 赞\n🔥前端开发中新拟态风格的崛起 56 赞\n欢迎拍砖，一起探讨更优雅的实现")])])}),[],!1,null,null,null);n.default=a.exports}}]);