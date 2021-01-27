import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../styles/collections.css';

const Collections = () => {
	const imagePath = process.env.PUBLIC_URL + '/images/black_bg.jpg';

	return (
		<Container fluid className='collections '>
			<Row>
				<Col md={4} className='px-5'>
					<Image src={imagePath} fluid />
					<h2>Collection 1</h2>
				</Col>
				<Col md={4} className='px-5'>
					<Image src={imagePath} fluid />
					<h2>Collection 2</h2>
				</Col>
				<Col md={4} xs={12} className='px-5'>
					<Image src={imagePath} fluid />
					<h2>Collection 3</h2>
				</Col>
			</Row>
		</Container>
	);
};

export default Collections;
