import React, { Fragment } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogTeaser = () => {
	const TeaserContent = ({ src, heading }) => (
		<Col xs={6} md={4}>
			<Link to={'/'}>
				<Image src={src} fluid />
				<div className='teaser-content'>
					<div className='teaser-content-heading'>{heading}</div>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
						ipsum non metus semper placerat. Aenean mattis commodo sapien
						euismod mattis.
					</div>
					<Link className='teaser-content-link' to='/'>
						Read More
					</Link>
				</div>
			</Link>
		</Col>
	);

	return (
		<Container fluid className='home-section'>
			<Row className='justify-content-md-center'>
				<Col style={{ textAlign: 'center' }}>
					<h3>Our Blog</h3>
					<div className='subheading'>
						Learn more about plant parenthood and other stuff...
					</div>
				</Col>
			</Row>
			<Row className='blog-teaser mx-0 px-0'>
				<TeaserContent src={'/images/green_bg.jpg'} heading={'Blog Post A'} />

				<TeaserContent src={'/images/green_bg.jpg'} heading={'Blog Post B'} />

				<TeaserContent src={'/images/green_bg.jpg'} heading={'Blog Post C'} />
			</Row>
			<Row className='blog-teaser justify-content-md-center'>
				{/* 
                    <Button variant='outline-dark' style={{ width: '30%' }}>
					    View More
                    </Button>
             */}
			</Row>
		</Container>
	);
};

export default BlogTeaser;
