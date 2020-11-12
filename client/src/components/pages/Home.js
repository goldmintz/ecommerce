import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { listProducts } from '../../actions/productActions.js';

import Product from '../features/Product';
import Message from '../layout/Message';
import Loader from '../layout/Loader';

const HomePage = () => {
	// using hooks instead of connect!
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);

	const { products, loading, error } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<>
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger' />
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default HomePage;
