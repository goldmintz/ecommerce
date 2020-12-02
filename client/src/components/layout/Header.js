import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import SearchBox from './SearchBox';

const Header = () => {
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userDetails } = userLogin;

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>eCommerce</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Route render={({ history }) => <SearchBox history={history} />} />
						<Nav className='ml-auto'>
							<LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart'></i>Cart
								</Nav.Link>
							</LinkContainer>
							{userDetails ? (
								<NavDropdown title={userDetails.name} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={handleLogout}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<i className='fas fa-user'></i>Sign In
									</Nav.Link>
								</LinkContainer>
							)}
							{userDetails && userDetails.isAdmin && (
								<NavDropdown title='Admin Links' id='admin-menu'>
									<LinkContainer to='/admin/users'>
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/products'>
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orders'>
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
