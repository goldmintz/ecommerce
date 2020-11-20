import axios from 'axios';

import {
	ORDER_CREATE_REQ,
	ORDER_CREATE_SUCCESS,
	ORDER_CREATE_FAIL,
	ORDER_DETAILS_REQ,
	ORDER_DETAILS_SUCCESS,
	ORDER_DETAILS_FAIL,
} from '../constants/types';

export const createOrder = (order) => async (dispatch, getState) => {
	try {
		dispatch({
			type: ORDER_CREATE_REQ,
		});

		const {
			userLogin: { userDetails },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userDetails.token}`,
			},
		};

		const { data } = await axios.post(`/api/orders`, order, config);

		dispatch({
			type: ORDER_CREATE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: ORDER_CREATE_FAIL,
			payload: err.response,
		});
	}
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: ORDER_DETAILS_REQ,
		});

		const {
			userLogin: { userDetails },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userDetails.token}`,
			},
		};

		const { data } = await axios.get(`/api/orders/${id}`, config);

		dispatch({
			type: ORDER_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: ORDER_DETAILS_FAIL,
			payload: err.response,
		});
	}
};
