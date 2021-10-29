(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{470:function(e,r,t){"use strict";t.r(r);var s=t(42),a=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("当我第一次开始我的 Kubernetes 之旅时，我一直在寻找一种设置本地部署环境的方式。")]),e._v(" "),t("p",[e._v("当我第一次开始我的 Kubernetes 之旅时，我一直在寻找一种设置本地部署环境的方式。很多人常常会使用 minikube 或 microk8s，这两者非常适合新手在单节点集群环境下进行操作。但当我已经了解了基础知识之后，这两者显然不太够用，我需要进一步寻找能够运行本地多节点集群、与生产环境更相似的平台。为此，我查阅了许多参考资料，最后我找到了 Rancher Server。接下来，我要介绍我是如何设置我的本地 K8S 多节点集群的。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021521444",alt:"img"}})]),e._v(" "),t("h1",{attrs:{id:"准备-master-节点和-worker-节点的虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备-master-节点和-worker-节点的虚拟机"}},[e._v("#")]),e._v(" 准备 master 节点和 worker 节点的虚拟机")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021521445",alt:"img"}})]),e._v(" "),t("p",[e._v("上图显示了集群的架构，一个 master 节点和 3 个 worker 节点。要尝试诸如使用 ingress controller 进行负载均衡、会话保持、host 亲和性等跨节点功能，这是最低的配置。")]),e._v(" "),t("p",[e._v("Rancher Server 的安装并不复杂，它被打包为一个 docker 镜像，并且可以作为一个容器运行。一个节点的基本配置是运行在 Linux 虚拟机上的 docker CE 守护进程。在本例中，我选择使用 Ubuntu 18.04 LTS（具体的节点要求请参考 Rancher 的官方文档："),t("a",{attrs:{href:"https://link.segmentfault.com/?enc=GtlmFbjPcmgq7Q24ILlgRQ%3D%3D.qznoMA1lfDQdSzTsHHOfihu5uhpU1OLkCSBXeHiwXRIxgc9npdjHPNoSEpos4MXD8eZ%2FrIujRM7XhohKq06KO7Rws7RgHWRF2y7sdIeZr9o%3D",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://rancher.com/docs/ranc..."),t("OutboundLink")],1),e._v(" ）。当我完成第一个 VM 设置时，我直接将其复制到另外三个中。如果你和我的操作一样，可以参考下方两个 tips：")]),e._v(" "),t("ul",[t("li",[e._v("安装指定版本 Docker："),t("a",{attrs:{href:"https://link.segmentfault.com/?enc=ap9kKkXN1npvszBRDjoDyw%3D%3D.8vIRLrKCT68gh00LZ3oW%2F51YqhIHf0GTqKyeLW3UX2xIvw5eXProju7xvVGCe27vd35NYIg%2B4aHlyQyfC2wSyg%3D%3D",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/insta..."),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Clone 虚拟机之后，更改 Ubuntu 主机名："),t("a",{attrs:{href:"https://link.segmentfault.com/?enc=A9haaDr0P7bc4Y5Tz9qHWA%3D%3D.slC0IQ7U0abWWBFM1KqetDNnC82gGxvlrElw7bcoWi8lhyC8D9WlQB5wpZUjZH8jXSYEgcvIf5UQfJR1s4FUyNcEoPphjDN8UPhp%2BizO3QY%3D",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://linuxize.com/post/how..."),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("最终，4 个节点都在我的电脑（i5，24G RAM）上启动，并分配以下资源。")]),e._v(" "),t("ul",[t("li",[e._v("Master 节点（2 core、4G RAM、Ubuntu 18.04 + Docker CE 18.09) x 1")]),e._v(" "),t("li",[e._v("Worker 节点（2 core, 3G RAM, Ubuntu 18.04 + Docker CE 18.09) x 3")])]),e._v(" "),t("h1",{attrs:{id:"在-master-节点上启动-rancher-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-master-节点上启动-rancher-server"}},[e._v("#")]),e._v(" 在 master 节点上启动 Rancher server")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo docker run --restart=unless-stopped \\\n  -p 81:80 -p 444:443 rancher/rancher\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("以上命令可以启动 Rancher server 容器，并且将其运行在 master 节点上。默认状态下，nginx ingress controller 会嵌入到 worker 节点中，并且绑定端口 80 和 443。因此我将 Rancger server 发布到端口 81 和 444 或其他端口，以避免端口冲突。")]),e._v(" "),t("h1",{attrs:{id:"完成-rancher-server-初始设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完成-rancher-server-初始设置"}},[e._v("#")]),e._v(" 完成 Rancher server 初始设置")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021521450",alt:"img"}})]),e._v(" "),t("p",[e._v("首先，使用 master 节点 IP 地址和端口 444 启动 Rancher server 控制台，它会要求设置管理员密码。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021521446",alt:"img"}})]),e._v(" "),t("p",[e._v("接着，确认 worker 节点到达 Rancher server 的 URL。这里为了方便我直接使用 master 节点 IP 地址作为 URL。完成了初始设置后，Rancher server 就可以添加新集群了。")]),e._v(" "),t("h1",{attrs:{id:"创建一个新的-k8s-集群和-master-节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个新的-k8s-集群和-master-节点"}},[e._v("#")]),e._v(" 创建一个新的 K8S 集群和 master 节点")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021521449",alt:"img"}})]),e._v(" "),t("p",[e._v("因为我想要在本地虚拟机上运行 K8S 集群而不是在云端，所以选择 “自定义” 的选项（即上方说明为“ From my own existing nodes”），然后新集群的云提供商选项选为“None”。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021521447",alt:"img"}})]),e._v(" "),t("p",[e._v("在 ubuntu 虚拟机上复制并运行 docker 命令来启动 master 节点。一个 master 节点至少要有 etcd 和 control，如果你打算创建一个单节点集群，需要选择所有 3 个角色并更改命令。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021521451",alt:"img"}})]),e._v(" "),t("p",[e._v("运行 docker 命令之后，新节点将显示在 Rancher Server 控制台上，配置这一节点需要花费一些时间，一旦配置完成，状态将变为 active。")]),e._v(" "),t("h1",{attrs:{id:"创建-worker-节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-worker-节点"}},[e._v("#")]),e._v(" 创建 worker 节点")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021521448",alt:"img"}})]),e._v(" "),t("p",[e._v("对于 worker 节点，我们仅需要在节点选项选择 “Worker” 角色，然后在 3 个 worker 节点的 Ubuntu 虚拟机上复制并运行 docker 命令。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021521454",alt:"img"}})]),e._v(" "),t("p",[e._v("最后，在我的电脑上多节点集群已经准备就绪。")]),e._v(" "),t("h1",{attrs:{id:"安装-kubectl-工具来管理新的-k8s-集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-kubectl-工具来管理新的-k8s-集群"}},[e._v("#")]),e._v(" 安装 kubectl 工具来管理新的 K8S 集群")]),e._v(" "),t("p",[e._v("新集群的 Kubernetes 版本时 v1.14.6，你可以在上面的截图内看到。为了更好地将 kubectl 工具版本与集群匹配，在 master 节点上运行以下命令，以安装特定版本：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.14.6/bin/linux/amd64/kubectl\nchmod +x ./kubectl\nsudo mv ./kubectl /usr/local/bin/kubectl\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("Kubectl 工具需要一个 kubeconfig 文件与集群连接，新集群地 kubeconfig 文件可以在 Rancher Server 的控制台中找到。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021521453",alt:"img"}})]),e._v(" "),t("p",[e._v("复制以上 kubeconfig 文件，并保存为~/.kube/config 文件。随后 kubectl 就能够获取集群信息。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021521452",alt:"img"}})]),e._v(" "),t("p",[e._v("有关 kubectl 的安装和配置可以参考以下连接：")]),e._v(" "),t("ul",[t("li",[e._v("安装和设置 kubectl："),t("a",{attrs:{href:"https://link.segmentfault.com/?enc=wWqFthbUVxnObsOmjfY80w%3D%3D.y4lmRtGybm%2BB41MSPHFXs3TEbI3%2BrLuPlD0CnW4KQSZelR6pFQuU9B9k0j3xzhHJApiP%2B3FHT6Mu5JJZIonTbQ%3D%3D",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/docs/ta..."),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("配置 kubectl 以访问多集群："),t("a",{attrs:{href:"https://link.segmentfault.com/?enc=jXrq8d8E7Mwb5CvXutcVZw%3D%3D.yPMoxpiNo4XRomHyqMW7sVxs6Mt2w3AYlGrg2vWjdqHNEgUqcvGzDKmracRky3aSyTrPvYNd3GgakWTNIpblEvcpB5u6YDJodEnB0cNqVYzwxc0a8RItXKYmxOFPZoye",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/docs/ta..."),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("原文链接：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://link.segmentfault.com/?enc=30aK4roawu4esKmC9t%2FUDA%3D%3D.o39KqMN1QBzrFOf%2BdMfkw4RWo3hKWGBlDaDFavweHDp61p%2BZL5vo1jmoK1nNcRjSa1UxLmFNLtyJeFIAot7xrBxq1UOC6Px%2F2uMvgsnpnEekT7tZO%2BqsxVjzLj0xO%2FF4mtbPwNATdgU1eijIa2LojA%3D%3D",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://medium.com/@kwonghung..."),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("全文完")]),e._v(" "),t("p",[e._v("本文由 "),t("a",{attrs:{href:"http://ksria.com/simpread",target:"_blank",rel:"noopener noreferrer"}},[e._v("简悦 SimpRead"),t("OutboundLink")],1),e._v(" 优化，用以提升阅读体验")]),e._v(" "),t("p",[e._v("使用了 全新的简悦词法分析引擎 beta，"),t("a",{attrs:{href:"http://ksria.com/simpread/docs/#/%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%BC%95%E6%93%8E",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看"),t("OutboundLink")],1),e._v("详细说明")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000021521441?utm_source=sf-similar-article#sr-toc-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("准备 master 节点和 worker 节点的虚拟机"),t("OutboundLink")],1),t("a",{attrs:{href:"https://segmentfault.com/a/1190000021521441?utm_source=sf-similar-article#sr-toc-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在 master 节点上启动 Rancher server"),t("OutboundLink")],1),t("a",{attrs:{href:"https://segmentfault.com/a/1190000021521441?utm_source=sf-similar-article#sr-toc-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("完成 Rancher server 初始设置"),t("OutboundLink")],1),t("a",{attrs:{href:"https://segmentfault.com/a/1190000021521441?utm_source=sf-similar-article#sr-toc-3",target:"_blank",rel:"noopener noreferrer"}},[e._v("创建一个新的 K8S 集群和 master 节点"),t("OutboundLink")],1),t("a",{attrs:{href:"https://segmentfault.com/a/1190000021521441?utm_source=sf-similar-article#sr-toc-4",target:"_blank",rel:"noopener noreferrer"}},[e._v("创建 worker 节点"),t("OutboundLink")],1),t("a",{attrs:{href:"https://segmentfault.com/a/1190000021521441?utm_source=sf-similar-article#sr-toc-5",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装 kubectl 工具来管理新的 K8S 集群"),t("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);