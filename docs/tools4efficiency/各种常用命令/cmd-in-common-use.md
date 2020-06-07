# 各种常用命令
## node&npm
### puppteer下载报错
pm config set puppeteer_download_host=https://npm.taobao.org/mirrors
https://www.jianshu.com/p/d69b1d8bc2a6

### 版本管理
n：升级工具包
http://www.webhek.com/post/upgrade-node-js-via-n.html

nvm
nave ：这个比较好用，n能下载不同的node版本，但是m不能为每个项目命名一个环境

### 下载package慢
npm install  express --registry=https://registry.npm.taobao.org
https://www.cnblogs.com/baby123/p/10753728.html
npm --registry https://registry.npm.taobao.org info underscore 
还有cnpm
https://www.cnblogs.com/nicest/p/9577310.html

### 换源
https://www.jianshu.com/p/0deb70e6f395


### npm查看已经安装的包
https://blog.csdn.net/palmer_kai/article/details/79723907

### 报错
如果出现unexpected end of the json,    清除一下缓存
npm cache clean —force
https://github.com/npm/npm/issues/18036

碰到下面的错误，一般是npm start之后端口被占用了
Unable to specify array in `ELASTICSEARCH_HOSTS` when trying to run Kibana docker image #42024


## Anaconda
### 安装项目依赖
conda install --file requirements.txt
跟pip install -r requirements.txt差不多

### conda查看和修改当前源
/83618540
将以上配置文件写在~/.condarc中 
vim ~/.condarc
channels:
- https://mirrors.ustc.edu.cn/anaconda/pkgs/main/
- https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge/
- https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
- defaults
show_channel_urls: true

### 删源
换回conda的默认源。查看了conda config的文档后，发现直接删除channels即可。
conda config --remove-key channels
https://blog.csdn.net/observador/article/details/83618540

### pip更改源
这个命令在执行本地docker的时候也有效
https://blog.csdn.net/lambert310/article/details/52412059

## docker命令
### 删除container
Use them together, for example to clean up all your docker images and containers:
1. kill all running containers with docker kill $(docker ps -q)
2. delete all stopped containers with docker rm $(docker ps -a -q)
3. delete all images with docker rmi $(docker images -q)
2018年2月11日

### docker 一些参数-t 导致的运行状态
https://codeday.me/bug/20180305/138404.html
-it就是正常交互
-d在后台运行看不到输出


## Mac
### Brew 更新太慢
1、https://learnku.com/articles/18908
brew install —verbose 查看细节

2、安装elastic
brew cask install homebrew/cask-versions/adoptopenjdk8

3、Mac安装elasticsearch
https://www.jianshu.com/p/df4af12a420a

4、新建文件右键
https://sspai.com/post/41867
换图标。查看简介，然后找个图片

5、显示隐藏文件
https://www.zhihu.com/question/40870712

## ElasticSearch
1、曾经遇到的坑
https://blog.csdn.net/tclzsn7456/article/details/79957703
嘀嘀嘀嘀嘀很牛逼的互联网公司。
10亿信息的存储：https://max.book118.com/html/2016/1010/58350177.shtm
快速导入上亿条的数据：
https://www.cnblogs.com/hai-ping/p/6068946.html
Es中文指南：https://es.xiaoleilu.com/

## Redis
查看数据：
https://www.cnblogs.com/jabbok/p/9089703.html
命令行工具：连接远处的客户端
https://blog.csdn.net/comprel/article/details/89857736
优雅的退出quit end
https://www.jianshu.com/p/40c484710c69


## Rabbitmq安装和错误排查
https://www.jianshu.com/p/e5ea7ff50fe6 权限错误
https://www.jianshu.com/p/60c358235705 安装
注意从3.3.1开始，rabbitmq默认不允许远程的ip登陆，需要改配置
https://www.jianshu.com/p/e5ea7ff50fe6
Rabbitmq zookeeper dubbo nginx mysql redis 这些东西经常配套使用
https://www.jianshu.com/p/75b8b9891aad
嘿，感觉简书上非常适合写这些安装和启动的东西，可以写一个爬虫，将这些资源给聚合一下
启动zookeeper

卧槽这个公司已经发展了7，8年了，找找投资吧
Semantic3
https://www.semantics3.com/technology。第三语义

zookeerper集群安装：https://blog.csdn.net/r244925932/article/details/81474702


