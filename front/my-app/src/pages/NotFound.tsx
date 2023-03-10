import React from 'react';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const isLoggedIn = window.localStorage.getItem("isLoggedIn")
  const navigate = useNavigate()

	const handleClick = () => {
		navigate('/');
	};
	if(isLoggedIn !== "true") return <Navigate replace to="/signin"></Navigate>
	else
	return (
		<>
			<div className='d-flex align-items-center justify-content-center vh-100'>
				<div className='text-center'>
					<h1 className='display-1 fw-bold'>404</h1>
					<p className='fs-3'>
						{' '}
						<span className='text-danger'>Opps!</span> Page not found.
					</p>
					<p className='lead'>The page you're looking for doesn't exist.</p>
					<Button variant='danger' onClick={handleClick}>
						Go Home
					</Button>
				</div>
			</div>
		</>
	);
};

export default NotFound;
