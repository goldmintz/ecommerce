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
	USER_UPDATE_DETAILS_FAIL,
	USER_UPDATE_DETAILS_SUCCESS,
	USER_UPDATE_DETAILS_REQ,
	USER_DETAILS_RESET,
	USER_LIST_REQ,
	USER_LIST_SUCCESS,
	USER_LIST_FAIL,
	USER_DELETE_REQ,
	USER_DELETE_SUCCESS,
	USER_DELETE_FAIL,
	ORDER_USERLIST_RESET,
	USER_UPDATE_ADMIN_REQ,
	USER_UPDATE_ADMIN_SUCCESS,
	USER_UPDATE_ADMIN_FAIL,
} from '../constants/types';

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
	dispatch({
		type: USER_DETAILS_RESET,
	});
	dispatch({
		type: ORDER_USERLIST_RESET,
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

export const updateUserProfile = (user) => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_UPDATE_DETAILS_REQ,
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

		const { data } = await axios.put(`/api/users/profile`, user, config);

		dispatch({
			type: USER_UPDATE_DETAILS_SUCCESS,
			payload: data,
		});

		//dispatch login again to reflect changes
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userDetails', JSON.stringify(data));
	} catch (err) {
		dispatch({
			type: USER_UPDATE_DETAILS_FAIL,
			payload: err.response,
		});
	}
};

export const listUsers = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_LIST_REQ,
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

		const { data } = await axios.get(`/api/users`, config);

		dispatch({
			type: USER_LIST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: USER_LIST_FAIL,
			payload: err.response,
		});
	}
};

export const deleteUser = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_DELETE_REQ,
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

		await axios.delete(`/api/users/${id}`, config);

		dispatch({
			type: USER_DELETE_SUCCESS,
		});
	} catch (err) {
		dispatch({
			type: USER_DELETE_FAIL,
			payload: err.response,
		});
	}
};

export const updateUserByAdmin = (user) => async (dispatch, getState) => {
	console.log(user);
	try {
		dispatch({
			type: USER_UPDATE_ADMIN_REQ,
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

		const { data } = await axios.put(`/api/users/${user._id}`, user, config);

		console.log(data);
		dispatch({
			type: USER_UPDATE_ADMIN_SUCCESS,
		});
		dispatch({
			type: USER_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: USER_UPDATE_ADMIN_FAIL,
			payload: err.response,
		});
	}
};
