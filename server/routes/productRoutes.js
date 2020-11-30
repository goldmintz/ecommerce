import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();
import {
	getProducts,
	getProductById,
	deleteProduct,
	updateProduct,
	createProduct,
} from '../controllers/productController.js';

//Fetch all products and create new
router.route('/').get(getProducts).post(protect, isAdmin, createProduct);

//Fetch product by id (and delete, create)
router
	.route('/:id')
	.get(getProductById)
	.delete(protect, isAdmin, deleteProduct)
	.put(protect, isAdmin, updateProduct);

export default router;
