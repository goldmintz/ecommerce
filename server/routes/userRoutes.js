import express from 'express';
const router = express.Router();
import {
	authUser,
	getUserProfile,
	registerUser,
	updateUserProfile,
	getUsers,
	deleteUser,
} from '../controllers/userController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);
router.post('/login', authUser);
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

//Admin only
router.route('/').get(protect, isAdmin, getUsers);
router.route('/:id').delete(protect, isAdmin, deleteUser);

export default router;
