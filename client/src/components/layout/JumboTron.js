import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/jumboTron.css';

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
