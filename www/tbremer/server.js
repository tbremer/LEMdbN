"use strict";

//
// MODULES
//
var path = require("path");
var express = require("express");
var app = express();
var winston = require("winston");

//
// SERVER VARS
//
var port = 3000;
var assetsDir = {root: path.join(__dirname, 'app/assets')};
var pubDir = {root: path.join(__dirname, 'public/')};
var logsDir = path.join(__dirname, 'logs/');

//
// LOGGING
//
var logger = new (winston.Logger)({
  transports: [
  new (winston.transports.Console)({ level: 'error', colors: true }),
  new (winston.transports.File)({ filename: logsDir + 'server.log', level: 'debug' })
  ]
});

//
// STATIC FILES ROUTE
//
app.use('/assets', express.static(__dirname + '/app/assets'));


/***
 *
 *                 _
 *     ___ ___ _ _| |_ ___ ___
 *    |  _| . | | |  _| -_|  _|
 *    |_| |___|___|_| |___|_|
 *
 ***/
app.get("/", function(req, res) {
  logger.debug('debug', "%s %s %s", req.method, req.url, req.path);
  res.sendFile("index.html", pubDir);
});


app.listen(port, function() {
  console.log("Listening on " + port);
});
