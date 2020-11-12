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
		<Row>
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{cartItems.length === 0 ? (
					<Message>Aww...your cart is empty</Message>
				) : (
					<ListGroup variant='flush'>
						{cartItems.map((item) => (
							<ListGroup.Item key={item.product}>
								<Row>
									<Col md={2}>
										<Image src={item.image} alt={item.name} fluid rounded />
									</Col>
									<Col md={3}>
										<Link to={`product/${item.product}`}>{item.name}</Link>
									</Col>
									<Col md={2}>${item.price}</Col>
									<Col md={2}>
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
									</Col>
									<Col md={2}>
										<Button
											type='button'
											variant='light'
											onClick={() => handleRemoveFromCart(item.product)}>
											<i className='fas fa-trash'></i>
										</Button>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>

			<Col md={4} style={{ marginTop: '8px' }}>
				<Card>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>
								Subtotal (
								{cartItems.reduce((acc, item) => acc + item.quantity, 0)}) Items
							</h3>
							$
							{cartItems
								.reduce((acc, item) => acc + item.quantity * item.price, 0)
								.toFixed(2)}
						</ListGroup.Item>
						<ListGroup.Item>
							<Button
								type='button'
								className='btn block'
								disabled={cartItems.length === 0}
								onClick={handleCheckOut}>
								Continue to Checkout
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	);
};

export default Cart;
