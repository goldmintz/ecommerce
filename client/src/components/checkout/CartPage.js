import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Button,
	Card,
	Form,
} from 'react-bootstrap';
import '../../styles/checkout/cartPage.css';

import Message from '../layout/Message';

import { addToCart, removeFromCart } from '../../actions/cartActions';

const Cart = ({ match, location, history }) => {
	//isolate id and quantity from passed url
	const productId = match.params.id;
	const quantity = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, quantity));
		}
	}, [dispatch, productId, quantity]);

	const handleRemoveFromCart = (id) => {
		dispatch(removeFromCart(id));
	};

	const handleCheckOut = () => {
		history.push('/login?redirect=shipping');
	};

	return (
		<div className='cart-wrapper'>
			<Row>
				<Col md={8}>
					<h1>Shopping Cart</h1>
					{cartItems.length === 0 ? (
						<Message>Aww...your cart is empty</Message>
					) : (
						<div className='cart-row-wrapper'>
							{cartItems.map((item) => (
								<div key={item.product} className='cart-row'>
									<Row>
										<Col md={3}>
											<Image src={item.image} thumbnail />
										</Col>

										<Col md={9} className='cart-product-detail py-3 px-3'>
											<Link to={`product/${item.product}`}>{item.name}</Link>
											<div id='item-price'>${item.price}</div>
											<div id='item-desc'>{item.description}</div>

											<div className='quant-controls'>
												<Form.Control
													as='select'
													value={item.quantity}
													onChange={(e) =>
														dispatch(
															addToCart(item.product, Number(e.target.value)),
														)
													}>
													{[...Array(item.countInStock).keys()].map((n) => (
														<option key={n + 1}>{n + 1}</option>
													))}
												</Form.Control>
												<Button
													variant='light'
													onClick={() => handleRemoveFromCart(item.product)}>
													<i className='fas fa-trash'></i>
												</Button>
											</div>
										</Col>
									</Row>
								</div>
							))}
						</div>
					)}
				</Col>

				<Col md={4}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>
								Total |{' '}
								{cartItems.reduce((acc, item) => acc + item.quantity, 0)} Items
							</h3>
							<div className='subtotal-row'>
								<div>Subtotal</div>
								<div>
									${' '}
									{cartItems
										.reduce((acc, item) => acc + item.quantity * item.price, 0)
										.toFixed(2)}
								</div>
							</div>
							<div className='subtotal-row'>
								<div>Shipping</div>
								<div>TBD</div>
							</div>
							<div className='subtotal-row'>
								<div>Sales Tax</div>
								<div>TBD</div>
							</div>
						</ListGroup.Item>
						<ListGroup.Item>
							<Button
								style={{ width: '100%' }}
								disabled={cartItems.length === 0}
								onClick={handleCheckOut}>
								Continue to Checkout
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</div>
	);
};

export default Cart;
