---
id: javascript-courses
title: Getting Started With JavaScript
sidebar_label: Getting Started With JavaScript
sidebar_position: 1
date: 2022-05-08 16:10:21
tags: [react] 
---

```mdx-code-block
import Courses from '@site/src/components/Courses';
const courses = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9xfTyLoJMrRNBzVdVIrb9hKlv4r9kH6OtLQ1CtowsymwXDBvxiPu7hUTz3QHiYUy_v4&usqp=CAU',
    title: 'First Steps to Professional',
    description: 'Learn the basics and advance to professional JavaScript development.',
    url: '/courses/javascript/welcome-js',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQJER3O5mmjjw-zNRp2woHbyvbEiFt7iZU9VF6c405kk8cizIdbpz7xKuVSFFW4z6xk4&usqp=CAU',
    title: 'The Hard JavaScript',
    description: 'Learn the hardest parts of JavaScript and master them to become a better developer.',
    url: '/courses/javascript/welcome-js',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebiJOmib1W1IJEOx9TugRvXHcKEbbIxH5xQ&usqp=CAU',
    title: 'Vanilla JS',
    description: 'Learn how to build a web app without a framework and why you might not need one at all.',
    url: '/courses/javascript/welcome-js',
  },
  {
    image: 'https://t4.ftcdn.net/jpg/03/15/02/27/360_F_315022751_vg1XCkEIsspb0LIP8bCwUKVhINP69wOv.jpg',
    title: 'Deep JavaScript Foundations',
    description: 'Learn the core pillars of JavaScript to become a better developer.',
    url: '/courses/javascript/welcome-js',
  },
  {
    image: 'https://img-c.udemycdn.com/course/750x422/1043496_a4a9_2.jpg',
    title: 'The Recent Parts of JavaScript',
    description: 'Learn the latest features of JavaScript and how to use them in your projects.',
    url: '/courses/javascript/welcome-js',
  },
  {
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png',
    title: 'Asynchronous JavaScript',
    description: 'Learn the hardest parts of asynchronous JavaScript and master them to become a better developer.',
    url: '/courses/javascript/welcome-js',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRckUukm5nPhTOnXCZNKRc60ae7Vn3nLNX_fA&usqp=CAU',
    title: 'Functional-Light JavaScript',
    description: 'Learn the core pillars of functional programming to become a better developer.',
    url: '/courses/javascript/welcome-js',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlLS_3UHl6rJSNWnm5Te1pbVbKxkHox4hwT2WWAbAetG11iz7I3vojqesd0NBwNtltkw&usqp=CAU',
    title: 'Js for UI Development',
    description: 'Learn the hardest parts of UI development and master them to become a better developer.',
    url: '/courses/javascript/welcome-js',
  },
]
```



<Courses courses={courses} />