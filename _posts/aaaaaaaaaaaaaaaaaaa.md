---
title: 'aaaaaaaaaaaaaaaaaaaa'
excerpt: '扽巴萨扽哈扫街否扫发放桑三肯哈扫康巴但反抗反倒规避扽荆州剋姐这就看这韩匡暂扣在单抗不重矿地扫工地根.'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Joe Haddad
  picture: '/assets/blog/authors/joe.jpeg'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

## 需求

### Root

### Xposed

### Root 被检测
被 微信、welink、中国工商银行 检测出来

### 备份数据

### NekoSMS 过滤短信

### 伪装GPS

### 其它需求


## 过程记录

### Root

```shell
adb reboot bootloader
fastboot flash recovery twrp.img # 这个不管用
fastboot boot twrp.img # 用这个
fastboot reboot  # 或 电源键和音量加
adb reboot recovery

adb push Magisk-v23.0.zip /mnt/vendor/Magisk-v23.0.zip
```

官方rec没了就进fastboot线刷，用老版本(2018)，刷的是文件夹(区别于新版本直接刷tgz且限制更严)，线刷若保留用户数据google可能进不去(我这边是没有google服务这个按钮且有按钮的地方也点不动)，要清除数据但不要加锁，备份应用内的数据用root后的swift backup存到硬盘；刷twrp用`fastboot boot twrp.img`，之后自动进入twrp后`adb push`到sdcard下，magisk.apk重名命为magisk.zip后push，然后卡刷。

### Xposed

### Root 被检测
#### 检测方法

![image-20210602025128082](/img/image-20210602025128082.png)

momo

公开检测方法 & 测试 https://www.coolapk.com/apk/io.github.vvb2060.mahoshojo

工商银行 welink 抖音? 



### 备份数据

Swift Backup 离线备份到闪存 https://swiftapps.org/faq#pc

针对已Root但显示不了Root: 不要改包名

![image-20210603082848891](/img/image-20210603082848891.png)

### NekoSMS 过滤短信

![home-bg-o.jpg](/img/20200501003050.png)