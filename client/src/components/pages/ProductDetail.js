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
import {
	listProductDetails,
	createReview,
} from '../../actions/productActions.js';

import { PRODUCT_CREATEREVIEW_RESET } from '../../constants/types';

import Rating from '../features/Rating';
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
	}, [dispatch, match, reviewSuccess]);

	const [quantity, setQuantity] = useState(1);
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');

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
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
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
													{product.countInStock > 0
														? 'In Stock'
														: 'Out of Stock'}
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
														{[...Array(product.countInStock).keys()].map(
															(n) => (
																<option key={n + 1}>{n + 1}</option>
															),
														)}
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

					<Row>
						<Col md={6}>
							<h2>Reviews</h2>
							{reviewError && <Message variant='danger'>{reviewError}</Message>}
							{product.reviews.length === 0 && <Message>No Reviews</Message>}
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
										<Message>
											Please <Link to='/login'>sign in</Link> to add a product
											review.
										</Message>
									)}
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</>
			)}
		</>
	);
};

export default ProductDetail;
