import React, {FC} from 'react'
import { Banner } from '../components/banner/banner';
import { IUsers } from '../utilities/models/IUsers';
import { Navigate} from 'react-router-dom';


const Home:FC<IUsers>= ({users}:IUsers) => {
  const isLoggedIn = window.localStorage.getItem("isLoggedIn")
  //here we see if the there is a user connected if not we send him to the login page 
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