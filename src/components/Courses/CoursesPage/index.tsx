import React, {useState} from 'react';
import styles from './style.module.css';

const courses = [
  {
    title: 'Advanced React',
    description: 'Mastering React and its advanced features.',
    imageUrl: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    tags: ['react', 'javascript'],
    Url: '/courses/category/complete-intro-to-react',
  },
  {
    title: 'Responsive Design',
    description: 'Learn to create responsive web designs.',
    imageUrl: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg', // Replace with your own image URL
    tags: ['html', 'css', 'design'],
    Url: '/courses/category/complete-intro-to-react',
  },
  // Add more courses as needed
];

// CoursesPage component
const CoursesPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredCourses = selectedTag
    ? courses.filter((course) => course.tags.includes(selectedTag))
    : courses;

  return (
    <div>
      <div className={styles.tagsContainer}>
        <button
          onClick={() => setSelectedTag(null)}
          className={styles.tagButton}
        >
          All
        </button>        
        <button
          onClick={() => setSelectedTag('html')}
          className={styles.tagButton}
        >
          HTML
        </button>
        <button
          onClick={() => setSelectedTag('css')}
          className={styles.tagButton}
        >
          CSS
        </button>
        <button
          onClick={() => setSelectedTag('js')}
          className={styles.tagButton}
        >
          JavaScript
        </button>
        <button
          onClick={() => setSelectedTag('react')}
          className={styles.tagButton}
        >
          React
        </button>
        {/* Add more tags/buttons as needed */}
      </div>

      <section className="row">
        {filteredCourses.map((course, index) => (
          <article className="col col--6 margin-bottom--lg" key={index}>
            <a
              className="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
              href={course.Url}
            >
              <img
                className="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                src={course.imageUrl}
                alt={course.title}
              />
              <div className="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">
                <h2>{course.title}</h2>
                <p className="text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">
                  {course.description}
                </p>
              </div>
            </a>
          </article>
        ))}
      </section>
    </div>
  );
};

export default CoursesPage;
