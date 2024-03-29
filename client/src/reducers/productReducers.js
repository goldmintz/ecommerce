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
	PRODUCT_CREATE_RESET,
	PRODUCT_UPDATE_REQ,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_UPDATE_RESET,
	PRODUCT_CREATEREVIEW_REQ,
	PRODUCT_CREATEREVIEW_SUCCESS,
	PRODUCT_CREATEREVIEW_FAIL,
	PRODUCT_CREATEREVIEW_RESET,
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

export const productCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_CREATE_REQ:
			return {
				loading: true,
			};
		case PRODUCT_CREATE_SUCCESS:
			return {
				loading: false,
				success: true,
				product: action.payload,
			};
		case PRODUCT_CREATE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case PRODUCT_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const productUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_UPDATE_REQ:
			return {
				loading: true,
			};
		case PRODUCT_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				product: action.payload,
			};
		case PRODUCT_UPDATE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case PRODUCT_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};

export const productCreateReviewReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_CREATEREVIEW_REQ:
			return {
				loading: true,
			};
		case PRODUCT_CREATEREVIEW_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case PRODUCT_CREATEREVIEW_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case PRODUCT_CREATEREVIEW_RESET:
			return {};
		default:
			return state;
	}
};
