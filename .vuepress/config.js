module.exports = {
  "title": "柒年树洞",
  "description": "欢迎来到我的树洞小屋",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "随笔",
        "icon": "reco-suggestion",
        "link": "/docs/life/"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/hzjsj",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/life/": [
        "",
        "dream"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "subSidebar": 'auto',
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "小柒",
    "authorAvatar": "/avatar.png",
    "record": "皖ICP备19005551号-3",
    "recordLink":"https://beian.miit.gov.cn",
    "startYear": "2018",
    "huawei": true,
    "docsRepo": 'https://github.com/hzjsj/hzjsj.github.io',
    "docsBranch": 'main',
    "editLinks": true,
    "editLinkText": '帮助我们改善此页面！'
  },
  "markdown": {
    "lineNumbers": true
  }
}