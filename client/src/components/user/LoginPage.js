import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/userActions';

//components
import Loader from '../layout/Loader';
import FormContainer from '../layout/Form';

const Login = ({ location, history }) => {
	//TODO: can this be managed as a single state hook?
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	//Determine from where user arrived - to redirect on path or add custom messaging
	const redirect = location.search ? location.search.split('=')[1] : '/';

	const userLogin = useSelector((state) => state.userLogin);

	const { loading, userDetails } = userLogin;

	//If user is logged in, redirect
	useEffect(() => {
		if (userDetails) {
			history.push(redirect);
		}
	}, [history, userDetails, redirect]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	return (
		<FormContainer>
			<h1>Sign In</h1>
			{/*{error && <Message variant='danger'>{error}</Message>} */}
			{redirect === 'shipping' && (
				<h5>You must sign in to complete your order.</h5>
			)}
			{loading && <Loader />}
			<Form onSubmit={handleSubmit}>
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
				<Button type='submit' variant='primary'>
					Sign In
				</Button>
			</Form>
			<Row className='py-4'>
				<Col>
					Need an account?{' '}
					<Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
						Register Here
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default Login;
