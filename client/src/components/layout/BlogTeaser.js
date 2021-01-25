import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import greenPlaceholder from '../../images/green_bg.jpg';
import blackPlaceholder from '../../images/black_bg.jpg';
import imagePlaceholder from '../../images/blog_teaser.jpg';

const BlogTeaser = () => {
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
			<div id='blog-teaser-header'>
				<h2>From Our Blog</h2>
				<div className='subheading'>
					Learn more about plant parenthood and other stuff...
				</div>
			</div>
			<hr></hr>
			<Row className='blog-teaser'>
				<TeaserContent src={greenPlaceholder} heading={'Blog Post A'} />
				<TeaserContent src={imagePlaceholder} heading={'Blog Post B'} />
				<TeaserContent src={blackPlaceholder} heading={'Blog Post C'} />
			</Row>
		</>
	);
};

export default BlogTeaser;
