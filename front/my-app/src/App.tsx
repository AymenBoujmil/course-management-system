import React, { FC, useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import api from "./api/users"
import TeacherList from './pages/TeacherList';
import CourseList from './pages//Courses/CourseList';
import NotFound from './pages/NotFound';
import AddCourse from './pages/Courses/AddCourse';
import { ICourse } from './utilities/models/ICourse';
import Footer from './components/footer/Footer';
const App: FC = () => {

  const isLoggedIn = window.localStorage.getItem("isLoggedIn")

  const [users, setUsers] = useState<any>([])
  const [courses, setCourses] = useState<any>([])
  const retrieveUsers = async() =>{
    const response = await api.get('/users')
    return response
  }
  const retrieveCourses = async() =>{
    const response = await api.get('/courses')
    return response
  }
  useEffect(() => {
    const getAllCourses =async () => {
      const allCourses = await retrieveCourses()
      if (allCourses.data) setCourses(allCourses.data)

    };
    const getAllUsers = async()=>{
      const allUsers = await retrieveUsers()
      if (allUsers.data) setUsers(allUsers.data)
    };
    getAllUsers();
    getAllCourses();
  }, [])
  const changeCourses = (course:ICourse) => {
    setCourses([...courses, course ])
  }
 
  
	return (
		<>
			<Navbar />
			<Routes>  
				<Route path='/'  element={isLoggedIn?<Home users = {users} />:<Login users = {users} />} />
				<Route path='/signin'  element={<Login users = {users} />} />
				<Route path='/signup' element={<SignUp />} />
        <Route path='/teachers' element={isLoggedIn?<TeacherList users = {users} />:<Login users = {users} />} />
        <Route path='/courses' element={isLoggedIn?<CourseList courses = {courses} />:<Login users = {users} />} />
        <Route path='/newcourse'  element={isLoggedIn?<AddCourse  changeCourses = {changeCourses} />:<Login users = {users} />} />
        <Route path='/*' element={isLoggedIn?<NotFound />:<Login users = {users}  />} />

			</Routes>
      <Footer />
		</>
	);
};

export default App;
