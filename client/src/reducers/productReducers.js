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
} from '../constants/types';

const initialState = {
	products: [],
};

export const productListReducer = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQ:
			return {
				...state,
				loading: true,
			};
		case PRODUCT_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload,
			};
		case PRODUCT_LIST_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const productDetailsReducer = (
	state = { product: { reviews: [] } },
	action,
) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQ:
			return {
				...state,
				loading: true,
			};
		case PRODUCT_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
				product: action.payload,
			};
		case PRODUCT_DETAILS_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const productDeleteReducer = (
	state = { product: { reviews: [] } },
	action,
) => {
	switch (action.type) {
		case PRODUCT_DELETE_REQ:
			return {
				loading: true,
			};
		case PRODUCT_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case PRODUCT_DELETE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
