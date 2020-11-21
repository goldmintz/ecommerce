import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Form,
} from 'react-bootstrap';
import { listProductDetails } from '../../actions/productActions.js';

import Rating from '../features/Rating';
import Message from '../layout/Message';
import Loader from '../layout/Loader';

const ProductDetail = ({ match, history }) => {
	const dispatch = useDispatch();
	const productDetail = useSelector((state) => state.productDetail);

	useEffect(() => {
		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match]);

	const [quantity, setQuantity] = useState(1);

	const { product, loading, error } = productDetail;

	//Handlers
	const handleQuantChange = (e) => {
		setQuantity(e.target.value);
	};

	const handleAddToCart = () => {
		history.push(`/cart/${match.params.id}?quantity=${quantity}`);
	};

	//Begin render
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

								{product.countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>Quantity</Col>
											<Col>
												<Form.Control
													as='select'
													value={quantity}
													onChange={handleQuantChange}>
													{[...Array(product.countInStock).keys()].map((n) => (
														<option key={n + 1}>{n + 1}</option>
													))}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}

								<ListGroup.Item>
									<Button
										className='btn block'
										type='button'
										disabled={product.countInStock < 1}
										onClick={handleAddToCart}>
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
