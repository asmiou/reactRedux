const mongoose = require('mongoose')
const config = require('../../config');

mongoose.Promise = global.Promise

async function myDbConnection() {

    const url = config.db_uri;
    const options = { 
        dbName:config.db_name,
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }

    try {
        let connectionPromise = await mongoose.connect(url, options);
        if (mongoose.connection) {
            console.log('MongoDb connected cuccessfully . . .')
            global.connectionPromise = connectionPromise;
            
        } else { global.connectionPromise = null; 
                 console.log('not connected to DB') }
        return connectionPromise;
    } catch (error) {
        console.log('Error connecting to DB ::', error);
    }
}

module.exports = myDbConnection();