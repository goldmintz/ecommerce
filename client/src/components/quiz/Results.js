import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';

const Results = ({ points, reset }) => {
	return (
		<>
			<Row className='results-wrapper'>
				<Col className='results-text'>
					Congrats! You finished the quiz with {points} total points.
					<Button onClick={reset}>Retake</Button>
				</Col>
				<Col className='results-prod'>
					<Image />
				</Col>
			</Row>
		</>
	);
};

export default Results;
