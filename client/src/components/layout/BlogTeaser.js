import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogTeaser = () => {
	const imagePath = process.env.PUBLIC_URL + '/images/';
	const TeaserContent = ({ src, heading }) => (
		<div id='teaser'>
			<Link to={'/'}>
				<Image src={src} style={{ alignSelf: 'center' }} />
				<div className='teaser-content'>
					<div className='teaser-content-heading'>{heading}</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
						ipsum non metus semper placerat. Aenean mattis commodo sapien
						euismod mattis.
					</p>
					<div className='teaser-content-link' to='/'>
						{`Read More ->`}
					</div>
				</div>
			</Link>
		</div>
	);

	return (
		<>
			<Container fluid id='blog-teaser-header'>
				<h2>From Our Blog</h2>
				<div className='subheading'>
					Learn more about plant parenthood and other stuff...
				</div>
			</Container>
			<hr></hr>
			<Row className='blog-teaser'>
				<TeaserContent
					src={`${imagePath}black_bg.jpg`}
					heading={'Blog Post A'}
				/>
				<TeaserContent
					src={`${imagePath}black_bg.jpg`}
					heading={'Blog Post B'}
				/>
				<TeaserContent
					src={`${imagePath}black_bg.jpg`}
					heading={'Blog Post C'}
				/>
			</Row>
		</>
	);
};

export default BlogTeaser;
