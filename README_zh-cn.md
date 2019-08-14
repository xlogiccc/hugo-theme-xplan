# Hugo Theme xPlan

[English Document](https://github.com/xLogic92/hugo-theme-xplan/blob/master/README.md) | [中文文档](https://github.com/xLogic92/hugo-theme-xplan/blob/master/README_zh-cn.md)

xPlan 是在 [Alili](https://alili.tech/) 基础上整合更改的一个简约主题。

**特点**

+ **漂亮的样式**
+ **添加了归档页和标签页**
+ **集成了 [Valine](https://valine.js.org) 评论系统**
+ **提供了 Google Analytics 和百度统计**
+ **文章目录**

示例网站： [https://xlogic.me](https://xlogic.me).

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Hugo Theme xPlan](#hugo-theme-xplan)
	- [截图](#截图)
	- [安装](#安装)
	- [示例站点](#示例站点)
	- [关于页面](#关于页面)
	- [隐藏页面](#隐藏页面)
	- [Valine 评论](#Valine-评论)
	- [社交链接](#社交链接)
	- [部署主题](#部署主题)
	- [License](#license)

<!-- /TOC -->

## 截图

**首页**

![Screenshot](https://github.com/xLogic92/hugo-theme-xplan/blob/master/images/screenshot.jpg)

**归档页**

![Screenshot](https://github.com/xLogic92/hugo-theme-xplan/blob/master/images/archive.jpg)

## 安装

首先进入 `hugo` 的站点目录运行下面的命令：

```
$ cd themes
$ git clone https://github.com/xLogic92/hugo-theme-xplan.git
```

本主题提供了一个示例配置文件是 [`exampleSite`](https://github.com/xLogic92/hugo-theme-xplan/tree/master/exampleSite) 目录里的 [`config.toml`](https://github.com/xLogic92/hugo-theme-xplan/blob/master/exampleSite/config.toml) 文件。

配置文件中对大部分配置都有详细的注释说明，复制该文件到站点目录下，根据自己的情况修改即可。

然后可能你还需要用 [`hugo-theme-xplan/archetypes/default.md`](https://github.com/xLogic92/hugo-theme-xplan/tree/master/archetypes/default.md) 替换你的项目中的 `archetypes/default.md`。

更多安装信息查看 Hugo 官方文档 [setup guide](//gohugo.io/overview/installing/)。

## 示例站点

[`exampleSite`](https://github.com/xLogic92/hugo-theme-xplan/tree/master/exampleSite) 是本主题的一个示例站点，里面有配置文件、关于页面的一些示例。

## 关于页面

使用关于页面首先要在你的站点目录的 `content` 目录下创建一个 `about` 目录，然后再创建一个 `_index.md` 文件，编写该文件即可。

你也可以参考本主题示例站点中的关于页：[`exampleSite/content/about/index.md`](https://github.com/xLogic92/hugo-theme-xplan/blob/master/exampleSite/content/about/index.md)。

## 隐藏页面

如果你不想让一个页面出现在文章列表中，只需要在 markdown 文件的 `frontmatter` 中添加 `hidden = true` 即可。

然后你可以在其他任何地方通过链接来引用该页面，如在菜单中放置一个链接。

关于页面就是这么实现的。

## Valine 评论

本主题使用 Valine 评论需要在 [`config.toml`](https://github.com/xLogic92/hugo-theme-xplan/blob/master/exampleSite/config.toml) 中进行设置。

`enableValine` 设置为 `true` 即可开启 Valine 评论, 并设置 Valine 的 `AppId` 和 `AppKey`。

将 `enableValine` 设置为 `false` 则不启用 Valine 评论。

## 社交链接

你可以通过在 `config.toml` 的 `social` 模块中修改添加你的社交链接。社交链接使用的 [Font awesome](https://fortawesome.github.io/Font-Awesome/)。

## 部署主题

配置完成之后，就可以使用下面的命令来启动 hugo 服务编译 markdown 文件生成静态站点：

```
$ hugo server
```

然后在浏览器地址栏输入 [`localhost:1313`](http://localhost:1313) 来访问站点。

## License

[MIT](https://github.com/xLogic92/hugo-theme-xplan/blob/master/LICENSE.md)
