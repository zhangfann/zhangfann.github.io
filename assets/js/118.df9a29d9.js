(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{499:function(e,n,s){"use strict";s.r(n);var t=s(42),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("writing_specifications_in_a_distributed_system_using_Ivy")]),e._v(" "),s("p",[e._v("Personal Blog of Bodun (Edward) Hu. CS PhD student at University of Texas at Austin. Operating system......")]),e._v(" "),s("p",[e._v("Before we jump into writing specifications in a distributed setting, we first define what a specification is. I take the definition from the magnificent "),s("a",{attrs:{href:"http://mcmil.net/wordpress/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ken McMillan"),s("OutboundLink")],1),e._v(": a specification is a "),s("em",[e._v("statement")]),e._v(".")]),e._v(" "),s("p",[e._v("A statement describes an abstract view of a program. The view itself is often at an interface, which hides or abstracts internal states. A specification is stated in terms of two elements:")]),e._v(" "),s("ul",[s("li",[e._v("Assumption: properties of the environment the system relies on")]),e._v(" "),s("li",[e._v("Guarantee: properties that most hold "),s("em",[e._v("if")]),e._v(" the assumption(s) is met")])]),e._v(" "),s("p",[e._v("The way we write specifications is through an abstract program that observes or monitors all program events. This abstract program is able to remember the execution history of program being monitored, and decides, at any given moment, whether an action is allowable according to the specification.")]),e._v(" "),s("p",[e._v("One way to implement this abstract monitor program is to use guarded command form:")]),e._v(" "),s("ul",[s("li",[e._v("Let (A) be a set of program actions")]),e._v(" "),s("li",[e._v("An event (e(x_1,\\ …,\\ x_n)) is an action (e\\in A) with parameter values (x_1,\\ …,\\ x_n) of the right types for (e).")]),e._v(" "),s("li",[e._v("Let (S) be a set of states and (s_0 \\in S) be the initial state.")]),e._v(" "),s("li",[e._v("Guarded command set (G) is specified as:")])]),e._v(" "),s("p",[e._v("[e(V):\\ \\gamma (S,V) \\rightarrow {S := \\tau(S, V)}]")]),e._v(" "),s("p",[e._v("It means if a guarded command (\\gamma) determines a given event (e) satisfies certain specifications with parameter (V) under state (S), then we accept the code and then deterministically update the state with a function (\\tau).")]),e._v(" "),s("p",[e._v("The observation (E) of system is going to be a finite sequence of events, which corresponds to the system behavior, denoted as (e_0(V_0)…e_{n-1}(V_{n-1})). A run of (E) is a state sequence (s_0\\ …s_n) such that for (i\\in 0\\ … n- 1), (\\gamma(s_i, V_i)) is true and (s_{i+1} = \\tau(s_i, v_i)). Observation (E) is accepted by the specification iff it has a run. We can test whether an observation is accepted by just executing the guarded commands. In layman’s term, if all guarded commands accepts the their corresponding event at a given time, then the sequence events must satisfy our specification and should be accepted.")]),e._v(" "),s("p",[e._v("Now let’s replicated file as an example. Out first informal attempt to the specification for “append” operation would be:")]),e._v(" "),s("ul",[s("li",[e._v("Assumption: network is ordered and non-duplicating")]),e._v(" "),s("li",[e._v("Guarantee: if no further append requests, eventually replicas are equal")])]),e._v(" "),s("p",[e._v("However, the problem with this specification is that this is a liveness property, meaning that we can’t practically test such property by observing a finite sequence of events. Therefore, we resort to a different safety specification we can test:")]),e._v(" "),s("ul",[s("li",[e._v("If all sent messages are delivered, the two replicas are identical.")])]),e._v(" "),s("p",[e._v("Now we convert liveness to safety by explicitly defining the moment hen the eventuality should hold.")]),e._v(" "),s("p",[e._v("Liveness property means a good thing eventually happens. A liveness property can be "),s("em",[e._v("refuted")]),e._v(" by finite execution. Safety property means a bad thing never happens. A safety property can always be refuted by a finite execution.")]),e._v(" "),s("p",[e._v("To see how replicated file specification plays in action, we use the example given in "),s("a",{attrs:{href:"http://mcmil.net/wordpress/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prof. McMillan"),s("OutboundLink")],1),e._v("’s presentation. The code is written in "),s("a",{attrs:{href:"https://microsoft.github.io/ivy/language.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ivy"),s("OutboundLink")],1),e._v(" and is pretty self-explanatory. In this demo we only have two processes.")]),e._v(" "),s("p",[e._v("To install Ivy, simply execute "),s("code",[e._v("virtualenv ivyenv && source ivyenv/bin/activate && pip install ms-ivy")]),e._v(". This is tested on Ubuntu 18.04 LTS and may vary slight on other distros.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("#lang ivy1.8\n\ninclude numbers\ninclude collections\ninclude network\n\nglobal {\n    alias byte = uint[8]\n    instance file : vector(byte)\n    type pid = {0..1}\n    instance net : tcp.net(byte)\n}\n\nprocess host(self:pid) = {\n    export action append(val:byte)\n    import action show(content:file)\n    instance sock : net.socket\n    var contents : file\n\n    after init{\n        contents := file.empty;\n    }\n\n    implement append {\n        contents := contents.append(val);\n        sock.send(host(1-self).sock.id, val);\n        show(contents);\n    }\n\n    implement sock.recv(src:tcp.endpoint, val:byte) {\n        contents := contents.append(val);\n        show(contents);\n    }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br")])]),s("p",[e._v("Then we form our specification based on the guarantee that if all sent messages are delivered, the two replicas are identical. The specification is equivalent to the "),s("em",[e._v("guarded command")]),e._v(" we’ve talked about earlier.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("specification {\n    var msg_count : nat\n\n    after init {\n        msg_count := 0;\n    }\n\n    after host.sock.send(self:pid, dst:tcp.endpoint, val:byte) {\n        msg_count := msg_count + 1;\n    }\n\n    after host.sock.recv(self:pid, src:tcp.endpoint, val:byte) {\n        msg_count := msg_count - 1;\n        ensure msg_count = 0 -> host(0).contents.eq(host(1).contents);\n    }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("p",[e._v("We wrote the above code into a file named "),s("code",[e._v("append.ivy")]),e._v(" and we generate the testing code using "),s("code",[e._v("ivyc target=test append.ivy")]),e._v(". Then we run the code using "),s("code",[e._v("ivy_launch append.ivy")]),e._v(".")]),e._v(" "),s("p",[e._v("Interestingly, the program yields an error message:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('`ivy_shell`; ./append "[[0,{addr:0x7f000001,port:49124}],[1,{addr:0x7f000001,port:49125}]]"\n> host.append(1,251)\n< host.show(1,[251])\n< host.show(0,[251])\n> host.append(1,46)\n< host.show(1,[251,46])\n> host.append(0,183)\n< host.show(0,[251,183])\n< host.show(0,[251,183,46])\n< host.show(1,[251,46,183])\nassertion_failed("append.ivy: line 49")\nappend.ivy: line 49: error: assertion failed\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("p",[e._v("What happens is the program generates tests that randomizes message arrival times and we can see a delivered message may arrive after its target sends another message, therefore creating corrupted file contents.")]),e._v(" "),s("p",[e._v("Notice that here we are actually running on real network to find counter examples, the downside is the test may be arbitrary long depending on the randomized testing cases. Instead, we will use bounded model checking (BMC) to test if the specification is correct. This way we can reply purely on the logic of our specification instead of running on the real network. The Ivy checker uses "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Z3_Theorem_Prover",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z3 Theorem Prover"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("BMC construct a boolean formula that is satisfiable if and only if the underlying state transition system can realize a finite sequence of state transitions that reaches certain states of interest.")]),e._v(" "),s("p",[e._v("To tell Ivy using bounded model checking, we add the following lines to "),s("code",[e._v("append.ivy")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("axiom host(0).sock.id ~= host(1).sock.id\n\nattribute method=bmc[10]\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("Executing "),s("code",[e._v("ivy_check detailed=false append.ivy")]),e._v(", we see an error message:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> host.append(1,80)\n< host.show(1,[80])\n> host.append(0,64)\n< host.show(0,[64])\n> host.sock.recv(0,{tcp.endpoint.addr:...,tcp.endpoint.port:...},80)\n< host.show(0,[64,80])\n> host.sock.recv(1,{tcp.endpoint.addr:...,tcp.endpoint.port:...},64)\n< host.show(1,[80,64])\nappend.ivy: line 49: error: assertion failed\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("Sometimes BMC can help us find the error faster because it is systematically checking all possible actions. However, increasing the number of steps for the BMC can result in the exploration space growing exponentially, so we are going to use some combination of BMC and randomized test cases.")]),e._v(" "),s("p",[e._v("全文完")]),e._v(" "),s("p",[e._v("本文由 "),s("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[e._v("简悦 SimpRead"),s("OutboundLink")],1),e._v(" 优化，用以提升阅读体验")]),e._v(" "),s("p",[e._v("使用了 全新的简悦词法分析引擎 beta，"),s("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看"),s("OutboundLink")],1),e._v("详细说明")])])}),[],!1,null,null,null);n.default=a.exports}}]);