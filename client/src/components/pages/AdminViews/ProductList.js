import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../../actions/productActions';

//components
import Message from '../../layout/Message';
import Loader from '../../layout/Loader';

const ProductList = ({ history, match }) => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { products, loading, error } = productList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userDetails } = userLogin;

	useEffect(() => {
		if (userDetails && userDetails.isAdmin) {
			dispatch(listProducts());
		} else {
			history.push('/login');
		}
	}, [dispatch, userDetails, history]);

	const handleProductDelete = (id) => {
		if (window.confirm(`Are you sure you want to delete user ${id}?`)) {
			// DELETE PRODUCTS: dispatch(deleteUser(id));
		}
	};

	const handleCreateProduct = () => {
		console.log('nothing');
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
						</tr>
					</thead>
					<tbody>
						{products.map(
							({ _id, name, price, size, category, description }) => (
								<tr key={_id}>
									<td>{_id}</td>
									<td>{name}</td>
									<td>${price}</td>
									<td>{category}</td>
									<td>{description}</td>
									<td>
										<LinkContainer to={`/admin/product/${_id}/edit`}>
											<Button variant='light' className='btn-sm'>
												Edit
											</Button>
										</LinkContainer>
										<Button
											variant='danger'
											className='btn-sm'
											onClick={(e) => handleProductDelete(_id)}>
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
