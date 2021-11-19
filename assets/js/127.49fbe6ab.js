(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{508:function(v,_,a){"use strict";a.r(_);var t=a(42),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"软件测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软件测试"}},[v._v("#")]),v._v(" 软件测试")]),v._v(" "),a("p",[v._v("软件测试是在规定的条件下对程序进行操作，以发现错误，对软件质量进行评估。")]),v._v(" "),a("h2",{attrs:{id:"软件测试的目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软件测试的目的"}},[v._v("#")]),v._v(" 软件测试的目的")]),v._v(" "),a("p",[v._v("(1)发现软件的缺陷和错误")]),v._v(" "),a("p",[v._v("(2)保证软件的质量，确保能够满足用户以及产品的需求")]),v._v(" "),a("h1",{attrs:{id:"测试工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试工作流程"}},[v._v("#")]),v._v(" 测试工作流程")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/18/huLDjyYXWsBE8GA.jpg",alt:"v.jpg"}})]),v._v(" "),a("p",[v._v("需求评审 -> 技术评审 -> case评审 -> 开发自测以及冒烟测试 -> 整体提测（集成测试） -> 回归测试 -> 系统测试 -> 验收测试")]),v._v(" "),a("p",[v._v("需求评审, 用例评审,")]),v._v(" "),a("p",[v._v("对于一个测试用例")]),v._v(" "),a("p",[v._v("开发人员首先自测, 如果无问题, 则测试下一用例,")]),v._v(" "),a("p",[v._v("如果有问题, 则在打包前, 完成开发验证,")]),v._v(" "),a("p",[v._v("开发人员完成自测后, 交由测试人员进行测试,")]),v._v(" "),a("p",[v._v("如果发现问题, 首先将问题环境提供给开发定位问题,")]),v._v(" "),a("p",[v._v("如果确定时问题, 则由测试人员给开发人员提单跟踪,")]),v._v(" "),a("p",[v._v("开发人员在验证完成后, 将问题单转给项目经理,")]),v._v(" "),a("p",[v._v("最终打包时, 由测试人员再次进行验证")]),v._v(" "),a("h1",{attrs:{id:"测试方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试方法"}},[v._v("#")]),v._v(" 测试方法")]),v._v(" "),a("h2",{attrs:{id:"按阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按阶段"}},[v._v("#")]),v._v(" 按阶段：")]),v._v(" "),a("p",[v._v("单元测试, 对单个程序, 类, 函数, 过程进行的测试")]),v._v(" "),a("p",[v._v("集成测试, 在单元测试的基础上, 组成子系统或系统, 进行测试")]),v._v(" "),a("p",[v._v("系统测试, 在真实的系统运行中, 检查完成的程序系统能否满足用户需求")]),v._v(" "),a("p",[v._v("验收测试, 项目接受方, 根据约定的验收文档对整个系统进行测试, 确定是否满足验收要求")]),v._v(" "),a("h2",{attrs:{id:"按手段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按手段"}},[v._v("#")]),v._v(" 按手段：")]),v._v(" "),a("p",[v._v("黑盒测试、不考虑系统内部结构, 内部特性的情况下, 对系统进行功能性测试")]),v._v(" "),a("p",[v._v("白盒测试、基于系统内部知识(代码, 分支, 逻辑, 路径, 条件)进行的测试")]),v._v(" "),a("p",[v._v("灰盒测试, 不仅关注输入输出, 而且观察程序内部的情况")]),v._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[v._v("#")]),v._v(" 其他：")]),v._v(" "),a("p",[v._v("冒烟测试、对基本功能测试, 保证基本功能走通")]),v._v(" "),a("p",[v._v("回归测试, 对原有代码修改后, 对新修改部分进行测试")]),v._v(" "),a("h1",{attrs:{id:"黑盒测试用例设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#黑盒测试用例设计"}},[v._v("#")]),v._v(" 黑盒测试用例设计：")]),v._v(" "),a("p",[v._v("等价类划分法、把程序的输入域划分为若干部分（子集），然后从每一个子集中选取少数具有代表性的数据作为测试用例")]),v._v(" "),a("p",[v._v("边界值分析法、对输入或输出的边界值进行测试")]),v._v(" "),a("p",[v._v("错误推测法、根据经验或直觉推测程序中可能存在的各种错误，从而有针对性地编写检查这些错误的测试用例的方法")]),v._v(" "),a("p",[v._v("因果图法、根据输入条件的组合、约束关系和输出条件的因果关系，分析输入条件的各种组合情况，从而设计测试用例的方法")]),v._v(" "),a("p",[v._v("正交试验分析法、从全面试验中挑选出部分具有代表性的水平组合进行试验，并对结果进行分析从而找出最优的水平组合")]),v._v(" "),a("p",[v._v("流程分析法, 将软件系统的某个流程看成路径，用路径分析的方法来设计测试用例")]),v._v(" "),a("h1",{attrs:{id:"白盒测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#白盒测试"}},[v._v("#")]),v._v(" 白盒测试：")]),v._v(" "),a("p",[v._v("语句覆盖、每条语句至少执行一次")]),v._v(" "),a("p",[v._v("判定覆盖、每个判断的每个分支至少执行一次")]),v._v(" "),a("p",[v._v("条件覆盖、每个判段的每个条件应取到的各种可能的值")]),v._v(" "),a("p",[v._v("条件组合覆盖、每个判定中各条件的每一种组合至少出现一次")]),v._v(" "),a("p",[v._v("判定/条件覆盖、同时满足判断覆盖条件覆盖")]),v._v(" "),a("p",[v._v("路径覆盖, 使程序中每一条可能的路径至少执行一次")]),v._v(" "),a("h1",{attrs:{id:"bug分级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug分级"}},[v._v("#")]),v._v(" BUG分级")]),v._v(" "),a("ol",[a("li",[v._v("按BUG严重程度划分等级：\n"),a("ul",[a("li",[v._v("blocker：系统无法执行，崩溃，或严重资源不足，应用模块无法启动或异常退出，无法测试，系统不稳定。常见的：严重花屏、内存泄漏、用户数据丢失或破坏、系统崩溃/死机/冻结、模块无法启动或异常退出、严重的数值计算错误、功能设计与需求严重不符、服务器500等。")]),v._v(" "),a("li",[v._v("critical：影响系统功能或操作，主要功能存在严重缺陷，但不会影响到系统的稳定性。常见的有：功能未实现，功能错误、系统刷新错误、数据通讯错误、轻微的数值计算错误、影响功能及洁面的错别字或拼写错误。")]),v._v(" "),a("li",[v._v("major：界面、性能缺陷、兼容性。常见的有：操作界面错误、边界条件错误、提示信息错误，长时间操作无法提示、系统未优化、兼容性问题。")]),v._v(" "),a("li",[v._v("minor/trivial：易用性及建议性的问题。")])])]),v._v(" "),a("li",[v._v("按BUG处理优先级划分：\n"),a("ul",[a("li",[v._v("immediate：马上解决")]),v._v(" "),a("li",[v._v("urgent：急需解决")]),v._v(" "),a("li",[v._v("high：高度重视，有时间马上解决")]),v._v(" "),a("li",[v._v("low：在系统发布前解决或确认可以不用解决")])])])]),v._v(" "),a("h1",{attrs:{id:"测试的工具学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试的工具学习"}},[v._v("#")]),v._v(" 测试的工具学习")]),v._v(" "),a("h2",{attrs:{id:"抓包工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抓包工具"}},[v._v("#")]),v._v(" 抓包工具")]),v._v(" "),a("h3",{attrs:{id:"fidller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fidller"}},[v._v("#")]),v._v(" Fidller")]),v._v(" "),a("h2",{attrs:{id:"性能测试工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能测试工具"}},[v._v("#")]),v._v(" 性能测试工具")]),v._v(" "),a("h3",{attrs:{id:"jmeter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmeter"}},[v._v("#")]),v._v(" Jmeter")]),v._v(" "),a("h3",{attrs:{id:"loadrunner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loadrunner"}},[v._v("#")]),v._v(" LoadRunner")])])}),[],!1,null,null,null);_.default=r.exports}}]);