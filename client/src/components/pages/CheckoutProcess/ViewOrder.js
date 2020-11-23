import React, { useEffect } from 'react';
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderDetails } from '../../../actions/orderActions';

import Message from '../../layout/Message';
import Loader from '../../layout/Loader';

const ViewOrder = ({ match }) => {
	const orderId = match.params.id;

	const dispatch = useDispatch();

	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, error, loading } = orderDetails;

	useEffect(() => {
		dispatch(getOrderDetails(orderId));
	}, [dispatch, orderId]);

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
						<ListGroup.Item>
							<h2>Shipping</h2>
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
								<ListGroup variant='flush'>
									{order.orderItems.map((item, i) => (
										<ListGroup.Item key={i}>
											<Row>
												<Col md={1}>
													<Image
														src={item.image}
														alt={item.name}
														fluid
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
							<ListGroup.Item></ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
				<Button>tbd</Button>
			</Row>
		</>
	);
};

export default ViewOrder;
