(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{507:function(t,r,e){"use strict";e.r(r);var a=e(42),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("应急响应入门篇linux分析排查技术_上_")]),t._v(" "),e("p",[t._v("针对常见的攻击事件，结合工作中应急响应事件分析和解决的方法，总结了一些 Linux 服务器入侵排查的思路。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p2.ssl.qhimg.com/t015bc3fad101be7f66.jpg",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p2.ssl.qhimg.com/t015bc3fad101be7f66.jpg",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言：")]),t._v(" "),e("p",[t._v("当企业发生黑客入侵、系统崩溃或其它影响业务正常运行的安全事件时，急需第一时间进行处理，使企业的网络信息系统在最短时间内恢复正常工作，进一步查找入侵来源，还原入侵事故过程，同时给出解决方案与防范措施，为企业挽回或减少经济损失。\n针对常见的攻击事件，结合工作中应急响应事件分析和解决的方法，总结了一些 "),e("strong",[t._v("Linux")]),t._v(" 服务器入侵排查的思路。")]),t._v(" "),e("h2",{attrs:{id:"_01-文件分析-敏感文件信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01-文件分析-敏感文件信息"}},[t._v("#")]),t._v(" 01 文件分析 - 敏感文件信息")]),t._v(" "),e("p",[t._v("在 linux 系统下一切都是文件，其中 / tmp 是一个特别的临时目录文件。每个用户都可以对它进行读写操作。因此一个普通用户可以对 / tmp 目录执行读写操作。")]),t._v(" "),e("p",[t._v("查看敏感目录文件，如 tmp 目录、可执行程序目录 / usr/bin ，/usr/sbin 等")]),t._v(" "),e("p",[t._v("\\1. 使用 la -alt / 查找 tmp 目录")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p0.ssl.qhimg.com/t01a0de731bf2f454a7.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p0.ssl.qhimg.com/t01a0de731bf2f454a7.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("\\2. 使用 ls —help 查看帮助信息")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p1.ssl.qhimg.com/t013b54cc957fc45692.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p1.ssl.qhimg.com/t013b54cc957fc45692.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("3.ls 的常用用法：\nls 用来显示目录列表")]),t._v(" "),e("p",[t._v("-a 显示所有档案及目录")]),t._v(" "),e("p",[t._v("-l 以长格式显示目录下的内容列表")]),t._v(" "),e("p",[t._v("-t 用文件和目录的更改时间排序")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p0.ssl.qhimg.com/t016ec1497a2c0c4e8b.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p0.ssl.qhimg.com/t016ec1497a2c0c4e8b.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("\\4. 进入 tmp 目录，查找最近新添加的可疑文件。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p4.ssl.qhimg.com/t01a676aef9efe0ae60.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p4.ssl.qhimg.com/t01a676aef9efe0ae60.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"_02-文件分分析-敏感文件信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_02-文件分分析-敏感文件信息"}},[t._v("#")]),t._v(" 02 文件分分析 - 敏感文件信息")]),t._v(" "),e("p",[t._v("查看开机启动项内容 / etc/init.d/，恶意代码很有可能设置在开机启动的位置。")]),t._v(" "),e("p",[t._v("查看指定目录下文件时间顺序的排序：ls -alt | head -n 10")]),t._v(" "),e("p",[t._v("查看文件时间属性: stat 文件名")]),t._v(" "),e("p",[t._v("使用 ls -alh /etc/init.d // 查看开机启动项")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p3.ssl.qhimg.com/t01633f8dafe706d237.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p3.ssl.qhimg.com/t01633f8dafe706d237.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p1.ssl.qhimg.com/t010a006cdb0369df68.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p1.ssl.qhimg.com/t010a006cdb0369df68.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("进入开机启动项目录，对其进行筛选。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p4.ssl.qhimg.com/t0147208eaafec0ab92.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p4.ssl.qhimg.com/t0147208eaafec0ab92.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("针对可以文件可以使用 "),e("strong",[t._v("stat")]),t._v(" 进行创建修改时间、访问时间的详细查看，若修改时间距离时间日期接近，有线性关联，说明可以被篡改。")]),t._v(" "),e("p",[t._v("如：stat apache2 查看文件详细信息。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p2.ssl.qhimg.com/t0156ade2ba69475a93.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p2.ssl.qhimg.com/t0156ade2ba69475a93.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"_03-文件分析-敏感文件信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_03-文件分析-敏感文件信息"}},[t._v("#")]),t._v(" 03 文件分析 - 敏感文件信息")]),t._v(" "),e("p",[t._v("主要针对"),e("strong",[t._v("新增文件")]),t._v("分析：")]),t._v(" "),e("p",[t._v("查找 24h 内被修改的文件")]),t._v(" "),e("p",[t._v("find ./ -mtime 0 -name “*.php”")]),t._v(" "),e("p",[t._v("查找 72h 内新增的文件")]),t._v(" "),e("p",[t._v("find ./ -ctime -2 -name “‘*.php”")]),t._v(" "),e("p",[t._v("权限查找，在 linux 系统中，如果具有 777 权限，那么文件就很可疑。")]),t._v(" "),e("p",[t._v("find ./ -iname “*.php” -perm 777 其中 -iname 忽略大小写，-perm 用于设定筛选文件权限")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p0.ssl.qhimg.com/t014b532a606b7041de.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p0.ssl.qhimg.com/t014b532a606b7041de.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("find ./ -ctime -2 -name “‘*.txt” // 查找 72h 内新增的 txt 文件。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p0.ssl.qhimg.com/t01bcfc50f9c32b93ad.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p0.ssl.qhimg.com/t01bcfc50f9c32b93ad.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("find ./ -iname “*.php” -perm 777 // 查找最近新建的含. php 文件的，具有最高权限的文件。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p1.ssl.qhimg.com/t01fed98c2d87be665d.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p1.ssl.qhimg.com/t01fed98c2d87be665d.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("新建立一个 z.php 文件，给予最高权限。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p2.ssl.qhimg.com/t0153aa150b3dc14bd2.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p2.ssl.qhimg.com/t0153aa150b3dc14bd2.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("再次进行筛选。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p3.ssl.qhimg.com/t012c22fd2ad707ce5a.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p3.ssl.qhimg.com/t012c22fd2ad707ce5a.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"_04-网络连接分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_04-网络连接分析"}},[t._v("#")]),t._v(" 04 - 网络连接分析")]),t._v(" "),e("p",[e("strong",[t._v("在 linux 中可以使用 netstat 进行网络连接查看")])]),t._v(" "),e("p",[t._v("netstat -Print network connections，rounting tables，interface statistics，masquerade connections，and multicast memberships")]),t._v(" "),e("p",[t._v("具体帮助信息查看 man netstat")]),t._v(" "),e("p",[t._v("常用命令 "),e("strong",[t._v("netstat -pantl")]),t._v(" 查看处于 tcp 网络套接字相关信息")]),t._v(" "),e("p",[t._v("关闭未知连接使用 "),e("strong",[t._v("kill -9 pid")]),t._v(" 既可关闭。")]),t._v(" "),e("p",[t._v("使用：netstat -pantl 查看处于 tcp 网络套接字相关信息")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p5.ssl.qhimg.com/t0175147d0ebaf855ee.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p5.ssl.qhimg.com/t0175147d0ebaf855ee.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("ip a 查看网络信息")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p2.ssl.qhimg.com/t01ed87345b926f20b8.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p2.ssl.qhimg.com/t01ed87345b926f20b8.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("发现可疑进程，使用 kill -9 + pid 值，然后关闭进程。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p0.ssl.qhimg.com/t011d16221890477287.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p0.ssl.qhimg.com/t011d16221890477287.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"_05-进程分析-进程所对文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_05-进程分析-进程所对文件"}},[t._v("#")]),t._v(" 05 - 进程分析 - 进程所对文件")]),t._v(" "),e("p",[t._v("使用 ps 命令，分析进程。根据 netstat 定位出 pid ，使用 ps 命令，分析进程")]),t._v(" "),e("p",[t._v("使用 ps aux 查看你所有进程信息")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p0.ssl.qhimg.com/t01c9b6cc17cd60f0a9.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p0.ssl.qhimg.com/t01c9b6cc17cd60f0a9.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("ps aux | grep “22” 查看最近使用了 22 端口的进程。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p2.ssl.qhimg.com/t016d7e40dc24d27538.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p2.ssl.qhimg.com/t016d7e40dc24d27538.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("使用 pid 进行筛选")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p5.ssl.qhimg.com/t01c90f86dba0aa27b4.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p5.ssl.qhimg.com/t01c90f86dba0aa27b4.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p1.ssl.qhimg.com/t01c30924c4161c67d2.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p1.ssl.qhimg.com/t01c30924c4161c67d2.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p3.ssl.qhimg.com/t012b899b43263b921c.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p3.ssl.qhimg.com/t012b899b43263b921c.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("筛选 pid 为 647 的 进程。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p1.ssl.qhimg.com/t01f31498953c0c5a2b.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p1.ssl.qhimg.com/t01f31498953c0c5a2b.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p5.ssl.qhimg.com/t011a7e6bf60f5aeed5.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p5.ssl.qhimg.com/t011a7e6bf60f5aeed5.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("查看端口未 22 的隐藏进程")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p1.ssl.qhimg.com/t01e920a7f6b2953649.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p1.ssl.qhimg.com/t01e920a7f6b2953649.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"_06-登录分析-筛选异常登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_06-登录分析-筛选异常登录"}},[t._v("#")]),t._v(" 06 - 登录分析 - 筛选异常登录")]),t._v(" "),e("p",[t._v("在 Linux 做的操作都会被记录到系统日志中，对于登录也可以查看日志信息查看是否有异常登录")]),t._v(" "),e("p",[t._v("last 命令记录着所有用户登录系统的日志，可以用来查找非授权用户的登录事件，而 last 命令的输出结果来源于 "),e("strong",[t._v("/var/log/wtmp")]),t._v(" 文件，稍有经验的入侵者都会删掉\n/var/log/wtmp 以清除自己行踪，但是还是会露出蛛丝马迹在此文件中的")]),t._v(" "),e("p",[t._v("last -i grep -h 0.0.0.0 查看登录日志，筛选非本地登录")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p1.ssl.qhimg.com/t01d251661dc327eba8.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p1.ssl.qhimg.com/t01d251661dc327eba8.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("last -i // 查看登录日志，含登录 ip 地址。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p2.ssl.qhimg.com/t01d534423c0a5be758.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p2.ssl.qhimg.com/t01d534423c0a5be758.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("last -i grep -v 0.0.0.0 查看登录日志，筛选非本地登录")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p3.ssl.qhimg.com/t01a33a2cf105453593.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p3.ssl.qhimg.com/t01a33a2cf105453593.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://p2.ssl.qhimg.com/t01d526d92d9d66800a.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://p2.ssl.qhimg.com/t01d526d92d9d66800a.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("常见的用法")]),t._v("：\nwho 查看当前登录用户（tty 本地登陆 pts 远程登录）\nw 查看某一时刻用户的行为\nuptime 查看有多少用户，以此确定是否存在异常用户\nlastb 显示登录失败次数，判断是存在 ssh 爆破\nlast 显示用户最近登录信息。\nlastlog 登录成功记录")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结：")]),t._v(" "),e("p",[t._v("本文主要总结了在遇到了 Linux 系统时，应急响应先从对敏感文件分析、敏感文件信息、网络连接分析、进程分析、异常登录记录进行分析。")]),t._v(" "),e("p",[t._v("全文完")]),t._v(" "),e("p",[t._v("本文由 "),e("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[t._v("简悦 SimpRead"),e("OutboundLink")],1),t._v(" 优化，用以提升阅读体验")]),t._v(" "),e("p",[t._v("使用了 全新的简悦词法分析引擎 beta，"),e("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),e("OutboundLink")],1),t._v("详细说明")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.anquanke.com/post/id/259764#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("前言："),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.anquanke.com/post/id/259764#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("01 文件分析 - 敏感文件信息"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.anquanke.com/post/id/259764#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("02 文件分分析 - 敏感文件信息"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.anquanke.com/post/id/259764#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("03 文件分析 - 敏感文件信息"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.anquanke.com/post/id/259764#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("04 - 网络连接分析"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.anquanke.com/post/id/259764#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("05 - 进程分析 - 进程所对文件"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.anquanke.com/post/id/259764#sr-toc-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("06 - 登录分析 - 筛选异常登录"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.anquanke.com/post/id/259764#sr-toc-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("总结："),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=s.exports}}]);