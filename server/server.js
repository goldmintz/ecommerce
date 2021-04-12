import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import favicon from 'serve-favicon';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

import { routeNotFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

const __dirname = path.resolve();

app.use(favicon(__dirname + '/client/build/favicon.ico'));

//Products Routes
app.use('/api/products', productRoutes);

//User Routes
app.use('/api/users', userRoutes);

//Order Routes
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) =>
	res.send(process.env.PAYPAL_CLIENT_ID),
);

//Use for production => point to the static build folder

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/client/build')));
	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
	);
} else {
	app.get('/', (req, res) => {
		res.send('API running...');
	});
}

// Error middleware
app.use(routeNotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} on good ol' Port${PORT}.`,
	),
);
