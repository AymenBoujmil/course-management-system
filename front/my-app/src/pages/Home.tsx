import React, {FC, useEffect} from 'react'
import { Banner } from '../components/banner/banner';
import { IUsers } from '../utilities/models/IUsers';


const Home:FC<IUsers>= ({users}:IUsers) => {
  useEffect(() => {
    console.log(users)
  }, [])
  
  return ( <>
    
    <Banner />

    </>
  )
}

export default Home;