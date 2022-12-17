import React from 'react';
import { ICourses } from '../utilities/models/ICourses';
import { Row, Col, Container } from 'react-bootstrap';
import '../assets/styles/courseList.css';
import Filter from '../components/filter/Filter';
import Course from '../components/course/Course';
import { ICourse } from '../utilities/models/ICourse';
const CourseList: React.FC<ICourses> = ({ courses }: ICourses) => {
	return (
		<>
			<Container>
				<h2 className='mt-4 course-title'>Our Courses</h2>
				<div className='container'>
					<p>
						A good online course is engaging and challenging. It invites
						students to participate, motivates them to contribute and captures
						their interest and attention. It capitalizes on the joy of learning
						and challenges students to enhance their skills, abilities and
						knowledge.
					</p>
				</div>
				<Row>
					<Col md='3'>
						<Filter />
					</Col>
					<Col md='9'>
						<ul className='list-group list-group-light mb-3'>
                        {courses.map((course: ICourse) => (
							<Course course={course} />
						))}
						</ul>
						
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CourseList;
