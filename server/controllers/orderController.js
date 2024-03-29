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

	if (orderItems && orderItems.length === 0) {
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
	const order = await Order.findById(req.params.id).populate(
		'user',
		'name email',
	);

	if (order) {
		res.json(order);
	} else {
		res.status(404);
		throw new Error('Order not found');
	}
});

const updateOrderPaid = asyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id);

	if (order) {
		order.isPaid = true;
		order.paidTimeStamp = Date.now();
		order.paymentResult = {
			id: req.body.id,
			status: req.body.status,
			update_time: req.body.update_time,
			email_address: req.body.payer.email_address,
		};

		const updatedOrder = await order.save();

		res.json(updatedOrder);
	} else {
		res.status(404);
		throw new Error('Order not found');
	}
});

const getUserOrders = asyncHandler(async (req, res) => {
	const userOrders = await Order.find({ user: req.user._id });

	if (userOrders) {
		res.json(userOrders);
	} else {
		res.status(404);
		throw new Error('User orders not found');
	}
});

const getAllOrders = asyncHandler(async (req, res) => {
	const orders = await Order.find({}).populate('user', 'id name');

	if (orders) {
		res.json(orders);
	} else {
		res.status(404);
		throw new Error('Orders not found');
	}
});

export { createOrder, getOrder, updateOrderPaid, getUserOrders, getAllOrders };
