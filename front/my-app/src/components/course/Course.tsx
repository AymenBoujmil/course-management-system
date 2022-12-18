import React from 'react';
import { ICourse2 } from '../../utilities/models/ICourse2';

const Course: React.FC<ICourse2> = ({ course }: ICourse2) => {
	return (
		<>
			<li className='list-group-item'>
				<h5 className='fw-bold'>{course.name}</h5>
				<p className='text-danger mb-2 fw-bold'>{course.startTime}H - {course.endTime}H</p>
                <p className='text-muted mb-2 fw-bold'>{course.category}</p>
				<p className='text-muted mb-0'>
					{course.description}
				</p>
			</li>
			
		</>
	);
};

export default Course;
