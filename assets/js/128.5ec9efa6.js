(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{511:function(a,t,e){"use strict";e.r(t);var n=e(42),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("nginx_lua环境搭建")]),a._v(" "),e("p",[e("strong",[a._v("祈雨的博客")])]),a._v(" "),e("p",[a._v("2018-12-15")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://wakzz.cn/categories/nginx/",target:"_blank",rel:"noopener noreferrer"}},[a._v("nginx"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"直接安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#直接安装"}},[a._v("#")]),a._v(" 直接安装")]),a._v(" "),e("h3",{attrs:{id:"准备依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备依赖"}},[a._v("#")]),a._v(" 准备依赖")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/openresty/lua-nginx-module/archive/v0.10.13.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("lua-nginx-module-0.10.13.tar.gz"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/simplresty/ngx_devel_kit/archive/v0.3.0.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("ngx_devel_kit-0.3.0.tar.gz"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"http://luajit.org/download/LuaJIT-2.0.5.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("LuaJIT-2.0.5.tar.gz"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"安装luajit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装luajit"}},[a._v("#")]),a._v(" 安装luajit")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tar -zxvf LuaJIT-2.0.5.tar.gz\ncd LuaJIT-2.0.5\nmake && make install PREFIX=/usr/soft/LuaJIT-2.0.5\nexport LUAJIT_LIB=/usr/soft/LuaJIT-2.0.5/lib\nexport LUAJIT_INC=/usr/soft/LuaJIT-2.0.5/include/luajit-2.0\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"准备模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备模块"}},[a._v("#")]),a._v(" 准备模块")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tar -zxvf lua-nginx-module-0.10.13.tar.gz\ntar -zxvf ngx_devel_kit-0.3.0.tar.gz\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"安装nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[a._v("#")]),a._v(" 安装nginx")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./configure --prefix=/usr/soft/nginx --with-ld-opt="-Wl,-rpath,$LUAJIT_LIB" --add-module=/usr/soft/ngx_devel_kit-0.3.0 --add-module=/usr/soft/lua-nginx-module-0.10.13\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("如果编译nginx时没有加"),e("code",[a._v("--with-ld-opt")]),a._v("，会导致nginx在启动的时候会无法找到位于luajit内的类库，并输出如下错误信息：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("error while loading shared libraries: libluajit-5.1.so.2: cannot open shared object file: No such file or directory\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"查看nginx安装模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看nginx安装模块"}},[a._v("#")]),a._v(" 查看nginx安装模块")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cd /usr/soft/nginx\n./sbin/nginx -V\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[a._v("#")]),a._v(" 测试")]),a._v(" "),e("p",[a._v("修改nginx配置文件"),e("code",[a._v("conf/nginx.conf")]),a._v("，添加如下配置")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("location /lua {\n    default_type 'text/html';\n    content_by_lua 'ngx.say(\"hello world\")';\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("启动nginx")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("./sbin/nginx\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("通过curl访问"),e("code",[a._v("http://localhost/lua")]),a._v("后，nginx返回"),e("code",[a._v("hello world")]),a._v("则说明nginx+lua环境搭建完成。")]),a._v(" "),e("h2",{attrs:{id:"通过openresty安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过openresty安装"}},[a._v("#")]),a._v(" 通过OpenResty安装")]),a._v(" "),e("h3",{attrs:{id:"准备openresty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备openresty"}},[a._v("#")]),a._v(" 准备OpenResty")]),a._v(" "),e("p",[a._v("OpenResty集成了nginx与大量精良的Lua库、第三方模块和大多数的依赖项。用于方便地搭建能够处理超高并发、扩展性极高的动态Web应用、Web服务和动态网关。")]),a._v(" "),e("p",[e("a",{attrs:{href:"http://openresty.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载OpenResty"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("笔者使用的是\n"),e("a",{attrs:{href:"https://openresty.org/download/openresty-1.13.6.1.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("openresty-1.13.6.1.tar.gz"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"安装openresty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装openresty"}},[a._v("#")]),a._v(" 安装OpenResty")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tar -zxvf openresty.tar.gz\ncd openresty-1.13.6.1\n./configure --prefix=/usr/soft/openresty\nmake && make install\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"目录说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录说明"}},[a._v("#")]),a._v(" 目录说明")]),a._v(" "),e("p",[a._v("openresty/luajit：luajit环境，luajit类似于java的jit，即即时编译，lua是一种解释语言，通过luajit可以即时编译lua代码到机器代码，得到很好的性能")]),a._v(" "),e("p",[a._v("openresty/lualib：要使用的lua库，里边提供了一些默认的lua 库，如 redis，json库等，也可以把一些自己开发的或第三方的放在这")]),a._v(" "),e("p",[a._v("openresty/nginx：nginx安装路径")]),a._v(" "),e("h3",{attrs:{id:"查看nginx安装模块-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看nginx安装模块-2"}},[a._v("#")]),a._v(" 查看nginx安装模块")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cd /usr/soft/openresty/nginx\n./sbin/nginx -V\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"测试-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-2"}},[a._v("#")]),a._v(" 测试")]),a._v(" "),e("p",[a._v("修改nginx配置文件"),e("code",[a._v("conf/nginx.conf")]),a._v("，添加如下配置")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("location /lua {\n    default_type 'text/html';\n    content_by_lua 'ngx.say(\"hello world\")';\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("启动nginx")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("./sbin/nginx\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("通过curl访问"),e("code",[a._v("http://localhost/lua")]),a._v("后，nginx返回"),e("code",[a._v("hello world")]),a._v("则说明nginx+lua环境搭建完成。")]),a._v(" "),e("iframe",{staticStyle:{"box-sizing":"border-box",width:"1px !important","min-width":"100%",border:"none !important",overflow:"hidden !important",height:"395px !important"},attrs:{id:"dsq-app8641",name:"dsq-app8641",allowtransparency:"true",frameborder:"0",scrolling:"no",tabindex:"0",title:"Disqus",width:"100%",src:"https://disqus.com/embed/comments/?base=default&f=wakzz-cn&t_u=https%3A%2F%2Fwakzz.cn%2F2018%2F12%2F15%2Fnginx%2FNginx%2BLua%25E7%258E%25AF%25E5%25A2%2583%25E6%2590%25AD%25E5%25BB%25BA%2F&t_d=%0A%20%20%20%20%20%20%20%20Nginx%2BLua%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA%0A%20%20%20%20&t_t=%0A%20%20%20%20%20%20%20%20Nginx%2BLua%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA%0A%20%20%20%20&s_o=default#version=19d18907156f056077885e8c891dcf50",horizontalscrolling:"no",verticalscrolling:"no"}}),a._v(" "),e("p",[a._v("Copyright © 2019-2021 祈雨")]),a._v(" "),e("p",[e("a",{attrs:{href:"http://beian.miit.gov.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("苏ICP备19058377号-1"),e("OutboundLink")],1)]),a._v(" "),e("iframe",{staticStyle:{"box-sizing":"border-box","max-width":"100%",margin:"0px !important",width:"30px",height:"150px","min-height":"0px",border:"0px",display:"block !important"},attrs:{name:"rpJSFrame",allowtransparency:"true"}})])}),[],!1,null,null,null);t.default=s.exports}}]);