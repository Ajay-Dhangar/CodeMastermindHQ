---
id: 7-04-comparing-stateless-and-stateful-components
title: 7.04 Comparing Stateless And Stateful Components
date: 2021-04-09 12:03:43
---

Let me dive into that **stateless versus stateful** or **presentational versus container** component thing again.

## Stateful Comps

Now we're referring to **stateful** components when we're managing state in them, like we're doing in the *app.js*. We got state here, and we're calling `setState` to change that state.

Now a functional component that manages its own state with the `useState` would of course also be a stateful component, so stateful does not automatically mean class-based component.

Historically this has been the case, though. Because React hooks, like **useState**, are a really new feature. And therefore, you will still find plenty of applications, where `state` is only managed in class-based components.

Still since `React 16.8`, **stateful** is not automatically a class-based component. It is a component that manages state, he that with state in a class or with the useState hook.

## Stateless Comps

**Presentational**, also called **dumb** or **stateless** components historically have always been `functional components` because prior to React 16.8, these functional components could not manage state.

Since `React 16.8`, functional components can also manage state with the useState hook but still, you want to have many presentational components in your app. And now what is a presentational component?

It is a **functional component that does not manage state**. Even though you could with `useState`, it is still a good practice to restrict yourself to a couple of components that are involved in the state management.

And of course, a couple depends on how big your app is. In big apps that can easily be hundreds of components, but the majority of your components should be presentational, stateless components, so functional components that don't manage state.

Now the question of course is why and the answer is: by splitting your app into **container components**, which is another term for these components, that manage the state in your app and the dumb presentational components.

By making that split, you keep your app manageable because you have a predictable flow of data, you know where your state changes, that will be in a couple of components and the other components are only there to render a nice user interface.

And they only define on external inputs, on props and that simply ensures that these components are highly predictable, that you can throw them anywhere into your application, and they work if you pass the right inputs in.

And as your application grows, you therefore have an easier time maintaining it. So having a lot of dumb or presentational components is a good idea.

Now of course, you definitely should not restrict yourself to one component only that does state management though. The more you work with React, the more you'll get a feeling for which component now should manage some state, so that its child components get the right inputs and which components would better be just presentational components.

But again as a rule, certainly think before you start managing state in a component, maybe you can do it in another component and keep that component you're working on a presentational one.

So that is how you should think about stateful and stateless or container and dumb or presentational components.

So what's the difference now, when should you use which?
