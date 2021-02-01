import React, { useEffect, useState } from 'react';
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap';
import { PayPalButton } from 'react-paypal-button-v2';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderDetails, payOrder } from '../../actions/orderActions';
import { ORDER_PAY_RESET } from '../../constants/types';
import axios from 'axios';

import Message from '../layout/Message';
import Loader from '../layout/Loader';

const ViewOrder = ({ match }) => {
	const orderId = match.params.id;

	const [sdkReady, setSdkReady] = useState(false);
	// const [paypalLoaded, setPaypalLoaded] = useState(false);

	const dispatch = useDispatch();

	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, error, loading } = orderDetails;

	const orderPayment = useSelector((state) => state.orderPayment);
	//rename properties because names are already declared above
	const { loading: loadingPayment, success: successPayment } = orderPayment;

	useEffect(() => {
		//Dynamically update the body with the PayPal script on load
		const addPayPalScript = async () => {
			const { data: clientId } = await axios.get('/api/config/paypal');
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.async = true;
			script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
			script.onload = () => setSdkReady(true);
			document.body.appendChild(script);
		};

		if (!order || order._id !== orderId || successPayment) {
			//reset so that once payment is processed, page doesn't refresh infinitely
			dispatch({ type: ORDER_PAY_RESET });
			dispatch(getOrderDetails(orderId));
		} else if (!order.isPaid) {
			//if order is unpaid, add the PayPal script
			if (!window.paypal) {
				addPayPalScript();
			} else {
				setSdkReady(true);
			}
		}
	}, [dispatch, orderId, order, successPayment]);

	const handlePaymentSuccess = (paymentResult) => {
		console.log(paymentResult);
		dispatch(payOrder(orderId, paymentResult));
	};

	return loading ? (
		<Loader />
	) : error ? (
		<Message>{error}</Message>
	) : (
		<>
			<h1>Order # {order._id}</h1>
			<Row>
				<Col md={8}>
					<ListGroup variant='flush'>
						{order.isPaid && (
							<Message variant='success'>
								{`Order paid and processed ${order.paymentResult.update_time}`}
							</Message>
						)}
						<ListGroup.Item>
							<h2>Shipping</h2>
							<p>
								<strong>Name: </strong> {order.user.name}
							</p>
							<p>
								<strong>
									Email:{' '}
									<a href={`mailto:${order.user.email}`}>{order.user.email}</a>
								</strong>
							</p>
							<p>
								<strong>Address: </strong>
								{order.shippingAddress.address} {'  '}
								{order.shippingAddress.city}
								{', '}
								{order.shippingAddress.state} {''}
								{order.shippingAddress.zip}
							</p>
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>
								{order.orderItems.length > 1 ? 'Order Items' : 'Order Item'}
							</h2>
							{order.orderItems.length === 0 ? (
								<Message>Awww...no items in your order!</Message>
							) : (
								<ListGroup>
									{order.orderItems.map((item, i) => (
										<ListGroup.Item key={i}>
											<Row>
												<Col md={1}>
													<Image
														src={item.image}
														alt={item.name}
														fluid
														thumbnail
													/>
												</Col>
												<Col>
													<Link to={`/product/${item.product}`}>
														{item.name}
													</Link>
												</Col>
												{/*TODO: Fix formatting of numbers => trailing decimals
												and add comma separator */}
												<Col md={4}>
													{item.quantity} x {item.price} = $
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
									<Col>Item Subtotal</Col>
									<Col>
										$
										{Number(
											order.totalPrice - (order.taxPrice + order.shippingPrice),
										)}
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Shipping</Col>
									<Col>
										{order.shippingPrice > 0
											? `${order.shippingPrice}`
											: 'Free Shipping'}
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Tax</Col>
									<Col>${order.taxPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Payment Method</Col>
									<Col>{order.paymentMethod}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item
								style={{ backgroundColor: '#033012', color: 'white' }}>
								<Row>
									<Col>
										<strong>Purchase Total</strong>
									</Col>
									<Col>
										<strong>${order.totalPrice}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							{!order.isPaid && (
								<ListGroup.Item>
									{loadingPayment && <Loader />}
									{!sdkReady ? (
										<Loader />
									) : (
										<PayPalButton
											amount={order.totalPrice}
											onSuccess={handlePaymentSuccess}
										/>
									)}
								</ListGroup.Item>
							)}
						</ListGroup>
					</Card>
				</Col>
				<Button>tbd</Button>
			</Row>
		</>
	);
};

export default ViewOrder;
