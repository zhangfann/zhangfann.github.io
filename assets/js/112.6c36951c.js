(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{491:function(e,_,v){"use strict";v.r(_);var i=v(42),l=Object(i.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("你踩过几种c++内存泄露的坑")]),e._v(" "),v("p",[e._v("[C语言与CPP编程](javascript:void(0)😉 "),v("em",[e._v("1周前")])]),e._v(" "),v("p",[e._v("以下文章来源于一个程序员的修炼之路 ，作者河边一枝柳")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/8h_ek1NLE9mOKdA2WiOoQw#",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM4xHT6icsPDTm4Uia8NQg60tf4niaiaDTTT8tAuxxG8EOMAUg/0",alt:"img"}}),v("strong",[e._v("一个程序员的修炼之路")]),e._v(".主要分享Windows开发与调试, Linux, C/C++, 以及后端开发技术"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/0m4YX595Fom7dUgDLM0OJCxo425I9OKv3jfAgDFAcZH1cfSbV7rKJYKF8qgPJ7phxn55jLQhyRnicECicm1mOzIQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),v("p",[e._v("在"),v("code",[e._v("Modern C++")]),e._v("之前，C++无疑是个更容易写出坑的语言，无论从开发效率，和易坑性，让很多新手望而却步。比如内存泄露问题，就是经常会被写出来的坑，本文就让我们一起来看看，这些让现在或者曾经的"),v("code",[e._v("C++")]),e._v("程序员泪流满面的"),v("code",[e._v("内存泄露")]),e._v("场景吧。你是否有踩过？")]),e._v(" "),v("h1",{attrs:{id:"_1-函数内或者类成员内存未释放"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-函数内或者类成员内存未释放"}},[e._v("#")]),e._v(" 1. 函数内或者类成员内存未释放")]),e._v(" "),v("p",[e._v("这类问题可以称之为"),v("code",[e._v("out of scope")]),e._v("的时候，并没有释放相应对象的堆上内存。有时候最简单的场景，反而是最容易犯错的。这个我想主要是因为经常写，哪有不出错。")]),e._v(" "),v("p",[e._v("下面场景一看就知道了，当你在写"),v("code",[e._v("XXX_Class * pObj = new XXX_Class();")]),e._v("这一行的时候，脑子里面还在默念"),v("code",[e._v("记得要释放pObj ，记得要释放pObj")]),e._v(", 可能因为重要的事情要说三遍，而你只喊了两遍，最终还是忘记了写"),v("code",[e._v("delete pObj;")]),e._v(" 这样去释放对象。")]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("void MemoryLeakFunction(){  XXX_Class * pObj = new XXX_Class();  pObj->DoSomething();  return; }\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("下面这个场景，就是析构函数中并没有释放成员所指向的内存。这个我们就要注意了，一般"),v("strong",[e._v("当你构建一个类的时候，写析构函数一定要切记释放类成员关联的资源")]),e._v("。")]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("class MemoryLeakClass{public:  MemoryLeakClass()   {     m_pObj = new XXX_ResourceClass;  }  void DoSomething()  {    m_pObj->DoSomething();  }  ~MemoryLeakClass()  {    ;  }private:  XXX_ResourceClass* m_pObj;};\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("上述这两种代码例子，是不是让一个"),v("code",[e._v("C++")]),e._v("工程师如履薄冰，完全看自己的大脑在不在状态。")]),e._v(" "),v("p",[e._v("在"),v("code",[e._v("boost")]),e._v("或者"),v("code",[e._v("C++ 11")]),e._v("后，通过智能指针去进行包裹这个原始指针，这是一种"),v("code",[e._v("RAII")]),e._v("的思想(可以参阅本文末尾的关联阅读)， 在"),v("code",[e._v("out of scope")]),e._v("的时候，释放自己所包裹的原始指针指向的资源。将上述例子用"),v("code",[e._v("unique_ptr")]),e._v("改写一下。")]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("void MemoryLeakFunction(){  std::unique_ptr<XXX_Class> pObj = make_unique<XXX_Class>();  pObj->DoSomething();  return; }\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("h1",{attrs:{id:"_2-delete"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-delete"}},[e._v("#")]),e._v(" 2. delete []")]),e._v(" "),v("p",[e._v("大家知道"),v("code",[e._v("C++")]),e._v("中这样一个语句"),v("code",[e._v("XXX_Class * pObj = new XXX_Class();")]),e._v(" 中的"),v("code",[e._v("new")]),e._v("我们一般称其为C++"),v("code",[e._v("关键字")]),e._v(" ("),v("code",[e._v("keyword")]),e._v("), 就以这个语句为例做了两个操作:")]),e._v(" "),v("ol",[v("li",[e._v("调用了"),v("code",[e._v("operator new")]),e._v("从堆上申请所需的空间")]),e._v(" "),v("li",[e._v("调用"),v("code",[e._v("XXX_Class")]),e._v("的构造函数")])]),e._v(" "),v("p",[e._v("那么当你调用"),v("code",[e._v("delete pObj;")]),e._v("的时候，道理同"),v("code",[e._v("new")]),e._v("，刚好相反:")]),e._v(" "),v("ol",[v("li",[e._v("调用了"),v("code",[e._v("XXX_Class")]),e._v("的析构函数")]),e._v(" "),v("li",[e._v("通过"),v("code",[e._v("operator delete")]),e._v(" 释放了内存")])]),e._v(" "),v("p",[e._v("一切似乎都没有什么问题，然后又一个坑来了。但如果申请的是一个数组呢，入下述例子:")]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('class MemoryLeakClass{public:  MemoryLeakClass()   {     m_pStr = new char[100];  }  void DoSomething(){    strcpy_s(m_pStr, 100, "Hello Memory Leak!");    std::cout << m_pStr << std::endl;  }  ~MemoryLeakClass()  {    delete m_pStr;  }private:  char *m_pStr;};\nvoid MemoryLeakFunction(){  const int iSize = 5;  MemoryLeakClass* pArrayObjs = new MemoryLeakClass [iSize];  for (int i = 0; i < iSize; i++)  {    (pArrayObjs+i)->DoSomething();  }  delete pArrayObjs;}\n')])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br")])]),v("p",[e._v("上述例子通过"),v("code",[e._v("MemoryLeakClass* pArrayObjs = new MemoryLeakClass [iSize];")]),e._v("申请了一个"),v("code",[e._v("MemoryLeakClass数组")]),e._v("，那么调用"),v("code",[e._v("不匹配的delete pArrayObjs;")]),e._v(", 会产生内存泄露。先看看下图, 然后结合刚讲的"),v("code",[e._v("delete")]),e._v("的行为：\n"),v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/PPrc2J6OJoVtczLogYtUiaeMlDYR6WRDWJXCcmaHt0f63rJlrQZjAcqrIGMew3a5zTmym1vS37zCc2U7fkB70BA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),v("p",[e._v("那么其实调用"),v("code",[e._v("delete pArrayObjs;")]),e._v("的时候，释放了整个"),v("code",[e._v("pArrayObjs")]),e._v("的内存，但是只调用了"),v("code",[e._v("pArrayObjs[0]")]),e._v("析构函数并释放中的"),v("code",[e._v("m_pStr")]),e._v("指向的内存。"),v("code",[e._v("pArrayObjs 1~4")]),e._v("并没有调用析构函数，从而导致其中的"),v("code",[e._v("m_pStr")]),e._v("指向的内存没有释放。"),v("strong",[e._v("所以我们要注意"),v("code",[e._v("new")]),e._v("和"),v("code",[e._v("delete")]),e._v("要匹配使用，当使用的"),v("code",[e._v("new []")]),e._v("申请的内存最好要用"),v("code",[e._v("delete[]")])]),e._v("。")]),e._v(" "),v("p",[e._v("那么留一个问题给读者, 上面代码"),v("code",[e._v("delete m_pStr;")]),e._v("会导致同样的问题吗？")]),e._v(" "),v("p",[e._v("如果总是要让我们自己去保证，"),v("code",[e._v("new")]),e._v("和"),v("code",[e._v("delete")]),e._v("的配对，显然还是难以避免错误的发生的。这个时候也可以使用"),v("code",[e._v("unique_ptr")]),e._v(", 修改如下：")]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("void MemoryLeakFunction(){  const int iSize = 5;  std::unique_ptr<MemoryLeakClass[]> pArrayObjs = std::make_unique<MemoryLeakClass[]>(iSize);  for (int i = 0; i < iSize; i++)  {    (pArrayObjs.get()+i)->DoSomething();  }}\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("h1",{attrs:{id:"_3-delete-void"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-delete-void"}},[e._v("#")]),e._v(" 3. delete (void*)")]),e._v(" "),v("p",[e._v("如果上一个章节已经有理解，那么对于这个例子，就很容易明白了。正因为"),v("code",[e._v("C++")]),e._v("的灵活性，有时候会将一个对象指针转换为"),v("code",[e._v("void *")]),e._v("，隐藏其类型。这种情况SDK比较常用，实际上返回的并不是SDK用的实际类型，而是一个没有类型的地址，当然有时候我们会为其亲切的取一个名字，比如叫做"),v("code",[e._v("XXX_HANDLE")]),e._v("。")]),e._v(" "),v("p",[e._v("那么继续用上述为例"),v("code",[e._v("MemoryLeakClass")]),e._v("， SDK假设提供了下面三个接口:")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("InitObj")]),e._v("创建一个对象，并且返回一个"),v("code",[e._v("PROGRAMER_HANDLE")]),e._v("(即"),v("code",[e._v("void *")]),e._v(")，对应用程序屏蔽其实际类型")]),e._v(" "),v("li",[v("code",[e._v("DoSomething")]),e._v(" 提供了一个功能去做一些事情，输入的参数，即为通过"),v("code",[e._v("InitObj")]),e._v("申请的对象")]),e._v(" "),v("li",[e._v("应用程序使用完毕后，一般需要释放SDK申请的对象，提供了"),v("code",[e._v("FreeObj")])])]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("typedef void * PROGRAMER_HANDLE;\nPROGRAMER_HANDLE InitObj(){  MemoryLeakClass* pObj = new MemoryLeakClass();  return (PROGRAMER_HANDLE)pObj;}\nvoid DoSomething(PROGRAMER_HANDLE pHandle){  ((MemoryLeakClass*)pHandle)->DoSomething();}\nvoid FreeObj(void *pObj){  delete pObj;}\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br")])]),v("p",[e._v("看到这里，也许有读者已经发现问题所在了。上述代码在调用"),v("code",[e._v("FreeObj")]),e._v("的时候，"),v("code",[e._v("delete")]),e._v("看到的是一个"),v("code",[e._v("void *")]),e._v(", 只会释放对象所占用的内存，但是并不会调用对象的析构函数，那么对象内部的"),v("code",[e._v("m_pStr")]),e._v("所指向的内存并没有被释放，从而会导致内存泄露。修改也是自然比较简单的:")]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("void FreeObj(void *pObj){  delete ((MemoryLeakClass*)pObj);}\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("那么一般来说，最好由相对资深的程序员去进行SDK的开发，无论从设计和实现上面，都尽量避免了各种让人泪流满满的坑。")]),e._v(" "),v("h1",{attrs:{id:"_4-virtual-destructor"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-virtual-destructor"}},[e._v("#")]),e._v(" 4. Virtual destructor")]),e._v(" "),v("p",[e._v("现在大家来看看这个很容易犯错的场景, 一个很常用的多态场景。那么在调用"),v("code",[e._v("delete pObj;")]),e._v("会出现内存泄露吗？")]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('class Father{public:  virtual void DoSomething(){    std::cout << "Father DoSomething()" << std::endl;  }};\nclass Child : public Father{public:  Child()  {    std::cout << "Child()" << std::endl;    m_pStr = new char[100];  }\n  ~Child()  {    std::cout << "~Child()" << std::endl;    delete[] m_pStr;  }\n  void DoSomething(){    std::cout << "Child DoSomething()" << std::endl;  }protected:  char* m_pStr;};\nvoid MemoryLeakVirualDestructor(){  Father * pObj = new Child;  pObj->DoSomething();  delete pObj;}\n')])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br")])]),v("p",[e._v("会的，因为"),v("code",[e._v("Father")]),e._v("没有设置"),v("code",[e._v("Virtual 析构函数")]),e._v("，那么在调用"),v("code",[e._v("delete pObj;")]),e._v("的时候会直接调用"),v("code",[e._v("Father")]),e._v("的析构函数，而不会调用"),v("code",[e._v("Child")]),e._v("的析构函数，这就导致了"),v("code",[e._v("Child")]),e._v("中的"),v("code",[e._v("m_pStr")]),e._v("所指向的内存，并没有被释放，从而导致了内存泄露。")]),e._v(" "),v("p",[v("strong",[e._v("并不是绝对，当有这种使用场景的时候，最好是设置基类的析构函数为虚析构函数")]),e._v("。修改如下:")]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('class Father{public:  virtual void DoSomething(){    std::cout << "Father DoSomething()" << std::endl;  }  virtual ~Father() { ; }};\nclass Child : public Father{public:  Child()  {    std::cout << "Child()" << std::endl;    m_pStr = new char[100];  }\n  virtual ~Child()  {    std::cout << "~Child()" << std::endl;    delete[] m_pStr;  }\n  void DoSomething(){    std::cout << "Child DoSomething()" << std::endl;  }protected:  char* m_pStr;};\n')])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br")])]),v("h1",{attrs:{id:"_5-对象循环引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-对象循环引用"}},[e._v("#")]),e._v(" 5. 对象循环引用")]),e._v(" "),v("p",[e._v("看下面例子，既然为了防止内存泄露，于是使用了智能指针"),v("code",[e._v("shared_ptr")]),e._v("；并且这个例子就是创建了一个双向链表，为了简单演示，只有两个节点作为演示，创建了链表后，对链表进行遍历。\n那么这个例子会导致内存泄露吗?")]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('struct Node{  Node(int iVal)  {    m_iVal = iVal;  }  ~Node()  {    std::cout << "~Node(): " << "Node Value: " << m_iVal << std::endl;  }  void PrintNode(){    std::cout << "Node Value: " << m_iVal << std::endl;  }\n  std::shared_ptr<Node> m_pPreNode;  std::shared_ptr<Node> m_pNextNode;  int m_iVal;};\nvoid MemoryLeakLoopReference(){  std::shared_ptr<Node> pFirstNode = std::make_shared<Node>(100);  std::shared_ptr<Node> pSecondNode = std::make_shared<Node>(200);  pFirstNode->m_pNextNode = pSecondNode;  pSecondNode->m_pPreNode = pFirstNode;\n  //Iterate nodes  auto pNode = pFirstNode;  while (pNode)  {    pNode->PrintNode();    pNode = pNode->m_pNextNode;  }}\n')])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br")])]),v("p",[e._v("先来看看下图，是链表创建完成后的示意图。有点晕乎了，怎么一个双向链表画的这么复杂，黄色背景的均为智能指针或者智能指针的组成部分。"),v("strong",[e._v("其实根据双向链表的简单性和下图的复杂性，可以想到，智能指针的引入虽然提高了安全性，但是损失的是性能。所以往往安全性和性能是需要互相权衡的。")]),e._v(" 我们继续往下看，哪里内存泄露了呢？\n"),v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/PPrc2J6OJoVtczLogYtUiaeMlDYR6WRDWc6gEtyznBNzyZHvk6c2GaoSqiadSrZlaRXelrGqedD3A2kKxSxrphRg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),e._v("\n如果函数退出，那么"),v("code",[e._v("m_pFirstNode")]),e._v("和"),v("code",[e._v("m_pNextNode")]),e._v("作为栈上局部变量，智能指针本身调用自己的析构函数，给引用的对象引用计数减去1("),v("code",[e._v("shared_ptr")]),e._v("本质采用引用计数，当引用计数为0的时候，才会删除对象)。此时如下图所示，可以看到智能指针的引用计数仍然为1， 这也就导致了这两个节点的实际内存，并没有被释放掉， 从而导致内存泄露。\n"),v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/PPrc2J6OJoVtczLogYtUiaeMlDYR6WRDWq0j4R0gl2E045cquT1hnzo5o8UmibNNdEJC5MdjsUj1Z3gYRsnITcgw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),e._v("\n你可以在函数返回前手动调用"),v("code",[e._v("pFirstNode->m_pNextNode.reset();")]),e._v("强制让引用计数减去1， 打破这个循环引用。\n还是之前那句话，如果通过手动去控制难免会出现遗漏的情况， C++提供了"),v("code",[e._v("weak_ptr")]),e._v("。")]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('struct Node{  Node(int iVal)  {    m_iVal = iVal;  }  ~Node()  {    std::cout << "~Node(): " << "Node Value: " << m_iVal << std::endl;  }  void PrintNode(){    std::cout << "Node Value: " << m_iVal << std::endl;  }\n  std::shared_ptr<Node> m_pPreNode;  std::weak_ptr<Node>    m_pNextNode;  int m_iVal;};\nvoid MemoryLeakLoopRefference(){  std::shared_ptr<Node> pFirstNode = std::make_shared<Node>(100);  std::shared_ptr<Node> pSecondNode = std::make_shared<Node>(200);  pFirstNode->m_pNextNode = pSecondNode;  pSecondNode->m_pPreNode = pFirstNode;\n  //Iterate nodes  auto pNode = pFirstNode;  while (pNode)  {    pNode->PrintNode();        pNode = pNode->m_pNextNode.lock();  }}\n')])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br")])]),v("p",[e._v("看看使用了"),v("code",[e._v("weak_ptr")]),e._v("之后的链表结构如下图所示，"),v("code",[e._v("weak_ptr")]),e._v("只是对管理的对象做了一个弱引用，其并不会实际支配对象的释放与否，对象在"),v("code",[e._v("引用计数")]),e._v("为0的时候就进行了释放，而无需关心"),v("code",[e._v("weak_ptr")]),e._v("的"),v("code",[e._v("weak计数")]),e._v("。注意"),v("code",[e._v("shared_ptr")]),e._v("本身也会对"),v("code",[e._v("weak计数")]),e._v("加1.\n那么在函数退出后，当"),v("code",[e._v("pSecondNode")]),e._v("调用析构函数的时候，对象的引用计数减一，"),v("code",[e._v("引用计数")]),e._v("为0，释放第二个Node，在释放第二个Node的过程中又调用了"),v("code",[e._v("m_pPreNode")]),e._v("的析构函数，第一个Node对象的引用计数减1，再加上"),v("code",[e._v("pFirstNode")]),e._v("析构函数对第一个Node对象的引用计数也减去1，那么第一个Node对象的"),v("code",[e._v("引用计数")]),e._v("也为0，第一个Node对象也进行了释放。\n"),v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/PPrc2J6OJoVtczLogYtUiaeMlDYR6WRDWtjmvSSnqDw8pD5RhsNRg5e9UCbomIrRW3icicHQN0X78fIJ0ZW61F2NA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),e._v("\n如果将上述代码改为双向循环链表，去除那个循环遍历Node的代码，那么最后Node的内存会被释放吗？这个问题留给读者。")]),e._v(" "),v("h1",{attrs:{id:"_6-资源泄露"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-资源泄露"}},[e._v("#")]),e._v(" 6. 资源泄露")]),e._v(" "),v("p",[e._v("如果说些作文的话，这一章节，可能有点偏题了。本章要讲的是广义上的资源泄露，比如句柄或者fd泄露。这些也算是内存泄露的一点点扩展，写作文的一点点延伸吧。\n看看下述例子, 其在操作完文件后，忘记调用"),v("code",[e._v("CloseHandle(hFile);")]),e._v("了，从而导致内存泄露。")]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('void MemroyLeakFileHandle(){  HANDLE hFile = CreateFile(LR"(C:\\test\\doc.txt)",     GENERIC_READ,    FILE_SHARE_READ,    NULL,     OPEN_EXISTING,     FILE_ATTRIBUTE_NORMAL,    NULL);\n  if (INVALID_HANDLE_VALUE == hFile)  {    std::cerr << "Open File error!" << std::endl;    return;  }\n  const int BUFFER_SIZE = 100;  char pDataBuffer[BUFFER_SIZE];  DWORD dwBufferSize;  if (ReadFile(hFile,      pDataBuffer,      BUFFER_SIZE,      &dwBufferSize,      NULL))  {    std::cout << dwBufferSize << std::endl;  }}\n')])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br")])]),v("p",[e._v("上述你可以用"),v("code",[e._v("RAII")]),e._v("机制去封装"),v("code",[e._v("hFile")]),e._v("从而让其在函数退出后，直接调用"),v("code",[e._v("CloseHandle(hFile);")]),e._v("。C++智能指针提供了自定义"),v("code",[e._v("deleter")]),e._v("的功能，这就可以让我们使用这个"),v("code",[e._v("deleter")]),e._v("的功能，改写代码如下。不过本人更倾向于使用类似于"),v("code",[e._v("golang defer")]),e._v("的实现方式。")]),e._v(" "),v("ul",[v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li"),e._v(" "),v("li")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('void MemroyLeakFileHandle(){  HANDLE hFile = CreateFile(LR"(C:\\test\\doc.txt)",     GENERIC_READ,    FILE_SHARE_READ,    NULL,     OPEN_EXISTING,     FILE_ATTRIBUTE_NORMAL,    NULL);  std::unique_ptr< HANDLE, std::function<void(HANDLE*)>> phFile(    &hFile,     [](HANDLE* pHandle) {      if (nullptr != pHandle)      {        std::cout << "Close Handle" << std::endl;        CloseHandle(*pHandle);      }    });\n  if (INVALID_HANDLE_VALUE == *phFile)  {    std::cerr << "Open File error!" << std::endl;    return;  }\n  const int BUFFER_SIZE = 100;  char pDataBuffer[BUFFER_SIZE];  DWORD dwBufferSize;  if (ReadFile(*phFile,      pDataBuffer,      BUFFER_SIZE,      &dwBufferSize,      NULL))  {    std::cout << dwBufferSize << std::endl;  }}\n')])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br")])]),v("p",[v("img",{attrs:{src:"http://mmbiz.qpic.cn/mmbiz_png/0m4YX595FonD8gMhCztUfGQ3ZPuumz87jAoXia6ySYCOe7srlRialEoHmaAoibqmVbrobCpSKLabzDnaYbXfzcldA/0?wx_fmt=png",alt:"img"}})]),e._v(" "),v("p",[v("strong",[e._v("C语言与CPP编程")])]),e._v(" "),v("p",[e._v("分享C语言/C++，数据结构与算法，计算机基础，操作系统等")]),e._v(" "),v("p",[e._v("51篇原创内容")]),e._v(" "),v("p",[e._v("公众号")]),e._v(" "),v("p",[e._v("喜欢此内容的人还喜欢")]),e._v(" "),v("p",[e._v("微软 Win11 被 Linux 社区炮轰：背叛了用户、不要安装")]),e._v(" "),v("p",[e._v("恋习Python")]),e._v(" "),v("p",[e._v("不喜欢")]),e._v(" "),v("p",[e._v("不看的原因")]),e._v(" "),v("p",[e._v("确定")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("内容质量低")])]),e._v(" "),v("li"),e._v(" "),v("li",[v("p",[e._v("不看此公众号")])])]),e._v(" "),v("p",[e._v("最全Linux应急响应技巧")]),e._v(" "),v("p",[e._v("LemonSec")]),e._v(" "),v("p",[e._v("不喜欢")]),e._v(" "),v("p",[e._v("不看的原因")]),e._v(" "),v("p",[e._v("确定")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("内容质量低")])]),e._v(" "),v("li"),e._v(" "),v("li",[v("p",[e._v("不看此公众号")])])]),e._v(" "),v("p",[e._v("Modern C++ 智能指针详解")]),e._v(" "),v("p",[e._v("C语言与C++编程")]),e._v(" "),v("p",[e._v("不喜欢")]),e._v(" "),v("p",[e._v("不看的原因")]),e._v(" "),v("p",[e._v("确定")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("内容质量低")])]),e._v(" "),v("li"),e._v(" "),v("li",[v("p",[e._v("不看此公众号")])])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzI3ODQ3OTczMw==&mid=2247492279&idx=1&sn=397be65f0ef417ed237dbbb2027eed00&send_time=",alt:"img"}})]),e._v(" "),v("p",[e._v("微信扫一扫\n关注该公众号")]),e._v(" "),v("p",[e._v("：，。视频小程序赞，轻点两下取消赞在看，轻点两下取消在看")])])}),[],!1,null,null,null);_.default=l.exports}}]);