import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = () => {
	return (
		<Carousel
			style={{
				height: '100vh',
				marginTop: '80px',
			}}>
			<Carousel.Item interval={5000}>
				<img
					className=' d-block w-100'
					src='/images/black_placeholder.jpg'
					alt='First slide'
					style={{ maxHeight: '80vh' }}
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<img
					className=' d-block w-100'
					src='/images/monstera.jpg'
					alt='Second slide'
					style={{ maxHeight: '80vh' }}
				/>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default ProductCarousel;
