import express from 'express';
const router = express.Router();
import {
	getProducts,
	getProductById,
} from '../controllers/productController.js';

//Fetch all products
router.route('/').get(getProducts);

//Fetch product by id
router.route('/:id').get(getProductById);
export default router;
