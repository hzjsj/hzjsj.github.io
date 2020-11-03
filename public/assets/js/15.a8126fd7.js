(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{495:function(e,s,n){"use strict";n.r(s);var r=n(4),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("strong",[e._v("简单介绍一下：")])]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/serverless/serverless/blob/master/README_CN.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serverless Framework"),n("OutboundLink")],1),e._v("：Serverless Framework 是业界非常受欢迎的无服务器应用框架，开发者无需关心底层资源即可部署完整可用的 Serverless 应用架构。")]),e._v(" "),n("p",[e._v("工具准备：")]),e._v(" "),n("p",[e._v("首先确保系统包含以下环境：")]),e._v(" "),n("p",[e._v("1.安装Node.js 和 npm")]),e._v(" "),n("p",[e._v("通过 node -v 命令查看本机是否安装，如果没有安装，参考"),n("a",{attrs:{href:"https://nodejs.org/zh-cn/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("node.js安装指南"),n("OutboundLink")],1),e._v(" 根据电脑系统环境进行安装")]),e._v(" "),n("p",[e._v("2.安装 Serverless Framework")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm install -g serverless    //全局Serverless Framework CLI\n\nserverless -v               // 查看 Serverless Framework CLI 的版本信息\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[e._v("3.创建 Serverless service")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("serverless create -t tencent-nodejs -p get_ip \ncd get_ip     //进入get_ip目录\nnpm install   //安装依赖\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://7376-svip9-1258873690.tcb.qcloud.la/tcb-cms/2020-09-06/qcRsdmmP5N91aWO8CQHM_fQirXJAgkkJ.png",alt:"01.png"}})]),e._v(" "),n("p",[e._v("4.修改 index.js 文件中的返回值")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\'use strict\';\n\nexports.main_handler = (event, context, callback) => {\n  \n  return event["requestContext"]["sourceIp"]\n};\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("5.配置 serverless.yml 文件")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("service: get-ip\n\nprovider: # provider information\n  name: tencent\n  runtime: Nodejs8.9 # Nodejs8.9 or Nodejs6.10\n  credentials: ~/credentials\n\nplugins:\n  - serverless-tencent-scf\n\nfunctions:\n  hello_world:\n    handler: index.main_handler\n    events:\n     - apigw:\n         name: hello_world_apigw\n         parameters:\n           stageName: release\n           serviceId:\n           httpMethod: ANY\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br")])]),n("p",[e._v("6.部署")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("serverless deploy\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("部署时会弹出一个二维码，这个是用来登入 "),n("a",{attrs:{href:"https://cloud.tencent.com/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("腾讯云账号"),n("OutboundLink")],1),e._v(" 的，微信扫码就可以注册、登入、授权、部署")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://7376-svip9-1258873690.tcb.qcloud.la/tcb-cms/2020-09-06/nkJzkbRXFq8hEbWcPaRCQww-B8gn6TTX.png",alt:"02.png"}})]),e._v(" "),n("p",[e._v("部署成功后打开上面的 ANY 访问路径，就可以看到自己的IP地址")])])}),[],!1,null,null,null);s.default=a.exports}}]);