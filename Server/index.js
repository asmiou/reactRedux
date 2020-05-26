//On importe les différents module utiles et le fichier routes.js
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const http = require("http");
const router = require('./services/routes');
const mongodb = require('./services/mongoDB');
const config = require('./config');

//On instantie le serveur express
const expressServer = express();

//On demande au serveur d'utiliser les modules importer
expressServer.use(morgan("combined"));
expressServer.use(bodyParser.json({type:'*/*'}));

//Declaration des port
const port = config.port;

const httpServer = http.createServer(expressServer);

router(expressServer);

httpServer.listen(port);
console.log("Server is started on port 3090...")


