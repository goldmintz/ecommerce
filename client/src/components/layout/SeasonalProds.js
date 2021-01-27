import React from 'react';
import { Row, Col, Container, Image, Card } from 'react-bootstrap';

const SeasonalProds = () => {
	const imagePath = process.env.PUBLIC_URL + '/images/';

	return (
		<Container fluid className='seasonal-prods'>
			<h2>Seasonal Products</h2>
			<hr></hr>
			<Container fluid>
				<Row>
					<Col md={6}>
						<Image src={`${imagePath}black_bg.jpg`} fluid></Image>
					</Col>

					<Col md={3}>
						<Image
							src={`${imagePath}black_bg.jpg`}
							fluid
							style={{ paddingBottom: '20px' }}></Image>

						<Image src={`${imagePath}black_bg.jpg`} fluid></Image>
					</Col>
					<Col md={3}>
						<Image
							src={`${imagePath}black_bg.jpg`}
							fluid
							style={{ paddingBottom: '20px' }}></Image>

						<Image src={`${imagePath}black_bg.jpg`} fluid></Image>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default SeasonalProds;
