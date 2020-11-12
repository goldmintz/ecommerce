import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { listProductDetails } from '../../actions/productActions.js';

import Rating from '../features/Rating';
import Message from '../layout/Message';
import Loader from '../layout/Loader';

const ProductDetail = (props) => {
	const dispatch = useDispatch();
	const productDetail = useSelector((state) => state.productDetail);

	useEffect(() => {
		dispatch(listProductDetails(props.match.params.id));
	}, [dispatch, props.match]);

	const { product, loading, error } = productDetail;

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					<Col md={6} className='img-fluid'>
						<Image
							src={product.image}
							alt={product.name}
							fluid
							style={{ objectFit: 'cover' }}
						/>
					</Col>
					<Col md={3}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{product.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
							</ListGroup.Item>
							<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
							<ListGroup.Item>
								Description: {product.description}
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<Card>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row>
										<Col>Price:</Col>
										<Col>
											<strong>{product.price}</strong>
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Status:</Col>
										<Col>
											<strong>
												{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
											</strong>
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Button
										className='btn block'
										type='button'
										disabled={product.countInStock < 1}>
										Add to Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	);
};

export default ProductDetail;
