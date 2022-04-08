(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{538:function(a,e,r){"use strict";r.r(e);var _=r(42),v=Object(_.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("p",[r("strong",[a._v("KML: 使用机器学习改进存储系统")])]),a._v(" "),r("h1",{attrs:{id:"abstract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[a._v("#")]),a._v(" Abstract")]),a._v(" "),r("blockquote",[r("p",[a._v("痛点, 存储系统需要很多调整参数")])]),a._v(" "),r("p",[a._v("操作系统包括许多启发式算法，旨在提高整体存储性能和吞吐量。由于这些启发式算法不可能在所有条件和工作负载下都能很好地工作，系统设计者不得不向用户提供许多可调整的参数--这就使用户不得不不断地优化自己的存储系统和应用程序。存储系统通常负责I/O重度应用的大部分延迟，因此，即使是一个小的整体延迟改善也是很重要的。机器学习（ML）技术有望学习模式，并从中归纳出最佳解决方案，以适应不断变化的工作负载。我们建议ML解决方案成为操作系统中的一流组件，并取代人工启发式方法来动态地优化存储系统。在本文中，我们描述了我们提出的ML架构，称为KML。我们开发了一个KML架构的原型，并将其应用于两个问题：最佳的提前量和NFS的读尺寸值。我们的实验表明，KML消耗的操作系统资源很少，增加的延迟微乎其微，但却可以学习模式，从而使I/O的吞吐量分别提高2.3倍或15倍--甚至对于复杂的、从未见过的、在不同存储设备上同时运行的混合工作负载。")]),a._v(" "),r("h1",{attrs:{id:"_1-introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-introduction"}},[a._v("#")]),a._v(" 1 Introduction")]),a._v(" "),r("blockquote",[r("p",[a._v("目前情况是根据经验调整参数, 但有些情况下, 最佳的值不是固定的, 而是不断变动的")])]),a._v(" "),r("p",[a._v("计算机硬件、软件、存储和工作负载几十年来一直在变化--近年来有加速的趋势。存储性能在很大程度上取决于工作负载和精确的系统配置[7,68]。存储系统和操作系统包括许多可以影响整体性能的参数[6,8]。然而，用户往往没有时间或专业知识来调整这些参数。更糟糕的是，存储和操作系统社区非常保守：他们抵制对算法和软件进行重大改变以防止不稳定或数据丢失。因此，目前使用的许多技术都是在研究了一些工作负载后，根据人类的直觉开发出来的；但是这些技术不能轻易适应不断变化的工作负载和系统的多样性。然而，当工作负载发生变化时，正确设置这些值是非常重要和困难的：太少的预读值会浪费潜在的吞吐量，太多的预读值会污染缓存，这都会损害性能。一些操作系统让用户通过fadvise和madvise进行提示，以帮助操作系统识别将被纯粹连续或随机使用的文件，但这些提示往往不能为复杂和变化的工作负载找到最佳值。在本文中，我们试验了各种现代工作负载和许多不同的读头值：我们发现没有一个单一的读头值是所有工作负载的最佳值。网络设置中可调整参数的另一个例子是NFS中的默认读大小（rsize）参数：如果它被设置得过小或过大，性能会受到影响。")]),a._v(" "),r("blockquote",[r("p",[a._v("本文中, 采取将kml模型嵌入至内核态的方式")])]),a._v(" "),r("p",[a._v("在本文中，我们描述了我们的ML方法，通过动态地适应不断变化的工作负载来提高存储性能。我们设计并开发了一个通用的、低开销的、轻量级的系统，称为KML，用于在存储系统中进行ML训练和预测。KML定义了通用的ML API，可用于各种子系统；我们目前支持几个深度神经网络和决策树模型。我们设计了KML，使其可以嵌入到操作系统或存储系统的关键路径中。KML的CPU和内存开销都很低。KML可以同步或异步运行，使用户有能力权衡预测的准确性与开销。因此，我们将KML设计为在用户或内核级运行。用户可以在用户层开发和调试ML解决方案，然后上传相同的模型在内核中运行。在本文中，我们通过两个案例研究证明了KML的实用性。(i)动态适应读前值和(ii)自动设置NFS rsize值。在这两种情况下，我们的目标是在不断变化甚至混合的工作负载下，在几秒钟内适应这些值。本文有几个贡献：'")]),a._v(" "),r("p",[a._v("1.我们表明，"),r("strong",[a._v("轻量级ML确实可以成为存储系统和操作系统内的一流公民")]),a._v("；")]),a._v(" "),r("p",[a._v("2.我们通过同步或异步训练以及将训练卸载到用户层面的能力提供了灵活性；")]),a._v(" "),r("p",[a._v("3.我们引入了通用ML API的理念，可以扩展到支持许多额外的和未来的ML技术；")]),a._v(" "),r("p",[a._v("4.我们将KML应用于两个重要的优化问题（readahead和rsize值）；")]),a._v(" "),r("p",[a._v("5.我们使用多种复杂甚至混合的工作负载以及两种不同的存储设备来评估我们的解决方案。我们使用多种复杂甚至是混合的工作负载以及两种不同的存储设备来评估我们的解决方案。我们证明，读头的吞吐量提高了2.3倍，rsize提高了15倍。我们表明，在少数工作负载上训练出来的ML模型可以概括和优化从未见过的工作负载或设备的吞吐量。")]),a._v(" "),r("p",[a._v("最后，我们表明，KML的开销或内存占用可以忽略不计，使其适合嵌入存储系统中。第2节提供了简要的ML背景。第3节描述了KML的主要设计。第4节描述了我们的两个用例（readahead和NFS rsize）。第5节是对KML和两个用例的详细评估。我们在第6节中调查了相关的工作，并在第7节中得出结论。")]),a._v(" "),r("h1",{attrs:{id:"_2-background-and-motivation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-background-and-motivation"}},[a._v("#")]),a._v(" 2 Background and Motivation")]),a._v(" "),r("p",[a._v("​\t我们现在解释ML如何帮助存储系统，并解决有关将ML集成到存储系统和操作系统的潜在担忧。\n​\t我们的愿景。KML被设计用来取代操作系统级的存储系统启发式方法和系统参数调整。为此，KML应用程序首先通过"),r("strong",[a._v("收集放置在内核中的探针数据")]),a._v("来观察目标操作系统组件。从这些探针收集的数据被用来使用KML提供的功能来训练一个ML模型。然后，KML应用程序使用这个训练好的模型进行预测，并对系统进行调整。我们用观察和调整的范式来实现我们的用例，以减少ML模型所带来的开销。因此，我们没有对需要低延迟和可预测性能的存储组件施加额外的开销。我们在本文中详述的两个KML使用案例是ML模型的开发，(1)在每个磁盘和每个文件的基础上调整读头大小，(2)调整NFS的rsize值。我们选择这两个例子是因为 (i)他们的存储组件可以从微调参数中明显受益，(ii)他们需要适应各种不同的工作负载，这是提供最佳性能的关键，(iii)它证明了添加异步ML计算（见第5.5节）不会对关键I/O路径产生负面影响。")]),a._v(" "),r("p",[a._v("​\tML的意外行为和可解释性。当涉及到调整操作系统参数时，对ML应用的潜在意外行为和可解释性的关注是合理的，传统的启发式算法有明确的行为，通常以封闭式公式表示。一个ML算法在新的、不可预见的环境中使用时可能会表现得很不稳定，这可能会妨碍它所部署的系统的性能。由于长期以来困扰ML模型的可解释性问题，这种类型的问题是很难解决的。KML目前支持两种ML模型：神经网络和决策树。决策树做出的预测更容易解释，因为它们可以被表示为和可视化为连续的IF-THEN语句，将所考虑的特征范围一分为二。同时，深度神经网络在解释和验证方面具有相当大的挑战性。然而，最近的研究致力于改善ML的这些方面[38,67]。虽然我们计划在未来的工作中使用基于反馈的控制算法来解决可能的不稳定行为，但我们目前的重点是证明ML可以比现有的启发式方法更好地调整存储系统参数。在第5.3节，我们比较了我们建立的神经网络与决策树模型的性能和准确性。")]),a._v(" "),r("h1",{attrs:{id:"_3-kml-s-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-kml-s-architecture"}},[a._v("#")]),a._v(" 3 KML's Architecture")]),a._v(" "),r("p",[a._v("![image-20211127114945169](211127_KML Using Machine Learning to Improve Storage Systems.assets/image-20211127114945169.png)")]),a._v(" "),r("blockquote",[r("p",[a._v("a是纯内核态的, b是混合了用户态和内核态")])]),a._v(" "),r("p",[a._v("​\tKML的顶层设计选择。图1展示了我们建立的两种不同的操作模式。KML支持（a）内核内训练和推理；（b）用户空间离线训练和内核内推理。KML有一个高度模块化的设计：核心ML代码库由用户和内核空间共享。然而，操作模式（a）是为性能和准确性而设计的，而操作模式（b）则是为了支持ML开发的简便性。当手头的问题需要处理具有高收集率的数据时，我们建议使用模式（a）。模式（a）也允许训练和运行推理内核空间，而不需要事先收集和处理数据。模式（a）也可以实现更先进的ML技术（如强化学习）。")]),a._v(" "),r("p",[a._v("​\t相反，模式（b）帮助操作系统开发者在用户空间中用不同的特征、架构和超参数反复设计他们的ML模型，直到达到一个稳定和准确的模型。在用户空间中实验和调试模型要容易得多。一旦在用户空间建立了模型，同样的模型就可以加载到内核中而不需要修改。")]),a._v(" "),r("blockquote",[r("p",[a._v("现在的机器学习框架不能直接作用于内核态, 所以kml就是一个可以作用于内核态的机器学习框架")])]),a._v(" "),r("p",[a._v("​\t然而，另一个ML框架。为存储和操作系统开发新的解决方案和优化需要一个高效的设计，仔细考虑操作系统的需求。现代的ML库是为构建通用的ML方法而设计的，并且倾向于依赖许多第三方库（例如，在C++或Python中）来处理核心ML组件。这就是为什么将现有的ML框架移植到内核中运行，需要重新设计整个ML核心。我们没有移植一个相对庞大和复杂的现有ML框架，而是从头开始设计和实现了KML，实现了低开销、轻量级和为操作系统和存储系统高度定制的体验。")]),a._v(" "),r("h2",{attrs:{id:"_3-1-design-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-design-overview"}},[a._v("#")]),a._v(" 3.1 Design Overview")]),a._v(" "),r("p",[a._v("​\t易于开发和扩展。在图1(b)中，KML被编译并与内核和用户空间的应用程序相连。u-MLib.a和k-MLib.ko是由相同的KML源代码编译而成。我们为KML的开发API开发了一个包装层；因此，KML的核心代码库在用户和内核API中是统一的。有了这种抽象，就可以加快开发速度，简化调试，并促进可扩展性（见第3.3节）。虽然这些抽象使得为存储系统建立ML解决方案变得容易，但我们认识到，开发基于KML的解决方案需要对操作系统和存储系统内部有很好的了解。")]),a._v(" "),r("p",[a._v("​\t低开销。使ML方法在存储系统中实用的最关键的挑战之一是减少计算和内存的开销。ML解决方案有3个阶段，需要消耗大量的内存/CPU资源。(i) 推理，(ii) 训练和(iii) 数据处理和规范化。我们在第3.4节中详细介绍了我们为减少这些开销所做的设计选择。")]),a._v(" "),r("p",[a._v("​\t安全的编程模型。即使是整合到操作系统内核中的一行新代码，也会引入安全和安保方面的问题。出于这个原因，我们解释了如何")]),a._v(" "),r("h2",{attrs:{id:"_3-2-fundamental-of-core-ml-library"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-fundamental-of-core-ml-library"}},[a._v("#")]),a._v(" 3.2 Fundamental of Core ML Library")]),a._v(" "),r("p",[a._v("KML提供了建立和扩展ML模型的基元。这包括建立训练ML模型的算法（例如，反向传播，决策树归纳）和建立实现这些算法所需的数学函数。库的设计允许对库的功能进行无缝扩展。此外，通过确保所有ML功能在内核空间的相同行为，该库很容易在用户空间进行调试。")]),a._v(" "),r("p",[a._v("数学和矩阵操作。大多数机器学习算法都严重依赖基本的数学函数和矩阵代数。例如，神经网络分类器使用矩阵乘法/加法、softmax和指数化等函数。因此，我们实现了这些常见ML函数的内核版本。")]),a._v(" "),r("p",[a._v("层和损失函数的实现。我们可以把一个神经网络看作是由层和一个或多个损失函数组成的。许多这些构件在许多不同的神经网络架构中被使用。像全连接层、ReLU[57]或sigmoid是许多神经网络的基本组成部分，无论最终目标是什么；损失函数在许多应用中也是相当标准的。此外，层和损失函数都实现了两个主要功能，一个在推理（前向）阶段，另一个在反向传播阶段。在KML中实现新的层和损失函数需要为要添加的层/损失函数实现上述功能，以及一个初始化与层/损失有关的数据结构的函数（例如，全连接层中的权重矩阵）。")]),a._v(" "),r("p",[a._v("推理和训练。从这个角度来看，神经网络推理意味着从初始节点（提供输入的地方）开始，向结果节点（产生神经网络输出的地方）遍历DAG。KML实现了神经网络中使用的标准训练方法--反向传播[65]--其中的链式规则允许有效地计算梯度。KML包括随机梯度下降（SGD），它使用''来计算梯度。")]),a._v(" "),r("h2",{attrs:{id:"_3-3-kml-modular-design"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-kml-modular-design"}},[a._v("#")]),a._v(" 3.3 KML Modular Design")]),a._v(" "),r("p",[a._v("**内核空间的训练。**我们用readahead的用例来描述KML在内核训练和推理模式中的工作方式。图2显示了KML的框架（k-MLib.ko），一个KML应用（readahead.ko），以及目标存储组件（块设备和内存管理子系统）。黄色背景表示KML相关的组件。蓝色背景描述了目标存储组件，它是针对readahead问题的。绿线表示执行和数据流。编号的方框指的是组件之间的转换。")]),a._v(" "),r("p",[a._v("正如我们在第2节中提到的，我们基于观察和调整原则设计了我们的用例。在第一阶段，先行模块需要观察和收集数据。因为我们的目标组件是内存管理系统，所以先行模块开始从这个组件收集数据（图2（1））。然后，前置模块提取特征，并将其转移到KML框架中进行标准化处理（图2（2））。在数据处理和规范化阶段完成后，如果readahead模块被配置为训练，它将在规范化的数据上进行训练，执行流程在此处理周期结束。然而，如果前置模块被配置为推理，它将规范化的数据输入到前置神经网络模型中，并根据模型的预测结果调整目标组件。")]),a._v(" "),r("p",[a._v("KML应用程序优化目标组件的方式在很大程度上取决于问题和它的解决方案。在这个用例中，readahead模块使用blocklayer ioctl调用更新readahead大小（图2(5)）。此外，我们还开发了另一种调整readahead的方法，在每个文件的基础上改变readahead尺寸（图2（4））。当readahead模块在推理模式下运行时，执行流形成一个封闭的回路。在readahead模块改变readaheadsizes后，内存管理状态发生变化。当内存管理状态发生变化时，readahead神经网络模型的输入会发生变化，然后预测也会发生变化。如果用户想在内核中进行训练和推理，他们必须仔细控制训练和推理之间的切换。我们使用内核训练和用户空间的离线训练来实现先读用例。在这一节中，我们重点讨论了在KML的内核训练和推理模式下，执行和数据流是如何发生的。我们在第4.1节中提供了先读用例的特征和ML模型的细节。")]),a._v(" "),r("p",[a._v("在ML生态系统中，数据收集是一个关键部分。我们提供内核训练的原因是为了训练以高采样率收集的数据。以高精确度和高采样率追踪操作系统和存储系统是很有挑战性的[2]。然而，研究表明，像LTTng[54]这样的追踪工具可以将开销降低到5%。此外，由于数据丢失，追踪仍然可能是不准确的。LTTng在用户/内核循环缓冲区收集跟踪数据。这意味着，在大量的采样负载下，跟踪事件在被用户空间线程处理之前就可能被覆盖和丢失。虽然这个问题在我们的操作模式中仍然可能发生，但在内核空间的操作让我们对线程调度有更多的控制，以减少采样事件的损失。考虑到我们用例中需要的高数据采样率，将数据处理和规范化放在用户空间会比在内核中造成更多的数据损失。尽管如此，我们相信在某些情况下，用户-内核合作的设计可能是有益的。这就是为什么我们正在探索为那些不需要高数据采样率的用例实现用户/内核合作设计。由于KML的模块化结构，支持用户/内核合作的设计可以在不改变基本设计的情况下实现。")]),a._v(" "),r("p",[a._v("从长远来看，我们相信强化学习可以用来实现真正的自适应和学习存储系统[40]。因此，内核训练是实现这一目标的关键。KML目前的局限性之一是无法适应训练数据集中不存在的文件访问模式；强化学习将使这成为可能。")]),a._v(" "),r("p",[a._v("**用户空间的训练。**构建ML解决方案是一个迭代的开发生命周期。因此，为了找到基本特征并建立准确的神经网络模型，我们需要运行多重数据分析，并使用不同的架构和超参数训练/测试我们的ML模型。认识到内核训练的优势，在内核中建立这种迭代发展的生命周期是具有挑战性的。为了促进更快的模型开发和调试，KML提供了离线用户空间训练和内核推理操作模式（见图1（b））。由于KML的用户空间和内核空间库是由相同的API访问的，并由相同的统一代码库编译，因此将训练好的ML模型移植到内核空间进行推理是毫不费力的。")]),a._v(" "),r("p",[a._v("图3显示了readahead模型如何在这种操作模式下工作。图3显示了Radahead模型在这种操作模式下的工作情况。黄色突出显示的组件代表KML的具体实现。红色箭头表示离线数据收集和训练的路径。")]),a._v(" "),r("p",[a._v("首先，我们通过追踪记忆管理子系统来建立我们的训练数据集。我们使用Re-Animator[2]来收集目标存储组件的数据。接下来，我们进入了特征提取阶段。这是用户空间训练的有用之处，因为我们可以运行各种分析，测试不同的特征，并在不重新运行实验的情况下实现许多数据标准化技术。在我们确定了特征选择后，我们在用户空间训练和测试了readahead ML模型。训练阶段通常需要对不同的ML架构进行迭代，并使用多个超参数进行测试。当readahead ML模型准备好进行实时测试时，用户需要采取的唯一步骤是将readahead ML模型保存到一个KML特定的部署文件中，并将其加载到readahead内核模块。KML API提供了在内核中建立、训练和部署ML模型的所有必要功能（见表1的例子）。内核内执行的其余部分与KML在内核训练/推理模式下配置推理时的运行方式相同（图2）。")]),a._v(" "),r("p",[a._v("我们实现了一个包装层，将外部功能从KML中抽象出来。这样，KML就可以通过相同的API在用户和内核空间进行编译和使用。(i) 内存管理，(ii) 线程，(iii) 日志，(iv) 原子操作，以及(v) 文件操作。KML的开发API总共提供了30个函数来支持KML的功能。")]),a._v(" "),r("h1",{attrs:{id:"_4-use-cases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-use-cases"}},[a._v("#")]),a._v(" 4 Use Cases")]),a._v(" "),r("h2",{attrs:{id:"_4-1-use-case-readahead"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-use-case-readahead"}},[a._v("#")]),a._v(" 4.1 Use Case: Readahead")]),a._v(" "),r("p",[a._v("问题定义。预读（Readahead）是一种技术，它将额外的存储数据预设到操作系统的缓存中，以便在短期内使用。确定提前读取多少数据一直是个挑战：太少的提前读取需要更多的磁盘读取，而太多的提前读取则会用无用的数据污染缓存，两者都会影响性能。readahead值是存储系统参数的一个典型例子：虽然是可调整的，但它通常是固定的，并留在其默认值上。一些操作系统让用户通过fadvise和madvise进行提示，以帮助操作系统识别那些将被纯粹按顺序使用或随机使用的文件，但是这些提示往往不能为不同的、混合的或变化的工作负载找到最佳值。接下来，我们详细介绍一下我们的readahead神经网络设计。见图3。在实现了KML的基本ML功能后，我们把重点放在了readahead问题上：在面对动态工作负载时预测最佳readahead值。")]),a._v(" "),r("p",[a._v("研究这个问题。我们尝试运行4个不同的RocksDB[28]基准，每个基准有20个不同的readahead大小（8-1024），并试图确定在每个工作负载中产生最佳性能的readahead大小（以OPS/秒计）。这成为我们的训练数据，可以帮助预测其他工作负载和环境的读头值。这项调查显示，每个工作负载都有独特的行为，需要不同的读头大小来达到最佳性能。我们进一步调查了文件访问模式和性能之间的相关性。这使我们能够准确地确定建立预读问题模型所需信息的性质。")]),a._v(" "),r("p",[a._v("数据收集。我们使用LTTng[54]来收集跟踪数据，然后用它来寻找对读取超前问题有用的特征。我们收集了大多数的页面缓存追踪点[22]（例如，add_to_page_cache，writeback_dirty_page）。我们通过在一个NVM-SSD设备上运行多个10分钟的RocksDB[28]基准测试，收集并处理了超过20GB的痕迹。然后，我们挑选了感兴趣的特征，并决定在哪里调用钩子函数，这些钩子函数负责收集推理所需的信息（例如，结构页）。我们的钩子函数提供了三个重要的raw值。(1)从执行开始的时间差，(2)节点号，以及(3)在调用钩子函数的地方被访问的文件的页面偏移量。")]),a._v(" "),r("p",[a._v("数据预处理和规范化。数据预处理和归一化对于确保我们的预读神经网络的通用性至关重要。我们以一秒钟的时间间隔对输入数据进行总结。我们为模型选择的第一个输入特征是"),r("strong",[a._v("每秒钟发生的事务数量")]),a._v("。接下来的两个特征是计算出的累积移动平均值和页面偏移的累积移动标准差。另一个重要的特征是连续交易的平均绝对页面偏移差异。我们使用节点号来过滤RocksDB的文件访问。在我们将这些特征输入到我们的readhead神经网络之前，我们对每个特征都进行了Z-score归一化处理。")]),a._v(" "),r("p",[a._v("神经网络模型。我们将readahead问题建模为一个分类问题，并设计了一个具有三个线性层（隐藏层大小为5和15）的神经网络，在层之间使用sigmoid非线性，并使用跨熵损失法作为损失函数。我们使用SGD优化器[41,64]，在尝试了不同的值后，将学习率设定为0.01，动量设定为0.99；这些值在文献中很常见[4]。我们的Radahead神经网络对上述输入数据进行训练，并预测工作负载类型。我们对以下四种类型的RocksDB工作负载在NVM-SSD上进行训练，因为它们提供了随机和顺序操作的不同组合。(i) readrandom, (ii) readseq, (iii) readrandomwriterandom, and (iv) readreverse。类别频率很接近，表明分类精度是评估性能的一个好指标，最不频繁的类别为21.4%，最频繁的类别为28.8%。")]),a._v(" "),r("p",[a._v("我们通过k=10的k-fold交叉验证测试了神经网络在上述数据中的表现，发现其平均准确率达到了95.5%。我们还进行了分析以了解每个特征对分类性能的贡献。一种技术是在验证数据集中对感兴趣的特征进行随机排序，然后计算10倍验证性能[5]。使用Pearson相关分析[62]，我们发现有两个特征是高度相关的：页面偏移的累积移动标准差和累积移动平均值。交叉验证的结果是：交易数、页面偏移量的累积移动平均值、页面偏移量的平均绝对值差异和当前读取值，分别为69.6%、76.4%、42.6%和89.1%。这表明平均绝对页偏移差异是最重要的特征，因为随机化它的顺序使验证结果减少得最多（下降到42.6%）--其次是交易数、累积移动平均页偏移，最后是当前使用的readahead值。")]),a._v(" "),r("p",[a._v("在获得分类预测后，我们根据预测的工作负载类型，设置了根据经验确定的最佳读头大小。接下来，在第5.3节中，我们不仅对我们训练的工作负载进行了评估，还对未包括在训练数据中的工作负载和在不同设备上运行的工作负载（NVMe与SATASSD）进行了评估。我们还用运行在MySQL[60]上的TPC-H[76]查询来实验先发神经网络，以显示我们的先发神经网络在完全不同类型的工作负载上的表现，以及模型的可推广性。")]),a._v(" "),r("p",[a._v("决策树模型。我们还基于相同的特征和训练数据建立了一个决策树模型，用于工作负载类型分类。决策树包含59个节点，深度为9。我们用同样的程序测试了决策树的预测精度，并观察到它的平均预测精度为75.4%。如第二节所述，我们在KML中加入了决策树，因为决策树相对来说比神经网络更容易解释，而且运行速度相当快。我们使用与神经网络相同的程序来评估先读决策树（第5.3节）。")])])}),[],!1,null,null,null);e.default=v.exports}}]);