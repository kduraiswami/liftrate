var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

mongoose.connect('mongodb://<user>:<pass>@apollo.modulusmongo.net:27017/oja9Byve')