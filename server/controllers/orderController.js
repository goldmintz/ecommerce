import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

const createOrder = asyncHandler(async (req, res) => {
	const {
		orderItems,
		shippingAddress,
		paymentMethod,
		itemsPrice,
		taxPrice,
		shippingPrice,
		totalPrice,
	} = req.body;

	console.log(req.body);

	if (orderItems && orderItems.lenth === 0) {
		res.status(400);
		throw new Error('No Order Items');
	} else {
		const order = new Order({
			user: req.user._id,
			orderItems,
			shippingAddress,
			paymentMethod,
			itemsPrice,
			taxPrice,
			shippingPrice,
			totalPrice,
		});

		const orderCreated = await order.save();

		res.status(201).json(orderCreated);
	}
});

const getOrder = asyncHandler(async (req, res) => {
	const order = await findbyId(req.params.id).populate('user', 'name email');

	if (order) {
		res.json(order);
	} else {
		res.status(401);
		throw new Error('Order not found');
	}
});

export { createOrder, getOrder };
