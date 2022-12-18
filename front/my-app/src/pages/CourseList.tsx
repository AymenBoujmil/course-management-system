import React, { useState, useEffect } from 'react';
import { ICourses } from '../utilities/models/ICourses';
import { Row, Col, Container, Button } from 'react-bootstrap';
import '../assets/styles/courseList.css';
import Filter from '../components/filter/Filter';
import Course from '../components/course/Course';
import { ICourse } from '../utilities/models/ICourse';
import { IFilter } from '../utilities/models/IFilter';
import jsonwebtoken from 'jsonwebtoken';
const CourseList: React.FC<ICourses> = ({ courses }: ICourses) => {
	const initialFilter: IFilter = { category: 'All', subject: '', time: 8 };
	const [filter, setFilter] = useState<IFilter>(initialFilter);
	const handleFilter = (filter: IFilter) => {
		setFilter(filter);
	};
	useEffect(() => {
		console.log(filter);
	}, [filter]);

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
						<Filter handleFilter={(filter) => handleFilter(filter)} />
					</Col>
					<Col md='9'>
						<ul className='list-group list-group-light mb-3'>
							{courses.map((course: ICourse) => (
								<Course course={course} />
							))}
						</ul>
						<Button className='float-end' variant='danger'>
							Add Course
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CourseList;
