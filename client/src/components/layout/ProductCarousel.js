import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = () => {
	return (
		<Carousel style={{ maxHeight: '80vh' }}>
			<Carousel.Item interval={1000}>
				<img
					className=' d-block w-100'
					src='/images/monstera.jpg'
					alt='First slide'
					style={{ maxHeight: '80vh', background: 'black' }}
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default ProductCarousel;
