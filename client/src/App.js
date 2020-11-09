import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

//import components
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import HomeScreen from './pages/Home';

const App = () => {
	return (
		<div>
			<Header />
			<main className='py-3'>
				<Container>
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</div>
	);
};

export default App;
