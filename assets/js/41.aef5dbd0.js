(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{423:function(l,t,i){"use strict";i.r(t);var _=i(42),v=Object(_.a)({},(function(){var l=this,t=l.$createElement,i=l._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[i("hr"),l._v(" "),i("ul",[i("li",[l._v("title: “我的技术栈选型”")])]),l._v(" "),i("hr"),l._v(" "),i("ul",[i("li"),l._v(" "),i("li",[i("ul",[i("li",[l._v("Jiajun 的编程随想工作已经几年了，逐步摸索到了自己的技术上限 — 还是计算机五大件。")])])]),l._v(" "),i("li",[i("p",[l._v("工作已经几年了，逐步摸索到了自己的技术上限 — 还是计算机五大件。不断的追新和扩展广度已经没有太大意义，它们的实现原理也 都了解的差不多，因此现在是时候开始收缩技术栈，缩小需要不断更新的知识范围，节省精力去做更有意义的事情，把常用技术栈固定 下来，并且保持小量更新的状态。")])]),l._v(" "),i("li",[i("p",[l._v("注：我的技术选型风格偏向于 UNIX 的 KISS 风，喜欢小而美的东西 😃")])]),l._v(" "),i("li",[i("p",[l._v("编程语言")])]),l._v(" "),i("li",[i("p",[l._v("编程语言 Python 和 Golang：")])]),l._v(" "),i("li",[i("ul",[i("li",[l._v("Python 主要写 Web      服务、小工具、脚本等等。Python 的优点是写起来非常快，比如我写了一个删除过量的 MySQL 备份数据的脚本，核心代码 6 行就搞定了。如果是      Go 来写的话，估计要 2-3 倍，其它语言就更多了。Python 的缺点就是速度慢些，但是我写了一个 QPS 数百的应用，跑在      生产服务器上，响应速度也在 20ms 左右，所以对于绝大多数网站来说，完全够用。如果一定要挑一个 Python 的缺点的话，那就是部署没有 Go      方便。")])])]),l._v(" "),i("li",[i("p",[l._v("其实绝大部分 web 应用，瓶颈都不是编程语言。Python Flask 框架平均响应时间 15-20ms 左右，相比公网传输速度来说，完全可以接受。 当然了，Go 固然更快，一般 1ms 以内，内存占用也小很多。")])]),l._v(" "),i("li",[i("p",[l._v('def find_outdated():\nfor i in glob.glob("/data/backup/mysql/*.sql.gz"):\nyear, month, day = i.split(".")[0].split("-")[-3:]\nt = datetime.datetime(year=int(year), month=int(month), day=int(day))\nif t < datetime.datetime.now() - datetime.timedelta(days=7):\nos.remove(i)')])]),l._v(" "),i("li",[i("ul",[i("li",[l._v("Go      主要写系统工具和需要高并发的软件。比如如果我要自己实现一个网关，那么我就会考虑使用 Golang；另外，处理二进制协议的时候 Golang      也方便点。还有就是如果瓶颈在内存使用上，我也会考虑用 Go 而不是 Python。")])])]),l._v(" "),i("li",[i("p",[l._v("Rust 我也考虑过要不要学，但是最终我发现我的需求用不上 Rust，不需要那么高的速度，主要就是写 web，此外写点小工具。Rust 还是太啰嗦了。 C++ 和 Java 以前也考虑过，一个太复杂，一个太啰嗦，略。有 Python 和 Golang，快速和高性能都够了，还不够的话，那说明真的该加机器了。")])]),l._v(" "),i("li",[i("p",[l._v("数据库")])]),l._v(" "),i("li",[i("p",[l._v("数据库使用 MySQL，MySQL 应当玩的很很熟悉才行。原因是 MySQL 比 PG 简单得多 (配置管理)，而且在主从上有更好地支持。此前我也有使用 SQLite， 但是说实话，脑子里同时维护更新多个数据库的知识，太费力，大部分都是相通的，但是细节处又不相同，每次还要查文档，太麻烦了，所以 还是用最熟悉的那个。")])]),l._v(" "),i("li",[i("p",[l._v("此外 MySQL 最强大的优点就是社区，碰到什么问题，基本都能够搜到。")])]),l._v(" "),i("li",[i("p",[l._v("备份工具")])]),l._v(" "),i("li",[i("p",[l._v("MySQL 使用 mysqldump 和 crontab，如下：")])]),l._v(" "),i("li",[i("p",[l._v("@daily /usr/bin/mysqldump --single-transaction --quick --lock-tables=false --all-databases | gzip -c > /data/backup/mysql/full-backup-$(date + %F).sql.gz")])]),l._v(" "),i("li",[i("p",[l._v("然后再使用 rsync 进行异地同步。")])]),l._v(" "),i("li",[i("p",[l._v("缓存、队列")])]),l._v(" "),i("li",[i("p",[l._v("缓存和队列统一使用 Redis。用不上 RabbitMQ 这类重量级的消息队列。Redis 一箭双雕，而且好用。")])]),l._v(" "),i("li",[i("p",[l._v("Web 服务器")])]),l._v(" "),i("li",[i("p",[l._v("Web 服务器使用 Nginx，Nginx 还可以作为端口转发工具 (使用 Nginx 的 stream 模块)。")])]),l._v(" "),i("li",[i("p",[l._v("端口转发也可以使用 frp。")])]),l._v(" "),i("li",[i("p",[l._v("部署")])]),l._v(" "),i("li",[i("p",[l._v("部署统一使用 supervisor。之前我也有使用 Docker，但是越发觉得，我一个人维护的系统，不必用 Docker，因为系统依赖等全都是我可以 控制的。Go 基本无依赖，Python 可以使用 virtualenv 或者 venv 解决依赖问题。")])]),l._v(" "),i("li",[i("p",[l._v("什么？k8s？个人，甚至是小团队根本没有必要上这个玩意儿。不过如果是团队，倒是可以上上 Docker。")])]),l._v(" "),i("li",[i("p",[l._v("自动化部署使用 ansible，我自己的系统就懒得搭 CI/CD 了，每次要部署的时候直接跑 ansible-playbook 即可。")])]),l._v(" "),i("li",[i("p",[l._v("Web 框架")])]),l._v(" "),i("li",[i("p",[l._v("Python 使用 Flask，Go 使用 GIN。Python 需要搭配 gunicorn + gevent 使用。")])]),l._v(" "),i("li",[i("p",[l._v("ORM 和数据库 migration")])]),l._v(" "),i("li",[i("p",[l._v("Python 使用 SQLAlchemy + alembic，Go 暂时没找到顺手的。")])]),l._v(" "),i("li",[i("p",[l._v("异步任务框架")])]),l._v(" "),i("li",[i("p",[l._v("Python 使用 python-rq 作为异步任务队列，Golang 暂时没有找到好的。")])]),l._v(" "),i("li",[i("p",[l._v("为啥不用 celery？celery 太大了，而且遇到过多次 worker 无故死掉的情况，包括很多网友也遇到过，但是一直没找到原因，后来换了 rq 之后发现 rq 简单好用，就切换了。")])]),l._v(" "),i("li",[i("p",[l._v("监控")])]),l._v(" "),i("li",[i("p",[l._v("监控使用 Prometheus + Grafana + AlertManager + Exporter 全家桶。")])]),l._v(" "),i("li",[i("p",[l._v("日志收集")])]),l._v(" "),i("li",[i("p",[l._v("我自己的服务现在不进行日志收集，之前用过 EFK/ELK，但是太占内存，而我的场景直接去服务器上 tail + grep 就够了，用 EFK 完全是杀鸡用牛刀。 看了一下 Grafana 设计的 loki，设计挺不错，但是现在还不够成熟。")])]),l._v(" "),i("li",[i("p",[l._v("搜索引擎")])]),l._v(" "),i("li",[i("p",[l._v("目前暂时使用 MySQL 来做，以后如果有需要，再学习 ElasticSearch，之前用过 ES，但是频率太低，学了又忘记了，MySQL 足矣。")])]),l._v(" "),i("li",[i("p",[l._v("错误追踪")])]),l._v(" "),i("li",[i("p",[l._v("错误追踪使用 Sentry，直接用 "),i("a",{attrs:{href:"https://sentry.io/",target:"_blank",rel:"noopener noreferrer"}},[l._v("官网"),i("OutboundLink")],1),l._v(" 就够了。")])]),l._v(" "),i("li",[i("p",[l._v("总结")])]),l._v(" "),i("li",[i("p",[l._v("以上就是我这几年接触过然后筛选下来的技术栈，有一些可能漏掉了，有一些被我放弃的原因也没写上，欢迎一起交流 😃")])]),l._v(" "),i("li",[i("p",[l._v("来自 "),i("a",{attrs:{href:"https://jiajunhuang.com/articles/2019_11_13-tech_stack.md.html",target:"_blank",rel:"noopener noreferrer"}},[l._v("https://jiajunhuang.com/articles/2019_11_13-tech_stack.md.html"),i("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=v.exports}}]);