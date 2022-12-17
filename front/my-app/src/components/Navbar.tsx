import React, {FC} from 'react'
import {Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import universityIcon from '../assets/images/university.png'

const Navbar:FC = () => {
  return <>
        <NavbarBs className='mb-1 bg-white shadow-sm '>
        <Container>
        <img className='rounded' style={{width: "40px"}} src={universityIcon} alt=''></img>
            <Nav className='justify-content-end'>
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link> 
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link> 
                <Nav.Link to="/contact" as={NavLink}>Contact</Nav.Link> 
            </Nav>
        </Container>
        </NavbarBs>

    </>
}

export default Navbar