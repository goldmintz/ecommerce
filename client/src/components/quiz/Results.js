import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import '../../styles/quiz/results.css';
import '../../styles/quiz/prompt.css';

const Results = ({ points, reset }) => {
	return (
		<>
			<Row className='prompt-container '>
				<Col className=' prompt-col mx-3 my-5'>
					<div>Congrats! You finished the quiz with {points} total points.</div>
					<Button className='grow' onClick={reset}>
						Retake
					</Button>
				</Col>
				<Col className='image-col mx-3 my-3'></Col>
			</Row>
		</>
	);
};

export default Results;
