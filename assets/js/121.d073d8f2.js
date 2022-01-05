(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{502:function(t,r,_){"use strict";_.r(r);var e=_(42),a=Object(e.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("电力系统二次安全防护")]),t._v(" "),_("p",[t._v("北京四方工程服务中心, 陈经理：13910842236, 专业从事四方继保, 四方华能, 备品备件, 工程服务, 后台改造, 集成变电站销售和技术服务：装配式变电站, 集成变电站，二次设备总包，二次设备预制舱，二次防护......")]),t._v(" "),_("p",[_("strong",[t._v("电力二次系统安全防护")])]),t._v(" "),_("p",[t._v("电力二次系统安全防护的是确保电力信息化系统、电力实时闭环监控系统及调度数据网络的安全，目标是抵御黑客、病毒、恶意代码等通过各种形式对系统发起的恶意破坏和攻击，从而防止一次系统、二次系统事故或大面积停电等事故的出现。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://25814084.s21i.faiusr.com/4/1/ABUIABAEGAAg8b_C8wUomPzdnAUw9AM42gI.png",alt:"img"}})]),t._v(" "),_("p",[_("strong",[t._v("引言")])]),t._v(" "),_("p",[t._v("电力二次系统的安全防护是依据电监会 5 号令以及电监会［2006］34 号文的规定并根据电力系统二次系统系统的具体情况制定的，目的是设计规范电力系统计算机监控系统及调度数据网络安全防护的规划、实施和监管，以防范对电力系统计算机监控系统及调度数据网络的攻击侵害及由此引起的电力系统事故，保障电力系统的安全、稳定、经济运行。")]),t._v(" "),_("p",[t._v("电力二次系统是由地理上广泛分布于各级发电机、变电站的业务系统通过紧密或松散的联系而构成的复合系统，它的支持环境既包括各调度网络和厂站的异构计算机系统、局域网络，又包括连通各局域网的电力系统行业外联网。因此，电力信息系统安全不同于单纯的计算机系统或通信系统安全，为了确保电力系统业务的安全，必须同时考虑广泛分布而又相互联系的业务系统及其与计算机、通信等基础支持系统间的交互。")]),t._v(" "),_("h2",{attrs:{id:"安全防护的基本原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全防护的基本原则"}},[t._v("#")]),t._v(" 安全防护的基本原则")]),t._v(" "),_("p",[t._v("1）安全分区。分区防护、突出重点。根据系统中的业务的重要性和对一次系统的影响程度进行分区，重点保护生产控制以及直接生产电力生产的系统。")]),t._v(" "),_("p",[t._v("2）网络专用。电力调度数据网 SPDnet 与电力数据通信网 S"),_("a",{attrs:{href:"http://www.elecfans.com/tags/pi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PI"),_("OutboundLink")],1),t._v("net 实现安全隔离，并通过采用 MPLS-VPN 或 IPSEC－VPN 在 SPDnet 和 SPInet 分别形成多个相互逻辑隔离的 VPN 实现多层次的保护。")]),t._v(" "),_("p",[t._v("3）横向隔离。在不同安全区之间采用逻辑隔离装置或物理隔离装置使核心系统得到有效保护。")]),t._v(" "),_("p",[t._v("4）纵向认证、防护。安全区 Ⅰ、Ⅱ 的纵向边界部署 IP 认证加密装置；安全区 Ⅲ、Ⅳ 的纵向边界必须部署硬件防火墙，目前在认证加密装置尚未完善情况下，使用国产硬件防火墙进行防护。")]),t._v(" "),_("p",[t._v("电力二次系统的参考逻辑结构图如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://25814084.s21i.faiusr.com/4/1/ABUIABAEGAAgqcCC8wUogNiW1QEwtwU4nwM.png",alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"安全区的划分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全区的划分"}},[t._v("#")]),t._v(" 安全区的划分")]),t._v(" "),_("p",[t._v("根据电力系统电力二次系统的特点、目前状况和安全要求，整个电力二次系统分为四个安全工作区：第一区为实时控制区，第二区为非控制业务区，第三区为生产管理区，第四区为管理信息区。")]),t._v(" "),_("h2",{attrs:{id:"_1、安全区-i-是实时控制区-安全保护的核心。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、安全区-i-是实时控制区-安全保护的核心。"}},[t._v("#")]),t._v(" 1、安全区 Ⅰ 是实时控制区，安全保护的核心。")]),t._v(" "),_("p",[t._v("凡是具有实时监控功能的系统或其中的监控功能部分均应属于安全区 Ⅰ。如各级调度的 SCADA（AGC/AVC）系统、EMS 系统、W"),_("a",{attrs:{href:"http://www.elecfans.com/tags/ams/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AMS"),_("OutboundLink")],1),t._v(" 系统、配网自动化系统（含实时控制功能）以及电力系统实时监控系统等，其面向的使用者为调度员和运行操作人员，数据实时性为秒级，外部边界的通信均经由 SPDnet 的实时 VPN。")]),t._v(" "),_("h2",{attrs:{id:"_2、安全区-ii-是非控制业务区"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、安全区-ii-是非控制业务区"}},[t._v("#")]),t._v(" 2、安全区 Ⅱ 是非控制业务区")]),t._v(" "),_("p",[t._v("不直接进行控制但和电力生产控制有很大关系，短时间中断就会影响电力生产的系统均属于安全区 Ⅱ。属于安全区 Ⅱ 的典型系统包括 PAS、水调自动化系统、电能量计费系统、发电侧电力市场交易系统、电力模拟市场、功角实时监测系统等。其面向的使用者为运行方式、运行计划工作人员及发电侧电力市场交易员等。数据的实时性是分级、小时级、日、月甚至年。该区的外部通信边界为 SPDnet 的非实时 VPN。")]),t._v(" "),_("h2",{attrs:{id:"_3、安全区-iii-是生产管理区"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、安全区-iii-是生产管理区"}},[t._v("#")]),t._v(" 3、安全区 Ⅲ 是生产管理区")]),t._v(" "),_("p",[t._v("该区的系统为进行生产管理的系统，典型的系统为 DMIS 系统、DTS 系统、雷电监测系统、气象信息以及电力系统生产管理信息系统等。该区中公共数据库内的数据可提供运行管理人员进行 web 浏览。该区的外部通信边界为电力数据通信网 SPInet。")]),t._v(" "),_("h2",{attrs:{id:"_4、安全区-iv-是办公管理系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、安全区-iv-是办公管理系统"}},[t._v("#")]),t._v(" 4、安全区 IV 是办公管理系统")]),t._v(" "),_("p",[t._v("包括办公自动化系统或办公管理信息系统。该区的外部通信边界为 SPInet 或因特网。")]),t._v(" "),_("h2",{attrs:{id:"专用网络划分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#专用网络划分"}},[t._v("#")]),t._v(" 专用网络划分")]),t._v(" "),_("h2",{attrs:{id:"_1-调度数据网。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-调度数据网。"}},[t._v("#")]),t._v(" 1 调度数据网。")]),t._v(" "),_("p",[t._v("调度数据网必须建立在 IP+SDH 的基础上，严格执行 MPLSVPN 的划分。通过 MPLSVPN 划分将调度数据网分成 VPN1 和 VPN2。因此在纵向上安全区 I 的数据传输和交换通过 VPN1 来完成，安全区 II 的数据传输和交换通过 VPN2 来完成。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://25814084.s21i.faiusr.com/4/1/ABUIABAEGAAgvcCC8wUo78SO1wIw9AM42gI.png",alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"_2-安全区-iii-网络-调度生产管理信息-oms-网络"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-安全区-iii-网络-调度生产管理信息-oms-网络"}},[t._v("#")]),t._v(" 2 安全区 III 网络（调度生产管理信息 OMS 网络）")]),t._v(" "),_("p",[t._v("安全区 III 网络（调度生产管理信息 OMS 网络）主要是在纵向上各级调度部门传输调度生产管理信息，属于管理信息大区，它与安全区 IV 网络之间主要通过防火墙隔离。")]),t._v(" "),_("h2",{attrs:{id:"_3、安全区之间的横向隔离及纵向防护"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、安全区之间的横向隔离及纵向防护"}},[t._v("#")]),t._v(" 3、安全区之间的横向隔离及纵向防护")]),t._v(" "),_("p",[t._v("在各安全区之间均需选择适当安全强度的隔离装置。具体隔离装置的选择不仅需要考虑网络安全的要求，还需要考虑带宽及实时性的要求。安全区之间隔离装置必须是国产并经过国家或电力系统有关部门认证。")]),t._v(" "),_("p",[t._v("安全区 Ⅰ 与安全区 Ⅱ 之间的隔离要求：")]),t._v(" "),_("p",[t._v("采用硬件防火墙可使安全区之间逻辑隔离。禁止跨越安全区 Ⅰ 与安全区 Ⅱ 的 E-MAIL、WEB、telnet、rlogin。")]),t._v(" "),_("p",[t._v("安全区 Ⅰ/Ⅱ 与安全区 Ⅲ/Ⅳ 之间的隔离要求：")]),t._v(" "),_("p",[t._v("采用物理隔离装置可使安全区之间物理隔离。禁止跨越安全区 Ⅰ/Ⅱ 与安全区 Ⅲ/Ⅳ 的非数据应用穿透。")]),t._v(" "),_("p",[t._v("物理隔离装置的安全防护强度适应由安全区 Ⅰ/Ⅱ 向安全区 Ⅲ/Ⅳ 的单向数据传输。由安全区 Ⅲ/Ⅳ 向安全区 Ⅰ/Ⅱ 的单向数据传输必须经安全数据过滤网关串接物理隔离装置。")]),t._v(" "),_("p",[t._v("同一安全区间纵向防护与隔离：")]),t._v(" "),_("p",[t._v("同一安全区间纵向联络使用 VPN 网络进行连接")]),t._v(" "),_("p",[t._v("安全区 Ⅰ/Ⅱ 分别使用 SPDnet 的实时 VPN1 与非实时 VPN2")]),t._v(" "),_("p",[t._v("安全区 Ⅲ/Ⅳ 分别使用 SPInet 的 VPN")]),t._v(" "),_("h2",{attrs:{id:"二次防护主要设备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二次防护主要设备"}},[t._v("#")]),t._v(" 二次防护主要设备：")]),t._v(" "),_("p",[t._v("**1、**"),_("strong",[t._v("网络安全监测设备")])]),t._v(" "),_("p",[t._v("网络安全监测装置用以采集变电站站控层和发电厂涉网区域的服务器、工 作站、网络设备和安全防护设备的安全事件，转发至调度端网络安全管理平台的数据网关机，并提供来自网络安全管理平台相关服务调用，同时，支持网络安全事件的本地监视管理。")]),t._v(" "),_("p",[t._v("**2、**"),_("strong",[t._v("网络安全隔离装置")])]),t._v(" "),_("p",[t._v("网络安全隔离装置，是一种专门为电力系统 “二次安全防护设计的” 一款单向电力系统隔离装置。主要应用于实时控制区(I 区、或者 DCS 网）、非控制生产区（II 区）与生产管理区（III、IV 区、或 MIS 网）完全的网络物理隔离，并保证 I、II 区可向 III、IV 有效实时地传输数据，但反过来，任何网络入侵、病毒的攻击均被有效地阻隔，这样就可在最大的限度上防止黑客、病毒的侵害。")]),t._v(" "),_("p",[t._v("**3、**"),_("strong",[t._v("纵向加密装置")])]),t._v(" "),_("p",[t._v("电力专用纵向加密认证装置位于电力控制系统的内部局域网与电力调度数据网络的路由器之间，用于安全区 I/II 的广域网边界保护，可为本地安全区 I/II 提供一个网络屏障同时为上下级控制系统之间的广域网通信提供认证与加密服务，实现数据传输的机密性、完整性保护。按照 “分级管理” 要求，纵向加密认证装置部署在各级调度中心及下属的各厂站，根据电力调度通信关系建立加密隧道。")]),t._v(" "),_("p",[t._v("**4、**"),_("strong",[t._v("防火墙")])]),t._v(" "),_("p",[t._v("防火墙产品部署在各安全区之间，所有的访问都将通过防火墙进行，不允许任何饶过防火墙的连接。根据业务流量的 IP 地址、协议、应用端口号、以及方向的报文过滤等安全策略实现安全区之间的逻辑隔离、报文过滤、访问控制、IP 认证加密等功能。从而达到了对电力二次系统进行安全防护的目的。")]),t._v(" "),_("p",[t._v("**5、**"),_("strong",[t._v("审计系统")])]),t._v(" "),_("p",[t._v("网络审计系统采用先进的协议识别和智能关联技术，通过对网络数据的采集、分析和识别，实时动态的监测网络行为、通信内容和网络流量，发现并捕获各种敏感信息、违规网络行为，全面记录网络系统中的各种会话和事件，实现对网络信息的智能关联分析和安全评估。")]),t._v(" "),_("p",[t._v("**6、**"),_("strong",[t._v("网络态势感知系统")])]),t._v(" "),_("p",[t._v("态势感知系统基于前沿技术及多年行业技术积累，充分利用大数据技术、可视化建模分析等技术，融合多种弹指监测兄台你，提供了大数据存储计算、数据挖掘分析、信息检索、探索分析、通报处置、威胁情报管理等核心功能，帮助用户实现全面的态势感知。")]),t._v(" "),_("p",[t._v("**7、**"),_("strong",[t._v("防病毒系统")])]),t._v(" "),_("p",[t._v("随着电力一次系统规模的扩大，无人值班变电所的全面铺开，电力生产对自动化系统的依赖性越来越大，自动化规模也越来越大，网络越来越复杂。同时自动化系统必须保证 24h 连续稳定运行，因此必须要有一个确实可行的防病毒解决方案，来确保自动化系统重要业务不受病毒侵害，保证自动化系统的安全、稳定运行。")]),t._v(" "),_("p",[t._v("**8、**"),_("strong",[t._v("防入侵")])]),t._v(" "),_("p",[t._v("入侵检测系统（IDS）采用深度分析技术对网络进行不间断监控，分析来自网络内部和外部的入侵企图，并进行报警、响应和防范，有效延伸了网络安全防御层次。同时，产品提供强大的网络信息审计功能，可对网络的运行、使用情况进行全面的监控、记录、审计和重放，使用户对网络的运行状况一目了然。")]),t._v(" "),_("p",[t._v("全文完")]),t._v(" "),_("p",[t._v("本文由 "),_("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[t._v("简悦 SimpRead"),_("OutboundLink")],1),t._v(" 优化，用以提升阅读体验")]),t._v(" "),_("p",[t._v("使用了 全新的简悦词法分析引擎 beta，"),_("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),_("OutboundLink")],1),t._v("详细说明")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.csc2000.com/pd.jsp?id=270#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("安全防护的基本原则"),_("OutboundLink")],1),_("a",{attrs:{href:"http://www.csc2000.com/pd.jsp?id=270#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("安全区的划分"),_("OutboundLink")],1),_("a",{attrs:{href:"http://www.csc2000.com/pd.jsp?id=270#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("1、安全区 Ⅰ 是实时控制区，安全保护的核心。"),_("OutboundLink")],1),_("a",{attrs:{href:"http://www.csc2000.com/pd.jsp?id=270#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("2、安全区 Ⅱ 是非控制业务区"),_("OutboundLink")],1),_("a",{attrs:{href:"http://www.csc2000.com/pd.jsp?id=270#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("3、安全区 Ⅲ 是生产管理区"),_("OutboundLink")],1),_("a",{attrs:{href:"http://www.csc2000.com/pd.jsp?id=270#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("4、安全区 IV 是办公管理系统"),_("OutboundLink")],1),_("a",{attrs:{href:"http://www.csc2000.com/pd.jsp?id=270#sr-toc-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("专用网络划分"),_("OutboundLink")],1),_("a",{attrs:{href:"http://www.csc2000.com/pd.jsp?id=270#sr-toc-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("1 调度数据网。"),_("OutboundLink")],1),_("a",{attrs:{href:"http://www.csc2000.com/pd.jsp?id=270#sr-toc-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("2 安全区 III 网络（调度生产管理信息 OMS 网络）"),_("OutboundLink")],1),_("a",{attrs:{href:"http://www.csc2000.com/pd.jsp?id=270#sr-toc-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("3、安全区之间的横向隔离及纵向防护"),_("OutboundLink")],1),_("a",{attrs:{href:"http://www.csc2000.com/pd.jsp?id=270#sr-toc-10",target:"_blank",rel:"noopener noreferrer"}},[t._v("二次防护主要设备："),_("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);