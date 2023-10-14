---
id: welcome-node
title: Welcome to Node
sidebar_position: 1
sidebar_label: Welcome To Node
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

- Node.js is an open source server environment.

- Node.js allows you to run JavaScript on the server.

[Start Learning Node.Js Now](./node-intro)

**Learning by Examples**

Our "Show Node.js" tool makes it easy to learn Node.js, it shows both the code and the result.

```js title='index.js'
let http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
```

<BrowserWindow url="http://localhost:8080">
    <p> Hello World! </p>
</BrowserWindow>