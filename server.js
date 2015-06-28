//import modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//import config file
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//set default 8080
var port = process.env.PORT || 8080;
//put body packages into use of application
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(express.static(__dirname + '/public'));

//routes
require('./app/routes')(app);

//create start logic and give working indication
app.listen(port);
console.log('works on ' + port );

exports = module.exports = app;