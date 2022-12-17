import React, { FC, useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import api from "./api/users"
import TeacherList from './pages/TeacherList';
import CourseList from './pages/CourseList';
const App: FC = () => {
  const [users, setUsers] = useState<any>([])
  const retrieveUsers = async() =>{
    const response = await api.get('/users')
    return response
  }
  useEffect(() => {
    const getAllUsers = async()=>{
      const allUsers = await retrieveUsers()
      console.log(allUsers.data)
      if (allUsers.data) setUsers(allUsers.data)
    };
    getAllUsers();
    console.log(users)
  }, [])
  
	return (
		<>
			<Navbar />
			<Routes>  
				<Route path='/' element={<Home users = {users} />} />
				<Route path='/signin' element={<Login />}></Route>
				<Route path='/signup' element={<SignUp />} />
        <Route path='/teachers' element={<TeacherList users = {users} />} />
        <Route path='/courses' element={<CourseList />} />

			</Routes>
		</>
	);
};

export default App;
