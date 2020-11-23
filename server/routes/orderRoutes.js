import express from 'express';
const router = express.Router();
import {
	createOrder,
	getOrder,
	updateOrderPaid,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, createOrder);
router.route('/:id').get(protect, getOrder);
router.route('/:id/pay').put(protect, updateOrderPaid);
export default router;
