import React from 'react';
import { Row, Col, Container, Image, Card } from 'react-bootstrap';
import Product from '../features/Product';

const SeasonalProds = () => {
	return (
		<Container fluid className='home-section'>
			<Row className='justify-content-md-center'>
				<Col>
					<h2>Seasonal Specials</h2>
				</Col>
			</Row>
			<Row className='mx-0 px-0'>
				<Col lg={'6'}>
					<Image src={'/images/placeholder_plant.jpg'} fluid />
				</Col>
				<Col lg={'3'}>
					<Image src={'/images/placeholder_plant.jpg'} fluid />
					<Image src={'/images/placeholder_plant.jpg'} fluid />
				</Col>
				<Col lg={'3'}>
					<Image src={'/images/placeholder_plant.jpg'} fluid />
					<Image src={'/images/placeholder_plant.jpg'} fluid />
				</Col>
			</Row>
		</Container>
	);
};

export default SeasonalProds;
