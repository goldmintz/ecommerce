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

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route exact path='/' component={Home} />
					<Route exact path='/product/:id' component={ProductDetail} />
					<Route path='/cart/:id?' component={Cart} />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
