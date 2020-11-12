import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from 'react-bootstrap';
import Message from '../layout/Message';

import { addToCart } from '../../actions/cartActions';

const Cart = ({ match, location, history }) => {
	//isolate id and quantity from passed url
	const productId = match.params.id;
	const quantity = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, quantity));
		}
	}, [dispatch, productId, quantity]);

	return <div>cart</div>;
};

export default Cart;
