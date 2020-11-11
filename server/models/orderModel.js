import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	orderItems: [
		{
			name: {
				type: String,
				required: true,
			},
			quantity: {
				type: Number,
				required: true,
			},
			image: {
				type: String,
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
			product: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: 'Product',
			},
		},
	],
	shippingAddress: {
		address: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		zip: {
			type: String,
			required: true,
		},
	},
	paymentMethod: {
		type: String,
		required: true,
	},
	//Returned from PayPal processing
	paymentResult: {
		id: {
			type: String,
		},
		status: {
			type: String,
		},
		update_time: {
			type: String,
		},
		email_address: {
			type: String,
		},
	},
	taxPrice: {
		type: Number,
		required: true,
		default: 0.0,
	},
	shippingPrice: {
		type: Number,
		required: true,
		default: 0.0,
	},
	totalPrice: {
		type: Number,
		required: true,
		default: 0.0,
	},
	isPaid: {
		type: Boolean,
		required: true,
		default: false,
	},
	paidTimeStamp: {
		type: Date,
	},
	isDelivered: {
		type: Boolean,
		required: true,
		default: false,
	},
	deliveredTimeStamp: {
		type: Date,
	},

	timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
