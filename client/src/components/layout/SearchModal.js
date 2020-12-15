import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';

const SearchModal = ({ history, show, handleClose }) => {
	const [term, setTerm] = useState('');
	console.log(term);

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		handleClose();
		if (term.trim()) {
			history.push(`/search/${term}`);
		} else {
			history.push('/');
		}
	};

	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop={true}
				contentClassName='search-modal'>
				<Modal.Header closeButton>Search</Modal.Header>

				<Modal.Body>
					<Form onSubmit={handleSearchSubmit} className='search-input'>
						<Form.Control
							type='text'
							name='term'
							placeholder='Search our products'
							// className='mr-sm-2 ml-sm-5'
							onChange={(e) => setTerm(e.target.value)}></Form.Control>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default SearchModal;
