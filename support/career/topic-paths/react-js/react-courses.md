---
id: react-courses
title: Getting Started With React
sidebar_label: Getting Started With React
sidebar_position: 1
date: 2022-05-08 16:10:21
tags: [react] 
---

```mdx-code-block
import Courses from '@site/src/components/Courses';
const courses = [
  {
    title: 'Complete Intro to React',
    image: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    description:
      'In the course, you will learn complete React fundamentals, including JSX, the React Router, Hooks, and many more.',
    url: '/courses/category/complete-intro-to-react',
  },
  {
    title: 'Intermediate React',
    image: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    description:
      'In the course, you will learn advanced patterns for architecting modern React applications.',
    url: '/courses/react/welcome-react',
  },
  {
    title: 'React Performance',
    image: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    description:
      'In the course, you will learn how to make your React applications fast.',
    url: '/courses/react/welcome-react',
  },
  {
    title: 'React and TypeScript',
    image: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    description:
      'In the course, you will learn how to use TypeScript to supercharge your React applications.',
    url: '/courses/react/welcome-react',
  },
  {
    title: 'Introduction to Next.js',
    image: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    description:
      'In the course, you will learn how to build production-ready React applications with Next.js.',
      url: '/courses/react/welcome-react',
  },
  {
    title: 'Enterprise UI Development',
    image: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    description:
      'In the course, you will learn how to build a UI component with Testing & Code Quality in mind.',
    url: '/courses/react/welcome-react',
  },
];
```

<Courses courses={courses} />