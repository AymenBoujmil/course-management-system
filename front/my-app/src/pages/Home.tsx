import React, {FC} from 'react'
import { Banner } from '../components/banner/banner';
import { IUsers } from '../utilities/models/IUsers';
import { useNavigate, Navigate} from 'react-router-dom';


const Home:FC<IUsers>= ({users}:IUsers) => {
   const isLoggedIn = window.localStorage.getItem("isLoggedIn")
  const navigate = useNavigate()
  
  if (isLoggedIn !== "true"){
  return(
    <Navigate  replace to="/signin" /> 
  )} else
  return ( <>
    
    <Banner />

    </>
  )
}

export default Home;