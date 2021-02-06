import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/home/collections.css';

const Collections = () => {
	const imagePath = process.env.PUBLIC_URL + '/images/black_bg.jpg';
	const rightArrow = process.env.PUBLIC_URL + '/images/arrow-right.png';

	const collections = ['best sellers', 'gifts', 'seasonal'];

	return (
		<Container fluid={true} className='collections page-section'>
			<Row className='px-3'>
				<Col fluid={true} md={4} xs={6} className='collection-col'>
					<Link to='/products/best-sellers'>
						<Image src={imagePath} fluid={true} />

						<h2>Best Sellers</h2>
					</Link>
				</Col>
				<Col fluid={true} md={4} xs={6} className='collection-col'>
					<Link to='/products/gifts'>
						<Image src={imagePath} fluid={true} />
						<h2>Gift Ideas</h2>
					</Link>
				</Col>
				<Col md={4} fluid={true} className='collection-col'>
					<Link to='/products/seasonal'>
						<Image src={imagePath} fluid={true} />
						<h2>Seasonal Specials</h2>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default Collections;
