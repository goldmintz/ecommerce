import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Products from './data/products.js';
import ProductModel from './models/productModel.js';
import connectDB from './config/db.js';
import Product from './models/productModel.js';
import products from './data/products.js';

dotenv.config();
connectDB();

const importData = async () => {
	try {
        await Products.deleteMany();
        
        const sampleProducts = products.map((product) => {
            
        })

		await Product.insertMany(product);
	} catch (error) {}
};
