(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{546:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("我们已经具备了向数据库插入行和打印出所有行的能力。让我们花点时间来测试一下我们目前得到的东西。")]),s._v(" "),a("p",[s._v("我将使用rspec来编写我的测试，因为我对它很熟悉，而且其语法相当可读。")]),s._v(" "),a("p",[s._v("我将定义一个简短的辅助程序，向我们的数据库程序发送一个命令列表，然后对输出进行断言。")]),s._v(" "),a("div",{staticClass:"language-ruby line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[s._v("describe "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'database'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run_script")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("commands"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    raw_output "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nil")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("IO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./db"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"r+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("pipe"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n      commands"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("each")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        pipe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("puts command\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n      pipe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close_write\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Read entire output")]),s._v("\n      raw_output "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pipe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n    raw_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n  it "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inserts and retrieves a row'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" run_script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insert 1 user1 person1@example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".exit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("to match_array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db > Executed."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db > (1, user1, person1@example.com)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Executed."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db > "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("插入大量的行到数据库中")]),s._v(" "),a("div",{staticClass:"language-ruby line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[s._v("  it "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prints error message when table is full'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    script "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1401")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("map "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insert '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("#{")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("}")])]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("#{")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("}")])]),s._v(" person"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("#{")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("}")])]),s._v('@example.com"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n    script "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".exit"')]),s._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" run_script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("to eq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'db > Error: Table full.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);