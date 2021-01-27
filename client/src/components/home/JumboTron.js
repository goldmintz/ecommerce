import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/jumboTron.css';

const HomepageJumbo = () => {
	const imagePath = process.env.PUBLIC_URL + '/images/black_bg.jpg';

	return (
		<section className='jumbotron' style={{ background: `url(${imagePath})` }}>
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
