(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{372:function(n,t,i){"use strict";i.r(t);var e=i(42),o=Object(e.a)({},(function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("p",[n._v("以下文章来源于卧梅又闻花，作者Mr兔子先生")]),n._v(" "),i("p",[n._v("双十一剁手节过去了，大家应该在很多网页中看到了数字翻牌的效果吧，比如倒计时、数字增长等。相信很多人都已经自己独立实现过了，我也在网上看了一些demo，发现HTML结构大多比较复杂，用了4个并列的标签来放置前后两个“牌”。本文就来讲解下，如何进一步精简HTML，让结构简单，让JS方法封装得易使用。先来看看最终效果：")]),n._v(" "),i("p",[n._v("每个翻牌的HTML结构（精简至2个并列标签）：")]),n._v(" "),i("div",{staticClass:"flip down"},[i("div",{staticClass:"digital front number0"}),n._v(" "),i("div",{staticClass:"digital back number1"})]),n._v("\n本次分享含有很多小技巧，灵活使用能够提升技术水平和工作效率，具体包括以下知识点：\n知识点1：:before:after伪元素的使用\n知识点2：line-height: 0的妙用\n知识点3：transform-origin和perspective\n知识点4：backface-visibility\n知识点5：时间格式化函数的实现\nLet's do it!1 翻牌的构建1.1 基本结构\n首先解释下HTML的结构：\n"),n._v(" "),i("div",{staticClass:"flip down"},[i("div",{staticClass:"digital front number0"}),n._v(" "),i("div",{staticClass:"digital back number1"})]),n._v("\n【说明】\nflip: 纸牌的外框\ndown：表示向下翻牌动效，还有对于的up。后面章节会具体讲解。\nfront: 表示位于前面的纸牌\nback: 表示位于后面的纸牌\nnumber*: 表示纸牌上的数字\nflip的CSS代码如下：\n"),i("p",[n._v('.flip {\ndisplay: inline-block;\nposition: relative;\nwidth: 60px;\nheight: 100px;\nline-height: 100px;\nborder: solid 1px#000;\nborder-radius: 10px;\nbackground: #fff;\nfont-size: 66px;\ncolor: #fff;\nbox-shadow: 006px rgba(0, 0, 0, .5);\ntext-align: center;\nfont-family: "Helvetica Neue"\n}\n这段代码很基础，就不再详细解释了。眼尖的同学可能发现了，为什么要设置background为#fff(白色)呢?最终效果明明是黑的。留个疑问，下一小节就会明白了。\n基本结构的效果是这样的:')]),n._v(" "),i("p",[n._v("1.2 构建纸牌并用伪元素拆分上下两部分\n由于每个纸牌是上下对折、翻转的，所以每个纸牌要拆分成上下两部分。可是HTML中每个纸牌只有一个标签，怎么拆分成两个呢？这里就用到了before和after伪元素。知识点1：伪元素的使用\n先看代码：")]),n._v(" "),i("p",[n._v('.flip .digital:before,\n.flip .digital:after {\ncontent: "";\nposition: absolute;\nleft: 0;\nright: 0;\nbackground: #000;\noverflow: hidden;\n}')]),n._v(" "),i("p",[n._v(".flip .digital:before {\ntop: 0;\nbottom: 50%;\nborder-radius: 10px10px00;\n}")]),n._v(" "),i("p",[n._v('.flip .digital:after {\ntop: 50%;\nbottom: 0;\nborder-radius: 0010px10px;\n}\n:before和:after在digital内部生成了两个伪元素，其中，before用来生成纸牌的“上半张”，after用来生成纸牌的“下半张”。\n因此，before“上半张”为从“顶部（ top:0）”到“距底一半( bottom:50%)”的部分，顶部两侧为圆角。\n同理，after“下半张”为“距顶一半（ top:50%）”到“底部（ bottom:0）”的部分，底部两侧为圆角。\n注意代码中的 content:""不能省略，否则伪元素是不显示的。\n效果如下：')]),n._v(" "),i("p",[n._v("回答上一章节的问题，为什么底层设置background为白色？ 答案很简单，元素内部的纸片边角和外层边角之间会有一点点的缝隙，这个缝隙会露出底部的白色，从视觉效果上看，更加具有立体感。\n然后，为上下部分中间添加一条水平折线。")]),n._v(" "),i("p",[n._v('.flip .digital:before,.flip .digital:after { content: "";\nposition: absolute;\nleft: 0;\nright: 0;\nbackground: #000;\noverflow: hidden;')]),n._v(" "),i("ul",[i("li",[n._v("box-sizing: border-box;\n}...(略).flip .digital:before { top: 0;\nbottom: 50%;\nborder-radius: 10px10px00;")]),n._v(" "),i("li",[n._v("border-bottom: solid 1px#666;\n}\n外层flip添加 box-sizing:border-box保证了下边框不会影响元素的原有高度。\n效果如下：")])]),n._v(" "),i("p",[n._v("到这里，我们可以认为是4个小纸片，分别是：\n1.\n前上：.digital.front:before\n2.\n前下：.digital.front:after\n3.\n后上：.digital.back:before\n4.\n后下：.digital.back:after")]),n._v(" "),i("p",[n._v('由于重叠在一起，只能看到一张纸牌。而看到的这个纸牌是后面（back）的纸牌，为什么呢？因为back的HTML写在了front的后面。不过没关系，后面我们会通过z-index来重新调整层叠顺序，先不着急。1.3 为纸牌添加文字\n还记的刚才的 content:""吗？纸牌的文字显示就用到了这个。\n先通过CSS定义好0~9的数字：')]),n._v(" "),i("p",[n._v('.flip .number0:before,\n.flip .number0:after {\ncontent: "0";\n}')]),n._v(" "),i("p",[n._v('.flip .number1:before,\n.flip .number1:after {\ncontent: "1";\n}')]),n._v(" "),i("p",[n._v('.flip .number2:before,\n.flip .number2:after {\ncontent: "2";\n}\n...(略)\n.flip .number9:before,\n.flip .number9:after {\ncontent: "9";\n}\n现在效果如下：')]),n._v(" "),i("p",[n._v("可以很明显的看到两个问题：\n1.\n本应该在后面的back纸牌跑到了前面(z-index问题)\n2.\n下半张纸牌的文字应该只显示下半部分。")]),n._v(" "),i("p",[n._v("先来解决问题2，这里就涉及到了第二个知识点。知识点2：line-height: 0的妙用\n提到文字的显示，肯定会想到基线（baseline），可能你也曾经看过这个图：")]),n._v(" "),i("p",[n._v("关于基线(baseline)的计算，确实很麻烦，我也在这里绕了很久。其实理解line-height:0可以换个角度，会更容易理解，请看下图：")]),n._v(" "),i("p",[n._v("当line-height为200px，每行文字高度为200px，文字在200px高度的行间区域垂直居中；\n当line-height为100px，每行文字高度为100px，文字在100px高度的行间区域垂直居中；\n当line-height为0时，行间距为0，中线的位置也为0，所以文字只有下半部分留在容器内。\n利用line-height:0的特性，就可以很轻易实现“下半张”纸牌只显示文字的下半部分，并且与“上半张”纸牌很好的衔接在一起。\n在代码中设置line-height为0：")]),n._v(" "),i("p",[n._v(".flip .digital:after { top: 50%;\nbottom: 0;\nborder-radius: 0010px10px;")]),n._v(" "),i("ul",[i("li",[n._v("line-height: 0;\n}\n效果如下：")])]),n._v(" "),i("p",[n._v("1.4 设置纸牌的层叠关系\n首先，先看下“向下翻牌”的视频演示，直观感受下每个纸片的层级关系：")]),n._v(" "),i("p",[n._v("按照实物图就可以确定每张纸片的z-index：")]),n._v(" "),i("p",[n._v("添加以下CSS代码：")]),n._v(" "),i("p",[n._v("/"),i("em",[n._v("向下翻")]),n._v("/\n.flip.down .front:before {\nz-index: 3;\n}")]),n._v(" "),i("p",[n._v(".flip.down .back:after {\nz-index: 2;\n}")]),n._v(" "),i("p",[n._v(".flip.down .front:after,\n.flip.down .back:before {\nz-index: 1;\n}\n现在效果如下：")]),n._v(" "),i("p",[n._v("咦？怎么不对？别着急，这是因为我们只设置了层级，但是没有把后面纸牌的下半部翻转上去。\n添加翻转代码：")]),n._v(" "),i("p",[n._v(".flip.down .back:after { z-index: 2;")]),n._v(" "),i("ul",[i("li",[n._v("transform-origin: 50% 0%;")]),n._v(" "),i("li",[n._v("transform: perspective(160px) rotateX(180deg);\n}\n这里涉及到了知识点3。知识点3：transform-origin和perspective\ntransform-origin是元素旋转的基本点。\ntransform-origin: 50% 0%;表示将旋转基本点设置在横轴的中点，纵轴的顶点位置，如下图所示：")])]),n._v(" "),i("p",[n._v("perspective(160px)可以理解为立体透视图的景深。在本次分享的效果中，我们的视角是正对牌面，并且纸牌位于视角中间。所以 transform-origin的第一个值（X轴位置）为50%。\nrotateX(180deg)表示以X轴进行翻转，对应这里就是上下翻转。这里已经通过transform-origin的第二个参数（Y轴位置：0%）将X轴放在了元素顶部。\n基于以上设置，已经可以正常显示了，如下图：")]),n._v(" "),i("p",[n._v("同理，“向上翻”也需要进行设置下。大家可以自己折两个纸片，参照上面的方法，应该很容易实现。这里不再重复讲解，直接放上代码，大家可以对比下哪里不同：")]),n._v(" "),i("p",[n._v("/"),i("em",[n._v("向上翻")]),n._v("/\n.flip.up .front:after {\nz-index: 3;\n}")]),n._v(" "),i("p",[n._v(".flip.up .back:before {\nz-index: 2;\ntransform-origin: 50% 100%;\ntransform: perspective(160px) rotateX(-180deg);\n}")]),n._v(" "),i("p",[n._v(".flip.up .front:before,\n.flip.up .back:after {\nz-index: 1;\n}2 翻牌动画的实现\n现在纸片都已摆好了，剩下的就是实现CSS3动画，以及JS交互控制。2.1 CSS3翻牌动画\n我们还是以“向下翻”为例，再来看下之前的实物翻牌视频：")]),n._v(" "),i("p",[n._v("可以看到，“向下翻”主要涉及两个元素的动画：\n1.\n前面纸牌的上半部向下翻转180度。\n2.\n后面纸牌的下半部（目前已翻转上去）向下翻转180度恢复原状态。")]),n._v(" "),i("p",[n._v("直接上代码：")]),n._v(" "),i("p",[n._v(".flip.down.go .front:before {\ntransform-origin: 50% 100%;\nanimation: frontFlipDown 0.6s ease-in-out both;\nbox-shadow: 0-2px6px rgba(255, 255, 255, 0.3);\n}")]),n._v(" "),i("p",[n._v(".flip.down.go .back:after {\nanimation: backFlipDown 0.6s ease-in-out both;\n}")]),n._v(" "),i("p",[n._v("@keyframes frontFlipDown {\n0% { transform: perspective(160px) rotateX(0deg);\n} 100% { transform: perspective(160px) rotateX(-180deg);\n}}")]),n._v(" "),i("p",[n._v("@keyframes backFlipDown {\n0% { transform: perspective(160px) rotateX(180deg);\n} 100% { transform: perspective(160px) rotateX(0deg);\n}}\n以上代码涉及的知识点和原理没有新的东西，都已经讲解过了，就不详述了。box-shadow是为了给纸片的上边缘加一点白光，视觉效果更好一点。否则在翻转的时候，跟后面元素都是黑色，融在一起了。看看现在的效果：")]),n._v(" "),i("p",[n._v("显示不正常！为什么？因为前排上半部纸片的z-index最高，所以它在翻转到下半部的时候仍然遮挡住了其他纸片。怎么优雅的解决？超级简单，来看看第四个知识点：知识点4：backface-visibility\nbackface-visibility表示元素的背面是否可见，默认为visible（可见）。\n这里的需求是，当前面上半部纸片翻转到一半的时候（90度）进入不可见状态。而纸牌翻转90度以后，正好是显露元素背面的开始，所以将backface-visibility设置为hidden即可完美解决！\n修改代码如下：")]),n._v(" "),i("p",[n._v(".flip.down.go .front:before { transform-origin: 50% 100%;\nanimation: frontFlipDown 0.6s ease-in-out both;\nbox-shadow: 0-2px6px rgba(255, 255, 255, 0.3);")]),n._v(" "),i("ul",[i("li",[n._v("backface-visibility: hidden;\n}\n现在效果很完美！")])]),n._v(" "),i("p",[n._v("大家可以试着自己实现向上翻转效果，代码直接放出：")]),n._v(" "),i("p",[n._v(".flip.up.go .front:after {\ntransform-origin: 50% 0;\nanimation: frontFlipUp 0.6s ease-in-out both;\nbox-shadow: 02px6px rgba(255, 255, 255, 0.3);\nbackface-visibility: hidden;\n}")]),n._v(" "),i("p",[n._v(".flip.up.go .back:before {\nanimation: backFlipUp 0.6s ease-in-out both;\n}\n@keyframes frontFlipUp {\n0% { transform: perspective(160px) rotateX(0deg); }100% {\ntransform: perspective(160px) rotateX(180deg);\n}}")]),n._v(" "),i("p",[n._v("@keyframes backFlipUp {\n0% { transform: perspective(160px) rotateX(-180deg);\n}100% {\ntransform: perspective(160px) rotateX(0deg);\n}}2.2 JS实现翻牌交互\n现在我们来实现一个简单的交互。需求是：\n1.\n点击“+”，向下翻牌，数字+1\n2.\n点击“-”，向上翻牌，数字-1")]),n._v(" "),i("p",[n._v("首先，修改下HTML：")]),n._v(" "),i("ul",[i("li",[i("div",{staticClass:"single-demo"})])]),n._v(" "),i("p",[n._v("M ")]),i("div",{staticClass:"flip down",attrs:{id:"flip"}},[i("div",{staticClass:"digital front number0"}),n._v(" "),i("div",{staticClass:"digital back number1"})]),i("p"),n._v(" "),i("ul",[i("li"),n._v(" "),i("li",[i("div",{staticClass:"btn-con"})]),n._v(" "),i("li",[i("button",{attrs:{id:"btn1"}},[n._v("向下翻+1")])]),n._v(" "),i("li",[i("button",{attrs:{id:"btn2"}},[n._v("向上翻-1")])]),n._v(" "),i("li")]),n._v(" "),i("p",[n._v("配套的CSS如下，仅为了demo好看，无实际作用:")]),n._v(" "),i("p",[n._v(".single-demo {\nmargin: 50pxauto;\npadding: 30px;\nwidth: 600px;\ntext-align: center;\nborder: solid 1px#999;\n}\nJavascript代码如下：")]),n._v(" "),i("p",[n._v("var flip = document.getElementById('flip')\nvar backNode = document.querySelector('.back')\nvar frontNode = document.querySelector('.front')\nvar btn = document.getElementById('btn')\nbtn1.addEventListener('click', function() {\nflipDown();\n})\nbtn2.addEventListener('click', function() {\nflipUp();\n})\n// 当前数字\nvar count = 0\n// 是否正在翻转（防止翻转未结束就进行下一次翻转）\nvar isFlipping = false")]),n._v(" "),i("p",[n._v("// 向下翻转+1\nfunction flipDown() {\n// 如果处于翻转中，则不执行if(isFlipping) {\nreturn false}// 设置前牌的文字 frontNode.setAttribute('class', 'digital front number'+ count)\n// 计算后牌文字（越界判断） var nextCount = count >= 9? 0: (count + 1) // 设置后牌的文字 backNode.setAttribute('class', 'digital back number'+ nextCount)\n// 添加go，执行翻转动画 flip.setAttribute('class', 'flip down go')\n// 将翻转态设置为true isFlipping = true\n// 翻转结束后，恢复状态 setTimeout(function() {\n// 去掉go flip.setAttribute('class', 'flip down')\n// 将翻转态设置为false isFlipping = false\n// 设置前牌文字为+1后的数字 frontNode.setAttribute('class', 'digital front number'+ nextCount)\n// 更新当前文字 count = nextCount\n}, 1000)}\n// 向上翻转-1（同理，注释略）\nfunction flipUp() {\nif(isFlipping) {\nreturn false} frontNode.setAttribute('class', 'digital front number'+ count)\nvar nextCount = count <= 0? 9: (count - 1) backNode.setAttribute('class', 'digital back number'+ nextCount)\nflip.setAttribute('class', 'flip up go')\nisFlipping = true\nsetTimeout(function() {\nflip.setAttribute('class', 'flip up')\nisFlipping = false\nfrontNode.setAttribute('class', 'digital front number'+ nextCount)\ncount = nextCount\n}, 1000)}\n先看下交互效果：")]),n._v(" "),i("p",[n._v("这段Javascript代码很冗余，重复代码很多。在实际产品中，都是多个数字牌，这种方式显然无法应对。下一章节，我们来说下如何优雅的封装，以不变应万变。3 翻牌时钟的实现\n先看下最终效果：")]),n._v(" "),i("p",[n._v("3.1 HTML构建\nHTML代码如下：")]),n._v(" "),i("div",{staticClass:"clock",attrs:{id:"clock"}},[i("div",{staticClass:"flip down"},[i("div",{staticClass:"digital front number0"}),n._v(" "),i("div",{staticClass:"digital back number1"})]),i("div",{staticClass:"flip down"},[i("div",{staticClass:"digital front number0"}),n._v(" "),i("div",{staticClass:"digital back number1"})]),i("em",[n._v(":")]),i("div",{staticClass:"flip down"},[i("div",{staticClass:"digital front number0"}),n._v(" "),i("div",{staticClass:"digital back number1"})]),i("div",{staticClass:"flip down"},[i("div",{staticClass:"digital front number0"}),n._v(" "),i("div",{staticClass:"digital back number1"})]),i("em",[n._v(":")]),i("div",{staticClass:"flip down"},[i("div",{staticClass:"digital front number0"}),n._v(" "),i("div",{staticClass:"digital back number1"})]),i("div",{staticClass:"flip down"},[i("div",{staticClass:"digital front number0"}),n._v(" "),i("div",{staticClass:"digital back number1"})])]),n._v("\nCSS代码如下(之前章节的CSS代码请保留):\n"),i("p",[n._v(".clock {\ntext-align: center;\n}")]),n._v(" "),i("p",[n._v(".clock em {\ndisplay: inline-block;\nline-height: 102px;\nfont-size: 66px;\nfont-style: normal;\nvertical-align: top;\n}\n效果如下，剩下的就是JS部分了。")]),n._v(" "),i("p",[n._v("3.2 构建Flipper类\n将每个翻牌封装成类，这样在应对多个翻牌的时候，可以方便的通过new Flipper()去独立控制每个翻牌对象。\n类的实现代码如下：")]),n._v(" "),i("p",[n._v("functionFlipper(config) {\n// 默认配置this.config = {\n// 时钟模块的节点 node: null,\n// 初始前牌文字 frontText: 'number0',\n// 初始后牌文字 backText: 'number1',\n// 翻转动画时间（毫秒，与翻转动画CSS 设置的animation-duration时间要一致） duration: 500\n} // 节点的原本class，与html对应，方便后面添加/删除新的classthis.nodeClass = {\nflip: 'flip',\nfront: 'digital front',\nback: 'digital back'\n} // 覆盖默认配置 Object.assign(this.config, config) // 定位前后两个牌的DOM节点 this.frontNode = this.config.node.querySelector('.front') this.backNode = this.config.node.querySelector('.back') // 是否处于翻牌动画过程中（防止动画未完成就进入下一次翻牌） this.isFlipping = false // 初始化 this._init()}\nFlipper.prototype = {\nconstructor: Flipper,\n// 初始化 _init: function() {\n// 设置初始牌面字符 this._setFront(this.config.frontText) this._setBack(this.config.backText) }, // 设置前牌文字 _setFront: function(className) {\nthis.frontNode.setAttribute('class', this.nodeClass.front + ' '+ className)},// 设置后牌文字 _setBack: function(className) {\nthis.backNode.setAttribute('class', this.nodeClass.back + ' '+ className)}, _flip: function(type, front, back) {\n// 如果处于翻转中，则不执行 if(this.isFlipping) { return false}// 设置翻转状态为true this.isFlipping = true // 设置前牌文字 this._setFront(front) // 设置后牌文字 this._setBack(back) // 根据传递过来的type设置翻转方向 let flipClass = this.nodeClass.flip; if(type === 'down') { flipClass += ' down'\n} else{ flipClass += ' up'\n} // 添加翻转方向和执行动画的class，执行翻转动画 this.config.node.setAttribute('class', flipClass + ' go') // 根据设置的动画时间，在动画结束后，还原class并更新前牌文字 setTimeout(() => {\n// 还原class this.config.node.setAttribute('class', flipClass) // 设置翻转状态为false this.isFlipping = false // 将前牌文字设置为当前新的数字，后牌因为被前牌挡住了，就不用设置了。 this._setFront(back) }, this.config.duration)},// 下翻牌 flipDown: function(front, back) {\nthis._flip('down', front, back)},// 上翻牌 flipUp: function(front, back) {\nthis._flip('up', front, back) }}\n可以注意到，Flipper的传参只接受一个对象形式的参数config，使用对象的方式向函数传参有很多优点：\n1.\n参数语义化，方便理解\n2.\n不用在意参数顺序\n3.\n传参的增删和顺序调整不会影响业务代码的使用")]),n._v(" "),i("p",[n._v("使用Object.assign方法，可将传递进来的config参数覆盖默认参数。传递的config中没有的属性，则使用默认配置。当然，这种方式只适用于浅拷贝。\n关于prototype，以及为什么要设置constructor，请阅读我的微信公众号（账号：卧梅又闻花）另一篇文章《一张刮刮卡竟包含这么多前端知识点》第4.1章节，已经讲解得很详细了。\n代码逻辑请阅读注释。3.3 实现时钟业务逻辑\n接下来的工作就是将js与dom进行绑定。\n请看代码：\n这段代码一定要放在Flipper类代码的下面，Flipper.prototype一定要在业务逻辑代码之前执行，否则会报错找不到Flipper内部方法。")]),n._v(" "),i("p",[n._v("// 定位时钟模块\nlet clock = document.getElementById('clock')\n// 定位6个翻板\nlet flips = clock.querySelectorAll('.flip')\n// 获取当前时间\nlet now = newDate()\n// 格式化当前时间，例如现在是20:30:10，则输出\"203010\"字符串\nlet nowTimeStr = formatDate(now, 'hhiiss')\n// 格式化下一秒的时间\nlet nextTimeStr = formatDate(newDate(now.getTime() + 1000), 'hhiiss')\n// 定义牌板数组，用来存储6个Flipper翻板对象\nlet flipObjs = []\nfor(let i = 0; i < flips.length; i++) {\n// 创建6个Flipper实例，初始化并存入flipObjs flipObjs.push(newFlipper({\n// 每个Flipper实例按数组顺序与翻板DOM的顺序一一对应 node: flips[i],\n// 按数组顺序取时间字符串对应位置的数字 frontText: 'number'+ nowTimeStr[i],\nbackText: 'number'+ nextTimeStr[i]\n}))}\n代码逻辑不难，请阅读注释。比较值得分享的是其中的时间格式化函数formatDate。知识点5：时间格式化函数的实现\n为了方便业务使用，实现一个时间格式化方法，这个方法在很多其他业务中都会使用到，具有很普遍的实用价值。\n需求是通过输入日期时间格式要求，输出对应的字符串。\n例如：\nyyyy-mm-dd hh:ii:ss 输出：2019-06-02 08:30:37\nyy-m-d h:i:s 输出：19-6-2 8:30:37\n先看代码：")]),n._v(" "),i("p",[n._v("// 正则格式化日期\nfunction formatDate(date, dateFormat) {\n/* 单独格式化年份，根据y的字符数量输出年份 * 例如：yyyy => 2019")]),n._v(" "),i("ul",[i("li",[n._v("yy => 19")]),n._v(" "),i("li",[n._v("y => 9\n"),i("em",[n._v("/\nif(/(y+)/.test(dateFormat)) { dateFormat = dateFormat.replace(RegExp.$1, (date.getFullYear() + '').substr(4- RegExp.$1.length));\n} // 格式化月、日、时、分、秒 let o = { 'm+': date.getMonth() + 1, 'd+': date.getDate(), 'h+': date.getHours(), 'i+': date.getMinutes(), 's+': date.getSeconds() }; for(let k in o) { if(newRegExp("),i("code",[n._v("(${k})")]),n._v(").test(dateFormat)) { // 取出对应的值 let str = o[k] + ''; /")]),n._v(" 根据设置的格式，输出对应的字符 * 例如: 早上8时，hh => 08，h => 8")]),n._v(" "),i("li",[n._v("但是，当数字>=10时，无论格式为一位还是多位，不做截取，这是与年份格式化不一致的地方")]),n._v(" "),i("li",[n._v("例如: 下午15时，hh => 15, h => 15\n*/\ndateFormat = dateFormat.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));\n} } return dateFormat;};")])]),n._v(" "),i("p",[n._v('// 日期时间补零\nfunction padLeftZero(str) {\nreturn(\'00\'+ str).substr(str.length);}\n代码逻辑请阅读注释，这里再补充下“日期时间补零padLeftZero”函数的说明。由于月、日、时、分、秒最多为2位数，所以这里只考虑最多补一个0的情况。\n原理是：不管数字是几位，先在前面补两个0，再根据原数字的位数进行截取，最终输出固定为两位的补零数字\n例如：数字"16"是两位数，先补两个0变成"0016"，再从该字符串的索引[2]开始截取（2=原数字的位数），由于字符串索引从[0]开始，所以[2]对应字符串的第3位，输出结果仍为"16。\n同理，数字"8"是1位数，先补两个0变成"008",再从该字符串的索引[1]开始截取（1=原数字的位数），即从第2位开始截取，输出"08"。\n这样就实现了补零的功能。\n现在看下效果，已经可以正确显示当前时间了。')]),n._v(" "),i("p",[n._v("3.4 运行时钟\n万事俱备，只差加个定时器让时钟翻动起来。")]),n._v(" "),i("p",[n._v("setInterval(function() {\n// 获取当前时间 let now = newDate() // 格式化当前时间 let nowTimeStr = formatDate(newDate(now.getTime() - 1000), 'hhiiss') // 格式化下一秒时间 let nextTimeStr = formatDate(now, 'hhiiss') // 将当前时间和下一秒时间逐位对比 for(let i = 0; i < flipObjs.length; i++) { // 如果前后数字没有变化，则直接跳过，不翻牌 if(nowTimeStr[i] === nextTimeStr[i]) { continue } // 传递前后牌的数字，进行向下翻牌动画 flipObjs[i].flipDown('number'+ nowTimeStr[i], 'number'+ nextTimeStr[i])\n}}, 1000)\n这段代码逻辑很简单了，主要就是进行前后时间字符串的对比，然后设置纸牌并翻转。最终效果：")]),n._v(" "),i("p",[n._v("4 Vue & React封装\n由于篇幅有限，这里不再详述，原理都是一样的，只是利用Vue和React的API和语法进行封装。\n原生JavaScript、Vue、React三个版本的演示源码请到我的github下载:\nhttps://github.com/Yuezi32/flipClock\n本次分享讲解了如何优雅地实现结构简单的翻牌时钟，并对JS进行了科学高效的封装。其中也涉及到了CSS3的一些知识点和技巧。希望能对大家的工作有所帮助。\n完")])])}),[],!1,null,null,null);t.default=o.exports}}]);