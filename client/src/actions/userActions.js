import axios from 'axios';

import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQ,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_REQ,
	USER_DETAILS_REQ,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
} from '../constants/types.js';

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LOGIN_REQ,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'/api/users/login',
			{ email, password },
			config,
		);

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userDetails', JSON.stringify(data));
	} catch (err) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload: err.response,
		});
	}
};

export const logout = () => (dispatch) => {
	localStorage.removeItem('userDetails');
	dispatch({
		type: USER_LOGOUT,
	});
};

export const register = (name, email, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_REGISTER_REQ,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'/api/users',
			{ name, email, password },
			config,
		);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});

		//log in user immediately after successful register
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userDetails', JSON.stringify(data));
	} catch (err) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: err.response,
		});
	}
};

export const getUserProfile = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_DETAILS_REQ,
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

		const { data } = await axios.get(`/api/users/${id}`, config);

		dispatch({
			type: USER_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: USER_DETAILS_FAIL,
			payload: err.response,
		});
	}
};
