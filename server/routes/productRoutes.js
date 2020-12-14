import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();
import {
	getProducts,
	getProductById,
	deleteProduct,
	updateProduct,
	createProduct,
	createReview,
} from '../controllers/productController.js';

//Fetch products (all, by search term, or by tag) and create new
router.route('/').get(getProducts).post(protect, isAdmin, createProduct);

//Fetch product by id (and delete, create)
router
	.route('/:id')
	.get(getProductById)
	.delete(protect, isAdmin, deleteProduct)
	.put(protect, isAdmin, updateProduct);

//Create review
router.route('/:id/reviews').post(protect, createReview);

export default router;
