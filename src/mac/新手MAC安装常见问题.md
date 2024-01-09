---
icon: editor
# 设置写作时间
date: 2023-08-28
# 一个页面可以有多个分类
category:
  - MAC
# 一个页面可以有多个标签
tag:
  - 虚拟机
  - PD
  - 问题
# 此页面会在文章列表置顶
sticky: true
# 禁止编辑此页链接
editLink: false
---

# 新手MAC安装常见问题

## 打开终端

::: tip
打开方式：`command`+空格，输入`终端`或者`zhongduan`，如下图，打开终端
:::

![image-20230828144638888](assets/images/image-20230828144638888.png)



## 解决无法打开“xxx”，因为Apple无法检查其是否包含恶意软件。

![image-20230826090110197](assets/images/image-20230826090110197.png)



输入以下命令回车，再输入本机密码回车（密码不可见

```sh
sudo spctl --master-disable
```

![image-20230905144356815](assets/images/image-20230905144356815.png)



操作完成后，在系统设置 > 隐私与安全性界面，如下图所示：

![image-20230826090903069](assets/images/image-20230826090903069.png)



## 解决“xxx”,已损坏，无法打开。您应该将它移到废纸篓。

输入以下命令回车，再输入本机密码回车（密码不可见

::: warning

`xxx`是软件名

:::

```sh
sudo xattr -rd com.apple.quarantine /Applications/xxx.app
```

以下命令是以`Sketch`为例，操作完成后，重新打开软件即可。

![image-20230905142424034](assets/images/image-20230905142424034.png)



## ADC 资源群

::: tip
扫码添加微信，备注 `ADC` 即可。

:::

![ADC 资源群](/assets/images/ADC-QrCode.jpg)