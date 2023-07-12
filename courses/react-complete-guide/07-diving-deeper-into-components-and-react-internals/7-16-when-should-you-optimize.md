---
id: 7-16-when-should-you-optimize
title: 7.16 When Should You Optimize
date: 2021-04-08 11:23:21
---

If this component part of a parent component that could change related to something that does not affect me at all, as it is the case here where the persons component is certainly not interested in changes related to the cockpit, well then you should implement your check here.

Otherwise, if you're pretty sure that in all or almost all cases where your parent updates, you will need to update too, then you should not add shouldComponentUpdate or React memo because you will just execute some extra logic that makes no sense and actually just slows down the application a tiny bit.
