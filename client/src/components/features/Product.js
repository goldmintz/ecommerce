import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 text-center' style={{ border: 'none' }}>
			<Link to={`/product/${product._id}`}>
				<Card.Img
					src={product.image}
					variant='top'
					style={{ objectFit: 'cover' }}
				/>
			</Link>
			<Card.Body style={{ contentAlign: 'center' }}>
				<Link to={`/product/${product._id}`}>
					<Card.Title as='div'>{product.name}</Card.Title>
				</Link>
				<Card.Text className='description'>
					Best for: {product.category}
				</Card.Text>
				<Card.Text as='h3' className='price'>
					${product.price}
				</Card.Text>
				<Button variant='outline-dark' style={{ width: '100%' }}>
					{' '}
					<span>
						<i class='fas fa-shopping-basket'></i>
					</span>
					Add to Cart
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Product;
