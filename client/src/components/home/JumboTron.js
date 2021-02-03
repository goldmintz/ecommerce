import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../../styles/home/jumboTron.css';

const HomepageJumbo = () => {
	const imagePath = process.env.PUBLIC_URL + '/images/jumbotron_bg.jpg';
	const backgroundImgStyle = {
		background: `url(${imagePath})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	};

	const history = useHistory();

	const visitQuiz = () => {
		history.push('/quiz');
	};

	return (
		<section className='jumbotron' style={backgroundImgStyle}>
			<div className='jumbo-content'>
				<h1>Fluid jumbotron</h1>
				<p>Find something to dig this year.</p>
				<Button onClick={visitQuiz}>Take Our Quiz</Button>
			</div>
		</section>
	);
};

export default HomepageJumbo;
