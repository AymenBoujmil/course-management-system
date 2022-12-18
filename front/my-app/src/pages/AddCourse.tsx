import React,{useState} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { ICourse } from '../utilities/models/ICourse';

const AddCourse: React.FC = () => {
    const initialCourse = { name: '',
        description: '',
        category: '',
        subject: '',
        startTime: '8AM',
        endTime: '8AM',
        numberOfStudents: 0}
    const [course, setCourse] = useState<ICourse>(initialCourse)

	return (
		<>
			<Container>
				<h2 className='mt-4 course-title'>Add new Course</h2>
				<div className='container'>
					<p>Please fill this form to add a new course.</p>

					<Form>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='Please enter course name'
							/>
						</Form.Group>
						<Form.Group
							className='mb-3'
							controlId='exampleForm.ControlTextarea1'>
							<Form.Label>description</Form.Label>
							<Form.Control as='textarea' rows={3} />
						</Form.Group>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>Category</Form.Label>
							<Form.Select>
								<option>Maths</option>
								<option>Pysics</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>Subject</Form.Label>
							<Form.Control
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
										type='time'
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
