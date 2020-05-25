const mongoose = require('mongoose')
mongoose.Promise = global.Promise

async function myDbConnection() {

    const url = "mongodb+srv://u_root:u_toor@cluster0-xetmj.mongodb.net?retryWrites=true&w=majority";
    const options = { 
        dbName:"db_redux",
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