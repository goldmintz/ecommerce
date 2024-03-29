import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../../actions/userActions';
import { listUserOrders } from '../../actions/orderActions';
import { USER_UPDATE_RESET } from '../../constants/types.js';

//components
import Message from '../layout/Message';
import Loader from '../layout/Loader';

const Profile = ({ location, history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userProfile = useSelector((state) => state.userProfile);
	const userLogin = useSelector((state) => state.userLogin);
	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);

	const userOrderList = useSelector((state) => state.orderUserList);

	const { loading, error, user } = userProfile;
	const { userDetails } = userLogin;
	const { success } = userUpdateProfile;
	const {
		orders,
		loading: userListLoading,
		error: userListError,
	} = userOrderList;

	useEffect(() => {
		if (!userDetails) {
			history.push('/login');
		} else {
			if (!user.name) {
				dispatch({ type: USER_UPDATE_RESET });
				dispatch(getUserProfile('profile'));
				dispatch(listUserOrders());
			} else {
				setName(user.name);
				setEmail(user.email);
			}
		}
	}, [history, userDetails, user, dispatch]);

	console.log(orders);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords must match');
		} else {
			dispatch(updateUserProfile({ id_: user._id, name, email, password }));
		}
	};

	return (
		<Row>
			<Col md={3}>
				<h2>Profile</h2>
				{error && <Message variant='danger'>{message}</Message>}
				{success && <Message variant='success'>'Profile updated!'</Message>}
				{loading && <Loader />}
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type='name'
							placeholder='Enter name'
							value={name}
							onChange={(e) => setName(e.target.value)}></Form.Control>
					</Form.Group>
					<Form.Group controlId='email'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}></Form.Control>
					</Form.Group>

					<Form.Group controlId='password'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Enter password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}></Form.Control>
					</Form.Group>
					<Form.Group controlId='confirmPassword'>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Confirm password'
							value={confirmPassword}
							onChange={(e) =>
								setConfirmPassword(e.target.value)
							}></Form.Control>
					</Form.Group>
					<Button type='submit' variant='primary' className='mt-4'>
						Save Changes
					</Button>
				</Form>
			</Col>

			<Col md={9}>
				<h2>My Orders</h2>
				{userListLoading ? (
					<Loader />
				) : userListError ? (
					<Message variant='danger'>{userListError}</Message>
				) : (
					<Table striped bordered responsive className='table-sm'>
						<thead>
							<tr>
								<th>Order ID:</th>
								<th>Date</th>
								<th>Total</th>
								<th>Paid</th>
								<th>Delivered</th>
								<th>Details</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr key={order._id}>
									<td>{order._id}</td>
									<td>
										{order.createdAt ? order.createdAt.substring(0, 10) : 'n/a'}
									</td>
									<td>${order.totalPrice}</td>
									<td>
										{order.isPaid
											? order.paidTimeStamp.substring(0, 10)
											: 'Order Not Paid'}{' '}
									</td>
									<td>
										{order.isDelivered
											? order.deliveredTimeStamp.substring(0, 10)
											: 'Order Not Delivered'}{' '}
									</td>
									<td>
										<LinkContainer to={`/order/${order._id}`}>
											<Button variant='light' className='btn-sm'>
												Details
											</Button>
										</LinkContainer>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</Col>
		</Row>
	);
};

export default Profile;
