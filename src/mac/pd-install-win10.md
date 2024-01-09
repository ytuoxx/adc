---
# cover: assets/images/WX20230827-174547@2x.png
icon: editor
# 设置写作时间
date: 2023-09-23
# 一个页面可以有多个分类
category:
  - MAC
# 一个页面可以有多个标签
tag:
  - 虚拟机
  - PD
  - Win
  - Win10
# 此页面会在文章列表置顶
sticky: true
# 禁止编辑此页链接
editLink: false
---

# ParallelsDesktop安装Win10教程


## 添加镜像

进入PD控制中心，添加新镜像。如下图所示。

![image-20230923125540276](assets/images/image-20230923125540276.png)

![image-20230923125605070](assets/images/image-20230923125605070.png)

![image-20230923125635713](assets/images/image-20230923125635713.png)

![image-20230923125703126](assets/images/image-20230923125703126.png)

![image-20230923125724102](assets/images/image-20230923125724102.png)



找到下载的win10镜像，再次确认镜像是A64的ISO文件。

![image-20230923125922590](assets/images/image-20230923125922590.png)



## 配置镜像

打开镜像后，选择版本，按照下图操作，点击完成即可。

![image-20230923130215775](assets/images/image-20230923130215775.png)



系统名称和保存路径默认即可，并勾选`安装前设定`。

![image-20230923130251198](assets/images/image-20230923130251198.png)



由于PD默认的是win11系统，TPM芯片又是win11必须模块。所以安装win10时需要删掉`TPM芯片`，不然启动win10镜像会自动进入shell界面。

![image-20230923130340254](assets/images/image-20230923130340254.png)

![image-20230923130357858](assets/images/image-20230923130357858.png)



## 启动开机

配置完成后，开始创建系统，win10镜像成功引导开机，等待自动安装进入系统即可。

![image-20230923130416652](assets/images/image-20230923130416652.png)



由于ARM版win系统在不断更新中，所以建议按照提示升级为最新版系统。

![image-20230923132359589](assets/images/image-20230923132359589.png)

![image-20230923132456904](assets/images/image-20230923132456904.png)

## 配置网络

如果开机之后，系统不能正常上网，安装下图操作即可。

![image-20230923131722346](assets/images/image-20230923131722346.png)

![image-20230923131759274](assets/images/image-20230923131759274.png)

## ADC 资源群

::: tip
扫码添加微信，备注 `ADC` 即可。

:::

![ADC 资源群](/assets/images/ADC-QrCode.jpg)
