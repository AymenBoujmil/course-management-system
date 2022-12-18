import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { ICourse } from '../../utilities/models/ICourse';
import { useNavigate } from 'react-router-dom';
import api from '../../api/courses';
import { v4 as uuidv4 } from 'uuid';


interface ISetCourses {
	changeCourses: (Course: ICourse) => void;
}

const AddCourse: React.FC<ISetCourses> = ({ changeCourses }: ISetCourses) => {
	const isLoggedIn = window.localStorage.getItem('isLoggedIn');
	const roleUser = window.localStorage.getItem('role');
	const navigate = useNavigate();
	useEffect(() => {
		if (isLoggedIn !== 'true') {
			navigate('/signin');
		}
		if (roleUser !== 'teacher') {
			navigate('/courses');
		}
	}, []);
	const initialCourse = {
		name: '',
		description: '',
		category: 'Maths',
		subject: '',
		startTime: 8,
		endTime: 8,
		numberOfStudents: 0,
	};
	const [course, setCourse] = useState<ICourse>(initialCourse);
	const handleChange = (e: any) => {
		const { name, value } = e.target;
		if (name === 'endTime' || name === 'startTime') {
			const valueStartEnd = parseInt(value[0] + value[1]);
			setCourse({ ...course, [name]: valueStartEnd });
		} else if (name === 'numberOfStudents') {
			const valueNbOfStudents = parseInt(value);
			setCourse({ ...course, [name]: valueNbOfStudents });
		} else {
			setCourse({ ...course, [name]: value });
		}
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		const request = {
			id: uuidv4(),
			...course,
		};
		const response = await api.post('/courses', request);
		changeCourses(response.data);
		navigate('/courses');
	};

	return (
		<>
			<Container>
				<h2 className='mt-4 course-title'>Add new Course</h2>
				<div className='container'>
					<p>Please fill this form to add a new course.</p>

					<Form onSubmit={handleSubmit}>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								value={course.name}
								onChange={handleChange}
								type='text'
								name='name'
								required
								placeholder='Please enter course name'
							/>
						</Form.Group>
						<Form.Group
							className='mb-3'
							controlId='exampleForm.ControlTextarea1'>
							<Form.Label>description</Form.Label>
							<Form.Control
								value={course.description}
								onChange={handleChange}
								name='description'
								as='textarea'
								rows={3}
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>Category</Form.Label>
							<Form.Select name='category' onChange={handleChange}>
								<option>Maths</option>
								<option>Physics</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>Subject</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={course.subject}
								name='subject'
								required
								type='text'
								placeholder='Please enter course subject'
							/>
						</Form.Group>
						<Row>
							<Col md={6}>
								{' '}
								<Form.Group
									className='mb-3'
									controlId='exampleForm.ControlInput1'>
									<Form.Label>Start time</Form.Label>
									<Form.Control
										required
										onChange={handleChange}
										name='startTime'
										type='time'
										className='text-center'
										aria-label='Small'
										aria-describedby='inputGroup-sizing-sm'
									/>
								</Form.Group>
							</Col>
							<Col md={6}>
								{' '}
								<Form.Group
									className='mb-3'
									controlId='exampleForm.ControlInput1'>
									<Form.Label>End time</Form.Label>
									<Form.Control
										required
										onChange={handleChange}
										type='time'
										name='endTime'
										className=' text-center'
										aria-label='Small'
										aria-describedby='inputGroup-sizing-sm'
									/>
								</Form.Group>
							</Col>
						</Row>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>Number Of students</Form.Label>
							<Form.Control
								value={course.numberOfStudents}
								required
								onChange={handleChange}
								name='numberOfStudents'
								type='number'
								placeholder='Please enter number of students'
							/>
						</Form.Group>
						<div className='d-grid'>
							<Button className='mb-3' variant='danger' type='submit'>
								Submit
							</Button>
						</div>
					</Form>
				</div>
			</Container>
		</>
	);
};

export default AddCourse;
