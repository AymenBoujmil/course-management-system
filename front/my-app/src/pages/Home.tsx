import React, {FC, useEffect} from 'react'
import { Banner } from '../components/banner/banner';
import { IUsers } from '../utilities/models/IUsers';
import { useNavigate } from 'react-router-dom';


const Home:FC<IUsers>= ({users}:IUsers) => {
  const isLoggedIn = window.localStorage.getItem("isLoggedIn")
  const navigate = useNavigate()
  useEffect(() => {
    if (isLoggedIn !== "true"){
      navigate('/signin')
    }
  }, [])
  
  return ( <>
    
    <Banner />

    </>
  )
}

export default Home;