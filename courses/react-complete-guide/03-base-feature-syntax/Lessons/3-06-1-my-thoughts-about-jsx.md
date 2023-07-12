---
id: 3-06-1-my-thoughts-about-jsx
title: 3.06.1 My Thoughts About Jsx
date: 2021-03-12 11:49:24
---

JSX, in fact, duplicates HTML. But not equal to HTML. Because HTML is compiled from JSX. JSX design has two main goals: be the same as HTML(as HTML-like as possible) for human eyes, and so that machines don't confuse it with HTML. Because, again, HTML is compiled from JSX.

JSX is design to be as HTML-like as possible. But there are differences. First of all, JSX is not HTML. At all!

JSX is a mix that includes all three components of a web page: HTML markup, styles and JavaScript.

When you edit JSX, you see the mix, when you **run** JSX, you split this mix temporarily (by files in memory), when you **build** JSX, you get a forever split mix (by files on disk).

Since you deals with JSX while editing, you must learn to distinguish between HTML-based web pages and JavaScript-based web pages.

There is no way to reverse engineer with web pages compiled from JSX.

With JSX you can draw a single point, with old HTML-style you can draw a single point if redraw whole screen.

In JSX you can dedicate element that will be draw one point, in HTML you dedicate element and put it in matrix.

JSX - split screen matrix on a pixels. If you want to draw a pixel, you draws this pixel. In HTML if you want to draw pixel, you must redraw whole matrix with one new pixel.
