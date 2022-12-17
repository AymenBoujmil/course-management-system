import React, {FC, useEffect} from 'react'
import { Banner } from '../components/banner';
import TeacherList from './TeacherList';
import { IUser } from '../utilities/models/IUser';
import { IUsers } from '../utilities/models/IUsers';


const Home:FC<IUsers>= ({users}:IUsers) => {
  useEffect(() => {
    console.log(users)
  }, [])
  
  return ( <>
    
    <Banner />

     {/* {users.map((user) => (
      <p>{user.firstname}</p>
    ))}
     */}
    </>
  )
}

export default Home;