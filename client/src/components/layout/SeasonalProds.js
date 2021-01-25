import React from 'react';
import { Row, Col, Container, Image, Card } from 'react-bootstrap';
import Product from '../features/Product';
import seasonalPlaceholder from '../../images/placeholder_plant.jpg';

const SeasonalProds = () => {
	return (
		<Container fluid className='seasonal-prods'>
			<h2>Seasonal Products</h2>
			<hr></hr>
			<Container fluid>
				<Row>
					<Col md={6}>
						<Image src={seasonalPlaceholder} fluid></Image>
					</Col>

					<Col md={3}>
						<Image
							src={seasonalPlaceholder}
							fluid
							style={{ paddingBottom: '20px' }}></Image>

						<Image src={seasonalPlaceholder} fluid></Image>
					</Col>
					<Col md={3}>
						<Image
							src={seasonalPlaceholder}
							fluid
							style={{ paddingBottom: '20px' }}></Image>

						<Image src={seasonalPlaceholder} fluid></Image>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default SeasonalProds;
