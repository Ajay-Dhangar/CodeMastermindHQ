---
id: lunr-search-plugin
title: Lunr Search Plugin
date: 2021-03-31 13:15:37
---

Offline Search for Docusaurus V2

## Installation

Since the plugin is in development, see the development page:

<a href='https://github.com/lelouch77/docusaurus-lunr-search' class='external'>GitHub.com: Docusaurus Lunr Search</a>

Below are some errors and how to fix them.

## `'forEach' of undefined`

> I don't try to search, I was only moving or hovering with the mouse over the field throws the error. — <a href='https://github.com/lelouch77/docusaurus-lunr-search/issues/33' class='external'>GitHub.com: #33</a>

```console title="Browser's Console"
Uncaught (in promise) TypeError: Cannot read property 'forEach' of undefined            lunr.js?2f21:575 
    at Function.lunr.Pipeline.load (lunr.js?2f21:575)
```

Since empty array & object are causing problems, insert the highlighted code below before `initAlgolia(searchDocs, searchIndex, DocSearch);`:

```jsx title="/src/theme/SearchBar/index.js" {4-6}
    ...

      ]).then(([searchDocs, searchIndex, { default: DocSearch }]) => {
        if(searchDocs.length === 0) {
          return;
        }
        initAlgolia(searchDocs, searchIndex, DocSearch);
      });
      initialized.current = true;

    ...
```

## `e.handleSearchBarToggle is not a function`

<a href='https://github.com/lelouch77/docusaurus-lunr-search/issues/42' class='external'>GitHub.com: #42</a>

> Console error each time I click the search bar

```console title="Browser's Console"
TypeError: e.handleSearchBarToggle is not a function
```

> I simply modified `src/theme/SearchBar/index.js` at line 69 with the following:

```jsx title="index.js"
props.handleSearchBarToggle && props.handleSearchBarToggle(!props.isSearchBarExpanded);
```

## `algolia.css URI malformed`

<a href='https://github.com/lelouch77/docusaurus-lunr-search/issues/45' class='external'>GitHub.com: #45</a>

When I run `npm run build`, I get an error like this:

```shell
algolia.css

URI malformed at decodeURI (<anonymous>)
```

I temporarily fixed this by replacing the `background-image` property in the last declaration block `.algolia-autocomplete .algolia-docsearch-footer--logo` in the `algolia.css` file with this line (see [Converting URI](#converting-uri-to-image-and-back-to-uri) below):

```css title="algolia.css" {4}
    ...

.algolia-autocomplete .algolia-docsearch-footer--logo {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAGCAYAAAClzULKAAAABHNCSVQICAgIfAhkiAAAACtJREFUSEtjZBgFAxYCjANm86jFDKOBP4CJYDTwRwN/AENgAK0eTfkDGPgAKC8ABxS+xFUAAAAASUVORK5CYII=');
    ...
```

While it works fine, but I wonder what the cause of the problem? And how to fix this error permanently?

## Converting URI to Image and Back to URI

Insert the `url`:

<a href='https://www.site24x7.com/tools/datauri-to-image.html' class='external'>www.site24x7.com: URI to Image</a>

```css
data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='95' height='6' viewBox='0 0 95 6'%3E%3Ctitle%3Escale mod%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='buttonbase'%3E%3Cg id='scale_mod' data-name='scale mod'%3E%3Cpath d='M95,6H0V5H95Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M94.953,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M86.4,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M77.853,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M69.3,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M60.753,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M52.2,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M43.653,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M35.1,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M26.553,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M18,5h-.9V3H18Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M9.452,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M.9,5H0V3H.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M89.11,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M80.56,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M72.01,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M63.46,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M54.91,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M46.36,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M37.81,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M29.26,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M20.71,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M12.16,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M3.61,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E
```

Save the image to your computer.

Insert the saved image:

<a href='https://www.site24x7.com/tools/image-to-datauri.html' class='external'>www.site24x7.com: Image To URI</a>

```css
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAGCAYAAAClzULKAAAABHNCSVQICAgIfAhkiAAAACtJREFUSEtjZBgFAxYCjANm86jFDKOBP4CJYDTwRwN/AENgAK0eTfkDGPgAKC8ABxS+xFUAAAAASUVORK5CYII=
```

Now replace the initial URI with this one.

## Another search plugins

<a href='https://github.com/easyops-cn/docusaurus-search-local' class='external'>GitHub.com: Docusaurus Search Local</a>

An offline/local search plugin for Docusaurus v2, which supports multiple languages, especially optimized for language of ZH.
