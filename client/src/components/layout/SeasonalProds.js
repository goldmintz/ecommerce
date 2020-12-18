import React from 'react';
import { Row, Col, Container, Image, Card } from 'react-bootstrap';
import Product from '../features/Product';

const SeasonalProds = () => {
	return (
		<Container fluid>
			<h2>Seasonal Products</h2>
			<hr></hr>
			<Row fluid>
				<Col md={6} lg={6}>
					<Image src='/images/monstera.jpg' fluid />
				</Col>
				<Col md={3}>
					<Image src='/images/monstera.jpg' fluid />
					<Image src='/images/monstera.jpg' fluid />
				</Col>
				<Col md={3}>
					<Image src='/images/monstera.jpg' fluid />
					<Image src='/images/monstera.jpg' fluid />
				</Col>
			</Row>
		</Container>
	);
};

export default SeasonalProds;
