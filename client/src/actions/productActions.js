import axios from 'axios';

import {
	PRODUCT_LIST_REQ,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
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
