import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import SearchModal from './SearchModal';

import '../../styles/header.css';

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
				<Navbar collapseOnSelect fixed='top' expand='lg' className='py-0'>
					<Navbar.Brand href='/'>Sprouts</Navbar.Brand>

					{/*Navbar.Toggle adds hamburger on smaller viewports */}
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav>
							<LinkContainer to='/products/best-sellers'>
								<Nav.Link className='underline-link'>Best Sellers</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/products/gifts'>
								<Nav.Link className='underline-link'>Gift Ideas</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/quiz'>
								<Nav.Link className='underline-link' id='quiz-link'>
									Plant Finder
								</Nav.Link>
							</LinkContainer>
						</Nav>
						<Nav className='ml-auto'>
							<Nav.Link onClick={handleShow}>
								<i className='fas fa-search' />
								Search
							</Nav.Link>

							{userDetails ? (
								<NavDropdown title={userDetails.name} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Account</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={handleLogout}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<i className='far fa-user'></i>
										Login
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
							<LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart' />
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
