(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{412:function(_,v,t){"use strict";t.r(v);var i=t(42),l=Object(i.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("hr"),_._v(" "),t("ul",[t("li",[_._v("title: “如何看待 Rust 这门语言？”")])]),_._v(" "),t("hr"),_._v(" "),t("ul",[t("li"),_._v(" "),t("li",[t("p",[t("strong",[_._v("C++ 程序员视角下的 Rust 语言")])])]),_._v(" "),t("li",[t("p",[_._v("自上世纪 80 年代初问世以来，C++ 就是一门非常重要的系统级编程语言。到目前为止，仍然在很多注重性能、实时性、偏硬件等领域发挥着重要的作用。")])]),_._v(" "),t("li",[t("p",[_._v("C++ 和 C 一样，可以通过指针直接操作内存，这给了程序员的编程提供了相当大的自由度。但指针就是一把双刃剑，给了程序员灵活、自由地表达设计意图的同时，也给程序埋下了非常大的隐患。")])]),_._v(" "),t("li",[t("p",[_._v("C/C++ 程序员一定被各种程序崩溃、线程死锁、程序行为不正确等问题折磨过，要知道这些都是程序中最严重的 Bug 了。 这些问题有时还非常灵异，有时很快就可以复现问题，有时很久都难以出现一次。但只要程序哪怕出现过一次这样的问题，也就说明了自己的程序是存在漏洞和隐患的。")])]),_._v(" "),t("li",[t("p",[_._v("程序员肯定是非常害怕这样的程序被发布并部署到实际生产环境中的，这无疑给自己埋了一个雷啊。如果这是非常重要的软件（如火箭飞行控制程序、银行交易系统等），那么一旦问题发生，后果是难以预料的。")])]),_._v(" "),t("li",[t("p",[_._v("为了避免此类问题的发生，C/C++ 程序员通常需要付出更多时间、精力、耐心去学习更底层的计算机系统的工作原理和技术细节；在软件设计和编程时，还需要非常地细致和小心，反复琢磨自己的程序是否存在低级错误和逻辑漏洞等。")])]),_._v(" "),t("li",[t("p",[_._v("但有时候，即使程序员非常小心，错误还是难以避免的。因为 C 和 C++ 根本没有提供一种对这类问题的检查和保证机制，而完全相信程序员自己去解决这类问题。 实践证明，这根本是靠不住的。这对编写程序的 C/C++ 程序员有着非常高的要求，即使经验非常丰富的 C/C++ 程序员，也不一定敢保证自己的程序完全不会存在这类问题吧。")])]),_._v(" "),t("li",[t("p",[_._v("既然人不一定靠的住，那么就要在机器层面提供强力的检查和保证机制去规范程序员遵守一定的规则以避免这类问题的发生。")])]),_._v(" "),t("li",[t("p",[_._v("针对内存安全问题，目前大部分的高级编程语言基本都是内置垃圾回收机制。这的确避免了不安全的内存操作，减少了程序员的心智负担，但这是通过性能的代价换来的，也就注定了这类编程语言的使用范围是受限的，对硬件的性能是有一定要求的。")])]),_._v(" "),t("li",[t("p",[_._v("C++ 很早就已经意识到这样的问题，也提出了自己的方案，即基于 RAII 机制的智能指针，没有走内置垃圾回收机制的路子。")])]),_._v(" "),t("li",[t("p",[_._v("RAII 机制是 C++ 问世以来就一直存在的，本质上是 C++ 对象的确定性析构机制，即对象在其生命周期结束时，析构函数保证会被自动调用。")])]),_._v(" "),t("li",[t("p",[_._v("传统的裸指针无法承载资源所有权机制和生命周期管理的实现，但增加一层抽象的智能指针则可以，核心思想是用栈上对象管理堆内存 / 内核资源：")])]),_._v(" "),t("li",[t("ul",[t("li",[_._v("std::unique_ptr"),t("T",[_._v("      表达了独占所有权机制，无论什么时候都只有唯一的对象持有资源的所有权，但所有权可以通过移动语义转让的")])],1),_._v(" "),t("li",[_._v("std::shared_ptr"),t("T",[_._v("      表达了共享所有权机制，通过引用计数机制，保证可以有多个对象同时持有某个资源的所有权，只有在引用计数为 0 时，资源才会被释放")])],1),_._v(" "),t("li",[_._v("std::weak_ptr"),t("T",[_._v("      则完全是配合 std::shared_ptr"),t("T",[_._v(" 而存在的，不影响所有权，但却有方法可以知道自己手上的资源是否还存活 /      有效，这是裸指针做不到的")])],1)],1)])]),_._v(" "),t("li",[t("p",[_._v("如果说 C++ 在内存安全上做出了自己的努力，那么在线程并发安全上则努力程度还不够，这部分基本还是需要靠程序员自己去保证的。")])]),_._v(" "),t("li",[t("p",[_._v("而 Rust 则是从一开始就在内存安全和线程安全上下足了功夫，同时没有抛弃性能。Rust 自始至终给自己的定位就是一门系统级编程语言。")])]),_._v(" "),t("li",[t("p",[_._v("Rust 和 C++ 一样，没有走内置垃圾回收机制的路子，而是从语言的内在机制上去解决 C 和 C++ 内存安全和线程安全的痛点。")])]),_._v(" "),t("li",[t("p",[_._v("Rust 通过更强大和完善的类型系统和所有权机制，引入了如下核心语言内在机制：")])]),_._v(" "),t("li",[t("ul",[t("li",[_._v("值的唯一所有权")]),_._v(" "),t("li",[_._v("默认内置基本类型的值拷贝语义")]),_._v(" "),t("li",[_._v("默认的对象的移动语义（所有权转移）")]),_._v(" "),t("li",[_._v("默认不可变（只读）内存访问")]),_._v(" "),t("li",[_._v("所有权不可变引用")]),_._v(" "),t("li",[_._v("唯一所有权可变引用")]),_._v(" "),t("li",[_._v("跨函数引用的生命周期标注")]),_._v(" "),t("li",[_._v("不支持空指针")])])]),_._v(" "),t("li",[t("p",[_._v("结合 Rust 核心库和标准库提供的 Send 和 Sync trait、智能指针、Option"),t("T",[_._v(" 等，保证程序的内存安全和线程安全。需要注意的是，Rust 对于线程安全，只能做到避免数据竞争，无法做到避免条件竞争；另外，在 Rust 中，把引用更习惯称为借用（borrow），以强调借用所有权之意。")])],1)]),_._v(" "),t("li",[t("p",[_._v("Rust 标准库提供了几种与 C++ 类似的智能指针：")])]),_._v(" "),t("li",[t("ul",[t("li",[_._v("Box"),t("T",[_._v("，相当于      C++ 中的 std::unique_ptr"),t("T")],1)],1),_._v(" "),t("li",[_._v("Rc"),t("T",[_._v("，相当于      C++ 中的 std::shared_ptr"),t("T")],1)],1),_._v(" "),t("li",[_._v("Weak"),t("T",[_._v("，相当于      C++ 中的 std::weak_ptr"),t("T")],1)],1),_._v(" "),t("li",[_._v("Arc"),t("T",[_._v("，线程安全的      Rc"),t("T")],1)],1),_._v(" "),t("li",[_._v("......")])])]),_._v(" "),t("li",[t("p",[_._v("Rust 的类型系统在很大程度上借鉴了 Haskell 语言的类型系统，而在内存安全的所有权机制上则是充分吸收 C++ 的 RAII 机制思想。")])]),_._v(" "),t("li",[t("p",[_._v("Rust 和 C++ 一样，也是支持面向对象、泛型编程、函数式编程等多种编程风格 / 范式的编程语言。")])]),_._v(" "),t("li",[t("p",[_._v("从面向对象编程的角度来看，Rust 和 C++ 在对象概念的语言表达形式上存在明显的不同。")])]),_._v(" "),t("li",[t("p",[_._v("对 C++ 程序员来说，类的概念是深入人心，构造函数和析构函数不可或缺。但 Rust 是没有类的概念的，对等的概念则是强化到了结构体（struct）上了，可能是认为 C++ 中 class 和 struct 是差不多的，只是默认访问权限上不同。")])]),_._v(" "),t("li",[t("p",[_._v("在 Rust 中，struct 的定义则纯粹表达了 C++ 中类的数据成员部分，而完全不会看到任何函数的影子，当然数据成员的访问权限默认也是私有的； C++ 类的成员函数，在 Rust 中是在 impl 块中单独进行描述的。")])]),_._v(" "),t("li",[t("p",[_._v("但和 C++ 类最大的不同，感觉还在构造函数和析构函数上。在 Rust 中，是不支持构造函数的，而析构函数则是需要通过实现 Drop 这个 trait 来表达的。Rust 的惯例是在 struct 的 impl 块中实现一个 New 函数来模拟 C++ 的构造函数。当然，这个函数的调用是需要程序员自己去手动调的，Rust 编译器不会有任何额外的支持；而实现 Drop 的 struct，Rust 编译器则会保证在其对象的生命周期结束后，drop 函数一定会被自动调用。这样才能保证实现 RAII 机制。")])]),_._v(" "),t("li",[t("p",[_._v("Rust 中的类成员函数和类静态成员函数的区别在于第一个参数是不是 & self 或 & mut self，有则表示是类的成员函数，而没有则是类的静态成员函数。在 Rust 中，self 相对于 C++ 中的 this，区别在于 C++ 类成员函数的 this 是不需要程序员自己写出来的，由编译器生成，而在 Rust 中则需要程序员自己写出来。而使用 & self 的成员函数，则相当于 C++ 中 const 成员函数；使用 & mut self，则是 C++ 中非 const 的成员函数。")])]),_._v(" "),t("li",[t("p",[_._v("Rust 中 trait 是非常重要的概念，它承担了类似 C++ 中通过纯虚类表达接口的意图。Rust 中强调组合优先继承的思想，不支持 struct 级的继承，但支持 trait 的接口继承，这和 Java 等编程语言一样。")])]),_._v(" "),t("li",[t("p",[_._v("和 C++ 中虚函数类似，Rust 中 trait 中负责定义接口函数的原型，也可以为接口函数提供默认的实现。特别的是，Rust 也支持不提供任何接口的 trait，这样的 trait 则退化为标签的概念。在 Rust 中，作为标签使用的 trait 很常见，例如核心库中提供的 Copy、Send、Sync 等 trait 就是这样，主要用于给 Rust 编译器标识出某种语义，便于编译器进行相关的类型安全检查。")])]),_._v(" "),t("li",[t("p",[_._v("C++ 支持虚函数和继承表达的动态多态性和基于模板的静态多态性。Rust 则做得更好，通过 trait 机制统一了动态多态性和静态多态性的表达形式，而且是一个实现可以同时支持这两种多态性。")])]),_._v(" "),t("li",[t("p",[_._v("Rust 中，动态多态性的具体表达形式和 C++ 是类似的，例如，通过将 trait 引用作为函数的形参，而给这个函数传实参时，必须要传实现了该 trait 的对象；而静态多态性也是通过泛型实现的，但在表达对泛指类型 T 的约束上要比 C++ 完善，而 C++20 的 concept 才能做到类似的表达效果。")])]),_._v(" "),t("li",[t("p",[_._v("在支持函数式编程上，少不了 lambda 表达式的支持，当然，Rust 的枚举（enum）也功不可没。")])]),_._v(" "),t("li",[t("p",[_._v("和 C/C++ 中的枚举不同，Rust 的枚举值可以关联不同数据类型的值或不关联值，结合 match 的模式匹配，表达能力大大增强。 这种表达能力完全替代了 C/C++ 中 switch & case。")])]),_._v(" "),t("li",[t("p",[_._v("当然，在模式匹配的支持上，Rust 标准库提供的 Option"),t("T",[_._v("、Result<T，E>、Some"),t("T",[_._v("、None、Ok"),t("T",[_._v("、Err"),t("E",[_._v(" 等出镜率也是很高的，为程序员表达自己的设计意图提供了强力的工具。")])],1)],1)],1)],1)]),_._v(" "),t("li",[t("p",[_._v("C 缺乏有效的错误处理机制，而 C++ 提供的异常机制并没有得到程序员广泛的认可，至少在用不用异常的问题上，大家是犹豫的，甚至有些公司明确禁止异常的使用，如 Google 的 C++ 编程规范中就明确提出过。")])]),_._v(" "),t("li",[t("p",[_._v("禁用 C++ 的异常，可能是考虑到异常本身带来的代码膨胀、性能等问题，也可能是某种历史性因素。没有异常的 C++，在错误表达上就退化到和 C 一样的水平上了，基本就是基于返回错误码。")])]),_._v(" "),t("li",[t("p",[_._v("Rust 似乎吸取了这方面的教训，并没有提供异常机制，而是通过上述提到的 Result<T，E>、Option"),t("T",[_._v("、模式匹配（match、if let、while let）、panic!、assert! 等来提供一套错误处理机制。")])],1)]),_._v(" "),t("li",[t("p",[_._v("在形式上，偏向返回错误码的风格，但提供的内涵友比 C 的错误码要强很多；在性能上，也没有出现 C++ 异常带来的问题。这充分体现了零成本抽象的设计思想。")])]),_._v(" "),t("li",[t("p",[_._v("C/C++ 中的宏是通过预处理器负责处理的，对编译器而言完全无感知。这就说明宏不属于类型系统的一部分，编译器无法对此进行安全检查。 正是这样，C/C++ 中的宏在使用时才要特别小心，否则，一不小心就会引入问题。在 C++ 中通过增加一些额外的语言机制，让程序员去替代宏的那部分功能。 例如，提供内联函数机制替代宏函数、提供 const 去定义常量等。")])]),_._v(" "),t("li",[t("p",[_._v("而在 Rust 中，宏则被鼓励去使用，体现在 Rust 的标准库上就在广泛使用宏。 例如，println!、vec! 等这些都是 Rust 标准库提供的宏。")])]),_._v(" "),t("li",[t("p",[_._v("Rust 的宏，给了程序员一个可以自己去创造新语法的工具，这是有利于程序员写出更清晰明了的代码，提高代码的可读性。 而能写出面向人的代码则无疑是非常有价值的。 现代的高级编程语言，特别是动态编程语言，在这条路上越走越远。 越接近人的自然语言表达能力，程序员的生产效率就会越高。")])]),_._v(" "),t("li",[t("p",[_._v("现代的编程语言，对于程序的组织上，基本都抛弃了 C/C++ 提供的头文件和源文件分离的机制。无疑，Rust 也是这样。C++20 提供的 moudle 机制也在走向这条道路。")])]),_._v(" "),t("li",[t("p",[_._v("在编程语言的互操作上，C 的 ABI 无疑是一个事实上的标准。")])]),_._v(" "),t("li",[t("p",[_._v("Rust 作为一个定位支持系统级编程的语言，肯定不会放弃和 C 的兼容性。这体现在 Rust 结构体的内存布局和基于 trait 实现的动态多态性上（在 C++ 中，将虚函数表指针和结构体的数据成员放在一起，从而在对象内存布局上破坏了和 C 的兼容性）。")])]),_._v(" "),t("li",[t("p",[_._v("另外，为了充分利用现有 C 的代码，Rust 提供了 FFI 机制和 unsafe 块。在 unsafe 块中可以绕过 Rust 严格的类型安全检查机制，而这部分的代码的安全性就自然需要程序员自己去保证了。")])]),_._v(" "),t("li",[t("p",[_._v("在一些基本的语言表达方式上，Rust 和 C/C++ 也存在一些不同，体现在：")])]),_._v(" "),t("li",[t("ul",[t("li",[_._v("变量默认是不可变绑定（let），需要修改变量，则需明确使用可变绑定（let      mut）")]),_._v(" "),t("li",[_._v("没有实现 Copy trait      的对象，绑定、赋值、非引用传参时默认是移动语义")]),_._v(" "),t("li",[_._v("支持函数内嵌定义")]),_._v(" "),t("li",[_._v("支持函数内嵌定义")]),_._v(" "),t("li",[_._v("支持函数表达式返回（最后不加分号）")]),_._v(" "),t("li",[_._v("在同一个作用域内，变量可以重新绑定（let），在      Rust 中叫做遮蔽机制")]),_._v(" "),t("li",[_._v("支持零尺寸的结构体、空枚举、空数组（[T,      0]）")]),_._v(" "),t("li",[_._v("两种字符串类型变量：&str      相当于 C++ 中的 const char*，用于指向字符串字面常量；而 String 相对于 C++ 中的 std::string，支持可变引用      & Mut String 和不可变引用 & String")]),_._v(" "),t("li",[_._v("基本的数据类型都实现了 Copy      trait，默认在栈上分配，支持复制语义；而 String、Vec 等默认只支持移动语义，要进行深拷贝，需要显式调用 clone 函数")]),_._v(" "),t("li",[_._v("不支持 switch &      case，使用 match 模式匹配代替")]),_._v(" "),t("li",[_._v("不支持三目运算符")]),_._v(" "),t("li",[_._v("支持?      运算符，用于调用的函数返回异常时，直接退出当前函数并返回对应的错误 Err"),t("T")],1),_._v(" "),t("li",[_._v("指示编译器的属性，如让结构体支持整体打印，可在结构体定义处加上      #[derive(Debug)]，相当于让编译器自动给指定的结构体加上实现 Debug trait 的代码")]),_._v(" "),t("li",[_._v("支持文档化注释：/// 和      //!，使用 cargo doc 可以基于代码生成对应的 html 文档；当然同时也支持 C++ 的那两种形式")]),_._v(" "),t("li",[_._v("......")])])]),_._v(" "),t("li",[t("p",[_._v("Rust 在对编程开发套件上的支持也是非常有吸引力的。")])]),_._v(" "),t("li",[t("p",[_._v("虽然目前 Rust 还没有自己的 IDE，但强大的 cargo 和统一的包管理库 ("),t("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//crate.io",target:"_blank",rel:"noopener noreferrer"}},[_._v("http://crate.io"),t("OutboundLink")],1),_._v(") 为编程带来极大的方便，不用为搭建开发环境而费神了。")])]),_._v(" "),t("li",[t("p",[_._v("另外，Rust 编译器的错误提示真的非常好，想起 C++ 异常报错的天书，完全是两样的感受。")])]),_._v(" "),t("li",[t("p",[_._v("C++ 从 C++11 开始逐步走向现代化之路，而 Rust 则完全是一个现代化的编程语言。")])]),_._v(" "),t("li",[t("p",[_._v("虽然 Rust 定位于一门系统级编程语言，但它并没走 C++ 兼容 C 的老路，完全没有历史的包袱，可以轻装上阵，充分吸收各家编程语言之长，避其之短。")])]),_._v(" "),t("li",[t("p",[_._v("Rust 的设计目标是非常明确的，提供内存安全、线程安全而又不失性能的现代化系统级编程语言。")])]),_._v(" "),t("li",[t("p",[_._v("Rust 有完全不亚于 C++ 的表达能力和性能，又解决了 C++ 的最大痛点（内存安全、线程安全），这对 C++ 程序员来讲无疑是非常有吸引力的。")])]),_._v(" "),t("li",[t("p",[_._v("目前，C++ 仍然是我的主力编程语言，但我对 Rust 是看好的。")])]),_._v(" "),t("li",[t("p",[_._v("虽然现在对 Rush 的了解并不深入，只写过一些简单的 Demo，并没有用于实际的开发，但我觉得 Rust 仍是值得 C++ 程序员认真去学习的一门编程语言。")])]),_._v(" "),t("li",[t("p",[_._v("它不仅实用，反过来也会促进对 C++ 中关键概念和问题的理解。")])]),_._v(" "),t("li",[t("p",[_._v("- 完 -")])]),_._v(" "),t("li"),_._v(" "),t("li",[t("p",[_._v("来自 "),t("a",{attrs:{href:"https://www.zhihu.com/question/432640008/answer/1668000615",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://www.zhihu.com/question/432640008/answer/1668000615"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);v.default=l.exports}}]);