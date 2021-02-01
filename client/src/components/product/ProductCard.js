import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/product/productCard.css';

const Product = ({ product }) => {
	return (
		<Card className='py-3'>
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} />
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

				<Card.Text id='card-description'>{product.tagline}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
