import axios from 'axios';

import {
	PRODUCT_LIST_REQ,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQ,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DELETE_REQ,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_FAIL,
	PRODUCT_CREATE_REQ,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_CREATE_FAIL,
	PRODUCT_UPDATE_REQ,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_CREATEREVIEW_REQ,
	PRODUCT_CREATEREVIEW_SUCCESS,
	PRODUCT_CREATEREVIEW_FAIL,
} from '../constants/types.js';

export const listProducts = (term = '') => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_LIST_REQ,
		});

		const { data } = await axios.get(`/api/products?term=${term}`);
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
			payload: err.response.data.message,
		});
	}
};

export const deleteProduct = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCT_DELETE_REQ,
		});

		const {
			userLogin: { userDetails },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userDetails.token}`,
			},
		};

		await axios.delete(`/api/products/${id}`, config);

		dispatch({
			type: PRODUCT_DELETE_SUCCESS,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_DELETE_FAIL,
			payload: err.message,
		});
	}
};

export const createProduct = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCT_CREATE_REQ,
		});

		const {
			userLogin: { userDetails },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userDetails.token}`,
			},
		};

		const { data } = await axios.post(`/api/products`, {}, config);

		dispatch({
			type: PRODUCT_CREATE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_CREATE_FAIL,
			payload: err.message,
		});
	}
};

export const updateProduct = (product) => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCT_UPDATE_REQ,
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

		const { data } = await axios.put(
			`/api/products/${product._id}`,
			product,
			config,
		);

		dispatch({
			type: PRODUCT_UPDATE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_UPDATE_FAIL,
			payload: err.message,
		});
	}
};

export const createReview = (id, review) => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCT_CREATEREVIEW_REQ,
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

		await axios.post(`/api/products/${id}/reviews`, review, config);

		dispatch({
			type: PRODUCT_CREATEREVIEW_SUCCESS,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_CREATEREVIEW_FAIL,
			payload: err.response.data.message,
		});
	}
};
