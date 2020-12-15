import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		if (searchTerm.trim()) {
			history.push(`/search/${searchTerm}`);
		} else {
			history.push('/');
		}
	};
	
	return (
		<Form onSubmit={handleSearchSubmit} inline>
			<Form.Control
				type='text'
				name='term'
				placeholder='Search products'
				className='mr-sm-2 ml-sm-5 searchInput'
				
				onChange={(e) => setSearchTerm(e.target.value)}></Form.Control>
			{/*<Button type='submit' variant='outline-success' className='p-3'> 
				Search
			</Button> */}
		</Form>
	);
};

export default SearchBox;
