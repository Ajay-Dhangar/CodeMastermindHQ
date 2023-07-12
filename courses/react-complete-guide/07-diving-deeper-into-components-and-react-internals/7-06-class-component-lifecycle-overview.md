---
id: 7-06-class-component-lifecycle-overview
title: 7.06 Class Component Lifecycle Overview
date: 2021-04-06 19:41:34
---

`Lifecycle` only available in class-based components.

And functional components when using React hooks have an equivalent.

## Component Lyfecycle

### 1. Component Creation

[Lifecycle Creation Learning Card PDF](pdf/7-lifecycle-creation-learning-card.pdf)

`Lificycle hooks` & `Lifecycle goes`

:::caution
Not to be confused with `React Hooks`!
:::

1. `constructor(props) executes` (default ES6 feature)  
    **DO**: Set up State  
    **DON'T**: Cause Side-Effects

2. `getDerivedStateFromProps(props, state)` (default lifecycle hook > React 16.3)  
   static method  
   **DO:** Sync State  
   **DON'T:** Cause Side-Effects

3. `render()`  
   Returns JSX.  
   **DO:** Prepare & Structure your JSX code  
   **DON'T:** No timeouts and Side-Effects

4. `Render Child Components`

5. `componentDidMount()` (very important **Lifecycle hook**)  
   class-based comps  
   **DO:** Cause Side-Effects  
   **DON'T:** Update State (triggers re-render)
