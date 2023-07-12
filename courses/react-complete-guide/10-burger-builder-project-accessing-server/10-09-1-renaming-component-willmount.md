---
id: 10-09-1-renaming-component-willmount
title: 10.09.1 Renaming Component Willmount
date: 2021-04-14 13:27:19
---

Run:

```bash
npx react-codemod rename-unsafe-lifecycles
```

And all the components with name `componentWillMount` will be renamed to `UNSAFE_componentWillMount`.
