import React, { useState, useEffect } from 'react';
import { ICourses } from '../../utilities/models/ICourses';
import { Row, Col, Container, Button } from 'react-bootstrap';
import '../../assets/styles/courseList.css';
import Filter from '../../components/filter/Filter';
import Course from '../../components/course/Course';
import { ICourse } from '../../utilities/models/ICourse';
import { IFilter } from '../../utilities/models/IFilter';

import { Navigate, useNavigate } from 'react-router-dom';

const CourseList: React.FC<ICourses> = ({ courses }: ICourses) => {
	const [filtred, setFiltred] = useState(courses);
	const navigate = useNavigate();

	const isLoggedIn = window.localStorage.getItem('isLoggedIn');
	const roleUser = window.localStorage.getItem('role');
	
	const initialFilter: IFilter = { category: 'All', name: '', time: 8 };
	const [filter, setFilter] = useState<IFilter>(initialFilter);
	
	
	const handleFilter = (filter: IFilter) => {
		setFilter(filter);
	};

	// here we change the value of filtred courses if the there is a change in the courses table
	useEffect(() => {
		setFiltred(courses);
		console.log(courses)
	}, [courses]);

	// here we check the value of the filter entered so if the user selected all categories then we will apply the filter on the name and/or the time
	// else we will do a filter also in category and/or (time,name)

	useEffect(() => {
		
		if (filter.category === "All" ){
			setFiltred(
				courses
					.filter((course) => {
						return course.name.includes(filter.name);
					})
					.filter((course) => {
						return filter.time < course.startTime;
					})
			);		}
		else if (filter.category !== 'All') {
			setFiltred(
				courses
					.filter((course) => {
						return course.category.localeCompare(filter.category) === 0;
					})
					.filter((course) => {
						return course.name.includes(filter.name);
					})
					.filter((course) => {
						return filter.time < course.startTime;
					})
			);
		} 
		
	}, [filter]);
	 
	//here we see if the there is a user connected if not we send him to the login page 

	if (isLoggedIn !== 'true') return <Navigate replace to="/sigin" />
	else
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
							{filtred.map((course: ICourse) => (
								<Course course={course} />
							))}
						</ul>
						{roleUser === 'teacher' ? (
							<Button
								onClick={() => {
									navigate('/newcourse');
								}}
								className='float-end'
								variant='danger'>
								Add Course
							</Button>
						) : null}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CourseList;
