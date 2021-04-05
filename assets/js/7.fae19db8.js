(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{367:function(_,v,t){_.exports=t.p+"assets/img/efs_cs_recovery.eeb29132.jpg"},368:function(_,v,t){_.exports=t.p+"assets/img/efs_cs_lifecycle.08a7016b.jpg"},442:function(_,v,t){"use strict";t.r(v);var a=t(42),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h2",{attrs:{id:"架构设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构设计"}},[_._v("#")]),_._v(" 架构设计")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/16/iKg49mIEB1wped6.jpg",alt:"pic"}})]),_._v(" "),a("h3",{attrs:{id:"目录服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录服务器"}},[_._v("#")]),_._v(" 目录服务器")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/16/ufDoRHYjeigT7l8.jpg",alt:"pic"}}),_._v(" "),a("img",{attrs:{src:t(367),alt:"pic"}}),_._v(" "),a("img",{attrs:{src:t(368),alt:"pic"}})]),_._v(" "),a("h3",{attrs:{id:"名字节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名字节点"}},[_._v("#")]),_._v(" 名字节点")]),_._v(" "),a("p",[_._v("名字节点主要存放元数据相关数据, 元数据主要记录两类关系, 分别为第一关系和第二关系,")]),_._v(" "),a("p",[_._v("第一关系记录文件与数据块列表的对应关系,")]),_._v(" "),a("p",[_._v("第二关系记录数据块与节点信息的对应关系")]),_._v(" "),a("h3",{attrs:{id:"数据节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据节点"}},[_._v("#")]),_._v(" 数据节点")]),_._v(" "),a("p",[_._v("数据节点是存放具体数据的设备, 数据节点中每个数据块中会保存数据和校验和, 这样数据节点可以自己进行校验, 检查数据是否损坏,")]),_._v(" "),a("h2",{attrs:{id:"系统设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统设计"}},[_._v("#")]),_._v(" 系统设计")]),_._v(" "),a("h3",{attrs:{id:"元数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元数据"}},[_._v("#")]),_._v(" 元数据")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/16/n95OkoET4pyVhHd.jpg",alt:"pic"}})]),_._v(" "),a("h3",{attrs:{id:"editlog-efsimage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editlog-efsimage"}},[_._v("#")]),_._v(" editlog, efsimage")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/16/5NZqk4ybXLMQOea.jpg",alt:"pic"}})]),_._v(" "),a("h3",{attrs:{id:"高可靠-备机做fsimage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高可靠-备机做fsimage"}},[_._v("#")]),_._v(" 高可靠, 备机做fsimage")]),_._v(" "),a("p",[_._v("备机从主机拉取editlog和image合成新的image,")]),_._v(" "),a("p",[_._v("再将新的image推送给主机")]),_._v(" "),a("h4",{attrs:{id:"注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册"}},[_._v("#")]),_._v(" 注册")]),_._v(" "),a("p",[_._v("在注册时, 上报本节点的数据块信息,")]),_._v(" "),a("p",[_._v("名字节点根据数据块信息, 构建{数据块:节点信息}")]),_._v(" "),a("h4",{attrs:{id:"心跳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#心跳"}},[_._v("#")]),_._v(" 心跳")]),_._v(" "),a("p",[_._v("每次心跳, 名字节点向数据节点发送无效节点信息列表,")]),_._v(" "),a("p",[_._v("数据节点进行删除")]),_._v(" "),a("h3",{attrs:{id:"读流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读流程"}},[_._v("#")]),_._v(" 读流程")]),_._v(" "),a("p",[_._v("客户端从名字节点获取存放一个数据块的数据节点,")]),_._v(" "),a("p",[_._v("客户端从数据节点读取数据")]),_._v(" "),a("p",[_._v("如果数据节点不在线, 读取副本")]),_._v(" "),a("p",[_._v("客户端获取下一个数据块的数据节点")]),_._v(" "),a("h3",{attrs:{id:"写流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写流程"}},[_._v("#")]),_._v(" 写流程")]),_._v(" "),a("p",[_._v("客户端向名字节点申请一个数据块,")]),_._v(" "),a("p",[_._v("客户端向名字节点分配的数据节点写入数据")]),_._v(" "),a("p",[_._v("如果数据节点无法连接")]),_._v(" "),a("p",[_._v("客户端放弃该数据块, 重新向名字节点申请数据块")]),_._v(" "),a("p",[_._v("客户端向名字节点分配的数据节点写入数据")]),_._v(" "),a("p",[_._v("客户端向名字节点申请下一个数据块,")]),_._v(" "),a("h3",{attrs:{id:"并发写-租约"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发写-租约"}},[_._v("#")]),_._v(" 并发写, 租约")]),_._v(" "),a("p",[_._v("支持并发读, 不支持并发写,")]),_._v(" "),a("p",[_._v("通过租约控制并发写")]),_._v(" "),a("h3",{attrs:{id:"小文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小文件"}},[_._v("#")]),_._v(" 小文件")]),_._v(" "),a("p",[_._v("通过将多个小文件id, 指向同一个数据块实现,")]),_._v(" "),a("p",[_._v("第一关系: 小文件文件id -> (数据块id, 数据块内部偏移, 小文件长度),")]),_._v(" "),a("p",[_._v("第二关系: 数据块 -> 数据节点")]),_._v(" "),a("h3",{attrs:{id:"删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[_._v("#")]),_._v(" 删除")]),_._v(" "),a("p",[_._v("客户端向名字节点删除文件")]),_._v(" "),a("p",[_._v("名字节点将文件相关数据块标记为删除")]),_._v(" "),a("p",[_._v("数据节点连接名字节点上报心跳时,")]),_._v(" "),a("p",[_._v("名字节点向数据节点下发删除")]),_._v(" "),a("h3",{attrs:{id:"数据恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据恢复"}},[_._v("#")]),_._v(" 数据恢复")]),_._v(" "),a("ul",[a("li",[_._v("名字节点检测到副本不够,")])]),_._v(" "),a("p",[_._v("通知一个拥有该数据块的数据节点, 复制到其他数据节点")]),_._v(" "),a("h4",{attrs:{id:"数据节点挂掉"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据节点挂掉"}},[_._v("#")]),_._v(" 数据节点挂掉")]),_._v(" "),a("p",[_._v("如果数据节点在客户端写入后, 数据节点向名字节点汇报前挂掉, 名字节点感知到错误")]),_._v(" "),a("p",[_._v("假如数据块存在于数据节点1, 数据节点2, 数据节点3")]),_._v(" "),a("p",[_._v("数据节点1挂掉,")]),_._v(" "),a("p",[_._v("则数据节点2, 数据节点3汇报时, 名字节点会指定数据节点2复制到一个正常节点")]),_._v(" "),a("p",[_._v("通知一个拥有该数据块的数据节点, 复制到其他数据节点")]),_._v(" "),a("p",[_._v("如果数据节点在客户端写入时挂掉, 客户端感知到错误:")]),_._v(" "),a("p",[_._v("会选择一个主数据节点, 然后让主数据节点对其他数据节点进行数据复制")]),_._v(" "),a("p",[_._v("通知一个拥有该数据块的数据节点, 复制到其他数据节点")]),_._v(" "),a("p",[_._v("之后数据节点会返回客户端一个恢复成功数据块的位置, 和数据节点列表")]),_._v(" "),a("p",[_._v("客户端可以在这个位置, 继续写入")]),_._v(" "),a("h4",{attrs:{id:"客户端挂掉"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端挂掉"}},[_._v("#")]),_._v(" 客户端挂掉")]),_._v(" "),a("p",[_._v("参考租约恢复")]),_._v(" "),a("h4",{attrs:{id:"名字节点挂掉"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名字节点挂掉"}},[_._v("#")]),_._v(" 名字节点挂掉,")]),_._v(" "),a("p",[_._v("客户端在写入时, 名字节点挂掉")]),_._v(" "),a("p",[_._v("如果名字节点在给客户端分配完数据节点后挂掉,")]),_._v(" "),a("p",[_._v("此时, 客户端把该数据块写完后, 无法关闭文件, 需人工介入,")]),_._v(" "),a("p",[_._v("数据节点这里, 只是暂时块汇报无法响应")]),_._v(" "),a("h4",{attrs:{id:"租约恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#租约恢复"}},[_._v("#")]),_._v(" 租约恢复")]),_._v(" "),a("p",[_._v("软超时, 是客户端每隔2s进行续约")]),_._v(" "),a("p",[_._v("硬超时, 是如果客户端断开, 且没有其他客户端抢夺这个租约造成的超时,")]),_._v(" "),a("p",[_._v("一般是1h")]),_._v(" "),a("p",[_._v("如果客户端刚打开文件就挂了, 还没写数据:")]),_._v(" "),a("p",[_._v("直接关闭文件")]),_._v(" "),a("p",[_._v("abandonBlock调用场景:")]),_._v(" "),a("p",[_._v("当客户端请求一个数据块后, 名字节点返回一个数据节点,")]),_._v(" "),a("p",[_._v("当客户端无法连接这个数据节点后, 就会调用abandonBlock,")]),_._v(" "),a("p",[_._v("让名字节点重新分配一个数据节点")]),_._v(" "),a("p",[_._v("如果客户端在调用abandonBlock后挂掉:")]),_._v(" "),a("p",[_._v("主数据节点是倒数第二个数据块的数据节点(倒数第一个被abandon了)")]),_._v(" "),a("p",[_._v("指定一个主数据节点, 然后主数据节点与其他数据节点计算出一个最短公共长度,")]),_._v(" "),a("p",[_._v("以此最短公共长度作为有效数据,")]),_._v(" "),a("p",[_._v("主数据节点向名字节点申请一个新的版本号, 并同步给其他数据节点, 将这个版本号赋给数据块")]),_._v(" "),a("h3",{attrs:{id:"数据均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据均衡"}},[_._v("#")]),_._v(" 数据均衡")]),_._v(" "),a("p",[_._v("当有新数据节点上线, 下线, 或者执行副本复制后, 导致节点分布不均匀时,")]),_._v(" "),a("p",[_._v("名字节点会计算每台平均数据块数,")]),_._v(" "),a("p",[_._v("将数据块超过平均值的节点的数据块, 移动到不足平均值的数据节点上")]),_._v(" "),a("h3",{attrs:{id:"负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[_._v("#")]),_._v(" 负载均衡")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/16/knx4FqwLUbWl5oB.jpg",alt:"pic"}})])])}),[],!1,null,null,null);v.default=s.exports}}]);