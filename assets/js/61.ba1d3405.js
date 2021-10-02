(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{446:function(s,n,a){"use strict";a.r(n);var t=a(42),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("系统环境：")]),s._v(" "),a("p",[s._v("Ubuntu 18.10")]),s._v(" "),a("p",[s._v("OpenSSL 1.1.1  11 Sep 2018")]),s._v(" "),a("p",[s._v("一：自建 CA")]),s._v(" "),a("p",[s._v("1：依次创建如下目录")]),s._v(" "),a("p",[s._v("mkdir -p /opt/ca/root")]),s._v(" "),a("p",[s._v("mkdir /opt/ca/root/key")]),s._v(" "),a("p",[s._v("2：vim /opt/ca/root/openssl.cnf")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[ ca ]\ndefault_ca\t= CA_default\n \n[ CA_default ]\ndir\t\t    = /opt/ca/root\ncerts\t\t= $dir/certs\ncrl_dir\t\t= $dir/crl\ndatabase\t= $dir/index.txt\nnew_certs_dir\t= $dir/newcerts\ncertificate\t= $dir/key/cacert.crt\nserial\t\t= $dir/serial\ncrlnumber\t= $dir/crlnumber\ncrl\t\t    = $dir/crl.pem\nprivate_key\t= $dir/key/cakey.pem\nRANDFILE\t= $dir/key/.rand\nunique_subject\t= no\n \nx509_extensions\t= usr_cert\ncopy_extensions = copy\n \nname_opt \t= ca_default\ncert_opt \t= ca_default\n \ndefault_days\t= 365\ndefault_crl_days= 30\ndefault_md\t= sha256\npreserve\t= no\npolicy\t\t= policy_ca\n \n[ policy_ca ]\ncountryName\t\t= supplied\nstateOrProvinceName\t= supplied\norganizationName\t= supplied\norganizationalUnitName\t= supplied\ncommonName\t\t= supplied\nemailAddress\t\t= optional\n \n[ req ]\ndefault_bits\t\t= 2048\ndefault_keyfile \t= privkey.pem\ndistinguished_name\t= req_distinguished_name\nattributes\t\t= req_attributes\nx509_extensions\t= v3_ca\nstring_mask = utf8only\nutf8 = yes\nprompt                  = no\n \n[ req_distinguished_name ]\ncountryName\t\t\t= CN\nstateOrProvinceName\t\t= beijing\nlocalityName\t\t\t= beijing\norganizationName        = Global Google CA Inc\norganizationalUnitName\t= Root CA\ncommonName\t\t\t= Global Google Root CA\n \n[ usr_cert ]\nbasicConstraints = CA:TRUE\n \n[ v3_ca ]\nbasicConstraints        = CA:TRUE\n \n[ req_attributes ]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br")])]),a("p",[s._v("3：创建如下目录及文件")]),s._v(" "),a("p",[s._v("mkdir /opt/ca/root/newcerts")]),s._v(" "),a("p",[s._v("touch /opt/ca/root/index.txt")]),s._v(" "),a("p",[s._v("touch /opt/ca/root/index.txt.attr")]),s._v(" "),a("p",[s._v("echo 01 > /opt/ca/root/serial")]),s._v(" "),a("p",[s._v("4：创建 CA 私钥")]),s._v(" "),a("p",[s._v("openssl genrsa -out /opt/ca/root/key/cakey.pem 2048")]),s._v(" "),a("p",[s._v("5：生成 CA 证书请求文件")]),s._v(" "),a("p",[s._v("openssl req -new -key /opt/ca/root/key/cakey.pem -out /opt/ca/root/key/ca.csr -config /opt/ca/root/openssl.cnf")]),s._v(" "),a("p",[s._v("6：自签名")]),s._v(" "),a("p",[s._v("openssl ca -selfsign -in /opt/ca/root/key/ca.csr -out /opt/ca/root/key/cacert.crt -config /opt/ca/root/openssl.cnf")]),s._v(" "),a("p",[s._v("7：修改 / opt/ca/root/openssl.cnf 配置，把")]),s._v(" "),a("p",[s._v("[usr_cert]\nbasicConstraints = CA:TRUE")]),s._v(" "),a("p",[s._v("修改为")]),s._v(" "),a("p",[s._v("[usr_cert]\nbasicConstraints = CA:FALSE")]),s._v(" "),a("p",[s._v("CA:TRUE 代表的是签发的是 CA 机构（自己是 CA 机构），CA:FALSE 代表的是签发的是证书（改成 false 就不能去签发其他 CA）")]),s._v(" "),a("p",[s._v("经过以上 7 个步骤，就成功创建了 CA 私钥及 CA 证书。有了这些就可以去签发其他的证书请求了")]),s._v(" "),a("p",[s._v("二：使用自建 CA 签名证书")]),s._v(" "),a("p",[s._v("1：mkdir /opt/ca/taobao")]),s._v(" "),a("p",[s._v("2：vim /opt/ca/taobao/openssl.cnf")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[ req ]\nprompt             = no\ndistinguished_name = server_distinguished_name\nreq_extensions     = req_ext\nx509_extensions\t= v3_req\nattributes\t\t= req_attributes\nstring_mask = utf8only\nutf8 = yes\n \n[ server_distinguished_name ]\ncommonName              = taobao2018.cn\nstateOrProvinceName     = guangzhou\ncountryName             = CN\norganizationName        = 广州我要淘科技有限公司\norganizationalUnitName  = IT\n \n[ v3_req ]\nbasicConstraints        = CA:FALSE\nkeyUsage = nonRepudiation, digitalSignature, keyEncipherment\n \n[ req_attributes ]\n \n[ req_ext ]\nsubjectAltName      = @alternate_names\n \n[ alternate_names ]\nDNS.1        = taobao2018.cn\nDNS.2        = bbs.taobao2018.cn\nDNS.3        = taobao2019.cn\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("3：生成网站私钥")]),s._v(" "),a("p",[s._v("openssl genrsa -out /opt/ca/taobao/privkey.pem 2048")]),s._v(" "),a("p",[s._v("4：生成证书请求文件（csr 文件）")]),s._v(" "),a("p",[s._v("openssl req -new -key /opt/ca/taobao/privkey.pem -out /opt/ca/taobao/taobao.csr -config /opt/ca/taobao/openssl.cnf")]),s._v(" "),a("p",[s._v("5：使用自建 CA 进行签发证书")]),s._v(" "),a("p",[s._v("openssl ca -in /opt/ca/taobao/taobao.csr -out /opt/ca/taobao/taobao.crt -config /opt/ca/root/openssl.cnf")]),s._v(" "),a("p",[s._v("6：查看证书信息（可选）")]),s._v(" "),a("p",[s._v("openssl x509 -text -in /opt/ca/taobao/taobao.crt")]),s._v(" "),a("p",[s._v("经过以上几个步骤，就生成了由自建 CA 签发的证书了")]),s._v(" "),a("p",[s._v("三：配置 nginx 的 ssl")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n\tlisten       443 ssl;\n\tserver_name  taobao2018.cn bbs.taobao2018.cn taobao2019.cn;\n \n\tssl_certificate      /opt/ca/taobao/taobao.crt;\n\tssl_certificate_key  /opt/ca/taobao/privkey.pem;\n \n\tssl_session_cache    shared:SSL:1m;\n\tssl_session_timeout  5m;\n \n\tssl_ciphers  HIGH:!aNULL:!MD5;\n\tssl_prefer_server_ciphers  on;\n \n\tlocation / {\n\t\troot   html;\n\t\tindex  index.html index.htm;\n\t}\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("保存配置文件之后，启动 nginx")]),s._v(" "),a("p",[s._v("四：导入自建 CA 的证书（根证书）")]),s._v(" "),a("p",[s._v("这里以 Firefox 为例，打开：选项 -> 隐私与安全 -> 查看证书，在证书颁发机构里面选择导入，")]),s._v(" "),a("p",[s._v("选择文件 /opt/ca/root/key/cacert.crt 导入并勾选 2 个信任的复选框")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190101222548303.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21uOTYwbW4=,size_16,color_FFFFFF,t_70",alt:"img"}})]),s._v(" "),a("p",[s._v("五：配置 hosts")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("192.168.133.134 taobao2018.cn\n192.168.133.134 bbs.taobao2018.cn\n192.168.133.134 taobao2019.cn\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("最后，使用 https 方式访问上面的三个 url 中的任意一个均可")]),s._v(" "),a("p",[s._v("访问之后，也可以在 Firefox 上查看证书")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190101222826485.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21uOTYwbW4=,size_16,color_FFFFFF,t_70",alt:"img"}})]),s._v(" "),a("p",[s._v("注意：")]),s._v(" "),a("p",[s._v("1：证书的 x509 信息如：stateOrProvinceName、organizationalUnitName 已经在 openssl.cnf 配置文件中指定了，所以在生成证书请求文件的时候，不需要再输入了")]),s._v(" "),a("p",[s._v("2：证书请求文件里面的 commonName，只需要填写主要的域名就可以了，其他的域名（包括主域名）必须要在 openssl.cnf 配置文件的 subjectAltName 属性中指定，否则浏览器会报不安全警告。本例子中展示了证书支持 3 个域名，所以这 3 个域名都要配置在 subjectAltName 属性中")]),s._v(" "),a("p",[s._v("全文完")]),s._v(" "),a("p",[s._v("本文由 "),a("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[s._v("简悦 SimpRead"),a("OutboundLink")],1),s._v(" 优化，用以提升阅读体验")]),s._v(" "),a("p",[s._v("使用了 全新的简悦词法分析引擎 beta，"),a("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击查看"),a("OutboundLink")],1),s._v("详细说明")])])}),[],!1,null,null,null);n.default=e.exports}}]);