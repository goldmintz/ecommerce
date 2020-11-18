import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
	productListReducer,
	productDetailsReducer,
} from './reducers/productReducers';

import { cartReducer } from './reducers/cartReducers';
import {
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateDetailsReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
	productList: productListReducer,
	productDetail: productDetailsReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userProfile: userDetailsReducer,
	userUpdateProfile: userUpdateDetailsReducer,
});

const cartItemsFromLcStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const userDetailsfromLcStorage = localStorage.getItem('userDetails')
	? JSON.parse(localStorage.getItem('userDetails'))
	: null;

const initialState = {
	cart: { cartItems: cartItemsFromLcStorage },
	userLogin: { userDetails: userDetailsfromLcStorage },
};
const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
