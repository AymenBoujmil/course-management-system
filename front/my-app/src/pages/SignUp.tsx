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
import { Navigate, useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const SignUp: FC = () => {
	const navigate = useNavigate();
	const isLoggedIn = window.localStorage.getItem("isLoggedIn")

	const [error, setError] = useState(false);
	const [email, setEmail] = useState<string>('');
	const [pwd, setPwd] = useState<string>('');
	const [validatePwd, setValidatePwd] = useState<string>('');
	const [fName, setFName] = useState<string>('');
	const [lName, setLName] = useState<string>('');
	const [nName, setNName] = useState<string>('');

	const [date, setDate] = useState(new Date());

	const [gender, setGender] = useState('male');
	const [profession, setProfession] = useState('student');

	const professionItem = profession;

	const genderItem = gender;

	const today = new Date();

	function handleSubmit(event: any) {
		event.preventDefault();
		if (validatePwd === pwd) {
			navigate('/');
		} else {
			setError(true);
		}
	}

	
	const changeEmail = (event: any) => {
		setEmail(event.target.value);
	};
	const changePwd = (event: any) => {
		setPwd(event.target.value);
	};
	const changeValdidatePwd = (event: any) => {
		setValidatePwd(event.target.value);
	};
	const changeFName = (event: any) => {
		setFName(event.target.value);
	};
	const changeLName = (event: any) => {
		setLName(event.target.value);
	};
	const changeNName = (event: any) => {
		setNName(event.target.value);
	};
	const changeDate = (date: any) => {
		setDate(date);
	};
	const handleGender = (e: any) => {
		setGender(e.target.value);
	};
	const handleProfession = (e: any) => {
		setProfession(e.target.value);
	};

    const handleSignin = (e:any) =>{
        e.preventDefault();
        navigate("/signin")
    }

	if(isLoggedIn==="true") return <Navigate replace to="/signin" />
	else
	return (
		<Container>
			<Row className='vh-100 d-flex justify-content-center align-items-center'>
				{error ? (
					<Alert key='danger' variant='danger'>
						Please Verify your data
					</Alert>
				) : null}
				<Col md={10} lg={8} xs={12}>
					{/* <div className="border border-3 border-primary"></div> */}
					<Card className='shadow'>
						<Card.Body>
							<div className='mb-3 mt-md-4'>
								<h2 className='fw-bold mb-2 text-uppercase '>Sign Up</h2>
								{/* <p className=" mb-5">Please enter your login and password!</p> */}
								<div className='mb-3'>
									<Form onSubmit={(e) => handleSubmit(e)}>
										<Row>
											<Col md={6} xs={12}>
												<Form.Group className='mb-3' controlId='formBasicEmail'>
													<Form.Label className='text-center'>
														First Name
													</Form.Label>
													<Form.Control
														type='text'
														value={fName}
														onChange={changeFName}
														placeholder='Enter First Name'
														required
													/>
												</Form.Group>

												<Form.Group
													className='mb-3'
													controlId='formBasicPassword'>
													<Form.Label>NickName</Form.Label>
													<Form.Control
														type='text'
														value={nName}
														onChange={changeNName}
														placeholder='Enter NickName'
													/>
												</Form.Group>
												<Form.Group className='mb-3' controlId='formBasicEmail'>
													<Form.Label>Gender</Form.Label>
													<Form.Check
														value='male'
														type='radio'
														aria-label='radio 1'
														label='Male'
														onChange={handleGender}
														checked={genderItem === 'male'}
													/>
													<Form.Check
														value='female'
														type='radio'
														aria-label='radio 2'
														label='Female'
														onChange={handleGender}
														checked={genderItem === 'female'}
													/>
												</Form.Group>
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
													/>{' '}
												</Form.Group>
												<Form.Group
													className='mb-3'
													controlId='formBasicPassword'>
													<Form.Label>Validate your Password</Form.Label>
													<Form.Control
														type='password'
														value={validatePwd}
														onChange={changeValdidatePwd}
														placeholder='Password'
														required
													/>
												</Form.Group>
											</Col>
											<Col md={6} xs={12}>
												<Form.Group className='mb-3' controlId='formBasicEmail'>
													<Form.Label className='text-center'>
														Last Name
													</Form.Label>
													<Form.Control
														type='text'
														value={lName}
														onChange={changeLName}
														placeholder='Enter Last Name'
														required
													/>
												</Form.Group>

												<Form.Group className='mb-3' controlId='duedate'>
													<Form.Label>Birthday</Form.Label>

													<DatePicker
														selected={date}
														onChange={changeDate}
														className='form-control'
														maxDate={today}
														showMonthDropdown={true}
														showYearDropdown={true}
														dropdownMode='select'
													/>
												</Form.Group>
												<Form.Group className='mb-3' controlId='formBasicEmail'>
													<Form.Label>Who are you?</Form.Label>
													<Form.Check
														value='student'
														type='radio'
														aria-label='radio 1'
														label='Student'
														onChange={handleProfession}
														checked={professionItem === 'student'}
													/>
													<Form.Check
														value='instructor'
														type='radio'
														aria-label='radio 2'
														label='Instructor'
														onChange={handleProfession}
														checked={professionItem === 'instructor'}
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
											</Col>
										</Row>
										<div className='d-grid'>
											<Button variant='danger'
											 type='submit'>
												Sign Up
											</Button>
										</div>
									</Form>
									<div className='mt-3'>
										<p className='mb-0  text-center'>
											You have an account?{' '}
											<a href="{''}" onClick={handleSignin} className='text-danger fw-bold'>
												Sign In
											</a>
										</p>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default SignUp;
