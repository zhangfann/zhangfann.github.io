(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{510:function(s,n,t){"use strict";t.r(n);var a=t(42),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("nginx_lua实现动态黑名单")]),s._v(" "),t("p",[t("strong",[s._v("祈雨的博客")])]),s._v(" "),t("p",[s._v("2018-12-23")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://wakzz.cn/categories/nginx/",target:"_blank",rel:"noopener noreferrer"}},[s._v("nginx"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("通过nginx+lua+redis可以实现nginx动态从redis读取需要拒绝的ip黑名单列表，并拒绝黑名单ip的访问请求。")]),s._v(" "),t("p",[s._v("其中redis中的ip黑名单列表既可以人工后台手动添加，也可以用类似logstash+elasticsearch的组合，实现logstash实时读取nginx的访问日志"),t("code",[s._v("access.log")]),s._v("，elasticsearch储存并聚合访问日志中的访问记录，再由一个分析程序定时统计分析访问记录后判断出要加入黑名单的ip，然后将ip储存到redis中的ip黑名单列表。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.wakzz.cn/201812/3ppWBCnRTb.png",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"nginx配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[s._v("#")]),s._v(" nginx配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http {\n    ...\n    lua_shared_dict forbidden_list 5m;\n    \n    location /lua {\n        # lua_code_cache off;\n        access_by_lua_file conf/lua/forbidden_list.lua;\n        default_type 'text/html';\n        content_by_lua 'ngx.say(\"hello world\")';\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"lua配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lua配置"}},[s._v("#")]),s._v(" lua配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('local redis = require("resty.redis")\nlocal ngx_log = ngx.log\nlocal ngx_ERR = ngx.ERR\nlocal ngx_INFO = ngx.INFO\nlocal ngx_exit = ngx.exit\nlocal ngx_var = ngx.var\n\n-- 黑名单缓存60秒\nlocal cache_idle = 60\nlocal forbidden_list = ngx.shared.forbidden_list\n\n\nlocal function close_redis(red)\n\tif not red then\n\t\treturn\n\tend\n\t-- 释放连接(连接池实现)\n\tlocal pool_max_idle_time = 10000 -- 毫秒\n\tlocal pool_size = 100  -- 连接池大小\n\tlocal ok, err = red:set_keepalive(pool_max_idle_time, pool_size)\n\t\n\tif not ok then\n\t\tngx_log(ngx_ERR, "set redis keepalive error : ", err)\n\tend\nend\n\n-- 从redis获取ip黑名单列表\nlocal function get_forbidden_list()\n\tlocal red = redis:new()\n\tred:set_timeout(1000)\n\tlocal ip = "127.0.0.1"\n\tlocal port = 6379\n\tlocal password = "password"\n\tlocal ok, err = red:connect(ip, port)\n\tif not ok then\n\t\tngx_log(ngx_ERR, "connect to redis error : ", err)\n\t\tclose_redis(red)\n\t\treturn\n\tend\n\t\n\tlocal res, err = red:auth(password)\n    if not res then\n        ngx_log(ngx_ERR, "failed to authenticate: ", err)\n\t\tclose_redis(red)\n        return\n    end\n\t\n\tlocal resp, err = red:smembers("forbidden_list")\n\tif not resp then\n\t\tngx_log(ngx_ERR, "get redis connect error : ", err)\n\t\tclose_redis(red)\n\t\treturn\n\tend\n\t-- 得到的数据为空处理\n\tif resp == ngx.null then\n\t\tresp = nil\n\tend\n\tclose_redis(red)\n\t\n\treturn resp\nend\n\n-- 刷新黑名单\nlocal function reflush_forbidden_list()\n\tlocal current_time = ngx.now()\n\tlocal last_update_time = forbidden_list:get("last_update_time");\n\t\n\tif last_update_time == nil or last_update_time < (current_time - cache_idle) then\n\t\tlocal new_forbidden_list = get_forbidden_list();\n\t\tif not new_forbidden_list then\n\t\t\treturn\n\t\tend\n\t\t\n\t\tforbidden_list:flush_all()\n\t\tfor i, forbidden_ip in ipairs(new_forbidden_list) do\n\t\t\tforbidden_list:set(forbidden_ip, true);\n\t\tend\n\t\tforbidden_list:set("last_update_time", current_time);\n\tend\nend\n\n\nreflush_forbidden_list()\nlocal ip = ngx_var.remote_addr\nif forbidden_list:get(ip) then\n\tngx_log(ngx_INFO, "forbidden ip refused access : ", ip)\n\treturn ngx_exit(ngx.HTTP_FORBIDDEN)\nend\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br")])]),t("h2",{attrs:{id:"redis修改黑名单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis修改黑名单"}},[s._v("#")]),s._v(" redis修改黑名单")]),s._v(" "),t("h3",{attrs:{id:"添加黑名单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加黑名单"}},[s._v("#")]),s._v(" 添加黑名单")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('SADD forbidden_list "127.0.0.1"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"移除黑名单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移除黑名单"}},[s._v("#")]),s._v(" 移除黑名单")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('SREM forbidden_list "127.0.0.1"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[s._v("#")]),s._v(" 效果")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('[root@localhost ~]# curl http://localhost/lua\n<html>\n<head><title>403 Forbidden</title></head>\n<body bgcolor="white">\n<center><h1>403 Forbidden</h1></center>\n<hr><center>openresty/1.13.6.1</center>\n</body>\n</html>\n[root@localhost ~]# curl http://localhost/lua\nhello world\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[s._v("#")]),s._v(" 日志")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('2018/12/23 13:10:47 [info] 4416#0: *56 [lua] forbidden_list.lua:86: forbidden ip refused access : 127.0.0.1, client: 127.0.0.1, server: localhost, request: "GET /lua HTTP/1.1", host: "localhost"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("iframe",{staticStyle:{"box-sizing":"border-box",width:"1px !important","min-width":"100%",border:"none !important",overflow:"hidden !important",height:"395px !important"},attrs:{id:"dsq-app7783",name:"dsq-app7783",allowtransparency:"true",frameborder:"0",scrolling:"no",tabindex:"0",title:"Disqus",width:"100%",src:"https://disqus.com/embed/comments/?base=default&f=wakzz-cn&t_u=https%3A%2F%2Fwakzz.cn%2F2018%2F12%2F23%2Fnginx%2FNginx%2BLua%25E5%25AE%259E%25E7%258E%25B0%25E5%258A%25A8%25E6%2580%2581%25E9%25BB%2591%25E5%2590%258D%25E5%258D%2595%2F&t_d=%0A%20%20%20%20%20%20%20%20Nginx%2BLua%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%80%81%E9%BB%91%E5%90%8D%E5%8D%95%0A%20%20%20%20&t_t=%0A%20%20%20%20%20%20%20%20Nginx%2BLua%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%80%81%E9%BB%91%E5%90%8D%E5%8D%95%0A%20%20%20%20&s_o=default#version=19d18907156f056077885e8c891dcf50",horizontalscrolling:"no",verticalscrolling:"no"}}),s._v(" "),t("p",[s._v("Copyright © 2019-2021 祈雨")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://beian.miit.gov.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("苏ICP备19058377号-1"),t("OutboundLink")],1)]),s._v(" "),t("iframe",{staticStyle:{"box-sizing":"border-box","max-width":"100%",margin:"0px !important",width:"30px",height:"150px","min-height":"0px",border:"0px",display:"block !important"},attrs:{name:"rpJSFrame",allowtransparency:"true"}})])}),[],!1,null,null,null);n.default=e.exports}}]);