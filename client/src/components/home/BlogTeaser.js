import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/home/blogTeaser.css';

const BlogTeaser = () => {
	const imagePath = process.env.PUBLIC_URL + '/images/';

	const TeaserContent = ({ src, heading }) => (
		<div className='teaser-content'>
			<Image src={src} fluid />
			<div>
				<h4 className='teaser-content-heading'>{heading}</h4>
				<p id='teaser-summary'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
					ipsum non metus semper placerat.
				</p>
				<Link className='teaser-content-link' to='/'>
					Read More
				</Link>
			</div>
		</div>
	);

	return (
		<Container fluid className='blog-teaser page-section'>
			<h1 className='section-heading'>From Our Blog</h1>

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
	);
};

export default BlogTeaser;
