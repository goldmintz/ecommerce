import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { listProducts } from '../../actions/productActions.js';

import Product from './ProductCard';
import Loader from '../layout/Loader';
import '../../styles/product/productCard.css';

const ProductSubsets = ({ match }) => {
	const subset = match.params.term;

	const dispatch = useDispatch();
	const { products, loading } = useSelector((state) => state.productList);

	useEffect(() => {
		dispatch(listProducts(subset));
	}, [dispatch, subset]);

	return (
		<>
			<h3>
				Shop{' '}
				{subset
					.toLowerCase()
					.split(' ')
					.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
					.join(' ')}
			</h3>
			<hr />

			<Container fluid>
				{loading ? (
					<Loader />
				) : (
					<Row>
						{products.map((product) => (
							<Col
								key={product._id}
								xs={12}
								md={6}
								lg={3}
								xl={3}
								className='px-3 py-2'>
								<Product product={product} />
							</Col>
						))}
					</Row>
				)}
			</Container>
		</>
	);
};

export default ProductSubsets;
