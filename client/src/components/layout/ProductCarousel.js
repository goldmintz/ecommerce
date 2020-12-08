import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const ProductCarousel = () => {
	return (
		<Container
			style={{
				maxHeight: '100vh',
				margin: '70px 0px 60px 0px',
				padding: '0px',
			}}>
			<Carousel indicators={false}>
				<Carousel.Item interval={7000}>
					<img
						className=' d-block w-100'
						src='/images/green_bg.jpg'
						alt='Second slide'
					/>
					<Carousel.Caption
						style={{ textAlign: 'left', marginBottom: '100px' }}>
						<h3>Second slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={7000}>
					<img
						className=' d-block w-100'
						src='/images/green_bg.jpg'
						alt='Second slide'
					/>
					<Carousel.Caption
						style={{ textAlign: 'left', marginBottom: '100px' }}>
						<h3>Second slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};

export default ProductCarousel;
