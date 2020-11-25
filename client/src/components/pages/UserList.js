import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { listUsers, deleteUser } from '../../actions/userActions';

//components
import Message from '../layout/Message';
import Loader from '../layout/Loader';

const UserList = ({ history }) => {
	const dispatch = useDispatch();

	const userList = useSelector((state) => state.userList);
	const { users, loading, error } = userList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userDetails } = userLogin;

	const userDelete = useSelector((state) => state.userDelete);
	const {
		loading: deleteLoading,
		error: deleteError,
		success: deleteSuccess,
	} = userDelete;

	useEffect(() => {
		if (userDetails && userDetails.isAdmin) {
			dispatch(listUsers());
		} else {
			history.push('/');
		}
	}, [dispatch, userDetails, history, deleteSuccess]);

	const handleUserDelete = (id) => {
		if (window.confirm(`Are you sure you want to delete user ${id}?`)) {
			dispatch(deleteUser(id));
		}
		console.log(id);
	};

	return (
		<>
			<h1>Users</h1>
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
							<th>Email</th>
							<th>Admin</th>
							<th>Manage User</th>
						</tr>
					</thead>
					<tbody>
						{users.map(({ _id, name, email, isAdmin }) => (
							<tr key={_id}>
								<td>{_id}</td>
								<td>{name}</td>
								<td>
									<a href={`mailto:${email}`}>{email}</a>
								</td>
								<td>{isAdmin ? 'Yes' : 'No'}</td>
								<td>
									<LinkContainer to={`/admin/user/${_id}/edit`}>
										<Button variant='light' className='btn-sm'>
											Edit
										</Button>
									</LinkContainer>
									<Button
										variant='danger'
										className='btn-sm'
										onClick={(e) => handleUserDelete(_id)}>
										Delete
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</>
	);
};

export default UserList;
