import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const ReactCourses = () => {
    return (
        <div className="course_container">
            <div className="course_row">
                <div className="course_card">
                    <div>
                        <img width="100%" src="https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg" alt="Card image cap" />
                        <div>
                            <p className="course_card_title">Complete Intro to React</p>
                            <p className="course_card_text">Learn React basics like JSX, Components, State, Props, and Hooks by building projects!</p>
                            <Link to="/courses/category/complete-intro-to-react">
                                <button color="primary" className='course_card_button'>Start Course</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="course_card">
                    <div>
                        <img width="100%" src="https://i.udemycdn.com/course/240x135/705264_caa9_7.jpg" alt="Card image cap" />
                        <div>
                            <p className="course_card_title">React Hooks</p>
                            <p className="course_card_text">Learn the new way of building React apps: hooks, which cover useState, useEffect, and useRef.</p>
                            <Link to="/courses/">
                                <button color="primary" className='course_card_button'>Start Course</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="course_card">
                    <div>
                        <img width="100%" src="https://i.udemycdn.com/course/240x135/705264_caa9_13.jpg" alt="Card image cap" />
                        <div>
                            <p className="course_card_title"> React Advance </p>
                            <p className="course_card_text">
                                Learn to build scalable React applications using the latest tools and techniques available in the React ecosystem!
                            </p>
                            <Link to="/courses/">
                                <button color="primary" className='course_card_button'>Start Course</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="course_card">
                    <div>
                        <img width="100%" src="https://i.udemycdn.com/course/240x135/705264_caa9_2.jpg" alt="Card image cap" />
                        <div>
                            <p className="course_card_title">React Mastery</p>
                            <p className="course_card_text">
                                Learn React from scratch with Redux and Firebase(database) to build web apps with Authentication and CRUD features.
                            </p>
                            <Link to="/courses/">
                                <button color="primary" className='course_card_button'>Start Course</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactCourses;


