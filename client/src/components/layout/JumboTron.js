import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';

const HomepageJumbo = () => {
	return (
		<Jumbotron fluid>
			<Container className='jumbo-content'>
				<h1>Fluid jumbotron</h1>
				<p>
					This is a modified jumbotron that occupies the entire horizontal space
					of its parent.
				</p>
				<Button variant='outline-dark'>Take Our Quiz</Button>
			</Container>
		</Jumbotron>
	);
};

export default HomepageJumbo;
