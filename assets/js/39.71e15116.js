(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{509:function(s,n,a){"use strict";a.r(n);var t=a(42),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("我花了一些精力来创作本文，以及熬夜编写本文的示例程序，以便您能在阅读之后可以实践参考，阅读后如果觉得对您有帮助，可以关注作者、收藏、转发和右下角点个“在看”，这是对作者写出优质文章最大的鼓励了。")]),s._v(" "),a("p",[s._v("在本文中，我将创建一种可重用的方法来对 React 中的表格数据进行排序功能，并且使用React Hook的方式编写。我将详细介绍每个步骤，并在此过程中学习一系列有用的技术，如 useState、useMemo、自定义Hook 的使用。")]),s._v(" "),a("p",[s._v("本文不会介绍基本的 React 或 JavaScript 语法，但你不必是 React 方面的专家也能跟上，最终我们的效果如下。")]),s._v(" "),a("p",[s._v("第一步，用 React 创建表格")]),s._v(" "),a("p",[s._v("首先，让我们创建一个表格组件，它将接受一个产品（product）数组，并输出一个非常基本的表，每个产品列出一行。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function ProductTable(props) {\n  const { products } = props;\n  return (\n    <table>\n      <caption>Our products</caption>\n      <thead>\n        <tr>\n          <th>名称</th>\n          <th>价格</th>\n          <th>库存数量</th>\n        </tr>\n      </thead>\n      <tbody>\n        {products.map(product => (\n          <tr key={product.id}>\n            <td>{product.name}</td>\n            <td>{product.price}</td>\n            <td>{product.stock}</td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  );\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("在这里，我们接受一个产品数组，并将它们循环到表中，它是静态的。")]),s._v(" "),a("p",[s._v("第二步，对数据进行排序")]),s._v(" "),a("p",[s._v("得益于内置的数组函数 sort()， JavaScript 中的数据排序非常简单。它将对数字和字符串数组进行排序，而无需额外的参数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const array = [\"mozzarella\", \"gouda\", \"cheddar\"];\narray.sort();\nconsole.log(array); // ['cheddar', 'gouda', 'mozzarella']\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("首先，按照名称的字母顺序对数据进行排序。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function ProductTable(props) {\n  const { products } = props;\n  let sortedProducts = [...products];\n  sortedProducts.sort((a, b) => {\n    if (a.name < b.name) {\n      return -1;\n    }\n    if (a.name > b.name) {\n      return 1;\n    }\n    return 0;\n  });\n  return <Table>{/* as before */}</Table>;\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("这里首先创建了一个 products 的副本，我们可以根据需要更改和更改。我们需要这样做，因为 Array.prototype.sort 函数会更改原始数组，而不是返回新的排序后的副本。")]),s._v(" "),a("p",[s._v("接下来，我们调用 sortedProducts.sort，并将其传递给排序函数。我们检查第一个参数 a 的 name 属性是否在第二个参数b 之前，如果是，则返回负值，这表示列表中 a 应该在 b 之前。如果第一个参数的名称在第二个参数的名称之后，我们将返回一个正数，表示应将 b 放在 a 之前。如果两者相等（即名称相同），我们将返回 0 以保留顺序。")]),s._v(" "),a("p",[s._v("第三步，使我们的表格可排序")]),s._v(" "),a("p",[s._v("所以现在我们可以确保表是按名称排序的——但是我们如何改变排序顺序呢？要更改排序依据的字段，我们需要记住当前排序的字段。我们将使用 useState Hook。")]),s._v(" "),a("p",[s._v("一开始我们什么都不排序。接下来，让我们更改表标题，以包含一种方法来更改我们想要排序的字段。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import React, { useState } from "react";\nconst ProductsTable = props => {\n  const { products } = props;\n  const [sortedField, setSortedField] = useState(null);\n  return (\n    <table>\n      <thead>\n        <tr>\n          <th>\n            <button type="button" onClick={() => setSortedField("name")}>\n              名称\n            </button>\n          </th>\n          <th>\n            <button type="button" onClick={() => setSortedField("price")}>\n              价格\n            </button>\n          </th>\n          <th>\n            <button type="button" onClick={() => setSortedField("stock")}>\n              库存数量\n            </button>\n          </th>\n        </tr>\n      </thead>\n      {/* 像之前一样 */}\n    </table>\n  );\n};\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("现在，每当我们单击一个表标题时，我们都会更新要排序的字段。")]),s._v(" "),a("p",[s._v("我们还没有做任何实际的排序，我们继续。还记得之前的排序算法吗？这里只是稍微修改了一下，以便与我们的字段名一起使用。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import React, { useState } from "react";\nconst ProductsTable = (props) => {\n  const { products } = props;\n  const [sortedField, setSortedField] = useState(null);\n  let sortedProducts = [...products];\n  if (sortedField !== null) {\n    sortedProducts.sort((a, b) => {\n      if (a[sortedField] < b[sortedField]) {\n        return -1;\n      }\n      if (a[sortedField] > b[sortedField]) {\n        return 1;\n      }\n      return 0;\n    });\n  }\n  return (\n    <table>\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("首先，我们要确定我们选择了一个字段来排序，之后我们将根据该字段对产品排序。")]),s._v(" "),a("p",[s._v("第四步，升序和降序操作")]),s._v(" "),a("p",[s._v("我们要看到的下一个功能，是一种在升序和降序之间切换的方法，通过再次单击表的标题项在升序和降序之间切换。")]),s._v(" "),a("p",[s._v("为此，我们需要引入第二种状态：排序顺序。我们将重构当前的 sortedField 状态变量，以保留字段名及其排序方向。该状态变量将不包含字符串，而是包含一个带有键（字段名称）和排序方向的对象。我们将其重命名为 sortConfig，以使其更加清晰。")]),s._v(" "),a("p",[s._v("这是新的排序函数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('sortedProducts.sort((a, b) => {\n  if (a[sortConfig.key] < b[sortConfig.key]) {\n    return sortConfig.direction === "ascending" ? -1 : 1;\n  }\n  if (a[sortConfig.key] > b[sortConfig.key]) {\n    return sortConfig.direction === "ascending" ? 1 : -1;\n  }\n  return 0;\n});\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("现在，如果方向是“ascending(升序)”，我们将像以前一样进行。如果不是，我们将采取相反的操作，以降序排列。")]),s._v(" "),a("p",[s._v("接下来，我们将创建一个新函数 requestSort，它将接受字段名称并相应地更新状态。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('const requestSort = key => {\n  let direction = "ascending";\n  if (sortConfig.key === key && sortConfig.direction === "ascending") {\n    direction = "descending";\n  }\n  setSortConfig({ key, direction });\n};\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("我们还必须更改我们的点击事件处理函数才能使用此新功能！")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('return (\n  <table>\n    <thead>\n      <tr>\n        <th>\n          <button type="button" onClick={() => requestSort("name")}>\n            Name\n          </button>\n        </th>\n        <th>\n          <button type="button" onClick={() => requestSort("price")}>\n            Price\n          </button>\n        </th>\n        <th>\n          <button type="button" onClick={() => requestSort("stock")}>\n            In Stock\n          </button>\n        </th>\n      </tr>\n    </thead>\n    {/* 像之前一样 */}\n  </table>\n);\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("现在我们看起来功能已经很完整了，但是还有一件重要的事情要做。我们需要确保只在需要时才对数据进行排序。目前，我们正在对每个渲染中的所有数据进行排序，这将导致各种各样的性能问题。相反，让我们使用内置的 useMemo Hook 来记忆会导致缓慢的部分！")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import React, { useState, useMemo } from \"react\";\nconst ProductsTable = (props) => {\n  const { products } = props;\n  const [sortConfig, setSortConfig] = useState(null);\n\n\n  useMemo(() => {\n    let sortedProducts = [...products];\n    if (sortedField !== null) {\n      sortedProducts.sort((a, b) => {\n        if (a[sortConfig.key] < b[sortConfig.key]) {\n          return sortConfig.direction === 'ascending' ? -1 : 1;\n        }\n        if (a[sortConfig.key] > b[sortConfig.key]) {\n          return sortConfig.direction === 'ascending' ? 1 : -1;\n        }\n        return 0;\n      });\n    }\n    return sortedProducts;\n  }, [products, sortConfig]);\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("useMemo 是一种缓存或记忆昂贵计算的方法。给定相同的输入，如果我们出于某种原因重新渲染组件，它不必对产品进行两次排序。请注意，每当我们的产品发生变化，或者根据变化对字段或排序方向进行排序时，我们都希望触发一个新的排序。")]),s._v(" "),a("p",[s._v("在这个函数中包装我们的代码将对我们的表排序产生巨大的性能影响！")]),s._v(" "),a("p",[s._v("优化，让代码可复用")]),s._v(" "),a("p",[s._v("对于 hooks 最好的作用就是使代码复用变得很容易，React 具有称为自定义 Hook 的功能。它们听起来很花哨，但它们都是常规函数，在其中使用了其他 Hook。让我们将代码重构为包含在自定义 Hook 中，这样我们就可以到处使用它了！")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import React, { useState, useMemo } from "react";\n\n\nconst useSortableData = (items, config = null) => {\n  const [sortConfig, setSortConfig] = useState(config);\n\n\n  const sortedItems = useMemo(() => {\n    let sortableItems = [...items];\n    if (sortConfig !== null) {\n      sortableItems.sort((a, b) => {\n        if (a[sortConfig.key] < b[sortConfig.key]) {\n          return sortConfig.direction === "ascending" ? -1 : 1;\n        }\n        if (a[sortConfig.key] > b[sortConfig.key]) {\n          return sortConfig.direction === "ascending" ? 1 : -1;\n        }\n        return 0;\n      });\n    }\n    return sortableItems;\n  }, [items, sortConfig]);\n\n\n  const requestSort = key => {\n    let direction = "ascending";\n    if (sortConfig.key === key && sortConfig.direction === "ascending") {\n      direction = "descending";\n    }\n    setSortConfig({ key, direction });\n  };\n\n\n  return { items, requestSort };\n};\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("p",[s._v("这几乎是我们先前代码的复制和粘贴，并引入了一些重命名。useSortableData 接受 items 和一个可选的初始排序状态。它返回一个带有已排序 items 的对象和一个用于重新排序 items 的函数。")]),s._v(" "),a("p",[s._v("我们的表代码现在看起来像这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const ProductsTable = props => {\n  const { products } = props;\n  const { items, requestSort } = useSortableData(products);\n  return <table>{/* ... */}</table>;\n};\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("最后一点")]),s._v(" "),a("p",[s._v("缺少一小部分，一种指示表格如何排序的方法。为了表明这一点，在我们的设计中，我们还需要返回内部状态 sortConfig。让我们返回它，并使用它来生成样式以应用到我们的表格标题！")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('const ProductTable = props => {\n  const { items, requestSort, sortConfig } = useSortableData(props.products);\n  const getClassNamesFor = name => {\n    if (!sortConfig) {\n      return;\n    }\n    return sortConfig.key === name ? sortConfig.direction : undefined;\n  };\n  return (\n    <table>\n      <caption>Products</caption>\n      <thead>\n        <tr>\n          <th>\n            <button\n              type="button"\n              onClick={() => requestSort("name")}\n              className={getClassNamesFor("name")}\n            >\n              Name\n            </button>\n          </th>\n          {/* … */}\n        </tr>\n      </thead>\n      {/* … */}\n    </table>\n  );\n};\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);