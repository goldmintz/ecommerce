import {
	ORDER_CREATE_REQ,
	ORDER_CREATE_SUCCESS,
	ORDER_CREATE_FAIL,
	ORDER_DETAILS_REQ,
	ORDER_DETAILS_SUCCESS,
	ORDER_DETAILS_FAIL,
	ORDER_PAY_REQ,
	ORDER_PAY_SUCCESS,
	ORDER_PAY_FAIL,
	ORDER_PAY_RESET,
	ORDER_USERLIST_REQ,
	ORDER_USERLIST_SUCCESS,
	ORDER_USERLIST_FAIL,
	ORDER_USERLIST_RESET,
} from '../constants/types';

export const orderCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case ORDER_CREATE_REQ:
			return {
				loading: true,
			};
		case ORDER_CREATE_SUCCESS:
			return {
				loading: false,
				success: true,
				order: action.payload,
			};
		case ORDER_CREATE_FAIL:
			return {
				loading: false,
				success: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const orderDetailsReducer = (
	state = { loading: true, orderItems: [], shippingAddress: {} },
	action,
) => {
	switch (action.type) {
		case ORDER_DETAILS_REQ:
			return {
				...state,
				loading: true,
			};
		case ORDER_DETAILS_SUCCESS:
			return {
				loading: false,
				order: action.payload,
			};
		case ORDER_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const orderPaymentReducer = (state = { loading: false }, action) => {
	switch (action.type) {
		case ORDER_PAY_REQ:
			return {
				loading: true,
			};
		case ORDER_PAY_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case ORDER_PAY_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ORDER_PAY_RESET:
			return {};
		default:
			return state;
	}
};

export const orderUserListReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case ORDER_USERLIST_REQ:
			return {
				loading: true,
			};
		case ORDER_USERLIST_SUCCESS:
			return {
				loading: false,
				orders: action.payload,
			};
		case ORDER_USERLIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ORDER_USERLIST_RESET:
			return {
				orders: [],
			};
		default:
			return state;
	}
};
