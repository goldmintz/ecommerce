import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { savePaymentMthd } from '../../../actions/cartActions';

import FormContainer from '../../layout/Form';
import CheckoutSteps from '../CheckoutProcess/CheckoutSteps';

const PaymentMethod = ({ history }) => {
	const cart = useSelector((state) => state.cart);
	const { shippingAdd } = cart;

	if (!shippingAdd) {
		history.push('/shipping');
	}

	const [paymentMthd, setpaymentMthd] = useState('PayPal');

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(savePaymentMthd(paymentMthd));
		console.log('payment submitted');

		//send to next step: order screen
		history.push('/order');
	};

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 step3 />
			<h1>Payment Method</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label as='legend'>Select Method</Form.Label>

					<Col>
						<Form.Check
							type='radio'
							label='PayPal or Credit Card'
							id='PayPal'
							name='paymentMthd'
							value='PayPal'
							checked
							onChange={(e) => setpaymentMthd(e.target.value)}></Form.Check>
						<Form.Check
							type='radio'
							label='Stripe'
							id='Stripe'
							name='paymentMthd'
							value='Stripe'
							onChange={(e) => setpaymentMthd(e.target.value)}></Form.Check>
					</Col>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Next
				</Button>
			</Form>
		</FormContainer>
	);
};

export default PaymentMethod;
