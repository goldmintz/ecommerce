import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { listAllOrders } from '../../../actions/orderActions';

//components
import Message from '../../layout/Message';
import Loader from '../../layout/Loader';

const OrderList = ({ history }) => {
	const dispatch = useDispatch();

	const adminOrderList = useSelector((state) => state.adminOrderList);
	const { error, loading, orders, success } = adminOrderList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userDetails } = userLogin;

	useEffect(() => {
		if (userDetails && userDetails.isAdmin) {
			dispatch(listAllOrders());
		} else {
			history.push('/');
		}
	}, [dispatch, userDetails, history]);

	return (
		<>
			<h1>Orders</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Table bordered striped responsive className='table-sm'>
					<thead>
						<tr>
							<th>ID</th>
							<th>User</th>
							<th># of Items</th>
							<th>Total Price</th>
							<th>Paid</th>
							<th>Delivered</th>
						</tr>
					</thead>
					<tbody>
						{orders.map(
							({ _id, user, totalPrice, isPaid, isDelivered, orderItems }) => (
								<tr key={_id}>
									<td>{_id} </td>
									<td>{user}</td>
									<td>{orderItems.length}</td>
									<td>${totalPrice}</td>
									<td>{isPaid ? '✅' : '❌'}</td>
									<td>{isDelivered ? '✅' : '❌'}</td>
								</tr>
							),
						)}
					</tbody>
				</Table>
			)}{' '}
		</>
	);
};

export default OrderList;
