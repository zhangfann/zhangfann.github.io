(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{422:function(t,r,e){"use strict";e.r(r);var a=e(42),_=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在阿里做过几年电商业务，越发认识到，做电商的，怎么都绕不过商品。")]),t._v(" "),e("p",[t._v("在阿里做过几年电商业务，越发认识到，做电商的，怎么都绕不过商品。商品作为电商体系中最重要的业务模型，不管是在电商供应链、电商营销，还是电商推荐，以及电商广告中，都有很重要的意义，最近几年特别火的千人千面，商品知识图谱，都离不开商品数据的支持。")]),t._v(" "),e("p",[t._v("这篇文章从概念分析，到领域模型，再到上层应用，对电商的商品和类目体系进行拆解。")]),t._v(" "),e("h1",{attrs:{id:"一、如何定义商品"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、如何定义商品"}},[t._v("#")]),t._v(" 一、如何定义商品")]),t._v(" "),e("p",[t._v("在展开分析之前，先来思考一个问题，追根溯源，什么是商品？")]),t._v(" "),e("h2",{attrs:{id:"_1-1-商品是货品的数字化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-商品是货品的数字化"}},[t._v("#")]),t._v(" 1.1 商品是货品的数字化")]),t._v(" "),e("p",[t._v("理解一个概念，不能离开上下文。")]),t._v(" "),e("p",[t._v("这篇文章描述的是电商领域中的商品，电商对应的是线下零售，在电商业务中，商品就是通过把不同的属性集合在一起，描述客观世界的实物。")]),t._v(" "),e("p",[t._v("为了更加真实和准确的反映实物，我们通过创建不同的模型，组合不同的属性去描述商品。也就是说，商品可以理解为线下实物商品的数字化。")]),t._v(" "),e("p",[t._v("商品连接交易，电商时代的特点是一切皆可交易，所以商品的概念也越来越宽泛。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/b7/b793058c7c37c7ac8005ce6cfa98c3c4.png",alt:"img"}})]),t._v(" "),e("p",[t._v("不过还是推荐大家去读一些零售相关的书籍，了解下线下零售的发展，有助于加深对电商的理解。")]),t._v(" "),e("h2",{attrs:{id:"_1-2-如何理解商品模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-如何理解商品模型"}},[t._v("#")]),t._v(" 1.2 如何理解商品模型")]),t._v(" "),e("p",[t._v("实物商品在线下是如何流通的？")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/70/701fd86d8f411cb89bd71824e1b36284.png",alt:"img"}})]),t._v(" "),e("p",[t._v("那么到了线上，商品如何流转？")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/3b/3b2f1b962d8479b045f9bf517f826cc3.png",alt:"img"}})]),t._v(" "),e("p",[t._v("既然是流转，那就会有一个链路，围绕商品领域，可以把整个电商上下游分为供应链路和销售链路。")]),t._v(" "),e("p",[t._v("大家都学习过计算机网络原理，我们在学习网络协议的时候，信息的传输是需要网络协议来管理，网络协议定义了编码和解码的规范。")]),t._v(" "),e("p",[t._v("类似的，商品信息在线上的流转，需要一个模型去承载，也就是商品模型。")]),t._v(" "),e("h1",{attrs:{id:"二、商品与产品"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、商品与产品"}},[t._v("#")]),t._v(" 二、商品与产品")]),t._v(" "),e("p",[t._v("通用的电商商品模型包括商品、SPU 以及 SKU，以及在这个基础上发展出来 CSPU 的概念，形成了下面的结构。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/1b/1bad9f28feacf03c51cbec6417dfe0f4.png",alt:"img"}})]),t._v(" "),e("p",[t._v("在业务中，通过 SPU 和 CSPU 对商家发布商品进行强管控，同时对商家对 SPU 和 CSPU 属性的填充，又扩充了基础属性和基础属性值库，在运营审核的过程中，这些基础属性添加到标准属性和对应的类目属性下。")]),t._v(" "),e("h2",{attrs:{id:"_2-1-商品"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-商品"}},[t._v("#")]),t._v(" 2.1 商品")]),t._v(" "),e("p",[t._v("商品特指与商家有关的商品，商品通过 SKU 和库存，来对应到线下的实物商品。每个商品会对应一个商家，每个商品下面有多个颜色，款式，可以有多个 SKU。")]),t._v(" "),e("p",[t._v("例如，Iphone 12 是一款产品，但是当平台上很多商家在出售这个产品的时候，我们就把 Iphone 12 称为一个商品。")]),t._v(" "),e("h2",{attrs:{id:"_2-2-sku"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-sku"}},[t._v("#")]),t._v(" 2.2 SKU")]),t._v(" "),e("p",[t._v("SKU 的英文是 stock keeping unit(库存单位)，SKU 即库存进出计量的单位，可以是以件、盒、托盘等为单位。在服装、鞋类商品中使用最多最普遍。")]),t._v(" "),e("h2",{attrs:{id:"_2-3-spu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-spu"}},[t._v("#")]),t._v(" 2.3 SPU")]),t._v(" "),e("p",[t._v("在谈到 SPU 之前，先来思考一下，有了类目和 SKU，为什么要定义一个 SPU？")]),t._v(" "),e("p",[t._v("SPU 概念的出现，是为了满足在叶子类目下对商品进行进一步抽象的需求。")]),t._v(" "),e("p",[t._v("还是用手机举例子，一般来说，手机就是叶子类目，那么我能不能添加几个苹果手机 / 华为手机的类目呢？")]),t._v(" "),e("p",[t._v("当然可以，但是这样类目树就会变得非常庞大，所以，SPU 是在「对商品约束进一步细化的需求」中各方平衡的结果。")]),t._v(" "),e("p",[t._v("SPU(Standard Product Unit) 标准产品单元，是对某一类标准产品的共同特征属性的描述，是商品信息共有属性的一种抽取，在淘系商品中，SPU 是由后台类目 + 一组关键类目属性唯一确定。")]),t._v(" "),e("p",[t._v("SPU 是一个介于叶子类目和商品之间的概念, 是对类目的细化，是商品标准化运营的基础。")]),t._v(" "),e("p",[t._v("SPU 有哪些应用呢？")]),t._v(" "),e("p",[t._v("举几个简单的例子，淘宝购物车的找相似功能，就是通过 SPU 去关联商品。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/b0/b027e67d08787348160d6938ebe1bca6.png",alt:"img"}})]),t._v(" "),e("p",[t._v("还记得多年之前轰轰烈烈的比价网站吗，比价网站的核心业务就是围绕 SPU。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/7f/7f763734dad98116ee1477c56071797d.png",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"_2-4-cspu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-cspu"}},[t._v("#")]),t._v(" 2.4 CSPU")]),t._v(" "),e("p",[t._v("CSPU 是淘宝特色的一个商品模型，这里的 C 是 Child 的意思，也就是子标准化产品单元，即 SPU 的细分，更细粒度的标识产品。")]),t._v(" "),e("p",[t._v("“类目 + 关键属性 + 销售属性” 唯一确定一个的细粒度产品 CSPU。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/9e/9ed3b7aa4484393e30b37c5b130f786e.png",alt:"img"}})]),t._v(" "),e("p",[t._v("比如手机类型下，品牌和型号这两个属性可以确定一个 SPU，但还不能标示一个 CSPU，需要额外的销售属性来确定；")]),t._v(" "),e("p",[t._v("以苹果手机为例，品牌是 IPhone，型号是 12，颜色为深灰色，存储卡 256G，两个关键属性是品牌和型号，两个销售属性为颜色和存储卡。")]),t._v(" "),e("h1",{attrs:{id:"三、类目属性体系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、类目属性体系"}},[t._v("#")]),t._v(" 三、类目属性体系")]),t._v(" "),e("p",[t._v("类目属性体系和商品领域相辅相成，打个不恰当的比方，类目树是坐标轴，类目属性是坐标，商品就是其中的点。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/6f/6f8faf0ba47fd8028f3b23c3136406ea.png",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"_3-1-类目定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-类目定义"}},[t._v("#")]),t._v(" 3.1 类目定义")]),t._v(" "),e("p",[t._v("类目是商品所属的分类，类目决定了商品的归属。")]),t._v(" "),e("p",[t._v("类目是有层次的，分为一级类目、二级类目等，之间有继承关系，通常是通过类目树来展现。")]),t._v(" "),e("p",[t._v("比如厨房电器这个一级类目下，有电磁炉，冰箱等二级类目，电磁炉下面还会有细分的三级类目，类目树的最下面一层类目是叶子类目，一般来说，只有叶子类目才可以下挂商品。")]),t._v(" "),e("h2",{attrs:{id:"_3-2-前后台类目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-前后台类目"}},[t._v("#")]),t._v(" 3.2 前后台类目")]),t._v(" "),e("p",[t._v("通常来说，电商业务里有两大类型的类目体系，一种类型是后台类目，主要用于商家发布商品；另外一种类型是前台类目，主要用于前台商品导购。")]),t._v(" "),e("h3",{attrs:{id:"_1-后台类目-关注标准化管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-后台类目-关注标准化管理"}},[t._v("#")]),t._v(" （1）后台类目，关注标准化管理")]),t._v(" "),e("p",[t._v("后台类目是商品的实际归属类目，卖家在发布商品时，将商品发布到指定的后台类目下。淘系定义的类目最多四层，类目层级太深会影响商家商品发布的体验。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/c5/c53a271b2e6d93b5442494f12d5a957c.png",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"_2-前台类目-关注灵活的导购"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-前台类目-关注灵活的导购"}},[t._v("#")]),t._v(" （2）前台类目，关注灵活的导购")]),t._v(" "),e("p",[t._v("前台类目用于在前台进行导航，展现，搜索定位用，前台类目中保存的，实际上是对后台类目 / 属性的筛选条件，即映射条件。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/21/215ebcca59af193339d7c2a2ad704286.png",alt:"img"}})]),t._v(" "),e("p",[t._v("用户通过前台类目搜索到该类目所映射的后台类目下挂靠的商品，但是商品只归属于一个后台类目。")]),t._v(" "),e("p",[t._v("前台类目主要用来导购，导购路径过长会导致转化率下降，一般来说，前台类目不会超过 3 层。")]),t._v(" "),e("h2",{attrs:{id:"_3-3-类目属性及分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-类目属性及分类"}},[t._v("#")]),t._v(" 3.3 类目属性及分类")]),t._v(" "),e("p",[t._v("类目属性是类目下的商品所具有的共同特征定义，关联叶子类目和属性，比如手机类目具有品牌、型号、颜色、网络等属性。")]),t._v(" "),e("p",[t._v("和类目属性对应的是类目属性值，表示类目下的商品所具有的某一个特征的值。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/9e/9e6eb45a81a92287404657477714b4e6.png",alt:"img"}})]),t._v(" "),e("p",[t._v("属性是用来描述商品的，为了更好的对商品进行描述，对类目属性进行一层抽象，也就是类目属性分类。")]),t._v(" "),e("p",[t._v("一般的，类目属性可以进一步分为关键属性，绑定属性，销售属性，商品属性。")]),t._v(" "),e("h1",{attrs:{id:"四、属性库建设"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、属性库建设"}},[t._v("#")]),t._v(" 四、属性库建设")]),t._v(" "),e("p",[t._v("属性用于描述商品具有的特性，比如颜色、尺码，只靠属性不能描述商品，需要说明属性值才可以。")]),t._v(" "),e("p",[t._v("读到这里你肯定也意识到了，属性库其实类似元数据的概念，也就是「描述商品数据的数据」。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/55/55a0562f95eca029bf2eed6ea7aec060.png",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"_4-1-属性数据从哪里来"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-属性数据从哪里来"}},[t._v("#")]),t._v(" 4.1 属性数据从哪里来")]),t._v(" "),e("p",[t._v("属性库既然是元数据，就要支持大部分的商品描述，目前主流电商平台的属性库数量都是在百亿级别。")]),t._v(" "),e("p",[t._v("现在思考一个问题，那么这么多属性，都是靠运营手工录入的吗？")]),t._v(" "),e("p",[t._v("对于平台型电商来说，属性库的数据来源，一部分来自各个行业的标准化委员会，比如服装有全国服装标准化委员会，洗衣机有家电标准化委员会，然后运营去手工录入。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/0c/0cf0ea0a58d463f0b6d5fb6e8773cfc9.png",alt:"img"}})]),t._v(" "),e("p",[t._v("另外大部分数据，来自商家和平台的共建，也就是通过商家来输入。")]),t._v(" "),e("p",[t._v("这里又有一个问题，如果商家在发布商品时创建一个根本不存在的属性，比如上架一部手机，内存选择 100TB，平台如何解决这种问题呢？")]),t._v(" "),e("p",[t._v("典型的解决方案，就是淘宝的商品审核机制。")]),t._v(" "),e("p",[t._v("以淘系为例，属性库分为标准属性库和基础属性库，其实就是对应两套数据表。")]),t._v(" "),e("p",[t._v("基础属性库和属性值来自商家发布商品时录入，类目运营通过人工审核、算法审核等方式，会把部分属性添加到标准属性库。")]),t._v(" "),e("h2",{attrs:{id:"_4-2-标准属性和基础属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-标准属性和基础属性"}},[t._v("#")]),t._v(" 4.2 标准属性和基础属性")]),t._v(" "),e("p",[t._v("标准属性库维护的是经过审核的，类目上直接可用的属性，而基础属性库，来自商家在发布商品和 spu 过程中直接录入的数据。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/9e/9e6eb45a81a92287404657477714b4e6.png",alt:"img"}})]),t._v(" "),e("p",[t._v("经过运营审核、机器审核、数据清洗等流程，基础属性数据会流入到标准属性，作为整个平台属性库的扩充，在其他商家录入商品时，可以直接依赖，实现属性的复用。")]),t._v(" "),e("h2",{attrs:{id:"_4-3-属性如何管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-属性如何管理"}},[t._v("#")]),t._v(" 4.3 属性如何管理")]),t._v(" "),e("p",[t._v("属性库不只有 K-V 结构这么简单，还需要一些别的规则来约束。")]),t._v(" "),e("h3",{attrs:{id:"_1-输入类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-输入类型"}},[t._v("#")]),t._v(" （1）输入类型")]),t._v(" "),e("p",[t._v("属性有一个概念叫输入类型，因为不同的属性有的可以枚举，有的只能文本输入。")]),t._v(" "),e("p",[t._v("比如商品的产地，是固定的行政区域，但是如果是重量，就没办法通过枚举表示完全。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/05/05ea710c16052b98934c82a7d34ed60d.png",alt:"img"}})]),t._v(" "),e("p",[t._v("一般来说，属性可以分为枚举，枚举可输入，可输入三种，另外某些复杂类目下还有属性模板的定义，用于某些无法提前枚举的子属性填充。")]),t._v(" "),e("h3",{attrs:{id:"_2-多级属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-多级属性"}},[t._v("#")]),t._v(" （2）多级属性")]),t._v(" "),e("p",[t._v("特别的，部分属性有子属性的概念，比如阿迪达斯的三叶草系列，就是隶属于阿迪达斯这个品牌属性值下边的。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/25/253b79bd4204213d0f6b96a9397fad7f.png",alt:"img"}})]),t._v(" "),e("p",[t._v("如果没有子属性的概念，单纯通过笛卡尔积来表示，在发布商品时就会出现太多的属性值并列，导致无法筛选，并且出现很多不存在的属性组合，而多级属性，就可以解决这个问题。")]),t._v(" "),e("h1",{attrs:{id:"五、供应链商品"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、供应链商品"}},[t._v("#")]),t._v(" 五、供应链商品")]),t._v(" "),e("p",[t._v("上面的商品模型，都是偏向销售链路，在供应链路，商品模型又会有一切不同，简单列举几点。")]),t._v(" "),e("h2",{attrs:{id:"_5-1-前后端商品"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-前后端商品"}},[t._v("#")]),t._v(" 5.1 前后端商品")]),t._v(" "),e("p",[t._v("刚才说到，标准的电商类目体系会分为前台类目和后台类目，其实在商品模型中，也会分成前端商品和后端商品。")]),t._v(" "),e("p",[t._v("前端商品关注销售链路，包括交易，订单等，后端商品关注供应链路，包括仓储，采购等。")]),t._v(" "),e("p",[t._v("为什么要分前端商品和后端商品呢？")]),t._v(" "),e("p",[t._v("前端商品可以理解为分销商品，后端商品可以理解为供销商品。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/28/281fbf1571da043780c088b92ae44dee.png",alt:"img"}})]),t._v(" "),e("p",[t._v("举个例子，你在网上购买一个空调，实际上呢，这个空调分为室内主机和外机，内机和外机在仓储上和可能是分开的。")]),t._v(" "),e("p",[t._v("为了解决这种情况，就可以通过前后端商品模型，将前端的空调商品，与后端的空调内机和外机关联起来，最终计算库存时，是使用内机商品和外机商品的库存。")]),t._v(" "),e("h2",{attrs:{id:"_5-2-组合商品"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-组合商品"}},[t._v("#")]),t._v(" 5.2 组合商品")]),t._v(" "),e("p",[t._v("还记得啤酒与尿不湿的故事吗？")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/fd/fd27019c85d4d616f4dc86998488a977.png",alt:"img"}})]),t._v(" "),e("p",[t._v("商品在销售过程中，常见的一个形式是组合商品，比如购买手机的电话卡套餐，双十一商家的套餐商品，都可以通过组合商品的方式来实现。")]),t._v(" "),e("h1",{attrs:{id:"六、小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、小结"}},[t._v("#")]),t._v(" 六、小结")]),t._v(" "),e("p",[t._v("这篇文章简单分析了商品、类目、属性库三层的业务模型，对于平台型电商来说，商品管理核心解决两个问题，一个是商品的标准化，另外一个是商品导购，而这些都离不开业务模型的支持。")]),t._v(" "),e("h2",{attrs:{id:"模型的第一性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模型的第一性"}},[t._v("#")]),t._v(" 模型的第一性")]),t._v(" "),e("p",[t._v("埃隆马斯克有个特别推崇的第一性原理，第一性原理要求我们回归本质，找寻最基本的要素，建立更简洁完整的架构体系。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/infoq/2b/2bbd4b356063804ebfa3a4ecba8529f5.webp",alt:"img"}})]),t._v(" "),e("p",[t._v("商品模型的变化，都是为了更好的描述现实世界的实物商品，满足业务要求。")]),t._v(" "),e("p",[t._v("从这个角度看，电商业务中，商品模型就具有第一性，熟悉了底层商品模型，在面对上层的各种业务变化，就可以游刃有余。")]),t._v(" "),e("p",[t._v("题图来自 Unsplash，基于 CC0 协议")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("一、如何定义商品"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.1 商品是货品的数字化"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.2 如何理解商品模型"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("二、商品与产品"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.1 商品"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.2 SKU"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.3 SPU"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.4 CSPU"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("三、类目属性体系"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.1 类目定义"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-10",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.2 前后台类目"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-11",target:"_blank",rel:"noopener noreferrer"}},[t._v("（1）后台类目，关注标准化管理"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-12",target:"_blank",rel:"noopener noreferrer"}},[t._v("（2）前台类目，关注灵活的导购"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-13",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.3 类目属性及分类"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-14",target:"_blank",rel:"noopener noreferrer"}},[t._v("四、属性库建设"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-15",target:"_blank",rel:"noopener noreferrer"}},[t._v("4.1 属性数据从哪里来"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-16",target:"_blank",rel:"noopener noreferrer"}},[t._v("4.2 标准属性和基础属性"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-17",target:"_blank",rel:"noopener noreferrer"}},[t._v("4.3 属性如何管理"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-18",target:"_blank",rel:"noopener noreferrer"}},[t._v("（1）输入类型"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-19",target:"_blank",rel:"noopener noreferrer"}},[t._v("（2）多级属性"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-20",target:"_blank",rel:"noopener noreferrer"}},[t._v("五、供应链商品"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-21",target:"_blank",rel:"noopener noreferrer"}},[t._v("5.1 前后端商品"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-22",target:"_blank",rel:"noopener noreferrer"}},[t._v("5.2 组合商品"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-23",target:"_blank",rel:"noopener noreferrer"}},[t._v("六、小结"),e("OutboundLink")],1),e("a",{attrs:{href:"https://xie.infoq.cn/article/236ff91c771d0237395128c33?utm_source=rss&utm_medium=article#sr-toc-24",target:"_blank",rel:"noopener noreferrer"}},[t._v("模型的第一性"),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=_.exports}}]);