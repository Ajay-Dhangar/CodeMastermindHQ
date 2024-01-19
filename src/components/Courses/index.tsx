import React from 'react';
import './styles.css';
import {Link} from '@mui/material';

interface Course {
  image: string;
  title: string;
  description: string;
  url: string;
}

interface CoursesProps {
  courses: Course[];
}

const Courses: React.FC<CoursesProps> = ({courses}) => {
  return (
    <div className="courses-container">
      {courses.map((course, index) => (
        <div key={index} className="course-card">
          <img src={course.image} alt={course.title} className="course-image" />
          <h2 className="course-title">{course.title}</h2>
          <p className="course-description">{course.description}</p>
          <Link href={course.url} className="course-link">
            <button className="enroll-button">Start Course ➔</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
