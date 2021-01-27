import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Button, Form } from 'react-bootstrap';
import {
	listProductDetails,
	createReview,
} from '../../actions/productActions.js';

import { PRODUCT_CREATEREVIEW_RESET } from '../../constants/types';

import Rating from './Rating';
import Message from '../layout/Message';
import Loader from '../layout/Loader';

const ProductDetail = ({ match, history }) => {
	const dispatch = useDispatch();

	const productDetail = useSelector((state) => state.productDetail);
	const { product, loading, error } = productDetail;

	const productCreateReview = useSelector((state) => state.productCreateReview);
	const {
		loading: reviewLoading,
		error: reviewError,
		success: reviewSuccess,
	} = productCreateReview;

	const userLogin = useSelector((state) => state.userLogin);
	const { userDetails } = userLogin;

	useEffect(() => {
		if (reviewSuccess) {
			alert('Review added. Thank you!');
			setRating(0);
			setComment('');
			dispatch({
				type: PRODUCT_CREATEREVIEW_RESET,
			});
		}
		dispatch(listProductDetails(match.params.id));
		//add in case user scrolls down and navigates away, then returns
		window.scrollTo(0, 0);
	}, [dispatch, match, reviewSuccess]);

	const [quantity, setQuantity] = useState(1);
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');

	//Define product image column style
	const imageColStyle = {
		maxHeight: '80vh',
		backgroundImage: `url(${product.image})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	};

	//Handlers
	const handleQuantChange = (e) => {
		setQuantity(e.target.value);
	};

	const handleAddToCart = () => {
		history.push(`/cart/${match.params.id}?quantity=${quantity}`);
	};

	const handleReviewSubmit = (e) => {
		e.preventDefault();
		dispatch(createReview(match.params.id, { rating, comment }));
	};

	//Begin render
	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<div className='product-page-wrapper'>
						<div className='product-content-wrapper'>
							<Row>
								<Col md={6} style={imageColStyle}></Col>
								<Col md={6}>
									<ListGroup>
										<ListGroup.Item id='product-name-price-wrapper'>
											<div id='product-name'>{product.name}</div>
											<div id='product-price'> ${product.price}</div>
										</ListGroup.Item>

										<ListGroup.Item>
											<Rating
												value={product.rating}
												text={`${product.numReviews} reviews`}
											/>
										</ListGroup.Item>
										<ListGroup.Item>
											<Row>
												<Col>
													<strong>Details</strong>
												</Col>
												<Col> {product.description}</Col>
											</Row>
										</ListGroup.Item>

										{product.countInStock > 0 ? (
											<>
												<ListGroup.Item>
													<Row>
														<Col sm={3} id='product-quant'>
															<strong>Quantity</strong>
														</Col>
														<Col sm={3}>
															<Form.Control
																as='select'
																value={quantity}
																onChange={handleQuantChange}>
																{[...Array(product.countInStock).keys()].map(
																	(n) => (
																		<option key={n + 1}>{n + 1}</option>
																	),
																)}
															</Form.Control>
														</Col>
													</Row>
												</ListGroup.Item>
												<ListGroup.Item>
													<Button
														id='product-detail-btn'
														className='btn block'
														style={{ width: '100%' }}
														type='button'
														disabled={product.countInStock < 1}
														onClick={handleAddToCart}>
														{`$${product.price} - Add to Cart`}
													</Button>
												</ListGroup.Item>
											</>
										) : (
											<ListGroup.Item>
												<Button
													className='btn block'
													style={{ width: '100%' }}
													type='button'
													disabled={true}
													onClick={handleAddToCart}>
													Out of Stock
												</Button>
											</ListGroup.Item>
										)}
									</ListGroup>
									<hr></hr>

									<h3 style={{ padding: '15px' }}>Reviews</h3>

									{reviewError && (
										<Message variant='danger'>{reviewError}</Message>
									)}
									{product.reviews.length === 0 && (
										<ListGroup.Item>No Reviews Yet</ListGroup.Item>
									)}
									<ListGroup variant='flush'>
										{product.reviews.map((review) => (
											<ListGroup.Item key={review._id}>
												<strong>{review.name}</strong>
												<Rating value={review.rating} />
												<p>{review.createdAt.substring(0, 10)}</p>
												<p>{review.comment}</p>
											</ListGroup.Item>
										))}
										<ListGroup.Item>
											{userDetails ? (
												<Form onSubmit={handleReviewSubmit}>
													<Form.Group controlId='rating'>
														<Form.Label>Rating</Form.Label>
														<Form.Control
															as='select'
															value={rating}
															required
															onChange={(e) => setRating(e.target.value)}>
															<option value=''>Select Rating</option>
															<option value='1'>1 - Poor</option>
															<option value='2'>2 - OK</option>
															<option value='3'>3 - Meh</option>
															<option value='4'>4 - Great</option>
															<option value='5'>5 - Amazing</option>
														</Form.Control>
													</Form.Group>
													<Form.Group controlId='comment'>
														<Form.Label>Add Comment</Form.Label>
														<Form.Control
															as='textarea'
															row='3'
															value={comment}
															onChange={(e) =>
																setComment(e.target.value)
															}></Form.Control>
													</Form.Group>
													<Button type='submit' variant='primary'>
														Submit Rating
													</Button>
												</Form>
											) : (
												<div>
													Please{' '}
													<Link to='/login' style={{ fontWeight: 'bold' }}>
														{' '}
														sign in
													</Link>{' '}
													to add a product review.
												</div>
											)}
										</ListGroup.Item>
									</ListGroup>
								</Col>
							</Row>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default ProductDetail;