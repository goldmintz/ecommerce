import {
	PRODUCT_LIST_REQ,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
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
				loading: false,
				products: action.payload,
			};
		case PRODUCT_LIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
