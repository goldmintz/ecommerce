import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	return (
		<Card className='my-2 p-3'>
			<Link to={`/product/${product._id}`}>
				<Card.Img
					src={product.image}
					variant='top'
					style={{ objectFit: 'cover' }}
				/>
			</Link>

			<Card.Body>
				<div className='card-name-price-wrapper'>
					<Link to={`/product/${product._id}`} id='card-prod-name'>
						<Card.Text className='name' sm={'8'}>
							{product.name}
						</Card.Text>
					</Link>
					<div id='card-prod-price'>${product.price}</div>
				</div>
				<Row>
					<Card.Text id='card-description'>{product.description}</Card.Text>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default Product;
