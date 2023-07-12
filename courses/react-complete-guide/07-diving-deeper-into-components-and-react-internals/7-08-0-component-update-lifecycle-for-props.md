---
id: 7-08-0-component-update-lifecycle-for-props
title: 7.08.0 Component Update Lifecycle For Props
date: 2021-04-06 16:56:03
---

## Component Lifecycle

### 2. Component Updating

[Lifecycle Update External Learning Card PDF](pdf/8-lifecycle-update-external-learning-card.pdf)

1. `getDerivedStateFromProps(props, state)`  
   update your state based on outside changes  
   rarely used
   **DO:** Sync to Props
   **DON'T:** Cause Side-Effects

2. `shouldComponentUpdate(nextProps, nextState)`  
   May cancel updating process!  
   Carefully!  
   **DO:** Decide whether to Continue or Not  
   **DON'T:** Cause Side-Effects

3. `render()`  
   Prepare & Structure your JSX Code

4. `Update Child Component Props`

5. `getSnapshotBeforeUpdate(prevProps, prevState)`  
   rarely used  
   **DO:** Last-minute DOM operations
   **DON'T:** Cause Side-Effects

6. `componentDidUpdate`  
   update done!  
   **DO:** Cause Side-Effects
   **DON'T:** Update State (triggers re-render)
