var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
require('dotenv').load();

mongoose.connect('mongodb://'+ process.env.DB_USER + ':'+ process.env.DB_PASS + process.env.DB_HOST);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());

app.listen(8080)
console.log("Application is on 8080")
