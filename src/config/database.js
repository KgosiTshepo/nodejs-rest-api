const mongoose = require('mongoose');

const dbConnection = async () => {
	// connect to the DB
	try {
		const conn = await mongoose.connect(process.env.DATABASE_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		console.log(`successfully connected: ${conn.connection.host}`);
		throw new Error('Something unusual happened');
	} catch (error) {
		console.error(error);
	}
};
module.exports = dbConnection;
