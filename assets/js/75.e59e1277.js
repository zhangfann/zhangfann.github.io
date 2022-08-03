(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{461:function(n,s,e){"use strict";e.r(s);var r=e(42),a=Object(r.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("写这篇文章的目的，是为了帮助更多的人理解 rosedb，我会从零开始实现一个简单的包含 PUT、GET、DELETE 操作的 k-v 存储引擎。")]),n._v(" "),e("p",[n._v("你可以将其看做是一个简易版本的 rosedb，就叫它 minidb 吧（mini 版本的 rosedb）。")]),n._v(" "),e("p",[n._v("无论你是 Go 语言初学者，还是想进阶 Go 语言，或者是对 k-v 存储感兴趣，都可以尝试自己动手实现一下，我相信一定会对你帮助很大的。")]),n._v(" "),e("p",[n._v("说到存储，其实解决的一个核心问题就是，怎么存放数据，怎么取出数据。在计算机的世界里，这个问题会更加的多样化。")]),n._v(" "),e("p",[n._v("计算机当中有内存和磁盘，内存是易失性的，掉电之后存储的数据全部丢失，所以，如果想要系统崩溃再重启之后依然正常使用，就不得不将数据存储在非易失性介质当中，最常见的便是磁盘。")]),n._v(" "),e("p",[n._v("所以，针对一个单机版的 k-v，我们需要设计数据在内存中应该怎么存放，在磁盘中应该怎么存放。")]),n._v(" "),e("p",[n._v("当然，已经有很多优秀的前辈们去探究过了，并且已经有了经典的总结，主要将数据存储的模型分为了两类：B+ 树和 LSM 树。")]),n._v(" "),e("p",[n._v("本文的重点不是讲这两种模型，所以只做简单介绍。")]),n._v(" "),e("p",[e("strong",[n._v("B+ 树")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://pic1.zhimg.com/v2-c9e2ece8af2198c4113a8132c9b0dd8c_b.jpg",alt:"img"}})]),n._v(" "),e("p",[n._v("B+ 树由二叉查找树演化而来，通过增加每层节点的数量，来降低树的高度，适配磁盘的页，尽量减少磁盘 IO 操作。")]),n._v(" "),e("p",[n._v("B+ 树查询性能比较稳定，在写入或更新时，会查找并定位到磁盘中的位置并进行原地操作，注意这里是随机 IO，并且大量的插入或删除还有可能触发页分裂和合并，写入性能一般，因此 B+ 树适合读多写少的场景。")]),n._v(" "),e("p",[e("strong",[n._v("LSM 树")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://pic1.zhimg.com/v2-324da90bb80890b5f9feb90b933c1978_b.jpg",alt:"img"}})]),n._v(" "),e("p",[n._v("LSM Tree（Log Structured Merge Tree，日志结构合并树）其实并不是一种具体的树类型的数据结构，而只是一种数据存储的模型，它的核心思想基于一个事实：顺序 IO 远快于随机 IO。")]),n._v(" "),e("p",[n._v("和 B+ 树不同，在 LSM 中，数据的插入、更新、删除都会被记录成一条日志，然后追加写入到磁盘文件当中，这样所有的操作都是顺序 IO，因此 LSM 比较适用于写多读少的场景。")]),n._v(" "),e("p",[n._v("看了前面的两种基础存储模型，相信你已经对如何存取数据有了基本的了解，而 minidb 基于一种更加简单的存储结构，总体上它和 LSM 比较类似。")]),n._v(" "),e("p",[n._v("我先不直接干巴巴的讲这个模型的概念，而是通过一个简单的例子来看一下 minidb 当中数据 PUT、GET、DELETE 的流程，借此让你理解这个简单的存储模型。")]),n._v(" "),e("p",[e("strong",[n._v("PUT")])]),n._v(" "),e("p",[n._v("我们需要存储一条数据，分别是 key 和 value，首先，为预防数据丢失，我们会将这个 key 和 value 封装成一条记录（这里把这条记录叫做 Entry），追加到磁盘文件当中。Entry 的里面的内容，大致是 key、value、key 的大小、value 的大小、写入的时间。")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://pic2.zhimg.com/v2-5dbd0e85d0d6387d866fd696fc978b95_b.jpg",alt:"img"}})]),n._v(" "),e("p",[n._v("所以磁盘文件的结构非常简单，就是多个 Entry 的集合。")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://pic3.zhimg.com/v2-8a261d22994575578380f901bc0c8a5e_b.jpg",alt:"img"}})]),n._v(" "),e("p",[n._v("磁盘更新完了，再更新内存，内存当中可以选择一个简单的数据结构，比如哈希表。哈希表的 key 对应存放的是 Entry 在磁盘中的位置，便于查找时进行获取。")]),n._v(" "),e("p",[n._v("这样，在 minidb 当中，一次数据存储的流程就完了，只有两个步骤：一次磁盘记录的追加，一次内存当中的索引更新。")]),n._v(" "),e("p",[e("strong",[n._v("GET")])]),n._v(" "),e("p",[n._v("再来看 GET 获取数据，首先在内存当中的哈希表查找到 key 对应的索引信息，这其中包含了 value 存储在磁盘文件当中的位置，然后直接根据这个位置，到磁盘当中去取出 value 就可以了。")]),n._v(" "),e("p",[e("strong",[n._v("DEL")])]),n._v(" "),e("p",[n._v("然后是删除操作，这里并不会定位到原记录进行删除，而还是将删除的操作封装成 Entry，追加到磁盘文件当中，只是这里需要标识一下 Entry 的类型是删除。")]),n._v(" "),e("p",[n._v("然后在内存当中的哈希表删除对应的 key 的索引信息，这样删除操作便完成了。")]),n._v(" "),e("p",[n._v("可以看到，不管是插入、查询、删除，都只有两个步骤：一次内存中的索引更新，一次磁盘文件的记录追加。所以无论数据规模如何， minidb 的写入性能十分稳定。")]),n._v(" "),e("p",[e("strong",[n._v("Merge")])]),n._v(" "),e("p",[n._v("最后再来看一个比较重要的操作，前面说到，磁盘文件的记录是一直在追加写入的，这样会导致文件容量也一直在增加。并且对于同一个 key，可能会在文件中存在多条 Entry（回想一下，更新或删除 key 内容也会追加记录），那么在数据文件当中，其实存在冗余的 Entry 数据。")]),n._v(" "),e("p",[n._v("举一个简单的例子，比如针对 key A， 先后设置其 value 为 10、20、30，那么磁盘文件中就有三条记录：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://pic4.zhimg.com/v2-e4c9e8f90b73dd8d581e4e1f2e4d8cdb_b.jpg",alt:"img"}})]),n._v(" "),e("p",[n._v("此时 A 的最新值是 30，那么其实前两条记录已经是无效的了。")]),n._v(" "),e("p",[n._v("针对这种情况，我们需要定期合并数据文件，清理无效的 Entry 数据，这个过程一般叫做 merge。")]),n._v(" "),e("p",[n._v("merge 的思路也很简单，需要取出原数据文件的所有 Entry，将有效的 Entry 重新写入到一个新建的临时文件中，最后将原数据文件删除，临时文件就是新的数据文件了。")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://pic2.zhimg.com/v2-7383e023ae70465b4ad5c61dac1c2e69_b.jpg",alt:"img"}})]),n._v(" "),e("p",[n._v("这就是 minidb 底层的数据存储模型，它的名字叫做 bitcask，当然 rosedb 采用的也是这种模型。它本质上属于类 LSM 的模型，核心思想是利用顺序 IO 来提升写性能，只不过在实现上，比 LSM 简单多了。")]),n._v(" "),e("p",[n._v("介绍完了底层的存储模型，就可以开始代码实现了，我将完整的代码实现放到了我的 Github 上面，地址：")]),n._v(" "),e("p",[n._v("文章当中就截取部分关键的代码。")]),n._v(" "),e("p",[n._v("首先是打开数据库，需要先加载数据文件，然后取出文件中的 Entry 数据，还原索引状态，关键部分代码如下：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("func Open(dirPath string) (*MiniDB, error) {\n   // 如果数据库目录不存在，则新建一个\n   if _, err := os.Stat(dirPath); os.IsNotExist(err) {\n      if err := os.MkdirAll(dirPath, os.ModePerm); err != nil {\n         return nil, err\n      }\n   }\n\n   // 加载数据文件\n   dbFile, err := NewDBFile(dirPath)\n   if err != nil {\n      return nil, err\n   }\n\n   db := &MiniDB{\n      dbFile: dbFile,\n      indexes: make(map[string]int64),\n      dirPath: dirPath,\n   }\n\n   // 加载索引\n   db.loadIndexesFromFile(dbFile)\n   return db, nil\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br")])]),e("p",[n._v("再来看看 PUT 方法，流程和上面的描述一样，先更新磁盘，写入一条记录，再更新内存：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("func (db *MiniDB) Put(key []byte, value []byte) (err error) {\n  \n   offset := db.dbFile.Offset\n   // 封装成 Entry\n   entry := NewEntry(key, value, PUT)\n   // 追加到数据文件当中\n   err = db.dbFile.Write(entry)\n\n   // 写到内存\n   db.indexes[string(key)] = offset\n   return\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br")])]),e("p",[n._v("GET 方法需要先从内存中取出索引信息，判断是否存在，不存在直接返回，存在的话从磁盘当中取出数据。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("func (db *MiniDB) Get(key []byte) (val []byte, err error) {\n   // 从内存当中取出索引信息\n   offset, ok := db.indexes[string(key)]\n   // key 不存在\n   if !ok {\n      return\n   }\n\n   // 从磁盘中读取数据\n   var e *Entry\n   e, err = db.dbFile.Read(offset)\n   if err != nil && err != io.EOF {\n      return\n   }\n   if e != nil {\n      val = e.Value\n   }\n   return\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br")])]),e("p",[n._v("DEL 方法和 PUT 方法类似，只是 Entry 被标识为了 DEL ，然后封装成 Entry 写到文件当中：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("func (db *MiniDB) Del(key []byte) (err error) {\n   // 从内存当中取出索引信息\n   _, ok := db.indexes[string(key)]\n   // key 不存在，忽略\n   if !ok {\n      return\n   }\n\n   // 封装成 Entry 并写入\n   e := NewEntry(key, nil, DEL)\n   err = db.dbFile.Write(e)\n   if err != nil {\n      return\n   }\n\n   // 删除内存中的 key\n   delete(db.indexes, string(key))\n   return\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br")])]),e("p",[n._v("最后是重要的合并数据文件操作，流程和上面的描述一样，关键代码如下：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("func (db *MiniDB) Merge() error {\n   // 读取原数据文件中的 Entry\n   for {\n      e, err := db.dbFile.Read(offset)\n      if err != nil {\n         if err == io.EOF {\n            break\n         }\n         return err\n      }\n      // 内存中的索引状态是最新的，直接对比过滤出有效的 Entry\n      if off, ok := db.indexes[string(e.Key)]; ok && off == offset {\n         validEntries = append(validEntries, e)\n      }\n      offset += e.GetSize()\n   }\n\n   if len(validEntries) > 0 {\n      // 新建临时文件\n      mergeDBFile, err := NewMergeDBFile(db.dirPath)\n      if err != nil {\n         return err\n      }\n      defer os.Remove(mergeDBFile.File.Name())\n\n      // 重新写入有效的 entry\n      for _, entry := range validEntries {\n         writeOff := mergeDBFile.Offset\n         err := mergeDBFile.Write(entry)\n         if err != nil {\n            return err\n         }\n\n         // 更新索引\n         db.indexes[string(entry.Key)] = writeOff\n      }\n\n      // 删除旧的数据文件\n      os.Remove(db.dbFile.File.Name())\n      // 临时文件变更为新的数据文件\n      os.Rename(mergeDBFile.File.Name(), db.dirPath+string(os.PathSeparator)+FileName)\n\n      db.dbFile = mergeDBFile\n   }\n   return nil\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br")])]),e("p",[n._v("除去测试文件，minidb 的核心代码只有 300 行，麻雀虽小，五脏俱全，它已经包含了 bitcask 这个存储模型的主要思想，并且也是 rosedb 的底层基础。")]),n._v(" "),e("p",[n._v("理解了 minidb 之后，基本上就能够完全掌握 bitcask 这种存储模型，多花点时间，相信对 rosedb 也能够游刃有余了。")]),n._v(" "),e("p",[n._v("进一步，如果你对 k-v 存储这方面感兴趣，可以更加深入的去研究更多相关的知识，bitcask 虽然简洁易懂，但是问题也不少，rosedb 在实践的过程当中，对其进行了一些优化，但目前还是有不少的问题存在。")]),n._v(" "),e("p",[n._v("有的人可能比较疑惑，bitcask 这种模型简单，是否只是一个玩具，在实际的生产环境中有应用吗？答案是肯定的。")]),n._v(" "),e("p",[n._v("bitcask 最初源于 Riak 这个项目的底层存储模型，而 Riak 是一个分布式 k-v 存储，在 NoSQL 的排名中也名列前茅：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://pic4.zhimg.com/v2-1105a48b613138fdf7c03ee2166aced7_b.jpg",alt:"img"}})]),n._v(" "),e("p",[n._v("豆瓣所使用的的分布式 k-v 存储，其实也是基于 bitcask 模型，并对其进行了很多优化。目前纯粹基于 bitcask 模型的 k-v 并不是很多，所以你可以多去看看 rosedb 的代码，可以提出自己的意见建议，一起完善这个项目。")]),n._v(" "),e("p",[n._v("最后，附上相关项目地址：")]),n._v(" "),e("p",[n._v("minidb："),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/roseduan/minidb",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/roseduan/minidb"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("rosedb："),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/roseduan/rosedb",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/roseduan/rosedb"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("参考资料：")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//riak.com/assets/bitcask-intro.pdf",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://riak.com/assets/bitcask-intro.pdf"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//medium.com/%40arpitbhayani/bitcask-a-log-structured-fast-kv-store-c6c728a9536b",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://medium.com/@arpitbhayani/bitcask-a-log-structured-fast-kv-store-c6c728a9536b"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("全文完")]),n._v(" "),e("p",[n._v("本文由 "),e("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[n._v("简悦 SimpRead"),e("OutboundLink")],1),n._v(" 优化，用以提升阅读体验")]),n._v(" "),e("p",[n._v("使用了 全新的简悦词法分析引擎 beta，"),e("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[n._v("点击查看"),e("OutboundLink")],1),n._v("详细说明")])])}),[],!1,null,null,null);s.default=a.exports}}]);