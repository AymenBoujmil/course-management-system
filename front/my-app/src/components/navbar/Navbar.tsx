import React, { FC } from 'react';
import {
	Container,
	Nav,
	NavDropdown,
	Navbar as NavbarBs,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import universityIcon from '../../assets/images/university.png';

const Navbar: FC = () => {
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
						<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Container>
			</NavbarBs>
		</>
	);
};

export default Navbar;
