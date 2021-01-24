import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import SearchModal from './SearchModal';

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userDetails } = userLogin;
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const [show, setShowSearchModal] = useState(false);

	const handleClose = () => setShowSearchModal(false);
	const handleShow = () => setShowSearchModal(true);

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<>
			<Route
				render={({ history }) => (
					<SearchModal
						history={history}
						show={show}
						handleClose={handleClose}
					/>
				)}
			/>
			<header>
				<Navbar collapseOnSelect fixed='top' expand='lg'>
					<Link to='/'>
						<Navbar.Brand> 🌿 Sprouts</Navbar.Brand>
					</Link>

					{/*Navbar.Toggle adds hamburger on smaller viewports */}
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<LinkContainer to='/products/best-sellers'>
							<Nav.Link>Best Sellers</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/products/gifts'>
							<Nav.Link>Gift Ideas</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/products/tbd'>
							<Nav.Link>Other Link</Nav.Link>
						</LinkContainer>
						<Nav className='ml-auto'>
							<LinkContainer to='/'>
								<Nav.Link onClick={handleShow}>
									<i className='fas fa-search'></i>
									Search
								</Nav.Link>
							</LinkContainer>

							{userDetails ? (
								<NavDropdown
									title={
										<a>
											<i className='far fa-user'></i>
										</a>
									}
									id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Account</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={handleLogout}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>Login</Nav.Link>
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
							<LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart'></i>
									{cartItems.length > 0 && (
										<span>
											({cartItems.reduce((acc, item) => acc + item.quantity, 0)}
											)
										</span>
									)}
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		</>
	);
};

export default Header;
