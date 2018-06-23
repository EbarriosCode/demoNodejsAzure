var express = require('express');
var http = require('http');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: './uploads/' });

var port = (process.env.PORT || 3000);


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.pretty = true;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var personajeController = require('./controllers/personajeController');
var personaje = new personajeController();
app.get('/',personaje.IndexGet);
app.get('/Create',personaje.CreateGet);
app.post('/CreatePost',upload.any(),personaje.CreatePost);
app.get('/Edit/:id',personaje.EditGet);
app.post('/EditPost',personaje.EditPost);
app.get('/Delete/:id',personaje.Delete);

app.listen(port, function () {
  console.log('Server Express corriendo en el puerto '+port);
});