import React,{FC} from 'react'
import { IUser2 } from '../../utilities/models/IUser2'
import { Button } from 'react-bootstrap'

const Teacher:FC<IUser2> = ({user}:IUser2) => {
    
  return (
    <>
    <li className='list-group-item clearfix'>
							<img
								className='img-responsive img-rounded image-teacher'
								src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
								alt=''
							/>
							<h3 className='list-group-item-heading'>
								{user.firstname} {user.lastname}
								
							</h3>
							<p className='list-group-item-text lead'>
								{user.email}
							</p>
                            <Button className='float-end' variant='outline-danger'> Details </Button>

							
						</li>
						
    </>
  )
}

export default Teacher