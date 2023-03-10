import React, { FC, useState } from 'react';
import {
	Col,
	Button,
	Row,
	Container,
	Card,
	Form,
	Alert,
} from 'react-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom';
import { IUsers } from '../utilities/models/IUsers';
import image from '../assets/images/img1.webp';

const Login: FC<IUsers> = ({ users }: IUsers) => {
	
	const isLoggedIn = window.localStorage.getItem('isLoggedIn');
	const navigate = useNavigate();

	const [error, setError] = useState(false);
	const [email, setEmail] = useState<string>('');
	const [pwd, setPwd] = useState<string>('');
	
	// so here after the user send his data we check if the user exist in the db
	// if he exists we verify if the given password is the right password
	// we give him access to the application and we store his data in the local storage

	function handleSubmit(event: any) {
		event.preventDefault();
		const exist = users.filter((user) => {
			return user.email.localeCompare(email) === 0;
		});
		if (exist.length > 0) {
			if (exist[0].password === pwd) {
				window.localStorage.setItem('user', JSON.stringify(exist[0]));
				window.localStorage.setItem('role', exist[0].role);
				window.localStorage.setItem('isLoggedIn', 'true');
				navigate('/');
			}
		} else {
			setError(true);
		}
	}
	

	// this functions are for changing the value of email, pwd
	const changeEmail = (event: any) => {
		setEmail(event.target.value);
	};
	const changePwd = (event: any) => {
		setPwd(event.target.value);
	};

	const handleSignup = (e: any) => {
		e.preventDefault();
		navigate('/signup');
	};
	  //here we see if the there is a user connected if not we send him to the login page 

	if(isLoggedIn==="true") return <Navigate replace to="/"/>
	else
	return (
		<Container>
			{error ? (
				<Alert key='danger' variant='danger'>
					Please Verify your data
				</Alert>
			) : null}
			<Row className='vh-100 d-flex justify-content-center align-items-center'>
				<Col md={10} lg={8} xs={12}>
					{/* <div className="border border-3 border-primary"></div> */}
					<Card className='shadow'>
						<Card.Body>
							<Row>
								<Col md={6} xs={12}>
									<div className='mb-3 mt-md-4'>
										<h2 className='fw-bold mb-2 text-uppercase '>Sign In</h2>
										<p className=' mb-5'>
											Please enter your login and password!
										</p>
										<div className='mb-3'>
											<Form onSubmit={(e) => handleSubmit(e)}>
												<Form.Group className='mb-3' controlId='formBasicEmail'>
													<Form.Label className='text-center'>
														Email address
													</Form.Label>
													<Form.Control
														type='email'
														value={email}
														onChange={changeEmail}
														placeholder='Enter email'
														required
													/>
												</Form.Group>

												<Form.Group
													className='mb-3'
													controlId='formBasicPassword'>
													<Form.Label>Password</Form.Label>
													<Form.Control
														type='password'
														value={pwd}
														onChange={changePwd}
														placeholder='Password'
														required
													/>
												</Form.Group>
												<Form.Group
													className='mb-3'
													controlId='formBasicCheckbox'>
													<p className='small'>
														<a className='text-danger' href="{''}">
															Forgot password?
														</a>
													</p>
												</Form.Group>
												<div className='d-grid'>
													<Button variant='danger' type='submit'>
														Login
													</Button>
												</div>
											</Form>
											<div className='mt-3'>
												<p className='mb-0  text-center'>
													Don't have an account?{' '}
													<a
														href="{''}"
														onClick={handleSignup}
														className='text-danger fw-bold'>
														Sign Up
													</a>
												</p>
											</div>
										</div>
									</div>
								</Col>
								<Col md={6} xs={12}>
									<img
										src={image}
										alt='login form'
										className='rounded-start w-100'
									/>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
