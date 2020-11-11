import axios from 'axios';

import {
	PRODUCT_LIST_REQ,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQ,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
} from '../constants/types.js';

export const listProducts = () => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_LIST_REQ,
		});
		const { data } = await axios.get('/api/products');
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload: err.response,
		});
	}
};

export const listProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_DETAILS_REQ,
		});
		const { data } = await axios.get(`/api/products/${id}`);
		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload: err.response,
		});
	}
};
