(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{374:function(t,a,e){"use strict";e.r(a);var s=e(43),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"各种常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#各种常用命令"}},[t._v("#")]),t._v(" 各种常用命令")]),t._v(" "),e("h2",{attrs:{id:"node-npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-npm"}},[t._v("#")]),t._v(" node&npm")]),t._v(" "),e("h3",{attrs:{id:"puppteer下载报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#puppteer下载报错"}},[t._v("#")]),t._v(" puppteer下载报错")]),t._v(" "),e("p",[t._v("pm config set puppeteer_download_host=https://npm.taobao.org/mirrors\nhttps://www.jianshu.com/p/d69b1d8bc2a6")]),t._v(" "),e("h3",{attrs:{id:"版本管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本管理"}},[t._v("#")]),t._v(" 版本管理")]),t._v(" "),e("p",[t._v("n：升级工具包\nhttp://www.webhek.com/post/upgrade-node-js-via-n.html")]),t._v(" "),e("p",[t._v("nvm\nnave ：这个比较好用，n能下载不同的node版本，但是m不能为每个项目命名一个环境")]),t._v(" "),e("h3",{attrs:{id:"下载package慢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载package慢"}},[t._v("#")]),t._v(" 下载package慢")]),t._v(" "),e("p",[t._v("npm install  express --registry=https://registry.npm.taobao.org\nhttps://www.cnblogs.com/baby123/p/10753728.html\nnpm --registry https://registry.npm.taobao.org info underscore\n还有cnpm\nhttps://www.cnblogs.com/nicest/p/9577310.html")]),t._v(" "),e("h3",{attrs:{id:"换源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#换源"}},[t._v("#")]),t._v(" 换源")]),t._v(" "),e("p",[t._v("https://www.jianshu.com/p/0deb70e6f395")]),t._v(" "),e("h3",{attrs:{id:"npm查看已经安装的包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm查看已经安装的包"}},[t._v("#")]),t._v(" npm查看已经安装的包")]),t._v(" "),e("p",[t._v("https://blog.csdn.net/palmer_kai/article/details/79723907")]),t._v(" "),e("h3",{attrs:{id:"报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#报错"}},[t._v("#")]),t._v(" 报错")]),t._v(" "),e("p",[t._v("如果出现unexpected end of the json,    清除一下缓存\nnpm cache clean —force\nhttps://github.com/npm/npm/issues/18036")]),t._v(" "),e("p",[t._v("碰到下面的错误，一般是npm start之后端口被占用了\nUnable to specify array in "),e("code",[t._v("ELASTICSEARCH_HOSTS")]),t._v(" when trying to run Kibana docker image #42024")]),t._v(" "),e("h2",{attrs:{id:"anaconda"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#anaconda"}},[t._v("#")]),t._v(" Anaconda")]),t._v(" "),e("h3",{attrs:{id:"安装项目依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装项目依赖"}},[t._v("#")]),t._v(" 安装项目依赖")]),t._v(" "),e("p",[t._v("conda install --file requirements.txt\n跟pip install -r requirements.txt差不多")]),t._v(" "),e("h3",{attrs:{id:"conda查看和修改当前源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conda查看和修改当前源"}},[t._v("#")]),t._v(" conda查看和修改当前源")]),t._v(" "),e("p",[t._v("/83618540\n将以上配置文件写在~/.condarc中\nvim ~/.condarc\nchannels:")]),t._v(" "),e("ul",[e("li",[t._v("https://mirrors.ustc.edu.cn/anaconda/pkgs/main/")]),t._v(" "),e("li",[t._v("https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge/")]),t._v(" "),e("li",[t._v("https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/")]),t._v(" "),e("li",[t._v("defaults\nshow_channel_urls: true")])]),t._v(" "),e("h3",{attrs:{id:"删源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删源"}},[t._v("#")]),t._v(" 删源")]),t._v(" "),e("p",[t._v("换回conda的默认源。查看了conda config的文档后，发现直接删除channels即可。\nconda config --remove-key channels\nhttps://blog.csdn.net/observador/article/details/83618540")]),t._v(" "),e("h3",{attrs:{id:"pip更改源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pip更改源"}},[t._v("#")]),t._v(" pip更改源")]),t._v(" "),e("p",[t._v("这个命令在执行本地docker的时候也有效\nhttps://blog.csdn.net/lambert310/article/details/52412059")]),t._v(" "),e("h2",{attrs:{id:"docker命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker命令"}},[t._v("#")]),t._v(" docker命令")]),t._v(" "),e("h3",{attrs:{id:"删除container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除container"}},[t._v("#")]),t._v(" 删除container")]),t._v(" "),e("p",[t._v("Use them together, for example to clean up all your docker images and containers:")]),t._v(" "),e("ol",[e("li",[t._v("kill all running containers with docker kill $(docker ps -q)")]),t._v(" "),e("li",[t._v("delete all stopped containers with docker rm $(docker ps -a -q)")]),t._v(" "),e("li",[t._v("delete all images with docker rmi $(docker images -q)\n2018年2月11日")])]),t._v(" "),e("h3",{attrs:{id:"docker-一些参数-t-导致的运行状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-一些参数-t-导致的运行状态"}},[t._v("#")]),t._v(" docker 一些参数-t 导致的运行状态")]),t._v(" "),e("p",[t._v("https://codeday.me/bug/20180305/138404.html\n-it就是正常交互\n-d在后台运行看不到输出")]),t._v(" "),e("h2",{attrs:{id:"mac"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac"}},[t._v("#")]),t._v(" Mac")]),t._v(" "),e("h3",{attrs:{id:"brew-更新太慢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#brew-更新太慢"}},[t._v("#")]),t._v(" Brew 更新太慢")]),t._v(" "),e("p",[t._v("1、https://learnku.com/articles/18908\nbrew install —verbose 查看细节")]),t._v(" "),e("p",[t._v("2、安装elastic\nbrew cask install homebrew/cask-versions/adoptopenjdk8")]),t._v(" "),e("p",[t._v("3、Mac安装elasticsearch\nhttps://www.jianshu.com/p/df4af12a420a")]),t._v(" "),e("p",[t._v("4、新建文件右键\nhttps://sspai.com/post/41867\n换图标。查看简介，然后找个图片")]),t._v(" "),e("p",[t._v("5、显示隐藏文件\nhttps://www.zhihu.com/question/40870712")]),t._v(" "),e("h2",{attrs:{id:"elasticsearch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[t._v("#")]),t._v(" ElasticSearch")]),t._v(" "),e("p",[t._v("1、曾经遇到的坑\nhttps://blog.csdn.net/tclzsn7456/article/details/79957703\n嘀嘀嘀嘀嘀很牛逼的互联网公司。\n10亿信息的存储：https://max.book118.com/html/2016/1010/58350177.shtm\n快速导入上亿条的数据：\nhttps://www.cnblogs.com/hai-ping/p/6068946.html\nEs中文指南：https://es.xiaoleilu.com/")]),t._v(" "),e("h2",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),e("p",[t._v("查看数据：\nhttps://www.cnblogs.com/jabbok/p/9089703.html\n命令行工具：连接远处的客户端\nhttps://blog.csdn.net/comprel/article/details/89857736\n优雅的退出quit end\nhttps://www.jianshu.com/p/40c484710c69")]),t._v(" "),e("h2",{attrs:{id:"rabbitmq安装和错误排查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq安装和错误排查"}},[t._v("#")]),t._v(" Rabbitmq安装和错误排查")]),t._v(" "),e("p",[t._v("https://www.jianshu.com/p/e5ea7ff50fe6 权限错误\nhttps://www.jianshu.com/p/60c358235705 安装\n注意从3.3.1开始，rabbitmq默认不允许远程的ip登陆，需要改配置\nhttps://www.jianshu.com/p/e5ea7ff50fe6\nRabbitmq zookeeper dubbo nginx mysql redis 这些东西经常配套使用\nhttps://www.jianshu.com/p/75b8b9891aad\n嘿，感觉简书上非常适合写这些安装和启动的东西，可以写一个爬虫，将这些资源给聚合一下\n启动zookeeper")]),t._v(" "),e("p",[t._v("卧槽这个公司已经发展了7，8年了，找找投资吧\nSemantic3\nhttps://www.semantics3.com/technology。第三语义")]),t._v(" "),e("p",[t._v("zookeerper集群安装：https://blog.csdn.net/r244925932/article/details/81474702")])])}),[],!1,null,null,null);a.default=r.exports}}]);