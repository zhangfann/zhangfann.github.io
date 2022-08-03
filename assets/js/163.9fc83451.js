(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{547:function(s,e,t){"use strict";t.r(e);var n=t(42),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("世界上最简单的sql编译器以及虚拟机")]),s._v(" "),t("p",[s._v("我们在制作一个sqlite的克隆, sqlite的前端是一个sql编译器, 可以编译一个字符串, 然后产出名为字节码的中间表示.")]),s._v(" "),t("p",[s._v("字节码被传给虚拟机, 然后执行.")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cstack.github.io/db_tutorial/assets/images/arch2.gif",alt:"SQLite Architecture (https://www.sqlite.org/arch.html)"}})]),s._v(" "),t("p",[s._v("像这样把事情分成两步，有几个好处。")]),s._v(" "),t("p",[t("strong",[s._v("减少")]),s._v("了每个部分的复杂性（例如，虚拟机不担心语法错误）。\n允许一次性编译普通查询，并"),t("strong",[s._v("缓存字节码")]),s._v("以提高性能")]),s._v(" "),t("p",[s._v("考虑到这一点，让我们重构我们的主函数并在这个过程中支持两个新的关键字。")]),s._v(" "),t("p",[s._v('像.exit这样的非SQL语句被称为 "'),t("strong",[s._v("元命令")]),s._v('"。它们都以点开始，所以我们检查它们并在一个单独的函数中处理它们。')]),s._v(" "),t("p",[s._v("接下来，我们添加一个步骤，"),t("strong",[s._v("将输入的一行转换成我们内部的语句")]),s._v("表示。这是我们的黑客版本的sqlite前端。")]),s._v(" "),t("p",[s._v("最后，我们将准备好的语句传递给execute_statement。这个函数最终将成为我们的虚拟机。")]),s._v(" "),t("p",[s._v("请注意，我们的两个新函数返回的枚举表示成功或失败。")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("typedef enum {\n  META_COMMAND_SUCCESS,\n  META_COMMAND_UNRECOGNIZED_COMMAND\n} MetaCommandResult;\n\ntypedef enum { PREPARE_SUCCESS, PREPARE_UNRECOGNIZED_STATEMENT } PrepareResult;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v('"Unrecognized statement"？这似乎有点像一个异常。但是异常是不好的（而且C语言甚至不支持异常），所以我在实用的地方使用枚举结果代码。如果我的switch语句没有处理枚举的成员，C编译器会抱怨，所以我们可以放心地处理函数的每个结果。预计将来会有更多的结果代码被加入。')]),s._v(" "),t("p",[s._v("do_meta_command只是对现有功能的一个包装，为更多的命令留下了空间。")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('MetaCommandResult do_meta_command(InputBuffer* input_buffer) {\n  if (strcmp(input_buffer->buffer, ".exit") == 0) {\n    exit(EXIT_SUCCESS);\n  } else {\n    return META_COMMAND_UNRECOGNIZED_COMMAND;\n  }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v('我们的 "prepared statement "现在只包含一个有两个可能值的枚举。当我们允许语句中的参数时，它将包含更多的数据。')]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("typedef enum { STATEMENT_INSERT, STATEMENT_SELECT } StatementType;\n\ntypedef struct {\n  StatementType type;\n} Statement;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("prepare_statement现在并不理解sql, 事实上, 它现在只理解两个词:")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('PrepareResult prepare_statement(InputBuffer* input_buffer,\n                                Statement* statement) {\n  if (strncmp(input_buffer->buffer, "insert", 6) == 0) {\n    statement->type = STATEMENT_INSERT;\n    return PREPARE_SUCCESS;\n  }\n  if (strcmp(input_buffer->buffer, "select") == 0) {\n    statement->type = STATEMENT_SELECT;\n    return PREPARE_SUCCESS;\n  }\n\n  return PREPARE_UNRECOGNIZED_STATEMENT;\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v('值得注意的是我们对insert 使用strncmp, 因为"insert"后面会跟数据')]),s._v(" "),t("p",[s._v("最后, execute_statement包含一些存根:")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('void execute_statement(Statement* statement) {\n  switch (statement->type) {\n    case (STATEMENT_INSERT):\n      printf("This is where we would do an insert.\\n");\n      break;\n    case (STATEMENT_SELECT):\n      printf("This is where we would do a select.\\n");\n      break;\n  }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);