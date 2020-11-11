import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

//Products Route
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
	5000,
	console.log(
		`Server running in ${process.env.NODE_ENV} on good ol' Port${PORT}.`,
	),
);
