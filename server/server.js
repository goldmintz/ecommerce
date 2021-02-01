import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

import { routeNotFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

//Products Routes
app.use('/api/products', productRoutes);

//User Routes
app.use('/api/users', userRoutes);

//Order Routes
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) =>
	res.send(process.env.PAYPAL_CLIENT_ID),
);

// Error middleware
app.use(routeNotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
	5000,
	console.log(
		`Server running in ${process.env.NODE_ENV} on good ol' Port${PORT}.`,
	),
);
