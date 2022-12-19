import React, { FC, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import api from './api/users';
import TeacherList from './pages/TeacherList';
import CourseList from './pages//Courses/CourseList';
import NotFound from './pages/NotFound';
import AddCourse from './pages/Courses/AddCourse';
import { ICourse } from './utilities/models/ICourse';
import Footer from './components/footer/Footer';
import data from './data/db.json';
import ScrollToTop from './components/ScrollToTop';
const App: FC = () => {
	const isLoggedIn = window.localStorage.getItem('isLoggedIn');

	const [users, setUsers] = useState<any>(data.users);
	const [courses, setCourses] = useState<any>(data.courses);

	/** I Used this code to be able to get data from json server*/

	// const retrieveUsers = async() =>{
	//   const response = await api.get('/users')
	//   return response
	// }
	// const retrieveCourses = async() =>{
	//   const response = await api.get('/courses')
	//   return response
	// }
	// useEffect(() => {
	//   const getAllCourses =async () => {
	//     const allCourses = await retrieveCourses()
	//     if (allCourses.data) setCourses(allCourses.data)

	//   };
	//   const getAllUsers = async()=>{
	//     const allUsers = await retrieveUsers()
	//     if (allUsers.data) setUsers(allUsers.data)
	//   };
	//   getAllUsers();
	//   getAllCourses();
	// }, [])
	useEffect(() => {
		console.log('11233');
		console.log(courses);
	}, [courses]);

	const changeCourses = (course: ICourse) => {
		setCourses([...courses, course]);
	};

	return (
		<>
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Home users={users} />} />
				<Route path='/signin' element={<Login users={users} />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/teachers' element={<TeacherList users={users} />} />
				<Route path='/courses' element={<CourseList courses={courses} />} />
				<Route
					path='/newcourse'
					element={<AddCourse changeCourses={changeCourses} />}
				/>
				<Route path='/*' element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
