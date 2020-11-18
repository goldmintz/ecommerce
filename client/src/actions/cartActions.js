import axios from 'axios';
import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	SAVE_SHIPPING_ADD,
	SAVE_PAYMENT_METHOD,
} from '../constants/types.js';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/products/${id}`);

	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			product: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			quantity,
		},
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: id,
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAdd = (address) => (dispatch) => {
	dispatch({
		type: SAVE_SHIPPING_ADD,
		payload: address,
	});
	localStorage.setItem('shippingAdd', JSON.stringify(address));
};

export const savePaymentMthd = (payment) => (dispatch) => {
	dispatch({
		type: SAVE_PAYMENT_METHOD,
		payload: payment,
	});
	localStorage.setItem('paymentMethod', JSON.stringify(payment));
};
