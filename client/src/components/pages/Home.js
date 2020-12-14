import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import { listProducts } from '../../actions/productActions.js';

import SeasonalProds from '../layout/SeasonalProds';
import HomepageJumbo from '../layout/JumboTron';
import Product from '../features/Product';
import BlogTeaser from '../layout/BlogTeaser';
import Message from '../layout/Message';
import Loader from '../layout/Loader';

const HomePage = ({ match }) => {
	// using hooks instead of connect!
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);

	const { products, loading, error } = productList;

	const term = match.params.term;

	useEffect(() => {
		//TODO: If term from search or filter, run listProducts, else run listSubset
		dispatch(listProducts(term));
	}, [dispatch, term]);

	return (
		<>
			{!term && <HomepageJumbo />}
			<Container fluid>
				<Row
					className='justify-content-md-center'
					style={{ marginBottom: '20px' }}>
					<Col className='home-filterCol'>
						<div
							className='home-productFilter'
							onClick={(e) => {
								e.preventDefault();
								dispatch(listProducts());
							}}>
							Fresh Picks
						</div>
					</Col>
					<Col className='home-filterCol'>
						<div
							className='home-productFilter'
							onClick={(e) => {
								e.preventDefault();
								dispatch(listProducts('popular'));
							}}>
							Best Sellers
						</div>
					</Col>
					<Col className='home-filterCol'>
						<div
							className='home-productFilter'
							onClick={() => dispatch(listProducts('sale'))}>
							On Sale
						</div>
					</Col>
				</Row>
			</Container>
			<hr />
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>No Products Found</Message>
			) : (
				<>
					<Container fluid>
						<Row>
							{products.map((product) => (
								<Col key={product._id} xs={12} md={6} lg={4} xl={3}>
									<Product product={product} />
								</Col>
							))}
						</Row>
					</Container>
					<SeasonalProds />
					<BlogTeaser />
				</>
			)}
		</>
	);
};

export default HomePage;
