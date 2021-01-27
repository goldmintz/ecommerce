import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../actions/userActions';

//components
import Message from '../layout/Message';
import Loader from '../layout/Loader';
import FormContainer from '../layout/Form';

const Register = ({ location, history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const redirect = location.search ? location.search.split('=')[1] : '/';

	const userRegister = useSelector((state) => state.userRegister);

	const { loading, error, userDetails } = userRegister;

	//If user is logged in, redirect
	useEffect(() => {
		if (userDetails) {
			history.push(redirect);
		}
	}, [history, userDetails, redirect]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords must match');
		} else {
			dispatch(register(name, email, password));
		}
	};

	return (
		<FormContainer>
			<h1>Sign Up</h1>
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
						onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Register
				</Button>
			</Form>
			<Row className='py-4'>
				<Col>
					Have an account?{' '}
					<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
						Login
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default Register;
