import React, { FC, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Login: FC = () => {
	const navigate = useNavigate();
	function handleSubmit(event: any) {
		event.preventDefault();
		navigate('/');
	}
	const [email, setEmail] = useState<string>('');
	const [pwd, setPwd] = useState<string>('');
	const changeEmail = (event: any) => {
		setEmail(event.target.value);
	};
	const changePwd = (event: any) => {
		setPwd(event.target.value);
	};

  const handleSignup = (e:any) =>{
    e.preventDefault();
    navigate("/signup")
}
	// const isValidEmail = (email:string) => {
	//   return /\S+@\S+\.\S+/.test(email);
	// }
	return (
		<Container>
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
														<a className='text-primary' href='#!'>
															Forgot password?
														</a>
													</p>
												</Form.Group>
												<div className='d-grid'>
													<Button variant='primary' type='submit'>
														Login
													</Button>
												</div>
											</Form>
											<div className='mt-3'>
												<p className='mb-0  text-center'>
													Don't have an account?{' '}
													<a href="{''}" onClick={handleSignup} className='text-primary fw-bold'>
														Sign Up
													</a>
												</p>
											</div>
										</div>
									</div>
								</Col>
								<Col md={6} xs={12}>
									<img
										src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp'
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
