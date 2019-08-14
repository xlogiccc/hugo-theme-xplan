# Hugo Theme xPlan

[English Document](https://github.com/xLogic92/hugo-theme-xplan/blob/master/README.md) | [中文文档](https://github.com/xLogic92/hugo-theme-xplan/blob/master/README_zh-cn.md)

xPlan is a minimalistic and responsive theme for bloggers based on the website named [Alili](https://alili.tech/).

**Features**

+ **Beautiful style**
+ **Tags page and Archive page**
+ **[Valine](https://valine.js.org) comment-system**
+ **Both Google Analytics and Baidu Analytics for site analytics.**
+ **Table of Content**

Here's the link to online demo: [https://xlogic.me](https://xlogic.me).

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Hugo Theme xPlan](#hugo-theme-xplan)
	- [Screenshot](#screenshot)
	- [Installation](#installation)
	- [Example Site](#example-site)
	- [About page](#about-page)
	- [Hide pages](#hide-pages)
	- [Valine](#valine)
	- [Social link icons](#social-link-icons)
	- [Nearly finished](#nearly-finished)
	- [License](#license)

<!-- /TOC -->

## Screenshot

**home page**

![Screenshot](https://github.com/xLogic92/hugo-theme-xplan/blob/master/images/screenshot.jpg)

**archive page**

![Screenshot](https://github.com/xLogic92/hugo-theme-xplan/blob/master/images/archive.jpg)

## Installation

First clone the theme to your themes directory:

```
$ cd themes
$ git clone https://github.com/xLogic92/hugo-theme-xplan.git
```

Take a look inside the [`exampleSite`](https://github.com/xLogic92/hugo-theme-xplan/tree/master/exampleSite) folder of this theme. You'll find a file called [`config.toml`](https://github.com/xLogic92/hugo-theme-xplan/blob/master/exampleSite/config.toml).

To use it, copy the [`config.toml`](https://github.com/xLogic92/hugo-theme-xplan/blob/master/exampleSite/config.toml) in the root folder of your Hugo site. Feel free to change strings as you like to customize your website.

And you may replace your site `archetypes/default.md` with [`hugo-theme-xplan/archetypes/default.md`](https://github.com/xLogic92/hugo-theme-xplan/tree/master/archetypes/default.md)

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.

## Example Site

There is an example site with config file and markdown files in [`exampleSite`](https://github.com/xLogic92/hugo-theme-xplan/tree/master/exampleSite) directory.

## About page

Use the about page to introduce yourself to your visitors. You can customize the content as you like in the `/content/about/_index.md`.

## Hide pages

Pages can be hidden and don't appear in the post list on the homepage if you add the variable `hidden = true` to the frontmatter. This allows you to link from elsewhere, i.e. just the menu.

## Valine

This theme features a comment system powered by Valine. Just add your Valine AppId and Appkey to the [`config.toml`](https://github.com/xLogic92/hugo-theme-xplan/blob/master/exampleSite/config.toml) and set `enableValine = true`, then let readers respond to your blog posts.

## Social link icons

You can add a social link by adding entries to the `social` block in the [`config.toml`](https://github.com/xLogic92/hugo-theme-xplan/blob/master/exampleSite/config.toml). You can choose the icons from [Font awesome](https://fortawesome.github.io/Font-Awesome/).

## Nearly finished

In order to see your site in action, run Hugo's built-in local server.

```
$ hugo server
```

Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.

## License

This theme is released under the MIT license. For more information read the [license](https://github.com/xLogic92/hugo-theme-xplan/blob/master/LICENSE.md).
