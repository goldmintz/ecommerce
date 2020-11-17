import {
	USER_LOGIN_REQ,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGOUT,
	USER_REGISTER_REQ,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_DETAILS_REQ,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
} from '../constants/types';

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQ:
			return {
				loading: true,
			};
		case USER_LOGIN_SUCCESS:
			return {
				loading: false,
				userDetails: action.payload,
			};
		case USER_LOGIN_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case USER_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQ:
			return {
				loading: true,
			};
		case USER_REGISTER_SUCCESS:
			return {
				loading: false,
				userDetails: action.payload,
			};
		case USER_REGISTER_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const userDetailsReducer = (state = { user: {} }, action) => {
	switch (action.type) {
		case USER_DETAILS_REQ:
			return {
				...state,
				loading: true,
			};
		case USER_DETAILS_SUCCESS:
			return {
				loading: false,
				user: action.payload,
			};
		case USER_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
