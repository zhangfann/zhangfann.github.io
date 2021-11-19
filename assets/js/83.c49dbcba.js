(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{463:function(r,e,t){"use strict";t.r(e);var o=t(42),a=Object(o.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("p",[r._v("OverlayFS，顾名思义是一种堆叠文件系统，可以将多个目录的内容叠加到另一个目录上。OverlayFS 并不直接涉及磁盘空间结构，看起来像是将多个目录的文件按照规则合并到同一个目录。且对多个源目录具体使用文件系统类型没有要求，即使各个源目录的文件系统类型不同也不影响使用。")]),r._v(" "),t("h2",{attrs:{id:"一、挂载-overlayfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、挂载-overlayfs"}},[r._v("#")]),r._v(" 一、挂载 OverlayFS")]),r._v(" "),t("p",[r._v("下面就让我们来看看如何挂载一个 OverlayFS 文件系统：")]),r._v(" "),t("p",[r._v("mount-t overlay -o lowerdir=/lower,upperdir=/upper,workdir=/work overlay /merged")]),r._v(" "),t("p",[r._v('上面的命令可以将 "lowerdir" 和 "upper" 目录堆叠到 / merged 目录，"workdir" 工作目录要求是和 "upperdir" 目录同一类型文件系统的空目录。')]),r._v(" "),t("p",[r._v("也可以省略 upperdir 和 workdir 参数，但 / merged 为只读属性了：")]),r._v(" "),t("p",[r._v("mount-t overlay -o lowerdir=/upper:/lower overlay /merged")]),r._v(" "),t("p",[r._v("也可支持多 lowerdir 目录堆叠：")]),r._v(" "),t("p",[r._v("mount-t overlay -o lowerdir=/lower1:/lower2:/lower3,upperdir=/upper,workdir=/workoverlay /merged")]),r._v(" "),t("p",[r._v('lowerdir 的多层目录使用 ":" 分隔开，其中层级关系为 / lower1> /lower2 > /lower3。')]),r._v(" "),t("p",[t("img",{attrs:{src:"https://img1.tuicool.com/reYnqiN.jpg!web",alt:"img"}})]),r._v(" "),t("p",[r._v("在使用如上 mount 进行 OverlayFS 合并之后，遵循如下规则：")]),r._v(" "),t("p",[r._v("•     lowerdir 和 upperdir 两个目录存在同名文件时，lowerdir 的文件将会被隐藏，用户只能看到 upperdir 的文件。")]),r._v(" "),t("p",[r._v("•     lowerdir 低优先级的同目录同名文件将会被隐藏。")]),r._v(" "),t("p",[r._v("•     如果存在同名目录，那么 lowerdir 和 upperdir 目录中的内容将会合并。")]),r._v(" "),t("p",[r._v("•     当用户修改 mergedir 中来自 upperdir 的数据时，数据将直接写入 upperdir 中原来目录中，删除文件也同理。")]),r._v(" "),t("p",[r._v("•     当用户修改 mergedir 中来自 lowerdir 的数据时，lowerdir 中内容均不会发生任何改变。因为 lowerdir 是只读的，用户想修改来自 lowerdir 数据时，overlayfs 会首先拷贝一份 lowerdir 中文件副本到 upperdir 中（这也被称作 OverlayFS 的 copy-up 特性）。后续修改或删除将会在 upperdir 下的副本中进行，lowerdir 中原文件将会被隐藏。")]),r._v(" "),t("p",[r._v("•     如果某一个目录单纯来自 lowerdir 或者 lowerdir 和 upperdir 合并，默认无法进行 rename 系统调用。但是可以通过 mv 重命名。如果要支持 rename，需要 CONFIG_OVERLAY_FS_REDIRECT_DIR。")]),r._v(" "),t("p",[r._v("一般 lowerdir 为只读文件系统，upperdir 为可写文件系统，这形成了一个有趣的机制，似乎我们可以修改 lowerdir 下的文件或目录，lowerdir 看上去变成了一个可读写的文件系统。")]),r._v(" "),t("h4",{attrs:{id:"二、删除文件和目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、删除文件和目录"}},[r._v("#")]),r._v(" 二、删除文件和目录")]),r._v(" "),t("p",[r._v("为了支持 rm 和 rmdir 而又不修改 lower 文件系统，需要在 upper 文件系统中记录文件或目录已经被删除。OverlayFS 引入了 whiteout 文件的概念。如果需要删除 lower 层的文件或目录，需要在 upper 层创建一个 whiteout 文件。")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://img0.tuicool.com/qaiYFz3.png!web",alt:"img"}})]),r._v(" "),t("p",[r._v("可以看到删除 merged 目录下的文件或目录后，在 upper 层新建了 aa、bb、dir 三个 whiteout 文件，whiteout 文件不是普通文件，而是主 / 次设备号都是 0 的字符设备。只存在于 upper 的文件 cc 直接删除就可以了。")]),r._v(" "),t("h2",{attrs:{id:"三、创建文件和目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、创建文件和目录"}},[r._v("#")]),r._v(" "),t("strong",[r._v("三、创建文件和目录")])]),r._v(" "),t("p",[r._v('创建操作与删除操作类似，都是在 upper 层进行修改。创建文件直接在 upper 层新增文件即可，如果 upper 层存在对应的 whiteout 文件，先删除 whiteout 文件再创建文件。创建目录与创建文件类似，区别在于 upper 层存在 whiteout 文件时，删掉 whiteout 文件创建目录，如果就此结束，lower 层对应目录（因为有 whiteout 文件）的文件就被显示到 merged 目录了，所以还需要将目录的 "trusted.overlay.opaque" 属性设为 "y"（所以这也就需要 upper 层所在的文件系统支持 xattr 扩展属性），OverlayFS 在读取上下层存在同名目录的目录项时，如果 upper 层的目录被设置了 opaque 属性，它将忽略这个目录下层的所有同名目录中的目录项，以保证新建的目录是一个空的目录。')]),r._v(" "),t("p",[t("img",{attrs:{src:"https://img0.tuicool.com/Nfum2uZ.png!web",alt:"img"}})]),r._v(" "),t("h2",{attrs:{id:"四、rename-目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、rename-目录"}},[r._v("#")]),r._v(" "),t("strong",[r._v("四、rename 目录")])]),r._v(" "),t("p",[r._v("当我们想重命名一个在 lower 层的目录，OverlayFS 有两种处理方式：")]),r._v(" "),t("p",[r._v("\\1. 返回 EXDEV 错误码：rename 系统调用试图穿过文件系统边界移动一个文件或目录时返回这个错误。这个是默认行为。")]),r._v(" "),t("p",[r._v('\\2. 当使能 "redirect_dir" 特性后，rename 操作成功，在 upper 层产生一个副本目录。')]),r._v(" "),t("p",[r._v('有以下几种方式控制 "redirect_dir" 特性：')]),r._v(" "),t("p",[r._v("\\1. KernelConfig Options：")]),r._v(" "),t("p",[r._v("• OVERLAY_FS_REDIRECT_DIR")]),r._v(" "),t("p",[r._v("• OVERLAY_FS_REDIRECT_ALWAYS_FOLLOW")]),r._v(" "),t("p",[r._v("使能后，redirect_dir 特性默认打开。")]),r._v(" "),t("p",[r._v("\\2. sys 文件系统：")]),r._v(" "),t("p",[r._v("参照 KernelConfig 设置：")]),r._v(" "),t("p",[r._v("/sys/module/overlay/parameters/redirect_dir")]),r._v(" "),t("p",[r._v("/sys/module/overlay/parameters/redirect_always_follow")]),r._v(" "),t("p",[r._v("/sys/module/overlay/parameters/redirect_max")]),r._v(" "),t("p",[r._v("\\3. MountOptions：")]),r._v(" "),t("p",[r._v("redirect_dir=on/off/follow/nofollow")]),r._v(" "),t("h2",{attrs:{id:"五、android-中的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、android-中的应用"}},[r._v("#")]),r._v(" "),t("strong",[r._v("五、Android 中的应用")])]),r._v(" "),t("p",[r._v("OverlayFS 文件系统可以类似达到把只读文件系统改为可写文件系统的效果，这一特性在 Android 开发的场景下得到应用，userdebug 模式下我们 adb remount 后似乎就可以往 / system / 目录下 push 内容了，查看 remount 前后的 mount 信息，可以看到 / system / 目录被重新挂载成可读写的 OverlayFS 文件系统了：")]),r._v(" "),t("p",[r._v("remount 前：")]),r._v(" "),t("p",[r._v("remount 后：")]),r._v(" "),t("p",[r._v("重启：")]),r._v(" "),t("p",[r._v("system、vendor、product 等目录是以 ext4 文件系统方式挂载的，remount 后以 OverlayFS 挂载，之后重启也会以 OverlayFS 方式挂载，以使之前的修改生效。")]),r._v(" "),t("p",[r._v("system 和 vendor 等的 upperdir 都在 / cache 可写文件系统中，往 / system 目录 push 东西实际上都存放在 / cache/overlay/system/upper 目录中了。实际的 system 分区并没有被修改，修改的文件全部存放在 cache 分区了。")]),r._v(" "),t("p",[r._v("OverlayFS 也被应用在把多个不同分区的目录堆叠到一个目录下面，可以更好做到软件系统的组件解耦，不同特性的组件内容分别放到不同分区，最后通过 OverlayFS 堆叠到一个目录下，提升软件的可维护性。")]),r._v(" "),t("h2",{attrs:{id:"六、小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、小结"}},[r._v("#")]),r._v(" "),t("strong",[r._v("六、小结")])]),r._v(" "),t("p",[r._v("OverlayFS 以其独特的优势正得到越来越广泛的应用，Androiduserdebug/eng 模式中使用其实现对系统分区的修改。OpenWRT 系统也利用 OverlayFS 减少擦写闪存的次数，延长闪存的使用寿命。OverlayFS 更多的应用在云平台的容器镜像，基础的容器镜像通常不应被改变，新功能叠加可以通过 OverlayFS 实现且可以再次分发。")]),r._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[r._v("#")]),r._v(" 参考文献")]),r._v(" "),t("p",[r._v("\\1. https://www.kernel.org/doc/html/latest/filesystems/overlayfs.html")]),r._v(" "),t("p",[r._v("\\2. https://blog.csdn.net/luckyapple1028/article/details/78075358")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://img1.tuicool.com/aAriQf.gif!web",alt:"img"}})]),r._v(" "),t("p",[t("strong",[r._v("长按关注")])]),r._v(" "),t("p",[t("strong",[r._v("内核工匠微信")])]),r._v(" "),t("p",[r._v("Linux 内核黑科技 | 技术文章 | 精选教程")]),r._v(" "),t("p",[r._v("全文完")]),r._v(" "),t("p",[r._v("本文由 "),t("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[r._v("简悦 SimpRead"),t("OutboundLink")],1),r._v(" 优化，用以提升阅读体验")]),r._v(" "),t("p",[r._v("使用了 全新的简悦词法分析引擎 beta，"),t("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[r._v("点击查看"),t("OutboundLink")],1),r._v("详细说明")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://www.tuicool.com/articles/uMjMBja#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[r._v("一、挂载 OverlayFS"),t("OutboundLink")],1),t("a",{attrs:{href:"https://www.tuicool.com/articles/uMjMBja#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[r._v("二、删除文件和目录"),t("OutboundLink")],1),t("a",{attrs:{href:"https://www.tuicool.com/articles/uMjMBja#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[r._v("三、创建文件和目录"),t("OutboundLink")],1),t("a",{attrs:{href:"https://www.tuicool.com/articles/uMjMBja#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[r._v("四、rename 目录"),t("OutboundLink")],1),t("a",{attrs:{href:"https://www.tuicool.com/articles/uMjMBja#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[r._v("五、Android 中的应用"),t("OutboundLink")],1),t("a",{attrs:{href:"https://www.tuicool.com/articles/uMjMBja#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[r._v("六、小结"),t("OutboundLink")],1),t("a",{attrs:{href:"https://www.tuicool.com/articles/uMjMBja#sr-toc-6",target:"_blank",rel:"noopener noreferrer"}},[r._v("参考文献"),t("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);