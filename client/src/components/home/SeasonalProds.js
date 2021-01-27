import React from 'react';
import { Row, Col, Container, Image, Card } from 'react-bootstrap';
import '../../styles/home/seasonalProds.css';

const SeasonalProds = () => {
	const imagePath = process.env.PUBLIC_URL + '/images/';

	return (
		<Container fluid className='page-section'>
			<h1 className='section-heading'>Featured Seasonals</h1>

			<Container fluid>
				<Row>
					<Col md={6} xs={12}>
						<Image src={`${imagePath}black_bg.jpg`} fluid></Image>
					</Col>

					<Col md={3} xs={6}>
						<Image src={`${imagePath}black_bg.jpg`} fluid></Image>

						<Image src={`${imagePath}black_bg.jpg`} fluid></Image>
					</Col>
					<Col md={3} xs={6}>
						<Image src={`${imagePath}black_bg.jpg`} fluid></Image>

						<Image src={`${imagePath}black_bg.jpg`} fluid></Image>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default SeasonalProds;
