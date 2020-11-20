import axios from 'axios';

import {
	ORDER_CREATE_REQ,
	ORDER_CREATE_SUCCESS,
	ORDER_CREATE_FAIL,
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

		// localStorage.setItem('userDetails', JSON.stringify(data));
	} catch (err) {
		dispatch({
			type: ORDER_CREATE_FAIL,
			payload: err.response,
		});
	}
};
