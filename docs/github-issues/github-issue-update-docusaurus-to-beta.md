---
id: github-issue-update-docusaurus-to-beta
title: Github Issue Update Docusaurus to beta
date: 2021-09-09 23:14:44
---

:::caution

My error is gone! See: [Update Docusaurus to beta](../site-generators/docusaurus/update-docusaurus)

:::

<!--

  ! PLEASE HELP US HELP YOU !

  Make it obvious to understand and reproduce this bug.
  Ideally, we should be able to understand it without running any code.

  Bugs are fixed faster if you include:
  - a repro repository to inspect the code
  - an url to see the problem live (if possible)

  Pro tip: create a reproducible demo of the bug with https://new.docusaurus.io

-->

## 🐛 Bug Report

### Prerequisites


- [x] I'm using the latest version of Docusaurus.
- [x] I have tried the `npm run clear` or `yarn clear` command.
- [x] I have tried `rm -rf node_modules yarn.lock package-lock.json` and re-installing packages.
- [x] I have tried creating a repro with https://new.docusaurus.io
- [x] I have read the console error message carefully (if applicable)

### Description

I have a working `2.0.0-alpha.72` Docusaurus version. I tried to update Docusaurus to `2.0.0-beta.6` version, but I got the error:

```bash
Invalid sidebar file at "sidebars.auto.js".
```

I have these dependencies in `package.json`:

```bash
 "dependencies": {
    "@docusaurus/core": "^2.0.0-beta.6",
    "@docusaurus/preset-classic": "^2.0.0-beta.6",
    "@docusaurus/remark-plugin-npm2yarn": "^2.0.0-beta.6",
    "@docusaurus/theme-live-codeblock": "^2.0.0-beta.6",
    "@mdx-js/react": "^1.6.21",
    "clsx": "^1.1.1",
    "docusaurus-lunr-search": "^2.1.10",
    "docusaurus-plugin-auto-sidebars": "^1.0.7",
    "react": "^16.8.4",
    "react-dom": "^16.8.4"
  },
```

and I understand that this dependency: `"docusaurus-plugin-auto-sidebars": "^1.0.7"` is probably causing this error. But I can't stop using this plugin. My site is big. And I want that it will more and more. And

### Have you read the [Contributing Guidelines on issues](https://github.com/facebook/docusaurus/blob/main/CONTRIBUTING.md#reporting-new-issues)?

Yes

## Steps to reproduce

Use https://new.docusaurus.io to create a CodeSandbox reproducible demo of the bug.

**I get an error**: Only a max of 500 modules is allowed in a sandbox

My Docusaurus site is big. I counted 513 articles.

If you want to reproduce my situation, you can just fork my [repo](https://github.com/Ajay-Dhangar/CodeMastermindHQ) (github.com/Ajay-Dhangar/CodeMastermindHQ), open package.json, change 4 lines (from `2.0.0-alpha.72` to `2.0.0-beta.6`) and run `npm ci` (analogous `rm -rf node_modules package-lock.json` and `npm install`, but in only one command). And run: `npm start`.

## Expected behavior

I don't know.

## Actual behavior

1. Remove trash ...

```bash
/mnt/sdc2/Ajay-Dhangar/CodeMastermindHQ ⑂documentation* $ rm -rf node_modules/ package-lock.json
```

2. Install dependencies ...

```bash
/mnt/sdc2/Ajay-Dhangar/CodeMastermindHQ ⑂documentation* $ npm i
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated mkdirp@0.3.0: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.

added 1459 packages, and audited 1460 packages in 1m

210 packages are looking for funding
  run `npm fund` for details

24 vulnerabilities (20 moderate, 4 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
```

3. Start dev server...

```bash
/mnt/sdc2/Ajay-Dhangar/CodeMastermindHQ ⑂documentation* $ npm run start

> notes@0.0.0 start
> cross-env BASE_URL='/cmhq/' docusaurus start

Starting the development server...
Loading of version failed for version "current"
Error: Invalid sidebar file at "sidebars.auto.js".
These sidebar document ids do not exist:
- courses/react-complete-guide/10-burger-builder-project-accessing-server/10-0-lesson
...
...
...

Available document ids are:
- api/love-project/love-project
...
...
...

    at Object.checkSidebarsDocIds (/mnt/sdc2/Ajay-Dhangar/CodeMastermindHQ/node_modules/@docusaurus/plugin-content-docs/lib/sidebars.js:339:19)
    at doLoadVersion (/mnt/sdc2/Ajay-Dhangar/CodeMastermindHQ/node_modules/@docusaurus/plugin-content-docs/lib/index.js:117:31)
    at async loadVersion (/mnt/sdc2/Ajay-Dhangar/CodeMastermindHQ/node_modules/@docusaurus/plugin-content-docs/lib/index.js:166:28)
    at async Promise.all (index 0)
    at async Object.loadContent (/mnt/sdc2/Ajay-Dhangar/CodeMastermindHQ/node_modules/@docusaurus/plugin-content-docs/lib/index.js:174:33)
    at async /mnt/sdc2/Ajay-Dhangar/CodeMastermindHQ/node_modules/@docusaurus/core/lib/server/plugins/index.js:58:46
    at async Promise.all (index 0)
    at async Object.loadPlugins (/mnt/sdc2/Ajay-Dhangar/CodeMastermindHQ/node_modules/@docusaurus/core/lib/server/plugins/index.js:57:27)
    at async Object.load (/mnt/sdc2/Ajay-Dhangar/CodeMastermindHQ/node_modules/@docusaurus/core/lib/server/index.js:186:82)
    at async start (/mnt/sdc2/Ajay-Dhangar/CodeMastermindHQ/node_modules/@docusaurus/core/lib/commands/start.js:44:19)

```

## Your environment

<!-- Include as many relevant details about the environment you experienced the bug in -->

- Public source code: https://github.com/Ajay-Dhangar/CodeMastermindHQ
- Public site URL: https://codemastermindhq.vercel.app/
- Docusaurus version used: 2.0.0-alpha.72
- Environment name and version (e.g. Chrome 78.0.3904.108, Node.js 10.17.0): node v12.19.0
- Operating system and version (e.g. Ubuntu 20.04.2 LTS): MX Linux

## Reproducible demo

Use https://new.docusaurus.io to create a CodeSandbox reproducible demo of the bug.

**I get an error**: Only a max of 500 modules is allowed in a sandbox

