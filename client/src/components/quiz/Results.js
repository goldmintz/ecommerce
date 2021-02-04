import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Results = ({ points }) => {
	return (
		<>
			<Row className='results-wrapper'>
				<Col className='results-text'>
					Congrats! You finished the quiz with {points} total points.
				</Col>
				<Col className='results-prod'>
					<Image />
				</Col>
			</Row>
		</>
	);
};

export default Results;
