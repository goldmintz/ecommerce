// Error Middleware - Return message for routes
const routeNotFound = (req, res, next) => {
	const error = new Error(`Not found - ${req.originalurl}`);
	res.status(404);
	next(error);
};

//Error Middleware - Return custom error messaging

const errorHandler = (err, req, res, next) => {
	// set any 200 errors to a default of 500

	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.json({
		message: err.message,
		//only use in dev
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	});
};

export { routeNotFound, errorHandler };
