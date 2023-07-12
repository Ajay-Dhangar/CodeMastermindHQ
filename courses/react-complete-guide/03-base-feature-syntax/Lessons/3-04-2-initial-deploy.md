---
id: 3-04-2-initial-deploy
title: 3.04.2 Initial Deploy
date: 2021-03-11 19:13:14
description: Initial deployment to GitHub pages
---

Read more: <a href='https://github.com/PaPa31/react-complete-guide/blob/master/README.md' class='external'>github.com</a>

## [GitHub Pages](https://pages.github.com/)

> Note: this feature is available with `react-scripts@0.2.0` and higher.

### Configure _package.json_

:::important

The step below is important!  
If you skip it, your app will not deploy correctly.

:::

Open your _package.json_ and add a _homepage_ field for your project:

```json
  "homepage": "https://myusername.github.io/my-app",
```

or for a GitHub user page:

```json
  "homepage": "https://myusername.github.io",
```

Create React App uses the _homepage_ field to determine the root URL in the built HTML file.

### Install _gh-pages_

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at `https://myusername.github.io/my-app`, run:

```bash npm2yarn
npm install --save gh-pages
```

### Add _deploy_ scripts

Add the following scripts in your `package.json`:

```json {2-3} title="package.json"
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```

The _predeploy_ script will run automatically before _deploy_ is run.

If you are deploying to a GitHub user page instead of a project page you'll need to make two additional modifications:

1. First, change your repository's source branch to be any branch other than **master**.
2. Additionally, tweak your _package.json_ scripts to push deployments to **master**:

```diff
  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
```

### Deploy the site

Run:

```sh
npm run deploy
```

### Ensure your project’s settings

Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:

<img src="http://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting"/>

### Optionally, configure the domain

You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

### Notes on client-side routing

GitHub Pages doesn’t support routers that use the HTML5 `pushState` history API under the hood (for example, React Router using `browserHistory`). This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:

- You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to `hashHistory` for this effect, but the URL will be longer and more verbose (for example, `http://user.github.io/todomvc/#/todos/42?_k=yknaj`). [Read more](https://reacttraining.com/react-router/web/api/Router) about different history implementations in React Router.
- Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide](https://github.com/rafrex/spa-github-pages).

## Troubleshooting

### "/dev/tty: No such a device or address"

If, when deploying, you get `/dev/tty: No such a device or address` or a similar error, try the following:

1. Create a new [Personal Access Token](https://github.com/settings/tokens)
2. `git remote set-url origin https://<user>:<token>@github.com/<user>/<repo>` .
3. Try `npm run deploy` again
