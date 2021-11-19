(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{481:function(t,v,_){"use strict";_.r(v);var p=_(42),r=Object(p.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("img",{attrs:{src:"https://img0.tuicool.com/fM73emM.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("分享嘉宾：李明 / 李鑫林 网易疾风")]),t._v(" "),_("p",[t._v("编辑整理 ：毕志颖 中国科学院大学")]),t._v(" "),_("p",[t._v("出品平台：DataFunTalk")]),t._v(" "),_("p",[_("strong",[t._v("导读：")]),t._v(" 随着物联网的发展，网易内部万物互联的需求井喷式爆发。 边缘计算借助本地网关的计算能力，无延时采集处理数据，云边协同，缩短控制链路，告别设备 “断网即失控” 的尴尬。 目前边缘计算已落地网易智慧养殖、智慧园区、智慧仓储等多个场景。 本 文 将系统性介绍网易落地边缘计算的实践方法，总结应用过程中面临的挑战、风险与应对方法。")]),t._v(" "),_("p",[_("strong",[t._v("01")])]),t._v(" "),_("p",[t._v("背景介绍")]),t._v(" "),_("p",[t._v("首先和大家分享下边缘计算的相关背景。")]),t._v(" "),_("p",[t._v("\\1. 边缘计算的定义")]),t._v(" "),_("p",[t._v("边缘计算本质是对云计算中心式计算模型的一种重构，它将计算放在靠近物或数据源头的边缘端，提供本地的存储、计算、网络等核心能力。由于通信链路的缩短，边缘计算能够在数据产生侧快捷高效的响应业务需求，同时，数据的本地处理也能提升隐私数据的保护程度。在计算模型的发展历程中，从大型机到小型机，从云计算大型 IDC 再到边缘计算，可以看到是在中心式和分布式之间不断转换，往复式发展，如今的边缘计算正是浪潮前沿。")]),t._v(" "),_("p",[t._v("今天边缘计算已经有不少的实践场景，比如全球各大主流电信运营商已经为 MEC（多接入边缘计算）提供了各自的解决方案，各公有云厂商也有自己的边缘产品，传统的 OT、ICT 厂商等也在布局边缘相关的硬件设施等。")]),t._v(" "),_("p",[t._v("\\2. 物联网的定义")]),t._v(" "),_("p",[t._v("物联网实际上是边缘计算的最佳实践场景，因为物联网中存在许多边缘设备，如生产设备传感器、机床、水电表、灯具、摄像头、RFID 标签等，这些设备大都处于一个受限的私有网络环境，与公网隔离或只能单向访问公网，同时这些设备需要一个稳定的实时的控制，不能受到网络波动带来的影响。比如许多工业设备需要亚秒级的响应时间进行安全的操作，如果工人离设备太近，设备需要立即停止工作并报警，在这种情况下，如果停止工作的决定由云端反馈回来，那可能会有一个延时的问题，当我们把计算移动到靠近设备的边缘网关上时，就可以达到秒级的响应。在极端的网络断开情况下，还要保证边缘自治，允许设备和工厂能够正常运转而不论这个网络的可用性如何。同时这些设备产生的原始机密数据也存储到本地，仅把处理后的数据上传到云端，这也需要边缘计算来存储近端数据，并将过滤后的数据向云端同步。因此物联网的发展必然离不开边缘计算。")]),t._v(" "),_("p",[t._v("网易疾风物联网就是在这种思路下发展演进的，也一直在探索与边缘计算更好的结合方式 ，下面介绍疾风物联网的实现思路。")]),t._v(" "),_("p",[_("strong",[t._v("02")])]),t._v(" "),_("p",[t._v("系统方案：疾风物联网架构")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img0.tuicool.com/2yUNZj.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("疾风物联网早期专注于物联网云端平台的建设，建立了一套包括设备接入、规则引擎、时序数据库等多种核心服务的系统，随着边缘计算的兴起，我们也开始投入其中。")]),t._v(" "),_("p",[t._v("最开始的边缘端架构实际是与云端架构保持一致，将云端所有服务私有化部署到边缘端，但是我们发现客户并不想为这个庞大的系统买单，为了减少边缘端落地的成本，我们开始精简、优化服务。比如核心的规则引擎，重度依赖于 Flink，然而它的资源消耗较大。经过分析，我们将规则拆分为无状态和有状态的计算任务，仅使用 Flink 来处理有状态计算，而无状态计算任务则引入函数计算来处理，基于资源消耗和实际用法考虑，我们采用 OpenFaas 来实现无状态计算。随着去年 Kuiper 轻量级流式计算引擎的发布，我们也在用它替换掉 Flink。基于函数计算和流式计算，我们实现了一个统一的实时计算引擎。")]),t._v(" "),_("p",[t._v("对于那些报表生成、模型训练等离线任务，我们把它们放到云端来做。边缘端侧重于设备的实时受控与数据隐私方面，云端侧重于海量数据的高维度计算、模型训练时的算力弹性分配等。同时，边缘端与云端也不是割裂的，需要协同工作，我们通过自研的边缘隧道来促成边云协同。这样就形成了从 X86 服务器到工控机，再到边缘网关盒子等不同规格的边缘集群硬件，组合来满足各种各样的业务场景。")]),t._v(" "),_("p",[t._v("因此可以总结一下疾风物联网系统的两个设计思路： "),_("strong",[t._v("一是边云同构")]),t._v(" ，这样无论是计算规则还是应用服务，都能在两端上平滑迁移； "),_("strong",[t._v("另一种就是协同工作，")]),t._v(" 边缘端注重设备的即时受控和数据隐私，云端除了发挥传统的物联网平台功能之外，还需要对边缘端提供支持，提供海量数据存储、高纬度计算以及一些 AI 模型的训练等。")]),t._v(" "),_("p",[t._v("现在具体说明一下疾风物联网的边缘架构。系统主要分为四个模块，Hub 是设备接入模块，对接不同类型设备的协议，并转换成系统内使用的协议，这样将数据流导入 Compute Engine 计算引擎模块，计算引擎采用统一的函数计算和流式计算规则来处理数据，数据最后流向 service 应用服务模块，例如时序存储、可视化、设备控制、边缘直播等服务。Tunnel Agent 负责与云端的 Tunnel Server 通信，负责数据同步和业务同步等。而云端实际也是一套包含了设备接入、计算引擎和应用服务的系统，这里就不标示这些模块，更关键的是它为边缘端额外提供了边缘应用管理、AI 模型训练、数据仓库等服务。")]),t._v(" "),_("p",[t._v("下面介绍 Hub 模块的功能组件。")]),t._v(" "),_("p",[t._v("\\1. 设备接入")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img0.tuicool.com/7VfmqaM.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("Hub 直接与设备打交道，支持多种接口连接方式，如 RS232、RS485 串口，网口，WiFi，蓝牙等，同时支持多种通信协议，如控制设备使用的 Modbus, 产线机床使用的 OPC UA，照明灯具使用的蓝牙 BLE，以及标准智能设备使用的 MQTT 等。")]),t._v(" "),_("p",[t._v("非 MQTT 协议的数据会先通过 convertor 转换器转换成 MQTT 协议。转换工作原理是定义设备提供的服务，将服务对应的原始协议字段映射到 MQTT 协议字段，发送到数据总线，供计算引擎消费后处理。通过总线下发的控制指令，也会由 convertor 转换为原始的协议格式。这些设备服务需要根据实际的业务意义制定的，如一个 Modbus 协议传感器，我们会拿到一个温度离散值和伸缩比，但是业务方实际感兴趣的是离散值和伸缩比倍数相乘后的真实温度值，如果将两个字段分开定义，分开映射到 MQTT 协议字段，可能会对后续业务方造成信息干扰，因此需要在协议转换之前预先计算。这样，不同厂商的不同设备所使用的计算规则，实际就组成一个行业知识库。")]),t._v(" "),_("p",[t._v("对于流媒体设备接入，也有一个协议转换过程。例如从 IP 摄像头上拉取的 RTSP 流，也会先转换成 RTMP 协议流，然后进入流媒体数据总线（media data bus），供后续的计算引擎来消费处理，例如转码、截图、边缘直播分发等。")]),t._v(" "),_("p",[t._v("设备接入模块之后就到了计算引擎模块。")]),t._v(" "),_("p",[t._v("\\2. 计算引擎")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img2.tuicool.com/eqANNzY.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("计算引擎将函数计算和流式计算组合在一起，然后根据任务是否有状态来调用不同的底层模块。常用的计算规则有以下几类，转发规则，反控规则，音视频规则。")]),t._v(" "),_("p",[t._v("转发规则把原始的数据转发到某些应用服务，完成告警、直播流分发等功能。存储规则把设备产生的数据存入本地时序数据库中，供后续处理使用。反控规则指的是设备实时受控，在边缘端上有一个设备控制服务，可以理解为接入 Hub 的一个虚拟设备，通过 MQTT 协议将控制信息发布到总线里，或者从总线里订阅信息来完成设备控制交互。音视频规则主要完成转码、截屏、录制或者分发到边缘本地直播，对于有公网直播需求的，还需要转发到公网 CDN。")]),t._v(" "),_("p",[t._v("计算引擎之后，就是边缘应用服务。")]),t._v(" "),_("p",[t._v("\\3. 边缘服务")]),t._v(" "),_("h4",{attrs:{id:"边缘服务主要包括数据存储服务、数据可视化服务、虚拟设备控制服务以及托管的各种企业应用等。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#边缘服务主要包括数据存储服务、数据可视化服务、虚拟设备控制服务以及托管的各种企业应用等。"}},[t._v("#")]),t._v(" 边缘服务主要包括数据存储服务、数据可视化服务、虚拟设备控制服务以及托管的各种企业应用等。")]),t._v(" "),_("p",[t._v("数据存储服务主要是时序数据的存储，对于有条件的用户，会定期同步到云端的数仓。数据可视化服务主要有大屏展示、监控报警等。边缘直播即本地直播，不需要经过公网 CDN 的企业私有域的直播。边缘上还会托管各种企业自身的应用，如业务管理、人员管理、协同生产等。")]),t._v(" "),_("p",[t._v("\\4. 边云协同")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.tuicool.com/u2aeayI.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("边缘端和云端之间的数据和控制同步是通过 Tunnel Agent 和 Tunnel Server 完成。数据同步就是边缘数据通过 Tunnel Agent 正向传输给 Tunnel Server，之后再解析处理。如果要求实时性，可以在计算引擎中创建转发规则来完成。数据同步到云上，也有多种接入点，例如通过 Kafka 接入点进入到云上的大数据集群，或者同步到公网的 CDN 接入点，进行公网直播。")]),t._v(" "),_("p",[t._v("控制同步，实际上是一个反向的传输，因为边缘和云端的网络通常是单向网络，边缘端在私有的网络环境，云端在公网环境，这时从云端来访问边缘里的设备或者下发配置等，就需要有一个隧道。我们通过 Tunnel Agent 和 Tunnel Server 建立的 TCP 隧道，将业务控制数据按照协议格式下发给 Agent。而 Agent 里注册了本地边缘集群的服务，比如计算引擎里的各种规则，托管的企业应用等，再接收到控制信息后解析分发。")]),t._v(" "),_("p",[t._v("以上就是疾风物联网的整体架构。")]),t._v(" "),_("p",[_("strong",[t._v("03")])]),t._v(" "),_("p",[t._v("场景实践")]),t._v(" "),_("p",[t._v("\\1. 工业场景")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img2.tuicool.com/EjEvQfj.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("工业场景中主要是对工艺的管理、生产的管理、设备的管理以及模具的管理，并对设备的一些生产指标进行实时的监控，保证数据的安全性。比如在生产管理中，最重要的就是要把控工业生产的进度，并对相应的指标进行实时的计算。")]),t._v(" "),_("p",[t._v("我们把工业场景分为了五个模块，其中一个是设备模块，应用场景主要是对设备的状态进行异常监控，发生异常后，会进行实时的监控，通过邮件或通讯工具推送到管理人员的手中，主要是一些设备的执行参数，比如执行频率或配置。")]),t._v(" "),_("p",[t._v("能耗的管理主要是对设备能耗的进行把控，在一个周期内，我们可以对设备的运行情况或者成本的投入进行分析，这样去规划我们设备的运行情况或者实施情况。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img2.tuicool.com/zQZfIvq.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("易工厂边缘的一个解决方案，总体来说是用我们的边缘系统进行部署，完成系统的管控和数据展示。也能通过云边协同进行数据的同步，进而实现一些高纬度的数据分析。")]),t._v(" "),_("p",[t._v("第一步是进行一个网关的接入，它是接入到一个智能网关，智能网关属于边缘集群中的一部分，数据接入过后会通过边缘集群里面的计算引擎分析上报的数据，通过数据分析在边缘网关里面做一些展示和反控。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img0.tuicool.com/7FvqymY.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("这个是网关接入的一个具体案例。")]),t._v(" "),_("p",[t._v("网关里面集成了上述边缘系统里面所有的系统。它只需要通过一根网线，就可以直接接入机器，只需要做一些简单的配置，就可以使用边缘网关里面的计算引擎进行相关的一些计算。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img2.tuicool.com/emAn6bv.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("设备管理系统，目前有 web 端和手机端这两部分，他们的功能是一样的。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.tuicool.com/fqmQJjR.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("边缘服务的可视化分析，直接对数据的展示，还有对生产任务的监控，质量保证和实时查看。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.tuicool.com/ymuYBvf.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("这个边缘协同的业务管理，业务管理主要是对于一个产量能耗状态、预警的管理。")]),t._v(" "),_("p",[t._v("\\2. 园区场景")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img2.tuicool.com/qmuQBn2.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("现在来了解一下智能园区的场景。智能园区，目的是合理地管理我们的空间，减少人员的消耗，就是增强人体的体感舒适度，这是我们整体的一个方案架构。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img2.tuicool.com/aIFn6zv.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("边缘设备（边缘网关）都是围绕着我们的边缘大脑协同计算，边缘网关和边缘大脑之间通过感知同步还有控制执行产生联系。")]),t._v(" "),_("p",[t._v("比如说班车管理。它可以实现工作人员在班车上进行移动打卡，然后还可以实时的定位到我们班车的情况。体感反控中，我们现在的排风、空调，都已经实现了实时反控。它会根据我们周围的一些环境参数，比如说温度、湿度，还有二氧化碳，通过计算引擎进行数据的分析，控制指令重新通过 MQTT 下发到我们的设备进行反控。")]),t._v(" "),_("p",[t._v("还有一个最重要的目的就是实现无人管控，车库的照明，会议室照明，工位的照明，人员的情况，光照的强度等都会拿来分析，实时控制灯的开关与亮暗，从而达到节省能耗的作用。")]),t._v(" "),_("p",[t._v("下面是温湿度的展示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img2.tuicool.com/QnuueuM.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("左边是常用的一些传感设备，比如说温度、湿度传感器，PM2.5 的设备，右边是现在我们做的一个实时的展示，监控了园区的环境情况。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img0.tuicool.com/ZZvUFfA.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("中间这个是一个控制平台，首先它可以实时的监控新风系统、空调系统和排风系统的所有网关的设备状态，还会进行实时的报警，工作人员直接通过这个平台对我们的设备进行了一些开关的控制和调频的配置。右侧的这个 VR 系统是我们自研的一个物联网的数据分析系统，在空间的具体某一个位置它都会实时地去展示空间数据，比如楼层的传感器上报的数据也可以帮助工作人员更好的去查看我们空间中不同位置的环境信息，这样就可以提高我们对空间的把控能力。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.tuicool.com/n6Rf2mI.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("这是我们的疾风网关的一个反控案例。比如左图它可以显示当前区域的二氧化碳或者湿度的一些信息以及工位触发的触发次数，这个代表了我们的空间里面的人员的情况，然后根据这些情况，我们的计算引擎会做出分析和决策，把这个对应的反控信息下发到具体的设备进行反控。右图是新风格系统当前的信息，工作人员可以通过这个数据页面，直观的看到新风机的运行情况，也可以监测规则的反控情况，判断是否达到预期的效果。")]),t._v(" "),_("p",[t._v("这个是灯联网的一个具体的案例实施：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img0.tuicool.com/FZJJZfe.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("右上角左边是灯联网网关，照度反控现在已经把园区的路灯、电梯灯，都进行了实时管控，主要就是根据外面光照的照度情况，控制灯的开关。照度数据就可以直观地展示出环境情况，继电器的开关代表着灯的亮灭情况。通过这个数据，我们也可以直观的看到一天的照度信息，还有灯亮灭的时间点，起到了减少人员对灯的管理，实现我们平台的自动化管理和自动化感知，也就是自动化决策。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.tuicool.com/jEbAz26.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("这个是图像识别的一个案例，还有一个直播系统。将原有的摄像机和录像机接入到了我们的一个边缘集群。")]),t._v(" "),_("p",[t._v("接下来是一个边云协同的一个具体的应用：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img2.tuicool.com/yiyEvaF.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("右图就是边缘网关的数据同步到云平台后，园区能耗的一个展示中心。还有对所有网关数据的一个汇总和数据分析，另一个就是通过园区所有的传感器上报的数据，对园区环境情况进行一个实时把控。比如说对园区里面的新风机，设备的一些异常状态，或温度的一些信息、湿度的一些信息进行实时的查看和监控。")]),t._v(" "),_("p",[t._v("下面展示是一个会议室释放的具体应用，左图把会议室里面的一些人员的情况，通过边缘网关上报到云端，然后云端把云端数据推送到具体的业务，会议室释放系统就可以通过这个实时上报的触发数据而判断我们的会议室里面人员的一个流动情况，判断会议室是否是已经在处于一个无人在用的情况。如果是超过了十分钟，会议室就可以自动的被释放掉，从而增加会议室的利用率。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img0.tuicool.com/iANjqaR.png!web",alt:"img"}})]),t._v(" "),_("p",[t._v("这是猪场的一些产品需求，通过在猪的身上通过贴 rfid 标签的形式记录猪的信息和数目，通过配置相应的传感器对猪舍的温度和湿度进行实时的监控。")]),t._v(" "),_("h4",{attrs:{id:"分享嘉宾"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分享嘉宾"}},[t._v("#")]),t._v(" 分享嘉宾：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.tuicool.com/QBFj6rv.png!web",alt:"img"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img0.tuicool.com/IVnQZni.png!web",alt:"img"}})]),t._v(" "),_("p",[_("strong",[t._v("分享、点赞、在看")]),t._v(" ，给个 "),_("strong",[t._v("3 连击")]),t._v(" 呗！ "),_("strong",[t._v("👇")])]),t._v(" "),_("p",[t._v("全文完")]),t._v(" "),_("p",[t._v("本文由 "),_("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[t._v("简悦 SimpRead"),_("OutboundLink")],1),t._v(" 优化，用以提升阅读体验")]),t._v(" "),_("p",[t._v("使用了 全新的简悦词法分析引擎 beta，"),_("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),_("OutboundLink")],1),t._v("详细说明")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.tuicool.com/articles/BZbU3az#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("边缘服务主要包括数据存储服务、数据可视化服务、虚拟设备控制服务以及托管的各种企业应用等。"),_("OutboundLink")],1),_("a",{attrs:{href:"https://www.tuicool.com/articles/BZbU3az#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("分享嘉宾："),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=r.exports}}]);