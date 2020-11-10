import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import axios from 'axios';

import { Row, Col } from 'react-bootstrap';

const HomePage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const { data } = await axios.get('/api/products');
			setProducts(data);
		};
		getProducts();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomePage;
