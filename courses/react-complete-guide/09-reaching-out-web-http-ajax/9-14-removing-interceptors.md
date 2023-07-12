---
id: 9-14-removing-interceptors
title: 9.14 Removing Interceptors
date: 2021-04-12 14:21:56
---

You learned how to add an `interceptor`, getting rid of one is also easy. Simply store the reference to the interceptor in a variable and call `eject`  with that reference as an argument, to remove it (Read more: <a href='https://github.com/axios/axios#interceptors' class='external'>github.com: Interceptors</a>):

```jsx
let myInterceptor = axios.interceptors.request.use(() => {
    /*...*/
});
axios.interceptors.request.eject(myInterceptor);
```
