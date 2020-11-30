import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();
import {
	getProducts,
	getProductById,
	deleteProduct,
} from '../controllers/productController.js';

//Fetch all products
router.route('/').get(getProducts);

//Fetch product by id (and delete, create)
router
	.route('/:id')
	.get(getProductById)
	.delete(protect, isAdmin, deleteProduct);

export default router;
