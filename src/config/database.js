const mongoose = require('mongoose');

const dbConnection = async () => {
    // connect to the DB
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        console.log(`successfully connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }

}
module.exports = dbConnection;