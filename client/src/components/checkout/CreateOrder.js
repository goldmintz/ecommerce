import React, { useEffect } from 'react';
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../../actions/orderActions';

import Message from '../layout/Message';
import CheckoutSteps from './CheckoutSteps';

const Order = ({ history }) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	const formatDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);

	//calculate prices
	cart.itemsPrice = formatDecimals(
		cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
	);

	cart.shippingPrice = formatDecimals(cart.itemsPrice < 100 ? 10.0 : 0.0);

	cart.taxPrice = formatDecimals((0.2 * cart.itemsPrice).toFixed(2));

	cart.totalPrice = (
		Number(cart.itemsPrice) +
		Number(cart.shippingPrice) +
		Number(cart.taxPrice)
	).toFixed(2);

	console.log(cart.totalPrice);

	const orderCreate = useSelector((state) => state.orderCreate);
	const { order, success } = orderCreate;

	useEffect(() => {
		if (success) {
			history.push(`/order/${order._id}`);
		}
		// eslint-disable-next-line
	}, [history, success]);

	const handlePlaceOrder = (e) => {
		e.preventDefault();
		dispatch(
			createOrder({
				orderItems: cart.cartItems,
				shippingAddress: cart.shippingAdd,
				paymentMethod: cart.paymentMethod,
				itemsPrice: cart.itemsPrice,
				taxPrice: cart.taxPrice,
				shippingPrice: cart.shippingPrice,
				totalPrice: cart.totalPrice,
			}),
		);
	};

	return (
		<>
			<CheckoutSteps step1 step2 step3 />
			<Row>
				<Col md={8}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>Shipping</h2>
							<p>
								Address:
								<br></br>
								{cart.shippingAdd.address} {'  '}
								{cart.shippingAdd.city}
								{', '}
								{cart.shippingAdd.state} {''}
								{cart.shippingAdd.zip}
							</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Payment Method</h2>
							<p>
								<strong>Method: </strong>
								{cart.paymentMethod}
							</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Items in Cart</h2>
							{cart.cartItems.length === 0 ? (
								<Message>Awww...your cart is empty!</Message>
							) : (
								<ListGroup variant='flush'>
									{cart.cartItems.map((item, i) => (
										<ListGroup.Item key={i}>
											<Row>
												<Col md={1}>
													<Image
														src={item.image}
														alt={item.name}
														fluid='true'
														rounded
													/>
												</Col>
												<Col>
													<Link to={`/product/${item.product}`}>
														{item.name}
													</Link>
												</Col>
												<Col md={4}>
													{item.quantity} X {item.price} = $
													{item.quantity * item.price}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h2>Order Summary</h2>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Item(s)</Col>
									<Col>${cart.itemsPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Shipping</Col>
									<Col>
										{cart.shippingPrice > 0
											? `$${formatDecimals(cart.shippingPrice)}`
											: 'Free Shipping'}
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Tax</Col>
									<Col>${cart.taxPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item
								style={{ backgroundColor: '#033012', color: 'white' }}>
								<Row>
									<Col>
										<strong>Purchase Total</strong>
									</Col>
									<Col>
										<strong>${cart.totalPrice}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									type='button'
									className='btn-block'
									disabled={cart.cartItems === 0}
									onClick={handlePlaceOrder}>
									Place Order
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Order;
