import React, { FC, useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import api from "./api/users"
import TeacherList from './pages/TeacherList';
import CourseList from './pages/CourseList';
const App: FC = () => {
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
  
	return (
		<>
			<Navbar />
			<Routes>  
				<Route path='/' element={<Home users = {users} />} />
				<Route path='/signin' element={<Login />}></Route>
				<Route path='/signup' element={<SignUp />} />
        <Route path='/teachers' element={<TeacherList users = {users} />} />
        <Route path='/courses' element={<CourseList courses = {courses} />} />

			</Routes>
		</>
	);
};

export default App;
