import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/home/blogTeaser.css';

const BlogTeaser = () => {
	const imagePath = process.env.PUBLIC_URL + '/images/';

	const TeaserContent = ({ src, heading }) => (
		<div id='teaser'>
			<Link to={'/'}>
				<Image src={src} style={{ alignSelf: 'center' }} fluid />
				<div className='teaser-content'>
					<div className='teaser-content-heading'>{heading}</div>
					<p id='teaser-summary'>
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
			<Container className='page-section' fluid>
				<div className='section-heading'>
					<h1>From Our Blog</h1>
				</div>

				<Row className='px-3'>
					<Col md={4} xs={6}>
						<TeaserContent
							src={`${imagePath}black_bg.jpg`}
							heading={'Blog Post A'}
						/>
					</Col>
					<Col md={4} xs={6}>
						<TeaserContent
							src={`${imagePath}black_bg.jpg`}
							heading={'Blog Post B'}
						/>
					</Col>
					<Col md={4}>
						<TeaserContent
							src={`${imagePath}black_bg.jpg`}
							heading={'Blog Post C'}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default BlogTeaser;
