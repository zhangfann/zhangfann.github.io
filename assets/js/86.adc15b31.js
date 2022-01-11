(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{468:function(s,a,e){"use strict";e.r(a);var t=e(42),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"https://pica.zhimg.com/0e8fe57617db5ac2853988be43d990cd_xs.jpg?source=1940ef5c",alt:"img"}})]),s._v(" "),e("p",[s._v("果冻虾仁")]),s._v(" "),e("p",[e("strong",[s._v("先谈一谈开销，再谈一谈其他的容易踩坑的地方")])]),s._v(" "),e("h2",{attrs:{id:"c-和-stl-中常被忽略的开销开销"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-和-stl-中常被忽略的开销开销"}},[s._v("#")]),s._v(" "),e("strong",[s._v("C++ 和 STL 中常被忽略的开销开销")])]),s._v(" "),e("h3",{attrs:{id:"stl-容器的-clear-的时间复杂度不是-o-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stl-容器的-clear-的时间复杂度不是-o-1"}},[s._v("#")]),s._v(" STL 容器的 clear 的时间复杂度不是 O(1)")]),s._v(" "),e("p",[s._v("可能很多人都不在意，在使用 STL 容器的时候，潜意识里面将 clear() 成员函数视为常量时间复杂度 O(1) 的。但是其实不然。我感觉可能是很多人都知道对于 vector 而言，clear() 之后，修改了 size() 的结果，不影响 capacity() 的结果，因而得出 clear() 只是修改了某个标记，是常量时间复杂度的错误结论。")]),s._v(" "),e("p",[s._v("其实 C++ 标准明确指出不管是序列容器（比如 vector）还是关联容器（比如 unordered_map) 其 clear() 成员函数都是线性时间复杂度 O(n) 的。因为只要执行了 clear() 就需要对其存储的元素调用析构函数，这个析构操作显然是逐个析构的。因而时间复杂度是 O(n)。")]),s._v(" "),e("p",[s._v("当然在实践中，也有个例。比如当 vector 存储基本数据类型或 POD 类型（比如基本数据类型构成的 struct）的时候，由于其元素类型没有析构函数（也不需要析构函数），加之 vector 内部连续存储的特性，编译器的实现是可以在常量时间完成 clear() 的。")]),s._v(" "),e("p",[s._v("Linear in"),e("a",{attrs:{href:"http://www.cplusplus.com/vector::size",target:"_blank",rel:"noopener noreferrer"}},[s._v("size"),e("OutboundLink")],1),s._v("(destructions).\nThis may be optimized to"),e("em",[s._v("constant complexity")]),s._v("for*"),e("a",{attrs:{href:"http://www.cplusplus.com/is_trivially_destructible",target:"_blank",rel:"noopener noreferrer"}},[s._v("trivially-destructible types"),e("OutboundLink")],1),s._v("*(such as scalar or PODs), where elements need not be destroyed")]),s._v(" "),e("p",[s._v("http://www.cplusplus.com/reference/vector/vector/clear/")]),s._v(" "),e("p",[s._v("当然仅限于 vector 存储基本数据类型和 POD 类型的时候，编译器可能有此优化。如果 vector 存储的是其他类型的对象，或者是其他容器（比如 list、map、unordered_map）都是没办法做这个优化的！")]),s._v(" "),e("p",[s._v("所以在工程实践中，我们要思考是否每次都需要及时的 clear 掉一个容器。比如在后台服务中，有些容器类型的变量在命中某些条件下要进行 clear()，后续逻辑中判断容器是空的，就不在用之进行某些逻辑（比如遍历它，进行某种操作）。其实也可以用一个 bool 标记来存储后续是否需要遍历该容器，待到本次请求的响应返回给 client 之后，再来清理这个容器也不迟。")]),s._v(" "),e("p",[e("strong",[s._v("当然这种操作在容器的元素个数不多的时候是完全没有必要的")]),s._v("，会丧失一些可读性。不过这种思考还是需要有的。如果元素过多的时候，或许可能是性能优化的一个小点。")]),s._v(" "),e("h3",{attrs:{id:"auto-替代手写类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auto-替代手写类型"}},[s._v("#")]),s._v(" auto 替代手写类型")]),s._v(" "),e("p",[s._v("这个其他答主也讲到了，比如在基于范围的循环中使用 auto&，如下这个例子其出自**《Effictive Modern C++》**的条款 5（那个答主可能也是参考的这个条款）。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("std::unordered_map<std::string, int> m;\nfor (const std::pair<std::string, int>& p: m) {\n  ... \n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("对于 unordered_map 而言，其中的元素类型是：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("std::pair<const std::string, int>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如上的遍历方法，就会产生一个临时对象，有拷贝的开销。")]),s._v(" "),e("h3",{attrs:{id:"减少隐性的重复操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#减少隐性的重复操作"}},[s._v("#")]),s._v(" 减少隐性的重复操作")]),s._v(" "),e("p",[s._v("从 map 中查找 value。我们一般怎么写呢？比如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// dict_data是一个unordered_map<string, double>\n// vec是一个vector<string>\ndouble sum = 0;\nfor (auto& key : vec) {\n    if (dict_data.count(key)) {// 或dict_data.count(key) > 0\n        sum += dict_data[key]; // 或 sum += dict_data.at(key);\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("或者：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("for (auto& key : vec) {\n    if (dict_data.find(key) != dict_data.end()) {\n        sum += dict_data[key]; // 或 sum += dict_data.at(key);\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("其实 map 或 unordered_map 的 [] 或者 at() 函数内部也会进行查找。不管这次查找的开销大或不大吧。既然我们已经查找过一次 key 是否存在了，那么就吧结果存储下来就好了。为什么要二次查询呢？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("for (auto& key : vec) {\n    auto it = dict_data.find(key) != dict_data.end();\n    if () {\n        sum += it->second;\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("当然你可能觉得这样丑点，所以不这样写…… 但我的原则一向是不要进行重复操作。")]),s._v(" "),e("p",[s._v("对于 vector 也有 at() 所以也有人这样写：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("if (index < v.size()) {\n    auto& e = v.at(index);\n    // do sth for e\n    ... \n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("这个 at 内部同样会检查是否越界，在越界的时候抛异常。所以对于 vec，你直接 [] 就好了。vector 的 [] 几乎没有开销，和那些关联如期不同。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("if (index < v.size()) {\n    auto& e = v[index];\n    // do sth for e\n    ... \n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("或者直接不检查，而是加 try catch")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("try {\n    ...\n    auto& e = v.at[index];\n    // do sth for e\n    ... \n} catch (...) {\n\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("当然代码更丑一点。。而且我不鼓励在生产环境中使用会抛异常的函数。因为 C++ 不同于 java。java 如果有未捕获或 throw 的异常，编译都过不了。而 C++ 则不管。所以如果你的代码不小心抛出了异常，而没被 catch，那么就可能让程序 core dump！")]),s._v(" "),e("h3",{attrs:{id:"sort-给定义对象排序-可能存在对象拷贝的开销"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sort-给定义对象排序-可能存在对象拷贝的开销"}},[s._v("#")]),s._v(" sort 给定义对象排序，可能存在对象拷贝的开销")]),s._v(" "),e("p",[s._v("STL 中的 sort 应该是一个高频使用的函数了。比如对于一个 vector 进行排序。当 vector 存储的时候自定义类型的时候，我们也都知道给 sort 传入一个比较算子，或者在外部重载一下 operator< 增加一个自定义类型的比较功能。")]),s._v(" "),e("p",[s._v("但是大家可能会忽略，当你的自定义类型没有移动构造函数的时候，调用的是拷贝构造函数！当然如果你的类型，比较简单（比如只是保护 2 个基本数据类型）那么拷贝构造的开销也不大。但如果你的自定义类型比较复杂的时候，拷贝构造的开销显然大于移动构造函数。")]),s._v(" "),e("p",[s._v("所以当你的最好给你的自定义对象添加一个移动构造函数，另外为了使 sort 能够成功通过编译，在定义完移动构造函数以后，还要再定义一个移动赋值函数。")]),s._v(" "),e("p",[s._v("当然如果你不想这么麻烦的话，那么"),e("strong",[s._v("用 vector 存储该类型的指针")]),s._v("，然后传入一个该类型指针进行比较大小的 lambda 表达式，会是更简单的解决方案。只是这样对于老代码来说可能是侵入性的。而直接修改类定义的方法，则对老代码透明。")]),s._v(" "),e("h3",{attrs:{id:"如果要排序-不要无脑使用-sort"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果要排序-不要无脑使用-sort"}},[s._v("#")]),s._v(" 如果要排序，不要无脑使用 sort()")]),s._v(" "),e("p",[s._v("如果你想着拥有 N 个元素的 vector 排序，然后取出 K 个元素。那么这是典型的 TopK 问题。不要无脑的使用 sort。STL 的算法中还有一个 partial_sort，只帮助你找到最大（或最小）的 K 个元素，而不需要把整个 vector 变得有序。")]),s._v(" "),e("h3",{attrs:{id:"shared-ptr-修改指向时有时是有开销的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shared-ptr-修改指向时有时是有开销的"}},[s._v("#")]),s._v(" shared_ptr 修改指向时有时是有开销的")]),s._v(" "),e("p",[s._v("shared_ptr 用起来和普通指针类似，还不要手工管理释放内存。")]),s._v(" "),e("p",[s._v("我们应该大量使用 shared_ptr 替代裸指针（普通指针），以规避各种各样的内存问题。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("shared_ptr<T> p1 = make_shared<T>();\n...\nshared_ptr<T> p2 = make_shared<T>();\n...\nshared_ptr<T> p3 = p1;\n...\nshared_ptr<T> p4 = p2;\n...\np4 = p1;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("上述代码和我们直接用裸指针是类似的：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("T* p1 = new T;\nT* p2 = new T;\nT* p3 = p1;\nT* p4 = p2;\np4 = p1;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("裸指针可以随意修改指向，可以随意赋值。其开销可以忽略不计。然而 shared_ptr 则不然。")]),s._v(" "),e("p",[s._v("**当然我这里要讲的并不是 shared_ptr 这个对象复制的开销。**这个开销很小。shared_ptr 一般实现中里面就是存了两个指针成员，shared_ptr 对象的 size 也就是普通指针的 2 倍而已。复制开销也不大。")]),s._v(" "),e("p",[s._v("我这里说的是，当一个已经存在的 shared_ptr 修改指向的时候：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("shared_ptr<T> p4 = p2;\n...\np4 = p1;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("如果 p4 是最后一个持有旧对象的 shared_ptr 的话，那么当 p4 = p1 的时候，不止是触发 shared_ptr 成员变量复制操作。还会触发旧对象的析构操作！这不难理解，我们都知道 shared_ptr 在所管理的数据对应的引用计数清零的时候，会触发析构操作。只是很多时候我们都把智能指针当普通指针用的时候，常常会忽略这一操作的潜在开销。")]),s._v(" "),e("p",[s._v("当 T 类型比较大的时候，比如里面有一个 map/vector，存储了几十万，几百万条数据。这个看似简单的 shared_ptr 的赋值操作，开销特别大。主要就是这个析构导致的（释放大内存也有开销）。")]),s._v(" "),e("p",[s._v("对于大对象的析构，我们要慎之又慎。大内存释放有时不仅是耗时问题，而且会让 CPU IDLE 下降。影响服务的整体性能（同期的其他请求处理耗时也增加了）。根据业务需要，有时我们不需要真的析构掉这个对象，只需要 clear 掉它（内存不释放），后续再复用该对象。也就是类似 “对象池” 的思想。避免对象创建和析构的开销。又或者我们需要搞一个独立的线程，想办法把这些需要析构的大对象，在不影响服务请求处理耗时的独立线程中，进行定期清理。等等。")]),s._v(" "),e("h2",{attrs:{id:"stl-中容易踩坑的副作用-持续补充"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stl-中容易踩坑的副作用-持续补充"}},[s._v("#")]),s._v(" "),e("strong",[s._v("STL 中容易踩坑的副作用（持续补充……）")])]),s._v(" "),e("h3",{attrs:{id:"clear-不会清空-vector-的内存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clear-不会清空-vector-的内存"}},[s._v("#")]),s._v(" "),e("strong",[s._v("clear() 不会清空 vector 的内存")])]),s._v(" "),e("p",[s._v("尽管 clear() 会调用 vector 中元素的析构函数，但是并不会释放掉元素所占用的内存。这并不难理解，因为在 vector 为空的时候，我们也可以用 reserver() 函数来预分配内存。所以 vector 所占的内存并不会随着元素的释放而释放。如果你想在 vector 生命周期结束之前及时释放掉 vector 的内存，请：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vector<int>().swap(v);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("用一个匿名的 vector 对象来和已有的 vector 对象 v 来 swap。虽然 swap 是交换，但由于涉及匿名对象，反过来 swap 是无法编译通过的：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("v.swap(vector<int>()); // 编译失败\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"size-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#size-1"}},[s._v("#")]),s._v(" size()-1")]),s._v(" "),e("p",[s._v("如何遍历一个 vector？当然在 C++11 以后我能手写 for-range 循环了。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("for (auto& e: v) {\n    // do sth for e\n    ...\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("但是有时候我们在循环内需要下标信息，而不仅仅是元素本身。所以就变成传统的下标遍历了。有两种写法，各位看官看看是否有区别？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("for (int i = 0; i < v.size(); ++i) {\n    auto& e = v[i]\n    // do sth for e and i\n    ...\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("另外一种：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("for (int i = 0; i <= v.size() - 1; ++i) {\n    auto& e = v[i]\n    // do sth for e and i\n    ...\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("看起来好像一样？实则不然。因为 size() 返回是无符号整型，当 vector 是空的时候，size() 返回 0，无符号的 0 减去 1，得到的是一个极大的正数。因而在 vector 是空的时候，第二种写法会陷入死循环！")]),s._v(" "),e("h3",{attrs:{id:"多线程一写多读-stl-容器也不是线程安全的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多线程一写多读-stl-容器也不是线程安全的"}},[s._v("#")]),s._v(" 多线程一写多读 STL 容器也不是线程安全的")]),s._v(" "),e("p",[s._v("好吧，关于 STL 容器的线程安全问题有点老生常谈了。我在另外一篇回答中有写过一些：")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.zhihu.com/question/29987589/answer/1483744520",target:"_blank",rel:"noopener noreferrer"}},[s._v("C++ STL 容器如何解决线程安全的问题？"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("大家都知道**并发多个线程去写 STL 容器（“写” 指的是插入新元素）**不是线程安全的，可能会触发 core dump。但可能有时候会忽略其实并发的多个线程中，只有一个线程写，其他线程都是读的时候也不是线程安全的。比如 vector，尽管只有一个线程来写入，但是如果他触发了扩容了。那么其他线程尽管是只读这个 vector 的，其中的迭代器也会失效。对于 unordered_map 也是类似，单线程不停插入元素的话，可能触发 rehash，导致其他线程中在 map 中 find 的过程中 core dump。")])])}),[],!1,null,null,null);a.default=r.exports}}]);