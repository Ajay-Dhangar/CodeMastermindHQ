---
id: 7-18-how-react-update-dom
title: 7.18 How React Update DOM
date: 2021-04-08 12:12:12
---

[How React Update the DOM PDF](pdf/how-react-update-dom.pdf)

1. `render()` is called  
   to functional and class-based comps  
   doesn't immediately update the "real" DOM

   1. `shouldComponentUpdate()` passed!

2. Compares `Virtual DOMs`:

| Old Virtual DOM | Re-rendered Virtual DOM |
-|-
|  `<div></div>`  |    `<div>...</div>`     |

Faster than "real" DOM

3. Differences?  
   Differences found => Update "real" DOM (not re-render)
   No Differences? => Don't touch the "real" DOM!
