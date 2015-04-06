"use strict";

//
// MODULES
//
var path = require("path");
var express = require("express");
var app = express();
var winston = require("winston");
var MongoClient = require('mongodb').MongoClient;

//
// SERVER VARS
//
var port = 3001;
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
// MONGO VARS
//
//
var db;
var mongoUrl = 'mongodb://localhost:27017/barf'


/***
 *
 *                 _
 *     ___ ___ _ _| |_ ___ ___
 *    |  _| . | | |  _| -_|  _|
 *    |_| |___|___|_| |___|_|
 *
 ***/

MongoClient.connect(mongoUrl, function (err, database) {
  db=database;
  app.listen(port);
});

app.route('/')
.get(function (req, res) {
  res.set('Content-Type', 'application/json');

  res.send({page: 'home'});
});

app.route('/id/:id')
.get(function (req, res) {
  res.set('Content-Type', 'application/json');

  res.send({
    page: 'butts',
    id: req.params.id || false
  });
});

app.route('/mongo/write/test')
.get(function (req, res) {

  db.collection('documents').insert([{a: 1}, {b: 13}, {c: 123}, {hello: 'world'}], function (insertResults) {
    db.collection('documents').find({c: 123}).toArray(function (error, findResults) {
      if (error) {
        res.send({err: error});
      }

      res.send({result: findResults});
    })
  });
});

app.route('/mongo/test')
.get(function (req, res) {
  res.set('Content-Type', 'application/json');

  db.collection('documents').find({a: 1}).toArray(function (err, results) {
    if (err) {
      res.send({error: err});
    }
    res.send({'results': results});
  });
});
