(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{538:function(t,a,_){"use strict";_.r(a);var v=_(42),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("A Comparative Analysis of Machine Learning Techniques for IoT Intrusion Detection")]),t._v(" "),_("p",[t._v("用于物联网入侵检测的机器学习技术的比较分析")]),t._v(" "),_("h1",{attrs:{id:"abstract"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),_("p",[t._v("​\t数字化转型面临着巨大的安全挑战。特别是，针对物联网（IoT）系统的网络攻击越来越多，说明需要对恶意网络活动进行可靠检测。本文介绍了对IoT-23数据集的九个恶意软件捕获的监督、无监督和强化学习技术的比较分析，考虑了二进制和多类分类的情况。开发的模型包括支持向量机（SVM）、极限梯度提升（XGBoost）、轻型梯度提升机（LightGBM）、隔离森林（iForest）、局部离群因子（LOF）和基于双深Q网络（DDQN）的深度强化学习（DRL）模型，适合入侵检测环境。LightGBM取得了最佳性能，紧随其后的是SVM。尽管如此，iForest对未知攻击显示了良好的结果，DRL模型显示了采用这种方法持续改进检测的可能好处。总的来说，获得的结果表明，所分析的技术很适合物联网入侵检测。")]),t._v(" "),_("h1",{attrs:{id:"_1-introduction"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-introduction"}},[t._v("#")]),t._v(" 1 Introduction")]),t._v(" "),_("p",[t._v("​\t数字化转型与"),_("strong",[t._v("物联网")]),t._v("（IoT）概念有关，它描述了由互联设备组成的分散和异构系统。这个领域融合了无线传感器网络、实时计算、嵌入式系统和执行技术[1]。")]),t._v(" "),_("p",[t._v("​\t"),_("strong",[t._v("工业物联网")]),t._v("（IIoT）是物联网的一个子领域，侧重于工业资产的相互连接和制造过程的自动化。由于物理和业务流程以及控制和信息系统的整合，IIoT正在弥合运营技术和信息技术之间的差距[2]。")]),t._v(" "),_("p",[t._v("​\t然而，以前孤立的系统和技术的融合面临着巨大的安全挑战。物联网设备通常有软件和通信协议的漏洞，此外还有薄弱的物理安全和资源限制[3], [4]。因此，恶意软件攻击对物联网构成了重大威胁。一个自我传播的恶意软件，如Mirai，可以损害大量的易受影响的设备，并建立一个僵尸网络，以发起若干网络攻击[5]。")]),t._v(" "),_("p",[t._v("​\t针对物联网系统的网络攻击可以分为两类：被动和主动。被动攻击不影响系统的运行，主要包括窃听和流量分析。另一方面，主动攻击可以从探测和中间人攻击到暴力攻击和拒绝服务（DoS）[6], [7]。")]),t._v(" "),_("p",[t._v("​\t由于物联网暴露于多种威胁，可靠的入侵检测是必不可少的。入侵检测系统（IDS）动态地监测环境，目的是识别可疑的活动，以便可以减轻可能的攻击[8]。将机器学习技术应用于IDS是一个很有前途的策略，以解决日益增多和日益复杂的网络攻击。")]),t._v(" "),_("p",[t._v("​\t所开发的工作在二进制和多类分类情况下处理了IoT-23数据集的九个恶意软件捕获。对三种不同类型的技术进行了分析和比较：监督的、无监督的和强化学习。开发的模型包括三种监督模型：支持向量机（SVM）、极限梯度提升（XGBoost）和轻型梯度提升机（LightGBM）；两种无监督模型：隔离森林（iForest）和局部离群因子（LOF）；以及一种基于双深Q网络（DDQN）的深度强化学习（DRL）模型，适合入侵检测环境。")]),t._v(" "),_("p",[t._v("​\t本文分为多个部分。第2节对以前的机器学习技术在入侵检测方面的工作进行了调查。第3节描述了所使用的数据集和模型，包括数据预处理步骤和评估指标。第4节介绍并分析了在每种情况下获得的结果。最后，第5节阐述了主要结论和未来可能的工作。")]),t._v(" "),_("h1",{attrs:{id:"_2-related-work"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-related-work"}},[t._v("#")]),t._v(" 2 Related Work")]),t._v(" "),_("p",[t._v("近年来，物联网入侵检测从研究角度引起了人们的关注。随着网络攻击和用于检测的技术的发展，越来越多的研究课题出现了。因此，了解以前工作的结果和结论是至关重要的。")]),t._v(" "),_("p",[t._v("Chaabouni等人[8]对截至2018年发表的研究进行了全面调查。作者回顾了以前针对物联网的研究，强调了所开发的机器学习模型的优势和局限性。")]),t._v(" "),_("p",[t._v("最近，Zolanvari等人[9]利用一个模拟工业工厂的测试平台来训练几个用于异常检测的模型。随机森林取得了最佳的整体性能，它的真阳性率（TPR）为97.44%。然而，只有SVM达到了0.00的假阳性率（FPR），代表没有错误警报。")]),t._v(" "),_("p",[t._v("Jan等人[10]提出使用SVM来检测影响物联网网络流量强度的攻击，这在DoS中是很常见的。在模拟数据集上分析了不同SVM内核的性能，只有三个特征：数据包到达率的最小值、最大值和中位值。尽管线性内核在较短的训练时间内达到了98.03%的准确率，但这种方法缺乏对不增加也不减少流量强度的攻击的检测能力'。")]),t._v(" "),_("p",[t._v('"Bakhtiar等人[11]采用了轻量级的C4.5算法，该算法创建了一个单一的决策树，通过直接分析设备中捕获的数据包来搜索DoS攻击。尽管在他们的测试平台上捕获的数据包100%正确分类，但对一个数据包进行分类所需的平均时间是0.0351秒。因此，只有18.15%的传输恶意网络活动被捕获，这揭示了基于数据包的分析的缺点。')]),t._v(" "),_("p",[t._v("Verma和Ranga[12]讨论了分类器组合，在CIDDS-001、UNSW-NB15和NSL-KDD数据集上比较了几种模型。进行了10倍交叉验证，分类和回归树算法获得了最高的平均准确率，即96.74%，该算法创建了一个决策树。然而，XGBoost达到了非常接近的96.73%的数值，并获得了最好的平均TPR，即97.31%。")]),t._v(" "),_("p",[t._v("Yao等人[13]提出使用LightGBM在物联网设备中进行轻量级分析，然后在其他设备中使用更多资源密集型模型。作者指出，由于LightGBM被嵌入了特征选择，传输数据所需的带宽就会减少。在他们的数据集上，LightGBM取得了93.2%的准确率和95.6%的基于流量分析的F1分数。")]),t._v(" "),_("p",[t._v("Eskandari等人[14]使用无监督模型来建立良性流量的基线，然后进行异常检测。LOF和iForest在其测试平台上与探测、暴力和DoS攻击进行了比较。iForest和LOF的宏观平均F1分数分别为92.5%和78.4%，这表明它们适合于检测未知攻击。")]),t._v(" "),_("p",[t._v("监督和非监督技术的主要缺点是，如果网络拓扑结构发生变化，包括增加新的设备，必须重新训练模型以考虑新的流量模式。为了解决根据新的模式和网络攻击不断调整模型的挑战，强化学习可以适应入侵检测的背景。")]),t._v(" "),_("p",[t._v("Gu等人[15]提出了一种基于熵的方法来不断优化异常检测的阈值。一个代理与网络环境互动，接受TPR和FPR作为每个选定阈值的奖励。它采用了Q-Learning，这是一个非政策性的学习者，因为无论代理的行动如何，它都会得到改善。")]),t._v(" "),_("p",[t._v("尽管不是针对物联网，Lopez-Martin等人[16]分析了几种技术的性能，这些技术将强化学习与深度学习相结合，以创建具有改进稳定性的DRL模型。所利用的代理直接预测了从环境中收到的网络流的类别。关于奖励函数，作者指出，对正确/不正确的预测采用简单的1/0奖励会带来更好的性能。最好的结果是由DDQN实现的，在NSL-KDD和AWID数据集上的F1分数分别为91.20%和93.94%。")]),t._v(" "),_("p",[t._v('据我们所知，以前的工作没有对IoT-23数据集上的监督、无监督和强化学习技术进行过比较分析。"')]),t._v(" "),_("h1",{attrs:{id:"_3-method"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-method"}},[t._v("#")]),t._v(" 3 Method")]),t._v(" "),_("p",[t._v("本节介绍了所使用的数据集和模型，以及所采用的数据预处理步骤和所考虑的评估指标。这项工作是在一台拥有16GB内存、8核CPU和6GB GPU的机器上进行的。执行工作依赖于Python编程语言和以下库。Numpy和Pandas用于一般数据处理，Scikit-learn用于实现SVM、iForest和LOF，Xgboost用于实现XGBoost，Lightgbm用于实现LightGBM，Tensorflow用于实现DRL模型。")]),t._v(" "),_("h2",{attrs:{id:"_3-1-dataset"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-dataset"}},[t._v("#")]),t._v(" 3.1 Dataset")]),t._v(" "),_("p",[t._v("IoT-23数据集[17]是由平流层研究实验室创建的，是公开的。它包括二十三个标记的恶意和良性网络流量的捕获，由2018年至2019年期间针对物联网设备的恶意软件攻击引起。这是一个非常有价值的数据集，因为它表现了真实的物联网网络流量模式，并提供了大量的标记恶意流量。从这23个捕获中，由于其独特的特点，有六个被选中。由于捕获-1-1显示了大量的记录流量和恶意和良性标签之间的最佳平衡，它被重新命名为1-1-full，并建立了三个较小的平衡子集：1-1-大，1-1-中和1-1-小。标签PartOfAHorizontalPortScan和C&C-FileDownload分别被简称为POAHPS和C&C-FD。")]),t._v(" "),_("p",[_("img",{attrs:{src:"211129_.assets/image-20211130103523701.png",alt:"image-20211130103523701"}})]),t._v(" "),_("h2",{attrs:{id:"_3-2-data-preprocessing"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-data-preprocessing"}},[t._v("#")]),t._v(" 3.2 Data Preprocessing")]),t._v(" "),_("p",[t._v("除了创建三个额外的子集，在数据可用之前还需要一个预处理阶段（见图1）。这个阶段适用于所有九个数据集，考虑到它们的不同特点。")]),t._v(" "),_("p",[t._v("一个相关的方面是，如果一个类别只包含一个样本，它不能同时用于训练和评估一个模型。因此，这个单独的样本必须被丢弃。当用于多类分类时，1-1-中和44-1数据集就是这种情况。关于1-1-medium，它只适合于二元分类，因为只剩下POAHPS的恶意类。因此，只有1-1-全、1-1-大、34-1、42-1和44-1在多类情况下被利用。")]),t._v(" "),_("p",[_("img",{attrs:{src:"211129_.assets/image-20211130103654248.png",alt:"image-20211130103654248"}})]),t._v(" "),_("h2",{attrs:{id:"_3-3-evaluation-metrics"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-evaluation-metrics"}},[t._v("#")]),t._v(" 3.3 Evaluation Metrics")]),t._v(" "),_("blockquote",[_("p",[t._v("采用的是通常的分类算法的衡量方式")])]),t._v(" "),_("p",[t._v("一个模型的性能可以通过"),_("strong",[t._v("混淆矩阵")]),t._v("报告的数值来评估。它报告了关于预测类别的真阳性（TP）、真阴性（TN）、假阳性（FP）和假阴性（FN）的数量。以二元分类为例，考虑的指标及其解释如下[18]，[19]。")]),t._v(" "),_("p",[t._v("准确率衡量正确分类的网络流量的比例。然而，即使在少数类别被忽略的情况下，也可以达到一个高值。例如，在没有检测到任何恶意活动的情况下，对良性流量不平衡的数据集也可以达到很高的准确性。")]),t._v(" "),_("p",[t._v("精确率衡量的是预测的攻击与实际攻击的比例，这表明模型预测的相关性。另一方面，与TPR相对应的召回率衡量的是正确预测的实际攻击的比例，反映了一个模型识别恶意活动的能力。")]),t._v(" "),_("p",[t._v("FPR是一个有价值的指标，因为它考虑了必须避免的错误警报。它衡量了被错误地预测为攻击的良性活动的比例，导致了不必要的缓解努力。")]),t._v(" "),_("p",[t._v("总的来说，最值得信赖的指标是F1分数，也称为F-measure。它计算了精确度和召回率的谐波平均值，同时考虑了FP和FN。因此，高的F1分数表明恶意活动被正确识别，而且误报率低。")]),t._v(" "),_("p",[t._v("这些指标，除了准确率，可以进行宏观平均，以平等对待所有类别。由于少数类被赋予了与代表性过高的类相同的相关性，所以宏观平均法很适合于不平衡的数据集。")]),t._v(" "),_("h2",{attrs:{id:"_3-4-supervised-learning-model"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-supervised-learning-model"}},[t._v("#")]),t._v(" 3.4 Supervised Learning Model")]),t._v(" "),_("p",[t._v("由于在调查工作中获得了有希望的结果，选择了三种监督技术在IoT-23数据集上进行评估。所开发模型的配置来自于对二类和多类分类情况下可能的超参数组合的网格搜索。")]),t._v(" "),_("p",[t._v("为了获得每个数据集和场景的最佳配置，进行了5倍的交叉验证。因此，一个模型用4/5的训练集进行训练，并在每次迭代中用剩余的1/5进行验证。由于其对不平衡数据的充分性以及对精确度和召回率的整合，宏观平均的F1分数被选为验证指标。")]),t._v(" "),_("p",[t._v("在优化之后，用完整的训练集对模型进行重新训练，并用评估集进行最终评估。")]),t._v(" "),_("p",[t._v('支持向量机。支持向量机[20]试图找到一个超平面，在𝑛维空间中成功地分离出两个类别，其中𝑛是特征的数量。尽管它本身只能进行二元分类，但还是采用了 "一对一 "方案来处理多类分类。表2总结了该配置。')])])}),[],!1,null,null,null);a.default=r.exports}}]);