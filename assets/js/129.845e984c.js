(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{512:function(n,t,e){"use strict";e.r(t);var i=e(42),r=Object(i.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("gdb_调试_从入门实践到原理\nhttps://mp.weixin.qq.com/s?__biz=Mzk0MzI4OTI1Ng==&mid=2247486816&idx=1&sn=a6dfc1361ce15ce5ad1c7d7734f9c939&chksm=c3376ba7f440e2b18267c303c35572ab089fb97d3b2fe0adb58009637d6631020bb52bd9a28c&scene=90&subscene=93&sessionid=1641357450&clicktime=1641357452&enterid=1641357452&ascene=56&devicetype=android-28&version=2800105d&nettype=WIFI&abtest_cookie=AAACAA%3D%3D&lang=zh_CN&exportkey=AUEdBXXUioQROVUWB%2B24Qp8%3D&pass_ticket=%2B3e0Y17j0cjm3REMTeghpi%2BjSzKqssP918so5VaZuyEaklJjnjS7a7qpQjVDLl0R&wx_header=1\n公众号\n你好，我是雨乐！")]),n._v(" "),e("p",[n._v("在上篇文章中，我们分析了线上 coredump 产生的原因，其中用到了 coredump 分析工具 gdb，这几天一直有读者在问，能不能写一篇关于 gdb 调试方面的文章，今天借助此文，分享一些工作中的调试经验，希望能够帮到大家。")]),n._v(" "),e("p",[n._v("写在前面\n在我的工作经历中，前几年在 Windows 上进行开发，使用 Visual Studio 进行调试，简直是利器，各种断点等用鼠标点点点就能设置；大概从 12 年开始转 Linux 开发了，所以调试都是基于 GDB 的。本来这篇文章也想写写 Windows 下调试相关，奈何好多年没用了，再加上工作太忙，所以本文就只写了 Linux 下 GDB 调试相关，对于 Windows 开发人员，实在对不住了😃。")]),n._v(" "),e("p",[n._v("这篇文章，涉及的比较全面，总结了这些年的 gdb 调试经验 (都是小儿科😁)，经常用到的一些调试技巧，希望能够对从事 Linux 开发的相关人员有所帮助")]),n._v(" "),e("p",[n._v("背景\n作为 C/C++ 开发人员，保证程序正常运行是最基本也是最主要的目的。而为了保证程序正常运行，调试则是最基本的手段，熟悉这些调试方式，可以方便我们更快的定位程序问题所在，提高开发效率。")]),n._v(" "),e("p",[n._v("在开发过程，如果程序的运行结果不符合预期，第一时间就是打开 GDB 进行调试，在对应的地方设置断点，然后分析原因；当线上服务出了问题，第一时间查看进程在不在，如果不在的话，是否生成了coredump文件，如果有，则使用 gdb 调试 coredump 文件，否则通过dmesg来分析内核日志来查找原因。")]),n._v(" "),e("p",[n._v("概念\nGDB 是一个由 GNU 开源组织发布的、UNIX/LINUX 操作系统下的、「基于命令行的、功能强大的程序调试工具」。")]),n._v(" "),e("p",[n._v("GDB 支持断点、单步执行、打印变量、观察变量、查看寄存器、查看堆栈等调试手段。在 Linux 环境软件开发中，GDB 是主要的调试工具，用来调试 C 和 C++ 程序 (也支持 go 等其他语言)。")]),n._v(" "),e("p",[n._v("常用命令\n断点\n断点是我们在调试中经常用的一个功能，我们在指定位置设置断点之后，程序运行到该位置将会暂停，这个时候我们就可以对程序进行更多的操作，比如查看变量内容，堆栈情况等等，以帮助我们调试程序。")]),n._v(" "),e("p",[n._v("以设置断点的命令分为以下几类：")]),n._v(" "),e("p",[n._v("breakpoint\nwatchpoint\ncatchpoint\nbreakpoint\n可以根据行号、函数、条件生成断点，下面是相关命令以及对应的作用说明：")]),n._v(" "),e("p",[n._v("命令\t作用\nbreak [file]:function\t在文件 file 的 function 函数入口设置断点\nbreak [file]:line\t在文件 file 的第 line 行设置断点\ninfo breakpoints\t查看断点列表\nbreak [+-]offset\t在当前位置偏移量为 [+-]offset 处设置断点\nbreak *addr\t在地址 addr 处设置断点\nbreak ... if expr\t设置条件断点，仅仅在条件满足时\nignore n count\t接下来对于编号为 n 的断点忽略 count 次\nclear\t删除所有断点\nclear function\t删除所有位于 function 内的断点\ndelete n\t删除指定编号的断点\nenable n\t启用指定编号的断点\ndisable n\t禁用指定编号的断点\nsave breakpoints file\t保存断点信息到指定文件\nsource file\t导入文件中保存的断点信息\nbreak\t在下一个指令处设置断点\nclear [file:]line\t删除第 line 行的断点\nwatchpoint\nwatchpoint 是一种特殊类型的断点，类似于正常断点，是要求 GDB 暂停程序执行的命令。区别在于 watchpoint没有驻留某一行源代码中，而是指示 GDB 每当某个表达式改变了值就暂停执行的命令。")]),n._v(" "),e("p",[n._v("watchpoint 分为硬件实现和软件实现两种。前者需要硬件系统的支持；后者的原理就是每步执行后都检查变量的值是否改变。GDB 在新建数据断点时会优先尝试硬件方式，如果失败再尝试软件实现。")]),n._v(" "),e("p",[n._v("命令\t作用\nwatch variable\t设置变量数据断点\nwatch var1 + var2\t设置表达式数据断点\nrwatch variable\t设置读断点，仅支持硬件实现\nawatch variable\t设置读写断点，仅支持硬件实现\ninfo watchpoints\t查看数据断点列表\nset can-use-hw-watchpoints 0\t强制基于软件方式实现\n使用数据断点时，需要注意：")]),n._v(" "),e("p",[n._v("当监控变量为局部变量时，一旦局部变量失效，数据断点也会失效\n如果监控的是指针变量p，则watch *p监控的是p所指内存数据的变化情况，而watch p监控的是p指针本身有没有改变指向\n最常见的数据断点应用场景：「定位堆上的结构体内部成员何时被修改」。由于指针一般为局部变量，为了解决断点失效，一般有两种方法。")]),n._v(" "),e("p",[n._v("命令\t作用\nprint &variable\t查看变量的内存地址\nwatch *(type *)address\t通过内存地址间接设置断点\nwatch -l variable\t指定 location 参数\nwatch variable thread 1\t仅编号为 1 的线程修改变量 var 值时会中断\ncatchpoint\n从字面意思理解，是捕获断点，其主要监测信号的产生。例如 c++ 的 throw，或者加载库的时候，产生断点行为。")]),n._v(" "),e("p",[n._v("命令\t含义\ncatch fork\t程序调用 fork 时中断\ntcatch fork\t设置的断点只触发一次，之后被自动删除\ncatch syscall ptrace\t为 ptrace 系统调用设置断点\n❝\n在command命令后加断点编号，可以定义断点触发后想要执行的操作。在一些高级的自动化调试场景中可能会用到。")]),n._v(" "),e("p",[n._v("❞\n命令行\n命令\t作用\nrun arglist\t以 arglist 为参数列表运行程序\nset args arglist\t指定启动命令行参数\nset args\t指定空的参数列表\nshow args\t打印命令行列表\n程序栈\n命令\t作用\nbacktrace [n]\t打印栈帧\nframe [n]\t选择第 n 个栈帧，如果不存在，则打印当前栈帧\nup n\t选择当前栈帧编号 + n 的栈帧\ndown n\t选择当前栈帧编号 - n 的栈帧\ninfo frame [addr]\t描述当前选择的栈帧\ninfo args\t当前栈帧的参数列表\ninfo locals\t当前栈帧的局部变量\n多进程、多线程\n多进程\nGDB 在调试多进程程序（程序含fork调用）时，默认只追踪父进程。可以通过命令设置，实现只追踪父进程或子进程，或者同时调试父进程和子进程。")]),n._v(" "),e("p",[n._v("命令\t作用\ninfo inferiors\t查看进程列表\nattach pid\t绑定进程 id\ninferior num\t切换到指定进程上进行调试\nprint $_exitcode\t显示程序退出时的返回值\nset follow-fork-mode child\t追踪子进程\nset follow-fork-mode parent\t追踪父进程\nset detach-on-fork on\tfork 调用时只追踪其中一个进程\nset detach-on-fork off\tfork 调用时会同时追踪父子进程\n在调试多进程程序时候，默认情况下，除了当前调试的进程，其他进程都处于挂起状态，所以，如果需要在调试当前进程的时候，其他进程也能正常执行，那么通过设置set schedule-multiple on即可。")]),n._v(" "),e("p",[n._v("多线程\n多线程开发在日常开发工作中很常见，所以多线程的调试技巧非常有必要掌握。")]),n._v(" "),e("p",[n._v("默认调试多线程时，一旦程序中断，所有线程都将暂停。如果此时再继续执行当前线程，其他线程也会同时执行。")]),n._v(" "),e("p",[n._v("命令\t作用\ninfo threads\t查看线程列表\nprint $_thread\t显示当前正在调试的线程编号\nset scheduler-locking on\t调试一个线程时，其他线程暂停执行\nset scheduler-locking off\t调试一个线程时，其他线程同步执行\nset scheduler-locking step\t仅用 step 调试线程时其他线程不执行，用其他命令如 next 调试时仍执行\n如果只关心当前线程，建议临时设置 scheduler-locking 为 on，避免其他线程同时运行，导致命中其他断点分散注意力。")]),n._v(" "),e("p",[n._v("打印输出\n通常情况下，在调试的过程中，我们需要查看某个变量的值，以分析其是否符合预期，这个时候就需要打印输出变量值。")]),n._v(" "),e("p",[n._v("命令\t作用\nwhatis variable\t查看变量的类型\nptype variable\t查看变量详细的类型信息\ninfo variables var\t查看定义该变量的文件，不支持局部变量\n打印字符串\n使用x/s命令打印ASCII字符串，如果是宽字符字符串，需要先看宽字符的长度 print sizeof(str)。")]),n._v(" "),e("p",[n._v("如果长度为2，则使用x/hs打印；如果长度为4，则使用x/ws打印。")]),n._v(" "),e("p",[n._v('命令\t作用\nx/s str\t打印字符串\nset print elements 0\t打印不限制字符串长度 / 或不限制数组长度\ncall printf("%s\\n",xxx)\t这时打印出的字符串不会含有多余的转义符\nprintf "%s\\n",xxx\t同上\n打印数组\n命令\t作用\nprint *array@10\t打印从数组开头连续 10 个元素的值\nprint array[60]@10\t打印 array 数组下标从 60 开始的 10 个元素，即第 60~69 个元素\nset print array-indexes on\t打印数组元素时，同时打印数组的下标\n打印指针\n命令\t作用\nprint ptr\t查看该指针指向的类型及指针地址\nprint *(struct xxx *)ptr\t查看指向的结构体的内容\n打印指定内存地址的值\n使用x命令来打印内存的值，格式为x/nfu addr，以f格式打印从addr开始的n个长度单元为u的内存值。')]),n._v(" "),e("p",[n._v("n：输出单元的个数\nf：输出格式，如x表示以16进制输出，o表示以8进制输出，默认为x\nu：一个单元的长度，b表示1个byte，h表示2个byte（half word），w表示4个byte，g表示8个byte（giant word）\n命令\t作用\nx/8xb array\t以 16 进制打印数组 array 的前 8 个 byte 的值\nx/8xw array\t以 16 进制打印数组 array 的前 16 个 word 的值\n打印局部变量\n命令\t作用\ninfo locals\t打印当前函数局部变量的值\nbacktrace full\t打印当前栈帧各个函数的局部变量值，命令可缩写为 bt\nbt full n\t从内到外显示 n 个栈帧及其局部变量\nbt full -n\t从外向内显示 n 个栈帧及其局部变量\n打印结构体\n命令\t作用\nset print pretty on\t每行只显示结构体的一名成员\nset print null-stop\t不显示'\\000'这种\n函数跳转\n命令\t作用\nset step-mode on\t不跳过不含调试信息的函数，可以显示和调试汇编代码\nfinish\t执行完当前函数并打印返回值，然后触发中断\nreturn 0\t不再执行后面的指令，直接返回，可以指定返回值\ncall printf(\"%s\\n\", str)\t调用 printf 函数，打印字符串 (可以使用 call 或者 print 调用函数)\nprint func()\t调用 func 函数 (可以使用 call 或者 print 调用函数)\nset var variable=xxx\t设置变量 variable 的值为 xxx\nset {type}address = xxx\t给存储地址为 address，类型为 type 的变量赋值\ninfo frame\t显示函数堆栈的信息（堆栈帧地址、指令寄存器的值等）\n其它\n图形化\ntui 为terminal user interface的缩写，在启动时候指定-tui参数，或者调试时使用ctrl+x+a组合键，可进入或退出图形化界面。")]),n._v(" "),e("p",[n._v("命令\t含义\nlayout src\t显示源码窗口\nlayout asm\t显示汇编窗口\nlayout split\t显示源码 + 汇编窗口\nlayout regs\t显示寄存器 + 源码或汇编窗口\nwinheight src +5\t源码窗口高度增加 5 行\nwinheight asm -5\t汇编窗口高度减小 5 行\nwinheight cmd +5\t控制台窗口高度增加 5 行\nwinheight regs -5\t寄存器窗口高度减小 5 行\n汇编\n命令\t含义\ndisassemble function\t查看函数的汇编代码\ndisassemble /mr function\t同时比较函数源代码和汇编代码\n调试和保存 core 文件\n命令\t含义\nfile exec_file  *# *\t加载可执行文件的符号表信息\ncore core_file\t加载 core-dump 文件\ngcore core_file\t生成 core-dump 文件，记录当前进程的状态\n启动方式\n使用 gdb 调试，一般有以下几种启动方式：")]),n._v(" "),e("p",[n._v("gdb filename: 调试可执行程序\ngdb attach pid: 通过” 绑定 “进程 ID 来调试正在运行的进程\ngdb filename -c coredump_file: 调试可执行文件\n在下面的几节中，将分别对上述几种调试方式进行讲解，从例子的角度出发，使得大家能够更好的掌握调试技巧。")]),n._v(" "),e("p",[n._v("调试\n可执行文件\n单线程\n首先，我们先看一段代码：")]),n._v(" "),e("p",[n._v("#include<stdio.h>")]),n._v(" "),e("p",[n._v('void print(int xx, int *xxptr) {\nprintf("In print():\\n");\nprintf("   xx is %d and is stored at %p.\\n", xx, &xx);\nprintf("   ptr points to %p which holds %d.\\n", xxptr, *xxptr);\n}')]),n._v(" "),e("p",[n._v('int main(void) {\nint x = 10;\nint *ptr = &x;\nprintf("In main():\\n");\nprintf("   x is %d and is stored at %p.\\n", x, &x);\nprintf("   ptr points to %p which holds %d.\\n", ptr, *ptr);\nprint(x, ptr);\nreturn 0;\n}')]),n._v(" "),e("p",[n._v("这个代码比较简单，下面我们开始进入调试：")]),n._v(" "),e("p",[n._v("gdb ./test_main\nGNU gdb (GDB) Red Hat Enterprise Linux 7.6.1-114.el7\nCopyright (C) 2013 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later "),e("a",{attrs:{href:"http://gnu.org/licenses/gpl.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://gnu.org/licenses/gpl.html"),e("OutboundLink")],1),n._v('\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.  Type "show copying"\nand "show warranty" for details.\nThis GDB was configured as "x86_64-redhat-linux-gnu".\nFor bug reporting instructions, please see:\n'),e("a",{attrs:{href:"http://www.gnu.org/software/gdb/bugs/",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://www.gnu.org/software/gdb/bugs/"),e("OutboundLink")],1),n._v("...\nReading symbols from /root/test_main...done.\n(gdb) r\nStarting program: /root/./test_main\nIn main():\nx is 10 and is stored at 0x7fffffffe424.\nptr points to 0x7fffffffe424 which holds 10.\nIn print():\nxx is 10 and is stored at 0x7fffffffe40c.\nxxptr points to 0x7fffffffe424 which holds 10.\n[Inferior 1 (process 31518) exited normally]\nMissing separate debuginfos, use: debuginfo-install glibc-2.17-260.el7.x86_64")]),n._v(" "),e("p",[n._v("在上述命令中，我们通过 gdb test 命令启动调试，然后通过执行 r(run 命令的缩写) 执行程序，直至退出，换句话说，上述命令是一个完整的使用 gdb 运行可执行程序的完整过程 (只使用了 r 命令)，接下来，我们将以此为例子，介绍几种比较常见的命令。")]),n._v(" "),e("p",[n._v("断点\n(gdb) b 15\nBreakpoint 1 at 0x400601: file test_main.cc, line 15.\n(gdb) info b\nNum     Type           Disp Enb Address            What\n1       breakpoint     keep y   0x0000000000400601 in main() at test_main.cc:15\n(gdb) r\nStarting program: /root/./test_main\nIn main():\nx is 10 and is stored at 0x7fffffffe424.\nptr points to 0x7fffffffe424 which holds 10.")]),n._v(" "),e("p",[n._v("Breakpoint 1, main () at test_main.cc:15\n15   print(xx, xxptr);\nMissing separate debuginfos, use: debuginfo-install glibc-2.17-260.el7.x86_64\n(gdb)")]),n._v(" "),e("p",[n._v("backtrace\n(gdb) backtrace\n#0  main () at test_main.cc:15\n(gdb)")]),n._v(" "),e("p",[n._v("backtrace 命令是列出当前堆栈中的所有帧。在上面的例子中，栈上只有一帧，编号为 0，属于 main 函数。")]),n._v(" "),e("p",[n._v('(gdb) step\nprint (xx=10, xxptr=0x7fffffffe424) at test_main.cc:4\n4   printf("In print():\\n");\n(gdb)')]),n._v(" "),e("p",[n._v("接着，我们执行了 step 命令，即进入函数内。下面我们继续通过 backtrace 命令来查看栈帧信息。")]),n._v(" "),e("p",[n._v("(gdb) backtrace\n#0  print (xx=10, xxptr=0x7fffffffe424) at test_main.cc:4\n#1  0x0000000000400612 in main () at test_main.cc:15\n(gdb)")]),n._v(" "),e("p",[n._v("从上面输出结果，我们能够看出，有两个栈帧，第 1 帧属于 main 函数，第 0 帧属于 print 函数。")]),n._v(" "),e("p",[n._v("每个栈帧都列出了该函数的参数列表。从上面我们可以看出，main 函数没有参数，而 print 函数有参数，并且显示了其参数的值。")]),n._v(" "),e("p",[n._v("有一点我们可能比较迷惑，在第一次执行 backtrace 的时候，main 函数所在的栈帧编号为 0，而第二次执行的时候，main 函数的栈帧为 1，而 print 函数的栈帧为 0，这是因为_与栈的向下增长_规律一致，我们只需要记住_编号最小帧号就是最近一次调用的函数_。")]),n._v(" "),e("p",[n._v("frame\n栈帧用来存储函数的变量值等信息，默认情况下，GDB 总是位于当前正在执行函数对应栈帧的上下文中。")]),n._v(" "),e("p",[n._v("在前面的例子中，由于当前正在 print() 函数中执行，GDB 位于第 0 帧的上下文中。可以通过 frame 命令来获取当前正在执行的上下文所在的帧。")]),n._v(" "),e("p",[n._v('(gdb) frame\n#0  print (xx=10, xxptr=0x7fffffffe424) at test_main.cc:4\n4   printf("In print():\\n");\n(gdb)')]),n._v(" "),e("p",[n._v("下面，我们尝试使用 print 命令打印下当前栈帧的值，如下：")]),n._v(" "),e("p",[n._v("(gdb) print xx\n$1 = 10\n(gdb) print xxptr\n$2 = (int *) 0x7fffffffe424\n(gdb)")]),n._v(" "),e("p",[n._v("如果我们想看其他栈帧的内容呢？比如 main 函数中 x 和 ptr 的信息呢？假如直接打印这俩值的话，那么就会得到如下：")]),n._v(" "),e("p",[n._v('(gdb) print x\nNo symbol "x" in current context.\n(gdb) print xxptr\nNo symbol "ptr" in current context.\n(gdb)')]),n._v(" "),e("p",[n._v("在此，我们可以通过_frame num_来切换栈帧，如下：")]),n._v(" "),e("p",[n._v("(gdb) frame 1\n#1  0x0000000000400612 in main () at test_main.cc:15\n15   print(x, ptr);\n(gdb) print x\n$3 = 10\n(gdb) print ptr\n$4 = (int *) 0x7fffffffe424\n(gdb)")]),n._v(" "),e("p",[n._v("多线程\n为了方便进行演示，我们创建一个简单的例子，代码如下：")]),n._v(" "),e("p",[n._v("#include "),e("chrono",[n._v("\n#include "),e("iostream",[n._v("\n#include "),e("string",[n._v("\n#include "),e("thread",[n._v("\n#include "),e("vector")],1)],1)],1)],1)],1),n._v(" "),e("p",[n._v('int fun_int(int n) {\nstd::this_thread::sleep_for(std::chrono::seconds(10));\nstd::cout << "in fun_int n = " << n << std::endl;')]),n._v(" "),e("p",[n._v("return 0;\n}")]),n._v(" "),e("p",[n._v('int fun_string(const std::string &s) {\nstd::this_thread::sleep_for(std::chrono::seconds(10));\nstd::cout << "in fun_string s = " << s << std::endl;')]),n._v(" "),e("p",[n._v("return 0;\n}")]),n._v(" "),e("p",[n._v("int main() {\nstd::vector"),e("int",[n._v(" v;\nv.emplace_back(1);\nv.emplace_back(2);\nv.emplace_back(3);")])],1),n._v(" "),e("p",[n._v("std::cout << v.size() << std::endl;")]),n._v(" "),e("p",[n._v('std::thread t1(fun_int, 1);\nstd::thread t2(fun_string, "test");')]),n._v(" "),e("p",[n._v('std::cout << "after thread create" << std::endl;\nt1.join();\nt2.join();\nreturn 0;\n}')]),n._v(" "),e("p",[n._v("上述代码比较简单：")]),n._v(" "),e("p",[n._v("函数 fun_int 的功能是休眠 10s，然后打印其参数\n函数 fun_string 功能是休眠 10s，然后打印其参数\nmain 函数中，创建两个线程，分别执行上述两个函数\n下面是一个完整的调试过程：")]),n._v(" "),e("p",[n._v('(gdb) b 27\nBreakpoint 1 at 0x4013d5: file test.cc, line 27.\n(gdb) b test.cc:32\nBreakpoint 2 at 0x40142d: file test.cc, line 32.\n(gdb) info b\nNum     Type           Disp Enb Address            What\n1       breakpoint     keep y   0x00000000004013d5 in main() at test.cc:27\n2       breakpoint     keep y   0x000000000040142d in main() at test.cc:32\n(gdb) r\nStarting program: /root/test\n[Thread debugging using libthread_db enabled]\nUsing host libthread_db library "/lib64/libthread_db.so.1".')]),n._v(" "),e("p",[n._v("Breakpoint 1, main () at test.cc:27\n(gdb) c\nContinuing.\n3\n[New Thread 0x7ffff6fd2700 (LWP 44996)]\nin fun_int n = 1\n[New Thread 0x7ffff67d1700 (LWP 44997)]")]),n._v(" "),e("p",[n._v('Breakpoint 2, main () at test.cc:32\n32   std::cout << "after thread create" << std::endl;\n(gdb) info threads\nId   Target Id         Frame\n3    Thread 0x7ffff67d1700 (LWP 44997) "test" 0x00007ffff7051fc3 in new_heap () from /lib64/libc.so.6\n2    Thread 0x7ffff6fd2700 (LWP 44996) "test" 0x00007ffff7097e2d in nanosleep () from /lib64/libc.so.6')]),n._v(" "),e("ul",[e("li",[n._v('1    Thread 0x7ffff7fe7740 (LWP 44987) "test" main () at test.cc:32\n(gdb) thread 2\n[Switching to thread 2 (Thread 0x7ffff6fd2700 (LWP 44996))]\n#0  0x00007ffff7097e2d in nanosleep () from /lib64/libc.so.6\n(gdb) bt\n#0  0x00007ffff7097e2d in nanosleep () from /lib64/libc.so.6\n#1  0x00007ffff7097cc4 in sleep () from /lib64/libc.so.6\n#2  0x00007ffff796ceb9 in std::this_thread::__sleep_for(std::chrono::duration<long, std::ratio<1l, 1l> >, std::chrono::duration<long, std::ratio<1l, 1000000000l> >) () from /lib64/libstdc++.so.6\n#3  0x00000000004018cc in std::this_thread::sleep_for<long, std::ratio<1l, 1l> > (__rtime=...) at /usr/include/c++/4.8.2/thread:281\n#4  0x0000000000401307 in fun_int (n=1) at test.cc:9\n#5  0x0000000000404696 in std::_Bind_simple<int ('),e("em",[n._v("(int))(int)>::_M_invoke<0ul>(std::_Index_tuple<0ul>) (this=0x609080)\nat /usr/include/c++/4.8.2/functional:1732\n#6  0x000000000040443d in std::_Bind_simple<int (")]),n._v("(int))(int)>::operator()() (this=0x609080) at /usr/include/c++/4.8.2/functional:1720\n#7  0x000000000040436e in std::thread::_Impl<std::_Bind_simple<int (*(int))(int)> >::_M_run() (this=0x609068) at /usr/include/c++/4.8.2/thread:115\n#8  0x00007ffff796d070 in ?? () from /lib64/libstdc++.so.6\n#9  0x00007ffff7bc6dd5 in start_thread () from /lib64/libpthread.so.0\n#10 0x00007ffff70d0ead in clone () from /lib64/libc.so.6\n(gdb) c\nContinuing.\nafter thread create\nin fun_int n = 1\n[Thread 0x7ffff6fd2700 (LWP 45234) exited]\nin fun_string s = test\n[Thread 0x7ffff67d1700 (LWP 45235) exited]\n[Inferior 1 (process 45230) exited normally]\n(gdb) q")])]),n._v(" "),e("p",[n._v("在上述调试过程中：")]),n._v(" "),e("p",[n._v("b 27 在第 27 行加上断点")]),n._v(" "),e("p",[n._v("b test.cc:32 在第 32 行加上断点 (效果与 b 32 一致)")]),n._v(" "),e("p",[n._v("info b 输出所有的断点信息")]),n._v(" "),e("p",[n._v("r 程序开始运行，并在第一个断点处暂停")]),n._v(" "),e("p",[n._v("c 执行 c 命令，在第二个断点处暂停，在第一个断点和第二个断点之间，创建了两个线程 t1 和 t2")]),n._v(" "),e("p",[n._v("info threads 输出所有的线程信息，从输出上可以看出，总共有 3 个线程，分别为 main 线程、t1 和 t2")]),n._v(" "),e("p",[n._v("thread 2 切换至线程 2")]),n._v(" "),e("p",[n._v("bt 输出线程 2 的堆栈信息")]),n._v(" "),e("p",[n._v("c 直至程序结束")]),n._v(" "),e("p",[n._v("q 退出 gdb")]),n._v(" "),e("p",[n._v("多进程\n同上面一样，我们仍然以一个例子进行模拟多进程调试，代码如下：")]),n._v(" "),e("p",[n._v("#include <stdio.h>\n#include <unistd.h>")]),n._v(" "),e("p",[n._v('int main()\n{\npid_t pid = fork();\nif (pid == -1) {\nperror("fork error\\n");\nreturn -1;\n}')]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('if(pid == 0) { // 子进程\n    int num = 1;\n    while(num == 1){\n      sleep(10);\n     }\n    printf("this is child,pid = %d\\n", getpid());\n} else { // 父进程\n    printf("this is parent,pid = %d\\n", getpid());\n  wait(NULL); // 等待子进程退出\n}\nreturn 0;\n')])])]),e("p",[n._v("}")]),n._v(" "),e("p",[n._v("在上面代码中，包含两个进程，一个是父进程 (也就是 main 进程)，另外一个是由 fork() 函数创建的子进程。")]),n._v(" "),e("p",[n._v("在默认情况下，在多进程程序中，GDB 只调试 main 进程，也就是说无论程序调用了多少次 fork()函数创建了多少个子进程，GDB 在默认情况下，只调试父进程。为了支持多进程调试，从 GDB 版本 7.0 开始支持单独调试 (调试父进程或者子进程) 和同时调试多个进程。")]),n._v(" "),e("p",[n._v("那么，我们该如何调试子进程呢？我们可以使用如下几种方式进行子进程调试。")]),n._v(" "),e("p",[n._v("attach\n首先，无论是父进程还是子进程，都可以通过 attach 命令启动 gdb 进行调试。我们都知道，对于每个正在运行的程序，操作系统都会为其分配一个唯一 ID 号，也就是进程 ID。如果我们知道了进程 ID，就可以使用 attach 命令对其进行调试了。")]),n._v(" "),e("p",[n._v("在上面代码中，fork() 函数创建的子进程内部，首先会进入 while 循环 sleep，然后在 while 循环之后调用 printf 函数。这样做的目的有如下：")]),n._v(" "),e("p",[n._v("帮助 attach 捕获要调试的进程 id\n在使用 gdb 进行调试的时候，真正的代码 (即 print 函数) 没有被执行，这样就可以从头开始对子进程进行调试\n❝\n可能会有疑惑，上面代码以及进入 while 循环，无论如何是不会执行到下面 printf 函数。其实，这就是 gdb 的厉害之处，可以通过 gdb 命令修改 num 的值，以便其跳出 while 循环")]),n._v(" "),e("p",[n._v("❞\n使用如下命令编译生成可执行文件 test_process")]),n._v(" "),e("p",[n._v("g++ -g test_process.cc -o test_process")]),n._v(" "),e("p",[n._v("现在，我们开始尝试启动调试。")]),n._v(" "),e("p",[n._v("gdb -q ./test_process\nReading symbols from /root/test_process...done.\n(gdb)")]),n._v(" "),e("p",[n._v("这里需要说明下，之所以加 - q 选项，是想去掉其他不必要的输出，q 为 quite 的缩写。")]),n._v(" "),e("p",[n._v("(gdb) r\nStarting program: /root/./test_process\nDetaching after fork from child process 37482.\nthis is parent,pid = 37478\n[Inferior 1 (process 37478) exited normally]\nMissing separate debuginfos, use: debuginfo-install glibc-2.17-260.el7.x86_64 libgcc-4.8.5-36.el7.x86_64 libstdc++-4.8.5-36.el7.x86_64\n(gdb) attach 37482\n//符号类输出，此处略去\n(gdb) n\nSingle stepping until exit from function __nanosleep_nocancel,\nwhich has no line number information.\n0x00007ffff72b3cc4 in sleep () from /lib64/libc.so.6\n(gdb)\nSingle stepping until exit from function sleep,\nwhich has no line number information.\nmain () at test_process.cc:8\n8       while(num==10){\n(gdb)")]),n._v(" "),e("p",[n._v("在上述命令中，我们执行了 n(next 的缩写)，使其重新对 while 循环的判断体进行判断。")]),n._v(" "),e("p",[n._v('(gdb) set num = 1\n(gdb) n\n12       printf("this is child,pid = %d\\n",getpid());\n(gdb) c\nContinuing.\nthis is child,pid = 37482\n[Inferior 1 (process 37482) exited normally]\n(gdb)')]),n._v(" "),e("p",[n._v("为了退出 while 循环，我们使用 set 命令设置了 num 的值为 1，这样条件就会失效退出 while 循环，进而执行下面的 printf() 函数；在最后我们执行了 c(continue 的缩写) 命令，支持程序退出。")]),n._v(" "),e("p",[n._v("❝\n如果程序正在正常运行，出现了死锁等现象，则可以通过 ps 获取进程 ID，然后根据 gdb attach pid 进行绑定，进而查看堆栈信息")]),n._v(" "),e("p",[n._v("❞\n指定进程\n默认情况下，GDB 调试多进程程序时候，只调试父进程。GDB 提供了两个命令，可以通过 follow-fork-mode 和 detach-on-fork 来指定调试父进程还是子进程。")]),n._v(" "),e("p",[n._v("follow-fork-mode\n该命令的使用方式为：")]),n._v(" "),e("p",[n._v("(gdb) set follow-fork-mode mode")]),n._v(" "),e("p",[n._v("其中，mode 有以下两个选项：")]),n._v(" "),e("p",[n._v('parent: 父进程，mode 的默认选项\nchild: 子进程，其目的是告诉 gdb 在目标应用调用 fork 之后接着调试子进程而不是父进程，因为在 Linux 系统中 fork() 系统调用成功会返回两次，一次在父进程，一次在子进程\n(gdb) show follow-fork-mode\nDebugger response to a program call of fork or vfork is "parent".\n(gdb) set follow-fork-mode child\n(gdb) r\nStarting program: /root/./test_process\n[New process 37830]\nthis is parent,pid = 37826')]),n._v(" "),e("p",[n._v('^C\nProgram received signal SIGINT, Interrupt.\n[Switching to process 37830]\n0x00007ffff72b3e10 in __nanosleep_nocancel () from /lib64/libc.so.6\nMissing separate debuginfos, use: debuginfo-install glibc-2.17-260.el7.x86_64 libgcc-4.8.5-36.el7.x86_64 libstdc++-4.8.5-36.el7.x86_64\n(gdb) n\nSingle stepping until exit from function __nanosleep_nocancel,\nwhich has no line number information.\n0x00007ffff72b3cc4 in sleep () from /lib64/libc.so.6\n(gdb) n\nSingle stepping until exit from function sleep,\nwhich has no line number information.\nmain () at test_process.cc:8\n8       while(num==10){\n(gdb) show follow-fork-mode\nDebugger response to a program call of fork or vfork is "child".\n(gdb)')]),n._v(" "),e("p",[n._v("在上述命令中，我们做了如下操作：")]),n._v(" "),e("p",[n._v("show follow-fork-mode: 通过该命令来查看当前处于什么模式下，通过输出可以看出，处于 parent 即父进程模式\nset follow-fork-mode child: 指定调试子进程模式\nr: 运行程序，直接运行程序，此时会进入子进程，然后执行 while 循环\nctrl + c: 通过该命令，可以使得 GDB 收到 SIGINT 命令，从而暂停执行 while 循环\nn(next): 继续执行，进而进入到 while 循环的条件判断处\nshow follow-fork-mode: 再次执行该命令，通过输出可以看出，当前处于 child 模式下\ndetach-on-fork\n如果一开始指定要调试子进程还是父进程，那么使用 follow-fork-mode 命令完全可以满足需求; 但是如果想在调试过程中，想根据实际情况在父进程和子进程之间来回切换调试呢？")]),n._v(" "),e("p",[n._v("GDB 提供了另外一个命令：")]),n._v(" "),e("p",[n._v("(gdb) set detach-on-fork mode")]),n._v(" "),e("p",[n._v("其中 mode 有如下两个值：")]),n._v(" "),e("p",[n._v("on: 默认值，即表明只调试一个进程，可以是子进程，也可以是父进程")]),n._v(" "),e("p",[n._v("off: 程序中的每个进程都会被记录，进而我们可以对所有的进程进行调试")]),n._v(" "),e("p",[n._v("如果选择关闭detach-on-fork模式 (mode 为 off)，那么 GDB 将保留对所有被 fork 出来的进程控制，即可用调试所有被 fork 出来的进程。可用 使用info forks命令列出所有的可被 GDB 调试的 fork 进程，并可用使用 fork 命令从一个 fork 进程切换到另一个 fork 进程。")]),n._v(" "),e("p",[n._v("info forks: 打印 DGB 控制下的所有被 fork 出来的进程列表。该列表包括 fork id、进程 id 和当前进程的位置\nfork fork-id: 参数 fork-id 是 GDB 分配的内部 fork 编号，该编号可用通过上面的命令info forks获取\ncoredump\n当我们开发或者使用一个程序时候，最怕的莫过于程序莫名其妙崩溃。为了分析崩溃产生的原因，操作系统的内存内容（包括程序崩溃时候的堆栈等信息）会在程序崩溃的时候 dump 出来（默认情况下，这个文件名为 core.pid，其中 pid 为进程 id），这个 dump 操作叫做 coredump(核心转储)，然后我们可以用调试器调试此文件，以还原程序崩溃时候的场景。")]),n._v(" "),e("p",[n._v("在我们分析如果用 gdb 调试 coredump 文件之前，先需要生成一个 coredump，为了简单起见，我们就用如下例子来生成：")]),n._v(" "),e("p",[n._v("#include <stdio.h>")]),n._v(" "),e("p",[n._v('void print(int *v, int size) {\nfor (int i = 0; i < size; ++i) {\nprintf("elem[%d] = %d\\n", i, v[i]);\n}\n}')]),n._v(" "),e("p",[n._v("int main() {\nint v[] = {0, 1, 2, 3, 4};\nprint(v, 1000);\nreturn 0;\n}")]),n._v(" "),e("p",[n._v("编译并运行该程序：")]),n._v(" "),e("p",[n._v("g++ -g test_core.cc -o test_core\n./test_core")]),n._v(" "),e("p",[n._v("输出如下：")]),n._v(" "),e("p",[n._v("elem[775] = 1702113070\nelem[776] = 1667200115\nelem[777] = 6648431\nelem[778] = 0\nelem[779] = 0\n段错误(吐核)")]),n._v(" "),e("p",[n._v("如我们预期，程序产生了异常，但是却没有生成 coredump 文件，这是因为在系统默认情况下，coredump 生成是关闭的，所以需要设置对应的选项以打开 coredump 生成。")]),n._v(" "),e("p",[n._v("针对多线程程序产生的 coredump，有时候其堆栈信息并不能完整的去分析原因，这就使得我们得有其他方式。")]),n._v(" "),e("p",[n._v("18 年有一次线上故障，在测试环境一切正常，但是在线上的时候，就会 coredump，根据 gdb 调试 coredump，只能定位到了 libcurl 里面，但却定位不出原因，用了大概两天的时间，发现只有在超时的时候，才会 coredump，而测试环境因为配置比较差超时设置的是 20ms，而线上是 5ms，知道 coredump 原因后，采用逐步定位缩小范围法，逐步缩小代码范围，最终定位到是 libcurl 一个 bug 导致。所以，很多时候，定位线上问题需要结合实际情况，采取合适的方法来定位问题。")]),n._v(" "),e("p",[n._v("配置\n配置 coredump 生成，有临时配置 (退出终端后，配置失效) 和永久配置两种。")]),n._v(" "),e("p",[n._v("临时\n通过ulimit -a可以判断当前有没有配置 coredump 生成：")]),n._v(" "),e("p",[n._v("ulimit -a\ncore file size          (blocks, -c) 0\ndata seg size           (kbytes, -d) unlimited\nscheduling priority             (-e) 0")]),n._v(" "),e("p",[n._v("从上面输出可以看出 core file size 后面的数为 0，即不生成 coredump 文件，我们可以通过如下命令进行设置")]),n._v(" "),e("p",[n._v("ulimit -c size")]),n._v(" "),e("p",[n._v("其中 size 为允许生成的 coredump 大小，这个一般尽量设置大点，以防止生成的 coredump 信息不全，笔者一般设置为不限。")]),n._v(" "),e("p",[n._v("ulimit -c unlimited")]),n._v(" "),e("p",[n._v("需要说明的是，临时配置的 coredump 选项，其默认生成路径为执行该命令时候的路径，可以通过修改配置来进行路径修改。")]),n._v(" "),e("p",[n._v("永久\n上面的设置只是使能了 core dump 功能，缺省情况下，内核在 coredump 时所产生的 core 文件放在与该程序相同的目录中，并且文件名固定为 core。很显然，如果有多个程序产生 core 文件，或者同一个程序多次崩溃，就会重复覆盖同一个 core 文件。")]),n._v(" "),e("p",[n._v("过修改 kernel 的参数，可以指定内核所生成的 coredump 文件的文件名。使用下面命令，可以实现 coredump 永久配置、存放路径以及生成 coredump 名称等。")]),n._v(" "),e("p",[n._v("mkdir -p /www/coredump/\nchmod 777 /www/coredump/")]),n._v(" "),e("p",[n._v("/etc/profile\nulimit -c unlimited")]),n._v(" "),e("p",[n._v("/etc/security/limits.conf")]),n._v(" "),e("ul",[e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("     soft     core   unlimited\n")])])])])]),n._v(" "),e("p",[n._v('echo "/www/coredump/core-%e-%p-%h-%t" > /proc/sys/kernel/core_pattern')]),n._v(" "),e("p",[n._v("调试\n现在，我们重新执行如下命令，按照预期产生 coredump 文件：")]),n._v(" "),e("p",[n._v("./test_coredump")]),n._v(" "),e("p",[n._v("elem[955] = 1702113070\nelem[956] = 1667200115\nelem[957] = 6648431\nelem[958] = 0\nelem[959] = 0\n段错误(吐核)")]),n._v(" "),e("p",[n._v("然后使用下面的命令进行 coredump 调试：")]),n._v(" "),e("p",[n._v("gdb ./test_core -c /www/coredump/core_test_core_1640765384_38924 -q")]),n._v(" "),e("p",[n._v("输出如下：")]),n._v(" "),e("p",[n._v('#0  0x0000000000400569 in print (v=0x7fff3293c100, size=1000) at test_core.cc:5\n5     printf("elem[%d] = %d\\n", i, v[i]);\nMissing separate debuginfos, use: debuginfo-install glibc-2.17-260.el7.x86_64 libgcc-4.8.5-36.el7.x86_64 libstdc++-4.8.5-36.el7.x86_64\n(gdb)')]),n._v(" "),e("p",[n._v("可以看出，程序 core 在了第 5 行，此时，我们可以通过where命令来查看堆栈回溯信息。")]),n._v(" "),e("p",[n._v("❝\n在 gdb 中输入 where 命令，可以获取堆栈调用信息。当进行 coredump 调试时候，这个是最基本且最有用处的命令。where 命令输出的结果包含程序中 的函数名称和相关参数值。")]),n._v(" "),e("p",[n._v("❞\n通过 where 命令，我们能够发现程序 core 在了第 5 行，那么根据分析源码基本就能定位原因。")]),n._v(" "),e("p",[n._v("❝\n需要注意的是，在多线程运行的时候，core 不一定在当前线程，这就需要我们对代码有一定的了解，能够保证哪块代码是安全的，然后通过 thread num 切换线程，然后再通过 bt 或者 where 命令查看堆栈信息，进而定位 coredump 原因。")]),n._v(" "),e("p",[n._v("❞\n原理\n在前面几节，我们讲了 gdb 的命令，以及这些命令在调试时候的作用，并以例子进行了演示。作为 C/C++ coder，要知其然，更要知其所以然。所以，借助本节，我们大概讲下 GDB 调试的原理。")]),n._v(" "),e("p",[n._v("gdb 通过系统调用 ptrace 来接管一个进程的执行。ptrace 系统调用提供了一种方法使得父进程可以观察和控制其它进程的执行，检查和改变其核心映像以及寄存器。它主要用来实现断点调试和系统调用跟踪。")]),n._v(" "),e("p",[n._v("ptrace 系统调用定义如下：")]),n._v(" "),e("p",[n._v("#include <sys/ptrace.h>\nlong ptrace(enum __ptrace_request request, pid_t pid, void *addr, void *data)")]),n._v(" "),e("p",[n._v("pid_t pid：指示 ptrace 要跟踪的进程\nvoid *addr：指示要监控的内存地址\nenum __ptrace_request request：决定了系统调用的功能，几个主要的选项：\nPTRACE_TRACEME：表示此进程将被父进程跟踪，任何信号（除了 SIGKILL）都会暂停子进程，接着阻塞于 wait() 等待的父进程被唤醒。子进程内部对 exec() 的调用将发出 SIGTRAP 信号，这可以让父进程在子进程新程序开始运行之前就完全控制它\nPTRACE_ATTACH：attach 到一个指定的进程，使其成为当前进程跟踪的子进程，而子进程的行为等同于它进行了一次 PTRACE_TRACEME 操作。但需要注意的是，虽然当前进程成为被跟踪进程的父进程，但是子进程使用 getppid() 的到的仍将是其原始父进程的 pid\nPTRACE_CONT：继续运行之前停止的子进程。可同时向子进程交付指定的信号\n调试原理\n运行并调试新进程\n运行并调试新进程，步骤如下：")]),n._v(" "),e("p",[n._v("运行 gdb exe\n输入 run 命令，gdb 执行以下操作：\n通过 fork() 系统调用创建一个新进程\n在新创建的子进程中执行 ptrace(PTRACE_TRACEME, 0, 0, 0) 操作\n在子进程中通过 execv() 系统调用加载指定的可执行文件\nattach 运行的进程\n可以通过 gdb attach pid 来调试一个运行的进程，gdb 将对指定进程执行 ptrace(PTRACE_ATTACH, pid, 0, 0) 操作。")]),n._v(" "),e("p",[n._v("需要注意的是，当我们 attach 一个进程 id 时候，可能会报如下错误：")]),n._v(" "),e("p",[n._v("Attaching to process 28849\nptrace: Operation not permitted.")]),n._v(" "),e("p",[n._v("这是因为没有权限进行操作，可以根据启动该进程用户下或者 root 下进行操作。")]),n._v(" "),e("p",[n._v("断点原理\n实现原理\n当我们通过 b 或者 break 设置断点时候，就是在指定位置插入断点指令，当被调试的程序运行到断点的时候，产生 SIGTRAP 信号。该信号被 gdb 捕获并 进行断点命中判断。")]),n._v(" "),e("p",[n._v("设置原理\n在程序中设置断点，就是先在该位置保存原指令，然后在该位置写入 int 3。当执行到 int 3 时，发生软中断，内核会向子进程发送 SIGTRAP 信号。当然，这个信号会转发给父进程。然后用保存的指令替换 int 3 并等待操作恢复。")]),n._v(" "),e("p",[n._v("命中判断\ngdb 将所有断点位置存储在一个链表中。命中判定将被调试程序的当前停止位置与链表中的断点位置进行比较，以查看断点产生的信号。")]),n._v(" "),e("p",[n._v("条件判断\n在断点处恢复指令后，增加了一个条件判断。如果表达式为真，则触发断点。由于需要判断一次，添加条件断点后，是否触发条件断点，都会影响性能。在 x86 平台上，部分硬件支持硬件断点。不是在条件断点处插入 int 3，而是插入另一条指令。当程序到达这个地址时，不是发出 int 3 信号，而是进行比较。特定寄存器的内容和某个地址，然后决定是否发送 int 3。因此，当你的断点位置被程序频繁 “通过” 时，尽量使用硬件断点，这将有助于提高性能。")]),n._v(" "),e("p",[n._v("单步原理\n这个 ptrace 函数本身就支持，可以通过 ptrace(PTRACE_SINGLESTEP, pid,...) 调用来实现单步。")]),n._v(" "),e("p",[n._v('printf("attaching to PID %d\\n", pid);\nif (ptrace(PTRACE_ATTACH, pid, 0, 0) != 0)\n{\nperror("attach failed");\n}\nint waitStat = 0;\nint waitRes = waitpid(pid, &waitStat, WUNTRACED);\nif (waitRes != pid || !WIFSTOPPED(waitStat))\n{\nprintf("unexpected waitpid result!\\n");\nexit(1);\n}')]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("int64_t numSteps = 0;\nwhile (true) {\n    auto res = ptrace(PTRACE_SINGLESTEP, pid, 0, 0);\n}\n")])])]),e("p",[n._v("上述代码，首先接收一个 pid，然后对其进行 attach，最后调用 ptrace 进行单步调试。")]),n._v(" "),e("p",[n._v("其它\n借助本文，简单介绍下笔者工作过程中使用的一些其他命令或者工具。")]),n._v(" "),e("p",[n._v("pstack\n此命令可显示每个进程的栈跟踪。pstack 命令必须由相应进程的属主或 root 运行。可以使用 pstack 来确定进程挂起的位置。此命令允许使用的唯一选项是要检查的进程的 PID。")]),n._v(" "),e("p",[n._v("这个命令在排查进程问题时非常有用，比如我们发现一个服务一直处于 work 状态（如假死状态，好似死循环），使用这个命令就能轻松定位问题所在；可以在一段时间内，多执行几次 pstack，若发现代码栈总是停在同一个位置，那个位置就需要重点关注，很可能就是出问题的地方；")]),n._v(" "),e("p",[n._v("以前面的多线程代码为例，其进程 ID 是 4507(在笔者本地)，那么通过")]),n._v(" "),e("p",[n._v("pstack 4507 输出结果如下：")]),n._v(" "),e("p",[n._v("Thread 3 (Thread 0x7f07aaa69700 (LWP 45708)):\n#0  0x00007f07aab2ee2d in nanosleep () from /lib64/libc.so.6\n#1  0x00007f07aab2ecc4 in sleep () from /lib64/libc.so.6\n#2  0x00007f07ab403eb9 in std::this_thread::__sleep_for(std::chrono::duration<long, std::ratio<1l, 1l> >, std::chrono::duration<long, std::ratio<1l, 1000000000l> >) () from /lib64/libstdc++.so.6\n#3  0x00000000004018cc in void std::this_thread::sleep_for<long, std::ratio<1l, 1l> >(std::chrono::duration<long, std::ratio<1l, 1l> > const&) ()\n#4  0x00000000004012de in fun_int(int) ()\n#5  0x0000000000404696 in int std::_Bind_simple<int ("),e("em",[n._v("(int))(int)>::_M_invoke<0ul>(std::_Index_tuple<0ul>) ()\n#6  0x000000000040443d in std::_Bind_simple<int (")]),n._v("(int))(int)>::operator()() ()\n#7  0x000000000040436e in std::thread::_Impl<std::_Bind_simple<int ("),e("em",[n._v("(int))(int)> >::_M_run() ()\n#8  0x00007f07ab404070 in ?? () from /lib64/libstdc++.so.6\n#9  0x00007f07ab65ddd5 in start_thread () from /lib64/libpthread.so.0\n#10 0x00007f07aab67ead in clone () from /lib64/libc.so.6\nThread 2 (Thread 0x7f07aa268700 (LWP 45709)):\n#0  0x00007f07aab2ee2d in nanosleep () from /lib64/libc.so.6\n#1  0x00007f07aab2ecc4 in sleep () from /lib64/libc.so.6\n#2  0x00007f07ab403eb9 in std::this_thread::__sleep_for(std::chrono::duration<long, std::ratio<1l, 1l> >, std::chrono::duration<long, std::ratio<1l, 1000000000l> >) () from /lib64/libstdc++.so.6\n#3  0x00000000004018cc in void std::this_thread::sleep_for<long, std::ratio<1l, 1l> >(std::chrono::duration<long, std::ratio<1l, 1l> > const&) ()\n#4  0x0000000000401340 in fun_string(std::string const&) ()\n#5  0x000000000040459f in int std::_Bind_simple<int (")]),n._v("(char const*))(std::string const&)>::_M_invoke<0ul>(std::_Index_tuple<0ul>) ()\n#6  0x000000000040441f in std::_Bind_simple<int ("),e("em",[n._v("(char const")]),n._v("))(std::string const&)>::operator()() ()\n#7  0x0000000000404350 in std::thread::_Impl<std::_Bind_simple<int ("),e("em",[n._v("(char const")]),n._v("))(std::string const&)> >::_M_run() ()\n#8  0x00007f07ab404070 in ?? () from /lib64/libstdc++.so.6\n#9  0x00007f07ab65ddd5 in start_thread () from /lib64/libpthread.so.0\n#10 0x00007f07aab67ead in clone () from /lib64/libc.so.6\nThread 1 (Thread 0x7f07aba80740 (LWP 45707)):\n#0  0x00007f07ab65ef47 in pthread_join () from /lib64/libpthread.so.0\n#1  0x00007f07ab403e37 in std::thread::join() () from /lib64/libstdc++.so.6\n#2  0x0000000000401455 in main ()")]),n._v(" "),e("p",[n._v("在上述输出结果中，将进程内部的详细信息都输出在终端，以方便分析问题。")]),n._v(" "),e("p",[n._v("ldd\n在我们编译过程中通常会提示编译失败，通过输出错误信息发现是找不到函数定义，再或者编译成功了，但是运行时候失败 (往往是因为依赖了非正常版本的 lib 库导致)，这个时候，我们就可以通过 ldd 来分析该可执行文件依赖了哪些库以及这些库所在的路径。")]),n._v(" "),e("p",[n._v("用来查看程式运行所需的共享库, 常用来解决程式因缺少某个库文件而不能运行的一些问题。")]),n._v(" "),e("p",[n._v("仍然查看可执行程序 test_thread 的依赖库，输出如下：")]),n._v(" "),e("p",[n._v("ldd -r ./test_thread\nlinux-vdso.so.1 =>  (0x00007ffde43bc000)\nlibpthread.so.0 => /lib64/libpthread.so.0 (0x00007f8c5e310000)\nlibstdc++.so.6 => /lib64/libstdc++.so.6 (0x00007f8c5e009000)\nlibm.so.6 => /lib64/libm.so.6 (0x00007f8c5dd07000)\nlibgcc_s.so.1 => /lib64/libgcc_s.so.1 (0x00007f8c5daf1000)\nlibc.so.6 => /lib64/libc.so.6 (0x00007f8c5d724000)\n/lib64/ld-linux-x86-64.so.2 (0x00007f8c5e52c000)")]),n._v(" "),e("p",[n._v("在上述输出中：")]),n._v(" "),e("p",[n._v("第一列：程序需要依赖什么库\n第二列：系统提供的与程序需要的库所对应的库\n第三列：库加载的开始地址\n在有时候，我们通过 ldd 查看依赖库的时候，会提示找不到库，如下：")]),n._v(" "),e("p",[n._v("ldd -r test_process\nlinux-vdso.so.1 =>  (0x00007ffc71b80000)\nlibstdc++.so.6 => /lib64/libstdc++.so.6 (0x00007fe4badd5000)\nlibm.so.6 => /lib64/libm.so.6 (0x00007fe4baad3000)\nlibgcc_s.so.1 => /lib64/libgcc_s.so.1 (0x00007fe4ba8bd000)\nlibc.so.6 => /lib64/libc.so.6 (0x00007fe4ba4f0000)\n/lib64/ld-linux-x86-64.so.2 (0x00007fe4bb0dc000)\nliba.so => not found")]),n._v(" "),e("p",[n._v("比如上面最后一句提示，liba.so 找不到，这个时候，需要我们知道 liba.so 的路径，比如在 / path/to/liba.so，那么可以有下面两种方式：")]),n._v(" "),e("p",[n._v("LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/path/to/")]),n._v(" "),e("p",[n._v("这样在通过 ldd 查看，就能找到对应的 lib 库，但是这个缺点是临时的，即退出终端后，再执行 ldd，仍然会提示找不到该库，所以就有了另外一种方式，即通过修改 / etc/ld.so.conf，在该文件的后面加上需要的路径，即")]),n._v(" "),e("p",[n._v("include ld.so.conf.d/*.conf\n/path/to/")]),n._v(" "),e("p",[n._v("然后通过如下命令，即可永久生效")]),n._v(" "),e("p",[n._v("/sbin/ldconfig")]),n._v(" "),e("p",[n._v("c++filt\n因为 c++ 支持重载，也就引出了编译器的name mangling机制，对函数进行重命名。")]),n._v(" "),e("p",[n._v("我们通过 strings 命令查看 test_thread 中的函数信息 (仅输出 fun 等相关)")]),n._v(" "),e("p",[n._v("strings test_thread | grep fun_\nin fun_int n =\nin fun_string s =\n_GLOBAL__sub_I__Z7fun_inti\n_Z10fun_stringRKSs")]),n._v(" "),e("p",[n._v("可以看到_Z10fun_stringRKSs 这个函数，如果想知道这个函数定义的话，可以使用 c++filt 命令，如下：")]),n._v(" "),e("p",[n._v("c++filt _Z10fun_stringRKSs\nfun_string(std::basic_string<char, std::char_traits"),e("char",[n._v(", std::allocator"),e("char",[n._v(" > const&)")])],1)],1),n._v(" "),e("p",[n._v("通过上述输出，我们可以将编译器生成的函数名还原到我们代码中的函数名即 fun_string。")]),n._v(" "),e("p",[n._v("结语\nGDB 是一个在 Linux 上进行开发的一个必不可少的调试工具，使用场景依赖于具体的需求或者遇到的具体问题。在我们的日常开发工作中，熟练使用 GDB 加以辅助，能够使得开发过程事半功倍。")]),n._v(" "),e("p",[n._v("本文从一些简单的命令出发，通过举例调试可执行程序 (单线程、多线程以及多进程场景)、coredump 文件等各个场景，使得大家能够更加直观的了解 GDB 的使用。GDB 功能非常强大，笔者工作中使用的都是非常基本的一些功能，如果想深入理解 GDB，则需要去官网进行阅读了解。")]),n._v(" "),e("p",[n._v("好了，本期的文章就到这，我们下期见。")]),n._v(" "),e("p",[n._v("❝\n本文从构思到完成，大概用了三周时间，写作过程是痛苦的 (需要整理资料以及构建各种场景，以及将各种现场还原)，同时又是收获满满的。通过本文，进一步加深了对 GDB 的底层原理理解。")]),n._v(" "),e("p",[n._v("❞\n参考\nhttps://www.codetd.com/en/article/13107993")]),n._v(" "),e("p",[n._v("https://www.codetd.com/en/article/13107993 https://users.ece.utexas.edu/~adnan/gdb-refcard.pdf")]),n._v(" "),e("p",[n._v("https://www.cloudsavvyit.com/10921/debugging-with-gdb-getting-started/")]),n._v(" "),e("p",[n._v("https://blog.birost.com/a?ID=00650-b03e2257-94bf-41f3-b0fc-d352d5b02431")]),n._v(" "),e("p",[n._v("https://www.cnblogs.com/xsln/p/ptrace.html")]),n._v(" "),e("p",[n._v("如果对本文有疑问可以加笔者微信直接交流，笔者也建了 C/C++ 相关的技术群，有兴趣的可以联系笔者加群。")]),n._v(" "),e("p",[n._v("往期精彩回顾")]),n._v(" "),e("p",[n._v("【线上问题】P1 级公司故障，年终奖不保\n【性能优化】lock-free 在召回引擎中的实现\n【性能优化】高效内存池的设计与实现\n2 万字 | 30 张图带你领略 glibc 内存管理精髓\n【万字长文】吃透负载均衡\n流量控制还能这么搞。。。\n技术十年\n聊聊服务注册与发现")]),n._v(" "),e("p",[n._v("点个关注吧!")]),n._v(" "),e("p",[n._v("公众号\n全文完\n本文由 简悦 SimpRead 优化，用以提升阅读体验\n使用了 全新的简悦词法分析引擎 beta，点击查看详细说明\n写在前面\n背景\n概念\n常用命令\n断点\nbreakpoint\nwatchpoint\ncatchpoint\n命令行\n程序栈\n多进程、多线程\n多进程\n多线程\n打印输出\n函数跳转\n其它\n图形化\n汇编\n调试和保存 core 文件\n启动方式\n调试\n可执行文件\n单线程\n多线程\n多进程\ncoredump\n原理\n调试原理\n运行并调试新进程\nattach 运行的进程\n断点原理\n实现原理\n设置原理\n命中判断\n条件判断\n单步原理\n其它\npstack\nldd\nc++filt\n结语\n参考")])])}),[],!1,null,null,null);t.default=r.exports}}]);