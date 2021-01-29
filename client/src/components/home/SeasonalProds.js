import React from 'react';
import { Row, Col, Container, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/home/seasonalProds.css';

const SeasonalProds = () => {
	const imagePath = process.env.PUBLIC_URL + '/images/';

	return (
		<>
			<Container fluid className='seasonal-prods page-section' className='px-3'>
				<h1 className='section-heading lg-scrn'>Featured Products</h1>

				<Row>
					<Col md={6} xs={12}>
						<Image
							src={`${imagePath}black_bg.jpg`}
							fluid
							id='seasonal-focus-col'></Image>
					</Col>

					{/*This header appears under the focus image only on small screens */}
					<h1 className='section-heading sm-scrn'>Featured Products</h1>

					<Col md={3} xs={6}>
						<Card>
							<Link to={`/`}>
								<Card.Img
									src={`${imagePath}black_bg.jpg`}
									fluid
									variant='top'
								/>
							</Link>
							<Card.Body>
								<div className='card-name-price-wrapper'>
									<Link to={`/`}>
										<Card.Text>product name</Card.Text>
									</Link>
									<div>$ price</div>
								</div>
							</Card.Body>
						</Card>

						<Card>
							<Link to={`/`}>
								<Card.Img
									src={`${imagePath}black_bg.jpg`}
									fluid
									variant='top'
								/>
							</Link>
							<Card.Body>
								<div className='card-name-price-wrapper'>
									<Link to={`/`}>
										<Card.Text>product name</Card.Text>
									</Link>
									<div>$ price</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} xs={6}>
						<Card>
							<Link to={`/`}>
								<Card.Img
									src={`${imagePath}black_bg.jpg`}
									fluid
									variant='top'
								/>
							</Link>
							<Card.Body>
								<div className='card-name-price-wrapper'>
									<Link to={`/`}>
										<Card.Text>product name</Card.Text>
									</Link>
									<div>$ price</div>
								</div>
							</Card.Body>
						</Card>
						<Card>
							<Link to={`/`}>
								<Card.Img
									src={`${imagePath}black_bg.jpg`}
									fluid
									variant='top'
								/>
							</Link>
							<Card.Body>
								<div className='card-name-price-wrapper'>
									<Link to={`/`}>
										<Card.Text>product name</Card.Text>
									</Link>
									<div>$ price</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SeasonalProds;
