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
	USER_DETAILS_RESET,
	USER_UPDATE_DETAILS_REQ,
	USER_UPDATE_DETAILS_SUCCESS,
	USER_UPDATE_DETAILS_FAIL,
	USER_UPDATE_RESET,
	USER_LIST_REQ,
	USER_LIST_SUCCESS,
	USER_LIST_FAIL,
	USER_DELETE_REQ,
	USER_DELETE_SUCCESS,
	USER_DELETE_FAIL,
	USER_UPDATE_ADMIN_REQ,
	USER_UPDATE_ADMIN_SUCCESS,
	USER_UPDATE_ADMIN_FAIL,
	USER_UPDATE_ADMIN_RESET,
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
		case USER_DETAILS_RESET:
			return {
				user: {},
			};

		default:
			return state;
	}
};

export const userUpdateDetailsReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_UPDATE_DETAILS_REQ:
			return {
				loading: true,
			};
		case USER_UPDATE_DETAILS_SUCCESS:
			return {
				loading: false,
				userInfo: action.payload,
				success: true,
			};
		case USER_UPDATE_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case USER_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};

export const userListReducer = (state = { users: [] }, action) => {
	switch (action.type) {
		case USER_LIST_REQ:
			return {
				loading: true,
			};
		case USER_LIST_SUCCESS:
			return {
				loading: false,
				users: action.payload,
			};
		case USER_LIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const userDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_DELETE_REQ:
			return {
				loading: true,
			};
		case USER_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case USER_DELETE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const userUpdateByAdmin = (state = { user: {} }, action) => {
	switch (action.type) {
		case USER_UPDATE_ADMIN_REQ:
			return {
				loading: true,
			};
		case USER_UPDATE_ADMIN_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case USER_UPDATE_ADMIN_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case USER_UPDATE_ADMIN_RESET:
			return {
				user: {},
			};
		default:
			return state;
	}
};
