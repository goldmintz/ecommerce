import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	listProducts,
	deleteProduct,
	createProduct,
	updateProduct,
} from '../../actions/productActions';

import {
	PRODUCT_CREATE_RESET,
	PRODUCT_CREATE_SUCCESS,
} from '../../constants/types';

//components
import Message from '../layout/Message';
import Loader from '../layout/Loader';

const ProductList = ({ history, match }) => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { products, loading, error } = productList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userDetails } = userLogin;

	const deleteState = useSelector((state) => state.productDelete);
	const { success: deleteSuccess } = deleteState;

	const createState = useSelector((state) => state.productCreate);
	const { success: createSuccess, product: createdProduct } = createState;

	const updateState = useSelector((state) => state.productUpdate);
	const { success: updateSuccess } = updateState;

	useEffect(() => {
		dispatch({
			type: PRODUCT_CREATE_RESET,
		});
		if (!userDetails.isAdmin) {
			history.push('/login');
		}
		if (createSuccess) {
			history.push(`/admin/product/${createdProduct._id}/edit`);
		} else {
			dispatch(listProducts());
		}
	}, [
		dispatch,
		userDetails,
		history,
		deleteSuccess,
		createdProduct,
		createSuccess,
		updateSuccess,
	]);

	const handleProductDelete = (id, name) => {
		if (window.confirm(`Are you sure you want to delete ${name}?`)) {
			dispatch(deleteProduct(id));
		}
	};

	const handleCreateProduct = () => {
		dispatch(createProduct());
	};

	return (
		<>
			<Row className='align-item-center'>
				<Col>
					<h1>Products</h1>
				</Col>
				<Col className='text-right'>
					<Button className='my-3' onClick={handleCreateProduct}>
						+ Add New Product
					</Button>
				</Col>
			</Row>

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Table bordered striped responsive className='table-sm'>
					<thead>
						<tr>
							<th>ID (Last 5)</th>
							<th>Name</th>
							<th>Category</th>
							<th>Description</th>
							<th>Price</th>
							<th># In Stock</th>
							<th>Edit/Delete</th>
						</tr>
					</thead>
					<tbody>
						{products.map(
							({ _id, name, price, category, description, countInStock }) => (
								<tr key={_id}>
									<td>{_id.slice(-5)}</td>
									<td>
										<Link to={`/product/${_id}`}>{name}</Link>
									</td>
									<td>{category}</td>
									<td>{`${description.substring(0, 15)}...`}</td>
									<td>${price}</td>
									<td>{countInStock}</td>
									<td>
										<LinkContainer to={`/admin/product/${_id}/edit`}>
											<Button variant='light' className='btn-sm'>
												Edit
											</Button>
										</LinkContainer>
										<Button
											variant='danger'
											className='btn-sm'
											onClick={(e) => handleProductDelete(_id, name)}>
											Delete
										</Button>
									</td>
								</tr>
							),
						)}
					</tbody>
				</Table>
			)}
		</>
	);
};

export default ProductList;
