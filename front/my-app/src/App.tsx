import React, {FC} from 'react';
import { Routes, Route } from 'react-router-dom'
import { Container } from "react-bootstrap"
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App: FC = () =>{
  return <>
  <Navbar />
  <Container className='mb-4'>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signin" element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  </Container>
  </>
}

export default App;
