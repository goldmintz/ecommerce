import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import { listProducts } from '../../actions/productActions.js';

import PageTitleMeta from '../layout/PageTitle-Meta';
import Collections from './Collections';
import SeasonalProds from './SeasonalProds';
import HomepageJumbo from './JumboTron';
import Product from '../product/ProductCard';
import BlogTeaser from './BlogTeaser';

const HomePage = ({ match }) => {
	// using hooks instead of connect!
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);

	const { products } = productList;

	const term = match.params.term;

	useEffect(() => {
		//TODO: If term from search or filter, run listProducts, else run listSubset
		dispatch(listProducts(term));
	}, [dispatch, term]);

	return (
		<>
			<PageTitleMeta />
			{/* no term, show everything, otherwise, show just search header (with term) and search results
			 */}
			{term !== undefined ? (
				<>
					<h2>
						Search results for <span id='search-heading-term'>{term}</span>
					</h2>
					<hr></hr>

					{products.length !== 0 ? (
						<Container fluid='true'>
							<Row>
								{products.map((product) => (
									<Col key={product._id} xs={12} md={6} lg={4} xl={3}>
										<Product product={product} />
									</Col>
								))}
							</Row>
						</Container>
					) : (
						<h3>Sorry! No products found.</h3>
					)}
				</>
			) : (
				<>
					<HomepageJumbo />
					<Collections />
					<SeasonalProds />
					<BlogTeaser />
				</>
			)}
		</>
	);
};

export default HomePage;
