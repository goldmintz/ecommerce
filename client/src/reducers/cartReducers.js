import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	SAVE_SHIPPING_ADD,
	SAVE_PAYMENT_METHOD,
} from '../constants/types.js';

export const cartReducer = (
	state = { cartItems: [], shippingAdd: {} },
	action,
) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;

			const itemExists = state.cartItems.find(
				(x) => x.product === item.product,
			);

			if (itemExists) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === itemExists.product ? item : x,
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}

		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) => item.product !== action.payload,
				),
			};

		case SAVE_SHIPPING_ADD:
			return {
				...state,
				shippingAdd: action.payload,
			};

		case SAVE_PAYMENT_METHOD: 
			return {
				...state,
				paymentMethod: action.payload,
			};
		
		default:
			return state;
	}
};
