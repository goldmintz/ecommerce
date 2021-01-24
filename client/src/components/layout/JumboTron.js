import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';

const HomepageJumbo = () => {
	return (
		<section className='jumbotron'>
			<div className='jumbo-content'>
				<h1>Fluid jumbotron</h1>
				<p>
					This is a modified jumbotron that occupies the entire horizontal space
					of its parent.
				</p>
				<Button>Take Our Quiz</Button>
			</div>
		</section>
	);
};

export default HomepageJumbo;
