import React, { useState, FC } from 'react';
import '../../assets/styles/filter.css';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { IFilter } from '../../utilities/models/IFilter';

interface IFilterFunc {
	handleFilter: (filter: IFilter) => void;
}

const Filter: FC<IFilterFunc> = ({ handleFilter }: IFilterFunc) => {
	const [category, setCategory] = useState<string>('All');
	const [name, setName] = useState<string>('');
	const [time, setTime] = useState<number>(8);

	//here we change the value of category if the user checks a category in the filter
	const handleCategory = (e: any) => {
		setCategory(e.target.value);
	};

	//here we changes the value of name if the user has entered a name in the input
	const handleSubject = (e: any) => {
		setName(e.target.value);
	};

	// here we changes the value of time if the user has chosen a time and we only took the hours part
	const handleTime = (e: any) => {
		setTime(parseInt(e.target.value[0] + e.target.value[1]));
	};

	// if the user sumbitted the filter we will send it to courses list where we will show the filtred list of courses 
	
	const handleSubmit = () => {
		const filter: IFilter = {
			category: category,
			name: name,
			time: time,
		};
		filter.category = category;
		filter.name = name;
		filter.time = time;
		handleFilter(filter);
	};

	return (
		<>
			<div className='filter'>
				<div className='category'>
					<h3>Category</h3>
					<div className='radio-css' onChange={handleCategory}>
						<div className='check1'>
							<input
								className='radio'
								type='radio'
								id='All'
								name='category'
								value='All'
							/>
							<label className='label-css label1' htmlFor='All'>
								All categories
							</label>
							<br />
						</div>
						<div className='check2'>
							<input
								className='radio'
								type='radio'
								id='Physics'
								name='category'
								value='Physics'
							/>
							<label className='label-css label2' htmlFor='Physics'>
								Physics
							</label>
							<br />
						</div>
						<div className='check3'>
							<input
								className='radio'
								type='radio'
								id='Maths'
								name='category'
								value='Maths'
							/>
							<label className='label-css label3' htmlFor='Maths'>
								Maths
							</label>
							<br />
						</div>
					</div>
				</div>
				<div className='category'>
					<h3>Name</h3>
					<InputGroup size='sm' className='mb-3'>
						<Form.Control
							onChange={handleSubject}
							className='mt-3'
							value={name}
							aria-label='Small'
							aria-describedby='inputGroup-sizing-sm'
						/>
					</InputGroup>
				</div>
				<div className='category'>
					<h3>Start time</h3>
					<InputGroup size='sm' className='mb-3'>
						<Form.Control
							onChange={handleTime}
							type='time'
							className='mt-3 text-center'
							aria-label='Small'
							aria-describedby='inputGroup-sizing-sm'
						/>
					</InputGroup>
				</div>
				<div className='text-center'>
					<Button
						className='float-center '
						variant='outline-danger'
						onClick={handleSubmit}>
						{' '}
						Filter{' '}
					</Button>
					
				</div>
			</div>
		</>
	);
};

export default Filter;
