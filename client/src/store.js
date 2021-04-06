import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
	productListReducer,
	productDetailsReducer,
	productDeleteReducer,
	productUpdateReducer,
	productCreateReviewReducer,
} from './reducers/productReducers';

import { cartReducer } from './reducers/cartReducers';

import {
	orderCreateReducer,
	orderDetailsReducer,
	orderPaymentReducer,
	orderUserListReducer,
	orderAdminListReducer,
} from './reducers/orderReducers';
import {
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateDetailsReducer,
	userListReducer,
	userDeleteReducer,
	userUpdateByAdmin,
} from './reducers/userReducers';

import { productCreateReducer } from './reducers/productReducers';

const reducer = combineReducers({
	productList: productListReducer,
	productDetail: productDetailsReducer,
	productCreateReview: productCreateReviewReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userProfile: userDetailsReducer,
	userUpdateProfile: userUpdateDetailsReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderPayment: orderPaymentReducer,
	orderUserList: orderUserListReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userUpdatebyAdmin: userUpdateByAdmin,
	productDelete: productDeleteReducer,
	productCreate: productCreateReducer,
	productUpdate: productUpdateReducer,
	adminOrderList: orderAdminListReducer,
});

const cartItemsFromLcStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const userDetailsfromLcStorage = localStorage.getItem('userDetails')
	? JSON.parse(localStorage.getItem('userDetails'))
	: null;

const shippingAddfromLcStorage = localStorage.getItem('shippingAdd')
	? JSON.parse(localStorage.getItem('shippingAdd'))
	: {};

const initialState = {
	cart: {
		cartItems: cartItemsFromLcStorage,
		shippingAdd: shippingAddfromLcStorage,
	},
	userLogin: { userDetails: userDetailsfromLcStorage },
};
const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(middleware)),
);

export default store;
