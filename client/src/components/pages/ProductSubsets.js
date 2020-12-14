import React from 'react';

const ProductSubsets = ({ match }) => {
	const subset = match.params.subset;

	return <div>Layout for {subset} here.</div>;
};

export default ProductSubsets;
