import {
	PRODUCT_LIST_REQ,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQ,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
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
