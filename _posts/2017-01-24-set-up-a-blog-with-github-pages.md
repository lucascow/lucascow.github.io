---
title: "Web: Set up a Blog with Github Pages"
header:
  image: /assets/images/unsplash-image-1.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
categories:
  - Programming
tags:
  - Web
featurePicture: "/assetsLucas/images/2017-01-24-set-up-a-blog-with-github-pages-featurePicture.jpg"
excerpt: Why use Github Pages? How does it work? How to start?  How to write a blog? Some other note?
---
# Set up a Blog with Github Pages


## Why use Github Pages

* Free
* Easy to install (No server or ssl cert needed)
* Static Page (Fast)


## How does it work

1. First of all, Github let you to create a static website for you and also your projects, i.e. Github Pages.


2. Github Pages has an embedded web engine called `JekyII` to let you build your blog on Github Pages.
	

3. What does `JekyII` do or support:

	* Provide you a convient architecture to manage your sites, for example, you can set mostly all the site param in 1 `.yaml` file.
	* Act as an server to serve your site.
	* Support `Liquid` web template, i.e. load and pass parameter to the template.
	* Render your blog content based on `Markdown` syntax.
	* Support theme so possible to build an elagant webpage quickly.


## How to start

###### Simply follow the tutorial: [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)

> ##### Tips for you:
> Just simply fork or clone the preoject [mmistakes/minimal-mistakes](https://github.com/mmistakes/minimal-mistakes). Although it is a theme, it has evrything to set up your site.  


## How to write a blog

`There is no embedded text editor like WordPress, but you don't need to learn or write the html code.`

###### To blog, you need to use `Markdown` syntax, which can be mastered within 5 minutes, here are some resource:

* [A simple guide by Github](https://guides.github.com/features/mastering-markdown/)
* [A simple cheatsheet table](http://commonmark.org/help/)
* [Master Google](https://www.google.com)

###### Once You have a basic idea, you can play an write in the online editor [**Github Markdown Editor**](https://jbt.github.io/markdown-editor).


## Some other note

##### Development
>[A better jeckyII doc](http://www.rubydoc.info/github/mojombo/jekyll/)
>
>Page and post share the same structure i.e. yaml meta data +  content
>
>A web page = layout + _post / (_page + _include file)
>
>If the extension is. md, the content can have a markdwon processing.


##### Navi Bar
>To edit the navi bar, go to /_data/navigation.yml


##### Demo Site
>/docs is another deploy directory, you can use it to build a demo site.

##### Analytics Provider
>To enable google analytics, simply input the track id in `_config.yml` when using Minimal Mistakes



