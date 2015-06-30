
// requirement set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
require('dotenv').load();

var port = process.env.PORT || 8080

var database = require('./config/database')
var morgan = require('morgan');

var bodyParser = require('body-parser');
var methodOverride = require('method-override')


//actually connect to remote db
mongoose.connect(database.url)

//configure files 
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());

//routes too 
require('./app/routes.js')(app);

app.listen(port)

console.log("Application is on " + port)
