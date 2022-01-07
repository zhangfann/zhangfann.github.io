(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{528:function(t,e,r){"use strict";r.r(e);var a=r(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("columnar_formats_for_schemaless_lsm_based_document_stores")]),t._v(" "),r("h1",{attrs:{id:"abstract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),r("p",[t._v("在过去的十年中，文档存储数据库系统在存储和查询大量的半结构化数据方面获得了更多的关注。然而，"),r("strong",[t._v("文档存储的数据模型的灵活性")]),t._v("限制了它们以列式布局存储数据的能力--使得它们在"),r("strong",[t._v("分析工作负载方面的性能不如列式存储关系数据库")]),t._v("。在本文中，我们提出了几项技术，这些技术基于日志结构化合并（LSM）树事件，并为文档存储量身定做，以列式布局的方式存储文档数据。我们首先扩展了Dremelformat，一种流行的半结构化数据的磁盘列式格式，以符合文档存储的灵活数据模型。然后，我们介绍了两种列式布局，用于在基于LSM的存储中组织和存储数据。我们还强调了在文档存储中使用查询编译技术的潜力，在这种情况下，数值的类型只有在运行时才知道。我们已经实施并评估了我们的技术，以衡量它们对Apache AsterixDB的存储、数据摄取和查询性能的影响。我们的实验显示了显著的性能提升，将查询执行时间提高了几个数量级，同时对摄取性能的影响最小。")]),t._v(" "),r("h1",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),r("p",[t._v("近年来，列式存储系统在数据仓库的分析工作负载中被广泛采用，其中典型的查询只访问每个元组的几个字段。通过连续存储列而不是行，列存储系统只需要读取查询中涉及的列，与读取整个元组相比，IO成本变得非常小[44, 54]。因此，开源和商业的关系型列存储系统，如MonetDB[11, 56]（以及商业版本ActianVector[1]）和C-Store[54]（商业化为Vertica[18]）作为数据仓库解决方案已经获得了更多的青睐。")]),t._v(" "),r("p",[t._v('对于半结构化数据，Dremel[44]和它的开源实现Apache Parquet[6]提供了一种以柱状格式存储类似JSON的同质数据的方法。Apache Parquet已经成为流行的大数据系统（如ApacheSpark），甚至是Python的Panda等 "小型 "数据处理库的事实上的文件格式。然而，对于MongoDB[12]、Couchbase Server[10]或Apache AsterixDB[2、24、31]等文档存储系统来说，以面向列的方式存储数据更具挑战性，因为。(1) 文件存储系统中不需要在加载或摄取数据之前声明模式。因此，列的数量和它们的类型是在数据到达时确定的。(2)文档存储系统不禁止一个字段有两种或多种不同的类型，这又增加了一层复杂性。尽管列式格式有性能上的优势，但许多拥有大数据的用户仍然选择了文档存储所提供的灵活性。')]),t._v(" "),r("p",[t._v("许多著名的文档存储，如MongoDB和Couchbase Server，在存储引擎中采用了Log-Structured Merge（LSM）树[48]，因为它们具有卓越的写入性能。LSM的生命周期事件（主要是刷新操作）允许在将记录写到磁盘上时对记录进行转换。本文提出了几种技术来克服文件的挑战，以允许在基于LSM的文件存储中以柱状格式存储和查询半结构化数据。我们首先扩展了Dremel格式，以符合文档存储的灵活数据模型，它允许具有异质类型的值。然后，我们使用元组压缩器框架[23]中提出的相同技术，利用LSM冲洗操作来推断模式，并使用扩展的Dremel格式将记录（最初为行格式）写成列。")]),t._v(" "),r("p",[t._v("我们在这里的工作中提出了两个新的模型，用于在LSM B+树索引中存储列。在第一个模型中，我们使用类似于Partitioned Attributes Across (PAX)[21]的格式来存储列，其中每个列在B+树的叶页中占据一个连续的区域（称为minipage）。我们把这个模型称为AsterixDB PAX模型，简称APAX。在第二个模型中，我们将PAXminipages扩展为Megapages，其中一列可以占据多个页面。我们把这种模式称为AsterixDB MegaAttributes Across（AMAX）。尽管它们的名字，这些布局并不是系统特有的，只需要做一些修改就可以被其他基于LSM的文档存储所采用。我们评估并展示了这两种方法在（1）摄取性能、（2）查询性能和（3）内存和CPU消耗方面的优点和缺点。")]),t._v(" "),r("p",[t._v("在基于磁盘的数据库中不断减少I/O成本的目标是客观合理的（也是本文的一个重点）。然而，随着存储技术的不断进步，CPU成本的作用变得更加明显。在我们的评估中，我们在某些类型的工作负载中观察到一个有趣的现象，与[23]中的基于矢量的格式（行为主的格式）相比，我们能够通过使用APAX和AMAX格式将处理一个查询所需的数据大小减少几个因素。然而，在某些情况下，由于CPU成本的增加，相关的查询执行时间的改善可以忽略不计。决定CPU成本的主导因素是查询执行模式。现代数据库管理系统（DBMSs）已经不再使用传统的迭代模型[36, 39]，而是使用其他的执行模型（如批处理模型[50]和物化模型[43]）来尽量减少CPU开销。然而，手写的代码优于所有三种模型[56]。因此，代码生成和查询编译已经成为许多最近的数据处理引擎[4, 51]和数据库管理系统[45, 46]的性能提升的主要贡献者。")]),t._v(" "),r("p",[t._v("在这项工作中，我们揭示了对文档存储使用查询编译技术的可能性，在这种情况下，值类型在运行时才会被知道。我们利用Oracle Truffle框架（以下称Truffle）[55]来实现一种内部语言，用于处理存储在基于Java的文档存储中的数据。尽管我们只翻译了查询计划的一部分，但我们的评估显示，与AsterixDB的现有模型相比，有了巨大的改进。")]),t._v(" "),r("p",[t._v("为了显示它们的好处，我们已经实施了所提出的技术，以列式格式存储文件数据，并在Apache AsterixDB中产生一个编译的查询计划。这使我们能够对APAX和AMAX格式进行广泛的评估，并为不同的数据集提出它们的权衡。我们还展示了利用Truffle生成和执行针对以AMAX和APAX存储的不同数据集的查询，以及AsterixDB的原始无规则行格式和最近提出的基于矢量的格式的影响。")])])}),[],!1,null,null,null);e.default=s.exports}}]);