import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { listProductDetails } from '../../../actions/productActions';

//components

import FormContainer from '../../layout/Form';

const EditProduct = ({ match, history }) => {
	const productId = match.params.id;

	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState('');
	const [size, setSize] = useState('');
	const [category, setCategory] = useState('');
	const [description, setDescription] = useState('');
	const [countInStock, setCountInStock] = useState(0);

	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetail);

	const { loading, error, product } = productDetails;

	useEffect(() => {
		if (!product.name || product._id !== productId) {
			dispatch(listProductDetails(productId));
		} else {
			setName(product.name);
			setPrice(product.price);
			setImage(product.image);
			setSize(product.size);
			setCategory(product.category);
			setDescription(product.description);
			setCountInStock(product.countInStock);
		}
	}, [dispatch, product, productId]);

	const handleSubmit = (e) => {
		let updatedProduct = {
			name,
			price,
			image,
			size,
			category,
			description,
			countInStock,
		};
		e.preventDefault();
		console.log(updatedProduct);
	};

	return (
		// TODO: Add dropdowns for presets, like size and category
		// TODO: Add dollar sign for price input
		<>
			<Link to='/admin/products' className='btn btn-light my-3'>
				Go Back
			</Link>
			<FormContainer>
				<h1>Edit Product</h1>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type='name'
							placeholder='Enter name'
							value={name}
							onChange={(e) => setName(e.target.value)}></Form.Control>
					</Form.Group>

					<Form.Group controlId='price'>
						<Form.Label>Price</Form.Label>
						<Form.Control
							type='number'
							placeholder='Enter price'
							value={price}
							onChange={(e) => setPrice(e.target.value)}></Form.Control>
					</Form.Group>

					<Form.Group controlId='image'>
						<Form.Label>Image Url</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter image url'
							value={image}
							onChange={(e) => setImage(e.target.value)}></Form.Control>
					</Form.Group>

					<Form.Group controlId='size'>
						<Form.Label>Size</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter size'
							value={size}
							onChange={(e) => setSize(e.target.value)}></Form.Control>
					</Form.Group>

					<Form.Group controlId='category'>
						<Form.Label>Category</Form.Label>
						<Form.Control
							type='text'
							placeholder='Select category'
							value={category}
							onChange={(e) => setCategory(e.target.value)}></Form.Control>
					</Form.Group>

					<Form.Group controlId='description'>
						<Form.Label>Description</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}></Form.Control>
					</Form.Group>

					<Form.Group controlId='countInStock'>
						<Form.Label>Count In Stock</Form.Label>
						<Form.Control
							type='number'
							placeholder='Enter count in stock'
							value={countInStock}
							onChange={(e) => setCountInStock(e.target.value)}></Form.Control>
					</Form.Group>

					<Button
						type='submit'
						variant='primary'
						onClick={(e) => handleSubmit(e)}>
						Update
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};

export default EditProduct;