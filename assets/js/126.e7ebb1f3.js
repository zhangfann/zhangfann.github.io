(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{510:function(n,s,t){"use strict";t.r(s);var e=t(42),a=Object(e.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("nginx_lua实现分布式缓存")]),n._v(" "),t("p",[t("strong",[n._v("祈雨的博客")])]),n._v(" "),t("p",[n._v("2018-12-11")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://wakzz.cn/categories/nginx/",target:"_blank",rel:"noopener noreferrer"}},[n._v("nginx"),t("OutboundLink")],1)]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('local redis = require("resty.redis")\nlocal cjson = require("cjson")\nlocal cjson_encode = cjson.encode\nlocal ngx_log = ngx.log\nlocal ngx_ERR = ngx.ERR\nlocal ngx_exit = ngx.exit\nlocal ngx_print = ngx.print\nlocal ngx_re_match = ngx.re.match\nlocal ngx_var = ngx.var\n\nlocal function close_redis(red)\n\tif not red then\n\t\treturn\n\tend\n\t-- 释放连接(连接池实现)\n\tlocal pool_max_idle_time = 10000 -- 毫秒\n\tlocal pool_size = 100  -- 连接池大小\n\tlocal ok, err = red:set_keepalive(pool_max_idle_time, pool_size)\n\t\n\tif not ok then\n\t\tngx_log(ngx_ERR, "set redis keepalive error : ", err)\n\tend\nend\n\nlocal function read_redis(id)\n\tlocal red = redis:new()\n\tred:set_timeout(1000)\n\tlocal ip = "127.0.0.1"\n\tlocal port = 1111\n\tlocal ok, err = red:connect(ip, port)\n\tif not ok then\n\t\tngx_log(ngx_ERR, "connect to redis error : ", err)\n\t\treturn close_redis(red)\n\tend\n\t\n\tlocal resp, err = red:get(id)\n\tif net resp then\n\t\tngx_log(ngx_ERR, "get redis connect error : ", err)\n\t\treturn close_redis(red)\n\tend\n\t-- 得到的数据为空处理\n\tif resp == ngx.null then\n\t\tresp = nil\n\tend\n\tclose_redis(red)\n\t\n\treturn resp\nend\n\nlocal function read_http(id)\n\tlocal resp = ngx.location.capture("/backend", {\n\t\tmethod = ngx.HTTP_GET,\n\t\targs = {id = id}\n\t})\n\t\n\tif not resp then\n\t\tngx_log(ngx_ERR, "request error :", err)\n\t\treturn\n\tend\n\t\n\tif resp.status ~= 200 then\n\t\tngx_log(ngx_ERR, "request error, status :", resp.status)\n\t\treturn\n\tend\n\t\n\treturn resp.body\nend\n\n-- 获取id\nlocal id = ngx_var.id\n\n-- 从redis获取\nlocal content = read_redis(id)\n\n-- 如果redis没有，则回源到tomcat\nif not content then\n\tngx_log(ngx_ERR, "redis not found content, back to http, id : ", id)\n\tcontent = read_http(id)\nend\n\n-- 如果还没有，则返回404\nif not content then\n\tngx_log(ngx_ERR, "http not found content, id : ", id)\n\treturn ngx_exit(404)\nend\n\n-- 输出内容\nngx.print("show_ad(")\nngx.print(cjson_encode({content = content}))\nngx.print(")")\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br"),t("span",{staticClass:"line-number"},[n._v("43")]),t("br"),t("span",{staticClass:"line-number"},[n._v("44")]),t("br"),t("span",{staticClass:"line-number"},[n._v("45")]),t("br"),t("span",{staticClass:"line-number"},[n._v("46")]),t("br"),t("span",{staticClass:"line-number"},[n._v("47")]),t("br"),t("span",{staticClass:"line-number"},[n._v("48")]),t("br"),t("span",{staticClass:"line-number"},[n._v("49")]),t("br"),t("span",{staticClass:"line-number"},[n._v("50")]),t("br"),t("span",{staticClass:"line-number"},[n._v("51")]),t("br"),t("span",{staticClass:"line-number"},[n._v("52")]),t("br"),t("span",{staticClass:"line-number"},[n._v("53")]),t("br"),t("span",{staticClass:"line-number"},[n._v("54")]),t("br"),t("span",{staticClass:"line-number"},[n._v("55")]),t("br"),t("span",{staticClass:"line-number"},[n._v("56")]),t("br"),t("span",{staticClass:"line-number"},[n._v("57")]),t("br"),t("span",{staticClass:"line-number"},[n._v("58")]),t("br"),t("span",{staticClass:"line-number"},[n._v("59")]),t("br"),t("span",{staticClass:"line-number"},[n._v("60")]),t("br"),t("span",{staticClass:"line-number"},[n._v("61")]),t("br"),t("span",{staticClass:"line-number"},[n._v("62")]),t("br"),t("span",{staticClass:"line-number"},[n._v("63")]),t("br"),t("span",{staticClass:"line-number"},[n._v("64")]),t("br"),t("span",{staticClass:"line-number"},[n._v("65")]),t("br"),t("span",{staticClass:"line-number"},[n._v("66")]),t("br"),t("span",{staticClass:"line-number"},[n._v("67")]),t("br"),t("span",{staticClass:"line-number"},[n._v("68")]),t("br"),t("span",{staticClass:"line-number"},[n._v("69")]),t("br"),t("span",{staticClass:"line-number"},[n._v("70")]),t("br"),t("span",{staticClass:"line-number"},[n._v("71")]),t("br"),t("span",{staticClass:"line-number"},[n._v("72")]),t("br"),t("span",{staticClass:"line-number"},[n._v("73")]),t("br"),t("span",{staticClass:"line-number"},[n._v("74")]),t("br"),t("span",{staticClass:"line-number"},[n._v("75")]),t("br"),t("span",{staticClass:"line-number"},[n._v("76")]),t("br"),t("span",{staticClass:"line-number"},[n._v("77")]),t("br"),t("span",{staticClass:"line-number"},[n._v("78")]),t("br"),t("span",{staticClass:"line-number"},[n._v("79")]),t("br"),t("span",{staticClass:"line-number"},[n._v("80")]),t("br"),t("span",{staticClass:"line-number"},[n._v("81")]),t("br"),t("span",{staticClass:"line-number"},[n._v("82")]),t("br"),t("span",{staticClass:"line-number"},[n._v("83")]),t("br"),t("span",{staticClass:"line-number"},[n._v("84")]),t("br"),t("span",{staticClass:"line-number"},[n._v("85")]),t("br"),t("span",{staticClass:"line-number"},[n._v("86")]),t("br"),t("span",{staticClass:"line-number"},[n._v("87")]),t("br"),t("span",{staticClass:"line-number"},[n._v("88")]),t("br"),t("span",{staticClass:"line-number"},[n._v("89")]),t("br"),t("span",{staticClass:"line-number"},[n._v("90")]),t("br")])]),t("iframe",{staticStyle:{"box-sizing":"border-box",width:"1px !important","min-width":"100%",border:"none !important",overflow:"hidden !important",height:"395px !important"},attrs:{id:"dsq-app9091",name:"dsq-app9091",allowtransparency:"true",frameborder:"0",scrolling:"no",tabindex:"0",title:"Disqus",width:"100%",src:"https://disqus.com/embed/comments/?base=default&f=wakzz-cn&t_u=https%3A%2F%2Fwakzz.cn%2F2018%2F12%2F11%2Fnginx%2FNginx%2BLua%25E5%25AE%259E%25E7%258E%25B0%25E5%2588%2586%25E5%25B8%2583%25E5%25BC%258F%25E7%25BC%2593%25E5%25AD%2598%2F&t_d=%0A%20%20%20%20%20%20%20%20Nginx%2BLua%E5%AE%9E%E7%8E%B0%E5%88%86%E5%B8%83%E5%BC%8F%E7%BC%93%E5%AD%98%0A%20%20%20%20&t_t=%0A%20%20%20%20%20%20%20%20Nginx%2BLua%E5%AE%9E%E7%8E%B0%E5%88%86%E5%B8%83%E5%BC%8F%E7%BC%93%E5%AD%98%0A%20%20%20%20&s_o=default#version=19d18907156f056077885e8c891dcf50",horizontalscrolling:"no",verticalscrolling:"no"}}),n._v(" "),t("p",[n._v("Copyright © 2019-2021 祈雨")]),n._v(" "),t("p",[t("a",{attrs:{href:"http://beian.miit.gov.cn/",target:"_blank",rel:"noopener noreferrer"}},[n._v("苏ICP备19058377号-1"),t("OutboundLink")],1)]),n._v(" "),t("iframe",{staticStyle:{"box-sizing":"border-box","max-width":"100%",margin:"0px !important",width:"30px",height:"150px","min-height":"0px",border:"0px",display:"block !important"},attrs:{name:"rpJSFrame",allowtransparency:"true"}})])}),[],!1,null,null,null);s.default=a.exports}}]);