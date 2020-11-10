import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useCreateIndex: true,
			useNewUrlParser: true,
		});
		console.log(`MongoDB connected...`);
	} catch (err) {
		console.log(`error: ${err.message}`);
		process.exit(1);
	}
};

export default connectDB;
