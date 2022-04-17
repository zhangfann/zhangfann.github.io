(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{551:function(a,s,_){"use strict";_.r(s);var n=_(42),v=Object(n.a)({},(function(){var a=this,s=a.$createElement,_=a._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("p",[a._v("DEPART: 分布式KV系统副本解耦合")]),a._v(" "),_("h1",{attrs:{id:"摘要"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[a._v("#")]),a._v(" 摘要")]),a._v(" "),_("p",[a._v(":::\n分布式KV系统通过副本复制进行容错\n主副本与冗余副本解耦\n!? 副本本身不就是解耦的\nans 主副本和冗余副本都是lsm管理的\n?? 两层日志 冗余副本排序可调整 -> 平衡读写性能\n:::")]),a._v(" "),_("p",[a._v('现代分布式键值（KV）存储通过在各节点上分布KV对的副本，采用复制来实现容错。然而，现有的分布式KV存储通常在相同的索引结构中管理所有的副本，从而导致了复制冗余之外的巨大I/O成本。我们提出了一个被称为 "副本解耦 "的概念，它将主副本和冗余副本的存储管理解耦，这样不仅可以减轻索引中的I/O成本，还可以提供可调整的性能。特别是，我们设计了一个新颖的两层日志，使冗余副本的排序可以调整，以实现平衡的读写性能。我们在Cassandra上实现了一个分布式KV存储原型DEPART。实验表明，在不同的一致性水平和参数设置下，DEPART在所有性能方面都优于Cassandra。具体来说，在最终一致性设置下，DEPART的写、读、扫描和更新的吞吐量分别达到了1.43倍、2.43倍、2.68倍和1.44倍。')]),a._v(" "),_("h1",{attrs:{id:"_1-介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[a._v("#")]),a._v(" 1 介绍")]),a._v(" "),_("p",[a._v(":::\n统一索引: 每个节点在内部将所有的副本存储在相同的索引结构中\n将不同节点的副本存储在一个LSM树中\n!? 统一索引方便复制 但降低了读写性能\n_写 lsm树执行compaction操作 重写kv对 保持每层的排序 \\写放大\n_读 读取kv对 需要在lsm树搜索多个层次 \\读放大")]),a._v(" "),_("p",[a._v("将主副本由lsm管理 冗余副本由简单的索引管理\n:::")]),a._v(" "),_("p",[a._v("键值（KV）存储是现代数据密集型应用的存储基础设施的重要组成部分，如网络搜索[14, 31]、社交网络[57]、照片存储[10]和云存储[25,37]。为了支持大规模的使用，KV存储通常以分布式方式部署，将数据对象（以KV对的形式）存储在多个节点上。分布式KV存储的例子包括BigTable[14]、HBase[3]、Dynamo[25]、HyperDex[28]、Cassandra[37]、TiKV[50]和Riak[54]。在任何大规模的部署中，故障都是普遍存在的，因此为分布式KV存储提供容错是至关重要的。复制仍然是现代分布式KV存储中常用的容错机制（包括上面列出的例子[3,14,25,28,37,50,54]）。具体来说，对于每个由用户写下的KV对，复制会产生多个精确的副本（称为复制品），并将复制品分布在不同的节点上，以便容忍任何节点故障。一个微妙之处在于，每个节点在内部将所有的副本存储在相同的索引结构中；我们称这种方法为统一索引。例如，我们研究了各种开源分布式KV存储的代码基础，包括HBase[3]、HyperDex[28]、Cassandra[37]、TiKV[50]和ScyllaDB[60]，它们都采用统一索引来进行复制管理。特别是，它们将所有来自不同节点的副本保存在一个日志结构合并树（LSM-树）[48]中，这是一个多级的树状结构，支持KV对的有效读写，并在每一级中保持排序的KV对，以便对KV对的连续范围进行有效扫描（或范围查询）。他们或者建立在本地LSM树形KV存储上（例如，HyperDex使用HyperLevelDB[27]，TiKV使用RocksDB[29]），或者实现他们自己的LSM树形结构（例如，在HBase和Cassandra）。统一索引对于复制管理来说实现起来很简单，但它也大大降低了写和读的性能。首先，LSM树执行频繁的com-paction操作，重写当前存储的KV对，以保持它们在每一层的排序顺序。在同一个LSM树中存储所有的重复数据会加剧复制冗余之外的写放大。例如，当复制被禁用时，Cassandra和TiKV的写放大率分别为6.5倍和13.8倍；然而，在三重复制下，Cassandra和TiKV的写放大率分别达到25.7倍和50.9倍，产生了超过3倍的写放大率（§3.1）。另外，由于读取一个KV对需要在LSM树中搜索多个层次，统一索引放大了搜索空间，也加剧了读取放大的情况。例如，在三重复制下，Cassandra的读取放大率达到34.6倍（§3.1）。我们的见解是，如果我们使用不同的索引结构来管理不同类型的副本的存储，而不是把所有的副本放在同一个索引结构中，那么我们不仅可以通过减少每种类型的副本的索引结构的大小来缓解读/写放大的问题，还可以使灵活的存储管理来适应不同的设计权衡。我们通过提出副本解耦来说明问题，它根据主副本（即KV对的主要副本）和冗余副本（即KV对除主副本外的其余副本）来解耦每个KV对的副本的存储管理。我们只使用LSM树来管理主副本，以便保留LSM树的设计特点，但以更轻的方式；同时，我们对冗余副本使用更简单但可调整的索引结构，以根据性能要求平衡读写性能。'")]),a._v(" "),_("p",[a._v("'在本文中，我们在DEPART中设计了副本解耦，DEPART是一个新颖的分布式KV存储，对主副本和冗余副本的存储管理进行解耦以实现容错。DEPART建立在Cassandra[37]的基础上。它支持关键I/O路径上的主副本和冗余副本的轻量级区分，同时保持Cass-sandra现有的数据组织和可配置的一致性特征。在管理LSM树中的主副本的同时，DEPART提出了一个新颖的两层日志来管理具有可调整顺序的冗余副本，以平衡读写性能。它的想法是将冗余副本的分批写入一个仅有附录的全局日志，以获得高写入性能。它进一步将全局日志分割成多个本地日志。特别是，每个本地日志中KV对的排序可以通过一个参数来调整，以平衡冗余副本的读写性能；例如，给定一个高的读（或写）一致性水平（即在一个成功的操作中要读（或写）的副本数量；见第2.3节），两层日志可以被调整为有利于高读（或写）性能。双层日志还可以提高故障恢复的性能，通过按不同的密钥范围组织KV对，并限制恢复操作只访问相关范围的KV对。我们的贡献总结如下。- 我们分析了两个最先进的分布式KV存储，Cas- sandra和TiKV，并揭示了它们由于复制的统一索引而造成的性能限制。- 我们设计了DEPART，它实现了副本的解耦，并有几个关键的设计特点。(i) 主副本和冗余副本的轻量级区分，(ii) 双层日志设计，冗余副本的排序可调整，以及(iii) 通过并行化实现快速故障恢复。- 我们在Cassandra v3.11.4[2]上实现DEPART。实验表明，DEPART在各种情况下都优于Cassandra。例如，在最终一致性的情况下，DEPART在写、读、扫描和更新方面分别比Cassandra取得了1.43倍、2.43倍、2.68倍和1.44倍的吞吐量收益。在不同的一致性级别配置下，DEPART也保持了其读写性能的提升。我们的DEPART原型的源代码可在以下网站获得：https://github.com/ustcadsl/depart。'")]),a._v(" "),_("h1",{attrs:{id:"_2-背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-背景"}},[a._v("#")]),a._v(" 2 背景")]),a._v(" "),_("p",[a._v("我们使用 Cassandra [37]（它是我们的DEPART的设计）为例来描述分布式KV存储的背景分布式 KV 存储的背景，包括其存储架构。I/O工作流程，以及一致性管理。")]),a._v(" "),_("h2",{attrs:{id:"_2-1-存储架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-存储架构"}},[a._v("#")]),a._v(" 2.1 存储架构")]),a._v(" "),_("p",[a._v(":::\n介绍数据分片 以及读写流程\n:::")]),a._v(" "),_("p",[_("strong",[a._v("数据组织")]),a._v("\n:::\n哈希环由n个物理节点 v个虚拟节点组成\n总共长度为n"),_("em",[a._v("v\n主副本被放置在 Ni mod n")]),a._v("v 上\n冗余副本被放置在主副本物理节点的顺序节点上\n:::")]),a._v(" "),_("p",[a._v("' 数据组织。分布式KV存储将KV对划分在一个节点集群中。在Cassandra中，KV对是根据一致散列法[33]来划分的，这也被其他生产型分布式KV存储所采用[25,41,54,60]。一致性散列将所有节点的位置与散列环联系起来，并将每个KV对明确地映射到一个节点。具体来说，我们考虑一个有n个物理节点的分布式KV存储，每个节点与v个虚拟节点相关。它将哈希环划分为n×v个范围，每个范围覆盖一个虚拟节点。例如，如图1所示，有n = 5个物理节点（即N0至N4），每个节点有v = 2个虚拟节点。散列环包含2×5=10个范围，比如（0-10），（11-20），---，（91-100）。每个范围都与哈希环中顺时针方向上最近的虚拟节点和对应的物理节点相关联；例如，范围（0-10）和（51-60）都被分配给N0。对于每个KV对，一致的散列法将密钥散列到散列环中的某个位置（例如，在Cassandra中使用MurmurHash[6]）。然后，KV对被存储在与该范围相关的相应的物理节点中。复制通常用于现代分布式KV存储[3,14,25,28,37,50]的容错，通过将每个KV对的副本分布在不同的节点上，以防止节点故障的发生。在Cassandra中，副本被存储在哈希环中沿顺时针方向的节点序列中，用Ni,N(i+1)mod n, N(i+2)mod n, ---，其中0≤i≤n-1，Ni（即节点序列中的第一个节点）是基于一致散列的KV对被散列的节点。我们把存储在Ni中的副本称为主副本，而把存储在哈希环中沿顺时针方向的连续物理节点中的其余副本称为冗余副本。'")]),a._v(" "),_("p",[_("strong",[a._v("使用LSM作为内部存储")]),a._v("\n:::\nkv数据 -> 内存Memtable\n_Memtable满\n将Memtable变为不可变 压入L0\n_L0 ... Ln-1 满\n\\压入下一层(L0, L1) //将L0数据压入L1 @写放大\n将L0 L1数据读入内存 排序后写入L1\nL0-L6层内是排序的 但是层之间没有排序\n所以在搜索时需要从L0开始搜索 会带来 @读放大\n:::")]),a._v(" "),_("p",[a._v("' 用LSM-树的内部存储。每个节点在内部用一些索引结构来管理KV对。特别是，LSM树[48]是分布式KV存储中最常用的索引结构之一，包括Cassandra和其他[3,20,28,41,50,60]。LSM-tree KV存储将KV对组织在一个多级树中，并在每一级保持KV对按键排序，以便支持高效的读、写和扫描。如图1所示，LSM树形KV存储维护着一个基于树形的索引结构，该结构有多个层次（用L0,L1,---表示），其容量不断增加，其中每个层次将KV对存储在称为SSTa-bles的文件单元中。它首先将写入的KV对附加到磁盘上的写前日志（WAL）中，然后将它们插入到内存中的MemTable中。当MemTable满的时候，LSM-tree KV存储将MemTable变成一个不可变的MemTable，它作为SSTable被刷到最低层L0。当低层达到容量限制时，LSM-tree KV存储通过压实将低层的KV对合并到下一个高层。为了保持每个级别的KV对的排序，压实操作首先从两个级别读取KV对，合并排序的KV对，然后写回排序的KV对。因此，在写的过程中，压缩会产生额外的I/O，从而导致写的放大。另外，由于KV对没有在不同的层次上进行排序，读取一个KV对需要从最低的层次L0搜索到更高的层次，导致读取放大。写和读的放大都被证明会导致LSM树型KV存储的显著性能下降[12,43,51]。'")]),a._v(" "),_("h2",{attrs:{id:"_2-2-io工作流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-io工作流"}},[a._v("#")]),a._v(" 2.2 IO工作流")]),a._v(" "),_("p",[_("strong",[a._v("写工作流")]),a._v("\n:::\n客户端随机连接一个节点, 称为协调者, 发送KV对\n协调者根据hash确定主副本和冗余副本的节点 然后转发")]),a._v(" "),_("p",[a._v(":::")]),a._v(" "),_("p",[a._v("' 写作工作流程。在Cassandra中写一个KV对的工作流程如下。客户端首先随机选择并连接到其中一个节点，称为协调者，并向其发送KV对。协调器根据一致的散列法确定主副本和冗余副本所存储的节点。然后，它将KV对转发给这些节点。'")]),a._v(" "),_("p",[_("strong",[a._v("读流程")]),a._v("\n:::\n客户端连接一个协调者\n协调者根据hash确定主副本或者冗余副本的存储节点\n然后根据负载均衡 动态确定读取KV对\n:::")]),a._v(" "),_("p",[a._v("' 读取工作流程。在Cassandra中读一个KV对与写一个KV对类似，工作流程如下。客户端首先选择并联系一个协调器。它向协调器发出读取请求，协调器会找到KV对的副本（不管是主副本还是冗余副本）所存储的节点。为了实现负载平衡，协调器更倾向于从动态告密模块[5]确定的低延迟的节点上读取KV对。然后，它将KV对返回给客户端。'")]),a._v(" "),_("h2",{attrs:{id:"_2-3-一致性管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-一致性管理"}},[a._v("#")]),a._v(" 2.3 一致性管理")]),a._v(" "),_("p",[a._v("' Cassandra支持不同的一致性模式，例如，强一致性和最终一致性。它们是通过调整复制因子（用k表示），以及读一致性级别（RCL）和写一致性级别（WCL）来配置的。复制因子k被定义为用于容错的复制总数。RCL和WCL被定义为协调器为确认成功的读写操作而读取和写入的最小数量的副本（不管是主副本还是冗余副本）。如果WCL+RCL>k，则提供强一致性；如果WCL+RCL≤k，则提供最终一致性。默认情况下，WCL和RCL在Cassandra中都被设置为1。'")]),a._v(" "),_("h1",{attrs:{id:"_3-副本解耦"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-副本解耦"}},[a._v("#")]),a._v(" 3 副本解耦")]),a._v(" "),_("p",[a._v("' 为了激励副本解耦，我们描述了统一索引在内部存储管理中管理所有副本的局限性（§3.1）。我们还描述了原始的副本解耦设计，以激励我们的DEPART设计（§3.2）。'")]),a._v(" "),_("h2",{attrs:{id:"_3-1-统一索引以及它的局限性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-统一索引以及它的局限性"}},[a._v("#")]),a._v(" 3.1 统一索引以及它的局限性")]),a._v(" "),_("p",[a._v("' 回顾一下§1，现有的分布式KV存储（例如，[3,28,37,50]）主要采用统一索引，其中为每个节点指定的所有副本（包括所有主副本和冗余副本）都在同一索引结构下管理。我们表明，统一索引，而不是复制带来的额外写入，是显著加剧LSM树的写入和读取放大的主要原因。'")]),a._v(" "),_("p",[_("strong",[a._v("限制一：写入放大的情况加重。")])]),a._v(" "),_("p",[a._v("在单一形式的索引下，每个节点都将所有的副本视为常规的KV对，并且不加区分地将它们存储在同一个LSM树中（图1）。为了说明它是如何加剧写放大的，我们评估了两个开源分布式KV存储的写放大，Cassandra（v3.11.4）[2]和TiKV（4.0版）[50]。具体来说，我们将Cassandra和TiKV部署在一个5个节点的集群上，其默认设置（在第5节中去掉）。我们配置一台客户机，向最初拥有空存储的集群发出300M个KV对（每个大小为1KiB）的写入。我们考虑无复制（k = 1），双倍复制（k = 2）和三倍复制（k = 3）。图2(a)显示，由于LSM树造成的压缩开销，无复制对Cassandra来说产生了6.5倍的写入放大率。然而，对于三重复制，写放大率增加到25.7倍，大约是无复制写放大率的4倍。我们还观察到TiKV的类似趋势，写放大率从13.8倍增加到50.9倍（即增加3.7倍）。另外，随着KV存储空间大小的增加，写入放大倍数的增加更加明显，并呈现出超线性的趋势。原因是更大的KV存储规模增加了LSM树的层数，导致了更高的压缩过头和更大的写入放大率。我们配置一台客户机向最初的空集群发出100M、300M和600M KV对的写入，每个大小为1KiB。在这里，我们专注于Cassandra。图2(b)显示了Cassandra在不同的KV存储规模下的写入放大倍数。对于一个更大的数据存储，与没有复制相比，三重复制下的写放大率的增加也变得更大。例如，在100M KV对的情况下，三重复制比无复制有3.4倍的写入放大率，在600M KV对的情况下则有4.5倍。这种超线性的趋势")]),a._v(" "),_("p",[_("strong",[a._v("限制#2：读取放大的情况加剧。")])]),a._v(" "),_("p",[a._v("统一索引也严重地加剧了读数放大。主要原因是所有副本都存储在同一个LSM-树中，从而扩大了KV对的搜索空间。我们评估了Cassandra和TiKV在上述设置中的读取放大率，同时一台客户机对已经存储的300M个大小为1KiB的KV对发出了30M次读取。图3(a)显示，对于Cassandra来说，读取放大率从无复制时的7.8倍增加到三倍复制时的34.6倍（即增加4.4倍）。我们观察到TiKV也有类似的趋势。此外，我们还研究了KV存储规模对读取放大的影响。在这里，我们专注于Cassandra。我们首先向最初的空集群发出100 M、300 M和600 M的KV对的写，每个KV对的大小为1 KiB，然后向现有的KV对发出30 M的读。图3(b)显示了随着Cassandra的KV存储大小的增加，读放大的超线性增长。'")]),a._v(" "),_("h2",{attrs:{id:"_3-2-动机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-动机"}},[a._v("#")]),a._v(" 3.2 动机")]),a._v(" "),_("p",[a._v(":::\n?? 是主副本与冗余副本有不同的读写一致性\n:::")]),a._v(" "),_("p",[a._v("我们在第3.1节中的分析表明，统一索引会加剧写和读的放大，因为在一个单一的LSM树中管理所有的副本是很昂贵的。这促使我们探索副本解耦的潜力，解耦副本的主副本和冗余副本，并在不同的索引结构中管理它们。我们首先考虑两种原始的复制解耦方法，然后激励我们的设计。'")]),a._v(" "),_("p",[_("strong",[a._v("直观的方法。")]),a._v("\n一个简单的复制解耦方法是部署两个LSM树，一个用于主副本，一个用于所有冗余副本。然而，用于冗余副本的LSM树仍然有很大的尺寸（特别是对于大的复制系数），而在每个I/O操作中并不是所有的冗余副本都被访问。例如，为了恢复三倍复制下的单节点故障，平均只有一半的冗余副本被访问。因此，有额外的I/O用于搜索整个LSM树的冗余副本的子集。另一个简单的副本解耦方法是为每个KV对衍生的k个副本管理k个LSM树（k是复制系数）。例如，对于具有三重复制的Cassandra，节点Ni接收冗余副本，其响应的主副本存储在节点N（i-1）mod n和N（i-2）mod n（其中0≤i≤n-1，n是物理节点的数量）。然后我们在节点Ni中使用三个LSM树，其中一个存储主副本，另外两个分别存储来自节点N(i-1)mod n和N(i-2)mod n的冗余副本。然而，维护多个LSM树会产生巨大的内存和I/O开销。由于每个LSM树都有自己的MemTable和不可变的MemTable，内存开销会随着复制系数k而放大k倍。具体来说，如果MemTable的大小是m MiB，而clus-ter的大小是n，Cassandra的内存成本是m×n MiB，因为每个节点维护一个LSM树。然而，当每个节点使用k个LSM树时，内存成本变为k×m×n MiB，是Cassandra的k倍。请注意，如果我们减少每个LSM树的MemTable大小以限制内存开销，就会降低将MemTable刷入磁盘的效率，从而降低用户的写入性能[7,8]。另外，每个LSM树都会产生自己的压实开销，以维持每一层的完全排序。因此，压实开销仍然很大，同一节点上的多个LSM树的com-paction操作会竞争磁盘带宽，因此整体I/O性能会受到影响。我们的评估（第5.2节中的Exp#1）表明，与统一索引相比，多LSM树的复制解耦只带来了有限的性能提升，即使这些复制是由不同的LSM树管理。我们的方法。回顾一下，LSM树在每一层都保持着完全排序的顺序。在统一索引中为所有的副本使用一个LSM树，或者为副本解耦使用多个LSM树，可能有利于提高读取性能，但是这两种方法都会产生大量的高压缩开销，降低写入性能。特别是，不同的一致性等级意味着对复制的读写有不同的性能要求，如高的读（或写）一致性等级要求复制的高读（或写）性能。这促使我们设计一个新的存储管理方案，支持副本解耦的可调整顺序，以平衡读写性能。'")]),a._v(" "),_("p",[_("strong",[a._v("我们的方法。")]),a._v("\n回顾一下，LSM树在每一层都保持着完全排序的顺序。在统一索引中为所有的副本使用一个LSM树，或者为副本解耦使用多个LSM树，可能有利于提高读取性能，但是这两种方法都会产生大量的高压缩开销，降低写入性能。特别是，不同的一致性等级意味着对复制的读写有不同的性能要求，如高的读（或写）一致性等级要求复制的高读（或写）性能。这促使我们设计一个新的存储管理方案，支持副本解耦的可调整顺序，以平衡读写性能。'")]),a._v(" "),_("h1",{attrs:{id:"_4-depart的设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-depart的设计"}},[a._v("#")]),a._v(" 4 DEPART的设计")]),a._v(" "),_("p",[a._v("“我们推出Decept，这是一个分布式KV存储，它基于Cassandra，通过分离主副本和冗余副本的存储管理来实现副本解耦。我们介绍了它的架构（§4.1），并详细阐述了它的设计技术（§4.2-§4.5）。”")]),a._v(" "),_("h2",{attrs:{id:"_4-1-总体架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-总体架构"}},[a._v("#")]),a._v(" 4.1 总体架构")]),a._v(" "),_("p",[a._v(":::\n全局日志 -> 分割为多个本地日志\n?? 可调整排序\n:::")]),a._v(" "),_("p",[a._v("**轻量级的副本区分。**DEPART对每个节点的存储模块中的主副本和冗余副本进行区分，以便单独管理。它的副本区分是基于简单的哈希计算的轻量级的，并且在关键的I/O路径上产生有限的开销（§4.2）。\n**两层的日志设计。**DEPART用两层日志来管理冗余副本，以实现快速写入和高效恢复。它首先将冗余副本追加到全局日志中，作为连续的分批写入。然后，它在后台将全局日志分割成多个本地日志（§4.3）。\n**可调控的排序。**DEPART还为双层日志设计提供了一个可调整的排序方案，通过一个参数调整冗余副本的排序程度，从而平衡访问冗余副本的读写性能（§4.4）。\n**平行恢复。**DEPART使用并行恢复方案，在恢复过程中并行读写主副本和冗余副本，以实现高恢复性能（§4.5）。'")]),a._v(" "),_("h2",{attrs:{id:"_4-2-副本分化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-副本分化"}},[a._v("#")]),a._v(" 4.2 副本分化")]),a._v(" "),_("p",[a._v(":::\n如何将副本区分为主副本和冗余副本\n:::")]),a._v(" "),_("p",[a._v("' DEPART将每个节点的存储模块中写入的KV对区分为主要或冗余副本。图5描述了副本区分的工作流程。回顾一下，协调者将一个KV对的k个副本沿着哈希环的顺时针方向转发给k个节点序列，其中KV对的密钥被哈希到节点序列的第一个节点（§2）。当一个节点，例如N，从协调者那里收到KV对的一个副本时，它对副本的密钥进行同样的哈希计算（即Cassandra中的MurmurHash[6]），并确定密钥被哈希到的节点。如果得到的节点与N本身相同，那么N就是节点序列中的第一个节点，我们将该副本称为主要副本；否则，我们将该副本称为冗余副本。每个节点都为LSM-树（用于主副本）和两层日志（用于冗余副本）维护一个写前日志（WAL）和一个MemTable。在一个节点区分了KV对是主副本还是冗余副本后，它将KV对写入相应的WAL和MemTable并确认协调者。当MemTable满了并成为不可变的时候，节点会将不可变的MemTable刷到LSM树或两层日志中。复制区分的逻辑是轻量级的，因为它需要在关键I/O路径中的每个存储节点进行一次额外的哈希计算（复制因子k的额外计算总数为k）。我们的实验表明，区分的时间不到总写入时间的0.4%（§5.2中的Exp#5）。'")]),a._v(" "),_("h2",{attrs:{id:"_4-3-双层日志设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-双层日志设计"}},[a._v("#")]),a._v(" 4.3 双层日志设计")]),a._v(" "),_("p",[a._v(":::\n根据冗余副本对应主副本是同一节点\n将全局日志分割为本地日志\n:::")]),a._v(" "),_("p",[a._v("'每个节点维护一个两层的日志，该日志是为管理冗余副本而设计的，具有以下的特征。首先，它支持对冗余副本的快速写入，即使冗余副本的数量比主副本的数量大得多，并且随着重复系数的增加而增加。第二，它支持可调整的排序，以适应不同的一致性级别（§4.4）。第三，它通过允许快速读取冗余副本来支持任何故障节点的有效并行恢复。图6显示了每个节点中的两层日志的结构。在收到副本后，一个节点首先将冗余副本的顺序分批写入一个全局日志中。一个后台线程不断地从全局日志中检索冗余副本，并将它们分割成多个本地日志。我们在下面详细说明全局日志和本地日志的设计。'")]),a._v(" "),_("p",[a._v(":::\n恢复数据时 全局日志中的部分冗余副本会恢复\n:::")]),a._v(" "),_("p",[a._v("**只附加的全局日志。**为了实现快速写入，每个节点将KV对的所有冗余副本（从不可变的MemTable中刷新）写入一个只附加的全局日志。所有的冗余副本被分组为片段单位，并作为连续的分批写入附加到全局日志的头部。请注意，全局日志只存储所有冗余的副本，而不维护任何额外的索引结构。因此，它实现了冗余副本的高写入性能。在全局日志中保留所有的冗余副本可以实现较高的写入性能，但是会带来两个问题。首先，重新覆盖的性能下降了。对于全局日志中的冗余副本，它们相应的主副本可能会在不同的节点上重新出现。当一个节点发生故障时，只有全局日志中的部分冗余副本（即其对应的主副本位于故障节点中的冗余副本）需要进行恢复。因此，恢复时只需要对全局日志进行部分访问，从而产生大量的随机I/O。第二，垃圾收集成本增加。随着新的KV对被追加到日志头，无效的（或陈旧的）KV对不能被覆盖，因此它们占据了大量的空间。这产生了大量的存储开销，特别是在更新密集型的工作负载中。垃圾收集可以用来减少存储成本，通过不断地从日志尾部回收无效的KV对的空闲空间，但它不可避免地引入了大量的额外I/O，以从日志尾部读取片段并将有效的KV对写回日志头。'")]),a._v(" "),_("p",[a._v("**分割成本地日志。**为了实现快速恢复，DEPART维护了一个后台线程，将全局日志持续分割成多个本地日志，每个本地日志只保留其对应的主副本存储在同一节点的冗余副本。这允许任何故障节点的恢复只访问与故障节点相关的本地日志。请注意，每个节点只需要维护k -1个本地日志（回顾一下，k是复制因子），因为一致散列将副本沿顺时针方向分布在散列环中的节点序列中，每个节点只存储最多k -1个节点的冗余副本。分割操作的工作方式如下。它首先从全局日志的尾部检索一个可配置数量的片段，统称为分割。然后，它将冗余副本的分割重组为多个子分割，每个子分割只包含冗余副本，其对应的主副本位于同一节点中。最后，它将每个子分片以仅附加的方式写回一个单独的本地日志，并以并行方式向不同的本地日志发出写入。在拆分过程中，DEPART也会丢弃所选段中任何无效的KV对。因此，它没有明确地触发垃圾收集；相反，它在拆分操作中实现了垃圾收集，以节省额外的I/O。对于每个冗余副本，每个节点需要确定其相应的主副本所在的节点。这可以在一个节点内根据副本的区分（§4.2）在本地完成。'")]),a._v(" "),_("p",[a._v(":::\n根据冗余副本对应主副本是同一节点\n将全局日志分割为本地日志\n:::")]),a._v(" "),_("p",[a._v("' 分割成本地日志。为了实现快速恢复，DEPART维护了一个后台线程，将全局日志持续分割成多个本地日志，每个本地日志只保留其对应的主副本存储在同一节点的冗余副本。这允许任何故障节点的恢复只访问与故障节点相关的本地日志。请注意，每个节点只需要维护k -1个本地日志（回顾一下，k是复制因子），因为一致散列将副本沿顺时针方向分布在散列环中的节点序列中，每个节点只存储最多k -1个节点的冗余副本。分割操作的工作方式如下。它首先从全局日志的尾部检索一个可配置数量的片段，统称为分割。然后，它将冗余副本的分割重组为多个子分割，每个子分割只包含冗余副本，其对应的主副本位于同一节点中。最后，它将每个子分片以仅附加的方式写回一个单独的本地日志，并以并行方式向不同的本地日志发出写入。在拆分过程中，DEPART也会丢弃所选段中任何无效的KV对。因此，它没有明确地触发垃圾收集；相反，它在拆分操作中实现了垃圾收集，以节省额外的I/O。对于每个冗余副本，每个节点需要确定其相应的主副本所在的节点。这可以在一个节点内根据副本的区分（§4.2）在本地完成。'")]),a._v(" "),_("p",[a._v("**从两层日志中读取。**为了从两层日志中读取一个KV对，DEPART首先逐一检查全局日志中的段，从最新的一个开始。请注意，每个段的内部结构与LSM树中的SSTables类似，所以DEPART首先从段中读取元数据，然后根据元数据中的偏移量读取相应的KV对。如果在全局日志中没有找到该KV对，那么DEPART就会搜索相关的范围组，通过比较键和范围组的边界键来定位。由于每个范围组包含多个已排序的运行，且已排序运行中的KV对是完全排序的，因此DEPART从最新的排序运行搜索到最旧的排序运行，并使用二进制搜索来查找已排序运行中的密钥。'")]),a._v(" "),_("h2",{attrs:{id:"_4-4-可调整排序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-可调整排序"}},[a._v("#")]),a._v(" 4.4 可调整排序")])])}),[],!1,null,null,null);s.default=v.exports}}]);