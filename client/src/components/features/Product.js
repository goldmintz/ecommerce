import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3' style={{ border: 'none' }}>
			<Link to={`/product/${product._id}`}>
				<Card.Img
					src={product.image}
					variant='top'
					style={{ objectFit: 'cover' }}
				/>
			</Link>

			<Card.Body>
				<Row>
					<Col>
						<Link to={`/product/${product._id}`}>
							<Card.Text className='name' sm={'8'}>
								{product.name}
							</Card.Text>
						</Link>
					</Col>
					<Col style={{ textAlign: 'right', fontWeight: '400' }} sm={'4'}>
						<Card.Text>${product.price}</Card.Text>
					</Col>
				</Row>
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
