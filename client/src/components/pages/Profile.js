import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../actions/userActions';

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

	const { loading, error, user } = userProfile;
	const { userDetails } = userLogin;

	//If user is logged in, redirect
	useEffect(() => {
		if (!userDetails) {
			history.push('/login');
		} else {
			if (!user.name) {
				dispatch(getUserProfile('profile'));
			} else {
				setName(user.name);
				setEmail(user.email);
			}
		}
	}, [history, userDetails, user, dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords must match');
		} else {
			//dispatch changes
		}
	};

	return (
		<Row>
			<Col md={3}>
				<h2>Profile</h2>
				{error && <Message variant='danger'>{message}</Message>}
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

					<Button type='submit' variant='primary'>
						Save Changes
					</Button>
				</Form>
			</Col>
			<Col md={9}>
				<h2>My Orders</h2>
			</Col>
		</Row>
	);
};

export default Profile;
