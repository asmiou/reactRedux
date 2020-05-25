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
            /*
            mongoose.connection.on('connected', function() { // Hack the database back to the right one, because when using mongodb+srv as protocol. 
                if (mongoose.connection.client.s.url.startsWith('mongodb+srv')) { 
                    mongoose.connection.db = mongoose.connection.client.db('db_redux');
                    console.log(`MongoDB database ${db_name} selected...`) 
                } 
                console.log('Connection to Mongo established...'); 
            });*/
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
    


/*
module.exports = async function main(){
    
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    let databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

*/