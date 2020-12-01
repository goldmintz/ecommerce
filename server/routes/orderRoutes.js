import express from 'express';
const router = express.Router();
import {
	createOrder,
	getOrder,
	updateOrderPaid,
	getUserOrders,
	getAllOrders,
} from '../controllers/orderController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

router
	.route('/')
	.post(protect, createOrder)
	.get(protect, isAdmin, getAllOrders);
router.route('/myorders').get(protect, getUserOrders);
router.route('/:id').get(protect, getOrder);
router.route('/:id/pay').put(protect, updateOrderPaid);

export default router;
