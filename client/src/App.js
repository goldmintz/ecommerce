import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';

//import components
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route exact path='/' component={Home} />
					<Route exact path='/product/:id' component={ProductDetail} />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
