import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import placeholderImg from '../../images/monstera.jpg';

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3' style={{ border: 'none' }}>
			<Link to={`/product/${product._id}`}>
				<Card.Img
					src={placeholderImg}
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
					<Card.Text style={{ padding: '15px' }}>
						{product.description}
					</Card.Text>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default Product;
