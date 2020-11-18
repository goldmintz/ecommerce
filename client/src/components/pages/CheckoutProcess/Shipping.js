import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { saveShippingAdd } from '../../../actions/cartActions';

import FormContainer from '../../layout/Form';
import CheckoutSteps from '../CheckoutProcess/CheckoutSteps';

const Shipping = ({ history }) => {
	const cart = useSelector((state) => state.cart);
	const { shippingAdd } = cart;

	const [address, setAddress] = useState(shippingAdd.address);
	const [city, setCity] = useState(shippingAdd.city);
	const [state, setState] = useState(shippingAdd.state);
	const [zip, setZip] = useState(shippingAdd.zip);

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = { address, city, state, zip };
		dispatch(saveShippingAdd(data));

		//send to next step: payment screen
		history.push('/payment');
	};

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 />
			<h1>Shipping</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='address'>
					<Form.Label>Address</Form.Label>
					<Form.Control
						required
						type='address'
						placeholder='Enter address'
						value={address}
						onChange={(e) => setAddress(e.target.value)}></Form.Control>
				</Form.Group>
				<Form.Group controlId='city'>
					<Form.Label>City</Form.Label>
					<Form.Control
						required
						type='city'
						placeholder='Enter city'
						value={city}
						onChange={(e) => setCity(e.target.value)}></Form.Control>
				</Form.Group>
				<Form.Group controlId='state'>
					<Form.Label>State</Form.Label>
					<Form.Control
						required
						type='state'
						placeholder='Enter state'
						value={state}
						onChange={(e) => setState(e.target.value)}></Form.Control>
				</Form.Group>
				<Form.Group controlId='state'>
					<Form.Label>Zip</Form.Label>
					<Form.Control
						required
						type='zip'
						maxLength='6'
						placeholder='Enter zip'
						value={zip}
						onChange={(e) => setZip(e.target.value)}></Form.Control>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Next
				</Button>
			</Form>
		</FormContainer>
	);
};

export default Shipping;
