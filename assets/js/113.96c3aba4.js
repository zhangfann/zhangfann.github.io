(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{494:function(t,e,r){"use strict";r.r(e);var _=r(42),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("信息安全建设之基于开源搭建零信任网关_原理篇")]),t._v(" "),r("p",[t._v("信息安全建设之基于开源搭建零信任网关 - 原理篇 - FreeBuf 网络安全行业门户")]),t._v(" "),r("p",[t._v("零信任并不是一种新的技术突破，个人也比较认同是一种新的安全防御理念，技术上讲，并不难实现，主要是这种安全模型的提出，强化了内网安全防御的壁垒。")]),t._v(" "),r("h2",{attrs:{id:"零信任说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#零信任说明"}},[t._v("#")]),t._v(" 零信任说明")]),t._v(" "),r("p",[t._v("摘抄了一段说明，ZTNA 也称为软件定义边界 (SDP)，它在一个或一组企业应用程序周围创建基于身份和环境的逻辑访问边界。企业应用程序被隐藏，访问这些企业应用程序的实体必须经过信任代理。在允许访问之前，代理网关先验证指定访问者的身份，环境和是否遵守访问策略。这将企业应用程序从公众的视线中移除，并大大减少了攻击面。")]),t._v(" "),r("p",[t._v("实际上，零信任并不是一种新的技术突破，个人也比较认同是一种新的安全防御理念，技术上讲，并不难实现，主要是这种安全模型的提出，强化了内网安全防御的壁垒，换句话说，对于恶意入侵的黑客来说，直接接触到目标变得难了。")]),t._v(" "),r("h2",{attrs:{id:"零信任简单模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#零信任简单模型"}},[t._v("#")]),t._v(" 零信任简单模型")]),t._v(" "),r("p",[t._v("下面是一个简单的零信任模型，主要用于说明，对其具体原理感兴趣的，可以参考其他的资料。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image.3001.net/images/20211029/1635487710_617b8fde26e879e1b22fa.png!small",alt:"img"}})]),t._v(" "),r("p",[t._v("运行过程：")]),t._v(" "),r("p",[t._v("\\1. 用户端连接控制端，将用户信息及用户硬件环境一同传至控制端进行验证 (tcp/udp 协议不限)。")]),t._v(" "),r("p",[t._v("\\2. 控制端连接策略端进行验证，验证通过之后，将其可以访问的服务回送至控制端。")]),t._v(" "),r("p",[t._v("\\3. 控制端将用户端的 IP 加入网关内允许访问的 IP 列表内，仅限其允许访问的服务的网关。")]),t._v(" "),r("p",[t._v("\\4. 用户端带着个人信息访问网关 (网关已经将其 IP 列入允许访问)。")]),t._v(" "),r("p",[t._v("\\5. 网关根据用户的信息，去策略端校验用户的权限，用户有该权限，即可访问应用服务，否则拒绝。")]),t._v(" "),r("p",[t._v("\\6. 用户访问应用服务。")]),t._v(" "),r("p",[t._v("这个模型强化了客户端的认证，对于非合法认证过的用户，网络层就会拦截其访问，也就意味着隐藏了实际提供服务的入口，减少了攻击面，将安全的弱点转移到了人的一侧，当然并不是说人有弱点就一定会被攻击到，肯定有解决的办法。")]),t._v(" "),r("h2",{attrs:{id:"开源零信任的实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开源零信任的实现"}},[t._v("#")]),t._v(" 开源零信任的实现")]),t._v(" "),r("p",[t._v("有了上面的模型和设计，编码实现就是下一步的操作了，下面的内容主要是基于 web 服务而言的（对于 C/S 模型来说，网关端的校验是个问题，如果要实现需要换一个思路）。")]),t._v(" "),r("p",[t._v("\\1. 怎么解决用户端的识别。用户端访问控制端和网关都需要携带其个人信息，可以直接利用浏览器插件的方式，就可以解决这个问题，同时通过浏览器的插件直接访问控制端，就可以解决模型中的第 1 步。")]),t._v(" "),r("p",[t._v("\\2. 用户端如何定位别到具体的个人。管理端将个人的信息封装好 (对称加密），通过邮件方式发送给个人，然后配置浏览器插件中的数据，就可以实现。")]),t._v(" "),r("p",[t._v("\\3. 浏览器插件的细节。插件是通过 websocket 与控制端进行心跳连接。")]),t._v(" "),r("p",[t._v("\\4. 网络层如何实现控制。访问控制端的用户一旦通过验证， 就会连接到网关，将用户的 IP 加入到允许访问之内，如果用户端离线，就会将其 IP 从允许访问内删除 (浏览器插件与控制端通过 websocket 联系)。")]),t._v(" "),r("p",[t._v("\\5. 网关代理。网关层面主要实现了 web 代理，并根据策略端的配置，决定用户端是否可以访问后端的服务。")]),t._v(" "),r("p",[t._v("实现原理图")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image.3001.net/images/20211029/1635489484_617b96ccd34d983077804.png!small",alt:"img"}})]),t._v(" "),r("p",[t._v("在上面的原理图中，主要是细节性的逻辑内容。")]),t._v(" "),r("h2",{attrs:{id:"关于零信任的一些思考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于零信任的一些思考"}},[t._v("#")]),t._v(" 关于零信任的一些思考")]),t._v(" "),r("p",[t._v("\\1. 很多零信任厂商都会把浏览器作为一个组件加入到其产品中，其实这是一个必然的步骤，强化用户端的认证，或者双向认证，同时还需要跟控制端或网关做联动；另外，需要定位到用户端的硬件环境，比如说 pc 还是移动端、是否是新的硬件环境或者 IP，为是否是真实的用户在使用提供信息参考。当然，这也是基于大部分用户的需求还是在 web 端。")]),t._v(" "),r("p",[t._v("\\2. 受攻击面减少了，并不是消除，而是可以攻击的层面就会转移到其他的弱点，比如用户测，那么对于用户测的安全保障同时就会得到加强，比如通过机器学习识别出用户的常用设备、使用爱好等等，一旦异常就会二次验证等等。")]),t._v(" "),r("p",[t._v("\\3. 从黑客的角度来说，“假装” 成一个合法的用户，才能访问实际的服务，这个门栏就会变得比较高了，首先得跨过这个门栏才能进行下一步的操作，或许从无线 wifi 入手会低些。")]),t._v(" "),r("h2",{attrs:{id:"写在最后"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),r("p",[t._v("限于个人的知识水平，对于零信任的理解不一定到很深，比如 RBI、VDI、沙箱等等，都是浅薄的概念，请高手赐教，如果对于这个感兴趣的同学可以加 Q 群：254210748， 当然开源肯定就有源码，很快会在下一篇实现的文章放出， 谢谢。")]),t._v(" "),r("p",[t._v("全文完")]),t._v(" "),r("p",[t._v("本文由 "),r("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[t._v("简悦 SimpRead"),r("OutboundLink")],1),t._v(" 优化，用以提升阅读体验")]),t._v(" "),r("p",[t._v("使用了 全新的简悦词法分析引擎 beta，"),r("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),r("OutboundLink")],1),t._v("详细说明")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.freebuf.com/articles/es/293310.html#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("零信任说明"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.freebuf.com/articles/es/293310.html#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("零信任简单模型"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.freebuf.com/articles/es/293310.html#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("开源零信任的实现"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.freebuf.com/articles/es/293310.html#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于零信任的一些思考"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.freebuf.com/articles/es/293310.html#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("写在最后"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);