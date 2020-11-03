(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{490:function(e,t,a){"use strict";a.r(t);var n=a(4),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("React 是一个用于构建用户界面的 JavaScript 库。")]),e._v(" "),a("p",[a("strong",[e._v("通过 npm 使用 React")])]),e._v(" "),a("p",[e._v("1.安装Node.js 和 npm")]),e._v(" "),a("p",[e._v("通过 node -v 命令查看本机是否安装，如果没有安装，参考"),a("a",{attrs:{href:"https://nodejs.org/zh-cn/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("node.js安装指南"),a("OutboundLink")],1),e._v(" 根据电脑系统环境进行安装。")]),e._v(" "),a("p",[e._v("国内使用 npm 速度很慢，你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install -g cnpm --registry=https://registry.npm.taobao.org\nnpm config set registry https://registry.npm.taobao.org\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("这样就可以使用 cnpm 命令来安装模块了：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cnpm install [name]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("2.使用 create-react-app 快速构建 React 开发环境")]),e._v(" "),a("p",[e._v("create-react-app 是来自于 Facebook，通过该命令我们无需配置就能快速构建 React 开发环境。")]),e._v(" "),a("p",[e._v("create-react-app 自动创建的项目是基于 Webpack + ES6 。")]),e._v(" "),a("p",[e._v("执行以下命令创建项目：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cnpm install -g create-react-app\ncreate-react-app my-app\ncd my-app/\nnpm start\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("在浏览器中打开 "),a("strong",[e._v("http://localhost:3000/")]),e._v(" ，结果如下图所示：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://7376-svip9-1258873690.tcb.qcloud.la/uploads/1593654574558.png",alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("React 的核心概念")])]),e._v(" "),a("p",[e._v("1.虚拟 DOM")]),e._v(" "),a("p",[e._v("DOM的本质是什么：")]),e._v(" "),a("p",[e._v("在浏览器中的概念，用JS对象来表示 页面上的元素，并提供了操作DOM对象的API。")]),e._v(" "),a("p",[e._v("什么是React 中的虚拟DOM：")]),e._v(" "),a("p",[e._v("是框架中的概念，是程序员用 JS 对象来模拟页面上的 DOM 和 DOM 嵌套。")]),e._v(" "),a("p",[e._v("为什么要实现虚拟DOM：")]),e._v(" "),a("p",[e._v("为了实现页面中，DOM 元素的高效更新。")]),e._v(" "),a("p",[e._v("2.Diff 算法")]),e._v(" "),a("p",[e._v("tree diff :")]),e._v(" "),a("p",[e._v("新旧两棵 DOM 树，逐层对比的过程。当整颗 DOM 逐层对比完毕，则所有需要被按需更新的元素，必然能够找到。")]),e._v(" "),a("p",[e._v("component diff ：")]),e._v(" "),a("p",[e._v("在进行Tree Diff 的时候，每一层中，组件级别的对比。如果对比前后 组件的类型相同，则暂时认为此组件不需要被更新；组件的类型不同，则需要移除旧组件，创建新组建，并追加到页面上；")]),e._v(" "),a("p",[e._v("element diff：")]),e._v(" "),a("p",[e._v("在进行组件对比的时候，如果两个组件类型相同，则需要进行元素级别的对比。")])])}),[],!1,null,null,null);t.default=s.exports}}]);