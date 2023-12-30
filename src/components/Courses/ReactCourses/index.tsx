import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap';
import styles from './styles.module.css';


const ReactCourses = () => {
    return (
        <div className={clsx('container', styles.course_container)}>
            <div className={clsx('row', styles.course_row)}>
                <div className={clsx("col-md-3 col-sm-6", styles.course_card)}>
                    <Card>
                        <CardImg top width="100%" src="https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle className={clsx(styles.course_card_title)}>Complete Intro to React</CardTitle>
                            <CardText className={clsx(styles.course_card_text)}>Learn React basics like JSX, Components, State, Props, and Hooks by building projects!</CardText>
                            <Link to="/courses/category/complete-intro-to-react">
                                <Button color="primary">Start Course</Button>
                            </Link>
                        </CardBody>
                    </Card>
                </div>
                <div className={clsx("col-md-3 col-sm-6", styles.course_card)}>
                    <Card>
                        <CardImg top width="100%" src="https://i.udemycdn.com/course/240x135/705264_caa9_7.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle className={clsx(styles.course_card_title)}>React Hooks</CardTitle>
                            <CardText className={clsx(styles.course_card_text)}>Learn the new way of building React apps: hooks, which cover useState, useEffect, and useRef.</CardText>
                            <Link to="/courses/">
                                <Button color="primary">Start Course</Button>
                            </Link>
                        </CardBody>
                    </Card>
                </div>
                <div className={clsx("col-md-3 col-sm-6", styles.course_card)}>
                    <Card>
                        <CardImg top width="100%" src="https://i.udemycdn.com/course/240x135/705264_caa9_13.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle className={clsx(styles.course_card_title)}>React Native</CardTitle>
                            <CardText className={clsx(styles.course_card_text)}>Learn how to build mobile apps with react native using react-navigation, firebase, and redux!</CardText>
                            <Link to="/courses/">
                                <Button color="primary">Start Course</Button>
                            </Link>
                        </CardBody>
                    </Card>
                </div>
                <div className={clsx("col-md-3 col-sm-6", styles.course_card)}>
                    <Card>
                        <CardImg top width="100%" src="https://i.udemycdn.com/course/240x135/705264_caa9_2.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle className={clsx(styles.course_card_title)}>React Native</CardTitle>
                            <CardText className={clsx(styles.course_card_text)}>Learn how to build mobile apps with react native using react-navigation, firebase, and redux!</CardText>
                            <Link to="/courses/">
                                <Button color="primary">Start Course</Button>
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ReactCourses;


