'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
//var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = (process.env.PORT || 3000);


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.pretty = true;


//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var homeController = require('./controllers/homeController');
var home = new homeController();
app.get('/',home.IndexGet);

app.listen(port, function () {
  console.log('Server Express corriendo en el puerto '+port);
});