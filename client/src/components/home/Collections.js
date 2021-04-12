import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/home/collections.css';

const Collections = () => {
	return (
		<Container fluid='true' className='collections page-section'>
			<Row className='px-3'>
				<Col fluid='true' md={4} xs={6} className='collection-col'>
					<Link to='/products/best-sellers'>
						<Image src='/images/green_bg.jpg' fluid='true' />

						<h2>Best Sellers</h2>
					</Link>
				</Col>
				<Col fluid='true' md={4} xs={6} className='collection-col'>
					<Link to='/products/gifts'>
						<Image src='/images/green_bg.jpg' fluid='true' />
						<h2>Gift Ideas</h2>
					</Link>
				</Col>
				<Col md={4} fluid='true' className='collection-col'>
					<Link to='/products/seasonal'>
						<Image src='/images/green_bg.jpg' fluid='true' />
						<h2>Seasonal Specials</h2>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default Collections;
