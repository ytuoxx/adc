---
# cover: assets/images/WX20230827-174547@2x.png
icon: editor
# 设置写作时间
date: 2023-11-11
# 一个页面可以有多个分类
category:
  - MAC
# 一个页面可以有多个标签
tag:
  - WIN
  - 安装
  - 问题
# 此页面会在文章列表置顶
sticky: true
# 禁止编辑此页链接
editLink: false
---

# WIN安装软件，用户当前文件夹所在磁盘剩余空间不足



#### 苹果电脑使用PD虚拟机安装的windows系统，安装360安全卫士时提示“用户当前文件夹所在磁盘盘剩余空间不足100MB”，可以参考以下方案尝试解决。



## 故障场景
MAC电脑，使用PD模拟器（Parallels Desktop）安装的windows系统
## 故障现象
提示所在磁盘剩余空间不足100M

![image-20231111171548542](assets/images/image-20231111171548542.png)

## 故障原因
PD模拟器安装的windows系统桌面（下载）为网络路径，不是本地路径。把360安装包放到桌面（下载）安装时，由于360安装包不支持网络路径下载，所以报错
## 解决方案
360官网下载instbeta.exe安装器，不要放在桌面，放到磁盘(C盘)目录下进行安装，安装成功后删除刚刚放置的安装包即可。

## ADC 资源群

::: tip
扫码添加微信，备注 `ADC` 即可。

:::

![ADC 资源群](/assets/images/ADC-QrCode.jpg)