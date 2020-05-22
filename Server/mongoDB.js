//const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://u_root:u_toor@cluster0-xetmj.mongodb.net/test?retryWrites=true&w=majority";
var MongoClient = require('mongodb').MongoClient;

module.exports = function(){
    MongoClient.connect(uri, function(err, db) {
        if (err) {
          console.log(err);
        }
        
        db.collection('user').find().toArray(function(err, result) {
          if (err) {
            console.log(err);
          }
          console.log(result);
        });
      });
}

    


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