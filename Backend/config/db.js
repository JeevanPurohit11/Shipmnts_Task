const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

function DbConnect() {
    const DB_URL = process.env.DB_URL;

    // MongoDb Atlas connection
    mongoose.connect(DB_URL, {
    //    useNewUrlParser: true,
    //    useUnifiedTopology: true,
       ssl: true, // Default for Atlas, can be removed or set to true
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error (Not connected):'));
    db.once('open', () => {
        console.log('DB connected...');
    });
}

module.exports = DbConnect;
