import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions.js';

const ProductSubsets = ({ match }) => {
	const subset = match.params.term;

	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);

	console.log(productList);

	useEffect(() => {
		dispatch(listProducts(subset));
	}, [dispatch, subset]);

	return (
		<div>
			<h3>
				Shop{' '}
				{subset
					.toLowerCase()
					.split(' ')
					.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
					.join(' ')}
			</h3>
			<hr />
		</div>
	);
};

export default ProductSubsets;
