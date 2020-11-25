import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';

//import components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// import pages
import Home from './components/pages/Home';
import ProductDetail from './components/pages/ProductDetail';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import Shipping from './components/pages/CheckoutProcess/Shipping';
import PaymentMethod from './components/pages/CheckoutProcess/PaymentMethod';
import CreateOrder from './components/pages/CheckoutProcess/CreateOrder';
import ViewOrder from './components/pages/CheckoutProcess/ViewOrder';

//Admin Only Views
import UserList from './components/pages//AdminViews/UserList';
import AdminEditUser from './components/pages/AdminViews/AdminEditUser';
import ProductList from './components/pages/AdminViews/ProductList';

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
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
					<Route path='/admin/products' component={ProductList} />
					<Route path='/admin/user/:id/edit' component={AdminEditUser} />
					<Route exact path='/' component={Home} />
				</Container>
			</main>

			<Footer />
		</Router>
	);
};

export default App;
