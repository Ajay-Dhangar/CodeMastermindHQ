import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const ReactCourses = () => {
    return (
        <div className="course_container">
            <div className="course_row">
                <div className="course_card">
                    <div>
                        <img width="100%" src="https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg" alt="Complete Intro to React" />
                        <div>
                            <p className="course_card_title">Complete Intro to React</p>
                            <p className="course_card_text">Learn React basics like JSX, Components, State, Props, and Hooks by building projects!</p>
                            <Link to="/courses/category/complete-intro-to-react">
                                <button color="primary" className='course_card_button'>Start Course</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* other courses here */}

            </div>
        </div>
    )
}

export default ReactCourses;


