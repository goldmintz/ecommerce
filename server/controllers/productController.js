import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const getProducts = asyncHandler(async (req, res) => {
	const term = req.query.term;

	const products = await Product.find().or([
		{ name: { $regex: term, $options: 'i' } },
		{ tags: { $regex: term, $options: 'i' } },
	]);

	if (products) {
		res.json(products);
	} else {
		res.status(404).json({ message: 'no products found' });
	}
});

const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		res.json(product);
	} else {
		res.status(404).json({ message: 'product not found' });
	}
});

const createReview = asyncHandler(async (req, res) => {
	const { rating, comment } = req.body;

	const product = await Product.findById(req.params.id);
	console.log(product);

	if (product) {
		const prevReview = product.reviews.find(
			(r) => r.user.toString() === userId.toString(),
		);

		if (prevReview) {
			res.status(400);
			throw new Error('Product already reviewed');
		}

		const newReview = {
			name: req.user.name,
			rating: Number(rating),
			comment,
			user: req.user._id,
		};

		product.reviews.push(newReview);
		product.numReviews = product.reviews.length;
		product.rating =
			product.reviews.reduce((acc, el) => el.rating + acc, 0) /
			product.reviews.length;

		await product.save();
		res.status(201).json({ message: 'Review successfully added' });
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

//ADMIN ONLY PROTECTED ROUTES
//admin only to delete
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		await product.remove();
		res.json({ message: 'Product removed' });
	} else {
		res.status(404).json({ message: 'product not removed' });
	}
});

//admin only to create
const createProduct = asyncHandler(async (req, res) => {
	const product = new Product({
		name: 'Sample name',
		price: 0,
		user: req.user._id,
		image: 'images/sample.jpg',
		size: 'Sample size',
		category: 'Sample category',
		description: 'Sample description',
		tagline: 'Sample tagline',
		numReviews: 0,
		countInStock: 0,
	});

	const createdProduct = await product.save();
	res.status(201).json(createdProduct);
});

//admin only to update
const updateProduct = asyncHandler(async (req, res) => {
	const {
		name,
		price,
		image,
		size,
		category,
		description,
		countInStock,
		tags,
	} = req.body;

	const product = await Product.findById(req.params.id);
	if (product) {
		(product.name = name),
			(product.price = price),
			(product.image = image),
			(product.size = size),
			(product.category = category),
			(product.description = description),
			(product.countInStock = countInStock);
		product.tags = tags;

		const updatedProduct = await product.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

export {
	getProducts,
	getProductById,
	createReview,
	deleteProduct,
	createProduct,
	updateProduct,
};
