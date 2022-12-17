import React from 'react';
import '../../assets/styles/filter.css';
import { Form, InputGroup } from 'react-bootstrap';

const Filter = () => {
	return (
		<>
			<div className='filter'>
				<div className='category'>
					<h3>Category</h3>
					<div className='radio-css'>
						<div className='check1'>
							<input
								className='radio'
								type='radio'
								id='Physics'
								name='category'
								value='Physics'
							/>
							<label className='label-css label1' htmlFor='Physics'>
								Physics
							</label>
							<br />
						</div>
						<div className='check2'>
							<input
								className='radio'
								type='radio'
								id='Maths'
								name='category'
								value='Maths'
							/>
							<label className='label-css label2' htmlFor='Maths'>
								Maths
							</label>
							<br />
						</div>
						<div className='check3'>
							<input
								className='radio'
								type='radio'
								id='All'
								name='category'
								value='All'
							/>
							<label className='label-css label3' htmlFor='All'>
								All categories
							</label>
						</div>
					</div>
				</div>
				<div className='category'>
					<h3>Subject</h3>
					<InputGroup size='sm' className='mb-3'>
						<Form.Control
							className='mt-3'
							aria-label='Small'
							aria-describedby='inputGroup-sizing-sm'
						/>
					</InputGroup>
				</div>
				<div className='category'>
					<h3>Start time</h3>
				</div>
			</div>
		</>
	);
};

export default Filter;
