(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{539:function(s,n,e){"use strict";e.r(n);var t=e(42),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Part 3 - An In-Memory, Append-Only, Single-Table Database")]),s._v(" "),e("p",[s._v("part_3_an_in_memory_append_only_single_table_database")]),s._v(" "),e("p",[s._v("内存态的, 仅支持追加, 单表的数据库")]),s._v(" "),e("p",[s._v("我们将从小处着手，给我们的数据库设置很多限制。现在，它将。")]),s._v(" "),e("p",[s._v("支持两种操作："),e("strong",[s._v("插入行")]),s._v("和打印所有行\n"),e("strong",[s._v("只驻留在内存")]),s._v("中（没有持久化到磁盘）。\n支持一个"),e("strong",[s._v("单一")]),s._v("的、硬编码的表")]),s._v(" "),e("p",[s._v("我们的硬编码表将用来存储用户，看起来像这样。")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("column")]),s._v(" "),e("th",[s._v("type")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("id")]),s._v(" "),e("td",[s._v("integer")])]),s._v(" "),e("tr",[e("td",[s._v("username")]),s._v(" "),e("td",[s._v("varchar(32)")])]),s._v(" "),e("tr",[e("td",[s._v("email")]),s._v(" "),e("td",[s._v("varchar(255)")])])])]),s._v(" "),e("p",[s._v("这是一个简单的模式, 但是它能够支持多种数据类型以及多种长度的文本数据.")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" cstack foo"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@bar.com")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("我们需要升级prepare_statement来处理这样的语句")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('   if (strncmp(input_buffer->buffer, "insert", 6) == 0) {\n     statement->type = STATEMENT_INSERT;\n+    int args_assigned = sscanf(\n+        input_buffer->buffer, "insert %d %s %s", &(statement->row_to_insert.id),\n+        statement->row_to_insert.username, statement->row_to_insert.email);\n+    if (args_assigned < 3) {\n+      return PREPARE_SYNTAX_ERROR;\n+    }\n     return PREPARE_SUCCESS;\n   }\n   if (strcmp(input_buffer->buffer, "select") == 0) {\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("我们存储这些数据在row数据结构中")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+#define COLUMN_USERNAME_SIZE 32\n+#define COLUMN_EMAIL_SIZE 255\n+typedef struct {\n+  uint32_t id;\n+  char username[COLUMN_USERNAME_SIZE];\n+  char email[COLUMN_EMAIL_SIZE];\n+} Row;\n+\n typedef struct {\n   StatementType type;\n+  Row row_to_insert;  // only used by insert statement\n } Statement;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("现在我们需要将这些数据复制到代表该表的一些数据结构中。SQLite使用B树来进行快速查找、插入和删除。我们将从更简单的东西开始。就像B树一样，它将把行分成若干页，但不是把这些页作为一棵树来排列，而是把它们作为一个数组来排列。")]),s._v(" "),e("p",[s._v("我的计划是这样的。")]),s._v(" "),e("p",[s._v("将行存储在称为页的内存块中\n每页存储尽可能多的行。\n每页的行都被序列化为一个紧凑的表示法\n页面只在需要时分配\n保持一个固定大小的指向页的数组\n首先，我们将定义行的紧凑表示法。")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("column")]),s._v(" "),e("th",[s._v("size(bytes)")]),s._v(" "),e("th",[s._v("offset")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("id")]),s._v(" "),e("td",[s._v("4")]),s._v(" "),e("td",[s._v("0")])]),s._v(" "),e("tr",[e("td",[s._v("username")]),s._v(" "),e("td",[s._v("32")]),s._v(" "),e("td",[s._v("4")])]),s._v(" "),e("tr",[e("td",[s._v("email")]),s._v(" "),e("td",[s._v("255")]),s._v(" "),e("td",[s._v("36")])]),s._v(" "),e("tr",[e("td",[s._v("total")]),s._v(" "),e("td",[s._v("291")]),s._v(" "),e("td")])])]),s._v(" "),e("p",[s._v("我们同样需要将代码转换为紧凑的表示")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+void serialize_row(Row* source, void* destination) {\n+  memcpy(destination + ID_OFFSET, &(source->id), ID_SIZE);\n+  memcpy(destination + USERNAME_OFFSET, &(source->username), USERNAME_SIZE);\n+  memcpy(destination + EMAIL_OFFSET, &(source->email), EMAIL_SIZE);\n+}\n+\n+void deserialize_row(void* source, Row* destination) {\n+  memcpy(&(destination->id), source + ID_OFFSET, ID_SIZE);\n+  memcpy(&(destination->username), source + USERNAME_OFFSET, USERNAME_SIZE);\n+  memcpy(&(destination->email), source + EMAIL_OFFSET, EMAIL_SIZE);\n+}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("一个表结构如下所示")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+const uint32_t PAGE_SIZE = 4096;\n+#define TABLE_MAX_PAGES 100\n+const uint32_t ROWS_PER_PAGE = PAGE_SIZE / ROW_SIZE;\n+const uint32_t TABLE_MAX_ROWS = ROWS_PER_PAGE * TABLE_MAX_PAGES;\n+\n+typedef struct {\n+  uint32_t num_rows;\n+  void* pages[TABLE_MAX_PAGES];\n+} Table;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("我将我们的页面大小定为4K字节，因为它与大多数计算机架构的虚拟内存系统中使用的页面大小相同。这意味着我们数据库中的一个页面对应于操作系统使用的一个页面。操作系统会将页面作为整个单元进出内存，而不是将它们拆开。")]),s._v(" "),e("p",[s._v("我设定了一个任意的限制，即我们要分配的100个页面。当我们切换到树状结构时，我们的数据库的最大尺寸将只受到文件最大尺寸的限制。(虽然我们仍然会限制我们一次在内存中保留多少页)")]),s._v(" "),e("p",[e("strong",[s._v("行不应该跨越页的边界")]),s._v("。由于页面在内存中可能不会彼此相邻，这个假设使得读/写行更加容易。")]),s._v(" "),e("p",[s._v("说到这里，我们"),e("strong",[s._v("如何计算出在内存中对某一特定行的读/写位置")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+void* row_slot(Table* table, uint32_t row_num) {\n+  uint32_t page_num = row_num / ROWS_PER_PAGE;\n+  void* page = table->pages[page_num];\n+  if (page == NULL) {\n+    // Allocate memory only when we try to access page\n+    page = table->pages[page_num] = malloc(PAGE_SIZE);\n+  }\n+  uint32_t row_offset = row_num % ROWS_PER_PAGE;\n+  uint32_t byte_offset = row_offset * ROW_SIZE;\n+  return page + byte_offset;\n+}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("执行语句来读写row")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('-void execute_statement(Statement* statement) {\n+ExecuteResult execute_insert(Statement* statement, Table* table) {\n+  if (table->num_rows >= TABLE_MAX_ROWS) {\n+    return EXECUTE_TABLE_FULL;\n+  }\n+\n+  Row* row_to_insert = &(statement->row_to_insert);\n+\n+  serialize_row(row_to_insert, row_slot(table, table->num_rows));\n+  table->num_rows += 1;\n+\n+  return EXECUTE_SUCCESS;\n+}\n+\n+ExecuteResult execute_select(Statement* statement, Table* table) {\n+  Row row;\n+  for (uint32_t i = 0; i < table->num_rows; i++) {\n+    deserialize_row(row_slot(table, i), &row);\n+    print_row(&row);\n+  }\n+  return EXECUTE_SUCCESS;\n+}\n+\n+ExecuteResult execute_statement(Statement* statement, Table* table) {\n   switch (statement->type) {\n     case (STATEMENT_INSERT):\n-      printf("This is where we would do an insert.\\n");\n-      break;\n+      return execute_insert(statement, table);\n     case (STATEMENT_SELECT):\n-      printf("This is where we would do a select.\\n");\n-      break;\n+      return execute_select(statement, table);\n   }\n }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br")])]),e("p",[s._v("初始化Table 释放Table")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+ Table* new_table() {\n+  Table* table = malloc(sizeof(Table));\n+  table->num_rows = 0;\n+  for (uint32_t i = 0; i < TABLE_MAX_PAGES; i++) {\n+     table->pages[i] = NULL;\n+  }\n+  return table;\n+}\n+\n+void free_table(Table* table) {\n+    for (int i = 0; table->pages[i]; i++) {\n+\tfree(table->pages[i]);\n+    }\n+    free(table);\n+}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);