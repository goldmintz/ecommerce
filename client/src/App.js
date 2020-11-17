import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/product/:id' component={ProductDetail} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/profile' component={Profile} />
					<Route path='/cart/:id?' component={Cart} />
					<Route exact path='/' component={Home} />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
