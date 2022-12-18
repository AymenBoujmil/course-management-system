import React, { FC, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../assets/styles/teacherList.css';
import { IUser } from '../utilities/models/IUser';
import { IUsers } from '../utilities/models/IUsers';
import Teacher from '../components/teacher/Teacher';
import { useNavigate } from 'react-router-dom';

const TeacherList: FC<IUsers> = ({ users }: IUsers) => {
//   const isLoggedIn = window.localStorage.getItem("isLoggedIn")
  const navigate = useNavigate()
//   useEffect(() => {
//     if (isLoggedIn !== "true"){
//       navigate('/signin')
//     }
//   }, [])
	useEffect(() => {
		console.log(users);
		console.log(users.filter((user: IUser) => user.role === 'teacher'));
	}, [users]);

	return (
		<>
			<Container>
				<h2 className='mt-4 teacher-title'>Our Teachers</h2>
				<div className='container'>
					<p>
						Some qualities of a good teacher include skills in communication,
						listening, collaboration, adaptability, empathy and patience. Other
						characteristics of effective teaching include an engaging classroom
						presence, value in real-world learning, exchange of best practices
						and a lifelong love of learning.
					</p>
				</div>

				<ul className='list-group mt-3'>
					{users
						.filter((user: IUser) => user.role === 'teacher')
						.map((user: IUser) => (
							<Teacher user={user} />
						))}
				</ul>
			</Container>
		</>
	);
};

export default TeacherList;
