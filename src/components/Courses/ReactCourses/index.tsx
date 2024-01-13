import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const courses = [
  {
    title: 'Complete Intro to React',
    image: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    description: 'In the course, you will learn complete React fundamentals, including JSX, the React Router, Hooks, and many more.',
    link: '/courses/category/complete-intro-to-react',
  },
  {
    title: 'Intermediate React',
    image: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    description: 'In the course, you will learn advanced patterns for architecting modern React applications.',
    link: '/courses/react/welcome-react',
  },
  {
    title: 'React Performance',
    image: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    description: 'In the course, you will learn how to make your React applications fast.',
    link: '/courses/react/welcome-react',
  },
  {
    title: 'React and TypeScript',
    image: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    description: 'In the course, you will learn how to use TypeScript to supercharge your React applications.',
    link: '/courses/react/welcome-react',
  },
  {
    title: 'Introduction to Next.js',
    image: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    description: 'In the course, you will learn how to build production-ready React applications with Next.js.',
    link: '/courses/react/welcome-react',
  },
  {
    title: 'Enterprise UI Development',
    image: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    description: 'In the course, you will learn how to build a UI component with Testing & Code Quality in mind.',
    link: '/courses/react/welcome-react',
  },
  // Add more courses as needed
];

const ReactCourses = () => {
  return (
    <div className="course_container">
      <div className="course_grid">
        {courses.map((course, index) => (
          <div key={index} className="course_card">
            <img src={course.image} alt={course.title} />
            <div className="course_info">
              <p className="course_card_title">{course.title}</p>
              <p className="course_card_text">{course.description}</p>
              <Link to={course.link}>
                <button color="primary" className='course_card_button'>Start Course</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactCourses;
