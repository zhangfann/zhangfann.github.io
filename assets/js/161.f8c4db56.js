(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{543:function(s,n,e){"use strict";e.r(n);var t=e(42),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Part 1 - Introduction and Setting up the REPL")]),s._v(" "),e("p",[s._v("part_1_introduction_and_setting_up_the_repl")]),s._v(" "),e("p",[s._v("作为一名网络开发人员，我在工作中每天都在使用关系型数据库，但它们对我来说是一个黑盒子。我有一些问题。")]),s._v(" "),e("p",[s._v("数据是以什么格式保存的？(在内存和磁盘上)\n什么时候从内存移到磁盘上？\n为什么每个表只能有一个主键？\n回滚交易是如何进行的？\n索引是如何格式化的？\n何时以及如何进行全表扫描？\n准备好的语句是以什么格式保存的？\n换句话说，数据库是如何工作的？")]),s._v(" "),e("p",[s._v("为了弄清楚问题，我正在从头开始编写一个数据库。它以sqlite为模型，因为它被设计成比MySQL或PostgreSQL更小的功能，所以我有更好的希望了解它。整个数据库被存储在一个文件中")]),s._v(" "),e("h1",{attrs:{id:"sqlite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sqlite"}},[s._v("#")]),s._v(" sqlite")]),s._v(" "),e("blockquote",[e("p",[s._v("前端是sql解析, 后端是存储引擎, 还需要一个事务管理")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cstack.github.io/db_tutorial/assets/images/arch1.gif",alt:"sqlite architecture (https://www.sqlite.org/zipvfs/doc/trunk/www/howitworks.wiki)"}})]),s._v(" "),e("p",[s._v("一个查询要经过一连串的组件，以检索或修改数据。前端由以下部分组成。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("分词器\n解析器\n代码生成器\n")])])]),e("p",[s._v("前端的输入是一个SQL查询。输出是sqlite虚拟机字节码（基本上是一个可以在数据库上运行的编译程序）。")]),s._v(" "),e("p",[s._v("后端由以下部分组成。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("虚拟机\nB-tree\n页管理器\n操作系统接口\n")])])]),e("p",[s._v("虚拟机将前端生成的字节码作为指令。然后它可以对一个或多个表或索引进行操作，每个表或索引都存储在一个叫做B树的数据结构中。虚拟机本质上是一个关于字节码指令类型的大开关语句。")]),s._v(" "),e("p",[s._v("每个B-树由许多节点组成。每个节点都是一个页面的长度。B-树可以通过向页管理器发出命令从磁盘上检索一个页面或将其保存回磁盘。")]),s._v(" "),e("p",[s._v("页管理器接收读取或写入数据页的命令。它负责在数据库文件的适当偏移处进行读/写。它还在内存中保存最近访问的页面的缓存，并决定这些页面何时需要被写回磁盘。")]),s._v(" "),e("p",[s._v("os接口是根据sqlite编译的操作系统而不同的一层。在本教程中，我不打算支持多个平台。")]),s._v(" "),e("p",[s._v("千里之行始于足下，所以让我们从更直接的东西开始：REPL。")]),s._v(" "),e("h1",{attrs:{id:"制作一个简单的repl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#制作一个简单的repl"}},[s._v("#")]),s._v(" 制作一个简单的REPL")]),s._v(" "),e("p",[s._v("当启动时sqlite从一个读-执行-打印循环开始")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("~ sqlite3\nSQLite version "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.16")]),s._v(".0 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2016")]),s._v("-11-04 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":09:39\nEnter "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('".help"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" usage hints.\nConnected to a transient in-memory database.\nUse "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('".open FILENAME"')]),s._v(" to reopen on a persistent database.\nsqlite"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create table "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id int, username varchar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", email varchar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsqlite"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" .tables\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v("\nsqlite"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" .exit\n~\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("为了做到这一点, 我们的main函数会有个无限循环来打印提示符, 获取一行输入, 然后处理这行输入")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('int main(int argc, char* argv[]) {\n  InputBuffer* input_buffer = new_input_buffer();\n  while (true) {\n    print_prompt();\n    read_input(input_buffer);\n\n    if (strcmp(input_buffer->buffer, ".exit") == 0) {\n      close_input_buffer(input_buffer);\n      exit(EXIT_SUCCESS);\n    } else {\n      printf("Unrecognized command \'%s\'.\\n", input_buffer->buffer);\n    }\n  }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("我们将会定义一个InputBuffer作为一个小的包装来和 getline() 进行交互")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("typedef struct {\n  char* buffer;\n  size_t buffer_length;\n  ssize_t input_length;\n} InputBuffer;\n\nInputBuffer* new_input_buffer() {\n  InputBuffer* input_buffer = (InputBuffer*)malloc(sizeof(InputBuffer));\n  input_buffer->buffer = NULL;\n  input_buffer->buffer_length = 0;\n  input_buffer->input_length = 0;\n\n  return input_buffer;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("接下来, print_prompt() 打印一个提示符给用户")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('void print_prompt() { printf("db > "); }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("为了读一行输入, 我们使用 getline()")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssize_t getline(char **lineptr, size_t *n, FILE *stream);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("lineptr : 指向变量的指针，我们用它来指向包含已读行的缓冲区。如果它被设置为NULL，它就会被getline所mallocat，因此应该被用户释放，即使命令失败。")]),s._v(" "),e("p",[s._v("n : 指向变量的指针，我们用来保存分配的缓冲区的大小。")]),s._v(" "),e("p",[s._v("stream：要读取的输入流。我们将从标准输入中读取。")]),s._v(" "),e("p",[s._v("返回值 : 读取的字节数，可能小于缓冲区的大小。")]),s._v(" "),e("p",[s._v("我们告诉getline将读取的行存储在input_buffer->buffer中，将分配的缓冲区的大小存储在input_buffer->buffer_length中。我们将返回值存储在input_buffer->input_length中。")]),s._v(" "),e("p",[s._v("buffer开始是空的，所以getline分配了足够的内存来容纳输入行，并使buffer指向它。")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('void read_input(InputBuffer* input_buffer) {\n  ssize_t bytes_read =\n      getline(&(input_buffer->buffer), &(input_buffer->buffer_length), stdin);\n\n  if (bytes_read <= 0) {\n    printf("Error reading input\\n");\n    exit(EXIT_FAILURE);\n  }\n\n  // Ignore trailing newline\n  input_buffer->input_length = bytes_read - 1;\n  input_buffer->buffer[bytes_read - 1] = 0;\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("现在应该定义一个函数，释放为InputBuffer *实例和相应结构的缓冲区元素分配的内存（getline在read_input中为input_buffer->buffer分配内存）。")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void close_input_buffer(InputBuffer* input_buffer) {\n    free(input_buffer->buffer);\n    free(input_buffer);\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("最后，我们解析并执行该命令。现在只有一个公认的命令：.exit，它可以终止程序。否则，我们会打印一个错误信息并继续循环。")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('if (strcmp(input_buffer->buffer, ".exit") == 0) {\n  close_input_buffer(input_buffer);\n  exit(EXIT_SUCCESS);\n} else {\n  printf("Unrecognized command \'%s\'.\\n", input_buffer->buffer);\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("我们现在已经有了要给可以运行的repl, 下一部分我们将会开始开发我们自己的命令语言.")])])}),[],!1,null,null,null);n.default=a.exports}}]);