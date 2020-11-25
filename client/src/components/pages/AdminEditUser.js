import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../actions/userActions';

//components
import Message from '../layout/Message';
import Loader from '../layout/Loader';
import FormContainer from '../layout/Form';

const AdminEditUser = ({ match, history }) => {
	const userId = match.params.id;

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);

	const dispatch = useDispatch();

	const userProfile = useSelector((state) => state.userProfile);

	const { loading, error, user } = userProfile;

	console.log(user.name);

	useEffect(() => {
		if (!user.name || user._id !== userId) {
			dispatch(getUserProfile(userId));
		} else {
			setName(user.name);
			setEmail(user.email);
			setIsAdmin(user.isAdmin);
		}
	}, [dispatch, user]);

	console.log(userId);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<Link to='admin/users' className='btn btn-light my-3'>
				Go Back
			</Link>
			<FormContainer>
				{/*{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : ( */}
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
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}></Form.Control>
					</Form.Group>

					<Form.Group controlId='isadmin'>
						<Form.Check
							type='checkbox'
							label='Admin Rights'
							checked={isAdmin}
							onChange={(e) => setIsAdmin(e.target.checked)}></Form.Check>
					</Form.Group>

					<Button type='submit' variant='primary'>
						Update
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};

export default AdminEditUser;
