import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './styles/utilities.css';

//import components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// import pages
import Home from './components/home/HomePage';
import ProductSubsets from './components/product/ProductSubsets';
import ProductDetail from './components/product/ProductDetailPage';
import Cart from './components/checkout/CartPage';
import Login from './components/user/LoginPage';
import Register from './components/user/RegisterPage';
import Profile from './components/user/UserProfilePage';
import Shipping from './components/checkout/Shipping';
import PaymentMethod from './components/checkout/PaymentMethod';
import CreateOrder from './components/checkout/CreateOrder';
import ViewOrder from './components/checkout/ViewOrder';
import Quiz from './components/quiz/QuizPage';

//Admin Only Views
import UserList from './components/adminViews/UserList';
import AdminEditUser from './components/adminViews/AdminEditUser';
import ProductList from './components/adminViews/ProductList';
import EditProduct from './components/adminViews/EditProduct';
import OrderList from './components/adminViews/OrderList';

const App = () => {
	return (
		<Router>
			<Header />

			<Container fluid='true' className='master-container'>
				<ScrollToTop />
				<Switch>
					<Route path='/order/:id' component={ViewOrder} />
					<Route path='/order' component={CreateOrder} />
				</Switch>
				<Route path='/shipping' component={Shipping} />
				<Route path='/payment' component={PaymentMethod} />
				<Route path='/product/:id' component={ProductDetail} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route path='/profile' component={Profile} />
				<Route path='/cart/:id?' component={Cart} />
				<Route path='/admin/users' component={UserList} />
				<Route path='/admin/product/:id/edit' component={EditProduct} />
				<Route path='/admin/products' component={ProductList} />
				<Route path='/admin/orders' component={OrderList} />
				<Route path='/admin/user/:id/edit' component={AdminEditUser} />
				<Route path='/search/:term' component={Home} />
				<Route path='/products/:term' component={ProductSubsets} />
				<Route path='/quiz' component={Quiz} />
				<Route exact path='/' component={Home} />
			</Container>

			<Footer />
		</Router>
	);
};

export default App;
