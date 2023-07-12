---
id: do-i-commit-package-lock-json
title: Do I commit package-lock.json
date: 2021-03-22 21:57:48
---

> <a href='https://stackoverflow.com/questions/44206782/do-i-commit-the-package-lock-json-file-created-by-npm-5' class='external'>Do I commit the `package-lock.json` file created by npm 5?</a>
>
> Yes, you SHOULD:
>
> 1. **commit the `package-lock.json`**.
> 2. **use `npm ci` instead of `npm install`** when building your applications both on your CI and your local development machine
>
> The `npm ci` workflow *requires* the existence of a `package-lock.json`.

> <a href='https://blog.logrocket.com/why-you-should-use-package-lock-json/#:~:text=Make%20sure%20to%20always%20commit,the%20exact%20same%20dependency%20tree.' class='external'>blog.logrocket.com: Why you should use package-lock.json</a>
>
> Make sure you don’t change `package-lock.json` directly. That’s being handled automatically by NPM. It reflects changes made to `package.json` to `package-lock.json` and keeps it up to date.
>
> However, this only happens if you use NPMs’ CLI to make changes. If you manually change `package.json`, don’t expect `package-lock.json` to update. Always use the CLI commands, like install, uninstall, etc.

> <a href='https://stackoverflow.com/questions/52499617/what-is-the-difference-between-npm-install-and-npm-ci' class='external'>stackoverflow.com: What is the difference between “npm install” and “npm ci”?</a>
>
> Use npm install to add new dependencies, and to update dependencies on a project. Usually, you would use it during development after pulling changes that update the list of dependencies but it may be a good idea to use npm ci in this case.
>
> Use npm ci if you need a deterministic, repeatable build. For example during continuous integration, automated jobs, etc. and when installing dependencies for the first time, instead of npm install.

## Conclusion

Don’t use `npm install` without arguments to fetch dependencies — use `npm ci` for that. You can use the `npm install` to install specific dependencies.

Use `npm ci` everywhere when you only want the local dependencies tree — even on your local development environment.
