import React from 'react';
import { Container } from 'react-bootstrap';

const AddCourse: React.FC = () => {
	return (
		<>
			<Container>
            <h2 className='mt-4 course-title'>Add new Course</h2>
				<div className='container'>
					<p>
						Please fill this form to add a new course.
					</p>
				</div>
            </Container>
		</>
	);
};

export default AddCourse;
