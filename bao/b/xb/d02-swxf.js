{
  "author":"20220530",
  "name": "森屋新番",
  "url": "https://www.senfun.net", //填网站链接
  "tihuan": "cnzz.com", //这个不用动，是个别网站嗅探时过滤地址用的
  //"User": "空", //这个不用动，是个别网站播放需要请求头时才用到
  "User": "User-Agent:Dart/2.14 (dart:io)",
  "shouye": "1",
  "fenlei": "TV动画$/show/1/page/#BD动画$/show/2/page/#剧场版$/show/3/page/#欧美动漫$/show/37/page/", //网站列表的分类
  "houzhui": ".html", //网站翻页链接的后缀

  "shifouercijiequ": "0", //截取的列表数组是否需要二次截取，0不需要，1需要
  "jiequqian": "空", //不需要二次截取就填空
  "jiequhou": "空", //不需要二次截取就填空
  "jiequshuzuqian": "class=\"module-item-pic\"", //截取的列表数组的前关键词,截取的关键词有 " 的用 \ 进行转义
  "jiequshuzuhou": "</div>", //截取的列表数组的后关键词,截取的关键词有 " 的用 \ 进行转义
  "tupianqian": "data-src=\"", //列表中资源的图片前关键词,截取的关键词有 " 的用 \ 进行转义
  "tupianhou": "\"", //列表中资源的图片后关键词,截取的关键词有 " 的用 \ 进行转义
  "biaotiqian": "title=\"", //列表中资源的标题前关键词,截取的关键词有 " 的用 \ 进行转义
  "biaotihou": "\"", //列表中资源的标题后关键词,截取的关键词有 " 的用 \ 进行转义
  "lianjieqian": "href=\"", //列表中资源的详情页跳转链接前关键词,截取的关键词有 " 的用 \ 进行转义
  "lianjiehou": "\"", //列表中资源的详情页跳转链接后关键词,截取的关键词有 " 的用 \ 进行转义

  //搜索部分基本不用动，现在网站基本都是苹果CMS，所有搜索是固定的。
  "sousuoqian": "/index.php/ajax/suggest?mid=1&wd=",
  "sousuohou": "&limit=500",
  "sousuohouzhui": "/bangumi/", //搜索页影片跳转详情页的中间标识链接部分
  "ssmoshi": "0",
  "sousuoshifouercijiequ": "0",
  "jspic": "pic",
  "jsname": "name",
  "jsid": "id",
  "ssjiequqian": "空",
  "ssjiequhou": "空",
  "ssjiequshuzuqian": "空",
  "ssjiequshuzuhou": "空",
  "sstupianqian": "空",
  "sstupianhou": "空",
  "ssbiaotiqian": "空",
  "ssbiaotihou": "空",
  "sslianjieqian": "空",
  "sslianjiehou": "空",

  "bfshifouercijiequ": "0",
  "bfjiequqian": "空",
  "bfjiequhou": "空",
  "bfjiequshuzuqian": "id=\"sort-item-", //播放截取的列表数组的前关键词
  "bfjiequshuzuhou": "</div>", //播放截取的列表数组的后关键词

  "zhuangtaiqian": "video-info-item\">", //状态前关键词
  "zhuangtaihou": "</div>", //状态后关键词
  "daoyanqian": "导演：</span>", //导演前关键词
  "daoyanhou": "</div>", //导演态后关键词
  "zhuyanqian": "主演：</span>", //主演前关键词
  "zhuyanhou": "</div>", //主演后关键词
  "juqingqian": "class=\"zkjj_a\">", //剧情前关键词
  "juqinghou": "<span", //剧情后关键词

  "bfyshifouercijiequ": "0", //截取的播放列表数组是否需要二次截取，0不需要，1需要
  "bfyjiequqian": "空", //不需要二次截取就填空
  "bfyjiequhou": "空", //不需要二次截取就填空
  "bfyjiequshuzuqian": "<a", //播放剧集数组前关键词
  "bfyjiequshuzuhou": "/a>", //播放剧集数组后关键词
  "bfbiaotiqian": "span>", //播放剧集标题前关键词
  "bfbiaotihou": "</span", //状播放剧集标题后关键词
  "bflianjieqian": "href=\"", //播放剧集链接前关键词
  "bflianjiehou": "\""
} //播放剧集链接后关键词
