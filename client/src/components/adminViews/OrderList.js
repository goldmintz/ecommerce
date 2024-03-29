import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { listAllOrders } from '../../actions/orderActions';

//components
import Message from '../layout/Message';
import Loader from '../layout/Loader';

const OrderList = ({ history }) => {
	const dispatch = useDispatch();

	const adminOrderList = useSelector((state) => state.adminOrderList);
	const { error, loading, orders } = adminOrderList;

	console.log('component:', orders);

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
						{orders.map((order) => (
							<tr key={order._id}>
								<td>{order._id} </td>
								<td>{order.user.name}</td>
								<td>{order.orderItems.length}</td>
								<td>${order.totalPrice}</td>
								<td>{order.isPaid ? '✅' : '❌'}</td>
								<td>{order.isDelivered ? '✅' : '❌'}</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}{' '}
		</>
	);
};

export default OrderList;
