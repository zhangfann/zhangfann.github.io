(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{552:function(_,v,p){"use strict";p.r(v);var t=p(42),n=Object(t.a)({},(function(){var _=this,v=_.$createElement,p=_._self._c||v;return p("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[p("p",[_._v("用网云穿在 N1 盒子上实现 Openwrt 的内网穿透 软路由器情况 N1（已经刷入 Armbian） 中使用 docker 创建 Openwrt 容器作为旁路由。")]),_._v(" "),p("p",[_._v("用网云穿在 N1 盒子上实现 Openwrt 的内网穿透 软路由器情况 N1（已经刷入 Armbian） 中使用 docker 创建 Openwrt 容器作为旁路由。")]),_._v(" "),p("p",[_._v("我的内网 ip 信息 内网 IP 因人而异，以下是我自己的设置")]),_._v(" "),p("p",[_._v("Armbian：192.168.123.2")]),_._v(" "),p("p",[_._v("Openwrt：192.168.123.10")]),_._v(" "),p("p",[_._v("思路 N1 的 Armbian 中部署网云穿，对 192.168.123.10:80 进行内网穿透。")]),_._v(" "),p("p",[_._v("为什么不直接在 Openwrt 上部署网云穿？")]),_._v(" "),p("p",[_._v("因为 N1 盒子下的 Openwrt 经常更新，若在 Openwrt 上部署，每次更新后都需要重装网云穿，过于麻烦。")]),_._v(" "),p("p",[_._v("而 N1 盒子的 Armbian 系统更新频率低，且运行更加稳定，通过在 N1 内网访问 Openwrt 的方式完成网云穿部署，可以实现网云穿内网穿透服务长时间稳定运行")]),_._v(" "),p("p",[_._v("1 - 开通网云穿服务 1.1 - 进入网云穿官网：官网传送门 - 注册账号 - 领取免费隧道")]),_._v(" "),p("p",[_._v("2 - 配置隧道 2.1 - 进入控制台：点击进入 - 隧道开通 / 管理")]),_._v(" "),p("p",[_._v("编辑隧道：")]),_._v(" "),p("p",[_._v("内网地址：填写内网的 Openwrt 的地址")]),_._v(" "),p("p",[_._v("内网端口: 80 (用于访问 Openwrt 后台控制面板)")]),_._v(" "),p("p",[_._v("穿透协议: TCP")]),_._v(" "),p("p",[_._v("2.2 - 复制令牌，此处令牌为 5p6cypqw")]),_._v(" "),p("p",[_._v("3 - 在 N1 盒子安装网云穿 3.1 - ssh 登陆内网 Armbian：ssh -p22@192.168.123.2")]),_._v(" "),p("p",[_._v("3.2 - 下载网云穿 Linux-Arm 版：curl -O http://xiaomy.net/download/linux/wyc_linux_arm")]),_._v(" "),p("p",[_._v("3.3 - 赋予网云穿程序可执行权限：chmod -R 777 ./wyc_linux_arm")]),_._v(" "),p("p",[_._v("4 - 启动网云穿内网穿透服务 4.1 - 通过 ssh 登陆 内网 Armbian: ssh -p22@192.168.123.2")]),_._v(" "),p("p",[_._v("4.2 - 启动网云穿")]),_._v(" "),p("p",[_._v("网云穿有两种启动方法")]),_._v(" "),p("p",[_._v("方法一：运行网云穿后输入令牌 执行命令 ./wyc_linux_arm")]),_._v(" "),p("p",[_._v("根据提示输入令牌")]),_._v(" "),p("p",[_._v("方法二：在启动命令中填入令牌 执行命令 ./wyc_linux_arm -token = 令牌号码")]),_._v(" "),p("p",[_._v("见到 “登录成功，现在您可访问 xxxx.xiaomy.net:12345，将直接映射到您本地的 192.168.123.10:80 ・”")]),_._v(" "),p("p",[_._v("表示已经穿透成功，可以通过提示的域名进入 Openwrt 管理后台。")]),_._v(" "),p("p",[_._v("此时，网云穿服务在 Armbian 前台运行，中断 ssh 连接或 ctrl + c 都会终止内网穿透进程。想穿透服务稳定运行，就需要将服务设置为后台运行")]),_._v(" "),p("p",[_._v("5 - 后台运行网云穿服务 5.1 - 后台启动命令：nohup /root/wyc_linux_arm -token = 令牌 >./wycout.txt 2>&1 &")]),_._v(" "),p("p",[_._v("5.2 - 查看启动信息：cat ./wycout.txt")]),_._v(" "),p("p",[_._v("5.3 - 查看网云穿进程 id：ps -ef | grep wyc_linux_arm")]),_._v(" "),p("p",[_._v("停止后台服务：kill 进程 id")]),_._v(" "),p("p",[_._v("刚刚我们的进程 id 是 15537, 对应，命令：kill 15537")]),_._v(" "),p("p",[_._v("6 - 设置网云穿开机自启动并后台运行 6.1 - 进入 crontab 工具 crontab -e")]),_._v(" "),p("p",[_._v("6.2 - 在最底部添加这一行命令 (请自行填入令牌)")]),_._v(" "),p("p",[_._v("@reboot nohup /root/wyc_linux_arm -token = 令牌 >./wycout.txt 2>&1 &")]),_._v(" "),p("p",[_._v("填入后，保存设置，并退出")]),_._v(" "),p("p",[_._v("结语 通过以上设置，可以实现自家路由器后台的稳定内网穿透。")])])}),[],!1,null,null,null);v.default=n.exports}}]);