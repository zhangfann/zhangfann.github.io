(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{544:function(_,a,v){"use strict";v.r(a);var t=v(42),s=Object(t.a)({},(function(){var _=this,a=_.$createElement,v=_._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("Assessing the Effectiveness of YARA Rules for Signature-Based Malware Detection and Classification")]),_._v(" "),v("p",[_._v("assessing_the_effectiveness_of_yara_rules_for_signature_based_malware_detection_and_classification")]),_._v(" "),v("p",[_._v("评估YARA规则对基于签名的恶意软件检测和分类的有效性")]),_._v(" "),v("h1",{attrs:{id:"摘要"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[_._v("#")]),_._v(" 摘要")]),_._v(" "),v("p",[v("strong",[_._v("恶意软件")]),_._v("经常"),v("strong",[_._v("使用混淆技术")]),_._v("或稍作修改，以"),v("strong",[_._v("躲避反病毒软件")]),_._v("和恶意软件分析工具的签名检测。传统上，为了确定一个文件是否是恶意的，并确定样本是什么类型的恶意软件，需要计算文件的加密哈希值。YARA是一个较新的、灵活的恶意软件检测解决方案，它可以根据文件的二进制模式创建规则来识别和分类恶意软件。在本文中，作者将批判性地评估YARA规则对基于签名的恶意软件检测和分类的有效性，并与其他方法（包括加密和模糊散列）进行比较。")]),_._v(" "),v("h1",{attrs:{id:"_1-简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[_._v("#")]),_._v(" 1 简介")]),_._v(" "),v("p",[_._v("基于签名的检测被杀毒软件和恶意软件分析软件使用，通过比较已知恶意软件的文件签名库和存储在计算机上的文件签名来检测恶意软件[1]。在撰写本报告时，大多数现代恶意软件使用混淆和规避技术来逃避检测[2]。这降低了使用加密散列的传统基于签名的检测方法的有效性，因为恶意软件已经被修改，使其文件签名与已知的恶意软件签名不匹配。此外，新开发的恶意软件将不会被检测到，因为它的签名不会被列入恶意软件签名数据库，直到它被网络安全专家识别。因此，需要为基于签名的检测提供替代和更灵活的方法，以便能够检测到经过修改或混淆的恶意软件。")]),_._v(" "),v("p",[_._v("基于签名的检测的替代方法包括"),v("strong",[_._v("模糊散列")]),_._v("和"),v("strong",[_._v("YARA规则")]),_._v("。在下一节中，作者将定义和解决这些较新的检测和分类恶意软件的方法的优势和局限性，以及传统的加密散列。在第三节中，将通过比较不同方法的恶意软件检测和分类结果来评估不同方法的有效性。第四节将提供改进YARA规则的建议。最后，第五节将提供关于YARA规则对基于签名的恶意软件检测的有效性的结论，此外还有未来的工作。")]),_._v(" "),v("h1",{attrs:{id:"_2-基于签名的恶意软件的分类和检测"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-基于签名的恶意软件的分类和检测"}},[_._v("#")]),_._v(" 2 基于签名的恶意软件的分类和检测")]),_._v(" "),v("p",[v("em",[_._v("A. Cryptographic Hashing")])]),_._v(" "),v("p",[_._v("基于签名的检测被杀毒软件和加密散列是一种传统的方法，通过为文件生成一个独特的十六进制字符字符串（或散列）来检测和分类恶意软件[3]。这使得已知的恶意软件能够在计算机上被检测和分类，因为生成的文件哈希值与恶意软件签名数据库进行比较，其中包括签名所涉及的恶意软件类型的信息。")]),_._v(" "),v("p",[_._v("尽管加密散列法可以验证一个文件是否与已知的恶意软件相同，但它"),v("strong",[_._v("只能检测到完全匹配的文件")]),_._v("。如果文件中的一个比特被修改，文件的哈希值将是不同的。因此，这意味着文件之间的相似性将不会被检测到[4]。因此，加密散列法容易受到已被修改或混淆的恶意软件以及新型恶意软件的影响。此外，这意味着恶意软件的签名库需要不断更新'。")]),_._v(" "),v("p",[v("em",[_._v("B. Fuzzy Hashing")])]),_._v(" "),v("p",[_._v("模糊散列涉及将"),v("strong",[_._v("一个文件分为多个块，每个块都计算出一个散列值，然后将其串联起来形成最终的散列值")]),_._v("。当文件的模糊哈希值被比较时，会"),v("strong",[_._v("计算出相似度百分比")]),_._v("[5]。对一个文件的多个块进行散列，可以检测不同文件之间的相似性，因为两个不同文件中相同的块会有相同的块散列值。")]),_._v(" "),v("p",[_._v("模糊散列技术也利用距离算法来衡量不同文件块的相似程度。一种模糊散列技术，SSDEEP，使用Damerau-Levenshteindistance函数来确定不同文件块匹配所需的字符或比特的插入、替换、删除和转置的数量[6][7]。")]),_._v(" "),v("p",[_._v("使用模糊散列技术进行基于签名的恶意软件检测为检测恶意软件提供了更大的灵活性，因为经过混淆或修改的恶意软件菌株很可能与恶意软件的原始菌株相似。这导致高相似度百分比，这表明一个文件是恶意的。相反，模糊散列的一个问题是，它需要一个恶意软件模糊散列库来确定一个文件是否与恶意软件有相似之处。")]),_._v(" "),v("p",[_._v("与加密散列相比，模糊散列确定了一个文件与其他恶意软件的相似程度。因此，它不太容易受到恶意软件混淆技术的影响，而加密散列法只能检测到精确匹配。")]),_._v(" "),v("p",[v("em",[_._v("C. YARA rules")])]),_._v(" "),v("p",[_._v("YARA能够创建规则，根据二进制和文本数据的模式对恶意软件进行识别和分类[8]，其中规则可以利用通配符和正则表达式来检测这些模式[9]。此外，YARA规则提供了更深入的恶意软件信息，因为恶意软件描述和元数据可以被添加到规则中。此外，YARA提供可编程性，因为任何人都可以创建或调整规则。即便如此，创建有效的YARA规则需要恶意软件分析方面的专业知识，因为薄弱的YARA规则会导致恶意软件逃避检测[10]。")]),_._v(" "),v("p",[_._v("YARA规则在检测混淆的恶意软件方面也很有效，因为许多规则是为了检测不同的混淆能力，如包装[11]。此外，除了识别文件结构的规则外，还创建了检测反调试功能的规则。")]),_._v(" "),v("p",[_._v("总的来说，YARA规则提供了更多的可定制性，与模糊散列相比，可以提供更多的恶意软件类别信息。然而，模糊散列法更灵活，因为它提供了一个文件与恶意软件相似程度的百分比得分。与加密散列法相比，YARA规则和模糊散列法都提供了更多的灵活性，更有可能检测到新的恶意软件菌株，或使用混淆技术的恶意软件。")]),_._v(" "),v("h1",{attrs:{id:"_3-各种方式的评估"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-各种方式的评估"}},[_._v("#")]),_._v(" 3 各种方式的评估")]),_._v(" "),v("p",[v("strong",[_._v("A.Methodology")])]),_._v(" "),v("p",[_._v("为了评估YARA规则在检测和分类恶意软件方面的有效性，我们进行了一个对照实验。这涉及到将YARA规则应用于恶意软件样本，以确定一个规则是否与样本相匹配，以及如果匹配的规则给出了正确的恶意软件分类。对相同的恶意软件样本生成模糊和加密哈希值，并得出恶意软件检测和分类结果。")]),_._v(" "),v("p",[_._v("加密和模糊散列都有许多不同的散列算法。在实验中，SHA-256是选择用于加密散列的算法，因为它是识别恶意软件的常见散列算法。SSDEEP是一种快速、行业标准的算法，被选择用于模糊散列[12]。")]),_._v(" "),v("p",[_._v("15个恶意软件样本从GitHub上的恶意软件库[13]下载到一个虚拟机上，YARA规则库[11]也是如此。从GitHub下载的恶意软件样本是众所周知的，并且都使用了某种形式的混淆。我们从VirusTotal恶意软件库下载了另外15个恶意软件样本，用于企业客户和学生。这些样本相对较新，是在2021年11月上传到存储库的。"),v("strong",[_._v("使用两组不同的样本，一组是较早的样本，另一组是最近的样本，目的是评估不同方法对不知名的新恶意软件进行检测和分类的有效性。")])]),_._v(" "),v("p",[_._v('实验中使用了来自MalwareBazaar的超过410,000个SSDEEP恶意软件签名，与恶意软件样本进行比较。在实验中，任何相似度为50%或以上的匹配都被标记为 "检测为恶意"。')]),_._v(" "),v("p",[_._v("VirusTotal被用来确定从GitHub恶意软件样本生成的加密哈希是否是恶意的，以及它们是否被正确分类，而MalwareBazaar则被用于VirusTotal的样本。之所以使用MalwareBazaar，是因为这些恶意软件样本已经被VirusTotal打上了指纹。")]),_._v(" "),v("p",[v("strong",[_._v("B.Result")])]),_._v(" "),v("p",[_._v("从表一中显示的实验定量结果可以看出，加密散列法可以正确检测和分类GitHub存储库中的所有恶意软件样本。然而，这是因为SHA-256哈希值已经为这些恶意软件样本生成，因为它们是已知的，并且已经被威胁猎手分析过。")]),_._v(" "),v("p",[v("img",{attrs:{src:"211201_.assets/image-20211202102109752.png",alt:"image-20211202102109752"}})]),_._v(" "),v("p",[_._v("相反，在MalwareBazaar中没有发现为VirusTotal恶意软件样本生成的加密哈希值。这是因为VirusTotal最近才对这些恶意软件样本进行了分析和上传（2021年11月），并正确识别和分类了这些恶意软件。这表明，加密散列法能有效地检测已知的恶意软件，但不能检测新的或未知的恶意软件。")]),_._v(" "),v("p",[_._v("其他研究也评估了加密散列的有效性。Sarantinos等人的研究结果是对已知恶意软件样本生成的加密散列的检测率为99.88%[4]。这进一步表明，加密散列对检测已知的恶意软件非常有效，但它不会检测到不知道的恶意软件。因此，加密散列法的恶意软件检测结果不应该与其他方法进行比较，除非使用未知的恶意软件样本[4]。然而，使用加密散列法的已知恶意软件的分析结果仍然包括在内，以确定恶意软件是否被正确分类。")]),_._v(" "),v("p",[_._v("虽然使用SSDEEP的模糊散列方法检测到的恶意软件样本和分类比加密散列少，但它确实为许多恶意软件样本提供了与其他已知恶意软件的多种相似性匹配。除此之外，另一个恶意软件样本有10个匹配项，相似度为33%。这验证了恶意软件使用混淆和修改技术来躲避检测，因此模糊散列方法对于检测混淆的或恶意软件家族的新菌株是有用的，而加密散列不能检测文件之间的相似性，除非它们是相同的。")]),_._v(" "),v("p",[_._v("与模糊散列结果相比，YARA规则的结果相当相似，尽管结果表明模糊散列在分类恶意软件方面更有效，而YARA规则在检测恶意软件和恶意能力方面更有效。然而，YARA规则在分类恶意软件方面仍然有效，因为规则匹配可以提供关于恶意软件能力和结构的丰富信息，这可以从图1中恶意软件样本的YARA规则匹配中看出。")]),_._v(" "),v("p",[v("img",{attrs:{src:"211201_.assets/image-20211202102127989.png",alt:"image-20211202102127989"}})]),_._v(" "),v("p",[_._v('图1显示了Keilhosmalware的YARA规则匹配。许多规则，如 "键盘记录器"，"maldoc_find_kernel32_base_method_1 "和 "IsPacked "表明恶意活动，同时也提供了一些关于它如何工作的分类和背景。在这种情况下，我们可能会认为，恶意软件样本是一个恶意文件格式的键盘记录器，它使用包装技术来混淆自己。')]),_._v(" "),v("p",[_._v('虽然一些规则，如 "SEH_Save "可能只给恶意软件分析师提供背景，但一旦YARA规则在互联网上被搜索到，通常会有更多关于规则目的的信息。例如，"SEH_Save "表明该恶意软件样本具有反调试功能[14]。这意味着YARA规则能够有效地提供分类信息以及恶意软件的潜在战术、技术和程序（TTP）。')]),_._v(" "),v("p",[_._v("下表显示了至少与一个YARA规则相匹配或具有1%或更高的SSDEEP相似性分数的恶意软件样本的数量。这些结果被包括在内，以显示模糊散列和YARA规则可以为恶意软件样本提供的背景，即使它没有被分类或检测为恶意。")]),_._v(" "),v("p",[v("img",{attrs:{src:"211201_.assets/image-20211202102142102.png",alt:"image-20211202102142102"}})]),_._v(" "),v("p",[_._v("从表二中的结果来看，SSDEEP哈希值和YARA规则都有恶意软件或规则匹配，但没有提供足够的证据来检测恶意软件样本。YARA规则的匹配率最高，达到73%，**这表明YARA规则在为混淆的和新的恶意软件提供某种程度的分类方面是有效的。**相反，SSDEEP散列法只有33%的匹配率。")]),_._v(" "),v("h1",{attrs:{id:"_4-对于改进yara规则的建议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-对于改进yara规则的建议"}},[_._v("#")]),_._v(" 4 对于改进YARA规则的建议")]),_._v(" "),v("p",[_._v("评估结果表明，YARA规则在检测恶意软件方面是有效的，但它们没有像SSDEEP模糊散列方法那样正确分类恶意软件样本。因此，为了提高YARA规则在检测和分类恶意软件方面的灵活性，可以进行的改进是在YARA规则中使用模糊散列的功能。这一改进已经由Naik等人提出，将使YARA规则能够根据恶意软件的结构相似性来检测恶意能力，而标准的YARA规则无法做到这一点[15]。")]),_._v(" "),v("p",[_._v("另一个可以对YARA规则进行改进的是更多的文档，特别是对检测和分类恶意软件的流行规则的描述。这是因为描述并不总是写在用于评估的规则上，这有助于对恶意软件样本进行分类并提供背景信息'。")]),_._v(" "),v("h1",{attrs:{id:"_5-结论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-结论"}},[_._v("#")]),_._v(" 5 结论")]),_._v(" "),v("p",[v("strong",[_._v("A.Overall Conlusion")])]),_._v(" "),v("p",[_._v("综上所述，从实验结果和二次研究中可以看出，与加密和模糊散列相比，YARA规则对基于签名的混淆和新恶意软件的检测和分类是有效的。虽然加密散列在检测和分类已知恶意软件方面很有效，但YARA规则可以识别未被指纹化的混淆恶意软件和新的恶意软件菌株的恶意能力，而加密散列只能检测已知恶意软件。")]),_._v(" "),v("p",[_._v("虽然模糊散列技术可以找到文件中的相似性来检测被混淆的恶意软件，但它需要一个恶意软件模糊散列的存储库。因此，它可能无法识别全新类型的恶意软件。相比之下，YARA规则可以在没有恶意软件签名数据库的情况下检测恶意能力。")]),_._v(" "),v("p",[_._v("从表一的结果来看，YARA规则检测到的恶意软件样本最多。这意味着YARA规则是检测恶意软件的最有效的基于签名的技术，但它仍然只检测到57%的恶意软件样本。这强调了除了基于签名的检测之外，还需要基于行为的恶意软件检测。然而，考虑到恶意软件样本是混淆的或新的毒株，YARA规则仍然是一个有效的方法。")]),_._v(" "),v("p",[_._v("总的来说，密码学和模糊散列在检测和分类恶意软件方面都很有效。然而，YARA规则对于基于签名的恶意软件检测是最有效的，因为它们可以检测到被混淆的和未知的恶意软件，同时为其提供足够的背景，以给出某种程度的分类。")]),_._v(" "),v("p",[v("strong",[_._v("B.Future Work")])]),_._v(" "),v("p",[_._v("'在本文中，我们评估了YARA规则对基于签名的恶意软件检测的有效性，与加密和模糊散列相比较。虽然这些方法是众所周知的，但还有其他替代方法用于基于签名的检测。其中一种方法是导入散列，根据文件导入的库函数及其顺序计算散列值，可用于检测和分类恶意软件[16]。在未来，本文所涉及的评估可以扩展到包括和评估基于签名的恶意软件检测和分类的导入散列法'。")])])}),[],!1,null,null,null);a.default=s.exports}}]);