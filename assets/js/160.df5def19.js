(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{547:function(t,a,n){"use strict";n.r(a);var r=n(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("No Free Lunch: Balancing Learning and Exploitation at the Network Edge")]),t._v(" "),n("h1",{attrs:{id:"abstract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),n("p",[t._v("在过去的几年里，深度强化学习（DRL）范式因其对许多不同场景的极端适应性而被广泛用于5G及以上的网络优化。然而，收集和处理学习数据需要花费大量的通信和计算资源，这在当时的网络文献中经常被忽略。在这项工作中，我们分析了在一个资源受限的系统中的学习成本，定义了一个优化问题，在这个问题中，训练一个DRL代理使得改善资源分配策略成为可能，但也减少了可用资源的数量。我们的模拟结果表明，在评估网络边缘的DRL方案时，学习成本可能是至关重要的，假设一个无成本的学习模型会导致大大高估了性能。")]),t._v(" "),n("h1",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("下一代移动网络的协调超出了人类设计的算法的能力，因为它的特点是多目标和快速动态，几类流量具有高度具体的活动模式和服务质量（QoS）保证[1]。在这种情况下，机器学习对于允许"),n("strong",[t._v("网络协议动态地适应不同的场景而不需要手动重新配置整个系统")]),t._v("是至关重要的[2]。特别是，强化学习（RL）原则与深度学习的结合，也被称为深度强化学习（DRL）[3]，是优化5G及以上网络的最有希望的工具之一[4]。")]),t._v(" "),n("p",[t._v("在复杂环境中"),n("strong",[t._v("训练深度强化学习模型的计算成本仍然很高")]),t._v("[5]，而且由于未来移动网络的快速变化，不能总是提前进行训练。因此，支持"),n("strong",[t._v("网络边缘的在线训练")]),t._v("，利用持续学习的方法，是5G及以后系统的根本[6]。在这种情况下，根据移动边缘计算（MEC）范式，训练更新要么直接在边缘节点上执行，要么被卸载到更强大的云服务器上，减少本地资源的消耗，但需要传输大量的数据。")]),t._v(" "),n("p",[t._v("在MEC场景中，训练成本产生了一个基本的权衡：用新的经验更新DRL模型可以改善学到的策略，提高其在目标任务中的效率，但也会从该任务中减少一些资源。无视这种权衡，认为训练是一种自由行为，可能会产生严重的后果，降低应该被优化的系统的性能[7]。机器学习研究界开始意识到这个问题[8]，关注模型压缩和轻量级学习技术，以减少边缘硬件的负担[9]，并在设计神经网络时考虑学习的成本，以便在资源有限的设备上运行[10]。特别是，联合学习(Federated Learning)方法可以通过以分布式方式进行目标算法的训练来减少学习系统的计算负荷[11]。在过去的几年中，已经提出了许多框架来减少FL的计算和通信成本：关于这些主题的更深入的回顾，我们提请读者参考[12]，[13]。")]),t._v(" "),n("p",[t._v("据我们所知，在未来的网络场景中，DRL技术的资源效率是一个相对未被探索的话题[14]，因为文献中的大多数研究仍然忽略了训练的成本，甚至在在线应用中也将学习过程与优化过程分开。在这项工作中，我们试图对学习的成本进行明确的建模，定义一个平衡学习和系统优化的优化问题。我们的目标是确定学习策略，使系统在训练期间的性能最大化，同时考虑到学习本身的成本。我们的结果表明，调整训练更新的数量是优化MEC系统的一个关键因素，而考虑一个具有自由学习行动的理想情况可能会导致对实际性能的显著高估。")]),t._v(" "),n("p",[t._v("本文的其余部分组织如下。第二节介绍了学习成本问题，然后在第三节中应用于一个网络切片的使用案例。第四节介绍了我们在线学习的结果，第五节是本文的结论，并提出了一些未来工作的可能途径。")])])}),[],!1,null,null,null);a.default=e.exports}}]);