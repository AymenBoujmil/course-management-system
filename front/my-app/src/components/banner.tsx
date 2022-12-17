import React, { FC } from 'react';
import banner from '../assets/images/university_banner.jpg';
import '../assets/styles/banner.css';
import { Button, Col, Row } from 'react-bootstrap';

export const Banner: FC = () => {
	return (
		<div id='home'>
			<section
				className='banner-wrap banner-wrap-2'
				style={{
					backgroundImage: `url(${banner})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}>
				<div className='container'>
					<div className='row m-50  slider-text align-items-center justify-content-center'>
						<div className='col-md-9  text-center'>
							<h1 className='mb-2 bread'>Our University</h1>
							<p className='breadcrumbs'>
								A university is an institution of higher education, usually
								comprising a college of liberal arts and sciences and graduate
								and professional schools and having the authority to confer
								degrees in various fields of study.
							</p>
						</div>
						<Row>
							<Col className='p-4 mt-4 d-flex justify-content-center text-center' md='6'>
								{' '}
								<Button  variant='danger' size="lg">See Our Courses</Button>{' '}
							</Col>
							<Col className='p-4 mt-4 d-flex justify-content-center text-center' md='6'>
								{' '}
								<Button  variant='danger' size="lg">See Our Teachers</Button>{' '}
							</Col>
						</Row>
					</div>
				</div>
			</section>
		</div>
	);
};
