import React from 'react';
import { Row, Col, Container, Image, Card } from 'react-bootstrap';
import Product from '../features/Product';

const SeasonalProds = () => {
	return (
		<Container fluid className='seasonal-prods'>
			<h2>Seasonal Products</h2>
			<hr></hr>
			<Container fluid >
				<Row >
					<Col md={6}>
						<div className='h-100'>
							<Image src='/images/monstera.jpg' fluid></Image>
						</div>
					</Col>

					<Col md={3}>
						<div style={{ height: '50%' }}>
							<Image src='/images/monstera.jpg' fluid></Image>
						</div>
						<div style={{ height: '50%' }}>
							<Image src='/images/monstera.jpg' fluid></Image>
						</div>
					</Col>
					<Col md={3}>
						<div style={{ height: '50%' }}>
							<Image src='/images/monstera.jpg' fluid></Image>
						</div>
						<div style={{ height: '50%' }}>
							<Image src='/images/monstera.jpg' fluid></Image>
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default SeasonalProds;
