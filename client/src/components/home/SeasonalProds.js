import React from 'react';
import { Row, Col, Container, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/home/seasonalProds.css';

const SeasonalProds = () => {
	return (
		<>
			<h1 className='section-heading lg-scrn'>Featured Products</h1>

			<Container fluid={true} className='seasonal-prods page-section px-3'>
				<Row>
					<Col md={6} xs={12} id='seasonal-focus-col'>
						<Image src='/images/green_bg.jpg' />
					</Col>

					{/*This header appears under the focus image only on small screens */}
					<h1 className='section-heading sm-scrn'>Featured Products</h1>

					<Col md={3} xs={6}>
						<Card>
							<Link to={`/`}>
								<Card.Img
									src='/images/green_bg.jpg'
									fluid={true}
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
									src='/images/green_bg.jpg'
									fluid={true}
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
									src='/images/green_bg.jpg'
									fluid={true}
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
									src='/images/green_bg.jpg'
									fluid={true}
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
