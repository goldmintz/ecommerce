import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
	listProducts,
	deleteProduct,
	createProduct,
} from '../../../actions/productActions';

import {
	PRODUCT_CREATE_RESET,
	PRODUCT_CREATE_SUCCESS,
} from '../../../constants/types';

//components
import Message from '../../layout/Message';
import Loader from '../../layout/Loader';

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
							<th>ID</th>
							<th>Name</th>
							<th>Price</th>
							<th>Size</th>
							<th>Category</th>
							<th>Description</th>
							<th>Count In Stock</th>
						</tr>
					</thead>
					<tbody>
						{products.map(
							({
								_id,
								name,
								price,
								size,
								category,
								description,
								countInStock,
							}) => (
								<tr key={_id}>
									<td>{_id}</td>
									<td>{name}</td>
									<td>${price}</td>
									<td>{category}</td>
									<td>{description}</td>
									<td>{countInStock}</td>
									<td>
										<LinkContainer to={`/admin/product/${_id}/edit`}>
											<Button
												variant='light'
												className='btn-sm'
												style={{
													boxSizing: 'content-box',
													display: 'inline=-block',
													minWidth: '36.5px',
												}}>
												Edit
											</Button>
										</LinkContainer>
										<Button
											variant='danger'
											className='btn-sm py-3'
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
