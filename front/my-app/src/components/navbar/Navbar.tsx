import React, { FC } from 'react';
import "../../assets/styles/navbar.css"
import {
	Container,
	Nav,
	NavDropdown,
	Navbar as NavbarBs,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import universityIcon from '../../assets/images/university.png';
import { useNavigate } from 'react-router-dom';
import { BsPersonFill } from "react-icons/bs";

const Navbar: FC = () => {
    const navigate = useNavigate();
    const isLoggedIn = window.localStorage.getItem("isLoggedIn")

    const logOut = ()=>{
        window.localStorage.removeItem("isLoggedIn")
        window.localStorage.removeItem("user")
        window.localStorage.removeItem("role")
        navigate("/signin")
        

    }
	return (
		<>
			<NavbarBs className='mb-1 bg-white shadow-sm '>
				<Container>
					<img
						className='rounded'
						style={{ width: '40px' }}
						src={universityIcon}
						alt=''></img>
					<Nav className='justify-content-end'>
						<Nav.Link to='/' as={NavLink}>
							Home
						</Nav.Link>
						<Nav.Link to='/about' as={NavLink}>
							About
						</Nav.Link>
						<Nav.Link to='/contact' as={NavLink}>
							Contact
						</Nav.Link>
                        {isLoggedIn?<NavDropdown title={<BsPersonFill />} className='navar-dropdown' id='basic-nav-dropdown'>
							<NavDropdown.Item to='/profile' as={NavLink}>
								Profile
							</NavDropdown.Item>
							<NavDropdown.Item to='/settings' color='red' as={NavLink} href='#action/3.2'>
								Settings
							</NavDropdown.Item>
							
							<NavDropdown.Divider />
							<NavDropdown.Item onClick={logOut}>Logout </NavDropdown.Item>
						</NavDropdown> :null}
						
					</Nav>
				</Container>
			</NavbarBs>
		</>
	);
};

export default Navbar;
