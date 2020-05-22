//On importe les différents module utiles et le fichier routes.js
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const http = require("http");
const router = require('./routes');
const mongoose = require("mongoose");
//const mongodb = require('./mongoDB');

//Connexion à la base de donnée mongoDB
mongoose.connect("mongodb+srv://u_root:u_toor@cluster0-xetmj.mongodb.net/test?retryWrites=true&w=majority/db_redux");
mongoose.connection
    .once('open',()=>console.log("Connected to mongoDB database..."))
    .on('error', error => console.log("Error connexion to mongoDB...", error));


//On instantie le serveur express
const expressServer = express();

//On demande au serveur d'utiliser les modules importer
expressServer.use(morgan("combined"));
expressServer.use(bodyParser.json({type:'*/'}));

//Declaration des port
const port = 3090;

const httpServer = http.createServer(expressServer);

router(expressServer);

httpServer.listen(port);
console.log("Server is started on port 3090...")


