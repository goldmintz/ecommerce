import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../styles/home/collections.css';

const Collections = () => {
	const imagePath = process.env.PUBLIC_URL + '/images/black_bg.jpg';

	return (
		<Container fluid className='collections page-section'>
			<Row className='px-5'>
				<Col>
					<Image src={imagePath} fluid />
					<h2>Collection 1</h2>
				</Col>
				<Col fluid>
					<Image src={imagePath} fluid />
					<h2>Collection 2</h2>
				</Col>
				<Col fluid>
					<Image src={imagePath} fluid />
					<h2>Collection 3</h2>
				</Col>
			</Row>
		</Container>
	);
};

export default Collections;
